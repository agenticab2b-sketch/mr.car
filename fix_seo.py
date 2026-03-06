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

        # 1. ROLLBACK PREVIOUS ERROR (Safety check)
        content = content.replace('webastehobsluzhivanie-diagnostika', 'webasto-diagnostika')

        # 2. Fix 404: to-diagnostika -> tehobsluzhivanie-diagnostika
        content = content.replace('/services/to-diagnostika', '/services/tehobsluzhivanie-diagnostika')
        content = content.replace('"ru": "to-diagnostika"', '"ru": "tehobsluzhivanie-diagnostika"')

        # 3. Fix 301: Remove .html from internal links
        content = re.sub(r'href=["\'](/[^"\']+)\.html["\']', r'href="\1"', content)

        # 4. Fix 301: Remove trailing slashes from all internal links
        # href="/something/" -> href="/something"
        # Avoid root "/"
        content = re.sub(r'href=["\'](/[^"\']+)/["\']', r'href="\1"', content)

        # 5. Fix 301: Handle language roots specially if needed (already handled by rule 4, but let's be sure)
        # href="/ru/" -> href="/ru"
        
        # 6. Fix canonical links (Remove .html and trailing slash)
        content = re.sub(r'href=["\'](https://www.mrcar.ee/[^"\']+)\.html["\']', r'href="\1"', content)
        # Remove trailing slash from canonical
        content = re.sub(r'(<link rel="canonical" href="https://www.mrcar.ee/[^"]+)/"', r'\1"', content)

        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed SEO issues in: {filepath}")

if __name__ == "__main__":
    fix_seo_issues('.')
