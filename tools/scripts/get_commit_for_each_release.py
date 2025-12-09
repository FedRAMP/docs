import os
import subprocess
import json


def find_earliest_commit(file_path, search_text):
    try:
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
# Get git repository root path
try:
    repo_root = subprocess.check_output(['git', 'rev-parse', '--show-toplevel'], text=True).strip()
except subprocess.CalledProcessError as e:
    print(f"Failed to get repository root: {e}")
    exit(1)
for file in os.listdir(repo_root):
    file_name = file
    release_list = []
    print(file_name)
    if file_name.startswith("FRMR") and file_name.endswith(".json"):
        with open(os.path.join(repo_root,file_name)) as f:
            content = json.load(f)
            for release in content["info"]["releases"]:
                text_to_find = release["id"]
                earliest_commit_hash = find_earliest_commit(os.path.join(repo_root,file_name), text_to_find)
                release["machine_readable_link"] = f'https://raw.githubusercontent.com/FedRAMP/docs/{earliest_commit_hash}/data/{file_name}'
                release_list.append(release)
            content["info"]["releases"] = release_list
            with open(os.path.join(repo_root,file_name), 'w') as outfile:
                json.dump(content, outfile, indent=4)