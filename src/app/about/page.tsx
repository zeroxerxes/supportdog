"use client";

import { useLocalization } from "@/context/LocalizationContext";
import Image from "next/image";

export default function About() {
    const { t } = useLocalization();
    return (
        <section className="about-container">
            <div className="hero-section">
                <h1>{t('about_title')}</h1>
                <p>{t('about_subtitle')}</p>
            </div>

            <div className="content-grid reveal">
                <div className="text-content">
                    <h2>{t('mission_title')}</h2>
                    <p>{t('mission_desc1')}</p>
                    <p>{t('mission_desc2')}</p>

                    <h2>{t('ethical_title')}</h2>
                    <p>{t('ethical_desc')}</p>
                </div>
                <div className="image-content reveal-right">
                    <div className="about-img-wrapper">
                        <img src="/dog-pics/Australian Shepherd 1 (3).jpg" alt="Our Facility" />
                    </div>
                </div>
            </div>

            <div className="values-section">
                <div className="value-item reveal delay-1">
                    <h3>{t('health_title')}</h3>
                    <p>{t('health_desc')}</p>
                </div>
                <div className="value-item reveal delay-2">
                    <h3>{t('temperament_title')}</h3>
                    <p>{t('temperament_desc')}</p>
                </div>
                <div className="value-item reveal delay-3">
                    <h3>{t('support_title')}</h3>
                    <p>{t('support_desc')}</p>
                </div>
            </div>

            <style jsx>{`
                .about-container {
                    background: var(--white);
                }
                .hero-section {
                    background: var(--primary);
                    color: white;
                    padding: 6rem 10%;
                    text-align: center;
                }
                .hero-section h1 {
                    font-size: 3.5rem;
                    color: white;
                    margin-bottom: 1rem;
                }
                .hero-section p {
                    font-size: 1.3rem;
                    opacity: 0.9;
                    max-width: 600px;
                    margin: 0 auto;
                }
                .content-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                    padding: 6rem 10%;
                    align-items: center;
                }
                @media (max-width: 768px) {
                    .content-grid {
                        grid-template-columns: 1fr;
                    }
                }
                .text-content p {
                    margin-bottom: 1.5rem;
                    font-size: 1.1rem;
                    color: #555;
                }
                .text-content h2 {
                    font-size: 2rem;
                    margin-bottom: 1.5rem;
                    margin-top: 2rem;
                }
                .text-content h2:first-child {
                    margin-top: 0;
                }
                .about-img-wrapper {
                    border-radius: 30px;
                    overflow: hidden;
                    box-shadow: var(--shadow);
                }
                .about-img-wrapper img {
                    width: 100%;
                    height: auto;
                    display: block;
                }
                .values-section {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 2rem;
                    padding: 6rem 10%;
                    background: #f9f9f9;
                }
                .value-item {
                    text-align: center;
                    padding: 2rem;
                }
                .value-item h3 {
                    margin-bottom: 1rem;
                    color: var(--primary);
                }
            `}</style>
        </section>
    );
}
