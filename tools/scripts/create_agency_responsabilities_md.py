import json
from pathlib import Path
from typing import Any, Iterator, Tuple

def find_agency_responsibility(root: Any) -> Iterator[Tuple[str, Any]]:
    def walk(node: Any, parent_key: str | None) -> Iterator[Tuple[str, Any]]:
        if isinstance(node, dict):
            if "agency_responsibility" in node and parent_key is not None:
                yield parent_key, node

            for k, v in node.items():
                yield from walk(v, k)

        elif isinstance(node, list):
            for item in node:
                yield from walk(item, parent_key)

    yield from walk(root, None)

input_path = Path("/Users/danielechandler/PycharmProjects/docs/FRMR.documentation.json")

with input_path.open("r", encoding="utf-8") as f:
    frmr_docs = json.load(f)

with open("agency_responsibilities.md", "w", encoding="utf-8") as f:
    for obj_key, obj in find_agency_responsibility(frmr_docs):
        f.write(f"## {obj_key} - {obj['name']}\n\n")
        for item in obj['agency_responsibility']:
            f.write(f"- {item}\n")
        f.write("\n")