import os
import subprocess
import json
from datetime import datetime, timedelta


def find_earliest_commit(file_path, search_text, until_date=None):
    try:
        result = git_log_search(file_path, search_text, until_date)

        if result:
            # The first line is the earliest commit
            earliest_commit_link = build_github_link(result, 'root')
            return earliest_commit_link
        else:
            print(f"Text '{search_text}' not found in the history of {file_path}")
            print("Checking previous file locations...")
            # FRMR JSON files used to be in a data subdirectory.
            file_path = os.path.join(repo_root, "data", file_name)
            result = git_log_search(file_path, search_text, until_date)
            if result:
                # The first line is the earliest commit
                earliest_commit_link = build_github_link(result, 'data')
                return earliest_commit_link
            else:
                print("Text not found in any known location.")
                return None

    except subprocess.CalledProcessError as e:
        print(f"Git command failed: {e}")
    except Exception as e:
        print(f"An error occurred: {e}")


def build_github_link(commit_hash: str, file_location: str = 'root'):
    earliest_commit = commit_hash.strip().split('\n')[0]
    print(f"Found: {earliest_commit}")
    if file_location == 'root':
        earliest_commit_link = f'https://raw.githubusercontent.com/FedRAMP/docs/{earliest_commit}/{file_name}'
    elif file_location == 'data':
        earliest_commit_link = f'https://raw.githubusercontent.com/FedRAMP/docs/{earliest_commit}/data/{file_name}'
    else:
        print(f"Invalid file location: {file_location}")
        return None
    return earliest_commit_link


def git_log_search(file_path, search_text, until_date) -> str:
    search_date = (datetime.strptime(until_date, "%Y-%m-%d") + timedelta(days=1)).strftime("%Y-%m-%d")
    cmd = ['git', 'log', '--follow', '-S', search_text, f'--until="{search_date}"', '--reverse', '--format=%H', '--', file_path]
    # cmd = ['git', 'log', '--follow', '-S', search_text, '--reverse', '--format=%H', '--', file_path]

    print(f"Running command: {' '.join(cmd)}")

    result = subprocess.check_output(cmd, text=True)
    return result


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
                until_date = release["published_date"]
                
                earliest_commit_link = find_earliest_commit(os.path.join(repo_root, file_name), text_to_find, until_date)
                release["machine_readable_link"] = earliest_commit_link
                release_list.append(release)
            content["info"]["releases"] = release_list
            with open(os.path.join(repo_root,file_name), 'w') as outfile:
                json.dump(content, outfile, indent=4)