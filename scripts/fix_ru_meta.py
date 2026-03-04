import os
import re
import shutil

file_path = r'c:\Users\Admin\Documents\GitHub\mrCar\ru\index.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

title_str = "Mr.Car Авторемонт Таллинн — Профессиональное обслуживание авто"
desc_str = "Mr.Car Авторемонт Таллинн — профессиональный ремонт автомобилей, шиномонтаж и диагностика в Копли. Звоните +372 5646 1210"
og_desc_str = "Профессиональный автосервис в Копли. Ремонт, диагностика, шиномонтаж. Звоните +372 5646 1210."

content = re.sub(r'<title>.*?</title>', f'<title>{title_str}</title>', content, flags=re.DOTALL)
content = re.sub(r'<meta name="description"[\s\S]*?content="[^"]*">', f'<meta name="description"\n        content="{desc_str}">', content)
content = re.sub(r'<meta property="og:title"[\s\S]*?content="[^"]*">', f'<meta property="og:title"\n        content="{title_str}">', content)
content = re.sub(r'<meta property="og:description"[\s\S]*?content="[^"]*">', f'<meta property="og:description"\n        content="{og_desc_str}">', content)

# Remove old charset
content = re.sub(r'\s*<meta charset="UTF-8">', '', content)
# Insert at top of head
content = content.replace('<head>', '<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">')

content = re.sub(r'<link rel="canonical" href="[^"]*">', '<link rel="canonical" href="https://www.mrcar.ee/ru">', content)
content = re.sub(r'<meta property="og:url".*?>', '<meta property="og:url" id="ogUrl" content="https://www.mrcar.ee/ru">', content)
content = re.sub(r'<meta property="og:type".*?>', '<meta property="og:type" content="website">', content)
content = re.sub(r'<meta property="og:image".*?>', '<meta property="og:image" content="https://www.mrcar.ee/og/ru.jpg">', content)

if '<meta name="twitter:card"' not in content:
    content = content.replace('<meta property="og:locale" content="ru_RU">', '<meta property="og:locale" content="ru_RU">\n    <meta name="twitter:card" content="summary_large_image">')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

og_dir = r"c:\Users\Admin\Documents\GitHub\mrCar\og"
os.makedirs(og_dir, exist_ok=True)
og_img = os.path.join(og_dir, 'ru.jpg')
src_img = r"c:\Users\Admin\Documents\GitHub\mrCar\apple-touch-icon.png"
if not os.path.exists(og_img) and os.path.exists(src_img):
    shutil.copy(src_img, og_img)

print("DONE")
