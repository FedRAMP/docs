from plugin import postprocess_site

if __name__ == "__main__":
    postprocess_site(
        site_dir="html",
        docs_dir="content",
        site_url="https://fedramp.gov/legacy/",
        default_image="https://www.fedramp.gov/feature-background.jpg",
        default_author="pete@fedramp.gov",
        add_desc=True,
        add_image=True,
        add_keywords=True,
        add_authors=False,
        add_json_ld=True,
        add_share_buttons=False,
        add_css=False,
        add_copy_llm=False,
        verbose=True,
    )
