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
        navTitle: "General Car Repair",
        icon: "mdi:wrench",
        heroTitle: "General Car Repair",
        heroLead: "Comprehensive repair for all car makes. From minor issues to major overhauls.",
        heroImage: "/pics/general-repair-hero.webp",
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
        key: "exhaust",
        slug: "exhaust-welding",
        allSlugs: { ru: "glushiteli-svarka", ee: "summutid-keevitus", en: "exhaust-welding" },
        category: "Engine & Drivetrain",
        navTitle: "Muffler",
        icon: "mdi:fire",
        heroTitle: "Muffler Repair",
        heroLead: "Exhaust system and muffler repair and replacement.",
        heroImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1400&q=80",
        introTitle: "Muffler and exhaust system repair",
        introText: [
            "Exhaust system repair is usually needed due to wear or corrosion. A burnt-out muffler isn't just an unpleasant sound — exhaust gases can enter the cabin.",
            "We repair mufflers, resonators, catalytic converters, and flex pipes. Welding works now have a separate service page."
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
            "Exhaust leak repair",
            "Mount and rubber hanger replacement",
            "Exhaust system diagnostics"
        ],
        afterListText: "Works are done on the day of arrival. We use high-quality materials and provide a warranty on welds.",
        promoBanner: { enabled: false },
        ctaSection: {
            title: "Need muffler repair?",
            text: "Come by or leave a request — we'll inspect the exhaust system and quote before work starts.",
            phoneText: "Call: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Book Muffler Repair",
            subtitle: "Leave a request — we'll call back within 30 minutes"
        },
        seo: {
            title: "Muffler Repair — Mr.Car Tallinn",
            description: "Muffler, catalytic converter, and exhaust system repair in Tallinn. Kopli 82a. +372 5646 1210"
        }
    },

    {
        key: "welding_works",
        slug: "welding-works",
        allSlugs: { ru: "svarochnye-raboty", ee: "keevitustood", en: "welding-works" },
        category: "Engine & Drivetrain",
        navTitle: "Welding Works",
        icon: "mdi:hammer-wrench",
        heroTitle: "Welding Works",
        heroLead: "This service page is under construction. Welding information and prices will be added soon.",
        heroImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1400&q=80",
        introTitle: "Page under construction",
        introText: [
            "Welding works are now a separate service so muffler repair and welding are clearly separated in the menu.",
            "Until the detailed page is ready, you can book welding work through the same request form."
        ],
        symptomsTitle: "What will this page include?",
        symptoms: [
            { icon: "mdi:fire", text: "Bracket welding" },
            { icon: "mdi:car-wrench", text: "Chassis welding" },
            { icon: "mdi:wrench", text: "Exhaust system welding" },
            { icon: "mdi:shield-check", text: "Work warranty" }
        ],
        afterSymptomsText: "The page is in development, but the service can already be requested.",
        servicesListTitle: "Planned content:",
        servicesList: [
            "Types of welding work",
            "Materials and limitations",
            "Prices and timing",
            "Booking recommendations"
        ],
        afterListText: "The full description will be added later.",
        promoBanner: { enabled: false },
        ctaSection: {
            title: "Need welding work?",
            text: "Send a request — we'll inspect the job and quote before starting.",
            phoneText: "Call: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Book Welding Works",
            subtitle: "Leave a request — we'll call back within 30 minutes"
        },
        seo: {
            title: "Welding Works — Mr.Car Tallinn",
            description: "Welding works in Tallinn. Page under construction. Kopli 82a. +372 5646 1210"
        }
    },

    {
        key: "suspension",
        slug: "suspension-repair",
        allSlugs: { ru: "hodovaya", ee: "veermiku-remont", en: "suspension-repair" },
        category: "Suspension & Brakes",
        navTitle: "Suspension",
        icon: "mdi:car-lifted-pickup",
        templateVariant: "service-deep-dive-v2",
        bodyClass: "service-brakes-page service-suspension-page",
        extraStyles: ["/services/transmission.css?v=6", "/services/brakes.css?v=11"],
        heroTitle: "Suspension Diagnostics and Repair in Tallinn",
        heroLead: "Knocking over bumps, steering wheel vibration, the car pulling to one side, or uneven tire wear — we diagnose and repair suspension faults of any complexity. We replace shock absorbers, control arms, ball joints, silent blocks, wheel bearings, and other suspension components. 3D wheel alignment, play checks, and suspension geometry inspection.",
        heroImage: "/pics/suspension-hero.webp",
        heroStats: [
            { value: "3,000+", label: "suspension components replaced" },
            { value: "15+", label: "years of specialist experience" },
            { value: "Every 2nd", label: "car needs 3D wheel alignment after suspension repair" }
        ],
        localNav: [
            { href: "#symptoms", icon: "mdi:alert-circle-outline", label: "Symptoms" },
            { href: "#types", icon: "mdi:car-lifted-pickup", label: "Suspension Types" },
            { href: "#services", icon: "mdi:wrench", label: "Services" },
            { href: "#pricing", icon: "mdi:currency-eur", label: "Prices" },
            { href: "#reviews", icon: "mdi:star", label: "Reviews" },
            { href: "#faq", icon: "mdi:frequently-asked-questions", label: "FAQ" }
        ],
        introTitle: "Specialized Suspension Diagnostics and Repair in Tallinn",
        introText: [
            "At Mr.Car, suspension repair starts with accurate diagnostics and ends with professional, manufacturer-standard repair of the chassis system. We inspect all key components, replace worn parts, and perform final 3D wheel alignment when required.",
            "We repair suspension systems on BMW, Audi, Mercedes-Benz, Volkswagen, Škoda, Toyota, Volvo, Porsche, Ford, Hyundai, Kia, and many other car brands. We use OEM parts as well as high-quality aftermarket components from trusted brands, including Lemförder, Sachs, Bilstein, Febi, Meyle, TRW, and others. Suspension diagnostics start from €25.",
            "Your car's suspension is responsible for stability, handling, ride comfort, and keeping the wheels in constant contact with the road. The system includes shock absorbers, springs, control arms, silent blocks, ball joints, wheel bearings, anti-roll bars, and suspension mounts.",
            "In Estonia, suspension components work under increased stress. Temperature changes, road salt, tram tracks, road joints, and potholes after winter all accelerate wear on shock absorbers, silent blocks, ball joints, and wheel bearings.",
            "A test drive, lift inspection, and detailed play check allow us to identify the exact source of the problem and replace only the parts that are genuinely worn — without unnecessary replacement of components that are still in good condition."
        ],
        urgencyBlock: {
            icon: "mdi:alert-decagram",
            title: "Suspension problems usually show warning signs before a serious failure occurs",
            text: "Knocking over bumps, steering wheel vibration, and unusual noises often appear before suspension components become critically worn. Timely diagnostics help identify the problem early and prevent additional wear to related chassis components."
        },
        symptomsTitle: "Main signs of suspension problems",
        symptoms: [
            { icon: "mdi:car-traction-control", text: "Car pulls to the side" },
            { icon: "mdi:volume-high", text: "Knocks and squeaks while driving" },
            { icon: "mdi:vibrate", text: "Vibration in the steering wheel" },
            { icon: "mdi:tire", text: "Uneven tire wear" },
            { icon: "mdi:steering", text: "Steering wheel play" },
            { icon: "mdi:car-side", text: "Body roll in turns" }
        ],
        afterSymptomsText: "Worn suspension directly affects handling, braking distance, and tire life. If you notice these symptoms, book diagnostics before the fault develops further.",
        detailedSymptomsTitle: "Main signs of suspension problems",
        detailedSymptoms: [
            { tone: "critical", icon: "mdi:volume-high", title: "Knocking when driving over bumps", desc: "A knocking sound when driving over potholes, speed bumps, or tram tracks usually indicates wear in the suspension. A dull single knock is often caused by worn control arm silent blocks or shock absorber mounts. A metallic knock that can be felt through the steering wheel may point to worn ball joints, tie rod ends, or other steering components." },
            { icon: "mdi:vibrate", title: "Steering wheel vibration or wobble", desc: "If the steering wheel vibrates at a certain speed, usually between 80 and 120 km/h, or vibrates constantly, the cause may be wheel imbalance, warped brake discs, a worn wheel bearing, or play in the steering or suspension system." },
            { icon: "mdi:tire", title: "Uneven tire wear", desc: "If the inner or outer edge of the tire tread wears much faster than the rest, this is usually a sign of incorrect wheel alignment or worn suspension components. Common causes include worn silent blocks, control arms, ball joints, or play in the chassis. After suspension repair, we recommend 3D wheel alignment to restore the correct wheel position and ensure even tire wear." },
            { icon: "mdi:car-brake-alert", title: "Body roll and instability when braking", desc: "If the car leans noticeably in corners or dives forward heavily under braking, the shock absorbers may be worn. This reduces vehicle stability, increases braking distance, and weakens tire contact with the road surface." },
            { icon: "mdi:car-traction-control", title: "Vehicle pulling to one side", desc: "If the car constantly pulls left or right without steering input, the cause may be incorrect wheel alignment, worn suspension parts, or deformation after an impact. In this case, the suspension geometry should be checked and 3D wheel alignment performed." },
            { tone: "critical", icon: "mdi:oil", title: "Oil on the shock absorber body", desc: "Oil marks on the strut or shock absorber body indicate a loss of sealing. The shock absorber loses its working fluid and can no longer damp suspension movement effectively. To keep the suspension working evenly and safely, shock absorbers should be replaced in pairs on the same axle." }
        ],
        riskStagesTitle: "What happens if suspension repair is delayed?",
        riskStages: [
            { marker: "1", title: "Early signs of wear", text: "A light knocking sound when driving over uneven surfaces is often caused by worn silent blocks, stabilizer links, or suspension mounts. At this stage, replacing individual worn components is usually enough, without major chassis repair." },
            { marker: "2", title: "Increased play and faster wear", text: "As the car continues to be driven, play in the suspension increases, wheel alignment angles shift, and tire wear accelerates. Ball joints, control arms, and wheel bearings begin to carry extra load. After repair, 3D wheel alignment is recommended." },
            { marker: "3", title: "Reduced stability and poorer handling", text: "When suspension wear becomes severe, the car becomes less stable, braking distance increases, and vibration may appear at higher speeds. In some cases, several chassis components are damaged at the same time, making the repair more complex and more expensive." }
        ],
        engineTypesTitle: "Suspension types we service",
        engineTypes: [
            { icon: "mdi:car-cog", title: "MacPherson suspension", desc: "MacPherson is a common type of front suspension used in many vehicle classes, including Volkswagen Golf, Škoda Octavia, Ford Focus, Toyota Corolla, Hyundai Elantra, and other models. The system includes a suspension strut, spring, strut mount bearing, and lower control arm. The most common problems are worn strut mount bearings, worn control arm silent blocks, worn ball joints, and leaking shock absorbers.", brands: ["Lemförder", "TRW", "Sachs", "Bilstein"] },
            { icon: "mdi:axis-arrow", title: "Multi-link suspension", desc: "Multi-link suspension is used on BMW, Audi, Mercedes-Benz, and many mid-range and premium vehicles. It provides precise handling and a comfortable ride thanks to several independent control arms at each wheel. During diagnostics, we check for play, inspect the condition of the silent blocks, and assess the suspension geometry. After repair, we perform 3D wheel alignment.", brands: ["Lemförder", "Meyle", "TRW"] },
            { icon: "mdi:car-back", title: "Semi-independent suspension with torsion beam", desc: "This type of rear suspension is used on Volkswagen Polo, Škoda Rapid, Kia Rio, Hyundai Solaris, Renault Logan, and other B- and C-segment vehicles. It is a simple and reliable rear suspension design with a minimal number of moving parts. The most common issues are worn beam silent blocks, stabilizer bushings, and stabilizer links.", brands: ["TRW", "Lemförder", "Febi"] },
            { icon: "mdi:air-filter", title: "Air suspension", desc: "We service air suspension on Audi A6/A8/Q7, BMW 5/7 Series, Mercedes-Benz E/S-Class, Porsche Cayenne, Volkswagen Touareg, Volvo XC90, and other vehicles equipped with air suspension. We diagnose air springs, compressors, valve blocks, ride height sensors, and leaks in the air suspension system. We check how the system performs by body height, lifting speed, and residual pressure in the circuits.", brands: ["Arnott", "Dunlop", "Continental", "OEM"] }
        ],
        diagnosticsTitle: "Why suspension wears out faster in Tallinn than manufacturers expect",
        diagnosticsText: [
            "Road salt, temperature changes, tram tracks, and uneven roads after winter put extra stress on suspension components. Silent blocks, stabilizer links, ball joints, tie rod ends, and shock absorbers wear out faster as a result.",
            "After a hard impact with a pothole or curb, the suspension geometry and wheel alignment angles may change. This can cause the car to pull to one side and lead to uneven tire wear. Regular suspension diagnostics and 3D wheel alignment help detect these issues before they turn into serious faults.",
            "We recommend checking the suspension during seasonal tire changes or every 10,000 km."
        ],
        servicesListTitle: "Our suspension diagnostics and repair services",
        servicesList: [
            "Suspension diagnostics",
            "Control arm silent block replacement",
            "Control arm replacement",
            "Ball joint replacement",
            "Shock absorber replacement",
            "Wheel bearing replacement",
            "Stabilizer link and bushing replacement",
            "3D wheel alignment"
        ],
        afterListText: "The exact cost is agreed before repair begins.",
        serviceCardsTitle: "Our suspension diagnostics and repair services",
        serviceCards: [
            { featured: true, icon: "mdi:stethoscope", title: "Suspension diagnostics", desc: "A test drive, lift inspection, play check, and inspection for unusual noises. We check the condition of ball joints, tie rod ends, wheel bearings, shock absorbers, silent blocks, and suspension dust boots.", price: "€25", time: "30–45 min" },
            { icon: "mdi:axis-arrow", title: "Control arm silent block replacement", desc: "We press out the worn silent block and install a new one, tightening suspension bolts under load and according to the required torque specifications. After repair, we recommend checking the wheel alignment. This service is often performed on Volkswagen Passat, Audi A6, and Škoda Superb.", price: "from €25", time: "from 1 h" },
            { icon: "mdi:car-lifted-pickup", title: "Control arm replacement", desc: "Control arm replacement is recommended when the arm is deformed, mounting points are damaged, or several silent blocks and the ball joint are worn at the same time. After replacement, we perform 3D wheel alignment.", price: "from €40", time: "1–1.5 h" },
            { icon: "mdi:circle-outline", title: "Ball joint replacement", desc: "We replace the ball joint or the complete control arm with an integrated ball joint. After repair, we check for play and inspect the wheel alignment angles. This is a common repair on Ford Focus, BMW X5, and Volkswagen Transporter.", price: "from €35", time: "1–2 h" },
            { icon: "mdi:car-lifted-pickup", title: "Shock absorber replacement", desc: "We replace shock absorbers, strut mount bearings, dust boots, and bump stops. Shock absorbers are replaced in pairs on the same axle. After repair, we check and adjust the wheel alignment using a 3D alignment system. We frequently service suspension on Volkswagen Passat, BMW 5 Series, and Mercedes-Benz E-Class.", price: "from €90 pair", time: "1.5–2 h" },
            { icon: "mdi:circle-double", title: "Wheel bearing replacement", desc: "We replace the wheel bearing and check the condition of the mounting surfaces, brake disc, and ABS sensor. After installation, we make sure there is no play or unusual noise.", price: "from €50", time: "1.5–2 h" },
            { icon: "mdi:wrench", title: "Stabilizer link and bushing replacement", desc: "This repair eliminates knocking and play in the suspension when driving over uneven roads. The issue is especially common on Volkswagen Golf, Škoda Octavia, Ford Focus, and other cars used regularly on city roads.", price: "from €20", time: "0.5–1 h" },
            { featured: true, icon: "mdi:align-horizontal-distribute", title: "3D wheel alignment", desc: "We check and adjust wheel alignment angles using a modern 3D alignment stand. This helps restore correct suspension geometry, reduce tire wear, and improve vehicle stability. 3D wheel alignment is recommended after suspension repair and after replacing steering components.", price: "from €60", time: "1 h" }
        ],
        processTitle: "How suspension diagnostics and repair work at Mr.Car",
        processSteps: [
            { num: "01", title: "Test drive and initial diagnostics", text: "A technician performs a test drive to accurately locate knocking, vibration, and any irregularities in suspension operation. After the test drive, the chassis is inspected on a lift." },
            { num: "02", title: "Fault inspection and repair approval", text: "We check the condition of all suspension components and identify which parts need replacement. Before starting work, we agree on the cost of parts, labor, and whether 3D wheel alignment is required." },
            { num: "03", title: "Repair according to manufacturer standards", text: "We use original OEM components and high-quality aftermarket alternatives from Lemförder, Sachs, Bilstein, TRW, and other trusted brands. Threaded suspension connections are tightened in the working position of the suspension and according to the manufacturer's torque specifications." },
            { num: "04", title: "3D wheel alignment", text: "After replacing control arms, ball joints, steering components, or shock absorbers, we adjust the suspension geometry on a modern 3D alignment stand. If necessary, we adjust toe, camber, and caster, with before-and-after parameter checks." },
            { num: "05", title: "Warranty on completed work", text: "The warranty covers the work performed and the parts installed in accordance with Mr.Car service terms." }
        ],
        pricingTitle: "Suspension diagnostics and repair prices",
        pricingRows: [
            { service: "Chassis diagnostics", price: "€25", price2: "—" },
            { service: "Control arm silent block replacement", price: "€25", price2: "€50" },
            { service: "Complete control arm replacement", price: "€40", price2: "€120" },
            { service: "Ball joint replacement", price: "€35", price2: "€80" },
            { service: "Stabilizer link / bushing replacement", price: "€20", price2: "€40" },
            { service: "Shock absorber / strut replacement, pair", price: "€90", price2: "€180" },
            { service: "Wheel bearing replacement", price: "€50", price2: "€120" },
            { service: "3D wheel alignment", price: "€60", price2: "—" }
        ],
        pricingNote: "Turnkey prices apply to VW Golf / Škoda Octavia vehicles with mid-range spare parts. For BMW, Audi, and Mercedes-Benz, please check the price when booking. Air suspension is priced separately. The exact cost is agreed before repair begins.",
        reviewsTitle: "Customer reviews",
        ratingSummary: { score: "4.9", metaStrong: "Google Reviews", metaText: "based on 120+ reviews" },
        reviews: [
            { text: "“After winter, I started hearing a knocking sound from the front suspension on every pothole. I live in Kalamaja — there are tram tracks everywhere. At Mr.Car, they found the problem in half an hour: the front strut mount bearing and stabilizer link. Everything was replaced in one day. The final price matched the estimate.”", author: "Alex V.", car: "VW Golf VII, Kalamaja" },
            { text: "“My BMW F30 had steering wheel vibration at 100 km/h. I went to two other garages, and both said it was wheel balancing. Mr.Car ran diagnostics and found a worn front wheel bearing. They replaced it in one day, and the vibration disappeared completely. They also did 3D wheel alignment.”", author: "Dmitry K.", car: "BMW 320i F30, Tallinn" },
            { text: "“The tires on my Audi A4 were wearing unevenly — the inner edge was going bald much faster. It turned out that the rear control arm had been bent after hitting a pothole in Kopli. They replaced the arm and performed 3D alignment. Now the tires wear evenly.”", author: "Natalia S.", car: "Audi A4 B8, Põhja-Tallinn" }
        ],
        trustItems: [
            { icon: "mdi:shield-check", title: "12-month warranty", desc: "Written warranty on parts and completed work." },
            { icon: "mdi:car-cog", title: "Lemförder, Sachs, Bilstein, TRW", desc: "We use only trusted spare parts manufacturers." },
            { icon: "mdi:car-lifted-pickup", title: "Tightening under load", desc: "We tighten bolted suspension connections only when the car is standing on its wheels. This helps extend the service life of silent blocks." }
        ],
        faqTitle: "Frequently asked questions about suspension diagnostics and repair",
        faqItems: [
            { q: "How often should suspension be checked in Estonia?", a: "We recommend checking the suspension twice a year — during seasonal tire changes in October-November and March-April. A spring inspection is especially important: after winter, road salt and temperature changes cause silent blocks and dust boots to wear faster. Chassis diagnostics at Mr.Car cost €25." },
            { q: "Is wheel alignment necessary after replacing shock absorbers or control arms?", a: "Yes, absolutely. Any work on suspension components can change the wheel alignment geometry. A camber deviation of just 0.5° from the correct value can cause uneven tire wear within 10,000-15,000 km. 3D wheel alignment at Mr.Car starts from €60." },
            { q: "How much does ball joint replacement cost in Tallinn?", a: "Ball joint replacement on a VW Golf or Škoda Octavia starts from €80 turnkey, including parts. On a BMW 3 Series, the price starts from €120-150 turnkey. The cost depends on the suspension design: on some vehicles, the ball joint can be replaced separately; on others, it is replaced only together with the control arm." },
            { q: "How long do shock absorbers last in Estonian conditions?", a: "According to manufacturer standards, shock absorbers usually last 80,000-100,000 km. In real Tallinn driving conditions, they typically last 60,000-80,000 km because of potholes, tram tracks, and temperature changes. We replace shock absorbers in pairs on the same axle." },
            { q: "Can I drive with a worn ball joint?", a: "No. If the ball joint is critically worn, it can come out of its socket while driving. In this situation, the wheel can fold under the car and the vehicle may lose control. If play in the ball joint is found during diagnostics, the repair should not be delayed." },
            { q: "Why do tires wear unevenly?", a: "Uneven tire wear is usually caused by incorrect wheel alignment. Common causes include worn control arms or silent blocks, a bent control arm after hitting a pothole, or worn tie rod ends. The cause must be repaired first. After that, 3D wheel alignment should be performed." },
            { q: "How much does a full suspension inspection cost?", a: "Chassis diagnostics at Mr.Car cost €25. The service includes a test drive, lift inspection, play check for all joints, and assessment of shock absorbers, silent blocks, and dust boots. If repair is carried out afterward, the diagnostics cost is credited toward the work." },
            { q: "Do you service air suspension?", a: "Yes. We work with air suspension on Audi A6/A8/Q7, BMW 5/7 Series, Mercedes-Benz E/S-Class, and Volvo XC90. We diagnose leaks in air lines, check air springs and compressors, and use Arnott and Continental OEM components." }
        ],
        crossLinks: [
            { href: "/en/services/brake-pad-replacement", icon: "mdi:car-brake-alert", label: "Related service", title: "Brake repair and brake pad replacement" },
            { href: "/en/services/tire-service", icon: "mdi:tire", label: "Related service", title: "Tire service" },
            { href: "/en/services/maintenance-diagnostics", icon: "mdi:car-cog", label: "Related service", title: "Maintenance and diagnostics" }
        ],
        promoBanner: { enabled: false },
        ctaSection: {
            title: "Need suspension diagnostics?",
            text: "Book online — we will inspect the chassis, show you the critical components, and agree on the repair before work begins.",
            phoneText: "Call: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Book suspension diagnostics",
            subtitle: "Leave a request — we'll call back within 30 minutes"
        },
        jsonLdServiceDescription: "Suspension diagnostics and repair in Tallinn: shock absorbers, control arms, ball joints, silent blocks, wheel bearings, and 3D wheel alignment.",
        seo: {
            title: "Suspension Diagnostics and Repair in Tallinn | Mr.Car",
            description: "Suspension repair in Tallinn: shock absorbers, control arms, ball joints, silent blocks, wheel bearings and 3D wheel alignment. 12-month warranty."
        }
    },

    {
        key: "brake_system",
        slug: "brake-pad-replacement",
        allSlugs: { ru: "zamena-tormoznyh-kolodok", ee: "piduriklotside-vahetus", en: "brake-pad-replacement" },
        category: "Suspension & Brakes",
        navTitle: "Brakes",
        icon: "mdi:car-brake-alert",
        menuChildren: [
            { slug: "disc-brake-repair", label: "Disc brakes" },
            { slug: "drum-brake-repair", label: "Drum brakes" }
        ],
        heroTitle: "Brake repair and brake pad replacement in Tallinn",
        heroLead: "Brake repair and brake pad replacement in Tallinn: front and rear pads, discs, calipers, brake fluid, brake pipes, EPB and ABS diagnostics for disc and drum brakes.",
        heroImage: "/pics/brake-system-hero.webp",
        introTitle: "Brake service should not be delayed",
        introText: [
            "The brake system is one of the car's most important safety systems. Worn brake pads can increase braking distance by 30-40%, and gradual wear is often hard to notice in time.",
            "Mr.Car provides brake pad replacement and complete brake service: scheduled brake fluid replacement, ABS diagnostics, brake caliper repair, brake pipe work and service for both disc and drum brakes."
        ],
        symptomsTitle: "When to book brake diagnostics",
        symptoms: [
            { icon: "mdi:volume-high", text: "Squeaking or grinding when braking" },
            { icon: "mdi:vibrate", text: "Brake pedal vibration" },
            { icon: "mdi:car-brake-low-pressure", text: "Soft brake pedal" },
            { icon: "mdi:car-traction-control", text: "The car pulls to one side when braking" },
            { icon: "mdi:alert-circle", text: "ABS or ESP warning light" },
            { icon: "mdi:thermometer-alert", text: "Burning smell after driving" }
        ],
        afterSymptomsText: "If braking distance changes or the pedal feels different, book inspection before the fault damages other components.",
        servicesListTitle: "Brake services and prices:",
        servicesList: [
            "Initial brake diagnostics from 25 €",
            "Brake pad replacement from 48 €",
            "Brake disc and pad replacement from 70 €",
            "Brake caliper replacement from 65 €",
            "Brake caliper repair from 60 €",
            "Brake fluid replacement from 43 €",
            "Brake pipe fabrication and replacement from 43 €",
            "ABS and ESP diagnostics"
        ],
        afterListText: "For specific systems, see the disc brake repair and drum brake repair pages. The final price is agreed after diagnostics before repair starts.",
        promoBanner: { enabled: false },
        ctaSection: {
            title: "Need brake diagnostics?",
            text: "Squeaking, vibration, a soft pedal or an ABS warning light are not symptoms to ignore. Book a visit and we will inspect the system before repair.",
            phoneText: "Call: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Book brake pad replacement",
            subtitle: "Leave a request — we'll call back within 30 minutes"
        },
        seo: {
            title: "Brake repair and brake pad replacement in Tallinn — Mr.Car",
            description: "Brake repair and brake pad replacement in Tallinn: front and rear pads, brake discs, calipers, brake fluid, EPB and ABS diagnostics. Kopli 82a. +372 5646 1210"
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
        heroImage: "/pics/tire-service-hero.webp",
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
        navTitle: "Maintenance",
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
        key: "diagnostics",
        slug: "diagnostics",
        allSlugs: { ru: "diagnostika", ee: "diagnostika", en: "diagnostics" },
        category: "Maintenance",
        navTitle: "Diagnostics",
        icon: "mdi:car-search",
        heroTitle: "Car Diagnostics",
        heroLead: "This service page is under construction. Diagnostics information and prices will be added soon.",
        heroImage: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1400&q=80",
        introTitle: "Page under construction",
        introText: [
            "Diagnostics are now a separate service so maintenance and fault finding are clearly separated in the menu.",
            "Until the detailed page is ready, you can book diagnostics through the same request form."
        ],
        symptomsTitle: "What will this page include?",
        symptoms: [
            { icon: "mdi:engine-outline", text: "Engine diagnostics" },
            { icon: "mdi:car-cog", text: "Computer diagnostics" },
            { icon: "mdi:alert-circle", text: "Fault code reading" },
            { icon: "mdi:lightning-bolt", text: "Electrical fault checks" }
        ],
        afterSymptomsText: "The page is in development, but the service can already be requested.",
        servicesListTitle: "Planned content:",
        servicesList: [
            "Diagnostics workflow",
            "Prices and timing",
            "Common symptoms",
            "Booking recommendations"
        ],
        afterListText: "The full description will be added later.",
        promoBanner: { enabled: false },
        ctaSection: {
            title: "Need diagnostics?",
            text: "Send a request — we'll schedule a time and clarify the issue.",
            phoneText: "Call: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Book Diagnostics",
            subtitle: "Leave a request — we'll call back within 30 minutes"
        },
        seo: {
            title: "Car Diagnostics — Mr.Car Tallinn",
            description: "Car diagnostics in Tallinn. Page under construction. Kopli 82a. +372 5646 1210"
        }
    },

    {
        key: "transmission",
        slug: "transmission-repair",
        allSlugs: { ru: "remont-kpp", ee: "kaigukastiremont", en: "transmission-repair" },
        category: "Engine & Drivetrain",
        navTitle: "Gearbox Repair",
        icon: "mdi:car-shift-pattern",
        menuChildren: [
            { slug: "automatic-transmission-repair", label: "Automatic transmissions" },
            { slug: "manual-transmission-repair", label: "Manual transmissions" }
        ],
        heroTitle: "Transmission Repair",
        heroLead: "Automatic transmissions, DSG, S tronic, CVTs and manual gearboxes — we diagnose, service and repair transmissions of any complexity. Clutch and mechatronics replacement, valve body repair, fixing jerks, slipping, vibrations and limp mode. We work to factory procedures with a 12-month warranty.",
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
        heroImage: "/pics/electrical-repair-hero.webp",
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
        heroImage: "/pics/engine-repair-hero.webp",
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
        menuParentSlug: "maintenance-diagnostics",
        allSlugs: { ru: "zamena-masla", ee: "olivahetus", en: "oil-change" },
        category: "Maintenance",
        navTitle: "Oil & Filter Change",
        icon: "mdi:oil",
        heroTitle: "Oil & Filter Change",
        heroLead: "Quick oil change according to manufacturer specs with correct matching. From €45 including filter.",
        heroImage: "/pics/oil-change-hero.webp",
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
        afterListText: "Price from €45 (oil + filter). Exact cost depends on engine size and oil brand.",
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
            title: "Oil Change in Tallinn — Mr.Car | from €45",
            description: "Oil and filter change in Tallinn. Selection by manufacturer specs. Motul, Castrol, Mobil 1. From €45. Kopli 82a. +372 5646 1210"
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
        menuChildren: [
            { slug: "webasto-symptoms", label: "Webasto symptoms" }
        ],
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
        afterSymptomsText: "Webasto service before the season is the best way to avoid problems in the cold. Takes 1-2 hours.",
        afterSymptomsHtml: "Webasto service before the season is the best way to avoid problems in the cold. Takes 1-2 hours.<br><br>👉 <a href=\"/en/services/webasto-symptoms\" style=\"text-decoration: underline; font-weight: bold;\">Read more about common Webasto symptoms and error codes</a>.",
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
