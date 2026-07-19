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
        allSlugs: { ru: "remont-podveski", ee: "veermiku-remont", en: "suspension-repair" },
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
            { href: "/en/services/brake-pads-replacement", icon: "mdi:car-brake-alert", label: "Related service", title: "Brake repair and brake pads replacement" },
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
        slug: "brake-pads-replacement",
        allSlugs: { ru: "zamena-tormoznyh-kolodok", ee: "piduriklotside-vahetus", en: "brake-pads-replacement" },
        category: "Suspension & Brakes",
        navTitle: "Brakes",
        icon: "mdi:car-brake-alert",
        menuChildren: [
            { slug: "disc-brake-repair", label: "Disc brakes" },
            { slug: "drum-brake-repair", label: "Drum brakes" }
        ],
        heroTitle: "Brake repair and brake pads replacement in Tallinn",
        heroLead: "Brake repair and brake pads replacement in Tallinn: front and rear pads, discs, calipers, brake fluid, brake pipes, EPB and ABS diagnostics for disc and drum brakes.",
        heroImage: "/pics/brake-system-hero.webp",
        introTitle: "Brake service should not be delayed",
        introText: [
            "The brake system is one of the car's most important safety systems. Worn brake pads can increase braking distance by 30-40%, and gradual wear is often hard to notice in time.",
            "Mr.Car provides brake pads replacement and complete brake service: scheduled brake fluid replacement, ABS diagnostics, brake caliper repair, brake pipe work and service for both disc and drum brakes."
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
            "Brake pads replacement from 48 €",
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
            title: "Book brake pads replacement",
            subtitle: "Leave a request — we'll call back within 30 minutes"
        },
        seo: {
            title: "Brake repair and brake pads replacement in Tallinn — Mr.Car",
            description: "Brake repair and brake pads replacement in Tallinn: front and rear pads, brake discs, calipers, brake fluid, EPB and ABS diagnostics. Kopli 82a. +372 5646 1210"
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
        templateVariant: "service-deep-dive-v2",
        heroTitle: "Engine Repair in Tallinn",
        heroLead: "Diagnostics and repair for petrol and diesel engines, including internal-combustion engines in hybrid vehicles — from warning lights, overheating and oil consumption to timing drives, cylinder-head work and major mechanical repairs.",
        heroImage: "/pics/engine-repair-hero.webp",
        heroStats: [
            { value: "OBD scan + inspection", label: "Electronic fault finding supported by visual and basic mechanical checks" },
            { value: "Petrol / diesel / hybrid", label: "Engine diagnostics and repair across a broad range of powertrains" },
            { value: "Agreed repair plan", label: "We explain the findings and approve the scope before work starts" }
        ],
        localNav: [
            { href: "#symptoms", icon: "mdi:alert-circle-outline", label: "Symptoms" },
            { href: "#types", icon: "mdi:engine", label: "Engine types" },
            { href: "#diagnostika", icon: "mdi:stethoscope", label: "Diagnostics" },
            { href: "#services", icon: "mdi:wrench", label: "Repairs" },
            { href: "#process", icon: "mdi:format-list-numbered", label: "Our process" },
            { href: "#faq", icon: "mdi:frequently-asked-questions", label: "FAQ" },
            { href: "#article", icon: "mdi:book-open-variant", label: "Advice" }
        ],
        introTitle: "Engine diagnostics and repair at Mr.Car",
        introText: [
            "Engine faults rarely remain isolated. Excessive oil consumption can lead to accelerated wear, overheating can damage the head gasket and cylinder head, and an unresolved misfire may also harm the exhaust system and catalytic converter.",
            "At Mr.Car, engine repair starts with diagnosis. We identify the likely cause, explain the available repair options and agree the scope before work begins — whether the vehicle needs a targeted repair or more extensive mechanical work."
        ],
        brands: [
            "VW / Audi",
            "BMW",
            "Mercedes-Benz",
            "Toyota",
            "Honda",
            "Ford",
            "Volvo",
            "Renault / Nissan",
            "Hyundai / Kia",
            "Škoda / SEAT"
        ],
        urgencyBlock: {
            icon: "mdi:alert-decagram",
            title: "Some engine symptoms need immediate attention",
            text: "A flashing engine warning light, overheating, low oil pressure or a pronounced metallic knock can indicate a serious fault. Stop the engine when it is safe to do so and seek advice rather than risking further damage by continuing to drive."
        },
        symptomsTitle: "Signs that your engine needs attention",
        symptoms: [
            { icon: "mdi:oil", text: "Excessive oil consumption" },
            { icon: "mdi:volume-high", text: "Knocking, rattling or other unusual noises" },
            { icon: "mdi:speedometer-slow", text: "Loss of power" },
            { icon: "mdi:smoke-detector-variant", text: "Unusual exhaust smoke" },
            { icon: "mdi:thermometer-alert", text: "Engine overheating" },
            { icon: "mdi:engine-off-outline", text: "Rough or unstable idle" },
            { icon: "mdi:water-alert", text: "Oil or coolant leaks" },
            { icon: "mdi:vibrate", text: "Misfiring or excessive vibration" }
        ],
        afterSymptomsText: "If any of these symptoms appear, arrange an inspection before the fault develops further. Early diagnosis usually keeps the repair scope clearer and more manageable.",
        detailedSymptomsTitle: "When to book an engine diagnostic",
        detailedSymptoms: [
            {
                tone: "critical",
                icon: "mdi:engine-outline",
                title: "The engine warning light is on",
                desc: "If the light is flashing or the engine is running roughly, have the vehicle checked promptly. The cause may lie in the ignition or fuel system, a sensor fault or the engine’s mechanical condition."
            },
            {
                tone: "critical",
                icon: "mdi:thermometer-alert",
                title: "The engine is overheating",
                desc: "A rising temperature gauge, coolant loss or a cooling fan that runs unusually often calls for checks of the cooling system, head gasket and cylinder head."
            },
            {
                tone: "warning",
                icon: "mdi:oil",
                title: "Oil consumption or low oil pressure",
                desc: "Frequent top-ups, visible leaks or an oil-pressure warning may point to failed seals or gaskets, lubrication problems or internal engine wear."
            },
            {
                icon: "mdi:vibrate",
                title: "Misfire, vibration or rough running",
                desc: "Hesitation under acceleration and an uneven idle can be caused by ignition, fuelling or air-supply faults, but low compression can produce similar symptoms."
            },
            {
                icon: "mdi:volume-vibrate",
                title: "Knocking, rattling or timing-drive noise",
                desc: "A new noise on start-up or at idle should not be dismissed as a characteristic of the engine. It is safer to inspect the timing drive, valve train and ancillary components before damage occurs."
            },
            {
                icon: "mdi:weather-fog",
                title: "Smoke or an unusual exhaust smell",
                desc: "Blue, white or black smoke can help narrow the search to oil burning, coolant ingress, incorrect fuelling, injector trouble or a turbocharger fault."
            }
        ],
        riskStagesTitle: "What can happen when an engine fault is left unresolved",
        riskStages: [
            {
                marker: "1",
                title: "An intermittent symptom becomes persistent",
                text: "A fault that first appears only on a cold start or under load begins to affect the car more often and in normal driving."
            },
            {
                marker: "2",
                title: "Related systems are affected",
                text: "A relatively small engine fault can place extra strain on the catalytic converter, turbocharger, cooling system, exhaust or ancillary equipment."
            },
            {
                marker: "3",
                title: "The repair becomes more involved",
                text: "Once the fault reaches the cylinder head, cylinders or timing drive, both the repair time and the likely cost increase. Diagnosing the cause early is usually the better option."
            }
        ],
        engineTypesTitle: "Engine types we work with",
        engineTypes: [
            {
                icon: "mdi:fuel",
                title: "Petrol engines",
                desc: "Naturally aspirated and turbocharged engines: ignition, oil consumption, timing drives, cooling, intake systems and engine-management sensors.",
                brands: ["TSI / TFSI", "BMW N20 / B48", "M270 / M274", "EcoBoost", "Toyota 2ZR"]
            },
            {
                icon: "mdi:gas-station",
                title: "Diesel engines",
                desc: "Common-rail injection, EGR, DPF, turbocharging, timing belt and chain drives, injectors and compression-related faults.",
                brands: ["2.0 / 3.0 TDI", "BMW N47 / B47", "OM651 / OM654", "dCi", "TDCi"]
            },
            {
                icon: "mdi:battery-charging",
                title: "Hybrid powertrains",
                desc: "Work on the combustion engine within a hybrid powertrain, including mechanical repairs, cooling, ignition and servicing. High-voltage system repairs are outside this service scope.",
                brands: ["Toyota Hybrid", "Lexus Hybrid", "BMW iPerformance", "Kia / Hyundai HEV"]
            }
        ],
        diagnosticsTitle: "Accurate diagnosis comes before parts replacement",
        diagnosticsText: "A warning light or drivability symptom does not identify the failed component by itself. We combine electronic fault finding, relevant measurements and a visual inspection to establish the underlying cause rather than treating only the symptom.",
        diagnosticsChecklist: [
            "Read diagnostic trouble codes and assess live engine data",
            "Check ignition, fuel delivery and relevant engine-management sensors",
            "Measure compression and assess the engine’s basic mechanical condition where required",
            "Inspect for oil, coolant and vacuum leaks and check the cooling system",
            "Inspect the timing drive, ancillary components and the source of unusual noises",
            "Explain the findings clearly and agree the appropriate next step"
        ],
        servicesListTitle: "Our engine repair services:",
        servicesList: [
            "Engine diagnostics and fault finding",
            "Engine oil and filter replacement",
            "Timing belt and timing chain replacement",
            "Head-gasket replacement and cylinder-head work",
            "Piston, cylinder and internal engine repairs",
            "Valve-train repairs",
            "Related turbocharger, boost and intake-system work",
            "Engine mounts and ancillary components"
        ],
        afterListText: "The work required depends on the cause of the fault. If inspection or strip-down reveals more than one viable repair route, we set out the options separately and explain the difference before proceeding.",
        serviceCardsTitle: "Engine work we carry out",
        serviceCards: [
            {
                featured: true,
                icon: "mdi:stethoscope",
                title: "Engine diagnostics",
                desc: "Initial assessment of fault codes, live data and reported symptoms, followed by a clear recommendation for the next step.",
                time: "typically 1–2 hours"
            },
            {
                icon: "mdi:oil",
                title: "Engine oil and filters",
                desc: "Routine engine servicing with vehicle-specific oil and filter selection, followed by checks of fluid levels and leaks.",
                time: "often completed the same day"
            },
            {
                featured: true,
                icon: "mdi:sync",
                title: "Timing belt and timing chain",
                desc: "Inspection and replacement of timing-drive components, with the parts package and any related work agreed in advance.",
                time: "depends on engine and scope"
            },
            {
                icon: "mdi:layers-outline",
                title: "Head gasket and cylinder-head work",
                desc: "Overheating diagnosis, cylinder-head removal and refitting, checks for distortion and the associated repair work.",
                time: "confirmed after inspection"
            },
            {
                icon: "mdi:piston",
                title: "Internal engine repairs",
                desc: "Mechanical repairs for excessive oil consumption, low compression, knocking or wear affecting the pistons, rings and cylinder bores.",
                time: "assessed individually"
            },
            {
                icon: "mdi:turbocharger",
                title: "Boost and intake-system work",
                desc: "Fault finding and related repairs for smoke, loss of power and air- or oil-supply issues on turbocharged engines.",
                time: "following diagnosis"
            }
        ],
        processTitle: "How the repair process works",
        processSteps: [
            {
                num: "01",
                title: "Vehicle check-in and symptom review",
                text: "We record the concern, ask when and under what conditions it occurs, and review the available service history."
            },
            {
                num: "02",
                title: "Diagnosis and fault confirmation",
                text: "We use inspection and relevant measurements to confirm the fault instead of relying on assumptions."
            },
            {
                num: "03",
                title: "Repair plan and approval",
                text: "We explain what needs attention now, what may be deferred and which repair options are available before agreeing the scope."
            },
            {
                num: "04",
                title: "Repair and final checks",
                text: "After the work, we check start-up and running, stored fault codes, fluid levels and leaks, and engine behaviour under the relevant conditions."
            }
        ],
        promoBanner: {
            enabled: false
        },
        trustItems: [
            {
                icon: "mdi:shield-check",
                title: "Diagnosis first",
                desc: "We do not recommend extensive engine work without evidence of the underlying fault."
            },
            {
                icon: "mdi:clipboard-text-clock",
                title: "Scope agreed in advance",
                desc: "Before work begins, we discuss the planned repair, the risks and what further strip-down may reveal."
            },
            {
                icon: "mdi:car-wrench",
                title: "One workshop",
                desc: "Diagnostics, routine servicing and most engine repairs can be handled in one place."
            }
        ],
        faqTitle: "Frequently asked questions",
        faqItems: [
            {
                q: "What should I do if the engine warning light comes on?",
                a: "If the light is flashing, the engine is misfiring or the car has lost power, arrange a diagnostic promptly and avoid unnecessary driving. The cause may be a sensor, but it may also involve the ignition, fuel system or an internal mechanical fault."
            },
            {
                q: "Can I keep driving if the engine is overheating?",
                a: "If the temperature continues to rise, especially when a red warning appears, stop safely and switch the engine off. Continuing to drive can quickly damage the head gasket, cylinder head and cooling system."
            },
            {
                q: "Why is my engine using oil?",
                a: "Possible causes include an external leak, worn seals, a crankcase-ventilation fault, the turbocharger or internal engine wear. Diagnosis is needed before deciding which components require attention."
            },
            {
                q: "When should the timing belt or timing chain be replaced?",
                a: "The interval is specific to the engine and the manufacturer’s schedule. If the maintenance history is incomplete or the timing drive has become noisy, have the system inspected rather than relying on a generic mileage figure."
            },
            {
                q: "How long does engine repair take?",
                a: "An initial diagnostic assessment will often take one to two hours. The repair time then depends on the work required, parts availability and whether the engine or cylinder head needs to be dismantled."
            },
            {
                q: "Is it better to repair the engine or replace it?",
                a: "That decision should follow diagnosis and, where necessary, strip-down. A targeted repair may be sensible when damage is localised; with extensive internal wear, it is worth comparing the cost and risks of repair with a replacement unit."
            }
        ],
        article: {
            title: "How to protect your engine in urban driving",
            sections: [
                {
                    heading: "Why city use can be hard on an engine",
                    paragraphs: [
                        "Short journeys, repeated cold starts, traffic and limited motorway running can be more demanding than the mileage suggests. The engine oil spends less time at full operating temperature, while the intake and exhaust systems often work in less favourable conditions.",
                        "If most journeys are made around town, service intervals should reflect the way the car is actually used rather than only the longest interval shown in the maintenance schedule."
                    ]
                },
                {
                    heading: "What to monitor between services",
                    paragraphs: [
                        "Check the engine-oil and coolant levels regularly, and pay attention to new smells, smoke, vibration or mechanical noise. A small leak or a change in starting behaviour can be an early indication of a fault that is easier to address before it develops."
                    ]
                },
                {
                    heading: "When to arrange an unscheduled check",
                    paragraphs: [
                        "Book an inspection if the engine warning light comes on, the engine begins to misfire or overheat, oil consumption increases or performance changes noticeably. Finding the cause early may allow a more targeted repair."
                    ]
                },
                {
                    columns: [
                        {
                            title: "Good habits",
                            items: [
                                "Check fluid levels every few weeks",
                                "Replace service items at the appropriate interval",
                                "Note when and under what conditions a symptom occurs"
                            ]
                        },
                        {
                            title: "Book an inspection promptly",
                            items: [
                                "A new metallic knock or rattle",
                                "Persistent white or blue exhaust smoke",
                                "Repeated overheating or a noticeable loss of power"
                            ]
                        }
                    ]
                }
            ]
        },
        articleSchema: {
            headline: "Engine repair in Tallinn: diagnostics, warning signs and maintenance",
            description: "When to arrange engine diagnostics, the repairs Mr.Car carries out and why warning signs should not be ignored."
        },
        crossLinks: [
            {
                href: "/en/services/timing-belt-chain-replacement",
                icon: "mdi:sync",
                label: "Related service",
                title: "Timing belt and timing chain replacement"
            },
            {
                href: "/en/services/transmission-repair",
                icon: "mdi:car-shift-pattern",
                label: "Related service",
                title: "Transmission repair"
            },
            {
                href: "/en/services/maintenance-diagnostics",
                icon: "mdi:car-cog",
                label: "Related service",
                title: "Vehicle maintenance and diagnostics"
            },
            {
                href: "/en/services/oil-change",
                icon: "mdi:oil",
                label: "Related service",
                title: "Engine oil and filter change"
            }
        ],
        ctaSection: {
            title: "Is your engine showing signs of trouble?",
            text: "Book an engine diagnostic. We will assess the symptoms, explain the likely cause and set out a clear repair plan.",
            phoneText: "Call: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Book engine diagnostics or repair",
            subtitle: "Leave a request — we'll call back within 30 minutes"
        },
        jsonLdServiceDescription: "Engine diagnostics and repair in Tallinn for warning lights, overheating, oil consumption, timing-drive faults, cylinder-head work and other mechanical engine problems.",
        seo: {
            title: "Engine Diagnostics & Repair in Tallinn — Mr.Car",
            description: "Engine diagnostics and repair in Tallinn for warning lights, overheating, oil consumption, timing drives and cylinder-head faults. Kopli 82a."
        }
    },

    {
        key: "timing_belt_chain",
        slug: "timing-belt-chain-replacement",
        menuParentSlug: "engine-repair",
        allSlugs: { ru: "zamena-remnya-cepi-grm", ee: "hammasrihma-ja-keti-vahetus", en: "timing-belt-chain-replacement" },
        category: "Engine & Drivetrain",
        navTitle: "Timing Belt & Chain",
        icon: "mdi:sync",
        templateVariant: "service-deep-dive-v2",
        heroTitle: "Timing Belt & Chain Replacement in Tallinn",
        heroLead: "We diagnose and service timing belt and timing chain drives. We select the correct kit by VIN or registration number, agree the scope of work in advance, and perform the replacement according to the manufacturer’s requirements.",
        heroImage: "/pics/timing-belt-chain-crankshaft-hero.webp",
        extraStyles: ["/services/timing-belt-chain.css?v=1"],
        heroStats: [
            { value: "Timing drive", label: "We identify the system type — belt or chain — and select the correct kit for the specific engine" },
            { value: "Rollers and tensioners", label: "We inspect drive components that affect service life, tension and stable timing system operation" },
            { value: "VIN / registration lookup", label: "We confirm the engine, specification and required parts before work begins" }
        ],
        localNav: [
            { href: "#symptoms", icon: "mdi:alert-circle-outline", label: "Symptoms" },
            { href: "#types", icon: "mdi:engine", label: "Belt or chain" },
            { href: "#diagnostika", icon: "mdi:stethoscope", label: "Diagnostics" },
            { href: "#services", icon: "mdi:wrench", label: "What's included" },
            { href: "#process", icon: "mdi:format-list-numbered", label: "How we work" },
            { href: "#pricing", icon: "mdi:clipboard-text-clock", label: "Cost" },
            { href: "#faq", icon: "mdi:frequently-asked-questions", label: "FAQ" }
        ],
        introTitle: "Timing belt and chain replacement at Mr.Car",
        introText: [
            "The timing system ensures precise synchronization between the crankshaft and camshafts. Stable engine operation directly depends on the condition of the timing belt or chain, tensioners, rollers and guides.",
            "A worn belt, stretched chain or faulty tensioner can disrupt valve timing. As a result, the engine may become difficult to start, run unevenly, lose power or suffer serious mechanical damage.",
            "At Mr.Car, the work begins with a vehicle inspection and confirmation of the engine details. We select the timing kit using the vehicle's registration number, take the service history into account and agree the work scope with the customer in advance. When necessary, the rollers, tensioners, guides, oil seals and water pump are replaced together with the belt or chain.",
            "Scheduled timing belt or chain replacement is controlled maintenance. It is almost always more sensible than repairing an engine after a broken belt, a jumped chain or damage to the valve train."
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
            title: "Do not postpone a timing drive inspection",
            text: "If metallic noise appears during a cold start, the Check Engine light is on, there are valve timing faults, the service history is unknown or the mileage is approaching the timing service interval, the timing drive should be checked in advance. A broken belt or jumped chain can damage the valves, pistons and cylinder head."
        },
        symptomsTitle: "When should the timing drive be checked?",
        symptoms: [
            { icon: "mdi:counter", text: "Service mileage is approaching" },
            { icon: "mdi:calendar-clock", text: "Belt is several years old" },
            { icon: "mdi:volume-vibrate", text: "Noise or rattle on startup" },
            { icon: "mdi:engine-outline", text: "Cam timing Check Engine faults" },
            { icon: "mdi:vibrate", text: "Uneven engine operation" },
            { icon: "mdi:oil", text: "Oil traces near the belt" },
            { icon: "mdi:file-search-outline", text: "Unknown service history" }
        ],
        afterSymptomsText: "Some symptoms can also come from accessory drive components, ignition, fuel system or sensors. That is why we confirm the cause before replacing parts.",
        detailedSymptomsTitle: "Signs of timing belt or chain wear",
        detailedSymptoms: [
            {
                tone: "critical",
                icon: "mdi:volume-vibrate",
                title: "Metallic noise on cold start",
                desc: "A brief rattle after startup may indicate a stretched chain or worn tensioner or guides. This symptom should be checked before the noise becomes constant."
            },
            {
                tone: "critical",
                icon: "mdi:engine-outline",
                title: "Check Engine and timing faults",
                desc: "Camshaft and crankshaft synchronization faults may be related to a stretched chain, a jumped timing drive, incorrect tensioner operation or shaft position sensors."
            },
            {
                tone: "warning",
                icon: "mdi:counter",
                title: "Mileage or age is close to the service interval",
                desc: "A timing belt is replaced according to both mileage and service life. Even with low mileage, the material loses elasticity over time."
            },
            {
                tone: "warning",
                icon: "mdi:file-search-outline",
                title: "Unknown service history",
                desc: "If there is no proof of timing service after purchasing the vehicle, the timing drive should be inspected separately, especially before a long journey or intensive use."
            },
            {
                icon: "mdi:vibrate",
                title: "Uneven running and hard starting",
                desc: "Valve timing problems may appear as vibration, long starting times, unstable engine operation and hesitation during acceleration."
            },
            {
                icon: "mdi:speedometer-slow",
                title: "Loss of power and increased fuel consumption",
                desc: "Incorrect timing drive synchronization can reduce engine efficiency. The vehicle accelerates more slowly, loses power and consumes more fuel."
            },
            {
                icon: "mdi:sync-alert",
                title: "Visible timing belt wear",
                desc: "Cracks, delamination, wear marks or damaged belt teeth are reasons not to postpone replacement. This kind of wear often means the part is near the end of its service life."
            },
            {
                icon: "mdi:oil-level",
                title: "Traces of oil or coolant",
                desc: "Oil or coolant in the timing area shortens the life of the belt, rollers and tensioners. The cause of the leak must be repaired before installing a new kit."
            },
            {
                icon: "mdi:volume-high",
                title: "Unusual sound from the timing drive area",
                desc: "Whistling, humming or grinding from the drive area may indicate a worn roller, tensioner, bearing or incorrect belt tension. The assembly should be diagnosed in this case."
            }
        ],
        riskStagesTitle: "What happens if timing belt or chain replacement is delayed",
        riskStages: [
            {
                marker: "1",
                title: "Related components wear faster",
                text: "Rollers, tensioners, guides and the water pump may be operating at their limit even while the belt or chain is still functional. The longer service is postponed, the greater the load on the entire timing drive."
            },
            {
                marker: "2",
                title: "Valve timing synchronization is disrupted",
                text: "A stretched chain, worn belt or incorrect tension can cause timing faults, unstable engine operation, hard starting, vibration and loss of power."
            },
            {
                marker: "3",
                title: "The risk of expensive engine repairs increases",
                text: "A broken belt or jumped chain can damage the valves, pistons and cylinder head. Scheduled timing kit replacement is usually considerably less expensive than repairing the engine after a timing drive failure."
            }
        ],
        engineTypesTitle: "Timing belt, timing chain and accessory belt — what is the difference",
        engineTypes: [
            {
                icon: "mdi:sync",
                title: "Timing belt",
                desc: "The timing belt synchronizes the crankshaft and camshafts. It is replaced according to the manufacturer's service schedule, with both mileage and service life taken into account. The rollers, tensioner, oil seals and water pump are checked together with the belt if the pump is driven by the timing system.",
                brands: ["Manufacturer's service schedule", "Timing kit", "Rollers and tensioner", "Water pump if necessary"]
            },
            {
                icon: "mdi:link-variant",
                title: "Timing chain",
                desc: "The timing chain is designed for long service, but it also wears. Chain stretch and wear of the tensioner or guides can cause startup noise, valve timing faults and unstable engine operation. When these symptoms appear, the chain drive requires separate diagnostics.",
                brands: ["Tensioner", "Chain guides", "Startup noise", "Timing faults"]
            },
            {
                icon: "mdi:cog-outline",
                title: "Accessory belt",
                desc: "The accessory belt drives the alternator, air-conditioning compressor and other auxiliary components. It does not synchronize engine operation and is serviced separately from the timing belt or chain. Its condition is checked for wear, cracks, noise, tension and correct operation of the related components.",
                brands: ["Alternator", "Air conditioning", "Accessory equipment", "Separate inspection"]
            }
        ],
        diagnosticsTitle: "Timing drive diagnostics before replacement",
        diagnosticsText: [
            "Before replacement, it is important to determine which components actually require service. The same symptom may be related to the belt, chain, roller, tensioner, sensor, an oil leak or accessory equipment.",
            "We confirm the vehicle details, engine, mileage, symptoms and service history. After the inspection, we agree the parts kit, work scope and schedule before repairs begin."
        ],
        diagnosticsChecklist: [
            "VIN or registration number, engine and mileage",
            "Service history and last timing belt or chain replacement",
            "Condition of the belt, rollers, tensioner and potential leak areas",
            "Chain and guide noise and timing faults",
            "Need to replace the water pump, oil seals and related components",
            "Agreement on parts, schedule and work scope"
        ],
        servicesListTitle: "What the work includes:",
        servicesList: [
            "Timing kit selection for the vehicle and engine",
            "Timing belt replacement",
            "Timing chain replacement",
            "Roller, tensioner, guide and shoe replacement by condition",
            "Water pump inspection or replacement if it is linked to the timing drive",
            "Timing mark, tension and manual engine rotation check before test run"
        ],
        afterListText: "The scope depends on the specific engine. We do not promise one price for every car: first we confirm the registration number, engine and the required kit.",
        serviceCardsTitle: "What we do",
        serviceCards: [
            {
                icon: "mdi:sync",
                title: "Timing belt kit replacement",
                desc: "We select the correct kit for the specific engine and replace the belt, rollers and tensioner. We check the timing marks, oil seal condition and water pump if it is driven by the timing system.",
                time: "according to the manufacturer's schedule"
            },
            {
                icon: "mdi:link-variant",
                title: "Timing chain drive service",
                desc: "We diagnose startup noise and timing faults and inspect the chain, tensioner, guides and related components. The work scope is agreed after inspection and parts selection.",
                time: "according to diagnostic results"
            },
            {
                icon: "mdi:stethoscope",
                title: "Timing drive diagnostics",
                desc: "Before replacement, we check startup noise, uneven engine operation, Check Engine faults, mileage, VIN or registration number and service history.",
                time: "before work begins"
            },
            {
                icon: "mdi:water",
                title: "Water pump and related components",
                desc: "When access is open, we assess the water pump, oil seals, rollers, tensioners and signs of possible leaks. If necessary, replacement of related components is agreed in advance.",
                time: "according to component condition"
            }
        ],
        processTitle: "How the work is carried out",
        processSteps: [
            {
                num: "01",
                title: "Vehicle data",
                text: "We confirm the VIN or registration number, engine, mileage, symptoms and date of the last timing service."
            },
            {
                num: "02",
                title: "Diagnostics and parts selection",
                text: "We check the drive type, condition of accessible components, possible noises, leaks and timing faults. We select the correct kit for the specific engine."
            },
            {
                num: "03",
                title: "Work scope approval",
                text: "We explain which parts must be replaced immediately, what depends on the condition found after disassembly, how long the work will take and which parts will be required."
            },
            {
                num: "04",
                title: "Replacement and inspection",
                text: "We perform the replacement, check the timing marks and tension, and rotate the engine by hand to verify the timing. After assembly, we start the engine and check its operation."
            }
        ],
        pricingTitle: "How the cost is calculated",
        pricingRows: [
            { service: "Diagnostics and kit confirmation", price: "Calculated for the specific vehicle" },
            { service: "Timing belt replacement", price: "After confirming the engine and parts kit" },
            { service: "Timing chain replacement", price: "After diagnostics and assessment of the work scope" },
            { service: "Water pump, rollers, tensioners and oil seals", price: "Based on component condition and engine design" }
        ],
        pricingNote: "For a more accurate estimate, send the vehicle's VIN or registration number, mileage and information about the last timing service. We will confirm the engine, select the correct parts kit and agree the work scope before repairs begin.",
        trustItems: [
            {
                icon: "mdi:car-search",
                title: "Inspection first",
                desc: "We do not replace parts blindly when a symptom may be related to another component. We first identify the cause and then propose a solution."
            },
            {
                icon: "mdi:clipboard-text-clock",
                title: "Agreement before work begins",
                desc: "We discuss the parts kit, related components, schedule and work scope with the customer in advance."
            },
            {
                icon: "mdi:shield-check",
                title: "We inspect the entire timing drive",
                desc: "We inspect not only the belt or chain, but also rollers, tensioners, guides, oil seals and any signs of leaks."
            },
            {
                icon: "mdi:target",
                title: "Timing mark and phase accuracy",
                desc: "Correct locking, precise phase alignment and post-assembly checks are essential when working on the timing system. Approximate installation is unacceptable."
            },
            {
                icon: "mdi:card-account-details-outline",
                title: "Selection by VIN / registration number",
                desc: "Before work begins, we confirm the engine, specification and correct parts kit to avoid selection errors."
            },
            {
                icon: "mdi:check-decagram",
                title: "Post-assembly inspection",
                desc: "After replacement, we check startup, engine operation, absence of unusual noises and that the work has been completed correctly."
            }
        ],
        faqTitle: "Frequently Asked Questions",
        faqItems: [
            {
                q: "When should a timing belt be replaced?",
                a: "Timing belt inspection and scheduled replacement should be considered from around 60,000 km. Some engines have a longer manufacturer interval, but the exact schedule always depends on the manufacturer, engine type, belt age, operating conditions and vehicle service history. If there is no proof of the last replacement, the belt is around five years old, there are oil traces, cracks or noises, or the car was recently purchased, the timing drive should be checked in advance."
            },
            {
                q: "Does a timing chain need to be replaced?",
                a: "A timing chain usually lasts longer than a belt and does not always have a fixed replacement interval. However, it still wears: chain stretch and worn tensioners or guides can cause metallic noise on startup, timing faults and uneven engine operation. Timing chain inspection is especially relevant from 150,000 km, or earlier if there are unusual noises, Check Engine faults or uneven engine operation."
            },
            {
                q: "Can I keep driving if the chain rattles on startup?",
                a: "Diagnostics should not be delayed. A brief metallic noise on startup may be caused by chain stretch, worn tensioners or guides, or insufficient oil pressure at the moment of startup. Continuing to drive with this symptom increases the risk of the chain jumping, incorrect valve timing and serious engine damage."
            },
            {
                q: "Should the water pump be replaced with the timing belt?",
                a: "If the water pump is driven by the timing belt or becomes accessible during disassembly, it is often sensible to replace it together with the timing kit. This avoids repeated disassembly and reduces the risk of leaks after a new belt is installed. The final decision depends on the engine design, mileage, condition of the pump and oil seals, and any signs of leakage."
            },
            {
                q: "Can only the belt be replaced without rollers and the tensioner?",
                a: "Technically, it is sometimes possible to replace only the belt, but in most cases it is better to replace the complete timing kit. Rollers, the tensioner and other components work together with the belt and also wear out. Keeping old rollers or the tensioner can shorten the life of the new belt and increase the risk of repeat repairs."
            },
            {
                q: "Can the cost be confirmed in advance?",
                a: "A preliminary estimate can be calculated after confirming the VIN or registration number, engine, mileage and service history. The final cost depends on the parts kit, engine design, access to the timing drive and whether related components also need replacement. Before work begins, we agree the parts kit, work scope, schedule and next steps of the repair with the customer."
            },
            {
                q: "How does a timing belt differ from an accessory belt?",
                a: "The timing belt synchronizes the crankshaft and camshafts inside the engine. The accessory belt drives the alternator, air-conditioning compressor and other external components. These are different systems, different belts and different types of service."
            },
            {
                q: "What should I do if I do not know when the timing drive was last replaced?",
                a: "It is best to start with a vehicle inspection and service history check. If there is no proof of replacement, the vehicle was recently purchased, the mileage is uncertain or the belt may be several years old, it is safer to inspect the timing drive in advance and schedule replacement if necessary."
            },
            {
                q: "How long does timing belt or chain replacement take?",
                a: "The time required depends on the engine, vehicle design and access to the timing drive. Timing belt replacement usually takes from several hours to one working day. Timing chain work is often more complex and may take longer. The exact time is best confirmed after identifying the vehicle and selecting the parts."
            },
            {
                q: "Why is it better to have timing drive replacement performed at a workshop?",
                a: "Timing work requires precise shaft locking, correct alignment of the timing marks, proper tension and post-assembly checks. An installation error can cause uneven engine operation, timing faults, valve damage or repeat repairs."
            }
        ],
        article: {
            title: "Important to know before timing drive replacement",
            sections: [
                {
                    heading: "If service history is unknown",
                    paragraphs: [
                        "After buying a used car, you should not rely solely on the previous owner's verbal confirmation. If there are no documents proving timing belt or chain replacement, the timing drive should be inspected separately.",
                        "This is especially important on engines where a broken belt or jumped chain can damage the valves, pistons and cylinder head."
                    ]
                },
                {
                    heading: "Why the complete kit is replaced instead of one part",
                    paragraphs: [
                        "The service life of a timing belt or chain does not depend only on the belt or chain itself. Rollers, the tensioner, guides, oil seals and the water pump, when linked to the timing drive, all affect its operation.",
                        "Leaving a worn related component in place can shorten the life of the new kit or require the assembly to be dismantled again."
                    ],
                    columns: [
                        {
                            title: "Check in advance",
                            items: [
                                "Vehicle VIN or registration number",
                                "Mileage and service history",
                                "Date of the last timing service",
                                "Startup noise and cam timing faults"
                            ]
                        },
                        {
                            title: "Do not delay",
                            items: [
                                "Metallic noise or rattle on startup",
                                "Oil or coolant traces in the timing area",
                                "Unknown date of the last replacement",
                                "Check Engine faults related to valve timing"
                            ]
                        }
                    ]
                },
                {
                    heading: "Why timing marks and a manual rotation check matter",
                    paragraphs: [
                        "Timing drive replacement involves more than simply fitting a new belt or chain. The shafts must be locked correctly, the timing marks aligned, the tension checked and the engine rotated by hand before the first startup.",
                        "This check confirms that the valve timing is set correctly, the drive rotates without unnecessary resistance and all components are installed properly. It reduces the risk of post-assembly errors and repeat repairs."
                    ]
                }
            ]
        },
        articleSchema: {
            headline: "Timing belt and chain replacement in Tallinn: when diagnostics are needed and what the work includes",
            description: "How to tell if a timing belt or timing chain needs inspection, why related parts matter and how replacement works at Mr.Car."
        },
        crossLinks: [
            { href: "/en/services/engine-repair", icon: "mdi:engine", label: "Related service", title: "Engine Repair" },
            { href: "/en/services/diagnostics", icon: "mdi:car-search", label: "Related service", title: "Vehicle Diagnostics" },
            { href: "/en/services/pre-purchase-inspection", icon: "mdi:file-search-outline", label: "Related service", title: "Pre-purchase Inspection" }
        ],
        form: {
            title: "Book Timing Belt or Chain Replacement",
            subtitle: "Leave a request — we will confirm the vehicle, engine and required parts kit"
        },
        jsonLdServiceDescription: "Timing belt and timing chain diagnostics and replacement in Tallinn: kit selection, rollers, tensioners, guides and water pump when needed.",
        seo: {
            title: "Timing Belt & Chain Replacement in Tallinn — Mr.Car",
            description: "Timing belt and timing chain replacement in Tallinn: diagnostics, rollers, tensioners and water pump when needed. Mr.Car, Kopli 82a."
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
        templateVariant: "service-deep-dive-v2",
        heroTitle: "Engine Oil & Filter Change in Tallinn",
        heroLead: "Engine oil and filter replacement in Tallinn, with oil and parts selected to meet the vehicle manufacturer’s requirements. We replace the engine oil, oil filter, air filter, cabin filter and fuel filter as specified in the vehicle’s service schedule. Once the work is complete, we check the oil level and for leaks, reset the service interval and attach a service sticker showing the date and mileage for the next oil change.",
        heroImage: "/pics/oil-change-hero.webp",
        heroStats: [
            { value: "€50", label: "Engine oil and oil filter replacement. Approx. 1 hour." },
            { value: "€70", label: "Engine oil and all service filters. Approx. 1.5 hours." },
            { value: "Selected by VIN", label: "Oil and filters matched to the manufacturer’s requirements" }
        ],
        localNav: [
            { href: "#symptoms", icon: "mdi:calendar-alert", label: "When to change" },
            { href: "#types", icon: "mdi:air-filter", label: "Filter guide" },
            { href: "#diagnostika", icon: "mdi:oil-temperature", label: "Oil selection" },
            { href: "#services", icon: "mdi:format-list-checks", label: "Service options" },
            { href: "#process", icon: "mdi:timeline-check-outline", label: "Process" },
            { href: "#pricing", icon: "mdi:cash-multiple", label: "Prices" },
            { href: "#faq", icon: "mdi:frequently-asked-questions", label: "FAQ" }
        ],
        introTitle: "A proper oil change begins with choosing the right oil — not draining the old one",
        introText: [
            "Engine oil lubricates moving parts, reduces friction, carries away heat and protects internal engine components from premature wear. Its protective properties gradually deteriorate over time, so it should be changed at the intervals and to the specifications set by the vehicle manufacturer.",
            "The correct oil-change interval depends on the vehicle model, engine type, mileage and operating conditions. Frequent short journeys, urban driving, cold starts and heavy loads can shorten the oil’s service life.",
            "At Mr.Car, we select engine oil individually for each vehicle, taking into account the manufacturer’s approvals and technical requirements, engine type, exhaust after-treatment system and correct oil capacity. Where necessary, we use the VIN to confirm the correct specification.",
            "As part of the service, we change the engine oil and filters, check the oil level and for leaks, reset the service interval and attach a service sticker showing the date and mileage of the next oil change. This helps keep the engine running reliably and the vehicle serviced in accordance with the manufacturer’s requirements."
        ],
        brands: ["Audi", "BMW", "Ford", "Honda", "Hyundai", "Kia", "Mercedes-Benz", "Škoda", "Toyota", "Volkswagen", "Volvo"],
        urgencyBlock: {
            icon: "mdi:oil-level",
            title: "Red oil-pressure warning light on? Stop the engine immediately",
            paragraphs: [
                "A red oil-pressure warning light is not a routine service reminder. Pull over safely, switch off the engine and check the engine-oil level as instructed in the owner’s manual.",
                "If the oil level is correct but the warning light remains on, or if you hear unusual engine noise, do not continue driving. Running an engine with insufficient oil pressure can cause serious damage. The fault must be diagnosed; this is not a case for a routine oil change."
            ],
            link: {
                href: "/en/services/engine-repair",
                label: "Learn more about engine diagnostics and repair →"
            }
        },
        detailedSymptomsTitle: "When to change the oil or have the car checked",
        detailedSymptoms: [
            {
                icon: "mdi:counter",
                title: "The oil change is due by time or mileage",
                desc: "Follow the manufacturer’s service schedule and the interval specified for your vehicle. Regular oil changes help keep the engine running reliably and reduce wear.",
                tone: "warning"
            },
            {
                icon: "mdi:calendar-clock",
                title: "Low mileage, but the time limit has been reached",
                desc: "Engine oil gradually ages even with low annual mileage. Time, cold starts, moisture and the vehicle’s operating conditions all affect its condition."
            },
            {
                icon: "mdi:city-variant-outline",
                title: "Frequent short urban journeys",
                desc: "Frequent short journeys, stop-start traffic and trips where the engine does not fully warm up are classed as severe operating conditions and can shorten the recommended oil-change interval."
            },
            {
                icon: "mdi:history",
                title: "The service history is unknown",
                desc: "After buying a used car, we recommend changing the engine oil and filters and checking the condition of the engine, the oil level and any signs of leakage."
            },
            {
                icon: "mdi:oil-level",
                title: "The oil level keeps dropping",
                desc: "If the oil level repeatedly falls, the cause should be investigated. Topping up restores the level but does not address excessive oil consumption or a possible leak. If necessary, we can carry out diagnostic checks to identify the cause."
            },
            {
                icon: "mdi:alert-outline",
                title: "Burning smell, oil leaks or unusual noises",
                desc: "A burning smell, oil leaks or unusual noises may point to a fault in the engine or lubrication system. These symptoms call for diagnostic checks, not just an oil change.",
                link: {
                    href: "/en/services/engine-repair",
                    label: "Learn more about engine diagnostics and repair →"
                }
            }
        ],
        riskStagesTitle: "What happens when an oil service is overdue",
        riskStages: [
            {
                marker: "1",
                title: "The oil gradually loses its protective properties",
                text: "Over time, high temperatures, combustion by-products, moisture and oxidation cause engine oil to lose its protective properties, while its additive package is gradually depleted."
            },
            {
                marker: "2",
                title: "The oil filter becomes loaded with contaminants",
                text: "The oil filter traps wear particles and other contaminants, but it has a finite service life. It should therefore be replaced at every engine oil change."
            },
            {
                marker: "3",
                title: "Engine protection is reduced",
                text: "As the oil deteriorates, it becomes less effective at lubricating components and carrying away heat. This increases the risk of deposits, accelerated component wear and engine overheating."
            },
            {
                marker: "4",
                title: "The risk of expensive repairs increases",
                text: "Continuing to run the engine with degraded oil increases wear and stress on the turbocharger, timing chain system, bearing shells and other internal engine components. Timely oil changes help reduce the risk of costly repairs."
            }
        ],
        engineTypesTitle: "Which filters are replaced during a service?",
        engineTypes: [
            {
                icon: "mdi:filter-cog-outline",
                title: "Oil filter",
                desc: "Removes contaminants from the engine oil and helps protect the engine against premature wear. The oil filter is replaced at every engine oil change. Where required, we also fit a new drain-plug washer or seal.",
                brands: ["Replaced at every oil change"]
            },
            {
                icon: "mdi:air-filter",
                title: "Engine air filter",
                desc: "Cleans the air entering the engine. A dirty filter can reduce engine performance, increase fuel consumption and accelerate component wear. The replacement interval depends on the manufacturer’s service schedule and the vehicle’s operating conditions.",
                brands: ["Replaced according to schedule or condition"]
            },
            {
                icon: "mdi:car-seat-heater",
                title: "Cabin filter",
                desc: "Filters dust, pollen and other contaminants from the air entering the cabin. Replacing it at the appropriate interval helps keep the ventilation system working effectively and reduces the likelihood of the windows misting up.",
                brands: ["Standard or activated carbon"]
            },
            {
                icon: "mdi:gas-station-outline",
                title: "Fuel filter",
                desc: "Protects the fuel system from contaminants. The replacement interval and procedure depend on the vehicle’s design. On some models, the filter is integrated into the fuel pump module and cannot be replaced separately.",
                brands: ["Replaced according to the manufacturer’s service schedule"]
            },
            {
                icon: "mdi:blur",
                title: "Diesel particulate filter (DPF)",
                desc: "The DPF is not a routine service item and is not replaced as part of an engine oil change. Diesel vehicles fitted with a DPF must use engine oil that meets the relevant manufacturer approvals and is suitable for DPF-equipped engines.",
                brands: ["DPF-compatible engine oil"]
            },
            {
                icon: "mdi:car-shift-pattern",
                title: "Automatic transmission filter",
                desc: "The filter in an automatic transmission or CVT is replaced only as part of a transmission service, together with the transmission fluid. This work is not included in an engine oil change.",
                link: {
                    href: "/en/services/transmission-repair",
                    label: "Learn more about automatic transmission servicing →"
                }
            }
        ],
        diagnosticsTitle: "How we select the right engine oil and service parts",
        diagnosticsText: [
            "Two engine oils with the same viscosity grade are not necessarily suitable for the same engine. When selecting an oil, we consider the relevant manufacturer approvals, engine design, operating conditions and the vehicle manufacturer’s technical requirements.",
            {
                before: "For routine servicing, we use engine oils from reputable manufacturers that meet vehicle manufacturers’ requirements. Depending on the vehicle, we use oils from ",
                strong: "Motul, Total, Mobil, Castrol, Shell, Liqui Moly, Valvoline",
                after: " and other brands that meet the required specifications and carry the relevant manufacturer approvals."
            },
            "To select the correct service parts and prepare an estimate, simply send us the vehicle’s registration number or VIN. If necessary, we will also ask for the model, year of manufacture, engine details and information about the vehicle’s previous servicing."
        ],
        diagnosticsChecklistTitle: "When selecting the oil and service parts, we consider:",
        diagnosticsChecklist: [
            "Relevant manufacturer approvals and ACEA/API specifications",
            "Correct SAE viscosity grade for the specific engine variant",
            "Engine type, required engine oil quantity and service parts",
            "Compatibility with turbocharging, the DPF/GPF and other exhaust after-treatment systems",
            "Correct oil filter, sealing ring or sump-plug washer",
            "Manufacturer’s replacement intervals for the air, cabin and fuel filters",
            "Compatibility of any oil or parts supplied by the customer"
        ],
        serviceCardsTitle: "Service options",
        serviceCards: [
            {
                icon: "mdi:oil",
                title: "Engine oil and oil filter change",
                desc: "We change the engine oil and oil filter, replacing the sump-plug washer or seal where required. After the service, we check the oil level and for leaks, reset the service interval and fit a service sticker showing the date and mileage when the next oil change is due.",
                price: "€50",
                time: "Up to 1 hour"
            },
            {
                icon: "mdi:filter-multiple-outline",
                title: "Engine oil and all filters",
                desc: "A comprehensive service that includes changing the engine oil and the oil, air, cabin and fuel filters in line with the vehicle manufacturer’s service schedule. Afterwards, we check the oil level and for leaks, reset the service interval and fit a service sticker.",
                price: "€70",
                time: "Up to 1.5 hours"
            },
            {
                icon: "mdi:car-search-outline",
                title: "First service after buying a car",
                desc: "If the service history is unknown, we recommend starting with a basic service. We inspect the vehicle, determine the work required and provide recommendations without replacing serviceable parts unnecessarily.",
                price: "Price confirmed after a diagnostic inspection"
            },
            {
                icon: "mdi:package-variant-closed-check",
                title: "Servicing with customer-supplied oil and filters",
                desc: [
                    "You may supply your own engine oil and filters. Before work begins, we check that the oil carries the required manufacturer approval and that all supplied items are compatible with the vehicle and suitable for use.",
                    {
                        before: "Where customer-supplied oil or filters are used, the labour charge increases by ",
                        strong: "€5 per labour hour",
                        after: "."
                    }
                ],
                price: "Compatibility is checked before work begins"
            }
        ],
        processTitle: "How we carry out an oil and filter change",
        processSteps: [
            {
                num: "01",
                title: "Confirm the vehicle details",
                text: "We confirm the vehicle details, service history, current service interval and the manufacturer’s recommendations. Where necessary, we use the VIN and exact vehicle specification to identify the correct service parts and materials."
            },
            {
                num: "02",
                title: "Select the oil and filters",
                text: "We select the engine oil, filters and other service parts to meet the relevant manufacturer approvals and technical requirements for the vehicle and its engine."
            },
            {
                num: "03",
                title: "Agree the service",
                text: "Before starting work, we agree the price, scope of the service and required materials. We carry out any additional work only after it has been authorised by the vehicle owner."
            },
            {
                num: "04",
                title: "Change the oil and filters",
                text: "We change the engine oil and oil filter, replacing the sump-plug seal or sealing washer where required. As part of the comprehensive service, we also replace the air, cabin and fuel filters."
            },
            {
                num: "05",
                title: "Carry out post-service checks",
                text: "We start the engine, check the oil level, inspect for leaks and make sure the engine is running normally. We make a final adjustment to the oil level if required."
            },
            {
                num: "06",
                title: "Complete the service and hand over the vehicle",
                text: "We reset the service indicator, fit a service sticker showing the date and mileage when the next oil change is due, and hand the vehicle back with recommendations for future servicing."
            }
        ],
        pricingTitle: "Labour prices",
        pricingLead: {
            text: "Not sure which service option is right for your car? Send us the registration number or VIN and we will select the correct oil, filters and other consumables and provide an estimate in advance.",
            strong: true
        },
        pricingRows: [
            { service: "Engine oil and oil filter change", price: "€50" },
            { service: "Engine oil change with oil, air, cabin and fuel filter replacement", price: "€70" },
            { service: "Service using customer-supplied oil and filters (subject to a compatibility check)", price: "+€5/hour" }
        ],
        pricingNote: [
            {
                text: "Prices shown cover labour only. Engine oil, filters and other consumables are charged separately. We select the correct oil, filters and consumables for each vehicle in accordance with the manufacturer’s requirements and approvals.",
                strong: true
            },
            {
                text: "If we identify any additional faults or find that further work is required during the service, we will contact you and agree any additional work before it is carried out.",
                strong: true
            }
        ],
        trustItems: [
            {
                icon: "mdi:book-check-outline",
                title: "Matched to manufacturer requirements",
                desc: "We select the engine oil, filters and other consumables to meet the vehicle manufacturer’s approvals and technical requirements, rather than relying on viscosity grade alone."
            },
            {
                icon: "mdi:receipt-text-check-outline",
                title: "Costs agreed in advance",
                desc: "Before the service begins, we agree the scope of work and the cost of labour and materials. We carry out any additional work only with your approval."
            },
            {
                icon: "mdi:check-decagram-outline",
                title: "Final checks",
                desc: "After the oil change, we check the engine oil level and make sure the lubrication system is leak-free and operating correctly."
            },
            {
                icon: "mdi:car-clock",
                title: "Service reminder and sticker",
                desc: "After the service, we reset the service indicator and fit a service sticker showing the date and mileage when the next oil change is due."
            },
            {
                icon: "mdi:package-variant-closed-check",
                title: "Customer-supplied materials",
                desc: "Before using any engine oil, filters or other consumables supplied by the customer, we verify the relevant manufacturer approvals, compatibility and suitability for the specific vehicle."
            },
            {
                icon: "mdi:recycle-variant",
                title: "Responsible recycling",
                desc: "Used engine oil and filters are sent for specialist recycling in line with current environmental requirements."
            }
        ],
        faqTitle: "Frequently asked questions about oil and filter changes",
        faqItems: [
            {
                q: "How often should engine oil be changed?",
                a: "Engine oil should be changed in accordance with the vehicle manufacturer’s service schedule — by mileage or time, whichever comes first. Frequent short journeys, cold starts, stop-start traffic or heavy loads may require a shorter interval."
            },
            {
                q: "Does the engine oil still need changing if the car has low annual mileage?",
                a: "Yes. If the time-based service interval specified by the manufacturer is due, the oil change should not be postponed. Engine oil degrades over time even at low mileage, and frequent short journeys can allow moisture and fuel to build up in the oil."
            },
            {
                q: "Should the oil filter be replaced at every oil change?",
                a: "Yes. The oil filter traps wear particles and other contaminants, so it should be replaced every time the engine oil is changed. A new filter helps the fresh oil perform as intended and keeps the lubrication system clean."
            },
            {
                q: "What is included in the €50 labour charge?",
                a: [
                    "The €50 labour charge covers changing the engine oil and oil filter, replacing the sump-plug seal where required, and checking the oil level and confirming there are no leaks. The service takes up to 1 hour. ",
                    { strong: "Parts and fluids are charged separately; any workshop consumables required for the job are included in the labour price." }
                ]
            },
            {
                q: "What is included in the €70 labour charge?",
                a: [
                    "The €70 labour charge covers changing the engine oil and the oil, air, cabin and fuel filters. The service takes up to 1.5 hours. ",
                    { strong: "Parts and fluids are charged separately; any workshop consumables required for the job are included in the labour price." }
                ]
            },
            {
                q: "Are the oil and filters included in these prices?",
                a: [
                    "No. ",
                    { strong: "€50 and €70 are labour-only prices." },
                    " Engine oil and filters are charged separately and selected specifically for the vehicle in accordance with the manufacturer’s requirements. ",
                    { strong: "Any workshop consumables required for the job are included in the labour price." }
                ]
            },
            {
                q: "Can I supply my own oil and filters?",
                a: [
                    "Yes. Before the service, we check that the engine oil carries the required manufacturer approval and that the supplied filters are compatible with and suitable for the vehicle. When customer-supplied oil or filters are used, we add ",
                    { strong: "€5 per hour of labour." }
                ]
            },
            {
                q: "How do I know which engine oil is right for my car?",
                a: "The vehicle manufacturer’s approval for the specific engine is the key requirement. We also consider the SAE viscosity grade, ACEA/API specifications, operating conditions, and the requirements of the DPF, GPF and other exhaust after-treatment systems. Send us the vehicle registration number or VIN so we can select the correct oil."
            },
            {
                q: "Does dark engine oil mean it needs changing immediately?",
                a: "Not necessarily. Engine oil can darken quickly, particularly in diesel engines, because it holds combustion by-products in suspension. Whether an oil change is due should be determined from the manufacturer’s service schedule, mileage, time in service and the oil’s condition — not colour alone."
            },
            {
                q: "Can I continue driving if the red oil-pressure warning light comes on?",
                a: "No. A red oil-pressure warning light usually indicates insufficient oil pressure. Stop in a safe place, switch off the engine and check the oil level. If the light remains on after the oil level has been checked and corrected where necessary, switch off the engine immediately and do not drive any further. Have the vehicle recovered to a workshop for diagnosis."
            },
            {
                q: "Are there special oil requirements for turbocharged and diesel engines?",
                a: "Yes. Turbocharged and diesel engines must use engine oil carrying the vehicle manufacturer’s approval for the specific engine. Diesel engines fitted with a DPF also require oil with the correct specifications and ash content so that the exhaust after-treatment system can operate correctly."
            },
            {
                q: "Should the engine be flushed at every oil change?",
                a: "No. An engine flush is not a mandatory part of every oil change. Whether it is appropriate depends on the vehicle’s service history, the condition of the engine and the manufacturer’s recommendations. Flushing the engine without a clear need may not be advisable."
            },
            {
                q: "What should I do if the car’s service history is unknown?",
                a: "We recommend starting with a basic service: we check the vehicle’s condition and change the engine oil and filters. The next service interval is then counted from the date and mileage at which this service was completed."
            },
            {
                q: "How long does an oil and filter change take?",
                a: [
                    { strong: "An engine oil and oil filter change takes up to 1 hour; changing the engine oil and all filters takes up to 1.5 hours. " },
                    "The actual time depends on the vehicle’s design, whether the engine undertray has to be removed, and the agreed scope of work."
                ]
            }
        ],
        article: {
            title: "Why timely oil and filter changes matter",
            centerColumns: true,
            sections: [
                {
                    heading: "Why engine oil loses its protective properties",
                    paragraphs: [
                        "While the engine is running, the oil is exposed to high temperatures, combustion by-products, moisture and microscopic wear particles. Its protective properties gradually deteriorate, so the oil-change interval is determined not only by mileage but also by time and the vehicle’s operating conditions.",
                        "Changing the engine oil does not rectify mechanical engine faults. If the oil level drops rapidly, the engine develops unusual noises or emits smoke, or there is a burning smell, the underlying cause must be diagnosed first."
                    ]
                },
                {
                    heading: "What counts as severe operating conditions",
                    columns: [
                        {
                            title: "Urban driving",
                            items: [
                                "Short journeys without the engine reaching full operating temperature",
                                "Stop-start traffic and extended idling",
                                "Frequent cold starts"
                            ]
                        },
                        {
                            title: "Higher loads",
                            items: [
                                "Towing a trailer or carrying heavy loads",
                                "Driving on dusty roads",
                                "Operating in high ambient temperatures"
                            ]
                        },
                        {
                            title: "Seasonal conditions",
                            items: [
                                "Low temperatures and sharp temperature fluctuations",
                                "Infrequent use and long periods of inactivity",
                                "High engine hours relative to mileage"
                            ]
                        },
                        {
                            title: "Intensive use",
                            items: [
                                "Using the vehicle for taxi or delivery work",
                                "Running the engine continuously for extended periods",
                                "Regular driving at high speeds"
                            ]
                        }
                    ]
                },
                {
                    heading: "Why manufacturer approvals matter",
                    paragraphs: [
                        "SAE viscosity is only one characteristic of an engine oil. Selection also takes into account the relevant manufacturer approvals and technical requirements, as well as the engine’s design. Even oils with the same viscosity can have different properties and be intended for different types of engine.",
                        "If oil has to be topped up in an emergency, a compatible engine oil should be used. During scheduled servicing, the oil should fully meet the vehicle manufacturer’s requirements."
                    ]
                },
                {
                    heading: "Which filters are replaced with the engine oil",
                    paragraphs: [
                        "The oil filter is replaced at every engine oil change. The engine air filter, cabin filter and fuel filter have their own service intervals and are replaced in accordance with the vehicle manufacturer’s service schedule.",
                        "The diesel particulate filter (DPF) is not a routine service item. For vehicles fitted with a DPF, the engine oil must carry the relevant manufacturer approval and meet the requirements of the exhaust after-treatment system."
                    ]
                }
            ]
        },
        articleSchema: {
            headline: "Oil and filter change in Tallinn: intervals, oil selection and service process",
            description: "How to determine the engine-oil interval, select the correct approval, decide which filters to replace and understand the Mr.Car service."
        },
        crossLinks: [
            {
                href: "/en/services/maintenance-diagnostics",
                icon: "mdi:car-cog",
                label: "Scheduled servicing",
                title: "Vehicle maintenance and diagnostics"
            },
            {
                href: "/en/services/engine-repair",
                icon: "mdi:engine-outline",
                label: "If the engine uses oil or makes noise",
                title: "Engine diagnosis and repair"
            },
            {
                href: "/en/services/diagnostics",
                icon: "mdi:car-connected",
                label: "If a warning light is on",
                title: "Vehicle computer diagnostics"
            }
        ],
        ctaSection: {
            title: "Let us select the oil and filters before you arrive",
            text: "Send the registration number or VIN, model and engine — we will check the requirements, prepare a labour and materials estimate and offer an appointment.",
            phoneText: "Call: +372 5646 1210",
            phoneNumber: "+37256461210"
        },
        form: {
            title: "Book an oil and filter change",
            subtitle: "Add the vehicle number and mileage so we can select the materials accurately"
        },
        jsonLdServiceDescription: "Engine oil, oil-filter, air-filter, cabin-filter and fuel-filter replacement in Tallinn to vehicle-manufacturer requirements.",
        seo: {
            title: "Oil & Filter Change in Tallinn — Mr.Car",
            description: "Oil and filter change in Tallinn, with VIN-based selection to manufacturer specifications. Labour: oil + oil filter €50; oil + all service filters €70. VAT included."
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
