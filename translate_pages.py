import re

def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def write_file(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

et_html = read_file('services/automaatkasti-remont.html')
ru_layout = read_file('ru/services/remont-kpp.html')
en_layout = read_file('en/services/transmission-repair.html')

def extract_block(html, start_marker, end_marker):
    start = html.find(start_marker)
    if start == -1: return ""
    end = html.find(end_marker, start)
    if end == -1: end = len(html)
    return html[start:end]

def swap_layouts(source_html, template_html, lang):
    # 1. Navbar + Mobile Menu
    nav_start = '<!-- NAVBAR -->'
    nav_end = '<!-- HERO -->'
    source_nav = extract_block(source_html, nav_start, nav_end)
    tmpl_nav = extract_block(template_html, nav_start, nav_end)
    html = source_html.replace(source_nav, tmpl_nav)
    
    # 2. Sidebar Mobile
    sm_start = '<!-- MOBILE SIDEBAR TOGGLE -->'
    sm_end = '<!-- MAIN CONTENT (2 columns) -->'
    source_sm = extract_block(html, sm_start, sm_end)
    tmpl_sm = extract_block(template_html, sm_start, sm_end)
    html = html.replace(source_sm, tmpl_sm)
    
    # 3. Sidebar Desktop
    sd_start = '<!-- RIGHT: Sidebar -->'
    sd_end = '<!-- CONTACT FORM -->'
    source_sd = extract_block(html, sd_start, sd_end)
    tmpl_sd = extract_block(template_html, sd_start, sd_end)
    html = html.replace(source_sd, tmpl_sd)

    # 4. Contact Form + Map + Footer + scripts
    # Actually Contact Form is already generic, but translates text. Let's just swap Contact form through Footer!
    cf_start = '<!-- CONTACT FORM -->'
    cf_end = '</body>'
    source_cf = extract_block(html, cf_start, cf_end)
    tmpl_cf = extract_block(template_html, cf_start, cf_end)
    html = html.replace(source_cf, tmpl_cf)
    
    # 5. Head modifications (everything before NAVBAR)
    # We will do this manually in string replacements because Meta/OpenGraph differ per page.
    
    return html

# RU Replacements
replacements_ru = {
    '<html lang="et">': '<html lang="ru">',
    '<title>Automaatkäigukasti remont Tallinnas — DSG, ZF ja teised | Mr.Car</title>': '<title>Ремонт АКПП в Таллинне — DSG, ZF и другие | Mr.Car</title>',
    '<meta name="description" content="Professionaalne automaatkäigukasti remont Tallinnas. Diagnostika, DSG ja ZF hooldus, mehatroonika taastamine. Garantii 12 kuud. Kopli 82a.">': '<meta name="description" content="Профессиональный ремонт АКПП в Таллинне. Диагностика, обслуживание DSG и ZF, восстановление мехатроника. Гарантия 12 месяцев. Kopli 82a.">',
    
    '<meta property="og:title" content="Automaatkäigukasti remont Tallinnas — DSG, ZF ja teised | Mr.Car">': '<meta property="og:title" content="Ремонт АКПП в Таллинне — DSG, ZF и другие | Mr.Car">',
    '<meta property="og:description" content="Professionaalne automaatkäigukasti remont Tallinnas. Diagnostika, DSG ja ZF hooldus, mehatroonika taastamine. Garantii 12 kuud. Kopli 82a.">': '<meta property="og:description" content="Профессиональный ремонт АКПП в Таллинне. Диагностика, обслуживание DSG и ZF, восстановление мехатроника. Гарантия 12 месяцев. Kopli 82a.">',
    '<meta property="og:url" content="https://mrcar.ee/services/automaatkasti-remont.html">': '<meta property="og:url" content="https://mrcar.ee/ru/services/remont-akpp">',
    
    '<meta name="twitter:title" content="Käigukasti remont Tallinnas — Diagnostika ja hooldus | Mr.Car">': '<meta name="twitter:title" content="Ремонт АКПП в Таллинне — Диагностика и обслуживание | Mr.Car">',
    '<meta name="twitter:description" content="Professionaalne käigukasti remont Tallinnas. Diagnostika, hooldus ja remont nii automaat- (sh DSG, ZF) kui ka manuaalkäigukastidele. Garantii 12 kuud. Kopli 82a.">': '<meta name="twitter:description" content="Профессиональный ремонт АКПП в Таллинне. Диагностика, обслуживание и ремонт автоматов (DSG, ZF). Гарантия 12 месяцев. Kopli 82a.">',
    
    '"name": "Automaatkäigukasti remont"': '"name": "Ремонт АКПП"',
    '"description": "Professionaalne automaatkäigukasti remont Tallinnas. Diagnostika, DSG ja ZF hooldus, mehatroonika taastamine. Garantii 12 kuud. Kopli 82a."': '"description": "Профессиональный ремонт АКПП в Таллинне. Диагностика, обслуживание DSG и ZF, восстановление мехатроника. Гарантия 12 месяцев. Kopli 82a."',
    '"url": "https://www.mrcar.ee/services/automaatkasti-remont"': '"url": "https://www.mrcar.ee/ru/services/remont-akpp"',
    '"url": "https://www.mrcar.ee/services/automaatkasti-remont.html"': '"url": "https://www.mrcar.ee/ru/services/remont-akpp"',

    '<link rel="canonical" href="https://mrcar.ee/services/automaatkasti-remont">': '<link rel="canonical" href="https://mrcar.ee/ru/services/remont-akpp">',
    '<!-- <link rel="alternate" hreflang="ru" href="https://www.mrcar.ee/ru/services/remont-akpp"> -->': '<link rel="alternate" hreflang="ru" href="https://www.mrcar.ee/ru/services/remont-akpp">',
    '<!-- <link rel="alternate" hreflang="en" href="https://www.mrcar.ee/en/services/automatic-transmission-repair"> -->': '<link rel="alternate" hreflang="en" href="https://www.mrcar.ee/en/services/automatic-transmission-repair">',
    'aria-label="Automaatkäigukasti teemad"': 'aria-label="Темы по АКПП"',
    'Automaatkäigukasti rikke peamised sümptomid': 'Основные симптомы неисправности АКПП',
    'Nõkutamine ja kolin': 'Пинки и стуки',
    'Tugevad nõksud või kolksud käiguvahetusel – eriti kiirendades või pidurdades. See viitab hüdrosüsteemi või mehatroonika tõrgetele.': 'Сильные рывки или удары при переключении передач – особенно при ускорении или торможении. Это указывает на сбои в гидравлической системе или мехатронике.',
    'Automaatkäigukasti remont ja diagnostika': 'Ремонт и диагностика АКПП',
    'Likvideerime jõnksutamise, käikude libisemise ja avariirežiimi 100% täpsusega. Päästame kasti kulukast kapitaalremondist, kui pöördute õigel ajal.': 'Устраняем пинки, пробуксовки и аварийный режим со 100% точностью. Спасём коробку от дорогостоящего капитального ремонта при своевременном обращении.',
    'Saada päring <span class="arrow">↗</span>': 'Оставить заявку <span class="arrow">↗</span>',
    
    'Käigukasti remont': 'Ремонт КПП',
    'Sümptomid': 'Симптомы',
    'Diagnostika': 'Диагностика',
    'DSG & ZF': 'DSG и ZF',
    'FAQ': 'Частые вопросы',
    
    'Spetsialiseeritud automaatkäigukastide diagnostika ja remont Tallinnas': 'Специализированная диагностика и ремонт АКПП в Таллинне',
    'Automaatkäigukast on tänapäevase auto üks keerulisemaid sõlmi — selles on sadu hüdraulilisi, mehaanilisi ja elektroonilisi komponente, mis töötavad kõrge täpsuse ja rõhu all. Rike ühes detailis võib kiiresti laieneda kogu süsteemile.': 'Автоматическая коробка передач — один из самых сложных узлов современного автомобиля. В ней сотни гидравлических, механических и электронных компонентов, работающих под высоким давлением с высокой точностью. Поломка одной детали может быстро вывести из строя всю систему.',
    'Mr.Car on spetsialiseerunud automaatkäigukastide diagnostikale ja remondile. Kasutame tootjaspetsiifilisi eriseadmeid, et tuvastada rikke täpne põhjus ja vältida kogu sõlme kallist asendamist. Remondime klassikalisi automaatkäigukaste, DSG- ja ZF-käigukaste.': 'Mr.Car специализируется на диагностике и ремонте АКПП. Мы используем дилерское оборудование для точного выявления причины неисправности и предотвращения дорогостоящей замены всего узла. Ремонтируем классические автоматы, коробки DSG и ZF.',
    
    'Miks ei tohi automaatkäigukasti probleemidega viivitada?': 'Почему нельзя затягивать с ремонтом АКПП?',
    'Automaatkäigukasti rike ei lase end lihtsalt oodata — kahjustused süvenevad iga sõidetud kilomeetriga. Metallipuru levib süsteemis, ummistab klapikorpuse kanaleid ja hävitab hüdraulikadetaile. <strong>Mida varem pöördud, seda väiksem on remondi ulatus ja hind.</strong> Viivitamine tähendab sageli käigukasti täielikku asendamist uue vastu.': 'Неисправности АКПП не проходят сами собой — повреждения усугубляются с каждым пройденным километром. Металлическая стружка разносится по системе, забивает каналы гидроблока и разрушает детали гидравлики. <strong>Чем раньше вы обратитесь к специалистам, тем меньше будет объем и стоимость ремонта.</strong> Промедление часто означает полную замену коробки передач.',
    
    'Kuidas tunda ära automaatkäigukasti rike?': 'Как распознать неисправность АКПП?',
    'Peamised sümptomid, mida ei tohiks eirata': 'Основные симптомы, которые нельзя игнорировать',
    
    'Jõnksumine ja löögid': 'Пинки и рывки',
    'Tugevad tõmbed käiguvahetusel viitavad ventiilikorpuse kulumisele, madala õlirõhule või hüdrotransformaatori veale automaatkäigukastis.': 'Сильные рывки при переключении передач указывают на износ гидроблока, низкое давление масла или неисправность гидротрансформатора в АКПП.',
    'LOE, MIKS KÄIGUKAST JÕNKSUB →': 'ЧИТАТЬ, ПОЧЕМУ ПИНАЕТСЯ АКПП →',
    
    'Libisemine': 'Пробуксовка',
    'Pöörete tõus ilma vastavate kiirendamiseta — tähendab, et automaatkäigukasti sidurite pakid ei hoia enam käiku ja pöördemoment kadub.': 'Обороты растут, а машина не ускоряется — это значит, что пакеты фрикционов АКПП больше не держат передачу и крутящий момент теряется.',
    'LOE, MIDA LIBISEMINE TÄHENDAB →': 'ЧИТАТЬ О ПРОБУКСОВКЕ →',
    
    'Viivitused käiguvahetusel': 'Задержки при переключении',
    'Automaatkäigukast lülitab käiku aeglustatud viitega — põhjuseks võib olla madal rõhk, ventiilikorpuse ummistus või mehatroonika tõrge.': 'АКПП включает передачу с запаздыванием — причиной может быть низкое давление, засор гидроблока или сбой мехатроника.',
    'LOE KÄIGUVAHETUSE VIIVITUSTE KOHTA →': 'ЧИТАТЬ О ЗАДЕРЖКАХ →',
    
    'Müra ja undamine': 'Шум и гул',
    'Undamine, sahisemine või kolinad automaatkäigukastist viitavad laagrite, hammasrataste või hüdrotransformaatori kulumisele.': 'Гул, шелест или стуки из АКПП указывают на износ подшипников, шестерен или гидротрансформатора.',
    'LOE AUTOMAATKÄIGUKASTI MÜRA KOHTA →': 'ЧИТАТЬ О ШУМАХ В АКПП →',
    
    'Õlileke': 'Течь масла',
    'Punakad-pruunid plekid auto all → rõhktihendite kulumine automaatkäigukastis. Õlitaseme langus viib kiire ja kallite kahjustusteni.': 'Красно-коричневые пятна под авто → износ сальников и прокладок в АКПП. Падение уровня масла ведет к быстрым и дорогим поломкам.',
    'LOE ÕLILEKKE PEATAMISEST →': 'КАК ОСТАНОВИТЬ ТЕЧЬ →',
    
    'Avariirežiim': 'Аварийный режим',
    'Auto lülitub ohurežiimi ja kuvab veateate — kaitsefunktsioon, mis väldib käigukasti täielikku blokeerumist. Vajalik on kohene diagnostika.': 'Машина переходит в безопасный режим и выдает ошибку на панель — это защитная функция, предотвращающая полную блокировку коробки. Необходима срочная диагностика.',
    'LOE, MIDA TEHA AVARIIREŽIIMIS →': 'ЧТО ДЕЛАТЬ В АВАРИЙНОМ РЕЖИМЕ →',
    
    'href="/services/kaigukastiremont.html"': 'href="/ru/services/remont-kpp.html"',
    'href="/services/automaatkast-jouksutab"': 'href="/ru/services/akpp-pinki"',
    'href="/services/automaatkast-libiseb"': 'href="/ru/services/akpp-probuksovka"',
    'href="/services/kaiguvahetus-viibib"': 'href="/ru/services/akpp-zaderzhki"',
    'href="/services/automaatkasti-mura"': 'href="/ru/services/akpp-shum"',
    'href="/services/automaatkasti-olileke"': 'href="/ru/services/akpp-utechka"',
    'href="/services/automaatkast-avariireziim"': 'href="/ru/services/akpp-avarijnyj-rezhim"',
    
    'Mida tähendab automaatkäigukasti rikke eiramine?': 'К чему приведет игнорирование проблем с АКПП?',
    'Esimesed sümptomid': 'Первые симптомы',
    'Väikesed viivitused, kerge jõnksumine — diagnostika tuvastab probleemi varajases staadiumis. Sageli piisab õlivahetusest või ventiilikorpuse puhastamisest.': 'Небольшие задержки, легкие пинки — диагностика выявит проблему на ранней стадии. Часто достаточно замены масла или чистки гидроблока.',
    'Kahjustused süvenevad': 'Повреждения усугубляются',
    'Käigukast libiseb, avariirežiim aktiveerub. Metallipuru levib süsteemis. Vaja on ventiilikorpuse ja hüdroagregaadi remonti.': 'Коробка буксует, включается аварийный режим. Стружка расходится по системе. Требуется ремонт гидроблока и гидротрансформатора.',
    'Täielik blokeerumine': 'Полная блокировка',
    'Käigukast keeldub käike lülitamast. Kogu sõlm tuleb demonteerida ja taastada või asendada. Kulukaim stsenaarium.': 'Коробка отказывается переключать передачи. Весь узел нужно снимать и восстанавливать или менять на новый. Самый дорогой сценарий.',
    
    'Automaatkäigukasti diagnostika — ainuõige esimene samm': 'Диагностика АКПП — единственно верный первый шаг',
    'Automaatkäigukasti remondi edukus algab alati täpsest diagnostikast. Pimesi osade vahetamine raiskab eelarvet ja ei pruugi algpõhjust lahendada.': 'Успех ремонта АКПП всегда начинается с точной диагностики. Замена деталей вслепую тратит бюджет и не всегда решает первопричину.',
    'Arvutidiagnostika — tõrkekoodide ja live-andmete lugemine': 'Компьютерная диагностика — чтение кодов ошибок и live-параметров',
    'Hüdraulikarõhkude mõõtmine — klapikorpuse funktsionaalsuse kontroll': 'Замер давления гидравлики — проверка функциональности гидроблока',
    'Õlianalüüs — metallipuru ja kulumise tuvastamine': 'Анализ масла — выявление стружки и признаков износа',
    'Tutvu käigukasti diagnostika protsessiga täpsemalt →': 'Подробнее о процессе диагностики АКПП →',
    'href="/services/automaatkasti-diagnostika"': 'href="/ru/services/diagnostika-akpp"',
    
    'Peamised automaatkäigukasti remondi lahendused': 'Основные решения по ремонту АКПП',
    'Sõltuvalt diagnostika tulemustest valime sobivaima tee': 'В зависимости от результатов диагностики мы выберем самый подходящий путь',
    '1. Õli ja filtri vahetus': '1. Замена масла и фильтра',
    'Dünaamiline õlivahetus ja süsteemi läbipesu. Eemaldab vanast õlist tekkinud kulumisjäägid ja lahendab kergemad jõnksumised varases faasis.': 'Динамическая (полная) замена масла и промывка системы. Удаляет продукты износа из старого масла и решает легкие пинки на ранней стадии.',
    '2. Mehatroonika remont': '2. Ремонт мехатроника',
    'Hüdroploki (hüdroboki) pesu, defektsete solenoide ja tihendite asendus. Taastab kiire käiguvahetuse, eemaldab viivitused ja rõhukaod.': 'Промывка гидроблока, замена неисправных соленоидов и прокладок. Восстанавливает быстрое переключение передач, устраняет задержки и потери давления.',
    '3. Kapitaalne taastamine': '3. Капитальное восстановление',
    'Käigukasti eemaldamine ja lahtivõtmine. Asendatakse hõõrdekettad, tihendid ja kahjustatud detailid. Vajalik juhul, kui mehhanism on füüsiliselt hävinud.': 'Снятие и разборка коробки. Заменяются пакеты фрикционов, прокладки и поврежденные узлы. Требуется в случае сильного механического разрушения.',
    
    'Kuidas käib automaatkäigukasti remont Mr.Caris?': 'Как проходит ремонт АКПП в Mr.Car?',
    'Arvutiskannimine, rõhukontroll, tõrkekoodid → tuvastame täpse põhjuse': 'Компьютерное сканирование, проверка давления, выявление кодов → находим точную причину',
    'Selge pakkumine': 'Понятная смета',
    'Teavitame, mis on katki, mis maksab — enne remondi alustamist': 'Сообщаем, что сломалось и сколько будет стоить — до начала ремонта',
    'Remont tehasestandardis': 'Ремонт по стандартам завода',
    'Vahetame/taastame ainult kulunud osad, originaaldetailid': 'Меняем или восстанавливаем только изношенные запчасти, OEM качество',
    'Garantii 12 kuud': 'Гарантия 12 месяцев',
    'Kirjalik garantii osadele ja tehtud tööle': 'Письменная гарантия на запчасти и проделанную работу',
    
    'DSG ja ZF käigukastid — kõrgtehnoloogilised lahendused': 'Коробки DSG и ZF — высокотехнологичные решения',
    '<strong>DSG (Direct Shift Gearbox)</strong> on Volkswagen Grupi välja töötatud kahesiduriklutšiga käigukast, mida leidub VW, Audi, Škoda ja SEAT sõidukites. DSG on tundlik õliseisundile ja mehatroonika hälvetele — tüüpilised rikked hõlmavad siduripakirike ja mehatroonikamooduli tõrkeid. Mr.Car remondib DSG käigukaste eriseadmetega.': '<strong>DSG (Direct Shift Gearbox)</strong> — это преселективная коробка с двойным сцеплением от VAG концерна (VW, Audi, Škoda, SEAT). DSG чувствительна к чистоте масла и сбоям мехатроника: типичные поломки касаются сцепления и платы/блока мехатроника. Mr.Car ремонтирует коробки DSG с применением специнструмента.',
    '<strong>ZF</strong> (ZF Friedrichshafen) toodab laialt levinud automaatkäigukaste (8HP, 9HP), mida kasutatakse BMW, Volvo, Land Rover ja teistes premium-sõidukites. ZF käigukastid nõuavad spetsiifilisi diagnostikaseadmeid ja erilise viskoossusega transmisooniõli. Mr.Car tegeleb ZF käigukastide diagnostika ja remondiga.': '<strong>ZF</strong> (ZF Friedrichshafen) производит популярные АКПП (8HP, 9HP), используемые в премиум-сегменте — BMW, Volvo, Land Rover и др. Коробки ZF требуют профильного оборудования и специального трансмиссионного масла. Мы выполняем квалифицированную диагностику и ремонт АКПП ZF.',
    'Spetsialiseerume:': 'Специализируемся на:',
    
    '1 aasta / 20 000 km tehtud töödele, kirjalik garantii osadele ja tööle.': '1 год / 20 000 км на работу, письменная гарантия на детали и ремонт.',
    'Originaalosad ja kvaliteet': 'Оригинальные запчасти и качество',
    'Otsesed tarnijad, OEM kvaliteet — kasutame ainult tunnustatud varuosi.': 'Прямые поставщики, OEM качество — используем только надежные компоненты.',
    'Hinnastame selgelt': 'Прозрачные цены',
    'Enne remonti teavitame täpselt, mis maksab diagnostika ja mis remont ise.': 'До начала работ точно озвучиваем стоимость диагностики и самого ремонта.',
    
    'Korduma kippuvad küsimused': 'Частые вопросы',
    'Mis vahe on klassikalisel automaatkäigukastil ja DSG-l?': 'В чем разница между классической АКПП и DSG?',
    'Klassikaline automaatkäigukast (hüdromehaaniline) kasutab väänet edastavat hüdrotransformaatorit, mis tagab väga sujuva sõidu. DSG (Direct Shift Gearbox) on kahesiduriklutšiga käigukast, mis vahetab käike oluliselt kiiremini ja efektiivsemalt, kuid on ehituselt teistsugune ja nõuab spetsiifilist hooldust.': 'Классический автомат использует гидротрансформатор для плавной передачи крутящего момента. DSG — это роботизированная коробка с двумя сцеплениями. Она переключает передачи быстрее и эффективнее, но имеет иное устройство и требует более специфического подхода.',
    'Mis vahe on automaatkäigukastil ja CVT-l?': 'В чем отличие АКПП от вариатора (CVT)?',
    'CVT (Continuously Variable Transmission) ehk variaatorkäigukast sarnaneb sõidu poolelt automaatkastiga, kuid tal pole astmelisi käike. Mr.Car spetsialiseerub ainult astmelistele automaatkäigukastidele (sh DSG ja ZF), CVT-tüüpi käigukaste me ei remondi.': 'Вариатор (CVT) для водителя похож на автомат, но в нем нет ступеней переключения (шестерен). Mr.Car обслуживает и ремонтирует только ступенчатые автоматические и роботизированные трансмиссии (АКПП, DSG, ZF). Вариаторами мы не занимаемся.',
    'Kui palju maksab automaatkäigukasti remont?': 'Сколько стоит ремонт АКПП?',
    'Kuna automaatkäigukast on väga keeruline seade, selgub remondi maksumus alles peale diagnostikat. Arvutidiagnostika ja õlirõhkude mõõtmine annavad selge pildi, mis detail vajab taastamist või vahetamist. Esitame selge pakkumise enne tööde algust.': 'Так как АКПП — очень сложный агрегат, точная стоимость становится понятна только после диагностики. Компьютерная проверка, замер давлений и тест-драйв дают картину — что именно нужно восстанавливать или менять. Озвучиваем смету до начала работ.',
    'Kas automaatkäigukasti saab remontida avariirežiimis?': 'Можно ли ездить в аварийном режиме?',
    'Avariirežiim on kaitsefunktsioon, mis pannakse peale kasti eluga päästmiseks. Autoga avariirežiimis sõita ei tohi! Sõiduk tuleb toimetada koheselt töökotta diagnostikale.': 'Аварийный режим — это защитная функция, спасающая коробку от полного разрушения. Ездить на авто в аварийном режиме нельзя! Машину нужно немедленно доставить в сервис для диагностики.',
    'Kui tihti peaks automaatkäigukasti õlivahetust tegema?': 'Как часто нужно менять масло в АКПП?',
    'Automaatkäigukasti õli ning filtri vahetus on soovituslik teha iga 60 000 – 80 000 km tagant, et tagada käigukasti pikk eluiga ning sujuv töö.': 'Замену масла и фильтра в АКПП рекомендуется производить каждые 60 000 – 80 000 км для обеспечения долгого срока службы и плавной работы.',
    'Mis juhtub, kui õlivahetus liiga kaua edasi lükata?': 'Что будет, если не менять масло в АКПП вовремя?',
    'Vana õli kaotab oma määrdeomadused ning korjab endasse kuluosadest tekkivat metallipuru, mis omakorda toimib nagu abrasiiv, kulutades tihendeid, klappe ja filtreid. See toob kaasa rõhulangused ja käigukasti hävinemise.': 'Старое масло теряет свои смазывающие свойства и накапливает в себе металлическую пудру от износа фрикционов. Эта взвесь работает как абразив, стачивая клапаны гидроблока, сальники и фильтры. Итог — падение давления и гибель коробки.',
    
    'Kahtlustad automaatkäigukasti probleemi?': 'Подозреваете проблемы с АКПП?',
    'Ära oota lõpliku blokeerumiseni. Diagnostika tuvastab probleemi põhjusse ja säästab raha remondil.': 'Не ждите полной остановки. Дефектовка выявит причину и сбережет ваши средства на ремонте.',
    'Broneeri diagnostika <span class="arrow">↗</span>': 'Записаться на диагностику <span class="arrow">↗</span>',
}

# EN Replacements
replacements_en = {
    '<html lang="et">': '<html lang="en">',
    '<title>Automaatkäigukasti remont Tallinnas — DSG, ZF ja teised | Mr.Car</title>': '<title>Automatic Transmission Repair in Tallinn — DSG, ZF & More | Mr.Car</title>',
    '<meta name="description" content="Professionaalne automaatkäigukasti remont Tallinnas. Diagnostika, DSG ja ZF hooldus, mehatroonika taastamine. Garantii 12 kuud. Kopli 82a.">': '<meta name="description" content="Professional automatic transmission repair in Tallinn. Diagnostics, DSG and ZF service, mechatronics restoration. 12-month warranty. Kopli 82a.">',
    
    '<meta property="og:title" content="Automaatkäigukasti remont Tallinnas — DSG, ZF ja teised | Mr.Car">': '<meta property="og:title" content="Automatic Transmission Repair in Tallinn — DSG, ZF & More | Mr.Car">',
    '<meta property="og:description" content="Professionaalne automaatkäigukasti remont Tallinnas. Diagnostika, DSG ja ZF hooldus, mehatroonika taastamine. Garantii 12 kuud. Kopli 82a.">': '<meta property="og:description" content="Professional automatic transmission repair in Tallinn. Diagnostics, DSG and ZF service, mechatronics restoration. 12-month warranty. Kopli 82a.">',
    '<meta property="og:url" content="https://mrcar.ee/services/automaatkasti-remont.html">': '<meta property="og:url" content="https://mrcar.ee/en/services/automatic-transmission-repair">',
    
    '<meta name="twitter:title" content="Käigukasti remont Tallinnas — Diagnostika ja hooldus | Mr.Car">': '<meta name="twitter:title" content="Automatic Transmission Repair in Tallinn — Diagnostics & Service | Mr.Car">',
    '<meta name="twitter:description" content="Professionaalne käigukasti remont Tallinnas. Diagnostika, hooldus ja remont nii automaat- (sh DSG, ZF) kui ka manuaalkäigukastidele. Garantii 12 kuud. Kopli 82a.">': '<meta name="twitter:description" content="Professional automatic transmission repair in Tallinn. Diagnostics, service, and automatic gearbox repairs (DSG, ZF). 12-month warranty. Kopli 82a.">',
    
    '"name": "Automaatkäigukasti remont"': '"name": "Automatic Transmission Repair"',
    '"description": "Professionaalne automaatkäigukasti remont Tallinnas. Diagnostika, DSG ja ZF hooldus, mehatroonika taastamine. Garantii 12 kuud. Kopli 82a."': '"description": "Professional automatic transmission repair in Tallinn. Diagnostics, DSG and ZF service, mechatronics restoration. 12-month warranty. Kopli 82a."',
    '"url": "https://www.mrcar.ee/services/automaatkasti-remont"': '"url": "https://www.mrcar.ee/en/services/automatic-transmission-repair"',
    '"url": "https://www.mrcar.ee/services/automaatkasti-remont.html"': '"url": "https://www.mrcar.ee/en/services/automatic-transmission-repair"',

    '<link rel="canonical" href="https://mrcar.ee/services/automaatkasti-remont">': '<link rel="canonical" href="https://mrcar.ee/en/services/automatic-transmission-repair">',
    '<!-- <link rel="alternate" hreflang="ru" href="https://www.mrcar.ee/ru/services/remont-akpp"> -->': '<link rel="alternate" hreflang="ru" href="https://www.mrcar.ee/ru/services/remont-akpp">',
    '<!-- <link rel="alternate" hreflang="en" href="https://www.mrcar.ee/en/services/automatic-transmission-repair"> -->': '<link rel="alternate" hreflang="en" href="https://www.mrcar.ee/en/services/automatic-transmission-repair">',
    'aria-label="Automaatkäigukasti teemad"': 'aria-label="Transmission topics"',
    'Automaatkäigukasti rikke peamised sümptomid': 'Main symptoms of automatic transmission failure',
    'Nõkutamine ja kolin': 'Jerking and Clunking',
    'Tugevad nõksud või kolksud käiguvahetusel – eriti kiirendades või pidurdades. See viitab hüdrosüsteemi või mehatroonika tõrgetele.': 'Strong jerks or clunks during shifting – especially when accelerating or braking. This indicates hydraulic system or mechatronics issues.',
    '/// Mr.Car Autoteenindus': '/// Mr.Car Auto Service',
    'Automaatkäigukasti remont ja diagnostika': 'Automatic Transmission Repair & Diagnostics',
    'Likvideerime jõnksutamise, käikude libisemise ja avariirežiimi 100% täpsusega. Päästame kasti kulukast kapitaalremondist, kui pöördute õigel ajal.': 'We eliminate jerking, gear slipping, and limp mode with 100% accuracy. Save your transmission from an expensive overhaul by getting professional help in time.',
    'Saada päring <span class="arrow">↗</span>': 'Send Request <span class="arrow">↗</span>',
    
    'Käigukasti remont': 'Gearbox Repair',
    'Sümptomid': 'Symptoms',
    'Diagnostika': 'Diagnostics',
    'DSG & ZF': 'DSG & ZF',
    'FAQ': 'FAQ',
    
    'Spetsialiseeritud automaatkäigukastide diagnostika ja remont Tallinnas': 'Specialized Automatic Transmission Diagnostics & Repair in Tallinn',
    'Automaatkäigukast on tänapäevase auto üks keerulisemaid sõlmi — selles on sadu hüdraulilisi, mehaanilisi ja elektroonilisi komponente, mis töötavad kõrge täpsuse ja rõhu all. Rike ühes detailis võib kiiresti laieneda kogu süsteemile.': 'An automatic transmission is one of the most complex assemblies in a modern car. It contains hundreds of hydraulic, mechanical, and electronic components operating under high pressure with high precision. A failure in one part can quickly spread to the entire system.',
    'Mr.Car on spetsialiseerunud automaatkäigukastide diagnostikale ja remondile. Kasutame tootjaspetsiifilisi eriseadmeid, et tuvastada rikke täpne põhjus ja vältida kogu sõlme kallist asendamist. Remondime klassikalisi automaatkäigukaste, DSG- ja ZF-käigukaste.': 'Mr.Car specializes in automatic transmission diagnostics and repair. We use dealer-level equipment to pinpoint the exact cause of the malfunction and prevent expensive complete replacement. We repair classic automatics, as well as DSG and ZF gearboxes.',
    
    'Miks ei tohi automaatkäigukasti probleemidega viivitada?': 'Why shouldn\'t you delay addressing transmission problems?',
    'Automaatkäigukasti rike ei lase end lihtsalt oodata — kahjustused süvenevad iga sõidetud kilomeetriga. Metallipuru levib süsteemis, ummistab klapikorpuse kanaleid ja hävitab hüdraulikadetaile. <strong>Mida varem pöördud, seda väiksem on remondi ulatus ja hind.</strong> Viivitamine tähendab sageli käigukasti täielikku asendamist uue vastu.': 'Automatic transmission failures won\'t fix themselves — damage worsens with every mile driven. Metal debris spreads through the system, clogging valve body channels and destroying hydraulics. <strong>The earlier you seek help, the lower the repair scope and cost.</strong> Delaying often leads to full transmission replacement.',
    
    'Kuidas tunda ära automaatkäigukasti rike?': 'How to recognize an automatic transmission failure?',
    'Peamised sümptomid, mida ei tohiks eirata': 'Key symptoms you shouldn\'t ignore',
    
    'Jõnksumine ja löögid': 'Jerking and Clunking',
    'Tugevad tõmbed käiguvahetusel viitavad ventiilikorpuse kulumisele, madala õlirõhule või hüdrotransformaatori veale automaatkäigukastis.': 'Hard shifts point to valve body wear, low oil pressure, or a torque converter failure in the automatic transmission.',
    'LOE, MIKS KÄIGUKAST JÕNKSUB →': 'READ WHY YOUR TRANSMISSION JERKS →',
    
    'Libisemine': 'Slipping Gears',
    'Pöörete tõus ilma vastavate kiirendamiseta — tähendab, et automaatkäigukasti sidurite pakid ei hoia enam käiku ja pöördemoment kadub.': 'RPMs rising without matching acceleration — this means the transmission clutch packs are failing to hold the gear and torque is being lost.',
    'LOE, MIDA LIBISEMINE TÄHENDAB →': 'READ WHAT GEAR SLIPPING MEANS →',
    
    'Viivitused käiguvahetusel': 'Delayed Shifting',
    'Automaatkäigukast lülitab käiku aeglustatud viitega — põhjuseks võib olla madal rõhk, ventiilikorpuse ummistus või mehatroonika tõrge.': 'The automatic transmission engages a gear with a delayed response — causes could be low pressure, valve body clogging, or a mechatronics glitch.',
    'LOE KÄIGUVAHETUSE VIIVITUSTE KOHTA →': 'READ ABOUT DELAYED SHIFTS →',
    
    'Müra ja undamine': 'Noise and Whining',
    'Undamine, sahisemine või kolinad automaatkäigukastist viitavad laagrite, hammasrataste või hüdrotransformaatori kulumisele.': 'Whining, hissing, or knocking from the automatic transmission indicates wear on bearings, gears, or the torque converter.',
    'LOE AUTOMAATKÄIGUKASTI MÜRA KOHTA →': 'READ ABOUT TRANSMISSION NOISES →',
    
    'Õlileke': 'Oil Leaks',
    'Punakad-pruunid plekid auto all → rõhktihendite kulumine automaatkäigukastis. Õlitaseme langus viib kiire ja kallite kahjustusteni.': 'Reddish-brown spots under the car → worn pressure seals in the automatic transmission. Dropping oil levels lead to fast and expensive damage.',
    'LOE ÕLILEKKE PEATAMISEST →': 'HOW TO STOP AN OIL LEAK →',
    
    'Avariirežiim': 'Limp Mode',
    'Auto lülitub ohurežiimi ja kuvab veateate — kaitsefunktsioon, mis väldib käigukasti täielikku blokeerumist. Vajalik on kohene diagnostika.': 'The car enters safe mode and displays an error message on the dash — a protective function to prevent total gearbox lockup. Immediate diagnostics required.',
    'LOE, MIDA TEHA AVARIIREŽIIMIS →': 'WHAT TO DO IN LIMP MODE →',
    
    'href="/services/kaigukastiremont.html"': 'href="/en/services/transmission-repair"',
    'href="/services/automaatkast-jouksutab"': 'href="/en/services/akpp-jerking"',
    'href="/services/automaatkast-libiseb"': 'href="/en/services/akpp-slipping"',
    'href="/services/kaiguvahetus-viibib"': 'href="/en/services/akpp-delays"',
    'href="/services/automaatkasti-mura"': 'href="/en/services/akpp-noise"',
    'href="/services/automaatkasti-olileke"': 'href="/en/services/akpp-leaks"',
    'href="/services/automaatkast-avariireziim"': 'href="/en/services/akpp-limp-mode"',
    
    'Mida tähendab automaatkäigukasti rikke eiramine?': 'What happens if you ignore an automatic transmission failure?',
    'Esimesed sümptomid': 'First Symptoms',
    'Väikesed viivitused, kerge jõnksumine — diagnostika tuvastab probleemi varajases staadiumis. Sageli piisab õlivahetusest või ventiilikorpuse puhastamisest.': 'Minor delays, light jerking — diagnostics reveal the issue at an early stage. An oil change or valve body cleaning is often enough.',
    'Kahjustused süvenevad': 'Damage Worsens',
    'Käigukast libiseb, avariirežiim aktiveerub. Metallipuru levib süsteemis. Vaja on ventiilikorpuse ja hüdroagregaadi remonti.': 'Transmission slips, limp mode activates. Metal shards spread through the system. Valve body and torque converter repairs are needed.',
    'Täielik blokeerumine': 'Complete Lockup',
    'Käigukast keeldub käike lülitamast. Kogu sõlm tuleb demonteerida ja taastada või asendada. Kulukaim stsenaarium.': 'The transmission refuses to shift gears. The entire assembly must be removed and rebuilt or replaced. The most expensive scenario.',
    
    'Automaatkäigukasti diagnostika — ainuõige esimene samm': 'Automatic Transmission Diagnostics — The Only Right First Step',
    'Automaatkäigukasti remondi edukus algab alati täpsest diagnostikast. Pimesi osade vahetamine raiskab eelarvet ja ei pruugi algpõhjust lahendada.': 'Successful transmission repair always starts with accurate diagnostics. Blind part replacement wastes money and rarely solves the root cause.',
    'Arvutidiagnostika — tõrkekoodide ja live-andmete lugemine': 'Computer Diagnostics — reading fault codes and live data',
    'Hüdraulikarõhkude mõõtmine — klapikorpuse funktsionaalsuse kontroll': 'Hydraulic Pressure Measurement — checking valve body functionality',
    'Õlianalüüs — metallipuru ja kulumise tuvastamine': 'Oil Analysis — detecting metal shavings and signs of wear',
    'Tutvu käigukasti diagnostika protsessiga täpsemalt →': 'Learn more about the transmission diagnostic process →',
    'href="/services/automaatkasti-diagnostika"': 'href="/en/services/automatic-transmission-diagnostics"',
    
    'Peamised automaatkäigukasti remondi lahendused': 'Main Automatic Transmission Repair Solutions',
    'Sõltuvalt diagnostika tulemustest valime sobivaima tee': 'Based on diagnostic results, we select the most appropriate path',
    '1. Õli ja filtri vahetus': '1. Oil and Filter Change',
    'Dünaamiline õlivahetus ja süsteemi läbipesu. Eemaldab vanast õlist tekkinud kulumisjäägid ja lahendab kergemad jõnksumised varases faasis.': 'Dynamic (flush) oil change and system cleaning. Removes wear deposits from old oil and fixes light jerking in early stages.',
    '2. Mehatroonika remont': '2. Mechatronics Repair',
    'Hüdroploki (hüdroboki) pesu, defektsete solenoide ja tihendite asendus. Taastab kiire käiguvahetuse, eemaldab viivitused ja rõhukaod.': 'Valve body washing, replacing defective solenoids and seals. Restores fast shifting, removes delays, and eliminates pressure loss.',
    '3. Kapitaalne taastamine': '3. Complete Overhaul',
    'Käigukasti eemaldamine ja lahtivõtmine. Asendatakse hõõrdekettad, tihendid ja kahjustatud detailid. Vajalik juhul, kui mehhanism on füüsiliselt hävinud.': 'Removing and dismantling the transmission. Replacing clutch packs, seals, and damaged parts. Required when severe mechanical destruction occurs.',
    
    'Kuidas käib automaatkäigukasti remont Mr.Caris?': 'How does automatic transmission repair work at Mr.Car?',
    'Arvutiskannimine, rõhukontroll, tõrkekoodid → tuvastame täpse põhjuse': 'Computer scan, pressure check, fault codes → we find the exact cause',
    'Selge pakkumine': 'Clear estimate',
    'Teavitame, mis on katki, mis maksab — enne remondi alustamist': 'We tell you exactly what is broken and what it will cost — before starting repair',
    'Remont tehasestandardis': 'Factory-standard repair',
    'Vahetame/taastame ainult kulunud osad, originaaldetailid': 'We replace or restore only worn parts, using OEM quality materials',
    'Garantii 12 kuud': '12-month warranty',
    'Kirjalik garantii osadele ja tehtud tööle': 'Written warranty on parts and completed work',
    
    'DSG ja ZF käigukastid — kõrgtehnoloogilised lahendused': 'DSG and ZF Transmissions — High-Tech Solutions',
    '<strong>DSG (Direct Shift Gearbox)</strong> on Volkswagen Grupi välja töötatud kahesiduriklutšiga käigukast, mida leidub VW, Audi, Škoda ja SEAT sõidukites. DSG on tundlik õliseisundile ja mehatroonika hälvetele — tüüpilised rikked hõlmavad siduripakirike ja mehatroonikamooduli tõrkeid. Mr.Car remondib DSG käigukaste eriseadmetega.': '<strong>DSG (Direct Shift Gearbox)</strong> is a dual-clutch transmission developed by Volkswagen Group, found in VW, Audi, Škoda, and SEAT vehicles. DSG is sensitive to oil cleanliness and mechatronic faults: typical failures involve the clutch pack and the mechatronics unit. Mr.Car repairs DSG gearboxes using special tools.',
    '<strong>ZF</strong> (ZF Friedrichshafen) toodab laialt levinud automaatkäigukaste (8HP, 9HP), mida kasutatakse BMW, Volvo, Land Rover ja teistes premium-sõidukites. ZF käigukastid nõuavad spetsiifilisi diagnostikaseadmeid ja erilise viskoossusega transmisooniõli. Mr.Car tegeleb ZF käigukastide diagnostika ja remondiga.': '<strong>ZF</strong> (ZF Friedrichshafen) produces widely used automatic transmissions (8HP, 9HP) for premium vehicles like BMW, Volvo, Land Rover, and others. ZF transmissions require specialized diagnostic tools and specific viscosity transmission fluid. We provide qualified diagnostics and repair for ZF gearboxes.',
    'Spetsialiseerume:': 'We specialize in:',
    
    '1 aasta / 20 000 km tehtud töödele, kirjalik garantii osadele ja tööle.': '1 year / 20,000 km on performed work, written warranty on parts and labor.',
    'Originaalosad ja kvaliteet': 'Original Parts and Quality',
    'Otsesed tarnijad, OEM kvaliteet — kasutame ainult tunnustatud varuosi.': 'Direct suppliers, OEM quality — we use only recognized reliable parts.',
    'Hinnastame selgelt': 'Transparent Pricing',
    'Enne remonti teavitame täpselt, mis maksab diagnostika ja mis remont ise.': 'Before any repairs, we let you know exactly what diagnostics and repairs will cost.',
    
    'Korduma kippuvad küsimused': 'Frequently Asked Questions',
    'Mis vahe on klassikalisel automaatkäigukastil ja DSG-l?': 'What is the difference between a classic automatic and a DSG?',
    'Klassikaline automaatkäigukast (hüdromehaaniline) kasutab väänet edastavat hüdrotransformaatorit, mis tagab väga sujuva sõidu. DSG (Direct Shift Gearbox) on kahesiduriklutšiga käigukast, mis vahetab käike oluliselt kiiremini ja efektiivsemalt, kuid on ehituselt teistsugune ja nõuab spetsiifilist hooldust.': 'A classic automatic (hydromechanical) uses a torque converter for smooth power delivery. DSG is a dual-clutch transmission. It shifts significantly faster and more efficiently, but is built differently and requires a specific maintenance approach.',
    'Mis vahe on automaatkäigukastil ja CVT-l?': 'What is the difference between an automatic transmission and a CVT?',
    'CVT (Continuously Variable Transmission) ehk variaatorkäigukast sarnaneb sõidu poolelt automaatkastiga, kuid tal pole astmelisi käike. Mr.Car spetsialiseerub ainult astmelistele automaatkäigukastidele (sh DSG ja ZF), CVT-tüüpi käigukaste me ei remondi.': 'A CVT (Continuously Variable Transmission) feels like a regular automatic, but it does not have stepped gears. Mr.Car specializes only in stepped automatic and robotized transmissions (AT, DSG, ZF). We do not repair CVTs.',
    'Kui palju maksab automaatkäigukasti remont?': 'How much does automatic transmission repair cost?',
    'Kuna automaatkäigukast on väga keeruline seade, selgub remondi maksumus alles peale diagnostikat. Arvutidiagnostika ja õlirõhkude mõõtmine annavad selge pildi, mis detail vajab taastamist või vahetamist. Esitame selge pakkumise enne tööde algust.': 'Since an automatic transmission is a highly complex unit, the detailed repair cost only becomes clear after diagnostics. Computer scanning, pressure checks, and test drives reveal exactly what needs restoring or replacing. We provide a clear estimate before work starts.',
    'Kas automaatkäigukasti saab remontida avariirežiimis?': 'Can you drive a car in limp mode?',
    'Avariirežiim on kaitsefunktsioon, mis pannakse peale kasti eluga päästmiseks. Autoga avariirežiimis sõita ei tohi! Sõiduk tuleb toimetada koheselt töökotta diagnostikale.': 'Limp mode is a protective function activated to save your transmission from total destruction. You must not drive the car in limp mode! The vehicle should be taken immediately to the shop for diagnostics.',
    'Kui tihti peaks automaatkäigukasti õlivahetust tegema?': 'How often should you change automatic transmission oil?',
    'Automaatkäigukasti õli ning filtri vahetus on soovituslik teha iga 60 000 – 80 000 km tagant, et tagada käigukasti pikk eluiga ning sujuv töö.': 'Changing the automatic transmission fluid and filter is recommended every 60,000 – 80,000 km to ensure a long lifespan and smooth operation.',
    'Mis juhtub, kui õlivahetus liiga kaua edasi lükata?': 'What happens if you delay a transmission oil change too long?',
    'Vana õli kaotab oma määrdeomadused ning korjab endasse kuluosadest tekkivat metallipuru, mis omakorda toimib nagu abrasiiv, kulutades tihendeid, klappe ja filtreid. See toob kaasa rõhulangused ja käigukasti hävinemise.': 'Old oil loses its lubricating properties and gathers metal dust from wearing friction plates. This acts as an abrasive, wearing down valve body valves, seals, and filters. This leads to pressure drop and transmission death.',
    
    'Kahtlustad automaatkäigukasti probleemi?': 'Suspect automatic transmission problems?',
    'Ära oota lõpliku blokeerumiseni. Diagnostika tuvastab probleemi põhjusse ja säästab raha remondil.': 'Do not wait until a complete stop. Diagnostics will find the root cause and save your money on repairs.',
    'Broneeri diagnostika <span class="arrow">↗</span>': 'Book Diagnostics <span class="arrow">↗</span>',
}

ru_html = swap_layouts(et_html, ru_layout, "ru")
en_html = swap_layouts(et_html, en_layout, "en")

for k, v in replacements_ru.items():
    ru_html = ru_html.replace(k, v)

for k, v in replacements_en.items():
    en_html = en_html.replace(k, v)

write_file('ru/services/remont-akpp.html', ru_html)
write_file('en/services/automatic-transmission-repair.html', en_html)

print("Translation processed correctly.")
