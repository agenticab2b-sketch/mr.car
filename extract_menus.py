import os
import glob
from bs4 import BeautifulSoup
import json

def extract_menus():
    html_files = glob.glob('c:/Users/Admin/Documents/GitHub/mrCar/**/*.html', recursive=True)
    results = {}
    
    for file in html_files:
        if 'temp_docs' in file or '_service.template.html' in file:
            continue
            
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
            
        soup = BeautifulSoup(content, 'html.parser')
        
        # Desktop mega menu
        desktop_menu = []
        mega_menu = soup.find('div', class_='mega-menu')
        if mega_menu:
            items = mega_menu.find_all('a', class_='mega-menu__item')
            for item in items:
                link = item.get('href', '')
                span = item.find('span')
                text = span.text.strip() if span else item.text.strip()
                desktop_menu.append({'link': link, 'text': text})
                
        # Mobile mega menu
        mobile_menu = []
        mobile_mega_menu = soup.find('div', id='mobileMegaMenu')
        if mobile_mega_menu:
            items = mobile_mega_menu.find_all('a', class_='mobile-mega-menu__item')
            for item in items:
                link = item.get('href', '')
                span = item.find('span')
                text = span.text.strip() if span else item.text.strip()
                mobile_menu.append({'link': link, 'text': text})
                
        rel_path = os.path.relpath(file, 'c:/Users/Admin/Documents/GitHub/mrCar')
        results[rel_path] = {
            'desktop': desktop_menu,
            'mobile': mobile_menu
        }
        
    with open('c:/Users/Admin/Documents/GitHub/mrCar/menu_analysis.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

if __name__ == '__main__':
    extract_menus()
