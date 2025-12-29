from plugin import postprocess_site

if __name__ == "__main__":
    postprocess_site(
        site_dir="static/html",  # Your build output directory
        docs_dir="static/markdown",  # Your source docs directory
        site_url="https://fedramp.gov/docs",
        default_image="https://www.fedramp.gov/fedramp-logo-inverse.svg",
        default_author="pete@fedramp.gov",
        add_desc=True,
        add_image=True,
        add_keywords=True,
        add_authors=False,
        add_json_ld=True,
        add_share_buttons=True,
        add_css=True,
        add_copy_llm=True,
        verbose=True,
    )