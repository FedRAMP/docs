#!/usr/bin/env python3
import json
import sys
from typing import Any, Iterator, Tuple

def iter_fka(root: Any) -> Iterator[Tuple[str, Any]]:
    """
    Walk any JSON-like structure (dict/list/scalars).
    For any dict that contains an 'fka' field, yield (object_key, fka_value),
    where object_key is the dict key that points to that object (if known).
    """
    def walk(node: Any, parent_key: str | None) -> Iterator[Tuple[str, Any]]:
        if isinstance(node, dict):
            if "fka" in node and parent_key is not None:
                yield (parent_key, node["fka"])

            for k, v in node.items():
                yield from walk(v, k)

        elif isinstance(node, list):
            for item in node:
                yield from walk(item, parent_key)

    yield from walk(root, None)

def main() -> int:
    if len(sys.argv) != 2:
        print(f"Usage: {sys.argv[0]} <file.json>", file=sys.stderr)
        return 2

    with open(sys.argv[1], "r", encoding="utf-8") as f:
        data = json.load(f)

    with open("fka_lookup.csv", "w", encoding="utf-8") as f:
        f.write(f"'New ID', 'Old ID'\n")

        for obj_key, fka_value in iter_fka(data):
            f.write(f"'{obj_key}', '{fka_value}'\n")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())