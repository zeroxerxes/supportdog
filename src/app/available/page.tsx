"use client";

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { puppies } from "@/data/puppies";
import ImageSlider from "@/components/ImageSlider";
import { useLocalization } from "@/context/LocalizationContext";

export default function AvailablePuppies() {
    const [filter, setFilter] = useState("All");
    const { t, formatPrice, language } = useLocalization();

    // Get unique breeds
    const breeds = ["All", ...Array.from(new Set(puppies.map(p => p.breed)))];

    const filteredPuppies = filter === "All"
        ? puppies
        : puppies.filter(p => p.breed === filter);


    // Helper reserve function if they click the quick reserve button
    const handleReserve = (e: React.MouseEvent, puppyName: string, breed: string) => {
        e.preventDefault();
        e.stopPropagation();

        if (language === 'de') {
            const messageDe = `Hallo, ich interessiere mich für die Reservierung von ${puppyName} (${breed}). Ist er/sie noch verfügbar?`;
            const whatsappUrl = `https://wa.me/4917613564657?text=${encodeURIComponent(messageDe)}`;
            window.open(whatsappUrl, '_blank');
        } else {
            // Messenger link for English
            window.open('https://m.me/327884021233501', '_blank');
        }
    };

    return (
        <section className="page-container">
            <div className="section-header">
                <h1>{t('nav_available')}</h1>
                <p>{t('available_puppies_desc')}</p>
            </div>

            <div className="filter-container">
                {breeds.map(breed => (
                    <button
                        key={breed}
                        className={`filter-btn ${filter === breed ? 'active' : ''}`}
                        onClick={() => setFilter(breed)}
                    >
                        {breed === 'All' ? t('filter_all') : breed}
                    </button>
                ))}
            </div>

            <div className="puppy-grid">
                {filteredPuppies.map((puppy, index) => (
                    <Link href={`/available/${puppy.id}`} key={puppy.id} className="puppy-card-link reveal" style={{ transitionDelay: `${(index % 3) * 0.15}s` }}>
                        <div className="puppy-card">
                            <div className="image-wrapper">
                                <ImageSlider images={puppy.images} alt={puppy.name} />
                                {puppy.status === 'Reserved' && <div className="reserved-badge">{t('status_reserved')}</div>}
                            </div>
                            <div className="puppy-info">
                                <div className="info-header">
                                    <h3>{puppy.name}</h3>
                                    <div className="price-container">
                                        {puppy.originalPrice && (
                                            <span className="original-price-card">{formatPrice(puppy.originalPrice)}</span>
                                        )}
                                        <span className="price">{formatPrice(puppy.price)}</span>
                                    </div>
                                </div>
                                <div className="card-labels">
                                    <p className="breed">{puppy.breed}</p>
                                    {puppy.discountPercentage && (
                                        <span className="discount-chip">-{puppy.discountPercentage}% {t('off')}</span>
                                    )}
                                </div>

                                <div className="card-actions">
                                    {puppy.status === 'Available' ? (
                                        <button
                                            className="btn-reserve"
                                            onClick={(e) => handleReserve(e, puppy.name, puppy.breed)}
                                        >
                                            {t('reserve_whatsapp')}
                                        </button>
                                    ) : (
                                        <button className="btn-reserve disabled" disabled>
                                            {t('status_not_available')}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <style jsx>{`
                .page-container {
                    padding: 4rem 10%;
                }
                .section-header {
                    text-align: center;
                    margin-bottom: 4rem;
                }
                h1 {
                    font-size: 3rem;
                    color: var(--text);
                    margin-bottom: 1rem;
                }
                .filter-container {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    margin-bottom: 3rem;
                    flex-wrap: wrap;
                }
                @media (max-width: 768px) {
                    .filter-container {
                        justify-content: flex-start;
                        flex-wrap: nowrap;
                        overflow-x: auto;
                        padding: 0.5rem 0 1.5rem;
                        -webkit-overflow-scrolling: touch;
                        scrollbar-width: none; /* Firefox */
                    }
                    .filter-container::-webkit-scrollbar {
                        display: none; /* Safari and Chrome */
                    }
                    .filter-btn {
                        white-space: nowrap;
                        flex-shrink: 0;
                    }
                }
                .filter-btn {
                    padding: 0.8rem 1.8rem;
                    border: none;
                    background: #f0f0f0;
                    border-radius: 30px;
                    cursor: pointer;
                    font-weight: 600;
                    font-family: var(--font-header); /* Using Quicksand */
                    transition: all 0.3s ease;
                    font-size: 1rem;
                }
                .filter-btn:hover {
                    background: #e0e0e0;
                    transform: translateY(-2px);
                }
                .filter-btn.active {
                    background: var(--primary);
                    color: white;
                    box-shadow: 0 4px 10px rgba(124, 148, 115, 0.4);
                }
                .puppy-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 2.5rem;
                }
                .puppy-card-link {
                    text-decoration: none;
                    color: inherit;
                    display: block;
                }
                .puppy-card {
                    background: white;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    transition: all 0.3s ease;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }
                .puppy-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
                }
                .image-wrapper {
                    position: relative;
                    aspect-ratio: 4/3;
                    overflow: hidden;
                }
                .image-wrapper img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }
                .puppy-card:hover .image-wrapper img {
                    transform: scale(1.05);
                }
                .reserved-badge {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    background: #ff6b6b;
                    color: white;
                    padding: 0.5rem 1rem;
                    border-radius: 50px;
                    font-weight: bold;
                    font-size: 0.8rem;
                }
                .puppy-info {
                    padding: 1.5rem;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                }
                .info-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 0.5rem;
                }
                .info-header h3 {
                    font-size: 1.5rem;
                    margin: 0;
                }
                .price {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: var(--primary);
                }
                .price-container {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                }
                .original-price-card {
                    font-size: 0.9rem;
                    text-decoration: line-through;
                    color: #999;
                    font-weight: 600;
                }
                .card-labels {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;
                }
                .discount-chip {
                    background: #c41e3a;
                    color: white;
                    font-size: 0.75rem;
                    font-weight: 700;
                    padding: 0.2rem 0.6rem;
                    border-radius: 4px;
                    letter-spacing: 0.5px;
                }
                .breed {
                    color: #888;
                    margin: 0;
                }
                .card-actions {
                    margin-top: auto;
                }
                .btn-reserve {
                    width: 100%;
                    padding: 1rem;
                    border: none;
                    background: #25D366; /* WhatsApp Green */
                    color: white;
                    border-radius: 12px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background 0.2s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                }
                .btn-reserve:hover {
                    background: #128C7E;
                }
                .btn-reserve.disabled {
                    background: #ccc;
                    cursor: not-allowed;
                }
            `}</style>
        </section>
    );
}
