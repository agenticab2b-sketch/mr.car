/**
 * Mr.Car — Services Data (ET)
 * Ühtne andmeallikas kõigile 12 teenusele.
 * Parempoolne külgriba navigatsioon ehitatakse samast massiivist.
 */
const SERVICES = [
    // ═══════════════════════════════════
    // JÄRJEKORD VASTAB PEALEHE MEGAMENÜÜLE
    // ═══════════════════════════════════

    {
        key: "general_repair",
        slug: "autoremont",
        allSlugs: { ru: "autoremont", ee: "autoremont", en: "general-car-repair" },
        category: "Hooldus",
        navTitle: "Autoremont",
        icon: "mdi:wrench",
        heroTitle: "Üldine autoremont",
        heroLead: "Igat marki autode kompleksremont. Väiksematest riketest kapitaalremondini.",
        heroImage: "/pics/general-repair-hero.webp",
        introTitle: "Autoremont Mr.Car-is",
        introText: [
            "Mr.Car on täisteenindusega autoteenindus, kus saab lahendada mis tahes autorikke. Pirnide vahetusest kapitaalremondini — kõik ühe katuse all.",
            "Meie tiim töötab kõigi markide autodega: Euroopa, Jaapani, Korea autod. Iga meister spetsialiseerub oma valdkonnale, mis tagab töökvaliteedi."
        ],
        symptomsTitle: "Millega meie poole pöördutakse?",
        symptoms: [
            { icon: "mdi:engine-outline", text: "Mootoriprobleemid" },
            { icon: "mdi:car-brake-alert", text: "Kolin veermikus" },
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
            "Veermik ja pidurisüsteem",
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
            description: "Autoteenindus Mr.Car Tallinnas. Mootori, käigukasti, veermiku ja elektroonika remont. Kõik margid. Garantii 12 kuud. Kopli 82a. +372 5646 1210"
        }
    },

    {
        key: "exhaust",
        slug: "summutid-keevitus",
        allSlugs: { ru: "glushiteli-svarka", ee: "summutid-keevitus", en: "exhaust-welding" },
        category: "Mootor ja seadmed",
        navTitle: "Summuti",
        icon: "mdi:fire",
        heroTitle: "Summuti remont",
        heroLead: "Heitgaasisüsteemi ja summuti remont ning vahetus.",
        heroImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1400&q=80",
        introTitle: "Summuti ja heitgaasisüsteemi remont",
        introText: [
            "Heitgaasisüsteemi remondi vajadus tekib tavaliselt kulumisest või korrosioonist. Läbipõlenud summuti ei ole ainult ebameeldiv heli — heitgaasid võivad tungida salongi.",
            "Tegeleme summuti, resonaatori, katalüsaatori ja paindtoru remondiga. Keevitustöödel on eraldi teenuse leht."
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
            "Heitgaasilekete kõrvaldamine",
            "Kinnituste ja kummipukside vahetus",
            "Väljalaskesüsteemi diagnostika"
        ],
        afterListText: "Tööd tehakse vastuvõtupäeval. Kasutame kvaliteetseid materjale ja anname garantii keevitustöödele.",
        promoBanner: { enabled: false },
        ctaSection: {
            title: "Vaja summuti remonti?",
            text: "Tule ilma broneerimiseta või jäta päring — vaatame väljalaskesüsteemi üle ja anname hinna 15 minutiga.",
            phoneText: "Helista: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Summuti remondi broneerimine",
            subtitle: "Jäta päring — helistame tagasi 30 minutiga"
        },
        seo: {
            title: "Summuti remont — Mr.Car Tallinn",
            description: "Summuti, katalüsaatori ja väljalaskesüsteemi remont Tallinnas. Kopli 82a, Tallinn. +372 5646 1210"
        }
    },

    {
        key: "welding_works",
        slug: "keevitustood",
        allSlugs: { ru: "svarochnye-raboty", ee: "keevitustood", en: "welding-works" },
        category: "Mootor ja seadmed",
        navTitle: "Keevitustööd",
        icon: "mdi:hammer-wrench",
        heroTitle: "Keevitustööd",
        heroLead: "See teenuse leht on koostamisel. Keevitustööde info ja hinnad lisame peagi.",
        heroImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1400&q=80",
        introTitle: "Leht on koostamisel",
        introText: [
            "Keevitustööd on nüüd eraldi teenus, et summuti remont ja keevitus oleksid menüüs selgelt lahus.",
            "Kuni detailne leht valmib, saad keevitustööde aja broneerida sama päringuvormi kaudu."
        ],
        symptomsTitle: "Mida leht hakkab sisaldama?",
        symptoms: [
            { icon: "mdi:fire", text: "Kinnituste keevitamine" },
            { icon: "mdi:car-wrench", text: "Põhja keevitustööd" },
            { icon: "mdi:wrench", text: "Väljalaskesüsteemi keevitus" },
            { icon: "mdi:shield-check", text: "Tööde garantii" }
        ],
        afterSymptomsText: "Leht on arenduses, kuid teenust saab juba tellida.",
        servicesListTitle: "Planeeritav sisu:",
        servicesList: [
            "Keevitustööde tüübid",
            "Materjalid ja piirangud",
            "Hinnad ja ajakulu",
            "Broneerimissoovitused"
        ],
        afterListText: "Täielik kirjeldus lisatakse hiljem.",
        promoBanner: { enabled: false },
        ctaSection: {
            title: "Vajad keevitustöid?",
            text: "Jäta päring — vaatame töö üle ja ütleme hinna enne alustamist.",
            phoneText: "Helista: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Keevitustööde broneerimine",
            subtitle: "Jäta päring — helistame tagasi 30 minutiga"
        },
        seo: {
            title: "Keevitustööd — Mr.Car Tallinn",
            description: "Keevitustööd Tallinnas. Leht on koostamisel. Kopli 82a. +372 5646 1210"
        }
    },

    {
        key: "suspension",
        slug: "veermiku-remont",
        allSlugs: { ru: "hodovaya", ee: "veermiku-remont", en: "suspension-repair" },
        category: "Veermik ja pidurid",
        navTitle: "Veermik",
        icon: "mdi:car-lifted-pickup",
        templateVariant: "service-deep-dive-v2",
        bodyClass: "service-brakes-page service-suspension-page",
        extraStyles: ["/services/transmission.css?v=6", "/services/brakes.css?v=11"],
        heroTitle: "Veermiku diagnostika ja remont Tallinnas",
        heroLead: "Kolin ebatasasustel sõites, rooli vibratsioon, auto kiskumine küljele või rehvide ebaühtlane kulumine — teeme igasuguse keerukusega veermiku diagnostikat ja remonti. Vahetame amortisaatoreid, õõtshoobasid, kuulliigendeid, pukse, rattalaagreid ja muid veermiku komponente. 3D-sildade reguleerimine, lõtkude ja veermiku geomeetria kontroll.",
        heroImage: "/pics/suspension-hero.webp",
        heroStats: [
            { value: "3 000+", label: "vahetatud veermikudetaili" },
            { value: "15+", label: "aastat spetsialiseerumist" },
            { value: "Iga teine", label: "auto vajab pärast veermiku remonti 3D-sildade reguleerimist" }
        ],
        localNav: [
            { href: "#symptoms", icon: "mdi:alert-circle-outline", label: "Sümptomid" },
            { href: "#types", icon: "mdi:car-lifted-pickup", label: "Veermiku tüübid" },
            { href: "#services", icon: "mdi:wrench", label: "Teenused" },
            { href: "#pricing", icon: "mdi:currency-eur", label: "Hinnad" },
            { href: "#reviews", icon: "mdi:star", label: "Arvustused" },
            { href: "#faq", icon: "mdi:frequently-asked-questions", label: "KKK" }
        ],
        introTitle: "Spetsialiseeritud veermiku diagnostika ja remont Tallinnas",
        introText: [
            "Mr.Car pakub täpset veermiku diagnostikat ja professionaalset remonti erineva keerukusega töödele. Kontrollime kõik veermiku sõlmed üle, vahetame kulunud detailid ning vajaduse korral teeme pärast remonti 3D-sildade reguleerimise.",
            "Remondime BMW, Audi, Mercedes-Benzi, Volkswageni, Škoda, Toyota, Volvo, Porsche, Fordi, Hyundai, Kia ja teiste automarkide veermikku. Kasutame nii OEM-varuosi kui ka kvaliteetseid järelturu osi usaldusväärsetelt tootjatelt, sealhulgas Lemförder, Sachs, Bilstein, Febi, Meyle, TRW ja teised. Veermiku diagnostika alates 25 €.",
            "Auto veermik vastutab sõiduki stabiilsuse, juhitavuse ja rataste pideva kontakti eest teepinnaga. Veermiku alla kuuluvad muu hulgas amortisaatorid, vedrud, õõtshoovad, puksid, kuulliigendid, rattalaagrid, stabilisaatorid ja tugilaagrid.",
            "Eesti teeoludes saab veermik tavapärasest suuremat koormust. Temperatuurikõikumised, teesool, trammiteed, teekatte vuugid ja talvejärgsed augud kiirendavad amortisaatorite, pukside, kuulliigendite ja rattalaagrite kulumist.",
            "Proovisõit, lõtkude kontroll ja ülevaatus tõstukil aitavad rikke põhjuse täpselt kindlaks teha ning vahetada ainult need osad, mis on tegelikult kulunud — ilma töökorras detailide põhjendamatu väljavahetamiseta."
        ],
        urgencyBlock: {
            icon: "mdi:alert-decagram",
            title: "Veermik annab riketest sageli varakult märku",
            text: "Kolin ebatasasustel, rooli vibratsioon ja kõrvalised helid tekivad tavaliselt juba enne veermikuosade kriitilist kulumist. Õigeaegne diagnostika aitab rikke põhjuse täpselt välja selgitada ja ennetada seotud detailide edasist kulumist."
        },
        symptomsTitle: "Veermiku rikke peamised sümptomid",
        symptoms: [
            { icon: "mdi:car-traction-control", text: "Auto kisub kõrvale" },
            { icon: "mdi:volume-high", text: "Kolin ja kriuksumine" },
            { icon: "mdi:vibrate", text: "Rooli vibratsioon" },
            { icon: "mdi:tire", text: "Ebaühtlane rehvide kulumine" },
            { icon: "mdi:steering", text: "Roolilõtk" },
            { icon: "mdi:car-side", text: "Kerekalle kurvides" }
        ],
        afterSymptomsText: "Kulunud veermik mõjutab otseselt auto juhitavust, pidurdusteekonda ja rehvide eluiga. Esimeste sümptomite korral tasub tulla diagnostikasse.",
        detailedSymptomsTitle: "Veermiku rikke peamised sümptomid",
        detailedSymptoms: [
            { tone: "critical", icon: "mdi:volume-high", title: "Kolin ebatasasustel sõites", desc: "Kolin aukudest, lamavatest politseinikest või trammiteedest üle sõites viitab sageli veermikuosade kulumisele. Tume üksik kolks võib olla seotud kulunud õõtshoova pukside või amortisaatoripüstaku tugedega. Metallne kolin, mis kandub rooli, võib viidata kuulliigendite, rooliotste või teiste roolisüsteemi osade kulumisele." },
            { icon: "mdi:vibrate", title: "Rooli vibratsioon või viskumine", desc: "Rool vibreerib teatud kiirusel, tavaliselt 80–120 km/h, või pidevalt. Võimalikud põhjused on rataste tasakaalustamatus, piduriketta deformatsioon, kulunud rattalaager või lõtk roolisüsteemi ja veermiku detailides." },
            { icon: "mdi:tire", title: "Rehvide ebaühtlane kulumine", desc: "Kui rehvimustri sise- või välisserv kulub oluliselt kiiremini, on see märk rataste seadenurkade paigast nihkumisest või veermikuosade kulumisest. Põhjuseks võivad olla kulunud puksid, õõtshoovad, kuulliigendid või lõtkud veermikus. Pärast veermiku remonti soovitame teha 3D-sildade reguleerimise, et rattad oleksid õiges asendis ja rehvid kuluksid ühtlaselt." },
            { icon: "mdi:car-brake-alert", title: "Kere kaldumine ja ebastabiilsus pidurdamisel", desc: "Kui auto kaldub kurvides märgatavalt või vajub pidurdamisel tugevalt ettepoole, on see tüüpiline märk amortisaatorite kulumisest. Auto stabiilsus halveneb, pidurdusteekond pikeneb ja rataste kontakt teepinnaga väheneb." },
            { icon: "mdi:car-traction-control", title: "Auto kisub ühele poole", desc: "Kui auto kisub ilma rooliga korrigeerimata pidevalt vasakule või paremale, võivad põhjuseks olla paigast nihkunud rataste seadenurgad, veermikuosade kulumine või löögist tekkinud detailide deformatsioon. Vajalik on veermiku geomeetria kontroll ja 3D-sildade reguleerimine." },
            { tone: "critical", icon: "mdi:oil", title: "Õli amortisaatori korpusel", desc: "Õlijäljed amortisaatoripüstakul või amortisaatori korpusel viitavad lekkele. Amortisaator kaotab töövedelikku ega summuta enam vedrustuse liikumist tõhusalt. Veermiku stabiilse töö tagamiseks soovitame amortisaatoreid vahetada paarikaupa samal teljel." }
        ],
        riskStagesTitle: "Mis juhtub, kui veermiku remonti edasi lükata?",
        riskStages: [
            { marker: "1", title: "Esimesed kulumismärgid", text: "Kerge kolin ebatasasustel on sageli seotud pukside, stabilisaatorivarraste või tugilaagrite kulumisega. Selles etapis piisab tavaliselt üksikute kulunud detailide vahetamisest ilma suurema veermiku remondita." },
            { marker: "2", title: "Lõtkude ja kulumise suurenemine", text: "Edasi sõites suurenevad veermiku lõtkud, rataste seadenurgad lähevad paigast ja rehvide kulumine kiireneb. Lisakoormust hakkavad saama kuulliigendid, õõtshoovad ja rattalaagrid. Pärast remonti on soovitatav teha 3D-sildade reguleerimine." },
            { marker: "3", title: "Ebastabiilsus ja juhitavuse halvenemine", text: "Tugevalt kulunud veermiku korral halveneb auto stabiilsus, pidurdusteekond pikeneb ja suuremal kiirusel võivad tekkida vibratsioonid. Mõnel juhul saavad korraga kahjustada mitu veermiku elementi, mistõttu remont muutub oluliselt keerukamaks ja kallimaks." }
        ],
        engineTypesTitle: "Veermiku ja vedrustuse tüübid, mida hooldame",
        engineTypes: [
            { icon: "mdi:car-cog", title: "MacPherson-tüüpi vedrustus", desc: "MacPherson on levinud esivedrustuse tüüp eri klasside autodel, näiteks Volkswagen Golf, Škoda Octavia, Ford Focus, Toyota Corolla, Hyundai Elantra ja teised mudelid. Süsteem koosneb amortisaatoripüstakust, vedrust, tugilaagrist ja alumisest õõtshoovast. Kõige sagedasemad rikked on tugilaagrite, õõtshoova pukside ja kuulliigendite kulumine ning amortisaatorite lekked.", brands: ["Lemförder", "TRW", "Sachs", "Bilstein"] },
            { icon: "mdi:axis-arrow", title: "Mitmikhoobvedrustus", desc: "Mitmikhoobvedrustust kasutatakse BMW, Audi, Mercedes-Benzi ning paljude kesk- ja premium-klassi autode puhul. Mitme sõltumatu hoova abil tagab see täpse juhitavuse ja mugava sõidu. Diagnostika käigus kontrollime lõtke, pukside seisukorda ja veermiku geomeetriat. Pärast remonti teeme 3D-sildade reguleerimise.", brands: ["Lemförder", "Meyle", "TRW"] },
            { icon: "mdi:car-back", title: "Pooliseseisev väändetalaga vedrustus", desc: "Seda tüüpi vedrustust kasutatakse näiteks Volkswagen Polo, Škoda Rapid, Kia Rio, Hyundai Solaris, Renault Logan ning teistel B- ja C-klassi autodel. Tegemist on lihtsa ja töökindla tagavedrustusega, millel on vähe liikuvaid osi. Peamised rikked on tala pukside, stabilisaatoripukside ja stabilisaatorivarraste kulumine.", brands: ["TRW", "Lemförder", "Febi"] },
            { icon: "mdi:air-filter", title: "Õhkvedrustus", desc: "Õhkvedrustust kasutatakse näiteks Audi A6/A8/Q7, BMW 5/7-seeria, Mercedes-Benz E/S-klass, Porsche Cayenne, Volkswagen Touareg, Volvo XC90 ja teistel mudelitel. Teeme õhkpatjade, kompressorite, klapiplokkide, kere kõrguse andurite ja õhusüsteemi lekete diagnostikat. Kontrollime süsteemi tööd kere kõrguse, tõusukiiruse ja kontuurides oleva jääkrõhu järgi.", brands: ["Arnott", "Dunlop", "Continental", "OEM"] }
        ],
        diagnosticsTitle: "Miks kulub veermik Tallinnas kiiremini, kui tootja ette näeb?",
        diagnosticsText: [
            "Teesool, temperatuurikõikumised, trammiteed ja talvejärgsed ebatasasused koormavad veermikudetaile tavapärasest rohkem. Kiiremini kuluvad puksid, stabilisaatorivardad, kuulliigendid, rooliotsad ja amortisaatorid.",
            "Tugevate löökide järel aukudesse või äärekividesse võib muutuda veermiku geomeetria ja rataste seadenurgad. Selle tõttu hakkab auto kõrvale kiskuma ning rehvid kuluvad ebaühtlaselt. Regulaarne diagnostika ja 3D-sildade reguleerimine aitavad probleemi avastada enne tõsisemate rikete tekkimist.",
            "Soovitame veermikku kontrollida hooajalise rehvivahetuse ajal või iga 10 000 km järel."
        ],
        servicesListTitle: "Meie veermiku diagnostika- ja remonditeenused",
        servicesList: [
            "Veermiku diagnostika",
            "Õõtshoova pukside vahetus",
            "Õõtshoova vahetus",
            "Kuulliigendi vahetus",
            "Amortisaatorite vahetus",
            "Rattalaagri vahetus",
            "Stabilisaatorivarraste ja -pukside vahetus",
            "3D-sildade reguleerimine"
        ],
        afterListText: "Täpne maksumus kooskõlastatakse enne remondi alustamist.",
        serviceCardsTitle: "Meie veermiku diagnostika- ja remonditeenused",
        serviceCards: [
            { featured: true, icon: "mdi:stethoscope", title: "Veermiku diagnostika", desc: "Teeme proovisõidu, ülevaatuse tõstukil, lõtkude ja kõrvaliste helide kontrolli ning hindame kuulliigendite, rooliotste, rattalaagrite, amortisaatorite, pukside ja kaitsekummide seisukorda.", price: "25 €", time: "30–45 min" },
            { icon: "mdi:axis-arrow", title: "Õõtshoova pukside vahetus", desc: "Pressime kulunud puksi välja ja paigaldame uue, järgides tootja ettenähtud pingutusmomente koormatud asendis. Pärast remonti on soovitatav kontrollida rataste seadenurki. Seda tööd tehakse sageli Volkswagen Passatil, Audi A6-l ja Škoda Superbil.", price: "alates 25 €", time: "alates 1 h" },
            { icon: "mdi:car-lifted-pickup", title: "Õõtshoova vahetus", desc: "Õõtshoova vahetus on soovitatav deformatsiooni, kinnituste kahjustuse või mitme puksi ja kuulliigendi samaaegse kulumise korral. Pärast vahetust teeme 3D-sildade reguleerimise.", price: "alates 40 €", time: "1–1,5 h" },
            { icon: "mdi:circle-outline", title: "Kuulliigendi vahetus", desc: "Vahetame kuulliigendi või integreeritud kuulliigendiga õõtshoova. Pärast remonti kontrollime lõtke ja rataste seadenurki. See on levinud töö näiteks Ford Focusel, BMW X5-l ja Volkswagen Transporteril.", price: "alates 35 €", time: "1–2 h" },
            { icon: "mdi:car-lifted-pickup", title: "Amortisaatorite vahetus", desc: "Vahetame amortisaatorid, tugilaagrid, tolmukatted ja põrkeleevendid. Amortisaatoreid vahetatakse samal teljel paarikaupa. Pärast remonti teeme kontrolli ja 3D-sildade reguleerimise. Sageli hooldame Volkswagen Passati, BMW 5. seeria ja Mercedes-Benz E-klassi veermikku.", price: "alates 90 € paar", time: "1,5–2 h" },
            { icon: "mdi:circle-double", title: "Rattalaagri vahetus", desc: "Vahetame rattalaagri ning kontrollime istupindade, piduriketta ja ABS-anduri seisukorda. Pärast paigaldust kontrollime, et lõtku ega kõrvalist müra ei oleks.", price: "alates 50 €", time: "1,5–2 h" },
            { icon: "mdi:wrench", title: "Stabilisaatorivarraste ja -pukside vahetus", desc: "Stabilisaatorivarraste ja -pukside vahetus aitab kõrvaldada kolinad ja lõtkud, mis tekivad ebatasasel teel sõites. Eriti sageli esineb seda Volkswagen Golfil, Škoda Octavial, Ford Focusel ja teistel linnas kasutatavatel autodel.", price: "alates 20 €", time: "0,5–1 h" },
            { featured: true, icon: "mdi:align-horizontal-distribute", title: "3D-sildade reguleerimine", desc: "Kontrollime ja reguleerime rataste seadenurki kaasaegsel 3D-stendil. See aitab taastada veermiku õige geomeetria, vähendada rehvide kulumist ja parandada auto stabiilsust. 3D-sildade reguleerimine on soovitatav pärast veermiku remonti ja roolisüsteemi komponentide vahetust.", price: "alates 60 €", time: "1 h" }
        ],
        processTitle: "Kuidas toimub veermiku diagnostika ja remont Mr.Caris?",
        processSteps: [
            { num: "01", title: "Proovisõit ja esmane diagnostika", text: "Meister teeb autoga proovisõidu, et kolinad, vibratsioonid ja kõrvalekalded veermiku töös täpselt lokaliseerida. Pärast proovisõitu kontrollitakse veermikku tõstukil." },
            { num: "02", title: "Defekteerimine ja remondi kooskõlastamine", text: "Kontrollime kõigi veermikuelementide seisukorda ja määrame kindlaks, millised detailid vajavad vahetamist. Enne tööde alustamist kooskõlastame varuosade ja remondi maksumuse ning 3D-sildade reguleerimise vajaduse." },
            { num: "03", title: "Remont tootja tehnoloogia järgi", text: "Kasutame originaalseid OEM-komponente ja kvaliteetseid järelturu analooge: Lemförder, Sachs, Bilstein, TRW ja teised. Veermiku keermesühendused pingutatakse tööasendis, järgides tootja ettenähtud pingutusmomente." },
            { num: "04", title: "3D-sildade reguleerimine", text: "Pärast õõtshoobade, kuulliigendite, roolisüsteemi komponentide või amortisaatorite vahetust reguleerime veermiku geomeetriat kaasaegsel 3D-stendil. Vajaduse korral reguleerime kokkujooksu, külgkallet ja järeljooksu ning kontrollime parameetreid enne ja pärast seadistamist." },
            { num: "05", title: "Garantii tehtud töödele", text: "Garantii kehtib tehtud töödele ja paigaldatud varuosadele vastavalt Mr.Cari teenindustingimustele." }
        ],
        pricingTitle: "Veermiku diagnostika ja remondi hinnad",
        pricingRows: [
            { service: "Veermiku diagnostika", price: "25 €", price2: "—" },
            { service: "Õõtshoova puksi vahetus", price: "25 €", price2: "50 €" },
            { service: "Õõtshoova vahetus komplektina", price: "40 €", price2: "120 €" },
            { service: "Kuulliigendi vahetus", price: "35 €", price2: "80 €" },
            { service: "Stabilisaatorivarda / -puksi vahetus", price: "20 €", price2: "40 €" },
            { service: "Amortisaatori / püstaku vahetus paarina", price: "90 €", price2: "180 €" },
            { service: "Rattalaagri vahetus", price: "50 €", price2: "120 €" },
            { service: "3D-sildade reguleerimine", price: "60 €", price2: "—" }
        ],
        pricingNote: "Hinnad koos töö ja varuosadega on toodud VW Golfi / Škoda Octavia kohta koos keskmise hinnaklassi varuosadega. BMW, Audi ja Mercedes-Benzi puhul täpsustage hind broneerimisel. Õhkvedrustuse tööd arvestatakse eraldi. Täpne maksumus kooskõlastatakse enne remondi alustamist.",
        reviewsTitle: "Klientide arvustused",
        ratingSummary: { score: "4.9", metaStrong: "Google Reviews", metaText: "põhineb enam kui 120 arvustusel" },
        reviews: [
            { text: "„Pärast talve tekkis ees iga augu peal kolin. Elan Kalamajas — seal on trammiteid iga 200 meetri tagant. Mr.Caris tehti poole tunniga kindlaks, et probleem oli eesmise püstaku tugilaagris ja stabilisaatorivardas. Vahetati ühe päevaga. Hind vastas täpselt hinnapakkumisele.“", author: "Aleksei V.", car: "VW Golf VII, Kalamaja" },
            { text: "„BMW F30-l tekkis rooli vibratsioon kiirusel 100 km/h. Käisin kahes teeninduses — mõlemad rääkisid tasakaalustamisest. Mr.Caris tehti diagnostika ja selgus, et kulunud oli eesmine rattalaager. Vahetati ühe päevaga. Vibratsioon kadus täielikult. Samas tehti ka 3D-sildade reguleerimine.“", author: "Dmitri K.", car: "BMW 320i F30, Tallinn" },
            { text: "„Audi A4 rehvid kulusid ebaühtlaselt — sisemine serv läks kiiremini siledaks. Selgus, et tagumine õõtshoob oli Koplis auku sõitmise järel deformeerunud. Õõtshoob vahetati ära ja tehti 3D-sildade reguleerimine. Nüüd kuluvad rehvid ühtlaselt.“", author: "Natalja S.", car: "Audi A4 B8, Põhja-Tallinn" }
        ],
        trustItems: [
            { icon: "mdi:shield-check", title: "12-kuuline garantii", desc: "Kirjalik garantii varuosadele ja tehtud töödele." },
            { icon: "mdi:car-cog", title: "Lemförder, Sachs, Bilstein, TRW", desc: "Kasutame ainult usaldusväärsete tootjate varuosi." },
            { icon: "mdi:car-lifted-pickup", title: "Pingutamine koormuse all", desc: "Poltühendused pingutame alles siis, kui auto seisab ratastel — see pikendab pukside tööiga." }
        ],
        faqTitle: "Korduma kippuvad küsimused veermiku diagnostika ja remondi kohta",
        faqItems: [
            { q: "Kui tihti tuleks Eestis veermikku kontrollida?", a: "Soovitame veermikku kontrollida kaks korda aastas — hooajalise rehvivahetuse ajal oktoobris-novembris ja märtsis-aprillis. Kevadine kontroll on eriti oluline, sest pärast talve, teesoola ja temperatuurikõikumisi kuluvad puksid ja kaitsekummid kiiremini. Veermiku diagnostika Mr.Caris maksab 25 €." },
            { q: "Kas pärast amortisaatorite või õõtshoobade vahetust on vaja sildade reguleerimist?", a: "Jah, kindlasti. Igasugune sekkumine veermiku elementidesse võib muuta rataste seadenurki. Juba 0,5° kõrvalekalle külgkaldes võib põhjustada rehvide ebaühtlast kulumist 10 000–15 000 km jooksul. 3D-sildade reguleerimine Mr.Caris maksab alates 60 €." },
            { q: "Kui palju maksab kuulliigendi vahetus Tallinnas?", a: "Kuulliigendi vahetus VW Golfil või Škoda Octavial maksab alates 80 € koos töö ja varuosadega. BMW 3. seeria puhul algab hind tavaliselt 120–150 eurost koos töö ja varuosadega. Hind sõltub konstruktsioonist: mõnel autol saab kuulliigendi eraldi vahetada, teistel tuleb see vahetada koos õõtshoovaga." },
            { q: "Kui kaua amortisaatorid Eesti oludes kestavad?", a: "Tootjate normide järgi kestavad amortisaatorid tavaliselt 80 000–100 000 km. Tallinna tegelikes sõiduoludes on tööiga sageli 60 000–80 000 km, sest teedel on augud, trammiteed ja suured temperatuurikõikumised. Amortisaatoreid vahetame samal teljel paarikaupa." },
            { q: "Kas kulunud kuulliigendiga võib edasi sõita?", a: "Ei tohi. Kriitilise kulumise korral võib liigend sõidu ajal pesast välja tulla — ratas vajub auto alla ja sõiduk kaotab juhitavuse. Kui diagnostikas avastatakse kuulliigendis lõtk, ei tohi remonti edasi lükata." },
            { q: "Miks rehvid kuluvad ebaühtlaselt?", a: "Ebaühtlane rehvikulumine tekib enamasti siis, kui rataste seadenurgad on paigast nihkunud. Põhjuseks võivad olla kulunud õõtshoovad või puksid, auku sõitmise järel deformeerunud õõtshoob või kulunud roolivardaotsad. Esmalt tuleb põhjus kõrvaldada ja seejärel teha 3D-sildade reguleerimine." },
            { q: "Kui palju maksab täielik veermiku diagnostika?", a: "Veermiku diagnostika Mr.Caris maksab 25 €. See sisaldab proovisõitu, ülevaatust tõstukil, kõigi liigeste lõtkude kontrolli ning amortisaatorite, pukside ja kaitsekummide seisukorra hindamist. Hilisema remondi korral arvestatakse diagnostika hind tööde maksumusest maha." },
            { q: "Kas hooldate ka õhkvedrustust?", a: "Jah. Töötame Audi A6/A8/Q7, BMW 5/7-seeria, Mercedes-Benzi E/S-klassi ja Volvo XC90 õhkvedrustusega. Diagnoosime lekkeid õhutorudes, kontrollime õhkpatju ja kompressorit. Kasutame Arnotti ja Continental OEM-i komponente." }
        ],
        crossLinks: [
            { href: "/services/pidurisusteemi-hooldus-ja-remont", icon: "mdi:car-brake-alert", label: "Seotud teenus", title: "Pidurisüsteemi remont ja hooldus" },
            { href: "/services/rehvitood", icon: "mdi:tire", label: "Seotud teenus", title: "Rehvitööd" },
            { href: "/services/hooldus-diagnostika", icon: "mdi:car-cog", label: "Seotud teenus", title: "Tehniline hooldus ja diagnostika" }
        ],
        promoBanner: { enabled: false },
        ctaSection: {
            title: "Vajad veermiku diagnostikat?",
            text: "Broneeri aeg veebis — kontrollime veermiku üle, näitame kriitilised sõlmed ja kooskõlastame remondi enne tööde alustamist.",
            phoneText: "Helista: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Veermiku diagnostika broneerimine",
            subtitle: "Jäta päring — helistame tagasi 30 minutiga"
        },
        jsonLdServiceDescription: "Veermiku diagnostika ja remont Tallinnas: amortisaatorid, õõtshoovad, kuulliigendid, puksid, rattalaagrid ja 3D-sildade reguleerimine.",
        seo: {
            title: "Veermiku diagnostika ja remont Tallinnas | Mr.Car",
            description: "Veermiku diagnostika ja remont Tallinnas: amortisaatorid, õõtshoovad, kuulliigendid, puksid, rattalaagrid ja 3D-sildade reguleerimine. Garantii 12 kuud."
        }
    },

    {
        key: "brake_system",
        slug: "pidurisusteemi-hooldus-ja-remont",
        allSlugs: { ru: "tormoznaya-sistema", ee: "pidurisusteemi-hooldus-ja-remont", en: "brake-system-service-and-repair" },
        category: "Veermik ja pidurid",
        navTitle: "Pidurisüsteem",
        icon: "mdi:car-brake-alert",
        menuChildren: [
            { slug: "ketaspidurite-remont", label: "Ketaspidurid" },
            { slug: "trummelpidurite-remont", label: "Trummelpidurid" }
        ],
        heroTitle: "Pidurisüsteemi remont ja hooldus Tallinnas",
        heroLead: "Pidurite kriuksumine, piduripedaali vibratsioon, auto kiskumine pidurdamisel või piduriketaste ülekuumenemine - diagnoosime ja kõrvaldame pidurisüsteemi rikked.",
        heroImage: "/pics/brake-system-hero.webp",
        introTitle: "Pidurite hooldusega ei tasu viivitada",
        introText: [
            "Mr.Car pakub pidurisüsteemi terviklikku hooldust: alates plaanilisest piduriklotside ja pidurivedeliku vahetusest kuni ABS-diagnostika ja pidurisadulate remondini.",
            "Hooldame kõigi automarkide ketas- ja trummelpidurisüsteeme."
        ],
        symptomsTitle: "Pidurisüsteemi rikete peamised sümptomid",
        symptoms: [
            { icon: "mdi:volume-high", text: "Pidurite kriuksumine ja vilin" },
            { icon: "mdi:vibrate", text: "Piduripedaali vibratsioon" },
            { icon: "mdi:car-brake-low-pressure", text: "Pehme piduripedaal" },
            { icon: "mdi:car-traction-control", text: "Auto kisub pidurdamisel küljele" },
            { icon: "mdi:alert-circle", text: "ABS- või ESP-tuli põleb" },
            { icon: "mdi:thermometer-alert", text: "Kõrbelõhn pärast sõitu" }
        ],
        afterSymptomsText: "Pidurisüsteemi kõrvalised helid, vibratsioon või ABS-tuli vajavad kontrolli enne, kui rike kahjustab rohkem komponente.",
        servicesListTitle: "Teenused ja orienteeruvad hinnad:",
        servicesList: [
            "Pidurisüsteemi esmane diagnostika",
            "Piduriklotside vahetus",
            "Piduriketaste ja -klotside vahetus",
            "Pidurisadula vahetus ja remont",
            "Pidurivedeliku vahetus",
            "Piduritorude valmistamine ja vahetus"
        ],
        afterListText: "Lõplik maksumus kooskõlastatakse enne remondi alustamist.",
        promoBanner: { enabled: false },
        ctaSection: {
            title: "Vajate pidurite diagnostikat?",
            text: "Kriuksumine, vibratsioon, pehme pedaal või põlev ABS-tuli ei ole sümptomid, mida tasub ignoreerida.",
            phoneText: "Helista: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Pidurite diagnostika broneerimine",
            subtitle: "Jäta päring — helistame tagasi 30 minutiga"
        },
        seo: {
            title: "Pidurisüsteemi remont ja hooldus Tallinnas | Mr.Car",
            description: "Pidurisüsteemi remont ja hooldus Tallinnas: klotsid, kettad, sadulad, pidurivedelik ja ABS-diagnostika. 12-kuuline garantii. Kopli 82a."
        }
    },

    {
        key: "tire_service",
        slug: "rehvitood",
        allSlugs: { ru: "shinomontazh", ee: "rehvitood", en: "tire-service" },
        category: "Veermik ja pidurid",
        navTitle: "Rehvitööd",
        icon: "mdi:tire",
        heroTitle: "Rehvitööd",
        heroLead: "Hooajaline rehvivahetus, tasakaalustamine, torkeaukude remont. Kiiresti ja korrektselt — järjekordadeta.",
        heroImage: "/pics/tire-service-hero.webp",
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

    {
        key: "maintenance_diag",
        slug: "hooldus-diagnostika",
        allSlugs: { ru: "tehobsluzhivanie-diagnostika", ee: "hooldus-diagnostika", en: "maintenance-diagnostics" },
        category: "Hooldus",
        navTitle: "Tehniline hooldus",
        icon: "mdi:car-cog",
        heroTitle: "Tehniline hooldus",
        heroLead: "Regulaarne hooldus tootja standardite järgi ilma edasimüüja garantii kaotamiseta.",
        heroImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1400&q=80",
        introTitle: "Tehniline hooldus Mr.Car-is",
        introText: [
            "Regulaarne hooldus on parim investeering auto pikka elueasse. Teostame kõiki regulatsioonitöid tootja standardite järgi, mis säilitab su edasimüüja garantii.",
            "Iga hooldus sisaldab kõigi autosüsteemide mitmepunktilist kontrolli. Saad täieliku ülevaate auto seisukorrast ja soovitused edaspidiseks."
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
            "Mootoriõli ja õlifiltri vahetus",
            "Õhu- ja salongifiltri vahetus",
            "Vedelike kontroll ja lisamine",
            "Pidurdussüsteemi kontroll",
            "Veermiku kontroll tõstukil",
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
        key: "diagnostics",
        slug: "diagnostika",
        allSlugs: { ru: "diagnostika", ee: "diagnostika", en: "diagnostics" },
        category: "Hooldus",
        navTitle: "Diagnostika",
        icon: "mdi:car-search",
        heroTitle: "Autodiagnostika",
        heroLead: "See teenuse leht on koostamisel. Diagnostika info ja hinnad lisame peagi.",
        heroImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1400&q=80",
        introTitle: "Leht on koostamisel",
        introText: [
            "Autodiagnostika saab eraldi teenuse lehe, et hooldus ja rikete otsing oleksid menüüs selgelt eraldi.",
            "Kuni detailne leht valmib, saad diagnostika aja broneerida sama päringuvormi kaudu."
        ],
        symptomsTitle: "Mida leht hakkab sisaldama?",
        symptoms: [
            { icon: "mdi:engine-outline", text: "Mootori diagnostika" },
            { icon: "mdi:car-cog", text: "Arvutidiagnostika" },
            { icon: "mdi:alert-circle", text: "Veakoodide lugemine" },
            { icon: "mdi:lightning-bolt", text: "Elektririkete kontroll" }
        ],
        afterSymptomsText: "Leht on arenduses, kuid teenust saab juba tellida.",
        servicesListTitle: "Planeeritav sisu:",
        servicesList: [
            "Diagnostika tööetapid",
            "Hinnad ja ajakulu",
            "Tüüpilised sümptomid",
            "Broneerimissoovitused"
        ],
        afterListText: "Täielik kirjeldus lisatakse hiljem.",
        promoBanner: { enabled: false },
        ctaSection: {
            title: "Vajad diagnostikat?",
            text: "Jäta päring — lepime aja kokku ja täpsustame probleemi.",
            phoneText: "Helista: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Diagnostika broneerimine",
            subtitle: "Jäta päring — helistame tagasi 30 minutiga"
        },
        seo: {
            title: "Autodiagnostika — Mr.Car Tallinn",
            description: "Autodiagnostika Tallinnas. Leht on koostamisel. Kopli 82a. +372 5646 1210"
        }
    },

    {
        key: "transmission",
        slug: "kaigukastiremont",
        allSlugs: { ru: "remont-kpp", ee: "kaigukastiremont", en: "transmission-repair" },
        category: "Mootor ja seadmed",
        navTitle: "Käigukasti tööd",
        icon: "mdi:car-shift-pattern",
        menuChildren: [
            { slug: "automaatkasti-remont", label: "Automaatkäigukastid" },
            { slug: "kasikasti-remont", label: "Manuaalkäigukastid" }
        ],
        heroTitle: "Käigukasti remont",
        heroLead: "Automaatkäigukastid, DSG, S tronic, variaatorid ja manuaalkäigukastid — teeme igasuguse keerukusega käigukastide diagnostikat, hooldust ja remonti. Siduri ja mehhatroonika vahetus, hüdroplokkide remont, jõnksude, libisemise, vibratsiooni ja avariirežiimi kõrvaldamine. Töötame tehase tehnoloogiate järgi ja anname 12-kuulise garantii.",
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
            { icon: "mdi:rotate-right", text: "Käikude libisemine" },
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
        key: "electrical",
        slug: "elektritood",
        allSlugs: { ru: "elektrika", ee: "elektritood", en: "electrical-repair" },
        category: "Diagnostika ja elektroonika",
        navTitle: "Elektritööd",
        icon: "mdi:lightning-bolt",
        heroTitle: "Autoelekter",
        heroLead: "Voolulekked, lühised, elektroonika tõrked — leiame ja kõrvaldame ilma arvamiseta.",
        heroImage: "/pics/electrical-repair-hero.webp",
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

    {
        key: "engine",
        slug: "mootoriremont",
        allSlugs: { ru: "remont-dvigatelya", ee: "mootoriremont", en: "engine-repair" },
        category: "Mootor ja seadmed",
        navTitle: "Mootori tööd",
        icon: "mdi:engine",
        heroTitle: "Mootori remont",
        heroLead: "Mootori kapitaalremont mikropragudest täieliku lahtivõtmiseni. Mehhaaniline töötlus 0,01 mm täpsusega.",
        heroImage: "/pics/engine-repair-hero.webp",
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
        key: "oil_change",
        slug: "olivahetus",
        menuParentSlug: "hooldus-diagnostika",
        allSlugs: { ru: "zamena-masla", ee: "olivahetus", en: "oil-change" },
        category: "Hooldus",
        navTitle: "Õli ja filtrite vahetus",
        icon: "mdi:oil",
        heroTitle: "Õlivahetus ja filtrid",
        heroLead: "Kiire õlivahetus tootja lubade järgi sobiva õliga. Alates €45 koos filtriga.",
        heroImage: "/pics/oil-change-hero.webp",
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
            "Mootoriõli vahetus",
            "Õlifiltri vahetus",
            "Õhufiltri vahetus",
            "Salongifiltri vahetus",
            "Kütusefiltri vahetus",
            "Kõigi vedelike taseme kontroll"
        ],
        afterListText: "Hind alates €45 (õli + filter). Täpne hind sõltub mootori mahust ja õli margist.",
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
            title: "Õlivahetus Tallinnas — Mr.Car | alates €45",
            description: "Õlivahetus ja filtrid Tallinnas. Valik tootja lubade järgi. Motul, Castrol, Mobil 1. Alates €45. Kopli 82a. +372 5646 1210"
        }
    },

    {
        key: "pre_purchase",
        slug: "ostueelne-kontroll",
        allSlugs: { ru: "proverka-pered-pokupkoy", ee: "ostueelne-kontroll", en: "pre-purchase-inspection" },
        category: "Hooldus",
        navTitle: "Enne Ostu Kontroll",
        icon: "mdi:file-search-outline",
        heroTitle: "Auto kontroll enne ostmist",
        heroLead: "Sõltumatu tehniline ekspertiis — et ost ei muutuks pettumiseks.",
        heroImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1400&q=80",
        introTitle: "Ostueelne kontroll Mr.Car-is",
        introText: [
            "Kasutatud auto ostmine on alati risk. Keerutatud läbisõit, varjatud avariid, mootoriprobleemid — kõik see võib selguda alles pärast tehingut.",
            "Sõltumatu kontroll Mr.Car-is näitab auto tegeliku seisukorra. Kontrollime kõiki sõlme ja süsteeme ning anname aus hinnangu — kas tasub osta või mitte."
        ],
        symptomsTitle: "Mida me kontrollime?",
        symptoms: [
            { icon: "mdi:engine", text: "Mootori seisukord" },
            { icon: "mdi:car-shift-pattern", text: "Käigukasti töö" },
            { icon: "mdi:car-brake-alert", text: "Veermik ja pidurid" },
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
            "Veermiku vaatlus tõstukil",
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

    {
        key: "ac_service",
        slug: "kliimahooldus",
        allSlugs: { ru: "klimat-konditsioner", ee: "kliimahooldus", en: "ac-service" },
        category: "Kliimaseade ja lisavarustus",
        navTitle: "Kliima ja Konditsioneer",
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
        key: "webasto",
        slug: "webasto-diagnostika",
        allSlugs: { ru: "webasto", ee: "webasto-diagnostika", en: "webasto-repair" },
        category: "Kliimaseade ja lisavarustus",
        navTitle: "Webasto remont",
        icon: "mdi:radiator",
        menuChildren: [
            { slug: "webasto-sumptomid", label: "Webasto sümptomid" }
        ],
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
        afterSymptomsText: "Webasto hooldus enne hooaega on parim viis külmas probleemide vältimiseks. Võtab 1–2 tundi. <br><br>👉 <a href=\"/services/webasto-sumptomid\" style=\"text-decoration: underline; font-weight: bold;\">Loe lähemalt Webasto sagedasematest sümptomitest ja veakoodidest</a>.",
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
    }
];
