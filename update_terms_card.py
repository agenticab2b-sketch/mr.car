import os
import re

files = [
    {
        "path": "index.html",
        "lang": "et",
        "card_comment": "<!-- Card: Tingimused -->",
        "title": "Üldtingimused",
        "desc": "Tutvuge meie autoteeninduse üldtingimustega. Läbipaistvus ja selged reeglid igas tööetapis.",
        "link_text": "Loe lähemalt",
        "link_url": "/tingimused"
    },
    {
        "path": "ru/index.html",
        "lang": "ru",
        "card_comment": "<!-- Card: Условия -->",
        "title": "Условия",
        "desc": "Ознакомьтесь с общими условиями нашего автосервиса. Прозрачность и четкие правила на каждом этапе работы.",
        "link_text": "Узнать больше",
        "link_url": "/ru/tingimused"
    },
    {
        "path": "en/index.html",
        "lang": "en",
        "card_comment": "<!-- Card: Terms -->",
        "title": "Terms & Conditions",
        "desc": "Read the general terms and conditions of our car service. Transparency and clear rules at every stage of work.",
        "link_text": "Learn more",
        "link_url": "/en/tingimused"
    }
]

def generate_card(lang_data):
    return f'''
                {lang_data["card_comment"]}
                <div class="service-card service-card--centered">
                    <div class="service-card__icon">
                        <iconify-icon icon="mdi:file-document-outline" width="28" height="28" aria-hidden="true"></iconify-icon>
                    </div>
                    <h3 class="service-card__title">{lang_data["title"]}</h3>
                    <p class="service-card__description">{lang_data["desc"]}</p>
                    <div class="service-card__footer">
                        <a href="{lang_data["link_url"]}" class="btn-link">{lang_data["link_text"]} <span class="arrow"
                                aria-hidden="true">→</span></a>
                    </div>
                </div>'''

base_dir = "c:/Users/Admin/Documents/GitHub/mrCar"

for file_info in files:
    file_path = os.path.join(base_dir, file_info["path"])
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
        
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Remove the terms button from the hero
    # Regex looks for <a href="...tingimused.html" class="gallery__index"...>...</a>
    content = re.sub(r'<a\s+href="[^"]*tingimused\.html"\s+class="gallery__index"[\s\S]*?</a>\s*', '', content)
    
    # 2. Add the terms card right after the Guaranty card
    # The guarantee card ends with </div> \n </div> (one for service-card__footer, one for service-card)
    # Let's find the card by its comment or title, and insert after its closing div.
    
    # Match the entire Guaranty card
    # We will look for <!-- Card: Garantii --> or <!-- Card: Гарантия --> or <!-- Card: Guarantee -->
    # and capture until the next </div> corresponding to the end of the card.
    
    garantii_regex = r'(<!-- Card: (?:Garantii|Гарантия|Guarantee) -->[\s\S]*?<div class="service-card__footer">[\s\S]*?</div>\s*</div>)'
    
    new_card = generate_card(file_info)
    
    # Check if we already inserted it
    if file_info["card_comment"] not in content:
        content = re.sub(garantii_regex, r'\1\n' + new_card, content, count=1)
        print(f"Updated {file_info['path']}")
    else:
        print(f"Card already exists in {file_info['path']}")
        
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

print("Done.")

