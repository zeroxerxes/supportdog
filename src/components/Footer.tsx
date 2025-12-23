"use client";

import { useLocalization } from "@/context/LocalizationContext";

export default function Footer() {
    const { t } = useLocalization();
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <h3>ESA Hub</h3>
                    <p>{t('footer_tagline')}</p>
                </div>

                <div className="social-links">
                    <a
                        href="https://web.facebook.com/esalovehub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-btn facebook"
                        aria-label="Follow us on Facebook"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                    </a>
                    <a
                        href="https://m.me/327884021233501"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-btn messenger"
                        aria-label="Message us on Messenger"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.304 2.246.464 3.443.464 6.627 0 12-4.974 12-11.111C24 4.974 18.627 0 12 0zm1.291 14.193l-3.047-3.253-5.947 3.253 6.545-6.953 3.111 3.253 5.883-3.253-6.545 6.953z" />
                        </svg>
                    </a>
                </div>

                <div className="footer-copyright">
                    <p>&copy; {new Date().getFullYear()} ESA Hub. {t('all_rights')}</p>
                </div>
            </div>
            <style jsx>{`
                footer {
                    padding: 4rem 10% 2rem;
                    background: var(--white);
                    border-top: 1px solid rgba(0,0,0,0.05);
                }
                .footer-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1.5rem;
                    text-align: center;
                }
                .footer-section h3 {
                    color: var(--primary);
                    margin-bottom: 0.5rem;
                    font-size: 1.5rem;
                }
                .footer-section p {
                    color: #666;
                    font-size: 1rem;
                }
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin: 0.5rem 0;
                }
                .social-btn {
                    width: 45px;
                    height: 45px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: #f0f2f5;
                    color: #1877f2;
                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    text-decoration: none;
                }
                .social-btn svg {
                    width: 24px;
                    height: 24px;
                }
                .social-btn:hover {
                    transform: translateY(-5px) scale(1.1);
                    background: #1877f2;
                    color: white;
                    box-shadow: 0 10px 20px rgba(24, 119, 242, 0.2);
                }
                .footer-copyright p {
                    color: #999;
                    font-size: 0.85rem;
                    margin-top: 1rem;
                }
                @media (max-width: 768px) {
                    footer {
                        padding: 3rem 5% 2rem;
                    }
                }
            `}</style>
        </footer>
    );
}
