"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'de';
type Currency = 'USD' | 'EUR';

interface Translations {
    [key: string]: {
        [lang in Language]: string;
    };
}

const translations: Translations = {
    "nav_home": { en: "Home", de: "Startseite" },
    "nav_available": { en: "Available Puppies", de: "Verfügbare Welpen" },
    "nav_gallery": { en: "Joy Gallery", de: "Galerie der Freude" },
    "nav_esa": { en: "ESA & Service Dog Info", de: "ESA & Assistenzhund Infos" },
    "nav_process": { en: "Process", de: "Prozess" },
    "nav_about": { en: "About Us", de: "Über uns" },
    "hero_title": { en: "Healing Hearts,", de: "Heilende Herzen," },
    "hero_subtitle": { en: "One Wag at a Time", de: "Ein Schwanzwedeln nach dem anderen" },
    "hero_desc": { en: "Professional emotional support and service dogs trained to provide comfort, companionship, and assistance. Let these gentle souls bring peace to your heart.", de: "Professionelle emotionale Unterstützungs- und Assistenzhunde, die darauf trainiert sind, Trost, Gesellschaft und Hilfe zu bieten." },
    "cta_find": { en: "Find Your Companion", de: "Finde deinen Begleiter" },
    "cta_mission": { en: "Our Mission", de: "Unsere Mission" },
    "pet_price": { en: "Pet Price", de: "Haustierpreis" },
    "breeder_price": { en: "Breeder Price", de: "Züchterpreis" },
    "christmas_special": { en: "Christmas Special", de: "Weihnachts-Special" },
    "reserve_whatsapp": { en: "Reserve via Messenger", de: "Per WhatsApp reservieren" },
    "ask_question": { en: "Ask a Question", de: "Frage stellen" },
    "shipping_delivery": { en: "Shipping & Delivery", de: "Versand & Lieferung" },
    "payment_reservation": { en: "Payment & Reservation", de: "Zahlung & Reservierung" },
    "at_a_glance": { en: "At a Glance", de: "Auf einen Blick" },
    "ready_date": { en: "Ready Date", de: "Abgabedatum" },
    "expected_weight": { en: "Expected Weight", de: "Erwartetes Gewicht" },
    "parentage": { en: "Parentage", de: "Abstammung" },
    "personality": { en: "Personality", de: "Persönlichkeit" },
    "included": { en: "What's Included", de: "Was ist enthalten" },
    "how_to_qualify": { en: "How to Qualify", de: "Wie man sich qualifiziert" },
    "benefits_title": { en: "Benefits of Having an ESA", de: "Vorteile eines ESA" },
    "faq_title": { en: "Frequently Asked Questions", de: "Häufig gestellte Fragen" },
    "contact_us_text": { en: "Contact us on our number +49 176 13564657 to get the license and start your journey with an Emotional Support Animal.", de: "Kontaktieren Sie uns unter +49 176 13564657, um die Lizenz zu erhalten und Ihre Reise mit einem Assistenztier zu beginnen." },
    "payment_bank_transfer": { en: "Bank Transfer", de: "Banküberweisung" },
    "payment_wise": { en: "Wise (formerly TransferWise)", de: "Wise (ehemals TransferWise)" },
    "payment_crypto": { en: "Cryptocurrency (BTC, ETH, USDT)", de: "Kryptowährung (BTC, ETH, USDT)" },
    "ready_to_meet": { en: "Ready to meet your new best friend?", de: "Bereit, deinen neuen besten Freund zu treffen?" },
    "quiz_title": { en: "Not sure which breed is right for you?", de: "Nicht sicher, welche Rasse die richtige ist?" },
    "quiz_desc": { en: "Take our personality quiz to find your perfect four-legged match!", de: "Machen Sie unser Persönlichkeitsquiz und finden Sie Ihren idealen vierbeinigen Partner!" },
    "quiz_start": { en: "Start Quiz", de: "Quiz starten" },
    "gallery_title": { en: "Your Daily Dose of Joy", de: "Deine tägliche Dosis Freude" },
    "gallery_desc": { en: "Scroll through these therapy moments. Each one is a reminder that you're not alone.", de: "Scrolle durch diese Therapie-Momente. Jeder einzelne ist eine Erinnerung daran, dass du nicht allein bist." },
    "filter_all": { en: "All Friends", de: "Alle Freunde" },
    "filter_aussie": { en: "Australian Shepherds", de: "Australian Shepherds" },
    "filter_poodle": { en: "Poodles", de: "Pudel" },
    "filter_cane": { en: "Cane Corsos", de: "Cane Corsos" },
    "therapy_dog": { en: "therapy dog", de: "Therapiehund" },
    "remember_title": { en: "Remember...", de: "Erinnere dich..." },
    "affirmation_1": { en: "You are doing your best, and that is enough.", de: "Du tust dein Bestes, und das ist genug." },
    "affirmation_2": { en: "It's okay to have bad days.", de: "Es ist okay, schlechte Tage zu haben." },
    "affirmation_3": { en: "A dog's love is unconditional, and so is your worth.", de: "Die Liebe eines Hundes ist bedingungslos, genau wie dein Wert." },
    "affirmation_4": { en: "Taking a break is a sign of strength, not weakness.", de: "Eine Pause einzulegen ist ein Zeichen von Stärke, nicht von Schwäche." },
    "join_community": { en: "Join our community or reach out for professional help:", de: "Tritt unserer Community bei oder suche professionelle Hilfe:" },
    "fb_group": { en: "Facebook Group", de: "Facebook-Gruppe" },
    "available_puppies_desc": { en: "Find your new best friend. Click on any puppy to view full details including pricing, pedigree, and reservation info.", de: "Finden Sie Ihren neuen besten Freund. Klicken Sie auf einen Welpen, um Details zu Preisen, Stammbaum und Reservierung zu sehen." },
    "status_reserved": { en: "Reserved", de: "Reserviert" },
    "status_available": { en: "Available", de: "Verfügbar" },
    "status_not_available": { en: "Not Available", de: "Nicht verfügbar" },
    "esa_title": { en: "Emotional Support Animals (ESA)", de: "Emotionale Unterstützungstiere (ESA)" },
    "esa_subtitle": { en: "Understanding your rights and the benefits of an ESA.", de: "Verstehen Sie Ihre Rechte und die Vorteile eines ESA." },
    "what_is_esa": { en: "What is an ESA?", de: "Was ist ein ESA?" },
    "esa_def": { en: "An Emotional Support Animal (ESA) is a companion animal that provides therapeutic benefit, such as alleviating or mitigating some symptom of the handler's mental or emotional disability. ESAs are not Service Animals and do not require specific task training.", de: "Ein emotionales Unterstützungstier (ESA) ist ein Begleittier, das therapeutischen Nutzen bringt, indem es Symptome einer mentalen oder emotionalen Behinderung lindert. ESAs sind keine Assistenztiere und benötigen kein spezielles Training." },
    "legal_rights": { en: "Legal Rights", de: "Gesetzliche Rechte" },
    "legal_rights_desc": { en: "Under the Fair Housing Act (FHA), housing providers must provide 'reasonable accommodation' for ESAs. This means you generally cannot be charged pet fees or deposits, and breed/weight restrictions may be waived. Note that recent changes to DOT regulations mean ESAs are no longer guaranteed access in airline cabins like Service Animals.", de: "Nach dem Fair Housing Act (FHA) müssen Vermieter 'angemessene Vorkehrungen' für ESAs treffen. Das bedeutet, dass in der Regel keine Haustiergebühren erhoben werden und Einschränkungen aufgehoben werden können. Beachten Sie, dass ESAs in Flugzeugkabinen nicht mehr wie Assistenztiere garantiert sind." },
    "esa_vs_service": { en: "ESA vs Service Dog", de: "ESA vs. Assistenzhund" },
    "service_dog_def": { en: "Service Dog: Trained to perform specific tasks for a disability. Public access guaranteed by ADA.", de: "Assistenzhund: Trainiert für spezifische Aufgaben bei einer Behinderung. Öffentlicher Zugang garantiert." },
    "esa_short_def": { en: "ESA: Provides comfort/support. No specific training required. Protections mainly in housing (FHA).", de: "ESA: Bietet Trost/Unterstützung. Kein spezielles Training erforderlich. Schutz vor allem beim Wohnen." },
    "fb_community": { en: "Join our Facebook Community", de: "Tritt unserer Facebook-Community bei" },
    "benefit_1_title": { en: "Reduced Anxiety & Stress", de: "Weniger Angst & Stress" },
    "benefit_1_desc": { en: "ESAs provide calming companionship that helps reduce daily stress and anxiety levels.", de: "ESAs bieten beruhigende Gesellschaft, die hilft, täglichen Stress und Angst abzubauen." },
    "benefit_2_title": { en: "Improved Mood", de: "Bessere Stimmung" },
    "benefit_2_desc": { en: "Regular interaction with your ESA promotes emotional stability and positive mental health.", de: "Regelmäßige Interaktion mit Ihrem ESA fördert die emotionale Stabilität." },
    "benefit_3_title": { en: "Safety & Independence", de: "Sicherheit & Unabhängigkeit" },
    "benefit_3_desc": { en: "Enhanced sense of security and confidence in daily living activities.", de: "Gesteigertes Sicherheitsgefühl und Vertrauen in tägliche Aktivitäten." },
    "faq_q1": { en: "Can any animal be an ESA?", de: "Kann jedes Tier ein ESA sein?" },
    "faq_a1": { en: "Typically dogs and cats are recognized, but other species may qualify if they provide the needed support and meet housing policies.", de: "In der Regel werden Hunde und Katzen anerkannt, aber auch andere Arten können sich qualifizieren, wenn sie Unterstützung bieten." },
    "faq_q2": { en: "Do I need to register my ESA?", de: "Muss ich meinen ESA registrieren?" },
    "faq_a2": { en: "No official registry is required. Beware of scams offering 'ESA registration' for a fee.", de: "Es ist keine offizielle Registrierung erforderlich. Vorsicht vor kostenpflichtigen 'ESA-Registern'." },
    "faq_q3": { en: "What rights do I have in housing?", de: "Welche Rechte habe ich beim Wohnen?" },
    "faq_a3": { en: "Under the Fair Housing Act, landlords must make reasonable accommodations, which usually means no pet fees and waiving breed/weight restrictions.", de: "Vermieter müssen angemessene Vorkehrungen treffen, was meist keine Gebühren und das Aufheben von Einschränkungen bedeutet." },
    "adoption_process": { en: "Adoption Process", de: "Adoptionsprozess" },
    "process_subtitle": { en: "Bringing your emotional support companion home, wherever you are.", de: "Wir bringen Ihren Begleiter zu Ihnen nach Hause, egal wo Sie sind." },
    "step_1_title": { en: "Choose Your Companion", de: "Wählen Sie Ihren Begleiter" },
    "step_1_desc": { en: "Browse our available puppies and find the one that connects with your heart. We provide detailed profiles to help you make the right choice.", de: "Durchsuchen Sie unsere Welpen und finden Sie denjenigen, der Ihr Herz berührt. Wir bieten detaillierte Profile." },
    "step_2_title": { en: "Reserve via WhatsApp", de: "Über WhatsApp reservieren" },
    "step_2_desc": { en: "Click the reservation button to contact us directly. We will answer any questions, discuss the puppy's personality, and finalize the reservation details.", de: "Klicken Sie auf den Button, um uns zu kontaktieren. Wir klären alle Fragen und finalisieren die Reservierung." },
    "step_3_title": { en: "Documentation & Health", de: "Dokumente & Gesundheit" },
    "step_3_desc": { en: "All our puppies come with full health checks, vaccinations, and necessary travel documentation. We ensure they are fit for emotional support roles.", de: "Alle Welpen kommen mit Gesundheitschecks, Impfungen und Reisedokumenten. Wir stellen sicher, dass sie geeignet sind." },
    "step_4_title": { en: "Delivery / Pickup", de: "Lieferung / Abholung" },
    "step_4_desc": { en: "We facilitate safe specialized pet transport. Your new friend will arrive safely at your doorstep or a nearby airport.", de: "Wir ermöglichen sicheren Tiertransport. Ihr neuer Freund kommt sicher bei Ihnen an." },
    "intl_standards": { en: "International Standards", de: "Internationale Standards" },
    "intl_standards_desc": { en: "We adhere to the highest standards of international pet travel. Our team handles all the logistics, including customs and veterinary clearance, so you can focus on welcoming your new family member.", de: "Wir halten uns an höchste Standards für Tierreisen. Unser Team kümmert sich um die gesamte Logistik." },
    "verified_payments": { en: "Verified Payment Methods", de: "Verifizierte Zahlungsmethoden" },
    "payment_desc": { en: "We offer secure and convenient ways to finalize your reservation.", de: "Wir bieten sichere Wege, um Ihre Reservierung abzuschließen." },
    "bank_transfer_short": { en: "Direct SECURE transfers from your bank to ours.", de: "Direkte SICHERE Überweisungen von Ihrer Bank zu unserer." },
    "wise_short": { en: "Fast, low-cost international transfers (TransferWise).", de: "Schnelle, kostengünstige internationale Überweisungen." },
    "crypto_short": { en: "Modern & private: BTC, ETH, and USDT accepted.", de: "Modern & privat: BTC, ETH und USDT werden akzeptiert." },
    "puppy_not_found": { en: "Puppy Not Found", de: "Welpe nicht gefunden" },
    "back_to_available": { en: "Back to Available Puppies", de: "Zurück zu den Welpen" },
    "you_might_like": { en: "You Might Also Like", de: "Das könnte dir auch gefallen" },
    "premium_esd": { en: "Premium Emotional Support", de: "Erstklassige emotionale Unterstützung" },
    "about_title": { en: "About ESA Hub", de: "Über ESA Hub" },
    "about_subtitle": { en: "More than just a breeder. We are a sanctuary for connecting therapeutic souls.", de: "Mehr als nur ein Züchter. Wir sind ein Zufluchtsort für therapeutische Seelen." },
    "mission_title": { en: "Our Mission", de: "Unsere Mission" },
    "mission_desc1": { en: "At Emotional Support Animal Hub, we believe in the healing power of the human-animal bond. Our mission is to raise puppies that are not only physically healthy but emotionally attuned to their future owners.", de: "Wir glauben an die heilende Kraft der Mensch-Tier-Bindung. Unsere Mission ist es, Welpen aufzuziehen, die körperlich gesund und emotional auf ihre Besitzer eingestellt sind." },
    "mission_desc2": { en: "We specialize in breeds known for their empathy, intelligence, and calmness—qualities essential for emotional support roles.", de: "Wir spezialisieren uns auf Rassen, die für Empathie, Intelligenz und Ruhe bekannt sind." },
    "ethical_title": { en: "Ethical Breeding", de: "Ethische Zucht" },
    "ethical_desc": { en: "Our dogs are raised in a home environment, exposed to various sounds, people, and experiences from a young age. This 'early neurological stimulation' ensures they grow up to be confident and resilient companions.", de: "Unsere Hunde wachsen in einer häuslichen Umgebung auf und werden von klein auf an verschiedene Reize gewöhnt. Dies sorgt für selbstbewusste Begleiter." },
    "health_title": { en: "Health First", de: "Gesundheit zuerst" },
    "health_desc": { en: "Comprehensive genetic testing and veterinary care for all parents and puppies.", de: "Umfassende Gentests und tierärztliche Betreuung für alle Eltern und Welpen." },
    "temperament_title": { en: "Temperament", de: "Temperament" },
    "temperament_desc": { en: "Selected specifically for calm and affectionate natures suitable for therapy.", de: "Speziell ausgewählt für ein ruhiges und liebevolles Wesen, das für die Therapie geeignet ist." },
    "support_title": { en: "Lifetime Support", de: "Lebenslange Unterstützung" },
    "support_desc": { en: "We remain a resource for you throughout your dog's life.", de: "Wir bleiben während des gesamten Lebens Ihres Hundes eine Ressource für Sie." },
    "footer_tagline": { en: "Connecting hearts with paws globally.", de: "Herzen weltweit mit Pfoten verbinden." },
    "all_rights": { en: "All rights reserved.", de: "Alle Rechte vorbehalten." },
    "quiz_intro_title": { en: "Find Your Perfect Match", de: "Finde deinen idealen Partner" },
    "quiz_intro_desc": { en: "Answer a few questions to see which breed fits your lifestyle.", de: "Beantworte ein paar Fragen, um zu sehen, welche Rasse zu deinem Lebensstil passt." },
    "perfect_match": { en: "Your Perfect Match!", de: "Dein idealer Partner!" },
    "see_available": { en: "See Available Puppies", de: "Verfügbare Welpen ansehen" },
    "take_again": { en: "Take Quiz Again", de: "Quiz noch einmal machen" },
    "question": { en: "Question", de: "Frage" },
    "of": { en: "of", de: "von" },
    "popup_title": { en: "Christmas Special!", de: "Weihnachts-Special!" },
    "popup_msg": { en: "Celebrate the season with our biggest discount of the year!", de: "Feiern Sie die Saison mit unserem größten Rabatt des Jahres!" },
    "popup_sub": { en: "All puppies are now 35% off. Give the gift of unconditional love this Christmas! 🎁", de: "Alle Welpen sind jetzt 35% reduziert. Verschenken Sie dieses Weihnachten bedingungslose Liebe! 🎁" },
    "popup_cta": { en: "View Available Puppies", de: "Verfügbare Welpen ansehen" },
    "ancestry": { en: "Ancestry %", de: "Abstammung %" },
    "view_all_joy": { en: "Experience More Joy", de: "Erleben Sie mehr Freude" },
    "off": { en: "OFF", de: "RABATT" }
};

interface LocalizationContextType {
    language: Language;
    currency: Currency;
    setLanguage: (lang: Language) => void;
    setCurrency: (cur: Currency) => void;
    t: (key: string) => string;
    formatPrice: (usdAmount: number) => string;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export const LocalizationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');
    const [currency, setCurrency] = useState<Currency>('USD');

    const exchangeRate = 0.92; // 1 USD = 0.92 EUR

    useEffect(() => {
        // Detect language preference from browser settings
        const userLang = navigator.language.toLowerCase();

        if (userLang.includes('de')) {
            setLanguage('de');
            setCurrency('EUR');
        }
    }, []);

    const t = (key: string) => {
        return translations[key]?.[language] || key;
    };

    const formatPrice = (usdAmount: number) => {
        if (currency === 'EUR') {
            const eurAmount = usdAmount * exchangeRate;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(eurAmount);
        }
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(usdAmount);
    };

    return (
        <LocalizationContext.Provider value={{ language, currency, setLanguage, setCurrency, t, formatPrice }}>
            {children}
        </LocalizationContext.Provider>
    );
};

export const useLocalization = () => {
    const context = useContext(LocalizationContext);
    if (!context) {
        throw new Error('useLocalization must be used within a LocalizationProvider');
    }
    return context;
};
