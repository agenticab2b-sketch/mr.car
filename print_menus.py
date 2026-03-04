import json
import sys

with open('c:/Users/Admin/Documents/GitHub/mrCar/menu_analysis.json', encoding='utf-8') as f:
    d = json.load(f)

for k in d:
    if k.endswith('index.html'):
        print(f"--- {k} ---")
        for item in d[k]['desktop']:
            print(f"{item['link']} -> {item['text']}")
