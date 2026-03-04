import os
import glob
import re

config = {
    'et': {
        'desktop_trigger': '                <a href="/teenused.html" class="navbar__link">[01] Teenused</a>',
        'desktop_links': '''
            <a href="#about" class="navbar__link">[02] Meist</a>
            <a href="/hinnad.html" class="navbar__link">[03] Hinnad</a>
            <a href="/kontakt" class="navbar__link">[04] Kontakt</a>
            <a href="/galerii.html" class="navbar__link">[05] Galerii</a>
            <a href="tel:+37256461210" class="navbar__phone">+372 5646 1210</a>''',
        'cta_inner': '<a href="/kontakt" class="btn btn-primary">Jäta päring</a>',
        'mobile_trigger': '''            <a href="/teenused.html" class="mobile-menu__link" onclick="toggleMobileMegaMenu(event)">
                Teenused
                <iconify-icon icon="mdi:chevron-down" class="mobile-menu__toggle-icon" width="24" height="24"></iconify-icon>
            </a>''',
        'mobile_links': '''
            <a href="#about" class="mobile-menu__link" onclick="closeMobileMenu()">Meist</a>
            <a href="/hinnad.html" class="mobile-menu__link" onclick="closeMobileMenu()">Hinnad</a>
            <a href="/kontakt" class="mobile-menu__link" onclick="closeMobileMenu()">Kontakt</a>
            <a href="/galerii.html" class="mobile-menu__link" onclick="closeMobileMenu()">Galerii</a>
            <a href="tel:+37256461210" class="mobile-menu__link mobile-menu__phone" onclick="closeMobileMenu()">+372 5646 1210</a>'''
    },
    'ru': {
        'desktop_trigger': '                <a href="/ru/uslugi.html" class="navbar__link">[01] Услуги</a>',
        'desktop_links': '''
            <a href="#about" class="navbar__link">[02] О нас</a>
            <a href="/ru/tseny" class="navbar__link">[03] Цены</a>
            <a href="/ru/kontakt" class="navbar__link">[04] Контакты</a>
            <a href="/ru/galereya.html" class="navbar__link">[05] Галерея</a>
            <a href="tel:+37256461210" class="navbar__phone">+372 5646 1210</a>''',
        'cta_inner': '<a href="/ru/kontakt" class="btn btn-primary">Оставить заявку</a>',
        'mobile_trigger': '''            <a href="/ru/uslugi.html" class="mobile-menu__link" onclick="toggleMobileMegaMenu(event)">
                Услуги
                <iconify-icon icon="mdi:chevron-down" class="mobile-menu__toggle-icon" width="24" height="24"></iconify-icon>
            </a>''',
        'mobile_links': '''
            <a href="#about" class="mobile-menu__link" onclick="closeMobileMenu()">О нас</a>
            <a href="/ru/tseny" class="mobile-menu__link" onclick="closeMobileMenu()">Цены</a>
            <a href="/ru/kontakt" class="mobile-menu__link" onclick="closeMobileMenu()">Контакты</a>
            <a href="/ru/galereya.html" class="mobile-menu__link" onclick="closeMobileMenu()">Галерея</a>
            <a href="tel:+37256461210" class="mobile-menu__link mobile-menu__phone" onclick="closeMobileMenu()">+372 5646 1210</a>'''
    },
    'en': {
        'desktop_trigger': '                <a href="/en/services" class="navbar__link">[01] Services</a>',
        'desktop_links': '''
            <a href="#about" class="navbar__link">[02] About</a>
            <a href="/en/prices" class="navbar__link">[03] Prices</a>
            <a href="/en/contact" class="navbar__link">[04] Contact</a>
            <a href="/en/gallery.html" class="navbar__link">[05] Gallery</a>
            <a href="tel:+37256461210" class="navbar__phone">+372 5646 1210</a>''',
        'cta_inner': '<a href="/en/contact" class="btn btn-primary">Send request</a>',
        'mobile_trigger': '''            <a href="/en/services" class="mobile-menu__link" onclick="toggleMobileMegaMenu(event)">
                Services
                <iconify-icon icon="mdi:chevron-down" class="mobile-menu__toggle-icon" width="24" height="24"></iconify-icon>
            </a>''',
        'mobile_links': '''
            <a href="#about" class="mobile-menu__link" onclick="closeMobileMenu()">About</a>
            <a href="/en/prices" class="mobile-menu__link" onclick="closeMobileMenu()">Prices</a>
            <a href="/en/contact" class="mobile-menu__link" onclick="closeMobileMenu()">Contact</a>
            <a href="/en/gallery.html" class="mobile-menu__link" onclick="closeMobileMenu()">Gallery</a>
            <a href="tel:+37256461210" class="mobile-menu__link mobile-menu__phone" onclick="closeMobileMenu()">+372 5646 1210</a>'''
    }
}

