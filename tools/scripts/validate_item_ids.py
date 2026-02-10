#!/usr/bin/env python3
"""
Fix ID keys in a JSON document where, *within any object named "data"*,
any key that looks like XXX-XXX-XXX must have its middle XXX equal to the
key of its immediate parent object.

Example:
  parent key: "CSX"
  child key:  "ADS-CXX-UTC"   -> middle is "CXX" (wrong) -> fix to "ADS-CSX-UTC"

When a fix is applied, the script appends an entry to the fixed item's
"updated" list (creating it if needed).

Usage:
  python fix_ids.py input.json -o output.json
  python fix_ids.py input.json --in-place
"""

from __future__ import annotations

import argparse
import copy
import json
import re
from datetime import date
from pathlib import Path
from typing import Any, Dict, List, Tuple

ID_KEY_RE = re.compile(r"^([A-Za-z0-9]+)-([A-Za-z0-9]+)-([A-Za-z0-9]+)$")


def is_mapping(x: Any) -> bool:
    return isinstance(x, dict)


def is_sequence(x: Any) -> bool:
    return isinstance(x, list)


def ensure_updated_entry(obj: Dict[str, Any], comment: str, entry_date: str) -> None:
    entry = {"date": entry_date, "comment": comment}
    updated = obj.get("updated")

    if updated is None:
        obj["updated"] = [entry]
        return

    if isinstance(updated, list):
        updated.append(entry)
        return

    # If it's something unexpected (string/object), preserve it but normalize
    obj["updated"] = [updated, entry]


def fix_data_block(
    data_block: Dict[str, Any],
    *,
    entry_date: str,
    fixes: List[Dict[str, Any]],
    path: str,
) -> None:
    """
    Traverse any dict under "data". Whenever we find a dict whose parent key is P,
    and it contains keys matching XXX-XXX-XXX, enforce middle segment == P.
    """
    def walk(node: Any, parent_key: str | None, node_path: str) -> None:
        if is_mapping(node):
            # If we're inside a mapping, and we have a parent_key, we can validate keys here
            if parent_key is not None:
                keys = list(node.keys())
                rename_plan: List[Tuple[str, str]] = []

                for k in keys:
                    m = ID_KEY_RE.match(k)
                    if not m:
                        continue

                    left, mid, right = m.group(1), m.group(2), m.group(3)
                    if mid == parent_key:
                        continue

                    new_key = f"{left}-{parent_key}-{right}"

                    # Avoid collisions; if collision, skip and record
                    if new_key in node and new_key != k:
                        fixes.append(
                            {
                                "path": node_path,
                                "status": "skipped_collision",
                                "parent": parent_key,
                                "old_key": k,
                                "new_key": new_key,
                            }
                        )
                        continue

                    rename_plan.append((k, new_key))

                # Apply renames after scanning to avoid iterator issues
                for old_key, new_key in rename_plan:
                    item = node.pop(old_key)
                    node[new_key] = item

                    if is_mapping(item):
                        ensure_updated_entry(
                            item,
                            comment=(
                                f'Auto-fix: key "{old_key}" middle segment did not match parent "{parent_key}". '
                                f'Renamed to "{new_key}".'
                            ),
                            entry_date=entry_date,
                        )

                    fixes.append(
                        {
                            "path": node_path,
                            "status": "fixed",
                            "parent": parent_key,
                            "old_key": old_key,
                            "new_key": new_key,
                        }
                    )

            # Recurse: for each child, parent_key becomes the current dict key (when recursing into its value)
            for k, v in list(node.items()):
                next_path = f"{node_path}.{k}" if node_path else k
                walk(v, k, next_path)

        elif is_sequence(node):
            for i, v in enumerate(node):
                next_path = f"{node_path}[{i}]"
                walk(v, parent_key, next_path)

        # scalars: stop

    walk(data_block, parent_key=None, node_path=path)


def fix_ids(doc: Any, *, entry_date: str) -> Tuple[Any, List[Dict[str, Any]]]:
    fixed = copy.deepcopy(doc)
    fixes: List[Dict[str, Any]] = []

    def walk(node: Any, node_path: str) -> None:
        if is_mapping(node):
            # If we find a key literally named "data", apply the special rule within it.
            if "data" in node and is_mapping(node["data"]):
                fix_data_block(
                    node["data"],
                    entry_date=entry_date,
                    fixes=fixes,
                    path=f"{node_path}.data" if node_path else "data",
                )

            for k, v in node.items():
                next_path = f"{node_path}.{k}" if node_path else k
                walk(v, next_path)

        elif is_sequence(node):
            for i, v in enumerate(node):
                walk(v, f"{node_path}[{i}]")

    walk(fixed, "")
    return fixed, fixes


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("input", type=Path, help="Input JSON file")
    ap.add_argument("-o", "--output", type=Path, help="Output JSON file (default: <input>.fixed.json)")
    ap.add_argument("--in-place", action="store_true", help="Overwrite input file (creates <input>.bak)")
    ap.add_argument(
        "--date",
        default=date.today().isoformat(),
        help='Date to use in "updated" entries (default: today, YYYY-MM-DD)',
    )
    ap.add_argument("--report", type=Path, help="Write a JSON report of fixes to this path")
    ap.add_argument("--sort-keys", action="store_true", help="Sort keys when writing JSON")
    args = ap.parse_args()

    raw = args.input.read_text(encoding="utf-8")
    doc = json.loads(raw)

    fixed, fixes = fix_ids(doc, entry_date=args.date)

    if args.in_place:
        backup = args.input.with_suffix(args.input.suffix + ".bak")
        backup.write_text(raw, encoding="utf-8")
        out_path = args.input
    else:
        out_path = args.output or args.input.with_suffix(".fixed.json")

    out_path.write_text(
        json.dumps(fixed, indent=2, ensure_ascii=False, sort_keys=args.sort_keys) + "\n",
        encoding="utf-8",
    )

    if args.report:
        args.report.write_text(
            json.dumps(
                {
                    "input": str(args.input),
                    "output": str(out_path),
                    "fix_count": sum(1 for f in fixes if f["status"] == "fixed"),
                    "skipped_collision_count": sum(1 for f in fixes if f["status"] == "skipped_collision"),
                    "fixes": fixes,
                },
                indent=2,
                ensure_ascii=False,
            )
            + "\n",
            encoding="utf-8",
        )

    # Minimal console summary
    fixed_count = sum(1 for f in fixes if f["status"] == "fixed")
    skipped = sum(1 for f in fixes if f["status"] == "skipped_collision")
    print(f"Wrote: {out_path}")
    print(f"Fixed keys: {fixed_count}")
    if skipped:
        print(f"Skipped (collisions): {skipped}")
    if args.in_place:
        print(f"Backup: {backup}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())