import json


def buildKSIentry(ksi):
    if 'retired' in ksi.keys():
        if ksi['retired']:
            return None, None
    else:
        ksi_title = f"{ksi['id']} {ksi['name']}"
        ksi_description = f"{ksi['statement']}"
        if 'reference_url' in ksi.keys():
            ksi_description += f"\n{ksi['reference_url']}"
    ksi_key = ksi['id']
    ksi_entry = {
        "type": "array",
        "title": ksi_title,
        "description": ksi_description,
        "items": {"$ref": "#/$defs/securityObjective"}
    }
    return ksi_key, ksi_entry


with open("/Users/danielechandler/PycharmProjects/docs/data/FRMR.KSI.key-security-indicators.json", "r") as fh:
    # get the template json schema
    json_schema_file = open("/Users/danielechandler/PycharmProjects/docs/tools/20xAssesmentTool/20xSubmissionSchema.json", "r")
    json_schema_dict = json.load(json_schema_file)
    json_schema_file.close()

    #get the KSIs
    ksi_dict = json.load(fh)
    for ksi_theme in ksi_dict['KSI'].keys():
        for ksi in ksi_dict['KSI'][ksi_theme]['indicators']:
            print(ksi)
            ksi_key, ksi_entry = buildKSIentry(ksi)
            if ksi_key is not None:
                json_schema_dict['properties']['keySecurityIndicators']['properties'][ksi_key] = ksi_entry

with open("/Users/danielechandler/PycharmProjects/docs/tools/20xAssesmentTool/20xAssesmentForm.json", "w") as fh:
    fh.write(json.dumps(json_schema_dict, indent=4))