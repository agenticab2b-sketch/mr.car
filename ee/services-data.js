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
            { href: "/services/piduriklotside-vahetus", icon: "mdi:car-brake-alert", label: "Seotud teenus", title: "Pidurite remont ja piduriklotside vahetus" },
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
        slug: "piduriklotside-vahetus",
        allSlugs: { ru: "zamena-tormoznyh-kolodok", ee: "piduriklotside-vahetus", en: "brake-pads-replacement" },
        category: "Veermik ja pidurid",
        navTitle: "Pidurid",
        icon: "mdi:car-brake-alert",
        menuChildren: [
            { slug: "ketaspidurite-remont", label: "Ketaspidurid" },
            { slug: "trummelpidurite-remont", label: "Trummelpidurid" }
        ],
        heroTitle: "Pidurite remont ja piduriklotside vahetus Tallinnas",
        heroLead: "Pidurite remont ja piduriklotside vahetus Tallinnas: kontrollime pidurikettad, sadulad, pidurivedeliku ja ABS-i ning vahetame kulunud detailid õigeaegselt.",
        heroImage: "/pics/brake-system-hero.webp",
        introTitle: "Pidurite hooldusega ei tasu viivitada",
        introText: [
            "Mr.Car pakub piduriklotside vahetust ja pidurite terviklikku hooldust: alates plaanilisest pidurivedeliku vahetusest kuni ABS-diagnostika ja pidurisadulate remondini.",
            "Hooldame kõigi automarkide ketas- ja trummelpidurisüsteeme."
        ],
        symptomsTitle: "Pidurite rikete peamised sümptomid",
        symptoms: [
            { icon: "mdi:volume-high", text: "Pidurite kriuksumine ja vilin" },
            { icon: "mdi:vibrate", text: "Piduripedaali vibratsioon" },
            { icon: "mdi:car-brake-low-pressure", text: "Pehme piduripedaal" },
            { icon: "mdi:car-traction-control", text: "Auto kisub pidurdamisel küljele" },
            { icon: "mdi:alert-circle", text: "ABS- või ESP-tuli põleb" },
            { icon: "mdi:thermometer-alert", text: "Kõrbelõhn pärast sõitu" }
        ],
        afterSymptomsText: "Pidurite kõrvalised helid, vibratsioon või ABS-tuli vajavad kontrolli enne, kui rike kahjustab rohkem komponente.",
        servicesListTitle: "Teenused ja orienteeruvad hinnad:",
        servicesList: [
            "Pidurite esmane diagnostika",
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
            title: "Pidurite remont ja piduriklotside vahetus Tallinnas | Mr.Car",
            description: "Pidurite remont ja piduriklotside vahetus Tallinnas: kontrollime pidurikettad, sadulad, pidurivedeliku ja ABS-i. Vajadusel vahetame kettad ja hooldame pidureid. Kopli 82a."
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
        key: "timing_belt_chain",
        slug: "hammasrihma-ja-keti-vahetus",
        menuParentSlug: "mootoriremont",
        allSlugs: { ru: "zamena-remnya-cepi-grm", ee: "hammasrihma-ja-keti-vahetus", en: "timing-belt-chain-replacement" },
        category: "Mootor ja seadmed",
        navTitle: "Hammasrihm ja kett",
        icon: "mdi:sync",
        templateVariant: "service-deep-dive-v2",
        heroTitle: "Hammasrihma ja keti vahetus Tallinnas",
        heroLead: "Diagnoosime ja hooldame hammasrihm- ja kettajameid. Valime komplekti VIN-koodi või registreerimisnumbri järgi, lepime tööde mahu eelnevalt kokku ning teostame vahetuse vastavalt tootja nõuetele.",
        heroImage: "/pics/timing-belt-chain-crankshaft-hero.webp",
        extraStyles: ["/services/timing-belt-chain.css?v=1"],
        heroStats: [
            { value: "Hammasrihm või kett", label: "Teeme kindlaks süsteemi tüübi — rihm või kett — ja valime konkreetsele mootorile sobiva komplekti" },
            { value: "Rullikud ja pingutid", label: "Kontrollime ajami osi, mis mõjutavad kasutusiga, pinget ja gaasijaotusmehhanismi stabiilset tööd" },
            { value: "Valik VIN-koodi või reg. numbri järgi", label: "Täpsustame mootori, varustuse ja vajalikud detailid enne tööde algust" }
        ],
        localNav: [
            { href: "#symptoms", icon: "mdi:alert-circle-outline", label: "Sümptomid" },
            { href: "#types", icon: "mdi:engine", label: "Rihm või kett" },
            { href: "#diagnostika", icon: "mdi:stethoscope", label: "Diagnostika" },
            { href: "#services", icon: "mdi:wrench", label: "Mis töös sisaldub" },
            { href: "#process", icon: "mdi:format-list-numbered", label: "Kuidas töötame" },
            { href: "#pricing", icon: "mdi:clipboard-text-clock", label: "Maksumus" },
            { href: "#faq", icon: "mdi:frequently-asked-questions", label: "KKK" }
        ],
        introTitle: "Hammasrihma ja keti vahetus Mr.Car-is",
        introText: [
            "Gaasijaotusmehhanism tagab väntvõlli ja nukkvõllide täpse sünkroonse töö. Mootori stabiilne töö sõltub otseselt hammasrihma või -keti, pingutite, rullikute ja juhikute seisukorrast.",
            "Kulunud rihm, veninud kett või rikkis pinguti võib põhjustada gaasijaotusfaaside paigast nihkumise. Selle tulemusel võib mootor halvasti käivituda, ebaühtlaselt töötada, võimsust kaotada või saada tõsiseid mehaanilisi kahjustusi.",
            "Mr.Car-is algab töö auto kontrollist ja mootoriandmete täpsustamisest. Valime hammasrihmakomplekti sõiduki registreerimisnumbri järgi, arvestame hooldusajalugu ja lepime tööde ulatuse kliendiga eelnevalt kokku. Vajaduse korral vahetatakse koos rihma või ketiga ka rullikud, pingutid, juhikud, simmerlingid ja veepump.",
            "Korrapärane hammasrihma või -keti vahetus on kontrollitud hooldus. Peaaegu alati on see mõistlikum kui mootori remont pärast rihma purunemist, keti ülehüpet või klapimehhanismi kahjustust."
        ],
        brands: [
            "Volkswagen / Audi / Škoda / SEAT",
            "BMW / MINI",
            "Mercedes-Benz",
            "Toyota / Lexus",
            "Ford",
            "Volvo",
            "Renault / Dacia / Nissan",
            "Hyundai / Kia"
        ],
        urgencyBlock: {
            icon: "mdi:alert-decagram",
            title: "Ärge lükake ajami kontrolli edasi",
            text: "Kui külmkäivitusel on tekkinud metalliline müra, armatuurlaual põleb Check Engine, esinevad gaasijaotusfaaside vead, hooldusajalugu on teadmata või läbisõit läheneb ajami hooldusvälbale, tasub ajam aegsasti üle kontrollida. Rihma purunemine või keti ülehüpe võib kahjustada klappe, kolbe ja silindripead."
        },
        symptomsTitle: "Millal ajamit kontrollida?",
        symptoms: [
            { icon: "mdi:counter", text: "Reglementne läbisõit läheneb" },
            { icon: "mdi:calendar-clock", text: "Rihm on mitu aastat vana" },
            { icon: "mdi:volume-vibrate", text: "Müra või ragin käivitamisel" },
            { icon: "mdi:engine-outline", text: "Faasidega seotud veakoodid" },
            { icon: "mdi:vibrate", text: "Mootor töötab ebaühtlaselt" },
            { icon: "mdi:oil", text: "Õlijäljed rihma piirkonnas" },
            { icon: "mdi:file-search-outline", text: "Hooldusajalugu puudub" }
        ],
        afterSymptomsText: "Osa sümptomeid võib tulla ka abiseadmetest, süütesüsteemist, kütusesüsteemist või anduritest. Seetõttu kinnitame põhjuse enne, kui hakkame osi vahetama.",
        detailedSymptomsTitle: "Hammasrihma või keti kulumise märgid",
        detailedSymptoms: [
            {
                tone: "critical",
                icon: "mdi:volume-vibrate",
                title: "Metalliline müra külmkäivitusel",
                desc: "Lühiajaline kõrin pärast käivitamist võib viidata veninud ketile või kulunud pingutile või juhikutele. Seda sümptomit tasub kontrollida enne, kui müra muutub püsivaks."
            },
            {
                tone: "critical",
                icon: "mdi:engine-outline",
                title: "Check Engine ja gaasijaotusfaaside vead",
                desc: "Võllide sünkroonimise vead võivad olla seotud veninud keti, ajami ülehüppe, pinguti ebakorrektse töö või võlliasendi anduritega."
            },
            {
                tone: "warning",
                icon: "mdi:counter",
                title: "Läbisõit või vanus läheneb hooldusvälbale",
                desc: "Hammasrihma ei vahetata ainult läbisõidu, vaid ka kasutusaja järgi. Isegi väikese läbisõidu korral kaotab materjal aja jooksul elastsust."
            },
            {
                tone: "warning",
                icon: "mdi:file-search-outline",
                title: "Hooldusajalugu on teadmata",
                desc: "Kui pärast auto ostmist puudub kinnitus hammasrihma või -keti vahetuse kohta, on soovitatav ajamit eraldi kontrollida, eriti enne pikemat sõitu või intensiivset kasutamist."
            },
            {
                icon: "mdi:vibrate",
                title: "Ebaühtlane töö ja halb käivitus",
                desc: "Gaasijaotusfaaside probleemid võivad avalduda vibratsiooni, pika käivituse, mootori ebastabiilse töö ja kiirendamisel tekkivate jõnksudena."
            },
            {
                icon: "mdi:speedometer-slow",
                title: "Jõu kadu ja suurenenud kütusekulu",
                desc: "Ajami sünkroonsuse häire võib vähendada mootori efektiivsust. Auto kiirendab halvemini, kaotab võimsust ja kulutab rohkem kütust."
            },
            {
                icon: "mdi:sync-alert",
                title: "Hammasrihma nähtav kulumine",
                desc: "Praod, kihistumine, kulumisjäljed või kahjustatud hambad on põhjus vahetust mitte edasi lükata. Selline kulumine tähendab sageli, et detaili ressurss on lõppemas."
            },
            {
                icon: "mdi:oil-level",
                title: "Õli- või jahutusvedeliku jäljed",
                desc: "Õli või jahutusvedelik ajami piirkonnas lühendab rihma, rullikute ja pingutite kasutusiga. Enne uue komplekti paigaldamist tuleb lekke põhjus kõrvaldada."
            },
            {
                icon: "mdi:volume-high",
                title: "Kõrvaline heli ajami piirkonnas",
                desc: "Vilin, undamine või krigin ajami piirkonnast võib viidata kulunud rullikule, pingutile, laagrile või rihma valele pingele. Sellisel juhul vajab sõlm diagnostikat."
            }
        ],
        riskStagesTitle: "Mis juhtub, kui hammasrihma või -keti vahetust edasi lükata",
        riskStages: [
            {
                marker: "1",
                title: "Seotud osade kulumine kiireneb",
                text: "Rullikud, pingutid, juhikud ja veepump võivad töötada oma võimekuse piiril isegi siis, kui rihm või kett on veel töökorras. Mida kauem hooldust edasi lükata, seda suurem on koormus kogu ajamile."
            },
            {
                marker: "2",
                title: "Gaasijaotusfaaside sünkroonsus häirub",
                text: "Veninud kett, kulunud rihm või vale pinge võib põhjustada faasivigu, mootori ebastabiilset tööd, halba käivitust, vibratsiooni ja jõu kadu."
            },
            {
                marker: "3",
                title: "Kalli mootoriremondi risk suureneb",
                text: "Rihma purunemine või keti ülehüpe võib kahjustada klappe, kolbe ja silindripead. Ajamikomplekti plaaniline vahetus on tavaliselt oluliselt odavam kui mootori remont pärast ajami riket."
            }
        ],
        engineTypesTitle: "Hammasrihm, ajamikett ja abirihm — mis vahe neil on",
        engineTypes: [
            {
                icon: "mdi:sync",
                title: "Hammasrihm",
                desc: "Hammasrihm sünkroniseerib väntvõlli ja nukkvõllide tööd. Seda vahetatakse tootja hooldusvälba järgi, kusjuures oluline ei ole ainult läbisõit, vaid ka kasutusaeg. Koos rihmaga kontrollitakse rullikuid, pingutit, simmerlingide seisukorda ja veepumpa, kui see on seotud hammasrihmaajamiga.",
                brands: ["Tootja hooldusvälba järgi", "Hammasrihmakomplekt", "Rullikud ja pinguti", "Veepump vajaduse korral"]
            },
            {
                icon: "mdi:link-variant",
                title: "Ajamikett",
                desc: "Ajamikett on mõeldud pikaajaliseks tööks, kuid kulub samuti. Keti venimine ning pinguti või juhikute kulumine võib põhjustada käivitusmüra, gaasijaotusfaaside vigu ja mootori ebastabiilset tööd. Selliste sümptomite korral vajab ketiajam eraldi diagnostikat.",
                brands: ["Pinguti", "Ketijuhikud", "Müra käivitamisel", "Faasivead"]
            },
            {
                icon: "mdi:cog-outline",
                title: "Abirihm",
                desc: "Abirihm paneb tööle generaatori, kliimakompressori ja teised abiseadmed. See ei sünkroniseeri mootori tööd ning seda hooldatakse hammasrihmast või ajamiketist eraldi. Seisukorda hinnatakse kulumise, pragude, müra, pinge ja seotud agregaatide töö järgi.",
                brands: ["Generaator", "Konditsioneer", "Abiseadmed", "Eraldi kontroll"]
            }
        ],
        diagnosticsTitle: "Hammasrihma- või ketiajami diagnostika enne vahetust",
        diagnosticsText: [
            "Enne vahetust tuleb kindlaks teha, millised osad tegelikult hooldust vajavad. Sama sümptom võib olla seotud rihma, keti, rulliku, pinguti, anduri, õlilekke või abiseadmetega.",
            "Täpsustame sõiduki andmed, mootori, läbisõidu, sümptomid ja hooldusajaloo. Pärast kontrolli lepime enne remondi algust kokku varuosade komplekti, tööde mahu ja tähtajad."
        ],
        diagnosticsChecklist: [
            "VIN-kood või registreerimisnumber, mootor ja läbisõit",
            "Hooldusajalugu ja viimane hammasrihma või -keti vahetus",
            "Rihma, rullikute, pinguti ja võimalike lekete piirkonna seisukord",
            "Keti ja juhikute müra ning faasivead",
            "Veepumba, simmerlingide ja seotud osade vahetamise vajadus",
            "Varuosade, tähtaegade ja tööde mahu kokkuleppimine"
        ],
        servicesListTitle: "Mida töö sisaldab:",
        servicesList: [
            "Ajamikomplekti valik auto ja mootori järgi",
            "Hammasrihma vahetus",
            "Ajamiketi vahetus",
            "Rullikute, pinguti, juhikute ja taldade vahetus seisukorra järgi",
            "Veepumba kontroll või vahetus, kui see on ajamiga seotud",
            "Märkide, pinge ja käsitsi pööramise kontroll ning mootori kontrollkäivitus"
        ],
        afterListText: "Töömaht sõltub konkreetsest mootorist. Ühte hinda kõigile autodele ei luba: enne täpsustame autonumbri, mootori ja vajaliku komplekti.",
        serviceCardsTitle: "Milliseid töid teeme",
        serviceCards: [
            {
                icon: "mdi:sync",
                title: "Hammasrihmakomplekti vahetus",
                desc: "Valime konkreetsele mootorile sobiva komplekti ning vahetame rihma, rullikud ja pinguti. Kontrollime ajastusmärke, simmerlingide seisukorda ja veepumpa, kui see on seotud hammasrihmaajamiga.",
                time: "tootja hooldusvälba järgi"
            },
            {
                icon: "mdi:link-variant",
                title: "Ketiajami hooldus",
                desc: "Diagnoosime käivitusmüra ja faasivigu ning kontrollime ketti, pingutit, juhikuid ja seotud osi. Tööde mahu lepime kokku pärast kontrolli ja varuosade valikut.",
                time: "diagnostika tulemuste järgi"
            },
            {
                icon: "mdi:stethoscope",
                title: "Hammasrihma- või ketiajami diagnostika",
                desc: "Kontrollime enne vahetust käivitusmüra, mootori ebaühtlast tööd, Check Engine'i vigu, läbisõitu, VIN-koodi või registreerimisnumbrit ja hooldusajalugu.",
                time: "enne tööde alustamist"
            },
            {
                icon: "mdi:water",
                title: "Veepump ja seotud osad",
                desc: "Kui juurdepääs on avatud, hindame veepumba, simmerlingide, rullikute, pingutite ja võimalike lekete seisukorda. Vajaduse korral lepime seotud osade vahetuse eelnevalt kokku.",
                time: "detailide seisukorra järgi"
            }
        ],
        processTitle: "Kuidas töö toimub",
        processSteps: [
            {
                num: "01",
                title: "Sõiduki andmed",
                text: "Täpsustame VIN-koodi või registreerimisnumbri, mootori, läbisõidu, sümptomid ja viimase ajamihoolduse kuupäeva."
            },
            {
                num: "02",
                title: "Diagnostika ja varuosade valik",
                text: "Kontrollime ajami tüüpi, ligipääsetavate osade seisukorda, võimalikke helisid, lekkeid ja faasivigu. Valime konkreetsele mootorile sobiva komplekti."
            },
            {
                num: "03",
                title: "Tööde mahu kokkuleppimine",
                text: "Selgitame, millised osad tuleb kohe vahetada, mis sõltub lahtivõtmisel selguvast seisukorrast, kui kaua töö kestab ja milliseid varuosi on vaja."
            },
            {
                num: "04",
                title: "Vahetus ja kontroll",
                text: "Teeme vahetuse, kontrollime ajastusmärke ja pinget ning pöörame mootorit käsitsi, et faasid üle kontrollida. Pärast kokkupanekut käivitame mootori ja kontrollime selle tööd."
            }
        ],
        pricingTitle: "Kuidas kujuneb hind",
        pricingRows: [
            { service: "Diagnostika ja komplekti täpsustamine", price: "Arvutatakse sõiduki järgi" },
            { service: "Hammasrihma vahetus", price: "Pärast mootori ja varuosakomplekti täpsustamist" },
            { service: "Ajamiketi vahetus", price: "Pärast diagnostikat ja tööde mahu hindamist" },
            { service: "Veepump, rullikud, pingutid ja simmerlingid", price: "Vastavalt osade seisukorrale ja mootori konstruktsioonile" }
        ],
        pricingNote: "Täpsema hinna arvutamiseks saatke sõiduki VIN-kood või registreerimisnumber, läbisõit ja teave viimase ajamihoolduse kohta. Täpsustame mootori, valime sobiva varuosakomplekti ja kooskõlastame tööde mahu enne remondi alustamist.",
        trustItems: [
            {
                icon: "mdi:car-search",
                title: "Kõigepealt kontroll",
                desc: "Ei vaheta detaile pimesi, kui sümptom võib olla seotud mõne teise sõlmega. Esmalt selgitame välja põhjuse ja seejärel pakume lahenduse."
            },
            {
                icon: "mdi:clipboard-text-clock",
                title: "Tööde kokkuleppimine enne alustamist",
                desc: "Varuosakomplekti, seotud osad, tähtajad ja tööde mahu arutame kliendiga eelnevalt läbi."
            },
            {
                icon: "mdi:shield-check",
                title: "Kontrollime kogu ajamit",
                desc: "Kontrollime lisaks rihmale või ketile ka rullikuid, pinguteid, juhikuid, simmerlinge ning võimalikke lekkejälgi."
            },
            {
                icon: "mdi:target",
                title: "Ajastusmärkide ja faaside täpsus",
                desc: "Ajami hooldusel on olulised korrektne fikseerimine, faaside täpne kokkulangevus ja kontroll pärast kokkupanekut. Umbkaudne paigaldus ei ole siin vastuvõetav."
            },
            {
                icon: "mdi:card-account-details-outline",
                title: "Valik VIN-koodi / registreerimisnumbri järgi",
                desc: "Täpsustame mootori, varustuse ja sobiva varuosakomplekti enne tööde alustamist, et vältida valikuvigu."
            },
            {
                icon: "mdi:check-decagram",
                title: "Kontroll pärast kokkupanekut",
                desc: "Pärast vahetust kontrollime käivitumist, mootori tööd, kõrvaliste helide puudumist ja tehtud tööde korrektsust."
            }
        ],
        faqTitle: "Korduma kippuvad küsimused",
        faqItems: [
            {
                q: "Millal hammasrihma vahetada?",
                a: "Hammasrihma kontrolli ja plaanilist vahetust tasub kaaluda juba alates umbes 60 000 km läbisõidust. Mõnel mootoril võib tootja ettenähtud välp olla pikem, kuid täpne intervall sõltub alati tootjast, mootori tüübist, rihma vanusest, kasutustingimustest ja sõiduki hooldusajaloost. Kui viimase vahetuse kohta kinnitust pole, rihm on umbes viis aastat vana, esineb õlijälgi, pragusid või müra või auto on hiljuti ostetud, tuleks ajam aegsasti üle kontrollida."
            },
            {
                q: "Kas ajamiketti on vaja vahetada?",
                a: "Ajamikett kestab tavaliselt kauem kui hammasrihm ja sellel ei ole alati kindlat vahetusvälpa. Kuid ka kett kulub: keti venimine ning pinguti või juhikute kulumine võivad põhjustada metallist heli käivitamisel, faasivigu ja mootori ebaühtlast tööd. Kettajami kontroll on eriti asjakohane alates 150 000 km läbisõidust, kuid ka varem, kui tekib müra, süttib Check Engine või mootor töötab ebaühtlaselt."
            },
            {
                q: "Kas võib edasi sõita, kui kett käivitamisel müriseb?",
                a: "Diagnostikat ei tasu edasi lükata. Lühiajaline metallist heli käivitamisel võib olla seotud keti venimise, pinguti või juhikute kulumise või ebapiisava õlirõhuga käivitamise hetkel. Sellise sümptomiga edasi sõites suureneb keti ülehüppe, gaasijaotusfaaside häire ja tõsise mootorikahjustuse oht."
            },
            {
                q: "Kas veepump tuleks koos hammasrihmaga vahetada?",
                a: "Kui veepumpa käitab hammasrihm või sellele pääseb lahtivõtmise ajal ligi, on sageli mõistlik vahetada see koos ajamikomplektiga. Nii saab vältida korduvat lahtivõtmist ja vähendada lekkeohtu pärast uue rihma paigaldamist. Lõplik otsus sõltub mootori konstruktsioonist, läbisõidust, pumba ja simmerlingide seisukorrast ning võimalikest lekkejälgedest."
            },
            {
                q: "Kas saab vahetada ainult rihma ilma rullikute ja pingutita?",
                a: "Tehniliselt on mõnikord võimalik vahetada ainult rihm, kuid enamasti on õigem vahetada kogu ajamikomplekt. Rullikud, pinguti ja muud osad töötavad koos rihmaga ning kuluvad samuti. Vanade rullikute või pinguti jätmisel võib uue rihma eluiga lüheneda ja kordusremondi oht suureneda."
            },
            {
                q: "Kas maksumust saab ette teada?",
                a: "Esialgse maksumuse saab arvutada pärast VIN-koodi või registreerimisnumbri, mootori, läbisõidu ja hooldusajaloo täpsustamist. Lõplik maksumus sõltub varuosakomplektist, mootori konstruktsioonist, ligipääsust ajamile ja seotud osade vahetamise vajadusest. Enne tööde alustamist kooskõlastame kliendiga varuosakomplekti, tööde mahu, tähtajad ja remondi edasise käigu."
            },
            {
                q: "Mis vahe on hammasrihmal ja abiseadmete rihmal?",
                a: "Hammasrihm sünkroniseerib väntvõlli ja nukkvõllide tööd mootori sees. Abiseadmete rihm käitab generaatorit, kliimakompressorit ja teisi väliseid sõlmi. Need on erinevad süsteemid, erinevad rihmad ja erinevad hooldustööd."
            },
            {
                q: "Mida teha, kui ma ei tea, millal ajamit viimati vahetati?",
                a: "Kõigepealt tasub kontrollida sõidukit ja hooldusajalugu. Kui vahetuse kohta puudub kinnitus, auto on hiljuti ostetud, läbisõit tekitab kahtlust või rihm võib olla mitu aastat vana, on ohutum ajam aegsasti üle kontrollida ja vajaduse korral vahetus planeerida."
            },
            {
                q: "Kui kaua võtab hammasrihma või ajamiketi vahetus aega?",
                a: "Aeg sõltub mootorist, sõiduki konstruktsioonist ja ligipääsust ajamile. Rihma vahetus kestab tavaliselt mõnest tunnist ühe tööpäevani. Kettajamiga seotud tööd on sageli keerukamad ja võivad rohkem aega võtta. Täpne aeg tasub kinnitada pärast sõiduki tuvastamist ja varuosade valimist."
            },
            {
                q: "Miks on ajamit parem vahetada teeninduses?",
                a: "Ajami juures on olulised võllide täpne fikseerimine, ajastusmärkide korrektne kokkulangevus, õige pinge ja kontroll pärast kokkupanekut. Paigaldusviga võib põhjustada mootori ebaühtlast tööd, faasivigu, klapikahjustusi või kordusremonti."
            }
        ],
        article: {
            title: "Oluline teada enne ajami vahetust",
            sections: [
                {
                    heading: "Kui hooldusajalugu on teadmata",
                    paragraphs: [
                        "Pärast kasutatud auto ostmist ei tasu tugineda üksnes eelmise omaniku suulisele kinnitusele. Kui hammasrihma või ajamiketi vahetuse kohta puuduvad dokumendid, tuleks ajamit eraldi kontrollida.",
                        "See on eriti oluline mootorite puhul, kus rihma purunemine või keti ülehüpe võib kahjustada klappe, kolbe ja silindripead."
                    ]
                },
                {
                    heading: "Miks vahetatakse komplekti, mitte ühte detaili",
                    paragraphs: [
                        "Hammasrihma või ajamiketi eluiga ei sõltu ainult rihmast või ketist. Ajami tööd mõjutavad rullikud, pinguti, juhikud, simmerlingid ja veepump, kui see on ajamiga seotud.",
                        "Kui kulunud seotud osa jääb vahetamata, võib uus komplekt kesta oodatust vähem või vajada korduvat lahtivõtmist."
                    ],
                    columns: [
                        {
                            title: "Kontrolli aegsasti",
                            items: [
                                "VIN-kood või sõiduki registreerimisnumber",
                                "Läbisõit ja hooldusajalugu",
                                "Ajami viimase vahetuse kuupäev",
                                "Käivitusmüra ja faasivead"
                            ]
                        },
                        {
                            title: "Ära lükka edasi",
                            items: [
                                "Metalliline heli või ragin käivitamisel",
                                "Õli- või jahutusvedeliku jäljed ajami piirkonnas",
                                "Teadmata viimase vahetuse kuupäev",
                                "Gaasijaotusfaasidega seotud Check Engine'i vead"
                            ]
                        }
                    ]
                },
                {
                    heading: "Miks on ajastusmärgid ja käsitsi kontrollimine olulised",
                    paragraphs: [
                        "Ajami vahetamisel ei piisa ainult uue rihma või keti paigaldamisest. Enne esimest käivitamist on oluline võllid õigesti fikseerida, ajastusmärgid paika seada, pinget kontrollida ja mootorit käsitsi pöörata.",
                        "See kontroll aitab veenduda, et gaasijaotusfaasid on õigesti seadistatud, ajam pöörleb liigse takistuseta ja osad on õigesti paigaldatud. See vähendab kokkupanekujärgsete vigade ja kordusremondi ohtu."
                    ]
                }
            ]
        },
        articleSchema: {
            headline: "Hammasrihma ja ajamiketi vahetus Tallinnas: millal kontrollida ja mida töö sisaldab",
            description: "Kuidas aru saada, et hammasrihm või ajamikett vajab kontrolli, miks on seotud detailid olulised ja kuidas vahetus Mr.Car-is käib."
        },
        crossLinks: [
            { href: "/services/mootoriremont", icon: "mdi:engine", label: "Seotud teenus", title: "Mootori remont" },
            { href: "/services/diagnostika", icon: "mdi:car-search", label: "Seotud teenus", title: "Auto diagnostika" },
            { href: "/services/ostueelne-kontroll", icon: "mdi:file-search-outline", label: "Seotud teenus", title: "Ostueelne kontroll" }
        ],
        form: {
            title: "Hammasrihma või keti vahetuse broneerimine",
            subtitle: "Jäta päring — täpsustame auto, mootori ja vajaliku komplekti"
        },
        jsonLdServiceDescription: "Hammasrihma ja ajamiketi diagnostika ning vahetus Tallinnas: komplekti valik, rullikud, pingutid, juhikud ja veepump vajaduse korral.",
        seo: {
            title: "Hammasrihma ja keti vahetus Tallinnas — Mr.Car",
            description: "Hammasrihma ja ajamiketi vahetus Tallinnas: diagnostika, rullikud, pingutid ja veepump vajaduse korral. Mr.Car, Kopli 82a."
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
        templateVariant: "service-deep-dive-v2",
        heroTitle: "Mootoriõli ja filtrite vahetus Tallinnas",
        heroLead: "Valime mootoriõli tootja nõuete järgi, vahetame õli- ja muud filtrid ning kontrollime taset ja lekkeid. Töö hind on sõltuvalt hoolduse mahust 45 € või 65 €.",
        heroImage: "/pics/oil-change-hero.webp",
        heroStats: [
            { value: "45 €", label: "Töö: mootoriõli + õlifilter · umbes 1 tund" },
            { value: "65 €", label: "Töö: mootoriõli + kõik filtrid · umbes 1,5 tundi" },
            { value: "Auto järgi", label: "Viskoossus, spetsifikatsioon, kogus ja filtrid" }
        ],
        localNav: [
            { href: "#symptoms", icon: "mdi:calendar-alert", label: "Millal vahetada" },
            { href: "#types", icon: "mdi:air-filter", label: "Filtrid" },
            { href: "#diagnostika", icon: "mdi:oil-temperature", label: "Õli valik" },
            { href: "#services", icon: "mdi:format-list-checks", label: "Teenuse valikud" },
            { href: "#process", icon: "mdi:timeline-check-outline", label: "Töö käik" },
            { href: "#pricing", icon: "mdi:cash-multiple", label: "Hinnad" },
            { href: "#faq", icon: "mdi:frequently-asked-questions", label: "Küsimused" }
        ],
        introTitle: "Õige õlivahetus algab sobiva õli valimisest",
        introText: [
            "Mootoriõli määrib koormatud detaile, juhib soojust ära, seob mustust ja aitab kaitsta mootorit korrosiooni eest. Aja jooksul lisandid ammenduvad, õli oksüdeerub ja selle kaitsevõime väheneb — eriti lühikeste sõitude, sagedaste külmkäivituste ja linnaliikluse korral.",
            "Kõigile autodele sobivat ühtset vahetusvälpa ei ole. Lähtume konkreetse mudeli hooldusjuhendist, viimasest vahetusest möödunud ajast, läbisõidust ja tegelikest kasutustingimustest. Raskete tingimuste korral võib olla mõistlik tootja maksimaalset välpa lühendada.",
            "Mr.Car-is ei valita õli ainult SAE viskoossuse järgi. Kontrollime autotootja nõutud heakskiitu, ACEA/API spetsifikatsiooni, mootori tüüpi ja koodi, turbo ning heitgaaside järeltöötluse olemasolu ja õiget täitekogust."
        ],
        brands: ["Audi", "BMW", "Ford", "Honda", "Hyundai", "Kia", "Mercedes-Benz", "Škoda", "Toyota", "Volkswagen", "Volvo"],
        urgencyBlock: {
            icon: "mdi:oil-level",
            title: "Kas punane õlirõhu tuli süttis? Seiska mootor",
            text: "See ei ole tavaline hooldusmeeldetuletus. Peatu ohutult, seiska mootor ja kontrolli õlitaset auto juhendi järgi. Kui tase on madal, tuli ei kustu või mootorist kostab ebatavalist heli, ära sõitu jätka: mootor vajab diagnostikat, mitte lihtsalt korralist õlivahetust."
        },
        detailedSymptomsTitle: "Millal on aeg õli vahetada või kontrolli tulla",
        detailedSymptoms: [
            {
                icon: "mdi:counter",
                title: "Tähtaeg või läbisõit on täis",
                desc: "Lähtuda tuleb tootja hooldusvälbast ja auto hooldusteatest, mitte ühest universaalsest kilomeetrinumbrist.",
                tone: "warning"
            },
            {
                icon: "mdi:calendar-clock",
                title: "Läbisõit on väike, kuid aeg täis",
                desc: "Õli vananeb ka seistes. Olulised on kalender, niiskus, kondensaat ja külmkäivituste arv."
            },
            {
                icon: "mdi:city-variant-outline",
                title: "Lühikesed linnasõidud",
                desc: "Ummikud, sagedased käivitused ja sõidud ilma täieliku soojenemiseta on rasked kasutustingimused ning kiirendavad õli saastumist."
            },
            {
                icon: "mdi:history",
                title: "Hooldusajalugu pole teada",
                desc: "Pärast kasutatud auto ostu tasub luua selge lähtepunkt: kontrollida taset ja lekkeid ning teha vajalik baashooldus."
            },
            {
                icon: "mdi:oil-level",
                title: "Õlitase langeb",
                desc: "Kontrollida tuleb lekkeid ja õlikulu. Juurdevalamine taastab taseme, kuid ei asenda põhjuse diagnostikat ega korralist hooldust."
            },
            {
                icon: "mdi:alert-outline",
                title: "Kõrbelõhn, lekked või müra",
                desc: "Need märgid vajavad ülevaatust. Ainuüksi õlivahetus ei kõrvalda leket, mehaanilist kulumist ega määrdesüsteemi riket."
            }
        ],
        riskStagesTitle: "Mis juhtub, kui hooldust liiga kaua edasi lükata",
        riskStages: [
            {
                marker: "1",
                title: "Õli vananeb",
                text: "Oksüdatsioon, kütus, niiskus ja põlemisjäägid muudavad õli omadusi ning lisandid kuluvad järk-järgult."
            },
            {
                marker: "2",
                title: "Filter kogub mustust",
                text: "Õlifilter püüab osakesi, kuid selle maht ja kasutusiga pole lõputud. Seepärast vahetatakse filter koos õliga."
            },
            {
                marker: "3",
                title: "Mootori kaitse väheneb",
                text: "Määrimine ja soojuse ärajuhtimine halvenevad ning setete ja koormatud detailide kiirenenud kulumise oht kasvab."
            },
            {
                marker: "4",
                title: "Tagajärjed muutuvad kallimaks",
                text: "Turbo, ketiajam, laagrid ja teised täpsed sõlmed on õli kvaliteedi ja õlirõhu suhtes tundlikud."
            }
        ],
        engineTypesTitle: "Millised filtrid kuuluvad plaanilise hoolduse juurde",
        engineTypes: [
            {
                icon: "mdi:filter-cog-outline",
                title: "Õlifilter",
                desc: "Püüab määrdesüsteemis olevaid osakesi. Vahetatakse iga mootoriõli vahetusega; vajaduse korral paigaldame ka uue tihendi või tühjenduskorgi seibi.",
                brands: ["Alati koos õliga"]
            },
            {
                icon: "mdi:air-filter",
                title: "Mootori õhufilter",
                desc: "Kaitseb mootorit tolmu ja abrasiivsete osakeste eest. Vahetus sõltub hooldusvälbast ja kasutustingimustest; seisukorda hinnatakse eraldi.",
                brands: ["Välba ja seisukorra järgi"]
            },
            {
                icon: "mdi:car-seat-heater",
                title: "Salongifilter",
                desc: "Puhastab salongi sisenevat õhku. Ummistunud filter võib vähendada õhuvoolu, koormata ventilaatorit ja soodustada klaaside uduseks muutumist.",
                brands: ["Tava- või aktiivsöefilter"]
            },
            {
                icon: "mdi:gas-station-outline",
                title: "Kütusefilter",
                desc: "Kaitseb kütusesüsteemi. Välp ja tööviis sõltuvad tugevalt mootorist; mõnel autol on filter moodulisse integreeritud ega kuulu tavapärasesse hoolduskomplekti.",
                brands: ["Eriti tähtis diislil"]
            },
            {
                icon: "mdi:blur",
                title: "DPF ei ole hooldusfilter",
                desc: "Tahmafilter kuulub väljalaskesüsteemi. Seda ei vahetata tavalise õlihoolduse käigus; diisel vajab DPF-iga sobiva heakskiiduga mootoriõli.",
                brands: ["Vajadusel eraldi diagnostika"]
            },
            {
                icon: "mdi:car-shift-pattern",
                title: "Käigukasti filter",
                desc: "Automaat- või variaatorkäigukasti filter ei kuulu mootoriõli vahetusse. Käigukastiõli, filter, õlivann ja töömeetod valitakse käigukasti tüübi järgi eraldi.",
                brands: ["Eraldi käigukastihooldus"]
            }
        ],
        diagnosticsTitle: "Kuidas valime õli ja kulumaterjalid",
        diagnosticsText: [
            "Sama viskoossus kanistril ei tähenda veel, et õli sobib konkreetsele mootorile. Valiku aluseks on autotootja nõue just sellele autole ja mootorile.",
            "Täpse komplekti ja hinnapakkumise jaoks saada registreerimisnumber või VIN, mudel, aasta, mootor ning võimaluse korral praegune õli ja läbisõit pärast viimast vahetust."
        ],
        diagnosticsChecklist: [
            "Autotootja heakskiit ja ACEA/API spetsifikatsioon",
            "Konkreetse mootori SAE viskoossusklass",
            "Mootori tüüp, kood ja täitekogus",
            "Turbo, DPF/GPF ja tuhasisalduse nõuded",
            "Õige õlifilter, tihend ja tühjenduskorgi seib",
            "Õhu-, salongi- ja kütusefiltri hooldusvälp ning saadavus",
            "Kliendi toodud materjalide sobivuse kontroll enne tööd"
        ],
        serviceCardsTitle: "Hoolduse valikud",
        serviceCards: [
            {
                icon: "mdi:oil",
                title: "Mootoriõli ja õlifilter",
                desc: "Vana õli eemaldamine, õlifiltri ja ettenähtud tihendi vahetus, täitmine, käivitus ning taseme ja lekete kontroll.",
                price: "Töö 45 €",
                time: "umbes 1 tund"
            },
            {
                icon: "mdi:filter-multiple-outline",
                title: "Mootoriõli ja kõik filtrid",
                desc: "Baashooldus koos autole ettenähtud ja eelnevalt kokku lepitud õhu-, salongi- ning kütusefiltrite vahetusega.",
                price: "Töö 65 €",
                time: "umbes 1,5 tundi"
            },
            {
                icon: "mdi:car-search-outline",
                title: "Hooldus pärast auto ostu",
                desc: "Kontrollime ajalugu ja seisukorda ning koostame mõistliku lähtehoolduse nimekirja ilma korras detaile automaatselt vahetamata.",
                price: "Kokkulepitud mahu järgi",
                time: "pärast auto andmete kontrolli"
            },
            {
                icon: "mdi:package-variant-closed-check",
                title: "Kliendi materjalidega",
                desc: "Võid tuua oma õli ja filtrid. Kontrollime enne tööd heakskiitu, kogust ja sobivust; töö hinnale lisandub 5 € iga töötunni kohta.",
                price: "+5 €/tund tööle",
                time: "materjalid kontrollime ette"
            }
        ],
        processTitle: "Kuidas õli- ja filtrivahetus toimub",
        processSteps: [
            {
                num: "01",
                title: "Täpsustame auto ja hooldusajaloo",
                text: "Kontrollime mootoriversiooni, läbisõitu, eelmise vahetuse aega, kasutustingimusi ja hooldusteateid."
            },
            {
                num: "02",
                title: "Valime sobiva komplekti",
                text: "Määrame just sellele versioonile sobiva heakskiidu, viskoossuse, õlikoguse, filtrid ja vajalikud tihendid."
            },
            {
                num: "03",
                title: "Lepime hinna kokku",
                text: "Näitame enne töö algust eraldi töö ja materjalide maksumust, selgitame paketi sisu ning kooskõlastame lisatööd."
            },
            {
                num: "04",
                title: "Eemaldame õli ja vahetame filtrid",
                text: "Eemaldame vana õli konstruktsioonile sobival viisil ning paigaldame uue filtri ja ettenähtud tihendi."
            },
            {
                num: "05",
                title: "Täidame ja kontrollime",
                text: "Lisame arvutatud koguse, käivitame mootori, kontrollime õlirõhu näitu, lekkeid ja korrigeerime taset tootja juhendi järgi."
            },
            {
                num: "06",
                title: "Salvestame hoolduse",
                text: "Vajadusel nullime hooldusnäidu, anname järgmise hoolduse orientiiri ning suuname vana õli ja filtrid nõuetekohasesse käitlusse."
            }
        ],
        pricingTitle: "Töö hinnad",
        pricingRows: [
            { service: "Mootoriõli ja õlifiltri vahetus", price: "45 €" },
            { service: "Mootoriõli ja kõigi filtrite vahetus", price: "65 €" },
            { service: "Töö kliendi varuosade ja materjalidega", price: "+5 €/tund" }
        ],
        pricingNote: "45 € tähendab ligikaudu 1 tunni tööd ning 65 € ligikaudu 1,5 tunni tööd. Õli, filtrid, tihendid ja muud materjalid lisanduvad eraldi. Materjalidega lõpphind sõltub heakskiidust, mootori õlikogusest ja filtrikomplektist. Hinnad sisaldavad käibemaksu 24%; lisatööd teeme ainult pärast kooskõlastust.",
        trustItems: [
            {
                icon: "mdi:book-check-outline",
                title: "Auto nõuete järgi",
                desc: "Valime õli heakskiidu ja konkreetse mootoriversiooni, mitte ainult viskoossuse järgi."
            },
            {
                icon: "mdi:receipt-text-check-outline",
                title: "Selge hinnapakkumine",
                desc: "Enne tööd näitame eraldi töö, materjalid ja kokkulepitud hoolduse sisu."
            },
            {
                icon: "mdi:car-clock",
                title: "Hooldusmärge",
                desc: "Vajadusel nullime hooldusnäidu ja anname järgmise hoolduse orientiiri."
            },
            {
                icon: "mdi:check-decagram-outline",
                title: "Kontroll pärast käivitust",
                desc: "Kontrollime õlitaset ning filtri, korgi ja nähtavate ühenduste lekkekindlust."
            },
            {
                icon: "mdi:package-variant-closed-check",
                title: "Sinu materjalide kontroll",
                desc: "Enne paigaldust kontrollime õli, filtrite ja tihendite heakskiitu, kogust ja sobivust."
            },
            {
                icon: "mdi:recycle-variant",
                title: "Nõuetekohane käitlus",
                desc: "Vana õli ja saastunud filtrid ei lähe olmejäätmete hulka."
            }
        ],
        faqTitle: "Korduma kippuvad küsimused õli- ja filtrivahetuse kohta",
        faqItems: [
            {
                q: "Kui sageli tuleb mootoriõli vahetada?",
                a: "Järgi konkreetse mudeli tootja läbisõidu- ja ajavälpa, sõltuvalt sellest, kumb saabub varem. Lühikeste sõitude, külmkäivituste, ummikute, suure koormuse või rohke tühikäigu korral võib olla mõistlik välpa lühendada."
            },
            {
                q: "Kas väikese aastase läbisõidu korral tuleb õli ikkagi vahetada?",
                a: "Jah, kui tootja kalendripõhine tähtaeg on täis. Harvadel lühikestel sõitudel ei pruugi mootor täielikult soojeneda ning õlisse võib koguneda niiskust ja kütust."
            },
            {
                q: "Kas õlifilter tuleb alati koos õliga vahetada?",
                a: "Jah. Vanas filtris on juba mustus ja kasutatud õli ning selle ressurss on arvestatud kindla hooldusvälba jaoks. Uus filter aitab värskel õlil töötada puhtamas süsteemis."
            },
            {
                q: "Mida sisaldab 45 € töö?",
                a: "Mootoriõli ja õlifiltri vahetust, ettenähtud tihendi paigaldust, täitmist, käivitust ning taseme ja lekete kontrolli. Orienteeruv aeg on 1 tund. Õli, filter ja muud materjalid lisanduvad eraldi."
            },
            {
                q: "Mida sisaldab 65 € töö?",
                a: "Mootoriõli ja autole ettenähtud, eelnevalt kokku lepitud filtrikomplekti vahetust. Orienteeruv aeg on 1,5 tundi. Filtrite loend ja materjalide hind sõltuvad mudelist ning hooldusjuhendist."
            },
            {
                q: "Kas õli ja filtrid sisalduvad hinnas?",
                a: "Ei. 45 € ja 65 € on töö hinnad. Õli, filtrid, tühjenduskorgi seib ja muud tihendid arvutatakse pärast auto järgi valimist eraldi. Kõik hinnad sisaldavad käibemaksu 24%."
            },
            {
                q: "Kas võin tuua oma õli ja filtrid?",
                a: "Jah. Kontrollime enne heakskiitu, kogust ja varuosakoode. Kehtiva hinnakirja järgi lisandub kliendi materjalide kasutamisel töö hinnale 5 € iga töötunni kohta."
            },
            {
                q: "Kuidas teada, milline õli minu autole sobib?",
                a: "Kõige olulisem on autotootja heakskiit konkreetsele mootorile. Seejärel arvestatakse SAE, ACEA/API, kliimat, DPF/GPF-i ja muid omadusi. Täpseks valikuks saada registreerimisnumber või VIN."
            },
            {
                q: "Kas tume õli tähendab, et see tuleb kohe vahetada?",
                a: "Mitte tingimata. Õli võib eriti diiselmootoris kiiresti tumeneda, sest seob põlemisjääke. Otsus tehakse aja, läbisõidu, taseme, seisukorra ja tootja nõuete, mitte ainult mõõtepulgal nähtava värvi järgi."
            },
            {
                q: "Kas punase õlitulega võib edasi sõita?",
                a: "Edasisõit võib olla ohtlik, sest tuli viitab tavaliselt õlirõhu probleemile. Peatu ohutult ja seiska mootor. Kui tuli pärast taseme kontrolli ei kustu, vajad puksiiri või töökoja juhiseid."
            },
            {
                q: "Kas turbo- või diiselmootoril on erinõuded?",
                a: "Jah. Turbo sõltub stabiilsest sobiva õli juurdevoolust ning DPF-iga diisel nõuab sageli kindla tuhasisalduse ja heakskiiduga õli. Vale toode võib lühendada nii mootori kui heitgaasisüsteemi eluiga."
            },
            {
                q: "Kas mootorit tuleb iga õlivahetuse ajal pesta?",
                a: "Ei. Mootori loputus ei ole iga vahetuse kohustuslik osa. Otsus sõltub ajaloost, mootori seisukorrast, saastumisest ja valitud meetodist; tugev loputus ilma vajaduseta võib olla ebasoovitav."
            },
            {
                q: "Mida teha, kui hooldusajalugu ei ole teada?",
                a: "Alusta õlitaseme, lekete ja auto seisukorra kontrollist ning vali õli ja filtrid tehase nõuete järgi. Edasist välpa on kindlam arvestada dokumenteeritud vahetusest, mitte proovida vana graafikut ära arvata."
            },
            {
                q: "Kui kaua hooldus kestab?",
                a: "Hinnakirja orientiir on umbes 1 tund õli ja õlifiltri ning umbes 1,5 tundi õli ja kõigi filtrite vahetuseks. Tegelik aeg sõltub konstruktsioonist, põhjakaitsest, ligipääsust ja kokkulepitud lisatöödest."
            }
        ],
        article: {
            title: "Kuidas õli ja filtrid autot kaitsevad",
            sections: [
                {
                    heading: "Miks mootoriõli vananeb",
                    paragraphs: [
                        "Töötavas mootoris läbib õli korduvalt kuumi ja koormatud piirkondi. See puutub kokku põlemisjääkide, niiskuse ja mikroosakestega ning ei pruugi lühikestel sõitudel täielikult soojeneda. Seetõttu sõltub õli eluiga lisaks kilomeetritele ka ajast ja kasutusviisist.",
                        "Värske õli ei paranda mehaanilist leket, madalat õlirõhku ega liigset õlikulu. Kui tase kiiresti langeb või tekivad suits, kõrbelõhn või metalliline heli, tuleb kõigepealt põhjus diagnoosida."
                    ]
                },
                {
                    heading: "Millised on rasked kasutustingimused",
                    columns: [
                        {
                            title: "Linnaliiklus",
                            items: [
                                "Lühikesed sõidud ilma täieliku soojenemiseta",
                                "Ummikud ja rohke tühikäik",
                                "Sagedased külmkäivitused"
                            ]
                        },
                        {
                            title: "Suur koormus",
                            items: [
                                "Haagise vedu ja raske koorem",
                                "Tolmused teed ja kõrge temperatuur",
                                "Intensiivne või sportlik sõit"
                            ]
                        },
                        {
                            title: "Aastaaeg ja seismine",
                            items: [
                                "Pakane ja suured temperatuurimuutused",
                                "Harvad sõidud ja pikad seisuperioodid",
                                "Palju töötunde väikese läbisõidu juures"
                            ]
                        }
                    ]
                },
                {
                    heading: "Miks on oluline tootja heakskiit",
                    paragraphs: [
                        "SAE kirjeldab viskoossusklassi, kuid ei asenda autotootja nõudeid. Kahel 5W-30 õlil võivad olla erinevad lisandid, tuhasisaldus ja sobivus mootoriga. Seetõttu kontrollitakse esmalt heakskiitu ning alles siis valitakse lubatud spetsifikatsiooni seest sobiv toode.",
                        "Õlisid ei ole mõistlik põhjuseta segada. Hädaolukorras on ohutu taseme taastamine sobiva tootega esmatähtis, kuid plaanilise hoolduse ajal tasub kasutada kokkulepitud õli ja märkida see hooldusajalukku."
                    ]
                },
                {
                    heading: "Mida vahetatakse koos õliga",
                    paragraphs: [
                        "Õlifilter vahetatakse alati. Õhu-, salongi- ja kütusefiltril on oma välp ning see sõltub auto konstruktsioonist. Kontrollime hooldusjuhendit ja lepime komplekti ette kokku, et pakett „kõik filtrid” tähendaks kindlat nimekirja.",
                        "Tahmafilter DPF ei kuulu tavapäraste vahetatavate hooldusfiltrite hulka. Selle puhul on tähtsad korras regenereerimissüsteem, rikete diagnostika ja tootja nõutud low-SAPS õli."
                    ]
                }
            ]
        },
        articleSchema: {
            headline: "Õli- ja filtrivahetus Tallinnas: välp, õli valik ja hoolduse käik",
            description: "Kuidas määrata mootoriõli vahetusvälpa, valida õige heakskiit, milliseid filtreid vahetada ja mida Mr.Car-i hooldus sisaldab."
        },
        crossLinks: [
            {
                href: "/services/hooldus-diagnostika",
                icon: "mdi:car-cog",
                label: "Plaaniline hooldus",
                title: "Tehnohooldus ja diagnostika"
            },
            {
                href: "/services/mootoriremont",
                icon: "mdi:engine-outline",
                label: "Kui mootor kulutab õli või teeb müra",
                title: "Mootori diagnostika ja remont"
            },
            {
                href: "/services/diagnostika",
                icon: "mdi:car-connected",
                label: "Kui hoiatustuli põleb",
                title: "Auto arvutidiagnostika"
            }
        ],
        ctaSection: {
            title: "Valime õli ja filtrid enne sinu saabumist",
            text: "Saada registreerimisnumber või VIN, mudel ja mootor — kontrollime nõudeid, arvutame töö ning materjalide hinna ja pakume aega.",
            phoneText: "Helista: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Broneeri õli- ja filtrivahetus",
            subtitle: "Lisa auto number ja läbisõit — nii saame materjalid täpsemalt valida"
        },
        jsonLdServiceDescription: "Mootoriõli, õli-, õhu-, salongi- ja kütusefiltrite vahetus Tallinnas autotootja nõuete järgi.",
        seo: {
            title: "Õli ja filtrite vahetus Tallinnas — Mr.Car",
            description: "Õli- ja filtrivahetus Tallinnas tootja nõuete järgi. Töö: õli + õlifilter 45 €, õli + kõik filtrid 65 €. Hinnad sisaldavad KM 24%."
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
