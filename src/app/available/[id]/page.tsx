"use client";

import { puppies } from "@/data/puppies";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ImageSlider from "@/components/ImageSlider";
import { useLocalization } from "@/context/LocalizationContext";

export default function PuppyDetail() {
    const params = useParams();
    const { t, formatPrice, language } = useLocalization();
    const puppy = puppies.find(p => p.id === params.id);

    if (!puppy) {
        return (
            <div className="not-found-container">
                <h1>{t('puppy_not_found')}</h1>
                <Link href="/available" className="btn-back">← {t('back_to_available')}</Link>
                <style jsx>{`
                    .not-found-container {
                        padding: 8rem 2rem;
                        text-align: center;
                    }
                    .btn-back {
                        color: var(--primary);
                        font-weight: bold;
                    }
                `}</style>
            </div>
        );
    }

    const handleWhatsApp = () => {
        if (language === 'de') {
            const messageDe = `Hallo, ich interessiere mich für ${puppy.name} (${puppy.breed}). Ist er/sie noch verfügbar?`;
            window.open(`https://wa.me/4917613564657?text=${encodeURIComponent(messageDe)}`, '_blank');
        } else {
            // Messenger link for English
            window.open('https://m.me/327884021233501', '_blank');
        }
    };

    return (
        <section className="detail-page">
            <div className="detail-container">
                <div className="breadcrumb">
                    <Link href="/available">{t('nav_available')}</Link> &gt; <span>{puppy.name}</span>
                </div>

                <div className="detail-grid">
                    {/* Left Column: Images & Specs */}
                    <div className="image-column">
                        <div className="main-image-wrapper fade-in">
                            <ImageSlider images={puppy.images} alt={puppy.name} aspectRatio="1/1" />
                        </div>

                        {/* Combined Details Card */}
                        <div className="details-card fade-in-delayed">
                            <h3 className="card-title">{t('at_a_glance')}</h3>
                            <div className="specs-grid">
                                <div className="spec-item">
                                    <span className="label">{t('ready_date')}</span>
                                    <span className="value">{language === 'de' && puppy.ready_date_de ? puppy.ready_date_de : puppy.ready_date}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="label">{t('expected_weight')}</span>
                                    <span className="value">{language === 'de' && puppy.expected_weight_de ? puppy.expected_weight_de : puppy.expected_weight}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="label">{t('parentage')}</span>
                                    <span className="value">{language === 'de' && puppy.parentage_de ? puppy.parentage_de : puppy.parentage}</span>
                                </div>
                                {puppy.serval_percentage && (
                                    <div className="spec-item">
                                        <span className="label">{t('ancestry')}</span>
                                        <span className="value">{puppy.serval_percentage}</span>
                                    </div>
                                )}
                            </div>

                            <div className="divider"></div>

                            <div className="section-block">
                                <h3>{t('personality')}</h3>
                                <p className="personality-text">"{language === 'de' && puppy.personality_de ? puppy.personality_de : puppy.personality}"</p>
                            </div>

                            <div className="divider"></div>

                            <div className="section-block">
                                <h3>{t('included')}</h3>
                                <ul className="check-list">
                                    {(language === 'de' && puppy.included_de ? puppy.included_de : puppy.included).map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Info & Logistics */}
                    <div className="info-column">
                        <div className="header-info fade-in">
                            <h1>{puppy.name}</h1>
                            <div className="badges">
                                <span className="breed-badge">{puppy.breed}</span>
                                {puppy.generation && <span className="breed-badge bg-secondary">{puppy.generation}</span>}
                            </div>
                        </div>

                        <p className="description fade-in">{language === 'de' && puppy.description_de ? puppy.description_de : puppy.description}</p>

                        <div className="price-box fade-in">
                            {puppy.discountPercentage && (
                                <div className="discount-tag">{t('christmas_special')}: {puppy.discountPercentage}% {t('off')}</div>
                            )}
                            <div className="price-row">
                                <span className="price-label">{t('pet_price')}</span>
                                <div className="price-display">
                                    {puppy.originalPrice && <span className="original-price">{formatPrice(puppy.originalPrice)}</span>}
                                    <span className="price-value">{formatPrice(puppy.price)}</span>
                                </div>
                            </div>
                            {puppy.breeder_price && (
                                <div className="price-row breeder">
                                    <span className="price-label">{t('breeder_price')}</span>
                                    <div className="price-display">
                                        {puppy.originalBreederPrice && <span className="original-price">{formatPrice(puppy.originalBreederPrice)}</span>}
                                        <span className="price-value">{formatPrice(puppy.breeder_price)}</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="action-buttons fade-in">
                            {puppy.status === 'Available' ? (
                                <button className="btn-whatsapp" onClick={handleWhatsApp}>
                                    {t('reserve_whatsapp')}
                                </button>
                            ) : (
                                <button className="btn-whatsapp disabled" disabled>{t('status_reserved')}</button>
                            )}
                            <button className="btn-question" onClick={handleWhatsApp}>{t('ask_question')}</button>
                        </div>

                        <div className="logistics-card fade-in-delayed">
                            <div className="section-block">
                                <h3>{t('shipping_delivery')}</h3>
                                <ul className="simple-list">
                                    {(language === 'de' && puppy.shipping_de ? puppy.shipping_de : puppy.shipping).map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </div>

                            <div className="section-block">
                                <h3>{t('payment_reservation')}</h3>
                                <ul className="simple-list payment-list">
                                    <li className="payment-method">
                                        <span className="dot"></span>
                                        {t('payment_bank_transfer')}
                                    </li>
                                    <li className="payment-method">
                                        <span className="dot"></span>
                                        {t('payment_wise')}
                                    </li>
                                    <li className="payment-method">
                                        <span className="dot"></span>
                                        {t('payment_crypto')}
                                    </li>
                                    {(language === 'de' && puppy.payment_de ? puppy.payment_de : puppy.payment).map((item, i) => {
                                        // Avoid duplicates if already in the list
                                        const lowerItem = item.toLowerCase();
                                        if (lowerItem.includes('bank') || lowerItem.includes('wise') || lowerItem.includes('crypto')) return null;
                                        return (
                                            <li key={i} className="payment-method">
                                                <span className="dot"></span>
                                                {item}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Similar Puppies Section */}
            <div className="similar-section">
                <div className="similar-container">
                    <h2>{t('you_might_like')}</h2>
                    <div className="similar-grid">
                        {puppies.filter(p => p.id !== puppy.id).slice(0, 3).map((other) => (
                            <Link href={`/available/${other.id}`} key={other.id} className="similar-card">
                                <div className="similar-image">
                                    <img src={`/dog-pics/${other.images[0]}`} alt={other.name} />
                                </div>
                                <div className="similar-info">
                                    <h3>{other.name}</h3>
                                    <span className="similar-price">{formatPrice(other.price)}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="view-all-container">
                        <Link href="/available" className="btn-view-all">{t('view_all_available')}</Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .detail-page {
                    background: linear-gradient(to bottom, #f8f9fa, #ffffff);
                    min-height: 100vh;
                    padding-top: 6rem;
                    padding-bottom: 6rem;
                }
                .detail-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 5%;
                }
                .breadcrumb {
                    margin-bottom: 2rem;
                    color: #888;
                    font-size: 0.9rem;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                }
                .breadcrumb a {
                    color: var(--primary);
                    font-weight: 600;
                    text-decoration: none;
                    transition: color 0.3s;
                }
                .breadcrumb a:hover {
                    color: #5a6e53;
                }
                .detail-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 5rem;
                }
                @media (max-width: 900px) {
                    .detail-grid {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                    }
                    .image-column {
                        display: flex;
                        flex-direction: column;
                    }
                    .main-image-wrapper {
                        order: 1;
                    }
                    .details-card {
                        order: 3;
                    }
                    .info-column {
                        order: 2;
                    }
                }
                .main-image-wrapper {
                    border-radius: 30px;
                    overflow: hidden;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                    margin-bottom: 2.5rem;
                    background: white;
                }
                .details-card, .logistics-card {
                    background: white;
                    padding: 3rem;
                    border-radius: 30px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.03);
                    border: 1px solid rgba(0,0,0,0.02);
                }
                .card-title {
                    font-size: 1.5rem;
                    margin-bottom: 2rem;
                    color: var(--text);
                }
                .divider {
                    height: 1px;
                    background: #f0f0f0;
                    margin: 2.5rem 0;
                }
                .header-info h1 {
                    font-size: 4rem;
                    margin-bottom: 1rem;
                    line-height: 1;
                    background: linear-gradient(45deg, var(--text), #666);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .badges {
                    display: flex;
                    gap: 0.8rem;
                    margin-bottom: 2rem;
                }
                .breed-badge {
                    display: inline-block;
                    background: var(--primary);
                    color: white;
                    padding: 0.5rem 1.2rem;
                    border-radius: 50px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    box-shadow: 0 5px 15px rgba(124, 148, 115, 0.3);
                }
                .bg-secondary {
                    background: #8e9eab;
                    box-shadow: 0 5px 15px rgba(142, 158, 171, 0.3);
                }
                .description {
                    font-size: 1.2rem;
                    line-height: 1.8;
                    color: #555;
                    margin-bottom: 2.5rem;
                }
                .price-box {
                    background: linear-gradient(135deg, #ffffff 0%, #fcfcfc 100%);
                    padding: 2rem;
                    border-radius: 25px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    border: 1px solid rgba(0,0,0,0.03);
                    margin-bottom: 2.5rem;
                }
                .price-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 0.8rem;
                }
                 .price-row:last-child {
                    margin-bottom: 0;
                }
                .price-row.breeder {
                    opacity: 0.6;
                    font-size: 0.95rem;
                }
                .price-label {
                    font-weight: 600;
                    color: #777;
                }
                .price-value {
                    font-size: 1.8rem;
                    font-weight: 800;
                    color: var(--primary);
                }
                .price-display {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                .original-price {
                    text-decoration: line-through;
                    color: #999;
                    font-size: 1.2rem;
                    font-weight: 600;
                }
                .discount-tag {
                    background: linear-gradient(135deg, #c41e3a 0%, #8b0000 100%);
                    color: white;
                    padding: 0.5rem 1.2rem;
                    border-radius: 50px;
                    font-size: 0.9rem;
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                    display: inline-block;
                    box-shadow: 0 4px 10px rgba(196, 30, 58, 0.2);
                    animation: subtlePulse 2s infinite;
                }
                @keyframes subtlePulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.02); }
                }
                .action-buttons {
                    display: grid;
                    grid-template-columns: 1.8fr 1fr;
                    gap: 1.2rem;
                    margin-bottom: 3.5rem;
                }
                .btn-whatsapp {
                    background: #25D366;
                    color: white;
                    border: none;
                    padding: 1.2rem;
                    border-radius: 20px;
                    font-weight: 700;
                    font-size: 1.1rem;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    box-shadow: 0 10px 20px rgba(37, 211, 102, 0.2);
                }
                 .btn-whatsapp:hover {
                    transform: translateY(-3px);
                     box-shadow: 0 15px 30px rgba(37, 211, 102, 0.3);
                }
                .btn-question {
                    background: white;
                    border: 2px solid #eee;
                    color: var(--text);
                    padding: 1.2rem;
                    border-radius: 20px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s;
                }
                .btn-question:hover {
                    border-color: var(--primary);
                    color: var(--primary);
                    background: #fafafa;
                }
                .specs-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2rem;
                }
                .spec-item {
                    display: flex;
                    flex-direction: column;
                }
                .label {
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: #999;
                    margin-bottom: 0.5rem;
                    font-weight: 600;
                }
                .value {
                    font-weight: 700;
                    font-size: 1.1rem;
                    color: var(--text);
                }
                .section-block {
                    margin-bottom: 3rem;
                }
                .section-block:last-child {
                    margin-bottom: 0;
                }
                .section-block h3 {
                    border-bottom: 2px solid #f5f5f5;
                    padding-bottom: 0.8rem;
                    margin-bottom: 1.5rem;
                    font-size: 1.3rem;
                    color: var(--primary);
                }
                .personality-text {
                    font-style: italic;
                    color: #555;
                    font-size: 1.1rem;
                    line-height: 1.7;
                }
                .check-list {
                    list-style: none;
                }
                .check-list li {
                    position: relative;
                    padding-left: 2.5rem;
                    margin-bottom: 0.8rem;
                    color: #555;
                }
                .check-list li::before {
                    content: '✓';
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 24px;
                    height: 24px;
                    background: rgba(124, 148, 115, 0.1);
                    color: var(--primary);
                    border-radius: 50%;
                    text-align: center;
                    line-height: 24px;
                    font-weight: bold;
                    font-size: 0.8rem;
                }
                .simple-list {
                    list-style: none;
                }
                 .simple-list li {
                    margin-bottom: 0.8rem;
                     color: #555;
                     padding-left: 1rem;
                     border-left: 3px solid #eee;
                }
                .payment-method {
                    display: flex;
                    align-items: center;
                    gap: 0.8rem;
                    padding-left: 0 !important;
                    border-left: none !important;
                }
                .payment-method .dot {
                    width: 8px;
                    height: 8px;
                    background: var(--primary);
                    border-radius: 50%;
                    flex-shrink: 0;
                    box-shadow: 0 0 10px rgba(124, 148, 115, 0.4);
                }

                /* Similar Section Styles */
                .similar-section {
                    background: white;
                    padding: 6rem 5%;
                }
                .similar-container {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .similar-container h2 {
                    text-align: center;
                    margin-bottom: 4rem;
                    font-size: 2.5rem;
                }
                .similar-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 3rem;
                    margin-bottom: 4rem;
                }
                .similar-card {
                    display: block;
                    text-decoration: none;
                    color: inherit;
                    border-radius: 25px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    transition: all 0.4s ease;
                }
                .similar-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                }
                .similar-image {
                    aspect-ratio: 1;
                    overflow: hidden;
                }
                .similar-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }
                .similar-card:hover .similar-image img {
                    transform: scale(1.05);
                }
                .similar-info {
                    padding: 1.5rem;
                    background: #fff;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .similar-info h3 {
                    margin: 0;
                    font-size: 1.2rem;
                }
                .similar-price {
                    font-weight: 700;
                    color: var(--primary);
                    font-size: 1.2rem;
                }
                .view-all-container {
                    text-align: center;
                }
                .btn-view-all {
                    display: inline-block;
                    padding: 1rem 3rem;
                    border: 2px solid var(--primary);
                    color: var(--primary);
                    border-radius: 50px;
                    font-weight: 600;
                    transition: all 0.3s;
                    font-size: 1.1rem;
                }
                .btn-view-all:hover {
                    background: var(--primary);
                    color: white;
                    box-shadow: 0 10px 20px rgba(124, 148, 115, 0.3);
                }

                /* Animations */
                .fade-in {
                    animation: fadeIn 0.8s ease-out forwards;
                }
                .fade-in-delayed {
                    opacity: 0;
                    animation: fadeIn 0.8s ease-out 0.2s forwards;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
}
