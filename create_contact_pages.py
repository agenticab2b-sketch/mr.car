import re

base_paths = {
    'et': {'gallery': 'galerii.html', 'index': 'index.html', 'output': 'kontakt.html', 'title': 'Kontakt', 'desc': 'Võta Mr.Car autoteenindusega ühendust ja küsi hinnapakkumist. Asume Tallinnas Kopli 82a ning vastame kiiresti.', 'home_url': '/', 'home_name': 'Avaleht', 'lang_ext': '', 'success_msg': 'Aitäh! Päring on saadetud.', 'err_msg': 'Päringut ei õnnestunud saata. Proovige uuesti.', 'sending_msg': 'Saatmine...', 'req_msg': 'Palun täitke kõik kohustuslikud väljad', 'canonical': 'https://www.mrcar.ee/kontakt'},
    'ru': {'gallery': 'ru/galereya.html', 'index': 'ru/index.html', 'output': 'ru/kontakt.html', 'title': 'Контакты', 'desc': 'Свяжитесь с нами и мы найдем лучшее решение для вашего автомобиля. Запишитесь на ремонт.', 'home_url': '/ru/', 'home_name': 'Главная', 'lang_ext': '/ru', 'success_msg': 'Спасибо! Заявка отправлена.', 'err_msg': 'Не удалось отправить заявку. Попробуйте ещё раз.', 'sending_msg': 'Отправка...', 'req_msg': 'Необходимо заполнить выделенные поля', 'canonical': 'https://www.mrcar.ee/ru/kontakt'},
    'en': {'gallery': 'en/gallery.html', 'index': 'en/index.html', 'output': 'en/contact.html', 'title': 'Contact', 'desc': 'Contact us and we will find the best solution for your car. Book an appointment.', 'home_url': '/en/', 'home_name': 'Home', 'lang_ext': '/en', 'success_msg': 'Thank you! Your request has been sent.', 'err_msg': 'Failed to send request. Please try again.', 'sending_msg': 'Sending...', 'req_msg': 'Please fill in all required fields', 'canonical': 'https://www.mrcar.ee/en/contact'}
}

for lang, config in base_paths.items():
    with open(config['gallery'], 'r', encoding='utf-8') as f:
        gallery_html = f.read()
    
    with open(config['index'], 'r', encoding='utf-8') as f:
        index_html = f.read()

    # Extract Contact Section
    contact_match = re.search(r'(<section class="contact-section" id="contact">.*?</section>)', index_html, re.DOTALL)
    if not contact_match:
        print(f"Contact section not found in {config['index']}")
        continue
    contact_section = contact_match.group(1)

    # Extract Location Section
    location_match = re.search(r'(<section class="location-section" id="location">.*?</section>)', index_html, re.DOTALL)
    if not location_match:
        print(f"Location section not found in {config['index']}")
        continue
    location_section = location_match.group(1)

    # Extract Form Script
    script_match = re.search(r'(// Form handling.*?showSnackbar.*?\}).*?(// Scroll Reveal|// Service Status)', index_html, re.DOTALL)
    if not script_match:
        print(f"Form script not found in {config['index']}")
    script_code = script_match.group(1) if script_match else ''

    # Modify gallery html
    # 1. Update title & canonicals
    new_html = re.sub(r'<title>.*?</title>', f'<title>{config["title"]} — Mr.Car Autoteenindus Tallinnas</title>', gallery_html)
    new_html = re.sub(r'<meta property="og:title" content=".*?">', f'<meta property="og:title" content="{config["title"]} — Mr.Car Autoteenindus Tallinnas">', new_html)
    new_html = re.sub(r'id="canonicalLink"\s+href="[^"]+"', f'id="canonicalLink" href="{config["canonical"]}"', new_html)

    # Update hreflangs
    new_html = re.sub(r'<link rel="alternate" hreflang="et"[^>]+>', '<link rel="alternate" hreflang="et" href="https://www.mrcar.ee/kontakt">', new_html)
    new_html = re.sub(r'<link rel="alternate" hreflang="ru"[^>]+>', '<link rel="alternate" hreflang="ru" href="https://www.mrcar.ee/ru/kontakt">', new_html)
    new_html = re.sub(r'<link rel="alternate" hreflang="en"[^>]+>', '<link rel="alternate" hreflang="en" href="https://www.mrcar.ee/en/contact">', new_html)
    new_html = re.sub(r'<link rel="alternate" hreflang="x-default"[^>]+>', '<link rel="alternate" hreflang="x-default" href="https://www.mrcar.ee/kontakt">', new_html)

    # 2. Main content replacement
    main_pattern = r'<main id="prices-main">.*?</main>'
    new_main = f'''<main id="contact-main">
        <!-- HERO -->
        <section class="prices-hero">
            <nav aria-label="Breadcrumb" style="display: flex; justify-content: center;">
                <ol class="breadcrumbs" itemscope itemtype="https://schema.org/BreadcrumbList">
                    <li class="breadcrumbs__item" itemprop="itemListElement" itemscope
                        itemtype="https://schema.org/ListItem">
                        <a href="{config['home_url']}" class="breadcrumbs__link" itemprop="item"><span itemprop="name">{config['home_name']}</span></a>
                        <meta itemprop="position" content="1" />
                    </li>
                    <li class="breadcrumbs__item"><span class="breadcrumbs__separator">›</span></li>
                    <li class="breadcrumbs__item breadcrumbs__item--current" itemprop="itemListElement" itemscope
                        itemtype="https://schema.org/ListItem">
                        <span itemprop="name">{config['title']}</span>
                        <meta itemprop="position" content="2" />
                    </li>
                </ol>
            </nav>
            <h1 class="prices-hero__title">{config['title']}</h1>
            <p class="prices-hero__desc" style="max-width: 600px; margin: 0 auto;">{config['desc']}</p>
        </section>

        {contact_section}

        {location_section}

        <!-- SNACKBAR -->
        <div id="snackbar" class="snackbar">{config['success_msg']}</div>

    </main>'''
    
    new_html = re.sub(main_pattern, new_main, new_html, flags=re.DOTALL)
    
    # Remove gallery script and add form script snippet
    new_html = new_html.replace('<script type="module" src="/gallery.js"></script>', '')
    
    # We must insert the form JS code inside the <script> block at the end (before mobile menu logic).
    # Since galerii.html has:
    # <script>
    #     // Mobile menu logic
    script_insertion = f'''
        {script_code}

        // Mobile menu logic'''
    
    new_html = new_html.replace('// Mobile menu logic', script_insertion)

    with open(config['output'], 'w', encoding='utf-8') as f:
        f.write(new_html)
    
    print(f"Created {config['output']}")

