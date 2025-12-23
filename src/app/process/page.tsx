"use client";

import { useLocalization } from "@/context/LocalizationContext";

export default function Process() {
    const { t } = useLocalization();
    return (
        <section className="process-container">
            <div className="content-wrapper">
                <h1>{t('adoption_process')}</h1>
                <p className="subtitle">{t('process_subtitle')}</p>

                <div className="steps-container">
                    <div className="step reveal delay-1">
                        <div className="step-number">01</div>
                        <h3>{t('step_1_title')}</h3>
                        <p>{t('step_1_desc')}</p>
                    </div>

                    <div className="step reveal delay-2">
                        <div className="step-number">02</div>
                        <h3>{t('step_2_title')}</h3>
                        <p>{t('step_2_desc')}</p>
                    </div>

                    <div className="step reveal delay-3">
                        <div className="step-number">03</div>
                        <h3>{t('step_3_title')}</h3>
                        <p>{t('step_3_desc')}</p>
                    </div>

                    <div className="step reveal delay-4">
                        <div className="step-number">04</div>
                        <h3>{t('step_4_title')}</h3>
                        <p>{t('step_4_desc')}</p>
                    </div>
                </div>

                <div className="shipping-info reveal">
                    <h2>{t('intl_standards')}</h2>
                    <p>{t('intl_standards_desc')}</p>
                </div>

                <div className="payment-methods-section reveal delay-1">
                    <h2>{t('verified_payments')}</h2>
                    <p>{t('payment_desc')}</p>
                    <div className="payment-grid">
                        <div className="payment-card">
                            <div className="payment-icon">🏦</div>
                            <h3>{t('payment_bank_transfer')}</h3>
                            <p>{t('bank_transfer_short')}</p>
                        </div>
                        <div className="payment-card">
                            <div className="payment-icon">🌐</div>
                            <h3>Wise</h3>
                            <p>{t('wise_short')}</p>
                        </div>
                        <div className="payment-card">
                            <div className="payment-icon">₿</div>
                            <h3>Crypto</h3>
                            <p>{t('crypto_short')}</p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .process-container {
                    padding: 6rem 10%;
                    background: var(--bg-gradient);
                }
                .content-wrapper {
                    max-width: 1400px;
                    margin: 0 auto;
                }
                h1 {
                    font-size: 3.5rem;
                    text-align: center;
                    margin-bottom: 1rem;
                }
                .subtitle {
                    text-align: center;
                    font-size: 1.2rem;
                    color: #666;
                    margin-bottom: 4rem;
                }
                .steps-container {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2rem;
                    margin-bottom: 5rem;
                }
                .step {
                    background: rgba(255,255,255,0.6);
                    padding: 2.5rem;
                    border-radius: 20px;
                    border: 1px solid rgba(255,255,255,0.4);
                }
                .step-number {
                    font-size: 3rem;
                    font-family: var(--font-playfair);
                    color: var(--primary);
                    opacity: 0.3;
                    font-weight: 700;
                    margin-bottom: 1rem;
                }
                .step h3 {
                    margin-bottom: 1rem;
                    font-size: 1.5rem;
                }
                .step p {
                    line-height: 1.8;
                    color: #555;
                }
                .step a {
                    color: var(--primary);
                font-weight: 500;
                }
                .shipping-info {
                    background: var(--white);
                    padding: 4rem;
                    border-radius: 30px;
                    box-shadow: var(--shadow);
                    text-align: center;
                }
                .shipping-info h2 {
                    margin-bottom: 1.5rem;
                    color: var(--text);
                }
                .payment-methods-section {
                    margin-top: 6rem;
                    text-align: center;
                }
                .payment-methods-section h2 {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                }
                .payment-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                    margin-top: 3.5rem;
                }
                .payment-card {
                    background: white;
                    padding: 3rem 2rem;
                    border-radius: 25px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.03);
                    transition: transform 0.3s ease;
                }
                .payment-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 40px rgba(0,0,0,0.06);
                }
                .payment-icon {
                    font-size: 3rem;
                    margin-bottom: 1.5rem;
                }
                .payment-card h3 {
                    color: var(--primary);
                    margin-bottom: 1rem;
                }
                .payment-card p {
                    font-size: 0.95rem;
                    color: #777;
                }
                @media (max-width: 1200px) {
                    .steps-container {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 2.5rem;
                    }
                }
                @media (max-width: 768px) {
                    .process-container {
                        padding: 4rem 5%;
                    }
                    .steps-container {
                        grid-template-columns: 1fr;
                        gap: 2rem;
                    }
                    h1 {
                        font-size: 2.5rem;
                    }
                    .shipping-info {
                        padding: 2.5rem 1.5rem;
                    }
                    .payment-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </section>
    );
}
