"use client";

import { useLocalization } from "@/context/LocalizationContext";

export default function ESAInfo() {
    const { t } = useLocalization();

    return (
        <section className="esa-page">
            <div className="content-container">
                <div className="header-section">
                    <h1>{t('esa_title')}</h1>
                    <p className="subtitle">{t('esa_subtitle')}</p>
                </div>

                <div className="info-grid">
                    <div className="info-card">
                        <h2>{t('what_is_esa')}</h2>
                        <p>{t('esa_def')}</p>
                    </div>

                    <div className="info-card">
                        <h2>{t('legal_rights')}</h2>
                        <p>{t('legal_rights_desc')}</p>
                    </div>

                    <div className="info-card">
                        <h2>{t('esa_vs_service')}</h2>
                        <ul>
                            <li><strong>{t('service_dog_def')}</strong></li>
                            <li><strong>{t('esa_short_def')}</strong></li>
                        </ul>
                    </div>

                    <div className="info-card contact-card">
                        <h2>{t('how_to_qualify')}</h2>
                        <p>
                            {t('contact_us_text')}
                        </p>
                        <div className="contact-methods">
                            <a href="https://web.facebook.com/esalovehub" target="_blank" rel="noopener noreferrer" className="fb-community-btn">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                {t('fb_community')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Additional Sections */}
            <div className="extra-section">
                <div className="benefits-wrapper">
                    <h2 className="section-title">{t('benefits_title')}</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-icon">🧘</div>
                            <h3>{t('benefit_1_title')}</h3>
                            <p>{t('benefit_1_desc')}</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">😊</div>
                            <h3>{t('benefit_2_title')}</h3>
                            <p>{t('benefit_2_desc')}</p>
                        </div>

                        <div className="benefit-card">
                            <div className="benefit-icon">🛡️</div>
                            <h3>{t('benefit_3_title')}</h3>
                            <p>{t('benefit_3_desc')}</p>
                        </div>
                    </div>
                </div>

                <div className="faq-wrapper">
                    <h2 className="section-title">{t('faq_title')}</h2>
                    <div className="faq-list">
                        <details className="faq-item">
                            <summary>{t('faq_q1')}</summary>
                            <p>{t('faq_a1')}</p>
                        </details>
                        <details className="faq-item">
                            <summary>{t('faq_q2')}</summary>
                            <p>{t('faq_a2')}</p>
                        </details>
                        <details className="faq-item">
                            <summary>{t('faq_q3')}</summary>
                            <p>{t('faq_a3')}</p>
                        </details>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .esa-page {
                    padding: 8rem 10% 4rem;
                    background: var(--bg-gradient);
                    min-height: 100vh;
                }
                .content-container {
                    max-width: 1000px;
                    margin: 0 auto;
                }
                .header-section {
                    text-align: center;
                    margin-bottom: 4rem;
                }
                h1 {
                    font-size: 3rem;
                    color: var(--text);
                    margin-bottom: 1rem;
                }
                .subtitle {
                    font-size: 1.2rem;
                    color: #666;
                }
                .info-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                    gap: 2rem;
                }
                .info-card {
                    background: white;
                    padding: 2.5rem;
                    border-radius: 20px;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
                    transition: transform 0.3s ease;
                }
                .info-card:hover {
                    transform: translateY(-5px);
                }
                .info-card h2 {
                    color: var(--primary);
                    margin-bottom: 1rem;
                    font-size: 1.5rem;
                }
                .info-card p, .info-card li {
                    color: #555;
                    line-height: 1.7;
                }
                .info-card ul {
                    list-style: none;
                }
                .info-card li {
                    margin-bottom: 1rem;
                    padding-left: 1rem;
                    border-left: 3px solid var(--accent);
                }
                .contact-methods {
                    margin-top: 2rem;
                }
                .fb-community-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.8rem;
                    background: #1877f2;
                    color: white;
                    padding: 1rem 1.5rem;
                    border-radius: 12px;
                    font-weight: 700;
                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    text-decoration: none;
                }
                .fb-community-btn svg {
                    width: 24px;
                    height: 24px;
                }
                .fb-community-btn:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(24, 119, 242, 0.4);
                    background: #166fe5;
                }
                
                /* Extra Sections Styling */
                .extra-section {
                    max-width: 1200px;
                    margin: 4rem auto 0;
                    padding: 0 5%;
                }
                .section-title {
                    text-align: center;
                    font-size: 2.5rem;
                    color: var(--text);
                    margin-bottom: 3rem;
                }
                
                /* Benefits Grid */
                .benefits-wrapper {
                    margin-bottom: 6rem;
                }
                .benefits-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                }
                .benefit-card {
                    background: white;
                    padding: 2.5rem;
                    border-radius: 25px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    text-align: center;
                    transition: all 0.4s ease;
                    border: 1px solid rgba(0,0,0,0.02);
                }
                .benefit-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                }
                .benefit-icon {
                    font-size: 3.5rem;
                    margin-bottom: 1.5rem;
                    filter: grayscale(0.2);
                }
                .benefit-card h3 {
                    color: var(--primary);
                    font-size: 1.3rem;
                    margin-bottom: 1rem;
                }
                .benefit-card p {
                    color: #666;
                    line-height: 1.7;
                    font-size: 0.95rem;
                }
                
                /* FAQ Section */
                .faq-wrapper {
                    margin-bottom: 4rem;
                }
                .faq-list {
                    max-width: 900px;
                    margin: 0 auto;
                }
                .faq-item {
                    background: white;
                    padding: 2rem;
                    border-radius: 20px;
                    margin-bottom: 1.5rem;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.05);
                    transition: all 0.3s ease;
                    border: 1px solid rgba(0,0,0,0.02);
                }
                .faq-item:hover {
                    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
                }
                .faq-item summary {
                    font-weight: 700;
                    font-size: 1.2rem;
                    color: var(--text);
                    cursor: pointer;
                    list-style: none;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    transition: color 0.3s;
                }
                .faq-item summary:hover {
                    color: var(--primary);
                }
                .faq-item summary::after {
                    content: '+';
                    font-size: 1.8rem;
                    font-weight: 300;
                    color: var(--primary);
                    transition: transform 0.3s;
                }
                .faq-item[open] summary::after {
                    transform: rotate(45deg);
                }
                .faq-item p {
                    margin-top: 1.5rem;
                    color: #555;
                    line-height: 1.8;
                    padding-left: 1rem;
                    border-left: 3px solid var(--accent);
                }
                
                @media (max-width: 768px) {
                    .info-grid {
                        grid-template-columns: 1fr;
                    }
                    .benefits-grid {
                        grid-template-columns: 1fr;
                    }
                    .section-title {
                        font-size: 2rem;
                    }
                }
            `}</style>
        </section>
    );
}
