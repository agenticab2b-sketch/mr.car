const fs = require('fs');

const bgImage = '/homepage_pics/lowkey_portfolio_3_1771547430620.avif';

function rewriteEstonian() {
    let content = fs.readFileSync('meist.html', 'utf8');
    const newMain = `    <main id="about-main">
        <!-- HERO -->
        <section class="prices-hero">
            <nav aria-label="Breadcrumb" style="display: flex; justify-content: center;">
                <ol class="breadcrumbs" itemscope itemtype="https://schema.org/BreadcrumbList">
                    <li class="breadcrumbs__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                        <a href="/" class="breadcrumbs__link" itemprop="item"><span itemprop="name">Avaleht</span></a>
                        <meta itemprop="position" content="1" />
                    </li>
                    <li class="breadcrumbs__item"><span class="breadcrumbs__separator">›</span></li>
                    <li class="breadcrumbs__item breadcrumbs__item--current" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                        <span itemprop="name">Meist</span>
                        <meta itemprop="position" content="2" />
                    </li>
                </ol>
            </nav>
            <h1 class="prices-hero__title">Mr.Car autoteenindus</h1>
            <p class="prices-hero__desc" style="max-width: 600px; margin: 0 auto;">Meie eesmärk on pakkuda autoremonti, mille puhul klient saab olla kindel nii töö kvaliteedis kui ka selges suhtluses.</p>
        </section>

        <!-- SEO Intro Component -->
        <section class="seo-intro" style="padding-top: var(--space-4xl); padding-bottom: var(--space-xxl);">
            <div class="site-container reveal">
                <div class="seo-intro__grid">
                    <div class="seo-intro__content">
                        <div class="section-header">
                            <span class="meta text-accent">/// Autoremont Tallinnas</span>
                            <h2>Läbimõeldud ja korrektne tööprotsess</h2>
                        </div>
                        <p><strong>Mr.Car autoremont Tallinnas</strong> on kaasaegne ja usaldusväärne autoteenindus, mis tegutseb ametlikult ettevõtte Anet Eesti OÜ all. Pakume sõiduautode ja kaubikute hooldust ning remonti, aidates Tallinna ja Harjumaa autoomanikel hoida oma sõidukid turvalised, töökindlad ja tehniliselt korras aastaringselt.</p>
                        <p>Mr.Car autoteeninduses Tallinnas põhineb iga töö selgel ja professionaalsel protsessil. Hooldus- ja remonditööd tehakse vastavalt autotootjate tehnilistele nõuetele ning dokumentatsioonile.</p>
                        <p>Järgime remonditehnoloogiat ja tööde õiget järjekorda, et tulemus oleks vastupidav ning auto töötaks pärast remonti nii, nagu peab. Me ei kasuta ajutisi ega lihtsustatud lahendusi, kui need võivad mõjutada sõiduki ohutust, töökindlust või edasist kasutamist.</p>
                    </div>
                    <div class="seo-intro__image">
                        <img src="\${bgImage}" alt="Mr.Car autoteenindus Tallinnas - tööprotsess">
                    </div>
                </div>
            </div>
        </section>

        <!-- Services All Grid Component -->
        <section class="services-section" style="padding-top: var(--space-2xl);">
            <div class="services-section__header site-container" style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1rem;">
                <div>
                    <span class="meta text-accent">/// Teenused</span>
                    <h2>Autoteeninduse teenused Tallinnas</h2>
                </div>
            </div>
            <div class="services-all site-container reveal">
                <div class="services-all__grid">
                    <a href="/services/hooldus-diagnostika" class="services-all__item"><span class="services-all__number"><iconify-icon icon="mdi:car-cog" width="24" height="24"></iconify-icon></span><span class="services-all__name">Regulaarne tehnohooldus (õlivahetus, filtrid)</span><span class="services-all__arrow">→</span></a>
                    <a href="/services/mootoriremont" class="services-all__item"><span class="services-all__number"><iconify-icon icon="mdi:engine" width="24" height="24"></iconify-icon></span><span class="services-all__name">Mootori ja käigukasti remont</span><span class="services-all__arrow">→</span></a>
                    <a href="/services/veermik-pidurid" class="services-all__item"><span class="services-all__number"><iconify-icon icon="mdi:car-brake-alert" width="24" height="24"></iconify-icon></span><span class="services-all__name">Pidurisüsteemi ja veermiku remont</span><span class="services-all__arrow">→</span></a>
                    <a href="/services/summutid-keevitus" class="services-all__item"><span class="services-all__number"><iconify-icon icon="mdi:fire" width="24" height="24"></iconify-icon></span><span class="services-all__name">Summutite remont ja keevitustööd</span><span class="services-all__arrow">→</span></a>
                    <a href="#about-main" class="services-all__item"><span class="services-all__number"><iconify-icon icon="mdi:car-shift-pattern" width="24" height="24"></iconify-icon></span><span class="services-all__name">Sillastend</span><span class="services-all__arrow">→</span></a>
                    <a href="/services/kliimahooldus" class="services-all__item"><span class="services-all__number"><iconify-icon icon="mdi:snowflake" width="24" height="24"></iconify-icon></span><span class="services-all__name">Kliima- ja konditsioneerisüsteemi hooldus ja täitmine</span><span class="services-all__arrow">→</span></a>
                    <a href="/services/hooldus-diagnostika" class="services-all__item"><span class="services-all__number"><iconify-icon icon="mdi:laptop-mac" width="24" height="24"></iconify-icon></span><span class="services-all__name">Autode arvutidiagnostika ja elektroonika kodeerimine</span><span class="services-all__arrow">→</span></a>
                    <a href="/services/webasto-diagnostika" class="services-all__item"><span class="services-all__number"><iconify-icon icon="mdi:radiator" width="24" height="24"></iconify-icon></span><span class="services-all__name">Webasto paigaldus ja hooldus</span><span class="services-all__arrow">→</span></a>
                    <a href="#about-main" class="services-all__item"><span class="services-all__number"><iconify-icon icon="mdi:remote" width="24" height="24"></iconify-icon></span><span class="services-all__name">Kaugkäivituse paigaldus</span><span class="services-all__arrow">→</span></a>
                    <a href="#about-main" class="services-all__item"><span class="services-all__number"><iconify-icon icon="mdi:tools" width="24" height="24"></iconify-icon></span><span class="services-all__name">Mitmesugused tehnilised lahendused (retrofitting)</span><span class="services-all__arrow">→</span></a>
                </div>
            </div>
        </section>

        <!-- Values Component -->
        <section class="services-section" style="background-color: var(--bg-surface); margin-top: var(--space-3xl); padding-top: var(--space-2xl); padding-bottom: var(--space-4xl);">
            <div class="services-section__header site-container">
                <span class="meta text-accent">/// Miks valida meid</span>
                <h2>Mr.Car väärtused</h2>
            </div>
            <div class="services-grid site-container reveal" style="padding-top: var(--space-lg);">
                <div class="service-card service-card--centered">
                    <div class="service-card__icon"><iconify-icon icon="mdi:message-check" width="28" height="28" aria-hidden="true"></iconify-icon></div>
                    <h3 class="service-card__title">Selge ja aus suhtlus</h3>
                    <p class="service-card__description">Peame oluliseks läbipaistvat kliendisuhtlust. Selgitame auto tehnilist seisukorda, arutame vajalikud tööd ja maksumuse, ning anname ülevaate tehtust.</p>
                </div>
                <div class="service-card service-card--featured service-card--centered">
                    <div class="service-card__icon"><iconify-icon icon="mdi:star-circle" width="28" height="28" aria-hidden="true"></iconify-icon></div>
                    <h3 class="service-card__title">Klientide usaldus</h3>
                    <p class="service-card__description">Meie töö kvaliteeti kinnitab klientide tagasiside – Google’i hinnang 4,9 tärni, mis põhineb sadadel reaalsetel hinnangutel.</p>
                </div>
                <div class="service-card service-card--centered">
                    <div class="service-card__icon"><iconify-icon icon="mdi:shield-check" width="28" height="28" aria-hidden="true"></iconify-icon></div>
                    <h3 class="service-card__title">Usaldusväärne teenindus</h3>
                    <p class="service-card__description">Kui otsid autoteenindust, kus kohtuvad professionaalne lähenemine, aus suhtumine klienti ja püsiv kvaliteet, on Mr.Car Sinu kindel valik.</p>
                </div>
            </div>
        </section>

        <section class="site-container reveal" style="padding: var(--space-3xl) 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
            <p style="margin-bottom: var(--space-lg); max-width: 600px; color: var(--text-main);">Vajadusel pakume ka detailing-teenuseid, et auto näeks välja sama hea, kui hästi see sõidab.</p>
            <a href="/kontakt" class="btn btn-primary" style="display: inline-flex;">Broneeri aeg <span class="arrow">↗</span></a>
        </section>

    </main>`;

    content = content.replace(/<main id="about-main">[\s\S]*?<\/main>/, newMain);
    fs.writeFileSync('meist.html', content, 'utf8');
}

