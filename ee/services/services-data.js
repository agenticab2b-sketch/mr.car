/**
 * Mr.Car — Services Data (ET)
 * Ühtne andmeallikas kõigile 12 teenusele.
 * Parempoolne külgriba navigatsioon ehitatakse samast massiivist.
 */
const SERVICES = [
    // ═══════════════════════════════════
    // CATEGORY: Diagnostika ja elektroonika
    // ═══════════════════════════════════
    {
        slug: "elektrika",
        category: "Diagnostika ja elektroonika",
        navTitle: "Autoelekter",
        icon: "mdi:lightning-bolt",
        heroTitle: "Autoelekter",
        heroLead: "Voolulekked, lühised, elektroonika tõrked — leiame ja kõrvaldame ilma arvamiseta.",
        heroImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1400&q=80",
        introTitle: "Autoelektri remont Mr.Car-is",
        introText: [
            "Elektrilised rikked on ühed kavalamaid. Vooluleke, lühis või ujuv viga võib põhjustada süsteemide täieliku rikke. Leiame probleemi algpõhjuse, mitte ei vaheta osi arvamise alusel.",
            "Meie käsutuses on ostsilloskoobid, Fluke multimeetrid ja tehaseelektriskeemid — dekodeerime CAN/LIN-siine ja leiame katkestused tehase dokumentatsiooni järgi."
        ],
        symptomsTitle: "Millal pöörduda autoelektriku poole?",
        symptoms: [
            { icon: "mdi:battery-alert", text: "Aku tühjeneb kiiresti" },
            { icon: "mdi:flash-off", text: "Tuled / suunatuled ei tööta" },
            { icon: "mdi:car-key", text: "Stardiprobleemid" },
            { icon: "mdi:shield-lock-outline", text: "Alarm / immobilisaator tõrkub" },
            { icon: "mdi:window-open", text: "Aknatõstukid ei tööta" },
            { icon: "mdi:fan-alert", text: "Ventilaatorid ei tööta" }
        ],
        afterSymptomsText: "Elekter pole koht katsetusteks. Oskamatu sekkumine võib põhjustada tulekahju. Usalda professionaalidele.",
        servicesListTitle: "Meie autoelektri teenused:",
        servicesList: [
            "Voolulekke otsimine",
            "Juhtmestiku ja kimpude remont",
            "Stardi- / generaatori diagnostika ja remont",
            "Alarmi paigaldus ja remont",
            "Juhtplokkide (ECU / BCM) remont",
            "CAN / LIN-siinide dekodeerimine",
            "Valgustussüsteemide diagnostika"
        ],
        afterListText: "Töötame tehase skeemide ja dokumentatsiooniga. Pärast remonti testime kõiki elektroonilisi süsteeme.",
        promoBanner: { enabled: false },
        ctaSection: {
            title: "Elektriprobleemid? Lahendame kiiresti",
            text: "Ära riski ohutusega. Broneeri aeg — leiame ja kõrvaldame mis tahes rikke.",
            phoneText: "Helista: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Elektri remondi broneerimine",
            subtitle: "Jäta päring — helistame tagasi 30 minutiga"
        },
        seo: {
            title: "Autoelekter Tallinnas — Mr.Car | Elektrisüsteemide remont",
            description: "Professionaalne autoelektri remont Tallinnas. Vooluleke, juhtmestik, CAN/LIN diagnostika. Kopli 82a. +372 5646 1210"
        }
    },

    // ═══════════════════════════════════
    // CATEGORY: Mootor ja seadmed
    // ═══════════════════════════════════
    {
        slug: "remont-dvigatelya",
        category: "Mootor ja seadmed",
        navTitle: "Mootori remont",
        icon: "mdi:engine",
        heroTitle: "Mootori remont",
        heroLead: "Mootori kapitaalremont mikropragudest täieliku lahtivõtmiseni. Mehhaaniline töötlus 0,01 mm täpsusega.",
        heroImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1400&q=80",
        introTitle: "Mootori remont Mr.Car-is",
        introText: [
            "Mootor on auto süda. Õlikulu, koputused, kompressiooni langus — kõik need on märgid, et mootor vajab professionaalset abi. Me ei diagnoosi kuulmise järgi — kasutame endoskoopiat ja kompressiomeetriat.",
            "Mr.Car teostab täielikku mootori remonditsüklit: tihendite ja hammasrihmade vahetusest kuni kolvirühma kapitaalremondini. Kasutame originaalvaruosi ja kvaliteetseid analooge garantiiga."
        ],
        symptomsTitle: "Kuidas aru saada, et mootor vajab remonti?",
        symptoms: [
            { icon: "mdi:oil", text: "Suurenenud õlikulu" },
            { icon: "mdi:volume-high", text: "Koputused ja võõrad helid" },
            { icon: "mdi:speedometer-slow", text: "Võimsuse langus" },
            { icon: "mdi:smoke-detector-variant", text: "Suits heitgaasidest" },
            { icon: "mdi:thermometer-alert", text: "Mootori ülekuumenemine" },
            { icon: "mdi:engine-off-outline", text: "Ebastabiilne töö tühikäigul" },
            { icon: "mdi:water-alert", text: "Õli- või jahutusvedeliku leke" },
            { icon: "mdi:vibrate", text: "Vibratsioon mootori töötamisel" }
        ],
        afterSymptomsText: "Kui märkad kas või ühte neist sümptomitest — broneeri diagnostika. Õigeaegne remont päästab mootori vahetamisest.",
        servicesListTitle: "Meie mootori remonditeenused:",
        servicesList: [
            "Endoskoopia ja defekteerumine",
            "Hammasrihma / ahela vahetus",
            "Silindripea tihendi vahetus",
            "Kolvirühma remont",
            "Klappide lihvimine ja vahetus",
            "Õlirõngaste vahetus",
            "Turbokompressori remont",
            "Mootori kinnituste vahetus"
        ],
        afterListText: "Kõigile töödele anname 12-kuulise garantii. Hind arvutatakse pärast defekteerimist — tead lõplikku hinda ette.",
        promoBanner: {
            enabled: true,
            text: "Tasuta mootori endoskoopia remondibroneerimisel"
        },
        ctaSection: {
            title: "Mootor vajab tähelepanu?",
            text: "Ära oota, kuni väike probleem muutub kapitaalremondiks. Tule tasuta diagnostikale.",
            phoneText: "Helista: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Mootori remondi broneerimine",
            subtitle: "Jäta päring — helistame tagasi 30 minutiga"
        },
        seo: {
            title: "Mootori remont Tallinnas — Mr.Car Autoteenindus",
            description: "Mootori kapitaalremont Tallinnas. Endoskoopia, hammasrihma vahetus, kolvirühm. Garantii 12 kuud. Kopli 82a. +372 5646 1210"
        }
    },

    {
        slug: "remont-kpp",
        category: "Mootor ja seadmed",
        navTitle: "Käigukasti remont",
        icon: "mdi:car-shift-pattern",
        heroTitle: "Käigukasti remont",
        heroLead: "Automaatkast, käsikäigukast, DSG, variator — diagnoosime ja remondime kõiki käigukastide tüüpe.",
        heroImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1400&q=80",
        introTitle: "Käigukasti remont Mr.Car-is",
        introText: [
            "Käigukast on auto keerulisemaid sõlme. Tõkked käivahtusel, libisemine või käigukastist tulev müra — kõik see nõuab spetsialisti kohest tähelepanu.",
            "Mr.Car spetsialiseerub kõigi käigukastide remondile: manuaal-, automaatkast, robotkäigukast (DSG) ja variator (CVT). Kasutame originaalvaruosi ja spetsiaalset seadmestikku."
        ],
        symptomsTitle: "Käigukasti rikke tunnused",
        symptoms: [
            { icon: "mdi:swap-vertical", text: "Tõkked käivahtusel" },
            { icon: "mdi:volume-high", text: "Käigukastist tulev mürin" },
            { icon: "mdi:slip", text: "Käikude libisemine" },
            { icon: "mdi:oil-level", text: "Õlileke käigukastist" },
            { icon: "mdi:alert-circle", text: "Automaatkasti veateated" },
            { icon: "mdi:timer-sand", text: "Käivahtumine hilineb" }
        ],
        afterSymptomsText: "Käigukasti remondiga viivitamine toob kaasa kriitilise kahjustuse ja kogu sõlme vahetuse. Diagnostika on esimene samm lahenduse poole.",
        servicesListTitle: "Meie käigukasti remonditeenused:",
        servicesList: [
            "Automaatkasti / käsikäigukasti / DSG diagnostika",
            "Käigukastiõli ja filtri vahetus",
            "Siduri ja hooratta vahetus",
            "DSG mehatroonikute remont",
            "Automaatkasti hüdroploki lahtivõtmine",
            "Laagrite ja sünkronisaatorite vahetus"
        ],
        afterListText: "Pärast remonti teeme proovisõidu ja käigukasti adaptatsioon. Garantii kõigile töödele — 12 kuud.",
        promoBanner: { enabled: false },
        ctaSection: {
            title: "Käigukastiprobleemid?",
            text: "Tõkked, libisemine või õlileke — tule tasuta käigukasti diagnostikale.",
            phoneText: "Helista: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Käigukasti remondi broneerimine",
            subtitle: "Jäta päring — helistame tagasi 30 minutiga"
        },
        seo: {
            title: "Käigukasti remont Tallinnas — Automaatkast, DSG | Mr.Car",
            description: "Käigukasti remont Tallinnas: automaatkast, käsikäigukast, DSG, variator. Diagnostika ja lahtivõtmine. Garantii 12 kuud. Kopli 82a. +372 5646 1210"
        }
    },

    {
        slug: "glushiteli-svarka",
        category: "Mootor ja seadmed",
        navTitle: "Summutid ja keevitus",
        icon: "mdi:fire",
        heroTitle: "Summutid ja keevitustööd",
        heroLead: "Heitgaasisüsteemi remont ja vahetus. Argooni- ja poolautomaatkeevitus igasuguse keerukusega.",
        heroImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1400&q=80",
        introTitle: "Summutite remont ja keevitustööd",
        introText: [
            "Läbipõlenud summuti ei ole ainult ebameeldiv heli — heitgaasid võivad tungida salongi. Remondime ja vahetame kõiki heitgaasisüsteemi elemente.",
            "Eraldi valdkonnana tegeleme keevitustöödega: pragude kinnijootmine, kinnituste remont, põhja keevitamine. Alumiiniumi ja roostevaba terase argoonikeevitus."
        ],
        symptomsTitle: "Millal on vaja summuti remonti?",
        symptoms: [
            { icon: "mdi:volume-high", text: "Vali heitgaasi müra" },
            { icon: "mdi:smoke-detector-variant", text: "Heitgaasi lõhn salongis" },
            { icon: "mdi:vibrate", text: "Vibratsioon mootori töötamisel" },
            { icon: "mdi:water-alert", text: "Kondensaadi leke liitekohtadest" },
            { icon: "mdi:car-brake-low-pressure", text: "Võimsuse langus" },
            { icon: "mdi:flash-alert", text: "Katalüsaatori viga (P0420)" }
        ],
        afterSymptomsText: "Ära ignoreeri heitgaasisüsteemi probleeme — need mõjutavad otseselt mootori tööd ja ohutust.",
        servicesListTitle: "Meie teenused:",
        servicesList: [
            "Summuti / resonaatori vahetus",
            "Katalüsaatori remont ja vahetus",
            "Heitgaasisüsteemi painduva toru vahetus",
            "Summuti pragude keevitamine",
            "Argoonikeevitus (alumiinium, roostevaba teras)",
            "Kinnituselementide keevitamine",
            "Põhja keevitamine"
        ],
        afterListText: "Tööd tehakse vastuvõtupäeval. Kasutame kvaliteetseid materjale ja anname garantii keevitustöödele.",
        promoBanner: { enabled: false },
        ctaSection: {
            title: "Vaja keevitust või summuti remonti?",
            text: "Tule ilma broneerimiseta või jäta päring — vaatame üle ja anname hinna 15 minutiga.",
            phoneText: "Helista: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Keevitustööde broneerimine",
            subtitle: "Jäta päring — helistame tagasi 30 minutiga"
        },
        seo: {
            title: "Summuti remont, keevitustööd — Mr.Car Tallinn",
            description: "Summuti ja katalüsaatori remont ning vahetus. Argoonikeevitus. Kopli 82a, Tallinn. +372 5646 1210"
        }
    },

    // ═══════════════════════════════════
    // CATEGORY: Vedrustus ja pidurid
    // ═══════════════════════════════════
    {
        slug: "hodovaya-tormoza",
        category: "Vedrustus ja pidurid",
        navTitle: "Vedrustus ja pidurid",
        icon: "mdi:car-brake-alert",
        heroTitle: "Vedrustuse ja pidurite remont",
        heroLead: "Vedrustus, roolisüsteem, pidurdussüsteem — diagnostika ja remont garantiiga.",
        heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1400&q=80",
        introTitle: "Vedrustuse remont Mr.Car-is",
        introText: [
            "Vedrustus on sinu ohutus teel. Põrutamine, rooli kõrvalekalle, vibratsioon — kõik need on kulumise märgid, mida ei saa eirata.",
            "Teeme täieliku vedrustuse diagnostika tõstukil, tuvastame kulunud osad ja koostame remondiplaani täpse maksumusega. Üllatusi ei ole."
        ],
        symptomsTitle: "Vedrustuse probleemide tunnused",
        symptoms: [
            { icon: "mdi:car-traction-control", text: "Auto kaldub kõrvale" },
            { icon: "mdi:volume-high", text: "Põrutused ja kriuksumised" },
            { icon: "mdi:vibrate", text: "Rooli vibratsioon" },
            { icon: "mdi:tire", text: "Ebaühtlane rehvide kulumine" },
            { icon: "mdi:car-brake-low-pressure", text: "Pikem pidurdusteekond" },
            { icon: "mdi:disc", text: "Krigimine pidurdamisel" },
            { icon: "mdi:steering", text: "Roolimänk" },
            { icon: "mdi:car-side", text: "Kerekalle kurvides" }
        ],
        afterSymptomsText: "Kulunud vedrustus ja pidurid on otsene ohutusoht. Tule tasuta kontrollile.",
        servicesListTitle: "Meie vedrustuse ja pidurite teenused:",
        servicesList: [
            "Vedrustuse diagnostika tõstukil",
            "Amortisaatorite ja vedude vahetus",
            "Silentklokkide ja palllihtede vahetus",
            "Rooliotsikute ja tõukevarraste vahetus",
            "Piduripatjade ja -ketaste vahetus",
            "Pidurivoolikute ja suistide vahetus",
            "Pidurisüsteemi õhutamine",
            "Rataste geomeetria reguleerimine"
        ],
        afterListText: "Kasutame tunnustatud tootjate varuosi: Lemförder, TRW, Monroe, Brembo. Garantii 12 kuud kõigile töödele.",
        promoBanner: {
            enabled: true,
            text: "Tasuta vedrustuse diagnostika veebibroneeringuga"
        },
        ctaSection: {
            title: "Põrutused vedrutusel? Krigimine pidurdamisel?",
            text: "Ära riski ohutusega. Vaatame vedrustuse üle tasuta ja anname täpse hinnapakkumise.",
            phoneText: "Helista: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Vedrustuse remondi broneerimine",
            subtitle: "Jäta päring — helistame tagasi 30 minutiga"
        },
        seo: {
            title: "Vedrustuse ja pidurite remont — Mr.Car Tallinn",
            description: "Vedrustuse ja pidurdussüsteemi remont Tallinnas. Amortisaatorid, pidurid, rataste geomeetria. Tasuta diagnostika. Kopli 82a. +372 5646 1210"
        }
    },

    {
        slug: "rehvitood",
        category: "Vedrustus ja pidurid",
        navTitle: "Rehvitööd",
        icon: "mdi:tire",
        heroTitle: "Rehvitööd",
        heroLead: "Hooajaline rehvivahetus, tasakaalustamine, torkeaukude remont. Kiiresti ja korrektselt — järjekordadeta.",
        heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1400&q=80",
        introTitle: "Rehvitööd Mr.Car-is",
        introText: [
            "Rehvitööd tunduvad lihtsad, kuid nõuavad täpsust. Vale tasakaalustamine põhjustab vibratsiooni, laagrite kulumist ja ebamugavat sõitu.",
            "Mr.Car-is kasutame kaasaegset montaažiseadmestikku ja tasakaalustajat. Töötame rehvidega R13-st R22-ni, sealhulgas madalprofiiliga rehvide ja RunFlat-rehvidega."
        ],
        symptomsTitle: "Millal on vaja rehvitöid?",
        symptoms: [
            { icon: "mdi:calendar-clock", text: "Hooajaline rehvivahetus" },
            { icon: "mdi:vibrate", text: "Vibratsioon kiirusel" },
            { icon: "mdi:tire", text: "Torkeauk / rehvi lõige" },
            { icon: "mdi:car-traction-control", text: "Auto kaldub kõrvale" },
            { icon: "mdi:ruler", text: "Ebaühtlane kulumine" },
            { icon: "mdi:thermometer-low", text: "Üleminek talverehvidele" }
        ],
        afterSymptomsText: "Õigeaegne rehvivahetus tagab ohutuse teel ja säästu kütusel. Ära lükka hooajalist vahetust edasi.",
        servicesListTitle: "Meie rehvitööde teenused:",
        servicesList: [
            "Hooajaline rehvivahetus (suvi / talv)",
            "Rataste tasakaalustamine",
            "Torkeaukude remont (nöör / seen / plaaster)",
            "Uute rehvide paigaldus",
            "Ventiilide vahetus",
            "Rehvirõhu kontroll"
        ],
        afterListText: "Töötame broneeringu alusel järjekordadeta. Hind alates €20 ratta kohta. Rehvide hooajaline ladustamine — päringu alusel.",
        promoBanner: { enabled: false },
        ctaSection: {
            title: "Valmis hooajaks?",
            text: "Broneeri sobiv aeg — komplekti vahetus võtab 30–40 minutit.",
            phoneText: "Helista: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Rehvitööde broneerimine",
            subtitle: "Jäta päring — helistame tagasi 30 minutiga"
        },
        seo: {
            title: "Rehvitööd Tallinnas — Mr.Car | alates €20",
            description: "Rehvitööd Tallinnas: hooajaline rehvivahetus, tasakaalustamine, torkeaukude remont. R13–R22. Alates €20. Kopli 82a. +372 5646 1210"
        }
    },

    // ═══════════════════════════════════
    // CATEGORY: Hooldus
    // ═══════════════════════════════════
    {
        slug: "to-diagnostika",
        category: "Hooldus",
        navTitle: "Tehniline ülevaatus ja hooldus",
        icon: "mdi:car-cog",
        heroTitle: "Tehniline hooldus",
        heroLead: "Regulaarne hooldus tootja standardite järgi ilma edasimüüja garantii kaotamiseta.",
        heroImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1400&q=80",
        introTitle: "Tehniline hooldus Mr.Car-is",
        introText: [
            "Regulaarne hooldus on parim investeering auto pikka elueasse. Teostame kõiki regulatsioonitöid tootja standardite järgi, mis säilitab su edasimüüja garantii.",
            "Iga hooldus sisaldab kõigi autosüsteemide mitmepunktilist kontrolli. Saad täieliku ülevaate auto seisukorrast ja soovitused edasist."
        ],
        symptomsTitle: "Millal teha hooldus?",
        symptoms: [
            { icon: "mdi:counter", text: "Läbisõit regulatsiooni järgi (iga 10–15 tuh. km)" },
            { icon: "mdi:calendar-check", text: "Aasta möödas eelmisest hooldusest" },
            { icon: "mdi:engine-outline", text: "Põleb hooldusnäidik" },
            { icon: "mdi:road-variant", text: "Enne pikka reisi" },
            { icon: "mdi:car-key", text: "Pärast kasutatud auto ostmist" },
            { icon: "mdi:snowflake", text: "Enne talvehooaega" }
        ],
        afterSymptomsText: "Vahelejäänud hooldus tähendab varjatud kulumist ja kallist remonti tulevikus. Parem kulutada tund praegu kui nädal hiljem.",
        servicesListTitle: "Mida hooldus sisaldab:",
        servicesList: [
            "Mootoroõli ja õlifilteri vahetus",
            "Õhu- ja salongifiltri vahetus",
            "Vedelike kontroll ja lisamine",
            "Pidurdussüsteemi kontroll",
            "Vedrustuse kontroll tõstukil",
            "Aku kontroll",
            "Arvutidiagnostika",
            "Hooldusnäidiku nullimine"
        ],
        afterListText: "Hooldustöö hind sõltub auto mudelist ja tööde mahust. Helista — arvutame täpse hinna enne külastust.",
        promoBanner: {
            enabled: true,
            text: "Hooldus 10% soodsamalt esimesel külastusel. Broneeri veebis!"
        },
        ctaSection: {
            title: "Aeg hoolduseks?",
            text: "Ära lükka edasi. Broneeri aeg — teeme kõik 1–2 tunniga.",
            phoneText: "Helista: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Hoolduse broneerimine",
            subtitle: "Jäta päring — helistame tagasi 30 minutiga"
        },
        seo: {
            title: "Tehniline hooldus — Mr.Car Tallinn | Autoteenindus",
            description: "Tehniline hooldus Tallinnas. Õlivahetus, filtrid, kõigi süsteemide kontroll. Edasimüüja garantii säilib. Kopli 82a. +372 5646 1210"
        }
    },

    {
        slug: "zamena-masla",
        category: "Hooldus",
        navTitle: "Õlivahetus ja filtrid",
        icon: "mdi:oil",
        heroTitle: "Õlivahetus ja filtrid",
        heroLead: "Kiire õlivahetus tootja lubade järgi sobiva õliga. Alates €35 koos filtriga.",
        heroImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1400&q=80",
        introTitle: "Õlivahetus Mr.Car-is",
        introText: [
            "Õlivahetus on põhiline, kuid kriitiliselt oluline protseduur. Vana õli kaotab kaitsevõime ja hakkab mootorit seestpoolt lagundama.",
            "Valime õli rangelt vastavalt su auto tootja lubadele. Kasutame Motul, Castrol, Mobil 1 ja teisi kvaliteetseid brände."
        ],
        symptomsTitle: "Millal vahetada õli?",
        symptoms: [
            { icon: "mdi:counter", text: "Iga 10 000–15 000 km" },
            { icon: "mdi:oil-level", text: "Tume õli mõõdupulga peal" },
            { icon: "mdi:engine-outline", text: "Põleb õlinäidik" },
            { icon: "mdi:volume-high", text: "Mootor töötab valjemalt" },
            { icon: "mdi:calendar-check", text: "Aasta möödas vahetusest" },
            { icon: "mdi:gas-station", text: "Suurenenud kütusekulu" }
        ],
        afterSymptomsText: "Õlivahetus võtab 20–30 minutit. Ära säästa õlilt — see on odavam kui mootori remont.",
        servicesListTitle: "Mida teeme:",
        servicesList: [
            "Õli valik tootja lubade järgi",
            "Mootoroõli vahetus",
            "Õlifilteri vahetus",
            "Õhufilteri vahetus",
            "Salongifiltri vahetus",
            "Kütusefilteri vahetus",
            "Kõigi vedelike taseme kontroll"
        ],
        afterListText: "Hind alates €35 (õli + filter). Täpne hind sõltub mootori mahust ja õli margist.",
        promoBanner: { enabled: false },
        ctaSection: {
            title: "Aeg õlivahetuseks?",
            text: "Tule ilma broneerimiseta või reserveeri aeg — vahetus 20 minutiga.",
            phoneText: "Helista: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Õlivahetuse broneerimine",
            subtitle: "Jäta päring — helistame tagasi 30 minutiga"
        },
        seo: {
            title: "Õlivahetus Tallinnas — Mr.Car | alates €35",
            description: "Õlivahetus ja filtrid Tallinnas. Valik tootja lubade järgi. Motul, Castrol, Mobil 1. Alates €35. Kopli 82a. +372 5646 1210"
        }
    },

    {
        slug: "proverka-pered-pokupkoy",
        category: "Hooldus",
        navTitle: "Kontroll enne ostmist",
        icon: "mdi:file-search-outline",
        heroTitle: "Auto kontroll enne ostmist",
        heroLead: "Sõltumatu tehniline ekspertiis — et ost ei muutuks pettumiseks.",
        heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1400&q=80",
        introTitle: "Ostueelne kontroll Mr.Car-is",
        introText: [
            "Kasutatud auto ostmine on alati risk. Keerutatud läbisõit, varjatud avariid, mootoriprobleemid — kõik see võib selguda alles pärast tehingut.",
            "Sõltumatu kontroll Mr.Car-is näitab auto tegeliku seisukorra. Kontrollime kõiki sõlme ja süsteeme ning anname aus hinnangu — kas tasub osta või mitte."
        ],
        symptomsTitle: "Mida me kontrollime?",
        symptoms: [
            { icon: "mdi:engine", text: "Mootori seisukord" },
            { icon: "mdi:car-shift-pattern", text: "Käigukasti töö" },
            { icon: "mdi:car-brake-alert", text: "Vedrustus ja pidurid" },
            { icon: "mdi:car-cog", text: "Arvutidiagnostika" },
            { icon: "mdi:car-side", text: "Kere (paksusemõõtur)" },
            { icon: "mdi:history", text: "Tegelik läbisõit" },
            { icon: "mdi:format-paint", text: "Remondi / värvimise jäljed" },
            { icon: "mdi:file-document", text: "Hooldusajalugu" }
        ],
        afterSymptomsText: "Kuluta €80 kontrolli peale nüüd — säästad tuhandeid ootamatu remondi pealt hiljem.",
        servicesListTitle: "Mida kontroll sisaldab:",
        servicesList: [
            "Kere ja salongi visuaalne ülevaatus",
            "Lakikihi paksuse mõõtmine (paksusemõõtur)",
            "Kõigi süsteemide arvutidiagnostika",
            "Mootori ja käigukasti kontroll",
            "Vedrustuse vaatlus tõstukil",
            "Proovisõit mehaanikuga",
            "Kirjalik järeldus koos fotodega"
        ],
        afterListText: "Järeldus sisaldab iga defekti fotosid ja kõrvaldamise maksumuse hinnangut. Teed otsuse faktide, mitte emootsiooni põhjal.",
        promoBanner: {
            enabled: true,
            text: "Täielik auto kontroll — €80. Saa teada tõde enne ostmist!"
        },
        ctaSection: {
            title: "Ostad autot? Kontrolli esmalt",
            text: "Too auto meile või ütle müüja aadress — sõidame kontrollima.",
            phoneText: "Helista: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Auto kontrolli broneerimine",
            subtitle: "Jäta päring — helistame tagasi 30 minutiga"
        },
        seo: {
            title: "Auto kontroll enne ostmist — Mr.Car Tallinn | €80",
            description: "Sõltumatu auto kontroll enne ostmist Tallinnas. Paksusemõõtur, diagnostika, proovisõit. €80. Kopli 82a. +372 5646 1210"
        }
    },

    // ═══════════════════════════════════
    // CATEGORY: Kliimaseade ja lisavarustus
    // ═══════════════════════════════════
    {
        slug: "klimat-konditsioner",
        category: "Kliimaseade ja lisavarustus",
        navTitle: "Kliimaseade ja konditsioneer",
        icon: "mdi:snowflake",
        heroTitle: "Kliimaseade ja konditsioneer",
        heroLead: "Kliimaseadme täitmine, diagnostika ja remont.",
        heroImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1400&q=80",
        introTitle: "Kliimaseadme hooldus Mr.Car-is",
        introText: [
            "Kliimaseade vajab regulaarset hooldust. Ilma selleta väheneb jahutuse efektiivsus, tekivad ebameeldivad lõhnad ja kompressor kulub enneaegselt.",
            "Teeme kliimaseadme täieliku diagnostika: rõhu kontrolli, lekkeotsimise, freooniga täitmise ja kuivati vahetuse."
        ],
        symptomsTitle: "Kliimaseadme probleemide tunnused",
        symptoms: [
            { icon: "mdi:thermometer-plus", text: "Konditsioneer jahutab halvasti" },
            { icon: "mdi:scent-off", text: "Ebameeldiv lõhn õhukanalites" },
            { icon: "mdi:volume-high", text: "Võõrad helid sisselülitamisel" },
            { icon: "mdi:water-alert", text: "Veelompe auto all" },
            { icon: "mdi:fan-alert", text: "Ventilaator ei tööta" },
            { icon: "mdi:window-closed-variant", text: "Aknad udustuvad" }
        ],
        afterSymptomsText: "Soovitatav hooldada kliimaseadet iga 2 aasta tagant. See hoiab ära kompressori kalli remondi.",
        servicesListTitle: "Meie teenused:",
        servicesList: [
            "Kliimaseadme diagnostika",
            "Kliimaseadme täitmine freooniga",
            "Lekkeotsing ja kõrvaldamine",
            "Kliimakompressori vahetus",
            "Kuivati / reservuaari vahetus",
            "Auruti antibakteriaalne töötlus",
            "Salongifiltri vahetus"
        ],
        afterListText: "Pärast täitmist testime efektiivsust — lahkud töötava kliimaseadmega. Garantii 12 kuud.",
        promoBanner: { enabled: false },
        ctaSection: {
            title: "Konditsioneer ei jahuta?",
            text: "Täitmine ja diagnostika alates €60. Tule — lahendame tunniga.",
            phoneText: "Helista: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Kliimaseadme hoolduse broneerimine",
            subtitle: "Jäta päring — helistame tagasi 30 minutiga"
        },
        seo: {
            title: "Kliimaseadme täitmine — Mr.Car Tallinn | Konditsioneer",
            description: "Kliimaseadme täitmine ja remont Tallinnas. Diagnostika, lekkeotsing, kompressori vahetus. Kopli 82a. +372 5646 1210"
        }
    },

    {
        slug: "webasto",
        category: "Kliimaseade ja lisavarustus",
        navTitle: "Webasto remont",
        icon: "mdi:radiator",
        heroTitle: "Webasto remont ja hooldus",
        heroLead: "Webasto ja Eberspächeri eelsoojendite diagnostika, remont ja paigaldus.",
        heroImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1400&q=80",
        introTitle: "Webasto remont Mr.Car-is",
        introText: [
            "Eelsoojendi on Eesti talvel asendamatu. Kuid see vajab regulaarset hooldust — muidu võib see kõige vajalikumal hetkel alt vedada.",
            "Mr.Car spetsialiseerub Webasto ja Eberspächeri kõigi mudelite remondile ja hooldusele. Meil on kõik vajalik seadmestik ja varuosad."
        ],
        symptomsTitle: "Millal pöörduda?",
        symptoms: [
            { icon: "mdi:power-off", text: "Webasto ei käivitu" },
            { icon: "mdi:smoke-detector-variant", text: "Suitsetab töötamise ajal" },
            { icon: "mdi:alert-circle", text: "Puldi / taimer kuvab vigu" },
            { icon: "mdi:fire-alert", text: "Kõrbenud lõhn töötamise ajal" },
            { icon: "mdi:timer-off-outline", text: "Kustub minuti pärast" },
            { icon: "mdi:calendar-check", text: "Planeeritav hooldus (kord aastas)" }
        ],
        afterSymptomsText: "Webasto hooldus enne hooaega on parim viis külmas probleemide vältimiseks. Võtab 1–2 tundi.",
        servicesListTitle: "Meie Webasto teenused:",
        servicesList: [
            "Eelsoojendi diagnostika",
            "Põlemiskambri puhastamine",
            "Hõõgküünla vahetus",
            "Kütusepumba vahetus",
            "Juhtploki vahetus",
            "Juhtmestiku ja taimeri remont",
            "Uue Webasto paigaldus"
        ],
        afterListText: "Töötame kõigi Webasto (Thermo Top, Air Top) ja Eberspächeri (Hydronic, Airtronic) mudelitega. Garantii töödele — 12 kuud.",
        promoBanner: {
            enabled: true,
            text: "Valmista Webasto talveks ette — hooldus alates €60"
        },
        ctaSection: {
            title: "Webasto ei tööta?",
            text: "Ära külmeta — tule. Remont enamikul juhtudel vastuvõtupäeval.",
            phoneText: "Helista: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Webasto remondi broneerimine",
            subtitle: "Jäta päring — helistame tagasi 30 minutiga"
        },
        seo: {
            title: "Webasto remont Tallinnas — Mr.Car | Diagnostika ja hooldus",
            description: "Webasto ja Eberspächeri remont ning hooldus Tallinnas. Diagnostika, hõõgküünal, puhastamine. Kopli 82a. +372 5646 1210"
        }
    },

    {
        slug: "autoremont",
        category: "Hooldus",
        navTitle: "Üldine autoremont",
        icon: "mdi:wrench",
        heroTitle: "Üldine autoremont",
        heroLead: "Igat marki autode kompleksremont. Väiksematest riketest kapitaalremondini.",
        heroImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1400&q=80",
        introTitle: "Autoremont Mr.Car-is",
        introText: [
            "Mr.Car on täisteenindusega autoteenindus, kus saab lahendada mis tahes autorikke. Pirnide vahetusest kapitaalremondini — kõik ühe katuse all.",
            "Meie tiim töötab kõigi markide autodega: Euroopa, Jaapani, Korea autod. Iga meister spetsialiseerub oma valdkonnale, mis tagab töökvaliteedi."
        ],
        symptomsTitle: "Millega meie poole pöördutakse?",
        symptoms: [
            { icon: "mdi:engine-outline", text: "Mootoriprobleemid" },
            { icon: "mdi:car-brake-alert", text: "Põrutused vedrustuses" },
            { icon: "mdi:lightning-bolt", text: "Elektroonilised rikked" },
            { icon: "mdi:car-shift-pattern", text: "Käigukastiprobleemid" },
            { icon: "mdi:oil-level", text: "Vedelike lekked" },
            { icon: "mdi:car-cog", text: "Planeeritav hooldus" },
            { icon: "mdi:car-side", text: "Tehnoülevaatuse ettevalmistus" },
            { icon: "mdi:file-search-outline", text: "Kontroll enne ostmist" }
        ],
        afterSymptomsText: "Ei tea, mis täpselt katki on? Tule lihtsalt kohale — selgitame välja ja pakume lahenduse.",
        servicesListTitle: "Meie valdkonnad:",
        servicesList: [
            "Mootori ja käigukasti remont",
            "Vedrustus ja pidurdussüsteem",
            "Autoelekter ja diagnostika",
            "Õlivahetus ja hooldus",
            "Rehvitööd ja tasakaalustamine",
            "Kliimaseade ja konditsioneer",
            "Keevitustööd",
            "Müügieelne ettevalmistus"
        ],
        afterListText: "Ütleme hinna alati enne töö algust. Garantii 12 kuud. Originaalvaruosad ja kvaliteetsed analoogid.",
        promoBanner: { enabled: false },
        ctaSection: {
            title: "Vaja autoremonti?",
            text: "Broneeri veebis või tule ilma broneerimiseta tööajal. Vaatame üle tasuta.",
            phoneText: "Helista: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Remondi broneerimine",
            subtitle: "Jäta päring — helistame tagasi 30 minutiga"
        },
        seo: {
            title: "Autoremont Tallinnas — Mr.Car | Kõik tööliigid",
            description: "Autoteenindus Mr.Car Tallinnas. Mootori, käigukasti, vedrustuse, elektroonika remont. Kõik margid. Garantii 12 kuud. Kopli 82a. +372 5646 1210"
        }
    }
];
