import os
import glob
import re

et_items = [
    {"href": "/services/autoremont", "icon": "mdi:wrench", "text": "Autoremont"},
    {"href": "/services/summutid-keevitus", "icon": "mdi:fire", "text": "Summuti ja Keevitustööd"},
    {"href": "/services/veermik-pidurid", "icon": "mdi:car-brake-alert", "text": "Veermiku ja Pidurite remont"},
    {"href": "/services/rehvitood", "icon": "mdi:tire", "text": "Rehvitööd"},
    {"href": "/services/hooldus-diagnostika", "icon": "mdi:car-cog", "text": "Hooldus ja Diagnostika"},
    {"href": "/services/kaigukastiremont", "icon": "mdi:car-shift-pattern", "text": "Käigukasti tööd"},
    {"href": "/services/elektritood", "icon": "mdi:lightning-bolt", "text": "Elektritööd"},
    {"href": "/services/mootoriremont", "icon": "mdi:engine", "text": "Mootori tööd"},
    {"href": "/services/olivahetus", "icon": "mdi:oil", "text": "Õli ja Filtrite vahetus"},
    {"href": "/services/ostueelne-kontroll", "icon": "mdi:file-search-outline", "text": "Enne Ostu Kontroll"},
    {"href": "/services/kliimahooldus", "icon": "mdi:snowflake", "text": "Kliima ja Konditsioneer"},
    {"href": "/services/webasto-diagnostika", "icon": "mdi:radiator", "text": "Webasto remont"}
]

ru_items = [
    {"href": "/ru/services/autoremont", "icon": "mdi:wrench", "text": "Ремонт автомобилей"},
    {"href": "/ru/services/glushiteli-svarka", "icon": "mdi:fire", "text": "Глушители и сварка"},
    {"href": "/ru/services/hodovaya-tormoza", "icon": "mdi:car-brake-alert", "text": "Ходовая и тормоза"},
    {"href": "/ru/services/shinomontazh", "icon": "mdi:tire", "text": "Шиномонтаж"},
    {"href": "/ru/services/tehobsluzhivanie-diagnostika", "icon": "mdi:car-cog", "text": "ТО и диагностика"},
    {"href": "/ru/services/remont-kpp", "icon": "mdi:car-shift-pattern", "text": "Ремонт КПП"},
    {"href": "/ru/services/elektrika", "icon": "mdi:lightning-bolt", "text": "Электроработы"},
    {"href": "/ru/services/remont-dvigatelya", "icon": "mdi:engine", "text": "Ремонт двигателя"},
    {"href": "/ru/services/zamena-masla", "icon": "mdi:oil", "text": "Замена масла и фильтров"},
    {"href": "/ru/services/proverka-pered-pokupkoy", "icon": "mdi:file-search-outline", "text": "Проверка перед покупкой"},
    {"href": "/ru/services/klimat-konditsioner", "icon": "mdi:snowflake", "text": "Климат и кондиционер"},
    {"href": "/ru/services/webasto", "icon": "mdi:radiator", "text": "Ремонт Webasto"}
]

en_items = [
    {"href": "/en/services/general-car-repair", "icon": "mdi:wrench", "text": "Car Repair"},
    {"href": "/en/services/exhaust-welding", "icon": "mdi:fire", "text": "Exhaust & Welding"},
    {"href": "/en/services/chassis-brakes", "icon": "mdi:car-brake-alert", "text": "Suspension & Brakes"},
    {"href": "/en/services/tire-service", "icon": "mdi:tire", "text": "Tire Services"},
    {"href": "/en/services/maintenance-diagnostics", "icon": "mdi:car-cog", "text": "Maintenance & Diagnostics"},
    {"href": "/en/services/transmission-repair", "icon": "mdi:car-shift-pattern", "text": "Gearbox Repair"},
    {"href": "/en/services/electrical-repair", "icon": "mdi:lightning-bolt", "text": "Electrical Works"},
    {"href": "/en/services/engine-repair", "icon": "mdi:engine", "text": "Engine Repair"},
    {"href": "/en/services/oil-change", "icon": "mdi:oil", "text": "Oil & Filter Change"},
    {"href": "/en/services/pre-purchase-inspection", "icon": "mdi:file-search-outline", "text": "Pre-purchase Inspection"},
    {"href": "/en/services/ac-service", "icon": "mdi:snowflake", "text": "AC & Climate Control"},
    {"href": "/en/services/webasto-repair", "icon": "mdi:radiator", "text": "Webasto Repair"}
]

def generate_desktop_html(items):
    lines = []
    for item in items:
        lines.append(f'''                    <a href="{item['href']}" class="mega-menu__item">
                        <iconify-icon icon="{item['icon']}" width="20" height="20" aria-hidden="true"></iconify-icon>
                        <span>{item['text']}</span>
                    </a>''')
    return '\n'.join(lines) + '\n                '

def generate_mobile_html(items):
    lines = []
    for item in items:
        lines.append(f'''                <a href="{item['href']}" class="mobile-mega-menu__item" onclick="closeMobileMenu()">
                    <iconify-icon icon="{item['icon']}" aria-hidden="true"></iconify-icon>
                    <span>{item['text']}</span>
                </a>''')
    return '\n'.join(lines) + '\n            '

desktop_regex = re.compile(r'(<div class="mega-menu">\n)(?:[ \t]*<a[^>]*class="mega-menu__item"[^>]*>.*?</a>\n?)+[ \t]*', re.DOTALL)
mobile_regex = re.compile(r'(<div class="mobile-mega-menu" id="mobileMegaMenu">\n)(?:[ \t]*<a[^>]*class="mobile-mega-menu__item"[^>]*>.*?</a>\n?)+[ \t]*', re.DOTALL)

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Determine lang
    rel_path = os.path.relpath(file_path, '.').replace('\\', '/')
    
    if rel_path.startswith('ru/') or '-ru.html' in rel_path:
        items = ru_items
    elif rel_path.startswith('en/') or '-en.html' in rel_path:
        items = en_items
    else:
        items = et_items

    desktop_html = generate_desktop_html(items)
    mobile_html = generate_mobile_html(items)

    new_content = desktop_regex.sub(r'\g<1>' + desktop_html, content)
    new_content = mobile_regex.sub(r'\g<1>' + mobile_html, new_content)

    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {rel_path}")

html_files = glob.glob('**/*.html', recursive=True)
for f in html_files:
    if 'temp_docs' in f or '_service.template.html' in f or 'node_modules' in f:
        continue
    process_file(f)

print("Done.")
