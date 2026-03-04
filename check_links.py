import re, os
def check_links(file_path, base_href_prefix, services_dir):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    links = re.findall(r'href=[\"\'\']('+base_href_prefix+r'[^\"\'\']*)[\"\'\']', content)
    links = set(links)
    valid_files = [f.replace('.html','') for f in os.listdir(services_dir) if f.endswith('.html')]
    for link in links:
        service_name = link.replace(base_href_prefix, '')
        if service_name not in valid_files:
            print(f'BROKEN in {file_path}: {link} (Expected {service_name}.html to exist in {services_dir})')

check_links('index.html', '/services/', 'services')
check_links('ru/index.html', '/ru/services/', 'ru/services')
check_links('en/index.html', '/en/services/', 'en/services')
