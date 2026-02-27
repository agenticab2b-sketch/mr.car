/**
 * Mr.Car — Services Data (EN)
 * Unified data source for all 12 services.
 * Right sidebar navigation is built from the same array.
 */
const SERVICES = [
    // ═══════════════════════════════════
    // ORDER MATCHES MEGAMENU ON HOMEPAGE
    // ═══════════════════════════════════

    {
        key: "general_repair",
        slug: "general-car-repair",
        allSlugs: { ru: "autoremont", ee: "autoremont", en: "general-car-repair" },
        category: "Maintenance",
        navTitle: "Car Repair",
        icon: "mdi:wrench",
        heroTitle: "General Car Repair",
        heroLead: "Comprehensive repair for all car makes. From minor issues to major overhauls.",
        heroImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1400&q=80",
        introTitle: "Car Repair at Mr.Car",
        introText: [
            "Mr.Car is a full-service auto repair shop where any car problem can be solved. From bulb replacements to engine overhauls — all under one roof.",
            "Our team works with all makes: European, Japanese, Korean cars. Each mechanic specializes in their field, ensuring top-quality work."
        ],
        symptomsTitle: "What we can help with:",
        symptoms: [
            { icon: "mdi:engine-outline", text: "Engine problems" },
            { icon: "mdi:car-brake-alert", text: "Suspension noises" },
            { icon: "mdi:lightning-bolt", text: "Electrical errors" },
            { icon: "mdi:car-shift-pattern", text: "Gearbox issues" },
            { icon: "mdi:oil-level", text: "Fluid leaks" },
            { icon: "mdi:car-cog", text: "Scheduled maintenance" },
            { icon: "mdi:car-side", text: "Pre-MOT preparation" },
            { icon: "mdi:file-search-outline", text: "Pre-purchase inspection" }
        ],
        afterSymptomsText: "Not sure what's broken? Just come by — we'll diagnose it and offer a solution.",
        servicesListTitle: "Our Fields:",
        servicesList: [
            "Engine & Gearbox repair",
            "Suspension & Braking systems",
            "Auto electrical & Diagnostics",
            "Oil change & Maintenance",
            "Tire services & Balancing",
            "AC & Climate control",
            "Welding works",
            "Pre-sale preparation"
        ],
        afterListText: "We always provide a quote before starting. 12-month warranty. Original parts and high-quality alternatives.",
        promoBanner: { enabled: false },
        ctaSection: {
            title: "Need car repair?",
            text: "Book online or just come by during working hours. Free inspection.",
            phoneText: "Call: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Book Repair",
            subtitle: "Leave a request — we'll call back within 30 minutes"
        },
        seo: {
            title: "Car Repair in Tallinn — Mr.Car | All service types",
            description: "Mr.Car auto service in Tallinn. Engine, gearbox, suspension, electrical repair. All makes. 12-month warranty. Kopli 82a. +372 5646 1210"
        }
    },

    {
        key: "exhaust_welding",
        slug: "exhaust-welding",
        allSlugs: { ru: "glushiteli-svarka", ee: "summutid-keevitus", en: "exhaust-welding" },
        category: "Engine & Drivetrain",
        navTitle: "Exhaust & Welding",
        icon: "mdi:fire",
        heroTitle: "Exhaust & Welding Works",
        heroLead: "Exhaust system repair and replacement. Argon and semi-automatic welding of any complexity.",
        heroImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1400&q=80",
        introTitle: "Exhaust Repair & Welding",
        introText: [
            "Exhaust system repair is usually needed due to wear or corrosion. A burnt-out muffler isn't just an unpleasant sound — exhaust gases can enter the cabin.",
            "As a separate field, we handle welding: crack repair, bracket repair, chassis welding. Argon welding for aluminum and stainless steel."
        ],
        symptomsTitle: "When do you need exhaust repair?",
        symptoms: [
            { icon: "mdi:volume-high", text: "Loud exhaust noise" },
            { icon: "mdi:smoke-detector-variant", text: "Exhaust smell in cabin" },
            { icon: "mdi:vibrate", text: "Engine vibration" },
            { icon: "mdi:water-alert", text: "Condensate leaks from joints" },
            { icon: "mdi:car-brake-low-pressure", text: "Loss of power" },
            { icon: "mdi:flash-alert", text: "Catalytic converter error (P0420)" }
        ],
        afterSymptomsText: "Don't ignore exhaust problems — they directly affect engine performance and your safety.",
        servicesListTitle: "Our Services:",
        servicesList: [
            "Muffler / resonator replacement",
            "Catalytic converter repair & replacement",
            "Flex pipe replacement",
            "Muffler crack welding",
            "Argon welding (aluminum, stainless steel)",
            "Bracket welding",
            "Chassis welding works"
        ],
        afterListText: "Works are done on the day of arrival. We use high-quality materials and provide a warranty on welds.",
        promoBanner: { enabled: false },
        ctaSection: {
            title: "Need welding or exhaust repair?",
            text: "Come by or leave a request — we'll inspect and provide a quote within 15 minutes.",
            phoneText: "Call: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Book Welding",
            subtitle: "Leave a request — we'll call back within 30 minutes"
        },
        seo: {
            title: "Exhaust repair, welding works — Mr.Car Tallinn",
            description: "Exhaust and catalytic converter repair. Argon welding. Kopli 82a, Tallinn. +372 5646 1210"
        }
    },

    {
        key: "chassis_brakes",
        slug: "chassis-brakes",
        allSlugs: { ru: "hodovaya-tormoza", ee: "veermik-pidurid", en: "chassis-brakes" },
        category: "Suspension & Brakes",
        navTitle: "Suspension & Brakes",
        icon: "mdi:car-brake-alert",
        heroTitle: "Suspension & Brake Repair",
        heroLead: "Suspension, steering, braking systems — diagnostics and repair with a warranty.",
        heroImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1400&q=80",
        introTitle: "Suspension Repair at Mr.Car",
        introText: [
            "Suspension is your safety on the road. Thumping, steering pull, vibrations — these are all signs of wear that cannot be ignored.",
            "We perform full suspension diagnostics on a lift, identify worn parts, and create a repair plan with exact costs. No surprises."
        ],
        symptomsTitle: "Signs of suspension problems",
        symptoms: [
            { icon: "mdi:car-traction-control", text: "Car pulls to the side" },
            { icon: "mdi:volume-high", text: "Knocks and squeaks while driving" },
            { icon: "mdi:vibrate", text: "Vibration in the steering wheel" },
            { icon: "mdi:tire", text: "Uneven tire wear" },
            { icon: "mdi:car-brake-low-pressure", text: "Increased braking distance" },
            { icon: "mdi:disc", text: "Grinding noise when braking" },
            { icon: "mdi:steering", text: "Steering wheel play" },
            { icon: "mdi:car-side", text: "Body roll in turns" }
        ],
        afterSymptomsText: "Worn suspension and brakes are a direct safety risk. Come for a free inspection.",
        servicesListTitle: "Our services:",
        servicesList: [
            "Suspension diagnostics on a lift",
            "Shock absorber & spring replacement",
            "Bushing & ball joint replacement",
            "Tie rod & end replacement",
            "Brake pad & disc replacement",
            "Brake hose & caliper replacement",
            "Brake system bleeding",
            "Wheel alignment"
        ],
        afterListText: "We use parts from trusted brands: Lemförder, TRW, Monroe, Brembo. 12-month warranty on all works.",
        promoBanner: {
            enabled: true,
            text: "Free suspension diagnostics when booking via website"
        },
        ctaSection: {
            title: "Suspension knocks? Grinding when braking?",
            text: "Don't risk safety. We'll inspect the chassis for free and provide an exact quote.",
            phoneText: "Call: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Book Suspension Work",
            subtitle: "Leave a request — we'll call back within 30 minutes"
        },
        seo: {
            title: "Suspension & Brake Repair — Mr.Car Tallinn",
            description: "Suspension and brake system repair in Tallinn. Shock absorbers, brakes, alignment. Free diagnostics. Kopli 82a. +372 5646 1210"
        }
    },

    {
        key: "tire_service",
        slug: "tire-service",
        allSlugs: { ru: "shinomontazh", ee: "rehvitood", en: "tire-service" },
        category: "Suspension & Brakes",
        navTitle: "Tire Services",
        icon: "mdi:tire",
        heroTitle: "Tire Services",
        heroLead: "Seasonal tire change, balancing, puncture repair. Fast and correct — no queues.",
        heroImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1400&q=80",
        introTitle: "Tire Services at Mr.Car",
        introText: [
            "Tire work seems simple but requires precision. Incorrect balancing leads to vibrations, bearing wear, and uncomfortable driving.",
            "At Mr.Car, we use modern mounting equipment and balancing stands. We work with tires from R13 to R22, including low profile and RunFlat."
        ],
        symptomsTitle: "When do you need tire services?",
        symptoms: [
            { icon: "mdi:calendar-clock", text: "Seasonal change (summer/winter)" },
            { icon: "mdi:vibrate", text: "Vibration at speed" },
            { icon: "mdi:tire", text: "Puncture / tire cut" },
            { icon: "mdi:car-traction-control", text: "Car pulls to the side" },
            { icon: "mdi:ruler", text: "Uneven wear" },
            { icon: "mdi:thermometer-low", text: "Switching to winter tires" }
        ],
        afterSymptomsText: "Proper tire service is your safety on the road and fuel savings. Don't delay seasonal change.",
        servicesListTitle: "Our tire services:",
        servicesList: [
            "Seasonal tire change (summer / winter)",
            "Wheel balancing",
            "Puncture repair (plug / patch)",
            "New tire installation",
            "Valve replacement",
            "Tire pressure check"
        ],
        afterListText: "We work by appointment, no queues. Price from €20 per set. Seasonal tire storage available upon request.",
        promoBanner: { enabled: false },
        ctaSection: {
            title: "Ready for the season?",
            text: "Book a convenient time — set change takes 30-40 minutes.",
            phoneText: "Call: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Book Tire Service",
            subtitle: "Leave a request — we'll call back within 30 minutes"
        },
        seo: {
            title: "Tire Services in Tallinn — Mr.Car | from €20",
            description: "Tire services in Tallinn: seasonal change, balancing, puncture repair. R13-R22. From €20. Kopli 82a. +372 5646 1210"
        }
    },

    {
        key: "maintenance_diag",
        slug: "maintenance-diagnostics",
        allSlugs: { ru: "tehobsluzhivanie-diagnostika", ee: "hooldus-diagnostika", en: "maintenance-diagnostics" },
        category: "Maintenance",
        navTitle: "Maintenance & Diagnostics",
        icon: "mdi:car-cog",
        heroTitle: "Technical Maintenance",
        heroLead: "Regular maintenance according to manufacturer standards without losing dealer warranty.",
        heroImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1400&q=80",
        introTitle: "Technical Maintenance at Mr.Car",
        introText: [
            "Regular maintenance is the best investment in your car's long life. We perform all scheduled works according to manufacturer standards, preserving your dealer warranty.",
            "Every service includes a multi-point check of all vehicle systems. You receive a full report on the car's condition and recommendations for the future."
        ],
        symptomsTitle: "When to do maintenance?",
        symptoms: [
            { icon: "mdi:counter", text: "Mileage interval (every 10-15k km)" },
            { icon: "mdi:calendar-check", text: "Year since last service" },
            { icon: "mdi:engine-outline", text: "Service indicator is on" },
            { icon: "mdi:road-variant", text: "Before a long trip" },
            { icon: "mdi:car-key", text: "After buying a used car" },
            { icon: "mdi:snowflake", text: "Before the winter season" }
        ],
        afterSymptomsText: "Missed maintenance means hidden wear and expensive repairs in the future. Better spend an hour now than a week later.",
        servicesListTitle: "What's included in the service:",
        servicesList: [
            "Engine oil and oil filter replacement",
            "Air and cabin filter replacement",
            "Fluid check and top-up",
            "Brake system inspection",
            "Suspension check on a lift",
            "Battery check",
            "Computer error diagnostics",
            "Service interval reset"
        ],
        afterListText: "Maintenance cost depends on the car model and work volume. Call us — we'll provide an exact price before your visit.",
        promoBanner: {
            enabled: true,
            text: "10% discount on maintenance for first visit. Book online!"
        },
        ctaSection: {
            title: "Time for maintenance?",
            text: "Don't delay. Book now — we'll handle everything in 1-2 hours.",
            phoneText: "Call: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Book Maintenance",
            subtitle: "Leave a request — we'll call back within 30 minutes"
        },
        seo: {
            title: "Technical Maintenance — Mr.Car Tallinn | Auto Service",
            description: "Maintenance in Tallinn. Oil change, filters, all systems check. Preserve dealer warranty. Kopli 82a. +372 5646 1210"
        }
    },

    {
        key: "transmission",
        slug: "transmission-repair",
        allSlugs: { ru: "remont-kpp", ee: "kaigukastiremont", en: "transmission-repair" },
        category: "Engine & Drivetrain",
        navTitle: "Gearbox Repair",
        icon: "mdi:car-shift-pattern",
        heroTitle: "Transmission Repair",
        heroLead: "Automatic, manual, DSG, CVTs — we diagnose and fix all gearbox types.",
        heroImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1400&q=80",
        introTitle: "Gearbox Repair at Mr.Car",
        introText: [
            "The gearbox is one of the most complex vehicle components. Thumping when shifting, slippage, or noise from the gearbox — all require immediate specialist attention.",
            "Mr.Car specializes in repairing all gearboxes: manual, automatic, robots (DSG), and CVTs. We use original parts and specialized equipment."
        ],
        symptomsTitle: "Gearbox failure signs",
        symptoms: [
            { icon: "mdi:swap-vertical", text: "Thumps when shifting" },
            { icon: "mdi:volume-high", text: "Hum or grinding from the box" },
            { icon: "mdi:rotate-right", text: "Gear slippage" },
            { icon: "mdi:oil-level", text: "Oil leaks from gearbox" },
            { icon: "mdi:alert-circle", text: "Emergency mode on dashboard" },
            { icon: "mdi:timer-sand", text: "Delay in gear engagement" }
        ],
        afterSymptomsText: "Delaying gearbox repair leads to critical damage and full unit replacement. Diagnostics is the first step to a solution.",
        servicesListTitle: "Our gearbox repair services:",
        servicesList: [
            "Automatic / Manual / DSG diagnostics",
            "Gearbox oil and filter change",
            "Clutch and flywheel replacement",
            "DSG mechatronics repair",
            "Automatic valve body overhaul",
            "Bearing and synchronizer replacement"
        ],
        afterListText: "After repair, we perform a test drive and gearbox adaptation. 12-month warranty on all works.",
        promoBanner: { enabled: false },
        ctaSection: {
            title: "Gearbox problems?",
            text: "Thumps, slippage, or oil leaks — come for a free gearbox diagnostics.",
            phoneText: "Call: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Book Gearbox Repair",
            subtitle: "Leave a request — we'll call back within 30 minutes"
        },
        seo: {
            title: "Gearbox Repair in Tallinn — Automatic, DSG | Mr.Car",
            description: "Gearbox repair in Tallinn: automatic, manual, DSG, CVTs. Overhaul and diagnostics. 12-month warranty. Kopli 82a. +372 5646 1210"
        }
    },

    {
        key: "electrical",
        slug: "electrical-repair",
        allSlugs: { ru: "elektrika", ee: "elektritood", en: "electrical-repair" },
        category: "Diagnostics & Electrical",
        navTitle: "Electrical Works",
        icon: "mdi:lightning-bolt",
        heroTitle: "Auto Electrical Repair",
        heroLead: "Current leaks, short circuits, electronic errors — we find and fix without guesswork.",
        heroImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1400&q=80",
        introTitle: "Auto Electrical Repair at Mr.Car",
        introText: [
            "Electrical failures are among the trickiest. Current leaks, short circuits, or intermittent errors can disable vehicle systems. We find the root cause, not just change parts blindly.",
            "We have oscilloscopes, Fluke multimeters, and factory wiring diagrams — decoding CAN/LIN buses and finding breaks using manufacturer documentation."
        ],
        symptomsTitle: "When to see an auto electrician?",
        symptoms: [
            { icon: "mdi:battery-alert", text: "Battery drains quickly" },
            { icon: "mdi:flash-off", text: "Lights / turn signals not working" },
            { icon: "mdi:car-key", text: "Engine starting problems" },
            { icon: "mdi:shield-lock-outline", text: "Alarm / immobilizer glitches" },
            { icon: "mdi:window-open", text: "Power windows not working" },
            { icon: "mdi:fan-alert", text: "Fans not turning on" }
        ],
        afterSymptomsText: "Electrical is no place for experiments. Improper intervention can lead to fire. Trust the professionals.",
        servicesListTitle: "Our electrical services:",
        servicesList: [
            "Current leak search",
            "Wiring and harness repair",
            "Starter / alternator diagnostics and repair",
            "Alarm installation and repair",
            "Control unit (ECU / BCM) repair",
            "CAN / LIN bus decoding",
            "Lighting system diagnostics"
        ],
        afterListText: "We work with factory diagrams and documentation. After repair, we test all electronic systems.",
        promoBanner: { enabled: false },
        ctaSection: {
            title: "Electrical problems? We fix them fast",
            text: "Don't risk safety. Book an appointment — we'll find and fix any failure.",
            phoneText: "Call: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Book Electrical Repair",
            subtitle: "Leave a request — we'll call back within 30 minutes"
        },
        seo: {
            title: "Auto Electrician in Tallinn — Mr.Car | Electrical Repair",
            description: "Professional auto electrical repair in Tallinn. Leak detection, wiring repair, CAN/LIN diagnostics. Kopli 82a. +372 5646 1210"
        }
    },

    {
        key: "engine",
        slug: "engine-repair",
        allSlugs: { ru: "remont-dvigatelya", ee: "mootoriremont", en: "engine-repair" },
        category: "Engine & Drivetrain",
        navTitle: "Engine Repair",
        icon: "mdi:engine",
        heroTitle: "Engine Repair & Overhaul",
        heroLead: "Major engine overhaul from micro-cracks to full rebuild. Precision machining up to 0.01 mm.",
        heroImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1400&q=80",
        introTitle: "Engine Repair Services at Mr.Car",
        introText: [
            "The engine is the heart of your car. Oil consumption, knocking sounds, or loss of compression are signals that the motor needs professional help. We don't diagnose 'by ear' — we use endoscopy and compression testing.",
            "Mr.Car performs a full cycle of engine repairs: from gasket and timing belt replacements to piston group overhauls. We use original parts and high-quality alternatives with a guarantee."
        ],
        symptomsTitle: "How to tell if your engine needs repair?",
        symptoms: [
            { icon: "mdi:oil", text: "High oil consumption" },
            { icon: "mdi:volume-high", text: "Knocking and strange noises" },
            { icon: "mdi:speedometer-slow", text: "Loss of power" },
            { icon: "mdi:smoke-detector-variant", text: "Smoke from the exhaust" },
            { icon: "mdi:thermometer-alert", text: "Engine overheating" },
            { icon: "mdi:engine-off-outline", text: "Unstable idle" },
            { icon: "mdi:water-alert", text: "Oil or coolant leaks" },
            { icon: "mdi:vibrate", text: "Engine vibrations" }
        ],
        afterSymptomsText: "If you notice any of these signs — book a diagnostic. Timely repair saves the engine from replacement.",
        servicesListTitle: "Our engine repair services:",
        servicesList: [
            "Engine endoscopy and defect detection",
            "Timing belt / chain replacement",
            "Cylinder head gasket replacement",
            "Piston group overhaul",
            "Valve grinding and replacement",
            "Stem seal replacement",
            "Turbocharger repair",
            "Engine mount replacement"
        ],
        afterListText: "We provide a 12-month warranty on all work. Cost is calculated after inspection — you know the final price in advance.",
        promoBanner: {
            enabled: true,
            text: "Free engine endoscopy when booking a repair"
        },
        ctaSection: {
            title: "Engine needs attention?",
            text: "Don't wait until a small problem turns into an overhaul. Come for a free diagnostic.",
            phoneText: "Call: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Book Engine Repair",
            subtitle: "Leave a request — we'll call back within 30 minutes"
        },
        seo: {
            title: "Engine Repair in Tallinn — Mr.Car Auto Service",
            description: "Major engine repair in Tallinn. Endoscopy, timing belt replacement, piston group. 12-month warranty. Kopli 82a. +372 5646 1210"
        }
    },

    {
        key: "oil_change",
        slug: "oil-change",
        allSlugs: { ru: "zamena-masla", ee: "olivahetus", en: "oil-change" },
        category: "Maintenance",
        navTitle: "Oil & Filter Change",
        icon: "mdi:oil",
        heroTitle: "Oil & Filter Change",
        heroLead: "Quick oil change according to manufacturer specs with correct matching. From €35 including filter.",
        heroImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1400&q=80",
        introTitle: "Oil Change at Mr.Car",
        introText: [
            "An oil change is a basic yet critically important procedure. Old oil loses its protective properties and starts to degrade the engine from the inside.",
            "We select oil strictly according to your car manufacturer's approvals. We use Motul, Castrol, Mobil 1, and other high-quality brands."
        ],
        symptomsTitle: "When to change oil?",
        symptoms: [
            { icon: "mdi:counter", text: "Every 10,000 – 15,000 km" },
            { icon: "mdi:oil-level", text: "Dark oil on dipstick" },
            { icon: "mdi:engine-outline", text: "Oil pressure light is on" },
            { icon: "mdi:volume-high", text: "Engine runs louder" },
            { icon: "mdi:calendar-check", text: "Year since last change" },
            { icon: "mdi:gas-station", text: "Increased fuel consumption" }
        ],
        afterSymptomsText: "Oil change takes 20-30 minutes. Don't save on oil — it's cheaper than an engine repair.",
        servicesListTitle: "What we do:",
        servicesList: [
            "Oil selection by manufacturer approvals",
            "Engine oil drain and refill",
            "Oil filter replacement",
            "Air filter replacement",
            "Cabin filter replacement",
            "Fuel filter replacement",
            "All fluid level checks"
        ],
        afterListText: "Price from €35 (oil + filter). Exact cost depends on engine size and oil brand.",
        promoBanner: { enabled: false },
        ctaSection: {
            title: "Time for an oil change?",
            text: "Come by without an appointment or book a time — 20-minute change.",
            phoneText: "Call: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Book Oil Change",
            subtitle: "Leave a request — we'll call back within 30 minutes"
        },
        seo: {
            title: "Oil Change in Tallinn — Mr.Car | from €35",
            description: "Oil and filter change in Tallinn. Selection by manufacturer specs. Motul, Castrol, Mobil 1. From €35. Kopli 82a. +372 5646 1210"
        }
    },

    {
        key: "pre_purchase",
        slug: "pre-purchase-inspection",
        allSlugs: { ru: "proverka-pered-pokupkoy", ee: "ostueelne-kontroll", en: "pre-purchase-inspection" },
        category: "Maintenance",
        navTitle: "Pre-purchase Inspection",
        icon: "mdi:file-search-outline",
        heroTitle: "Pre-purchase Car Inspection",
        heroLead: "Independent technical expertise — so your purchase doesn't turn into a disappointment.",
        heroImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1400&q=80",
        introTitle: "Pre-purchase Check at Mr.Car",
        introText: [
            "Buying a used car is always a risk. Clocked mileage, hidden accidents, engine problems — all this might only come to light after the deal.",
            "An independent check at Mr.Car will show the real condition of the vehicle. We'll check all units and systems and give an honest assessment — is it worth buying or not."
        ],
        symptomsTitle: "What do we check?",
        symptoms: [
            { icon: "mdi:engine", text: "Engine condition" },
            { icon: "mdi:car-shift-pattern", text: "Gearbox performance" },
            { icon: "mdi:car-brake-alert", text: "Suspension & Brakes" },
            { icon: "mdi:car-cog", text: "Computer diagnostics" },
            { icon: "mdi:car-side", text: "Bodywork (paint thickness)" },
            { icon: "mdi:history", text: "Real mileage" },
            { icon: "mdi:format-paint", text: "Signs of repair / respray" },
            { icon: "mdi:file-document", text: "Service history" }
        ],
        afterSymptomsText: "Spend €80 on an inspection now — save thousands on unexpected repairs later.",
        servicesListTitle: "What's included in the check:",
        servicesList: [
            "Visual inspection of body and interior",
            "Paint thickness measurement",
            "Computer diagnostics of all systems",
            "Engine and gearbox check",
            "Suspension inspection on a lift",
            "Test drive with a mechanic",
            "Written report with photos"
        ],
        afterListText: "The report includes photos of every defect and an estimated repair cost. You make a decision based on facts, not emotions.",
        promoBanner: {
            enabled: true,
            text: "Full car inspection — €80. Find out the truth before buying!"
        },
        ctaSection: {
            title: "Buying a car? Check it first",
            text: "Bring the car to us or give us the seller's address — we'll go inspect it.",
            phoneText: "Call: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Book Car Inspection",
            subtitle: "Leave a request — we'll call back within 30 minutes"
        },
        seo: {
            title: "Pre-purchase Inspection in Tallinn — Mr.Car | €80",
            description: "Independent car inspection in Tallinn. Paint gauge, diagnostics, test drive. €80. Kopli 82a. +372 5646 1210"
        }
    },

    {
        key: "ac_service",
        slug: "ac-service",
        allSlugs: { ru: "klimat-konditsioner", ee: "kliimahooldus", en: "ac-service" },
        category: "Climate & Accessories",
        navTitle: "AC & Climate Control",
        icon: "mdi:snowflake",
        heroTitle: "AC & Climate Control",
        heroLead: "AC recharging, diagnostics, and repair of air conditioning systems.",
        heroImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1400&q=80",
        introTitle: "AC Service at Mr.Car",
        introText: [
            "Car air conditioning requires regular care. Without it, cooling efficiency drops, unpleasant smells appear, and the compressor wears out prematurely.",
            "We perform full system diagnostics: pressure check, leak detection, Freon refill, and dryer replacement."
        ],
        symptomsTitle: "Signs of AC problems",
        symptoms: [
            { icon: "mdi:thermometer-plus", text: "AC cools poorly" },
            { icon: "mdi:scent-off", text: "Unpleasant smell from vents" },
            { icon: "mdi:volume-high", text: "Strange noises when switched on" },
            { icon: "mdi:water-alert", text: "Puddles of water under the car" },
            { icon: "mdi:fan-alert", text: "Fan not working" },
            { icon: "mdi:window-closed-variant", text: "Windows fogging up" }
        ],
        afterSymptomsText: "It is recommended to service the AC every 2 years. This prevents expensive compressor repairs.",
        servicesListTitle: "Our services:",
        servicesList: [
            "AC system diagnostics",
            "AC recharging with Freon",
            "Leak detection and repair",
            "AC compressor replacement",
            "Dryer / receiver replacement",
            "Evaporator antibacterial treatment",
            "Cabin filter replacement"
        ],
        afterListText: "After recharging, we test efficiency — you leave with a working climate system. 12-month warranty.",
        promoBanner: { enabled: false },
        ctaSection: {
            title: "AC not cooling?",
            text: "Recharging and diagnostics from €60. Come by — we'll fix it in an hour.",
            phoneText: "Call: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Book AC Service",
            subtitle: "Leave a request — we'll call back within 30 minutes"
        },
        seo: {
            title: "AC Recharging — Mr.Car Tallinn | Climate",
            description: "AC recharging and repair in Tallinn. Diagnostics, leak search, compressor replacement. Kopli 82a. +372 5646 1210"
        }
    },

    {
        key: "webasto",
        slug: "webasto-repair",
        allSlugs: { ru: "webasto", ee: "webasto-diagnostika", en: "webasto-repair" },
        category: "Climate & Accessories",
        navTitle: "Webasto Repair",
        icon: "mdi:radiator",
        heroTitle: "Webasto Repair & Maintenance",
        heroLead: "Diagnostics, repair, and installation of Webasto and Eberspächer auxiliary heaters.",
        heroImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1400&q=80",
        introTitle: "Webasto Repair at Mr.Car",
        introText: [
            "An auxiliary heater is indispensable during Estonian winters. However, it requires regular maintenance — otherwise, it might fail when you need it most.",
            "Mr.Car specializes in repairing and servicing all Webasto and Eberspächer models. We have all necessary equipment and spare parts."
        ],
        symptomsTitle: "When to seek help?",
        symptoms: [
            { icon: "mdi:power-off", text: "Webasto doesn't start" },
            { icon: "mdi:smoke-detector-variant", text: "Smokes during operation" },
            { icon: "mdi:alert-circle", text: "Remote / timer displays error" },
            { icon: "mdi:fire-alert", text: "Burning smell during operation" },
            { icon: "mdi:timer-off-outline", text: "Shuts off after a minute" },
            { icon: "mdi:calendar-check", text: "Scheduled maintenance (once a year)" }
        ],
        afterSymptomsText: "Webasto service before the season is the best way to avoid problems in the cold. Takes 1-2 hours. <br><br>👉 <a href=\"/en/services/webasto-symptoms\" style=\"text-decoration: underline; font-weight: bold;\">Read more about common Webasto symptoms and error codes</a>.",
        servicesListTitle: "Our Webasto services:",
        servicesList: [
            "Heater diagnostics",
            "Combustion chamber cleaning",
            "Glow plug replacement",
            "Fuel pump replacement",
            "Control unit repair",
            "Wiring and timer repair",
            "Installation of new Webasto units"
        ],
        afterListText: "We work with all Webasto (Thermo Top, Air Top) and Eberspächer (Hydronic, Airtronic) models. 12-month warranty on works.",
        promoBanner: {
            enabled: true,
            text: "Prepare your Webasto for winter — service from €60"
        },
        ctaSection: {
            title: "Webasto not working?",
            text: "Don't freeze — come by. Repair in most cases on the day of arrival.",
            phoneText: "Call: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Book Webasto Repair",
            subtitle: "Leave a request — we'll call back within 30 minutes"
        },
        seo: {
            title: "Webasto Repair in Tallinn — Mr.Car | Diagnostics & Service",
            description: "Webasto and Eberspächer repair and maintenance in Tallinn. Diagnostics, glow plug, cleaning. Kopli 82a. +372 5646 1210"
        }
    }
];
