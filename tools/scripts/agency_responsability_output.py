import json

with open("/Users/danielechandler/PycharmProjects/docs/FRMR.documentation.json") as f:
    frmr_dict = json.load(f)

ksi_dict = frmr_dict["KSI"]

# Get a list of the KSIs with agency responsibilities
ksi_list = []
ctrl_list = []
for ksi_theme_key, ksi_theme in ksi_dict.items():
    for indicator_key, indicator in ksi_theme["indicators"].items():
        if "agency_responsibility" in indicator.keys():
            ksi_id = indicator_key
            ksi_name = indicator["name"]
            for agency_responsibility in indicator["agency_responsibility"]:
                for ctrl in indicator["controls"]:
                    new_dict = {
                        "ksi_id": ksi_id,
                        "ksi_name": ksi_name,
                        "ctrl_id": ctrl,
                        "agency_responsibility": agency_responsibility,
                        }
                    ctrl_list.append(new_dict)

from collections import defaultdict

by_ctrl = defaultdict(list)
by_responsibility = defaultdict(list)
by_ksi = defaultdict(list)

for item in ctrl_list:
    by_ksi[item["ksi_id"]].append(item["agency_responsibility"])
    by_ctrl[item["ctrl_id"]].append(item["agency_responsibility"])
    by_responsibility[item["agency_responsibility"]].append(item["ctrl_id"])

by_ksi = dict(by_ksi)
for k, v in by_ksi.items():
    by_ksi[k] = sorted(list(set(v)))
by_ctrl = dict(by_ctrl)
for k, v in by_ctrl.items():
    by_ctrl[k] = sorted(list(set(v)))
by_ctrl = dict(sorted(by_ctrl.items()))

by_responsibility = dict(by_responsibility)
for k, v in by_responsibility.items():
    by_responsibility[k] = sorted(list(set(v)))

with open("agency_responsibilities.md", "w") as f:
    f.write("## By KSI\n\n")
    for k, v in by_ksi.items():
        f.write(f"**{k}:**\n- {'\n- '.join(v)}\n\n")
    f.write("\n## By Control\n\n")
    for k, v in by_ctrl.items():
        f.write(f"**{k}:**\n- {'\n- '.join(v)}\n\n")
    f.write("\n## By Responsibility\n\n")
    for k, v in by_responsibility.items():
        f.write(f"**{k}**\n\nControl IDs: {', '.join(v)}\n\n")