function rewriteRussian() {
    let content = fs.readFileSync('ru/o-nas.html', 'utf8');
    const newMain = `    <main id="about-main">
        <!-- HERO -->
        <section class="prices-hero">
            <nav aria-label="Breadcrumb" style="display: flex; justify-content: center;">
                <ol class="breadcrumbs" itemscope itemtype="https://schema.org/BreadcrumbList">
                    <li class="breadcrumbs__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                        <a href="/ru" class="breadcrumbs__link" itemprop="item"><span itemprop="name">Главная</span></a>
                        <meta itemprop="position" content="1" />
                    </li>
                    <li class="breadcrumbs__item"><span class="breadcrumbs__separator">›</span></li>
                    <li class="breadcrumbs__item breadcrumbs__item--current" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                        <span itemprop="name">О нас</span>
                        <meta itemprop="position" content="2" />
                    </li>
                </ol>
            </nav>
            <h1 class="prices-hero__title">Ваш надёжный партнёр</h1>
            <p class="prices-hero__desc" style="max-width: 600px; margin: 0 auto;">Узнайте больше о нашей компании и процессе работы. Mr.Car создан для того, чтобы предоставлять лучший сервис.</p>
        </section>

        <!-- SEO Intro Component -->
        <section class="seo-intro" style="padding-top: var(--space-4xl); padding-bottom: var(--space-xxl);">
            <div class="site-container reveal">
                <div class="seo-intro__grid">
                    <div class="seo-intro__content">
                        <div class="section-header">
                            <span class="meta text-accent">/// Авторемонт в Таллинне</span>
                            <h2>Продуманный и профессиональный подход к ремонту</h2>
                        </div>
                        <p><strong>Mr.Car Autoremont Tallinnas</strong> — современный и надёжный автосервис в Таллинне, официально работающий под компанией Anet Eesti OÜ. Мы занимаемся обслуживанием и ремонтом легковых автомобилей и фургонов, помогая автовладельцам Таллинна и Харьюмаа поддерживать свои автомобили в безопасном, исправном и надёжном состоянии круглый год.</p>
                        <p>В автосервисе Mr.Car в Таллинне каждая работа выполняется по чётко выстроенному профессиональному процессу. Обслуживание и ремонт автомобилей проводятся в соответствии с техническими требованиями и документацией автопроизводителей.</p>
                        <p>Мы строго соблюдаем технологию ремонта и правильную последовательность работ, чтобы результат был надёжным и долговечным, а автомобиль после ремонта работал так, как предусмотрено производителем. Мы не используем временные или упрощённые решения, если они могут повлиять на безопасность, надёжность или дальнейшую эксплуатацию автомобиля.</p>
                    </div>
                    <div class="seo-intro__image">
                        <img src="\${bgImage}" alt="Mr.Car Авторемонт в Таллинне - процесс">
                    </div>
                </div>
            </div>
        </section>

        <!-- Services All Grid Component -->
        <section class="services-section" style="padding-top: var(--space-2xl);">
            <div class="services-section__header site-container" style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1rem;">
                <div>
                    <span class="meta text-accent">/// Услуги</span>
                    <h2>Услуги автосервиса в Таллинне</h2>
                </div>
            </div>
            <div class="services-all site-container reveal">
                <div class="services-all__grid">
                    <a href="/ru/services/tehobsluzhivanie-diagnostika" class="services-all__item"><span class="services-all__number"><iconify-icon icon="mdi:car-cog" width="24" height="24"></iconify-icon></span><span class="services-all__name">Плановое техническое обслуживание (масла, фильтры)</span><span class="services-all__arrow">→</span></a>
                    <a href="/ru/services/remont-dvigatelya" class="services-all__item"><span class="services-all__number"><iconify-icon icon="mdi:engine" width="24" height="24"></iconify-icon></span><span class="services-all__name">Ремонт двигателей и коробок передач</span><span class="services-all__arrow">→</span></a>
                    <a href="/ru/services/hodovaya-tormoza" class="services-all__item"><span class="services-all__number"><iconify-icon icon="mdi:car-brake-alert" width="24" height="24"></iconify-icon></span><span class="services-all__name">Ремонт тормозной системы и подвески</span><span class="services-all__arrow">→</span></a>
                    <a href="/ru/services/glushiteli-svarka" class="services-all__item"><span class="services-all__number"><iconify-icon icon="mdi:fire" width="24" height="24"></iconify-icon></span><span class="services-all__name">Ремонт и изготовление глушителей (сварочные работы)</span><span class="services-all__arrow">→</span></a>
                    <a href="#about-main" class="services-all__item"><span class="services-all__number"><iconify-icon icon="mdi:car-shift-pattern" width="24" height="24"></iconify-icon></span><span class="services-all__name">Регулировка сход-развала</span><span class="services-all__arrow">→</span></a>
                    <a href="/ru/services/klimat-konditsioner" class="services-all__item"><span class="services-all__number"><iconify-icon icon="mdi:snowflake" width="24" height="24"></iconify-icon></span><span class="services-all__name">Обслуживание и заправка систем кондиционирования (климат)</span><span class="services-all__arrow">→</span></a>
                    <a href="/ru/services/tehobsluzhivanie-diagnostika" class="services-all__item"><span class="services-all__number"><iconify-icon icon="mdi:laptop-mac" width="24" height="24"></iconify-icon></span><span class="services-all__name">Компьютерная диагностика и кодирование</span><span class="services-all__arrow">→</span></a>
                    <a href="/ru/services/webasto" class="services-all__item"><span class="services-all__number"><iconify-icon icon="mdi:radiator" width="24" height="24"></iconify-icon></span><span class="services-all__name">Установка и обслуживание Webasto</span><span class="services-all__arrow">→</span></a>
                    <a href="#about-main" class="services-all__item"><span class="services-all__number"><iconify-icon icon="mdi:remote" width="24" height="24"></iconify-icon></span><span class="services-all__name">Установка систем автозапуска</span><span class="services-all__arrow">→</span></a>
                    <a href="#about-main" class="services-all__item"><span class="services-all__number"><iconify-icon icon="mdi:tools" width="24" height="24"></iconify-icon></span><span class="services-all__name">Различные технические доработки автомобилей</span><span class="services-all__arrow">→</span></a>
                </div>
            </div>
        </section>

        <!-- Values Component -->
        <section class="services-section" style="background-color: var(--bg-surface); margin-top: var(--space-3xl); padding-top: var(--space-2xl); padding-bottom: var(--space-4xl);">
            <div class="services-section__header site-container">
                <span class="meta text-accent">/// Почему выбирают нас</span>
                <h2>Ценности Mr.Car</h2>
            </div>
            <div class="services-grid site-container reveal" style="padding-top: var(--space-lg);">
                <div class="service-card service-card--centered">
                    <div class="service-card__icon"><iconify-icon icon="mdi:message-check" width="28" height="28" aria-hidden="true"></iconify-icon></div>
                    <h3 class="service-card__title">Понятное и честное общение</h3>
                    <p class="service-card__description">Мы уделяем большое внимание прозрачному общению. Перед началом работ объясняем состояние, обсуждаем необходимые работы и стоимость.</p>
                </div>
                <div class="service-card service-card--featured service-card--centered">
                    <div class="service-card__icon"><iconify-icon icon="mdi:star-circle" width="28" height="28" aria-hidden="true"></iconify-icon></div>
                    <h3 class="service-card__title">Доверие клиентов</h3>
                    <p class="service-card__description">Качество нашей работы подтверждается отзывами клиентов — рейтинг 4,9 в Google, основанный на реальных оценках автовладельцев.</p>
                </div>
                <div class="service-card service-card--centered">
                    <div class="service-card__icon"><iconify-icon icon="mdi:shield-check" width="28" height="28" aria-hidden="true"></iconify-icon></div>
                    <h3 class="service-card__title">Надёжный автосервис</h3>
                    <p class="service-card__description">Если вы ищете автосервис в Таллинне, где сочетаются профессиональный подход, честное отношение к клиенту и стабильное качество работ, Mr.Car — надёжный выбор.</p>
                </div>
            </div>
        </section>

        <section class="site-container reveal" style="padding: var(--space-3xl) 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
            <p style="margin-bottom: var(--space-lg); max-width: 600px; color: var(--text-main);">При необходимости мы также предлагаем услуги детейлинга, чтобы автомобиль выглядел так же хорошо, как он едет.</p>
            <a href="/ru/kontakt" class="btn btn-primary" style="display: inline-flex;">Записаться <span class="arrow">↗</span></a>
        </section>

    </main>`;

    content = content.replace(/<main id="about-main">[\s\S]*?<\/main>/, newMain);
    fs.writeFileSync('ru/o-nas.html', content, 'utf8');
}