# Regexes
desktop_trigger_re = re.compile(r'<a href="[^"]*" class="navbar__link">\[01\][^<]*</a>\s*(?=<div class="mega-menu">)', re.IGNORECASE)
desktop_links_re = re.compile(r'(</div>\s*</div>)(\s*<a href="[^"]*" class="navbar__link">\[02\].*?)(?=</nav>)', re.DOTALL | re.IGNORECASE)

mobile_trigger_re = re.compile(r'<a href="[^"]*" class="mobile-menu__link" onclick="toggleMobileMegaMenu[^>]*>\s*.*?\s*<iconify-icon[^>]*class="mobile-menu__toggle-icon"[^>]*>.*?</iconify-icon>\s*</a>\s*(?=<div class="mobile-mega-menu")', re.DOTALL | re.IGNORECASE)
mobile_links_re = re.compile(r'(</div>\s*</div>)(\s*<a href="[^"]*" class="mobile-menu__link" onclick="closeMobileMenu.*)(?=</nav>)', re.DOTALL | re.IGNORECASE)

# This was catching too much if not careful, but the end anchor is </nav>
# Let's adjust desktop_links_re and mobile_links_re to safely replace EVERYTHING after the mega-menu inside <nav>
desktop_links_re = re.compile(r'(<div class="mega-menu">.*?</div>\s*</div>)(.*?)(</nav>)', re.DOTALL)
mobile_links_re = re.compile(r'(<div class="mobile-mega-menu"[^>]*>.*?</div>)(\s*<a.*?)(</nav>)', re.DOTALL)

cta_re = re.compile(r'(<div class="navbar__cta">\s*)(<a href="[^"]*" class="btn[^"]*">[^<]*</a>)(\s*</div>)', re.IGNORECASE)


def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    rel_path = os.path.relpath(file_path, 'c:/Users/Admin/Documents/GitHub/mrCar').replace('\\', '/')
    
    if rel_path.startswith('ru/'):
        lang = 'ru'
    elif rel_path.startswith('en/'):
        lang = 'en'
    else:
        lang = 'et'
        
    c = config[lang]
    new_content = content
    
    # Desktop Trigger
    new_content = desktop_trigger_re.sub(c['desktop_trigger'].strip(), new_content)
    # Desktop Links
    new_content = desktop_links_re.sub(r'\g<1>\n' + c['desktop_links'] + r'\n        \g<3>', new_content)

    # Mobile Trigger
    new_content = mobile_trigger_re.sub(c['mobile_trigger'].strip(), new_content)
    # Mobile Links
    new_content = mobile_links_re.sub(r'\g<1>\n' + c['mobile_links'] + r'\n        \g<3>', new_content)
    
    # CTA
    new_content = cta_re.sub(r'\g<1>' + c['cta_inner'] + r'\g<3>', new_content)

    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated top-level navigation: {rel_path}")

html_files = glob.glob('c:/Users/Admin/Documents/GitHub/mrCar/**/*.html', recursive=True)
for f in html_files:
    if 'temp_docs' in f or '_service.template.html' in f:
        continue
    process_file(f)

print("Done top-level.")
