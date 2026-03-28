import re

path = r'c:\Users\Admin\Documents\GitHub\MrCar in github\mr.car-main (1)\mr.car-main\ru\services\remont-akpp.html'

with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

new_content = """      <!-- BRANDS MARQUEE (Looping Logos) -->
      <div class="brands-marquee gb-reveal">
        <div class="brands-marquee__track">
          <div class="brands-marquee__item" aria-label="BMW"><iconify-icon icon="simple-icons:bmw"></iconify-icon></div>
          <div class="brands-marquee__item" aria-label="Audi"><iconify-icon icon="simple-icons:audi"></iconify-icon></div>
          <div class="brands-marquee__item" aria-label="VW"><iconify-icon icon="simple-icons:volkswagen"></iconify-icon></div>
          <div class="brands-marquee__item" aria-label="Mercedes"><iconify-icon icon="simple-icons:mercedes"></iconify-icon></div>
          <div class="brands-marquee__item" aria-label="Volvo"><iconify-icon icon="simple-icons:volvo"></iconify-icon></div>
          <div class="brands-marquee__item" aria-label="Toyota"><iconify-icon icon="simple-icons:toyota"></iconify-icon></div>
          <div class="brands-marquee__item" aria-label="Honda"><iconify-icon icon="simple-icons:honda"></iconify-icon></div>
          <div class="brands-marquee__item" aria-label="Škoda"><iconify-icon icon="simple-icons:skoda"></iconify-icon></div>
          <div class="brands-marquee__item" aria-label="Land Rover"><iconify-icon icon="simple-icons:landrover"></iconify-icon></div>
          <div class="brands-marquee__item" aria-label="Ford"><iconify-icon icon="simple-icons:ford"></iconify-icon></div>
          <div class="brands-marquee__item" aria-label="Nissan"><iconify-icon icon="simple-icons:nissan"></iconify-icon></div>
          <div class="brands-marquee__item" aria-label="Kia"><iconify-icon icon="simple-icons:kia"></iconify-icon></div>
          <div class="brands-marquee__item" aria-label="Hyundai"><iconify-icon icon="simple-icons:hyundai"></iconify-icon></div>
          <div class="brands-marquee__item" aria-label="SEAT"><iconify-icon icon="simple-icons:seat"></iconify-icon></div>
          <div class="brands-marquee__item" aria-label="Peugeot"><iconify-icon icon="simple-icons:peugeot"></iconify-icon></div>
          <div class="brands-marquee__item" aria-label="Renault"><iconify-icon icon="simple-icons:renault"></iconify-icon></div>
        </div>
        <div class="brands-marquee__track" aria-hidden="true">
          <div class="brands-marquee__item" aria-label="BMW"><iconify-icon icon="simple-icons:bmw"></iconify-icon></div>
          <div class="brands-marquee__item" aria-label="Audi"><iconify-icon icon="simple-icons:audi"></iconify-icon></div>
          <div class="brands-marquee__item" aria-label="VW"><iconify-icon icon="simple-icons:volkswagen"></iconify-icon></div>
          <div class="brands-marquee__item" aria-label="Mercedes"><iconify-icon icon="simple-icons:mercedes"></iconify-icon></div>
          <div class="brands-marquee__item" aria-label="Volvo"><iconify-icon icon="simple-icons:volvo"></iconify-icon></div>
          <div class="brands-marquee__item" aria-label="Toyota"><iconify-icon icon="simple-icons:toyota"></iconify-icon></div>
          <div class="brands-marquee__item" aria-label="Honda"><iconify-icon icon="simple-icons:honda"></iconify-icon></div>
          <div class="brands-marquee__item" aria-label="Škoda"><iconify-icon icon="simple-icons:skoda"></iconify-icon></div>
          <div class="brands-marquee__item" aria-label="Land Rover"><iconify-icon icon="simple-icons:landrover"></iconify-icon></div>
          <div class="brands-marquee__item" aria-label="Ford"><iconify-icon icon="simple-icons:ford"></iconify-icon></div>
          <div class="brands-marquee__item" aria-label="Nissan"><iconify-icon icon="simple-icons:nissan"></iconify-icon></div>
          <div class="brands-marquee__item" aria-label="Kia"><iconify-icon icon="simple-icons:kia"></iconify-icon></div>
          <div class="brands-marquee__item" aria-label="Hyundai"><iconify-icon icon="simple-icons:hyundai"></iconify-icon></div>
          <div class="brands-marquee__item" aria-label="SEAT"><iconify-icon icon="simple-icons:seat"></iconify-icon></div>
          <div class="brands-marquee__item" aria-label="Peugeot"><iconify-icon icon="simple-icons:peugeot"></iconify-icon></div>
          <div class="brands-marquee__item" aria-label="Renault"><iconify-icon icon="simple-icons:renault"></iconify-icon></div>
        </div>
      </div>"""

# Match everything from <!-- BRANDS BAR --> up to and including the closing </div>
pattern = r'<!-- BRANDS BAR -->\s*<div class="gb-brands-bar gb-reveal">.*?</div>'
content = re.sub(pattern, new_content, content, flags=re.DOTALL)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Replaced successfully.")