function rewriteEnglish() {
    let content = fs.readFileSync('en/about.html', 'utf8');
    const newMain = `    <main id="about-main">
        <!-- HERO -->
        <section class="prices-hero">
            <nav aria-label="Breadcrumb" style="display: flex; justify-content: center;">
                <ol class="breadcrumbs" itemscope itemtype="https://schema.org/BreadcrumbList">
                    <li class="breadcrumbs__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                        <a href="/en" class="breadcrumbs__link" itemprop="item"><span itemprop="name">Home</span></a>
                        <meta itemprop="position" content="1" />
                    </li>
                    <li class="breadcrumbs__item"><span class="breadcrumbs__separator">›</span></li>
                    <li class="breadcrumbs__item breadcrumbs__item--current" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                        <span itemprop="name">About Us</span>
                        <meta itemprop="position" content="2" />
                    </li>
                </ol>
            </nav>
            <h1 class="prices-hero__title">Your Reliable Partner</h1>
            <p class="prices-hero__desc" style="max-width: 600px; margin: 0 auto;">Learn more about our company and processes. Mr.Car is designed to provide the best service.</p>
        </section>

        <!-- SEO Intro Component -->
        <section class="seo-intro" style="padding-top: var(--space-4xl); padding-bottom: var(--space-xxl);">
            <div class="site-container reveal">
                <div class="seo-intro__grid">
                    <div class="seo-intro__content">
                        <div class="section-header">
                            <span class="meta text-accent">/// Car Repair in Tallinn</span>
                            <h2>A Thoughtful and Professional Approach</h2>
                        </div>
                        <p><strong>Mr.Car Autoremont Tallinnas</strong> is a modern and reliable car repair shop in Tallinn, officially operating under Anet Eesti OÜ. We service and repair passenger cars and vans, helping tallinn and Harjumaa car owners keep their vehicles safe, reliable, and technically sound year-round.</p>
                        <p>At the Mr.Car auto center in Tallinn, every job is based on a clear and professional process. Maintenance and repairs are carried out in accordance with car manufacturers' technical requirements and documentation.</p>
                        <p>We follow the repair technology and the correct sequence of work to ensure the result is durable and the car works as it should after the repair. We do not use temporary or simplified solutions if they could affect the vehicle's safety, reliability, or future use.</p>
                    </div>
                    <div class="seo-intro__image">
                        <img src="\${bgImage}" alt="Mr.Car Car Repair Tallinn - workflow">
                    </div>
                </div>
            </div>
        </section>

        <!-- Services All Grid Component -->
        <section class="services-section" style="padding-top: var(--space-2xl);">
            <div class="services-section__header site-container" style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1rem;">
                <div>
                    <span class="meta text-accent">/// Services</span>
                    <h2>Car Repair Services in Tallinn</h2>
                </div>
            </div>
            <div class="services-all site-container reveal">
                <div class="services-all__grid">
                    <a href="/en/services/maintenance-diagnostics" class="services-all__item"><span class="services-all__number"><iconify-icon icon="mdi:car-cog" width="24" height="24"></iconify-icon></span><span class="services-all__name">Scheduled maintenance (oil change, filters)</span><span class="services-all__arrow">→</span></a>
                    <a href="/en/services/engine-repair" class="services-all__item"><span class="services-all__number"><iconify-icon icon="mdi:engine" width="24" height="24"></iconify-icon></span><span class="services-all__name">Engine and transmission repair</span><span class="services-all__arrow">→</span></a>
                    <a href="/en/services/chassis-brakes" class="services-all__item"><span class="services-all__number"><iconify-icon icon="mdi:car-brake-alert" width="24" height="24"></iconify-icon></span><span class="services-all__name">Braking system and chassis repair</span><span class="services-all__arrow">→</span></a>
                    <a href="/en/services/exhaust-welding" class="services-all__item"><span class="services-all__number"><iconify-icon icon="mdi:fire" width="24" height="24"></iconify-icon></span><span class="services-all__name">Exhaust system repair and welding</span><span class="services-all__arrow">→</span></a>
                    <a href="#about-main" class="services-all__item"><span class="services-all__number"><iconify-icon icon="mdi:car-shift-pattern" width="24" height="24"></iconify-icon></span><span class="services-all__name">Wheel alignment</span><span class="services-all__arrow">→</span></a>
                    <a href="/en/services/ac-service" class="services-all__item"><span class="services-all__number"><iconify-icon icon="mdi:snowflake" width="24" height="24"></iconify-icon></span><span class="services-all__name">Climate and AC system maintenance & filling</span><span class="services-all__arrow">→</span></a>
                    <a href="/en/services/maintenance-diagnostics" class="services-all__item"><span class="services-all__number"><iconify-icon icon="mdi:laptop-mac" width="24" height="24"></iconify-icon></span><span class="services-all__name">Computer diagnostics and electronic coding</span><span class="services-all__arrow">→</span></a>
                    <a href="/en/services/webasto-repair" class="services-all__item"><span class="services-all__number"><iconify-icon icon="mdi:radiator" width="24" height="24"></iconify-icon></span><span class="services-all__name">Webasto installation and maintenance</span><span class="services-all__arrow">→</span></a>
                    <a href="#about-main" class="services-all__item"><span class="services-all__number"><iconify-icon icon="mdi:remote" width="24" height="24"></iconify-icon></span><span class="services-all__name">Remote start installation</span><span class="services-all__arrow">→</span></a>
                    <a href="#about-main" class="services-all__item"><span class="services-all__number"><iconify-icon icon="mdi:tools" width="24" height="24"></iconify-icon></span><span class="services-all__name">Various technical modifications (retrofitting)</span><span class="services-all__arrow">→</span></a>
                </div>
            </div>
        </section>

        <!-- Values Component -->
        <section class="services-section" style="background-color: var(--bg-surface); margin-top: var(--space-3xl); padding-top: var(--space-2xl); padding-bottom: var(--space-4xl);">
            <div class="services-section__header site-container">
                <span class="meta text-accent">/// Why Choose Us</span>
                <h2>Mr.Car Values</h2>
            </div>
            <div class="services-grid site-container reveal" style="padding-top: var(--space-lg);">
                <div class="service-card service-card--centered">
                    <div class="service-card__icon"><iconify-icon icon="mdi:message-check" width="28" height="28" aria-hidden="true"></iconify-icon></div>
                    <h3 class="service-card__title">Clear and Honest Communication</h3>
                    <p class="service-card__description">We prioritize transparent customer communication. Before starting, we explain the car's technical condition, discuss the work, and agree on the cost.</p>
                </div>
                <div class="service-card service-card--featured service-card--centered">
                    <div class="service-card__icon"><iconify-icon icon="mdi:star-circle" width="28" height="28" aria-hidden="true"></iconify-icon></div>
                    <h3 class="service-card__title">Customer Trust</h3>
                    <p class="service-card__description">The quality of our work is confirmed by customer feedback – a 4.9-star Google rating based on hundreds of real reviews.</p>
                </div>
                <div class="service-card service-card--centered">
                    <div class="service-card__icon"><iconify-icon icon="mdi:shield-check" width="28" height="28" aria-hidden="true"></iconify-icon></div>
                    <h3 class="service-card__title">Reliable Service</h3>
                    <p class="service-card__description">If you are looking for a car repair shop in Tallinn where a professional approach, an honest attitude, and consistent quality meet, Mr.Car is your safe choice.</p>
                </div>
            </div>
        </section>

        <section class="site-container reveal" style="padding: var(--space-3xl) 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
            <p style="margin-bottom: var(--space-lg); max-width: 600px; color: var(--text-main);">If necessary, we also offer detailing services to make the car look as good as it drives.</p>
            <a href="/en/contact" class="btn btn-primary" style="display: inline-flex;">Book an Appointment <span class="arrow">↗</span></a>
        </section>

    </main>`;

    content = content.replace(/<main id="about-main">[\s\S]*?<\/main>/, newMain);
    fs.writeFileSync('en/about.html', content, 'utf8');
}

rewriteEstonian();
rewriteRussian();
rewriteEnglish();
console.log('All About pages have been rewritten safely.');
