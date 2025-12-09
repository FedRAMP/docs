import os
import subprocess
import json


def find_earliest_commit(file_path, search_text):
    try:
        # Run git log command
        # -S looks for the string's introduction/removal
        # --reverse puts the oldest commit at the top
        # --format controls the output style
        # cmd = [
        #     'git', 'log', '-S', search_text,
        #     '--reverse', '--format=Commit: %H | Date: %ad | Author: %an | Message: %s | Link: https://raw.githubusercontent.com/FedRAMP/docs/%H/data/FRMR.ADS.authorization-data-sharing.json',
        #     '--date=short',
        #     '--', file_path
        # ]

        cmd = [
            'git', 'log', '-S', search_text,
            '--reverse', '--format=%H',
            '--', file_path
        ]

        print(f"Running command: {' '.join(cmd)}")

        result = subprocess.check_output(cmd, text=True)

        if result:
            # The first line is the earliest commit
            earliest_commit = result.strip().split('\n')[0]
            print(f"Found: {earliest_commit}")
            return earliest_commit
        else:
            print(f"Text '{search_text}' not found in the history of {file_path}")
            return None

    except subprocess.CalledProcessError as e:
        print(f"Git command failed: {e}")
    except Exception as e:
        print(f"An error occurred: {e}")


# Example usage for your specific file
file_path = "/Users/danielechandler/PycharmProjects/docs/"
for file in os.listdir(file_path):
    file_name = file
    release_list = []
    print(file_name)
    if file_name.startswith("FRMR") and file_name.endswith(".json"):
        with open(os.path.join(file_path,file_name)) as f:
            content = json.load(f)
            for release in content["info"]["releases"]:
                text_to_find = release["id"]
                earliest_commit_hash = find_earliest_commit(os.path.join(file_path,file_name), text_to_find)
                release["direct_link"] = f'https://raw.githubusercontent.com/FedRAMP/docs/{earliest_commit_hash}/data/{file_name}'
                release_list.append(release)
            content["info"]["releases"] = release_list
            with open(os.path.join(file_path,file_name), 'w') as outfile:
                json.dump(content, outfile, indent=4)