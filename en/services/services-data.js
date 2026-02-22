/**
 * Mr.Car — Services Data (EN)
 * Single source of truth for all 12 services.
 */
const SERVICES = [
    // ═══════════════════════════════════
    // CATEGORY: Diagnostics & Electrical
    // ═══════════════════════════════════
    {
        key: "electrical",
        slug: "electrical-repair",
        allSlugs: { ru: "elektrika", ee: "elektritood", en: "electrical-repair" },
        category: "Diagnostics & Electrical",
        navTitle: "Auto Electrical",
        icon: "mdi:lightning-bolt",
        heroTitle: "Auto Electrical Repair",
        heroLead: "Current leaks, short circuits, electronics glitches — we find and fix them without guesswork.",
        heroImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1400&q=80",
        introTitle: "Professional Auto Electrical Services in Tallinn",
        introText: [
            "Electrical issues are among the most elusive. A current leak, a short circuit, or an intermittent fault can cause complete system failure. We find the root cause instead of replacing parts at random.",
            "Equipped with oscilloscopes, Fluke multimeters, and factory wiring diagrams, we decode CAN/LIN buses and locate breaks according to manufacturer documentation."
        ],
        symptomsTitle: "When to see an auto electrician?",
        symptoms: [
            { icon: "mdi:battery-alert", text: "Battery drains quickly" },
            { icon: "mdi:flash-off", text: "Lights or indicators not working" },
            { icon: "mdi:car-key", text: "Starting problems" },
            { icon: "mdi:shield-lock-outline", text: "Alarm / immobilizer glitches" },
            { icon: "mdi:window-open", text: "Power windows not working" },
            { icon: "mdi:fan-alert", text: "Blower fans failure" }
        ],
        afterSymptomsText: "Electrical systems are not for DIY. Improper interference can lead to fire. Trust the professionals.",
        servicesListTitle: "Our electrical services include:",
        servicesList: [
            "Parasitic draw / current leak testing",
            "Wiring harness and loom repair",
            "Starter and alternator diagnostics/repair",
            "Alarm system installation and repair",
            "Control unit (ECU / BCM) repair",
            "CAN / LIN bus decoding",
            "Lighting systems diagnostics"
        ],
        afterListText: "We work with factory diagrams and documentation. After repair, we perform a full test of all electronic systems.",
        promoBanner: { enabled: false },
        ctaSection: {
            title: "Electrical problems? We'll solve them fast",
            text: "Don't risk your safety. Book an appointment — we'll find and fix any fault.",
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

    // ═══════════════════════════════════
    // CATEGORY: Engine & Drivetrain
    // ═══════════════════════════════════
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
        afterListText: "We provide a 12-month warranty on all works. Costs are calculated after inspection — you'll know the final price upfront.",
        promoBanner: {
            enabled: true,
            text: "Free engine endoscopy when booking a repair"
        },
        ctaSection: {
            title: "Engine needs attention?",
            text: "Don't wait for a small problem to become a major overhaul. Come for a diagnostic.",
            phoneText: "Call: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Book Engine Repair",
            subtitle: "Leave a request — we'll call back within 30 minutes"
        },
        seo: {
            title: "Engine Repair in Tallinn — Mr.Car Auto Service",
            description: "Major engine overhaul in Tallinn. Endoscopy, timing belt replacement, piston repair. 12-month warranty. Kopli 82a. +372 5646 1210"
        }
    },

    {
        key: "transmission",
        slug: "transmission-repair",
        allSlugs: { ru: "remont-kpp", ee: "kaigukastiremont", en: "transmission-repair" },
        category: "Engine & Drivetrain",
        navTitle: "Gearbox Repair",
        icon: "mdi:car-shift-pattern",
        heroTitle: "Gearbox & Transmission Repair",
        heroLead: "Automatic, Manual, DSG, CVT — we diagnose and repair all types of transmissions.",
        heroImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1400&q=80",
        introTitle: "Transmission Repair at Mr.Car",
        introText: [
            "The gearbox is one of the most complex assemblies. Jolts when shifting, slipping, or humming from the transmission all require immediate professional attention.",
            "Mr.Car specializes in repairing all transmission types: manual, automatic, robotic (DSG), and variator (CVT). We use original parts and specialized equipment."
        ],
        symptomsTitle: "Signs of transmission failure",
        symptoms: [
            { icon: "mdi:swap-vertical", text: "Jerking when shifting" },
            { icon: "mdi:volume-high", text: "Humming or whining" },
            { icon: "mdi:slip", text: "Gear slipping" },
            { icon: "mdi:oil-level", text: "Transmission fluid leak" },
            { icon: "mdi:alert-circle", text: "Warning lights (Auto)" },
            { icon: "mdi:timer-sand", text: "Delayed shifting" }
        ],
        afterSymptomsText: "Delaying gearbox repair leads to critical damage and replacement of the entire unit. Diagnostics is the first step to a solution.",
        servicesListTitle: "Our transmission services:",
        servicesList: [
            "Automatic / Manual / DSG diagnostics",
            "Transmission fluid and filter change",
            "Clutch and flywheel replacement",
            "DSG mechatronic repair",
            "Automatic valve body overhaul",
            "Bearing and synchronizer replacement"
        ],
        afterListText: "After repair, we perform a test drive and adaptation. 12-month warranty on all works.",
        promoBanner: { enabled: false },
        ctaSection: {
            title: "Transmission problems?",
            text: "Kicks, jerks, or oil leaks — come for a gearbox diagnostic.",
            phoneText: "Call: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Book Gearbox Repair",
            subtitle: "Leave a request — we'll call back within 30 minutes"
        },
        seo: {
            title: "Gearbox Repair in Tallinn — Automatic, DSG, Manual | Mr.Car",
            description: "Transmission repair in Tallinn: Automatic, Manual, DSG, CVT. Diagnostics and overhaul. 12-month warranty. Kopli 82a. +372 5646 1210"
        }
    },

    {
        key: "exhaust_welding",
        slug: "exhaust-welding",
        allSlugs: { ru: "glushiteli-svarka", ee: "summutid-keevitus", en: "exhaust-welding" },
        category: "Engine & Drivetrain",
        navTitle: "Exhaust & Welding",
        icon: "mdi:fire",
        heroTitle: "Exhaust Systems & Welding",
        heroLead: "Exhaust repair and replacement. Argon and semi-automatic welding of any complexity.",
        heroImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1400&q=80",
        introTitle: "Exhaust Repair and Welding Services",
        introText: [
            "A blown exhaust is not just an unpleasant sound, but also a danger of exhaust gases entering the cabin. We repair and replace all elements of the exhaust system.",
            "We also specialize in welding: crack repair, bracket repair, and floor welding. Argon welding for aluminum and stainless steel."
        ],
        symptomsTitle: "When do you need exhaust repair?",
        symptoms: [
            { icon: "mdi:volume-high", text: "Loud exhaust sound" },
            { icon: "mdi:smoke-detector-variant", text: "Exhaust smell in cabin" },
            { icon: "mdi:vibrate", text: "Vibration while running" },
            { icon: "mdi:water-alert", text: "Condensation leak from joints" },
            { icon: "mdi:car-brake-low-pressure", text: "Loss of power" },
            { icon: "mdi:flash-alert", text: "Catalytic converter error (P0420)" }
        ],
        afterSymptomsText: "Don't ignore exhaust system problems — they directly affect engine performance and safety.",
        servicesListTitle: "Our services:",
        servicesList: [
            "Muffler / resonator replacement",
            "Catalytic converter repair/replacement",
            "Exhaust flex pipe replacement",
            "Exhaust crack welding",
            "Argon welding (aluminum, stainless)",
            "Bracket and mount welding",
            "Underbody welding"
        ],
        afterListText: "Work is often performed on the same day. We use high-quality materials and provide a warranty on welding works.",
        promoBanner: { enabled: false },
        ctaSection: {
            title: "Need welding or exhaust repair?",
            text: "Come without an appointment or leave a request — we'll inspect and give a quote in 15 mins.",
            phoneText: "Call: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Book Welding Works",
            subtitle: "Leave a request — we'll call back within 30 minutes"
        },
        seo: {
            title: "Exhaust Repair & Welding — Mr.Car Tallinn",
            description: "Exhaust and catalytic converter repair and replacement. Argon welding. Kopli 82a, Tallinn. +372 5646 1210"
        }
    },

    // ═══════════════════════════════════
    // CATEGORY: Suspension & Brakes
    // ═══════════════════════════════════
    {
        key: "chassis_brakes",
        slug: "chassis-brakes",
        allSlugs: { ru: "hodovaya-tormoza", ee: "veermik-pidurid", en: "chassis-brakes" },
        category: "Suspension & Brakes",
        navTitle: "Suspension & Brakes",
        icon: "mdi:car-brake-alert",
        heroTitle: "Suspension & Brakes Repair",
        heroLead: "Suspension, steering, braking system — diagnostics and repair with a guarantee.",
        heroImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1400&q=80",
        introTitle: "Suspension Repair at Mr.Car",
        introText: [
            "The suspension is your safety on the road. Knocking in the suspension, steering pull, or vibrations are signs of wear that cannot be ignored.",
            "We conduct a full suspension diagnostic on a lift, identify worn parts, and draw up a repair plan with an exact cost. No surprises."
        ],
        symptomsTitle: "Signs of suspension problems",
        symptoms: [
            { icon: "mdi:car-traction-control", text: "Car pulling to the side" },
            { icon: "mdi:volume-high", text: "Knocking or squeaking" },
            { icon: "mdi:vibrate", text: "Steering wheel vibration" },
            { icon: "mdi:tire", text: "Uneven tire wear" },
            { icon: "mdi:car-brake-low-pressure", text: "Increased braking distance" },
            { icon: "mdi:disc", text: "Grinding when braking" },
            { icon: "mdi:steering", text: "Steering wheel play" },
            { icon: "mdi:car-side", text: "Body roll in turns" }
        ],
        afterSymptomsText: "Worn suspension and brakes are a direct threat to safety. Come for a check-up.",
        servicesListTitle: "Our suspension and brake services:",
        servicesList: [
            "Suspension diagnostics on a lift",
            "Shock absorber and spring replacement",
            "Bushing and ball joint replacement",
            "Tie rod and end replacement",
            "Brake pad and disc replacement",
            "Brake hose and caliper replacement",
            "Brake system bleeding",
            "Wheel alignment"
        ],
        afterListText: "We use parts from trusted manufacturers: Lemförder, TRW, Monroe, Brembo. 12-month warranty on all works.",
        promoBanner: {
            enabled: true,
            text: "Free suspension diagnostics when booking online"
        },
        ctaSection: {
            title: "Knocking in suspension? Grinding when braking?",
            text: "Don't risk your safety. We'll inspect your suspension for free and give an exact quote.",
            phoneText: "Call: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Book Suspension Repair",
            subtitle: "Leave a request — we'll call back within 30 minutes"
        },
        seo: {
            title: "Suspension & Brake Repair — Mr.Car Tallinn",
            description: "Suspension and braking system repair in Tallinn. Shocks, pads, wheel alignment. Free diagnostics. Kopli 82a. +372 5646 1210"
        }
    },

    {
        key: "tire_service",
        slug: "tire-service",
        allSlugs: { ru: "rehvitood", ee: "rehvitood", en: "tire-service" },
        category: "Suspension & Brakes",
        navTitle: "Tire Services",
        icon: "mdi:tire",
        heroTitle: "Tire Services",
        heroLead: "Seasonal change, balancing, puncture repair. Fast and accurate — no queues.",
        heroImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1400&q=80",
        introTitle: "Tire Services at Mr.Car",
        introText: [
            "Tire fitting seems simple but requires precision. Improper balancing causes vibration, bearing wear, and driving discomfort.",
            "At Mr.Car, we use modern equipment for mounting and balancing. We work with wheels from R13 to R22, including low-profile and RunFlat tires."
        ],
        symptomsTitle: "When do you need tire services?",
        symptoms: [
            { icon: "mdi:calendar-clock", text: "Seasonal tire change" },
            { icon: "mdi:vibrate", text: "Vibration at speed" },
            { icon: "mdi:tire", text: "Puncture / cut" },
            { icon: "mdi:car-traction-control", text: "Car pulling to the side" },
            { icon: "mdi:ruler", text: "Uneven wear" },
            { icon: "mdi:thermometer-low", text: "Winter tire transition" }
        ],
        afterSymptomsText: "Timely tire change ensures road safety and fuel economy. Don't delay the seasonal swap.",
        servicesListTitle: "Our tire services include:",
        servicesList: [
            "Seasonal tire change (Summer / Winter)",
            "Wheel balancing",
            "Puncture repair (plug / patch)",
            "New tire installation",
            "Valve replacement",
            "Tire pressure check"
        ],
        afterListText: "We work by appointment without queues. Prices from €20 per wheel. Seasonal tire storage available on request.",
        promoBanner: { enabled: false },
        ctaSection: {
            title: "Ready for the season?",
            text: "Book a convenient time — changing a set takes 30–40 minutes.",
            phoneText: "Call: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Book Tire Service",
            subtitle: "Leave a request — we'll call back within 30 minutes"
        },
        seo: {
            title: "Tire Services in Tallinn — Mr.Car | from €20",
            description: "Tire fitting in Tallinn: seasonal change, balancing, puncture repair. R13–R22. From €20. Kopli 82a. +372 5646 1210"
        }
    },

    // ═══════════════════════════════════
    // CATEGORY: Maintenance
    // ═══════════════════════════════════
    {
        key: "maintenance_diag",
        slug: "maintenance-diagnostics",
        allSlugs: { ru: "to-diagnostika", ee: "hooldus-diagnostika", en: "maintenance-diagnostics" },
        category: "Maintenance",
        navTitle: "Maintenance & Diagnostics",
        icon: "mdi:car-cog",
        heroTitle: "Technical Maintenance",
        heroLead: "Scheduled maintenance according to manufacturer standards without losing dealership warranty.",
        heroImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1400&q=80",
        introTitle: "Technical Maintenance at Mr.Car",
        introText: [
            "Regular maintenance is the best investment in your car's longevity. We perform all scheduled works according to manufacturer standards, preserving your dealer warranty.",
            "Each service includes a multi-point check of all car systems. You receive a full report on the car's condition and recommendations for the future."
        ],
        symptomsTitle: "When to perform maintenance?",
        symptoms: [
            { icon: "mdi:counter", text: "Mileage interval (every 10–15k km)" },
            { icon: "mdi:calendar-check", text: "One year since last service" },
            { icon: "mdi:engine-outline", text: "Service indicator is on" },
            { icon: "mdi:road-variant", text: "Before a long trip" },
            { icon: "mdi:car-key", text: "After buying a used car" },
            { icon: "mdi:snowflake", text: "Before the winter season" }
        ],
        afterSymptomsText: "Missed maintenance means hidden wear and expensive repairs later. Better to spend an hour now than a week later.",
        servicesListTitle: "What's included in maintenance:",
        servicesList: [
            "Oil and oil filter replacement",
            "Air and cabin filter replacement",
            "Fluids check and top-up",
            "Braking system check",
            "Suspension check on a lift",
            "Battery test",
            "Computer diagnostics",
            "Service indicator reset"
        ],
        afterListText: "Costs depend on the car model and scope of work. Call us — we'll calculate an exact price before your visit.",
        promoBanner: {
            enabled: true,
            text: "10% discount on maintenance for first-time visits. Book online!"
        },
        ctaSection: {
            title: "Time for maintenance?",
            text: "Don't delay. Book an appointment — we'll do everything in 1–2 hours.",
            phoneText: "Call: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Book Maintenance",
            subtitle: "Leave a request — we'll call back within 30 minutes"
        },
        seo: {
            title: "Car Maintenance — Mr.Car Tallinn | Auto Service",
            description: "Scheduled car maintenance in Tallinn. Oil, filters, and system checks. Dealer warranty preserved. Kopli 82a. +372 5646 1210"
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
        heroLead: "Quick oil change with manufacturer-approved oils. From €35 including filter.",
        heroImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1400&q=80",
        introTitle: "Oil Change Services at Mr.Car",
        introText: [
            "Changing oil is a basic but critical procedure. Old oil loses its protective properties and starts to damage the engine from within.",
            "We select oil strictly according to your car manufacturer's specifications. We use Motul, Castrol, Mobil 1, and other premium brands."
        ],
        symptomsTitle: "When to change oil?",
        symptoms: [
            { icon: "mdi:counter", text: "Every 10,000–15,000 km" },
            { icon: "mdi:oil-level", text: "Dark oil on the dipstick" },
            { icon: "mdi:engine-outline", text: "Oil indicator is on" },
            { icon: "mdi:volume-high", text: "Engine runs louder" },
            { icon: "mdi:calendar-check", text: "One year since last change" },
            { icon: "mdi:gas-station", text: "Increased fuel consumption" }
        ],
        afterSymptomsText: "An oil change takes 20–30 minutes. Don't skimp on oil — it's cheaper than an engine repair.",
        servicesListTitle: "What we do:",
        servicesList: [
            "Oil selection by manufacturer specs",
            "Engine oil replacement",
            "Oil filter replacement",
            "Air filter replacement",
            "Cabin filter replacement",
            "Fuel filter replacement",
            "All fluid levels check"
        ],
        afterListText: "Prices from €35 (oil + filter). Exact price depends on engine volume and oil brand.",
        promoBanner: { enabled: false },
        ctaSection: {
            title: "Time for an oil change?",
            text: "Come without an appointment or book a time — 20-minute service.",
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
        heroTitle: "Pre-purchase Inspection",
        heroLead: "Independent technical expertise — so your purchase doesn't become a disappointment.",
        heroImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1400&q=80",
        introTitle: "Pre-purchase Inspection at Mr.Car",
        introText: [
            "Buying a used car is always a risk. Rolled-back mileage, hidden accidents, engine problems — all this can be discovered after the deal.",
            "An independent check at Mr.Car shows the real condition of the car. We check all units and systems and give an honest conclusion — whether it's worth buying or not."
        ],
        symptomsTitle: "What do we check?",
        symptoms: [
            { icon: "mdi:engine", text: "Engine condition" },
            { icon: "mdi:car-shift-pattern", text: "Gearbox performance" },
            { icon: "mdi:car-brake-alert", text: "Suspension and brakes" },
            { icon: "mdi:car-cog", text: "Computer diagnostics" },
            { icon: "mdi:car-side", text: "Bodywork (paint depth)" },
            { icon: "mdi:history", text: "Real mileage" },
            { icon: "mdi:format-paint", text: "Traces of repair/painting" },
            { icon: "mdi:file-document", text: "Service history" }
        ],
        afterSymptomsText: "Spend €80 on a check now — save thousands on unforeseen repairs later.",
        servicesListTitle: "What's included in the check:",
        servicesList: [
            "Visual inspection of body and interior",
            "Paint thickness measurement",
            "Computer diagnostics of all systems",
            "Engine and gearbox check",
            "Suspension inspection on a lift",
            "Test drive with a master",
            "Written report with photos"
        ],
        afterListText: "The report includes photos of each defect and an estimate of the cost to fix it. You make a decision based on facts, not emotions.",
        promoBanner: {
            enabled: true,
            text: "Full car check — €80. Find out the truth before buying!"
        },
        ctaSection: {
            title: "Buying a car? Check it first",
            text: "Bring the car to us or provide the seller's address — we'll go for an inspection.",
            phoneText: "Call: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Book Car Inspection",
            subtitle: "Leave a request — we'll call back within 30 minutes"
        },
        seo: {
            title: "Pre-purchase Car Inspection — Mr.Car Tallinn | €80",
            description: "Independent car check before purchase in Tallinn. Paint gauge, diagnostics, test drive. €80. Kopli 82a. +372 5646 1210"
        }
    },

    // ═══════════════════════════════════
    // CATEGORY: Climate & Accessories
    // ═══════════════════════════════════
    {
        key: "ac_service",
        slug: "ac-service",
        allSlugs: { ru: "klimat-konditsioner", ee: "kliimahooldus", en: "ac-service" },
        category: "Climate & Accessories",
        navTitle: "AC & Climate Control",
        icon: "mdi:snowflake",
        heroTitle: "AC & Climate Control",
        heroLead: "Refilling, diagnostics, and repair of car climate systems.",
        heroImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1400&q=80",
        introTitle: "Air Conditioning Service at Mr.Car",
        introText: [
            "The climate system requires regular maintenance. Without it, cooling efficiency is lost, unpleasant odors appear, and the compressor wears out prematurely.",
            "We perform a full diagnostic of the AC system: pressure check, leak detection, refrigerant refilling, and dryer replacement."
        ],
        symptomsTitle: "Signs of AC problems",
        symptoms: [
            { icon: "mdi:thermometer-plus", text: "AC not cooling well" },
            { icon: "mdi:scent-off", text: "Bad smell from vents" },
            { icon: "mdi:volume-high", text: "Strange noises when turned on" },
            { icon: "mdi:water-alert", text: "Water puddle under the car" },
            { icon: "mdi:fan-alert", text: "Fan not working" },
            { icon: "mdi:window-closed-variant", text: "Foggy windows" }
        ],
        afterSymptomsText: "It's recommended to service the AC every 2 years to prevent expensive compressor repairs.",
        servicesListTitle: "Our services:",
        servicesList: [
            "Climate system diagnostics",
            "AC refrigerant refilling",
            "Leak search and elimination",
            "AC compressor replacement",
            "Dryer / receiver replacement",
            "Antibacterial treatment of evaporator",
            "Cabin filter replacement"
        ],
        afterListText: "After refilling, we test for efficiency — you'll leave with a working AC. 12-month warranty.",
        promoBanner: { enabled: false },
        ctaSection: {
            title: "AC not cooling?",
            text: "Refilling and diagnostics from €60. Come by — we'll fix it in an hour.",
            phoneText: "Call: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Book AC Service",
            subtitle: "Leave a request — we'll call back within 30 minutes"
        },
        seo: {
            title: "Car AC Refilling — Mr.Car Tallinn | Air Conditioning",
            description: "AC refilling and repair in Tallinn. Diagnostics, leak detection, compressor replacement. Kopli 82a. +372 5646 1210"
        }
    },

    {
        key: "webasto",
        slug: "webasto-repair",
        allSlugs: { ru: "webasto", ee: "webasto-remont", en: "webasto-repair" },
        category: "Climate & Accessories",
        navTitle: "Webasto Repair",
        icon: "mdi:radiator",
        heroTitle: "Webasto Repair & Service",
        heroLead: "Diagnostics, repair, and installation of Webasto and Eberspächer pre-heaters.",
        heroImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1400&q=80",
        introTitle: "Webasto Repair Services at Mr.Car",
        introText: [
            "A pre-heater is indispensable in Estonian winters. But it requires regular maintenance; otherwise, it might fail at the most needed moment.",
            "Mr.Car specializes in the repair and service of Webasto and Eberspächer all models. We have all the necessary equipment and parts."
        ],
        symptomsTitle: "When to seek help?",
        symptoms: [
            { icon: "mdi:power-off", text: "Webasto won't start" },
            { icon: "mdi:smoke-detector-variant", text: "Smokes while running" },
            { icon: "mdi:alert-circle", text: "Remote / timer errors" },
            { icon: "mdi:fire-alert", text: "Burning smell while running" },
            { icon: "mdi:timer-off-outline", text: "Shuts down after a minute" },
            { icon: "mdi:calendar-check", text: "Scheduled service (annual)" }
        ],
        afterSymptomsText: "Servicing Webasto before the season is the best way to avoid problems in the cold. Takes 1–2 hours.",
        servicesListTitle: "Our Webasto services:",
        servicesList: [
            "Pre-heater diagnostics",
            "Combustion chamber cleaning",
            "Glow plug replacement",
            "Fuel pump replacement",
            "Control unit repair",
            "Wiring and timer repair",
            "New Webasto installation"
        ],
        afterListText: "We work with all Webasto (Thermo Top, Air Top) and Eberspächer (Hydronic, Airtronic) models. 12-month warranty on works.",
        promoBanner: {
            enabled: true,
            text: "Prepare your Webasto for winter — service from €60"
        },
        ctaSection: {
            title: "Webasto not working?",
            text: "Don't freeze — come by. Repair in most cases on the same day.",
            phoneText: "Call: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Book Webasto Repair",
            subtitle: "Leave a request — we'll call back within 30 minutes"
        },
        seo: {
            title: "Webasto Repair in Tallinn — Mr.Car | Diagnostics & Service",
            description: "Repair and service of Webasto and Eberspächer in Tallinn. Diagnostics, glow plug, cleaning. Kopli 82a. +372 5646 1210"
        }
    },

    {
        key: "general_repair",
        slug: "general-car-repair",
        allSlugs: { ru: "autoremont", ee: "autoremont", en: "general-car-repair" },
        category: "Maintenance",
        navTitle: "General Car Repair",
        icon: "mdi:wrench",
        heroTitle: "General Car Repair",
        heroLead: "Comprehensive repair for all car makes. From minor faults to major overhauls.",
        heroImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1400&q=80",
        introTitle: "Car Repair Services at Mr.Car",
        introText: [
            "Mr.Car is a full-service auto workshop where any car problem can be solved. From a bulb change to a major overhaul — all under one roof.",
            "Our team works with all car brands: European, Japanese, Korean. Each master specializes in their field, ensuring the quality of work."
        ],
        symptomsTitle: "What do people come to us for?",
        symptoms: [
            { icon: "mdi:engine-outline", text: "Engine problems" },
            { icon: "mdi:car-brake-alert", text: "Suspension knocking" },
            { icon: "mdi:lightning-bolt", text: "Electrical faults" },
            { icon: "mdi:car-shift-pattern", text: "Gearbox issues" },
            { icon: "mdi:oil-level", text: "Fluid leaks" },
            { icon: "mdi:car-cog", text: "Scheduled maintenance" },
            { icon: "mdi:car-side", text: "MOT (Tehnoülevaatus) prep" },
            { icon: "mdi:file-search-outline", text: "Pre-purchase inspection" }
        ],
        afterSymptomsText: "Don't know what's broken? Just come by — we'll figure it out and offer a solution.",
        servicesListTitle: "Our fields of expertise:",
        servicesList: [
            "Engine and Gearbox repair",
            "Suspension and Braking systems",
            "Auto electrical and diagnostics",
            "Oil change and maintenance",
            "Tire fitting and balancing",
            "Climate and AC control",
            "Welding works",
            "Pre-sale preparation"
        ],
        afterListText: "We always state the cost before starting work. 12-month warranty. Original parts and proven alternatives.",
        promoBanner: { enabled: false },
        ctaSection: {
            title: "Need a car repair?",
            text: "Book online or come without an appointment during working hours. Free inspection.",
            phoneText: "Call: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Book a Repair",
            subtitle: "Leave a request — we'll call back within 30 minutes"
        },
        seo: {
            title: "Car Repair in Tallinn — Mr.Car | All service types",
            description: "Mr.Car auto workshop in Tallinn. Repair of engine, gearbox, suspension, electronics. All makes. 12-month warranty. Kopli 82a. +372 5646 1210"
        }
    }
];
