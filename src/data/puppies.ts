export interface Puppy {
    id: string;
    name: string;
    breed: string;
    src: string; // Keep for backward compatibility if needed, though we will prioritize images[0]
    images: string[]; // New array for slider
    price: number;
    originalPrice?: number; // Original price before discount
    breeder_price: number;
    originalBreederPrice?: number; // Original breeder price before discount
    discountPercentage?: number; // Discount percentage (e.g., 35 for 35%)
    status: 'Available' | 'Reserved';
    description: string;
    description_de?: string;
    ready_date: string;
    ready_date_de?: string;
    generation?: string;
    expected_weight: string;
    expected_weight_de?: string;
    serval_percentage?: string;
    personality: string;
    personality_de?: string;
    parentage: string;
    parentage_de?: string;
    included: string[];
    included_de?: string[];
    shipping: string[];
    shipping_de?: string[];
    payment: string[];
    payment_de?: string[];
}

export const puppies: Puppy[] = [
    {
        id: 'apollo',
        name: 'Apollo',
        breed: 'Cane Corso',
        src: 'Cane Corso 2 (1).jpg', // Main
        images: ['Cane Corso 2 (1).jpg', 'Cane Corso 2 (3).jpg', 'Cane Corso 2 (5).jpg', 'Cane Corso 2 (7).jpg'],
        originalPrice: 3500,
        price: 2275, // 35% off
        originalBreederPrice: 4500,
        breeder_price: 2925, // 35% off
        discountPercentage: 35,
        status: 'Available',
        description: 'Magnificent male with powerful build and striking appearance. Apollo is confident, athletic, and bonds deeply with his family.',
        description_de: 'Prächtiger Rüde mit kraftvollem Körperbau und markantem Aussehen. Apollo ist selbstbewusst, athletisch und baut eine tiefe Bindung zu seiner Familie auf.',
        ready_date: 'December 16th, 2025',
        ready_date_de: '16. Dezember 2025',
        generation: 'Purebred',
        expected_weight: '100-110 lbs (expected adult)',
        expected_weight_de: '45-50 kg (erwartet)',
        personality: 'Bold, intelligent, and extremely active. Loves outdoor play and training.',
        personality_de: 'Mutig, intelligent und extrem aktiv. Liebt das Spielen im Freien und Training.',
        parentage: 'Champion Bloodline x Working Line',
        parentage_de: 'Champion-Blutlinie x Arbeitslinie',
        included: [
            'Complete health examination by licensed veterinarian',
            'Registration papers with full pedigree',
            'Up-to-date vaccinations',
            'Deworming treatments completed',
            'Microchip identification',
            'Health guarantee (1 year genetic defects)',
            'Starter kit (food, toys, care guide)',
            'Lifetime breeder support'
        ],
        included_de: [
            'Vollständige Gesundheitsuntersuchung durch Tierarzt',
            'Registrierungspapiere mit vollem Stammbaum',
            'Aktuelle Impfungen',
            'Entwurmungskuren abgeschlossen',
            'Mikrochip-Identifikation',
            'Gesundheitsgarantie (1 Jahr auf genetische Defekte)',
            'Starter-Set (Futter, Spielzeug, Ratgeber)',
            'Lebenslange Unterstützung durch den Züchter'
        ],
        shipping: [
            'Nationwide shipping available via approved pet courier',
            'Personal delivery available (fee applies)',
            'International shipping considered',
            'All shipping costs covered by buyer',
            'Pickup available at our location (preferred)'
        ],
        shipping_de: [
            'Landesweiter Versand über geprüfte Kuriere möglich',
            'Persönliche Lieferung möglich (gegen Gebühr)',
            'Internationaler Versand möglich',
            'Versandkosten trägt der Käufer',
            'Abholung vor Ort möglich (bevorzugt)'
        ],
        payment: [
            '30% non-refundable deposit to reserve',
            'Balance due before pickup/delivery',
            'Accepted: Bank transfer, PayPal, cash',
            'Payment plans available (contact us)',
            'Deposit secures your companion until ready date'
        ],
        payment_de: [
            '30% nicht rückzahlbare Anzahlung zur Reservierung',
            'Restbetrag vor Abholung/Lieferung fällig',
            'Akzeptiert: Banküberweisung, PayPal, Barzahlung',
            'Zahlungspläne möglich (kontaktieren Sie uns)',
            'Anzahlung sichert Ihren Begleiter bis zum Abgabedatum'
        ]
    },
    {
        id: 'zeus',
        name: 'Zeus',
        breed: 'Cane Corso',
        src: 'Cane Corso (1).jpg',
        images: ['Cane Corso (1).jpg', 'Cane Corso (2).jpg', 'Cane Corso (3).jpg'],
        originalPrice: 3500,
        price: 2275,
        originalBreederPrice: 4200,
        breeder_price: 2730,
        discountPercentage: 35,
        status: 'Available',
        description: 'A gentle giant with a protective heart. Zeus is perfect for those seeking a loyal emotional support guardian.',
        description_de: 'Ein sanfter Riese mit einem schützenden Herzen. Zeus ist perfekt für diejenigen, die einen treuen emotionalen Schutzwächter suchen.',
        ready_date: 'January 10th, 2026',
        ready_date_de: '10. Januar 2026',
        expected_weight: '110-120 lbs',
        expected_weight_de: '50-55 kg',
        personality: 'Calm, observant, and deeply affectionate.',
        personality_de: 'Ruhig, aufmerksam und zutiefst anhänglich.',
        parentage: 'Titan x Luna',
        parentage_de: 'Titan x Luna',
        included: [
            'Complete health examination',
            'Vaccinations up to date',
            'Health Certificate',
            'Microchipped'
        ],
        included_de: [
            'Vollständige Gesundheitsuntersuchung',
            'Aktuelle Impfungen',
            'Gesundheitszeugnis',
            'Gechipt'
        ],
        shipping: [
            'International shipping available',
            'Pickup available'
        ],
        shipping_de: [
            'Internationaler Versand möglich',
            'Abholung möglich'
        ],
        payment: [
            'Deposit required',
            'Full payment before travel'
        ],
        payment_de: [
            'Anzahlung erforderlich',
            'Vollständige Zahlung vor Reiseantritt'
        ]
    },
    {
        id: 'daisy',
        name: 'Daisy',
        breed: 'Poodle',
        src: 'Poodle 1 (1).jpg',
        images: ['Poodle 1 (1).jpg', 'Poodle 1 (2).jpg', 'Poodle 1 (3).jpg', 'Poodle 1 (4).jpg'],
        originalPrice: 2200,
        price: 1430,
        originalBreederPrice: 2800,
        breeder_price: 1820,
        discountPercentage: 35,
        status: 'Available',
        description: 'Daisy is a bundle of joy and hypoallergenic love. Perfect for families with allergies.',
        description_de: 'Daisy ist ein Bündel voller Freude und hypoallergener Liebe. Perfekt für Familien mit Allergien.',
        ready_date: 'Available Now',
        ready_date_de: 'Ab sofort verfügbar',
        expected_weight: '45-50 lbs',
        expected_weight_de: '20-23 kg',
        personality: 'Playful, intelligent, and easy to train.',
        personality_de: 'Verspielt, intelligent und leicht zu trainieren.',
        parentage: 'Standard Poodle x Standard Poodle',
        parentage_de: 'Standardpudel x Standardpudel',
        included: [
            'Vet Check',
            'First shots',
            'De-wormed'
        ],
        included_de: [
            'Tierärztliche Untersuchung',
            'Erste Impfungen',
            'Entwurmt'
        ],
        shipping: ['Worldwide shipping'],
        shipping_de: ['Weltweiter Versand'],
        payment: ['Bank Transfer', 'Cash'],
        payment_de: ['Banküberweisung', 'Barzahlung']
    },
    {
        id: 'titan',
        name: 'Titan',
        breed: 'Cane Corso',
        src: 'Cane Corso 2 (1).jpg',
        images: ['Cane Corso 2 (1).jpg', 'Cane Corso 2 (2).jpg', 'Cane Corso 2 (3).jpg'],
        originalPrice: 3800,
        price: 2470,
        originalBreederPrice: 4800,
        breeder_price: 3120,
        discountPercentage: 35,
        status: 'Available',
        description: 'True to his name, Titan is a robust and impressive puppy with a heart of gold.',
        description_de: 'Ganz seinem Namen entsprechend ist Titan ein robuster und beeindruckender Welpe mit einem Herz aus Gold.',
        ready_date: 'February 1st, 2026',
        ready_date_de: '1. Februar 2026',
        expected_weight: '120+ lbs',
        expected_weight_de: '55+ kg',
        personality: 'Strong-willed yet gentle with family.',
        personality_de: 'Willensstark und dennoch sanft zur Familie.',
        parentage: 'Grand Champion Lineage',
        parentage_de: 'Großchampion-Linie',
        included: ['Full Health Panel', 'Passport'],
        included_de: ['Vollständiges Gesundheitspanel', 'Heimtierausweis'],
        shipping: ['Global delivery'],
        shipping_de: ['Weltweite Lieferung'],
        payment: ['Wire Transfer', 'Crypto'],
        payment_de: ['Überweisung', 'Krypto']
    },
    {
        id: 'buddy',
        name: 'Buddy',
        breed: 'Australian Shepherd',
        src: 'Australian Shepherd 1 (1).jpg',
        images: ['Australian Shepherd 1 (1).jpg', 'Australian Shepherd 1 (2).jpg', 'Australian Shepherd 1 (3).jpg'],
        originalPrice: 2500,
        price: 1625,
        originalBreederPrice: 3000,
        breeder_price: 1950,
        discountPercentage: 35,
        status: 'Available',
        description: 'The ultimate adventure buddy. High energy and even higher affection levels.',
        description_de: 'Der ultimative Abenteuerkumpel. Hohe Energie und noch höhere Zuneigung.',
        ready_date: 'Available Now',
        ready_date_de: 'Ab sofort verfügbar',
        expected_weight: '50-60 lbs',
        expected_weight_de: '22-27 kg',
        personality: 'Energetic, herding instinct, loyal.',
        personality_de: 'Energetisch, Hütetrieb, treu.',
        parentage: 'Working Aussie Lines',
        parentage_de: 'Arbeitslinien-Aussie',
        included: ['Vaccinated', 'Health Guarantee'],
        included_de: ['Geimpft', 'Gesundheitsgarantie'],
        shipping: ['Worldwide shipping'],
        shipping_de: ['Weltweiter Versand'],
        payment: ['Credit Card', 'Cash'],
        payment_de: ['Kreditkarte', 'Barzahlung']
    },
    {
        id: 'rocky',
        name: 'Rocky',
        breed: 'Australian Shepherd',
        src: 'Australian Shepherd 2 (1).jpg',
        images: ['Australian Shepherd 2 (1).jpg', 'Australian Shepherd 2 (2).jpg', 'Australian Shepherd 2 (3).jpg'],
        originalPrice: 2800,
        price: 1820,
        originalBreederPrice: 3500,
        breeder_price: 2275,
        discountPercentage: 35,
        status: 'Available',
        description: 'Rocky has a unique coat and a personality to match. He loves mental challenges.',
        description_de: 'Rocky hat ein einzigartiges Fell und eine dazu passende Persönlichkeit. Er liebt mentale Herausforderungen.',
        ready_date: 'December 20th, 2025',
        ready_date_de: '20. Dezember 2025',
        expected_weight: '55 lbs',
        expected_weight_de: '25 kg',
        personality: 'Smart, focused, eager to please.',
        personality_de: 'Schlau, fokussiert, lernwillig.',
        parentage: 'Show Quality Lineage',
        parentage_de: 'Show-Qualitätslinie',
        included: ['Puppy Starter Kit', 'Vet Records'],
        included_de: ['Welpen-Starterset', 'Tierärztliche Unterlagen'],
        shipping: ['Courier available'],
        shipping_de: ['Kurier möglich'],
        payment: ['Installments available'],
        payment_de: ['Ratenzahlung möglich']
    },
    {
        id: 'molly',
        name: 'Molly',
        breed: 'Poodle',
        src: 'Poodle 2 (1).jpg',
        images: ['Poodle 2 (1).jpg', 'Poodle 2 (2).jpg', 'Poodle 2 (3).jpg'],
        originalPrice: 2400,
        price: 1560,
        originalBreederPrice: 2900,
        breeder_price: 1885,
        discountPercentage: 35,
        status: 'Available',
        description: 'Sweet, curly, and kind. Molly is being raised with extensive socialisation.',
        description_de: 'Süß, lockig und freundlich. Molly wächst mit umfangreicher Sozialisierung auf.',
        ready_date: 'January 5th, 2026',
        ready_date_de: '5. Januar 2026',
        expected_weight: '40 lbs',
        expected_weight_de: '18 kg',
        personality: 'Gentle, social, loves cuddles.',
        personality_de: 'Sanft, sozial, liebt Kuscheln.',
        parentage: 'Moyen Poodle x Standard Poodle',
        parentage_de: 'Moyen-Pudel x Standardpudel',
        included: ['Grooming Kit', 'Health Cert'],
        included_de: ['Pflegeset', 'Gesundheitszertifikat'],
        shipping: ['Local & International'],
        shipping_de: ['Lokal & International'],
        payment: ['Deposit to hold'],
        payment_de: ['Anzahlung zum Reservieren']
    },
    {
        id: 'oliver',
        name: 'Oliver',
        breed: 'Poodle',
        src: 'Poodle 4 (1).jpg', // Assuming you have Poodle 4 images based on directory view, if not fallback to existing
        images: ['Poodle 4 (1).jpg', 'Poodle 4 (2).jpg', 'Poodle 4 (3).jpg'],
        originalPrice: 2300,
        price: 1495,
        originalBreederPrice: 2800,
        breeder_price: 1820,
        discountPercentage: 35,
        status: 'Available',
        description: 'Oliver is a thinker. He observes before he acts and bonds strongly with his person.',
        description_de: 'Oliver ist ein Denker. Er beobachtet, bevor er handelt, und baut eine starke Bindung zu seiner Person auf.',
        ready_date: 'January 15th, 2026',
        ready_date_de: '15. Januar 2026',
        expected_weight: '50 lbs',
        expected_weight_de: '22 kg',
        personality: 'Calm, intuitive, therapy prospect.',
        personality_de: 'Ruhig, intuitiv, Therapie-Aussicht.',
        parentage: 'Therapy Line Poodles',
        parentage_de: 'Therapie-Linie Pudel',
        included: ['Microchipped', 'First Vaccinations'],
        included_de: ['Gechippt', 'Erste Impfungen'],
        shipping: ['Door-to-door'],
        shipping_de: ['Tür-zu-Tür'],
        payment: ['All major methods'],
        payment_de: ['Alle gängigen Methoden']
    }
];
