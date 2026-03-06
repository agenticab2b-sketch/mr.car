import os
import re

def fix_seo_issues(directory):
    html_files = []
    js_files = []
    for root, dirs, files in os.walk(directory):
        if 'node_modules' in root or '.git' in root or '.firebase' in root or '.gemini' in root:
            continue
        for file in files:
            if file.endswith('.html'):
                html_files.append(os.path.join(root, file))
            elif file.endswith('.js'):
                js_files.append(os.path.join(root, file))

    all_files = html_files + js_files

    for filepath in all_files:
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
        except Exception as e:
            print(f"Error reading {filepath}: {e}")
            continue

        original_content = content

        # 1. Fix 404: to-diagnostika -> tehobsluzhivanie-diagnostika
        content = content.replace('to-diagnostika', 'tehobsluzhivanie-diagnostika')

        # 2. Fix 301: Remove .html from internal links
        # Matches href="/something.html" or href="something.html"
        # Be careful not to replace external links ending in .html or canonical tags if they need .html (though cleanUrls implies they don't)
        # We will only target specific known pages to be safe, or just use regex for local links.
        # Let's target href="/..."
        content = re.sub(r'href=["\'](/[^"\']+)\.html["\']', r'href="\1"', content)

        # 3. Fix 301: Remove trailing slashes from language roots (except root /)
        # href="/ru/" -> href="/ru"
        # href="/en/" -> href="/en"
        content = re.sub(r'href=["\']/ru/["\']', r'href="/ru"', content)
        content = re.sub(r'href=["\']/en/["\']', r'href="/en"', content)

        # Let's also check for canonical links just in case they have .html or trailing slashes
        content = re.sub(r'href=["\'](https://www.mrcar.ee/[^"\']+)\.html["\']', r'href="\1"', content)
        content = re.sub(r'href=["\'](https://www.mrcar.ee/(ru|en))/["\']', r'href="\1"', content)

        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed SEO issues in: {filepath}")

if __name__ == "__main__":
    fix_seo_issues('.')
