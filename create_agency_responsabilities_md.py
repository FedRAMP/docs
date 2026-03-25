import json
from pathlib import Path

input_path = Path("/Users/danielechandler/PycharmProjects/docs/agency_responsibility_grouped.json")
output_path = Path("/Users/danielechandler/PycharmProjects/docs/agency_responsibility_grouped.md")

with input_path.open("r", encoding="utf-8") as f:
    grouped = json.load(f)

def format_controls(controls):
    return ", ".join(controls) if controls else "None"

def format_responsibility(value):
    if isinstance(value, list):
        if not value:
            return "None"
        return "\n".join(f"- {item}" for item in value if item)
    return value or "None"

lines = ["# Agency Responsibility Grouped", ""]

for agency_process in sorted(grouped.keys()):
    lines.append(f"## {agency_process}")
    lines.append("")

    items = sorted(grouped[agency_process], key=lambda x: x.get("id", ""))

    for item in items:
        lines.append(f"### {item.get('id', 'Unknown ID')}")
        lines.append("")
        lines.append(f"- **Statement:** {item.get('statement', 'None')}")
        lines.append(f"- **Controls:** {format_controls(item.get('controls', []))}")
        lines.append(f"- **Agency Responsibility:**")
        responsibility = format_responsibility(item.get("agency_responsibility"))
        if responsibility == "None":
            lines.append("  - None")
        else:
            for line in responsibility.splitlines():
                lines.append(f"  {line}")
        lines.append("")

with output_path.open("w", encoding="utf-8") as f:
    f.write("\n".join(lines))

print(f"Wrote markdown to {output_path}")