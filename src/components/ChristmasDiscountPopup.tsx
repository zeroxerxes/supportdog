"use client";

import { useEffect, useState } from 'react';
import { useLocalization } from '@/context/LocalizationContext';

export default function ChristmasDiscountPopup() {
    const { t } = useLocalization();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already seen the popup in this session
        const hasSeenPopup = sessionStorage.getItem('christmasPopupSeen');

        if (!hasSeenPopup) {
            // Show popup after a short delay
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1500);

            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem('christmasPopupSeen', 'true');
    };

    if (!isVisible) return null;

    return (
        <>
            <div className="popup-overlay" onClick={handleClose}>
                <div className="popup-container" onClick={(e) => e.stopPropagation()}>
                    <button className="close-btn" onClick={handleClose}>×</button>

                    <div className="popup-content">
                        <div className="christmas-icon">🎄</div>
                        <h2 className="popup-title">{t('popup_title')}</h2>
                        <div className="discount-badge">35% {t('off')}</div>
                        <p className="popup-message">
                            {t('popup_msg')}
                        </p>
                        <p className="popup-submessage">
                            {t('popup_sub')}
                        </p>
                        <button className="cta-btn" onClick={handleClose}>
                            {t('popup_cta')}
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .popup-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.7);
                    backdrop-filter: blur(5px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                    animation: fadeIn 0.3s ease-out;
                }
                .popup-container {
                    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
                    border-radius: 30px;
                    padding: 3rem;
                    max-width: 500px;
                    width: 90%;
                    position: relative;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                    animation: slideUp 0.4s ease-out;
                    border: 3px solid #d4af37;
                }
                .close-btn {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    background: none;
                    border: none;
                    font-size: 2.5rem;
                    color: #999;
                    cursor: pointer;
                    transition: all 0.3s;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                }
                .close-btn:hover {
                    background: #f0f0f0;
                    color: #333;
                    transform: rotate(90deg);
                }
                .popup-content {
                    text-align: center;
                }
                .christmas-icon {
                    font-size: 5rem;
                    margin-bottom: 1rem;
                    animation: bounce 1s infinite;
                }
                .popup-title {
                    font-size: 2.5rem;
                    color: #2d5016;
                    margin-bottom: 1rem;
                    font-weight: 800;
                }
                .discount-badge {
                    display: inline-block;
                    background: linear-gradient(135deg, #c41e3a 0%, #8b0000 100%);
                    color: white;
                    padding: 1rem 2.5rem;
                    border-radius: 50px;
                    font-size: 2.5rem;
                    font-weight: 900;
                    margin: 1.5rem 0;
                    box-shadow: 0 10px 30px rgba(196, 30, 58, 0.4);
                    animation: pulse 2s infinite;
                }
                .popup-message {
                    font-size: 1.3rem;
                    color: #333;
                    margin-bottom: 1rem;
                    line-height: 1.6;
                }
                .popup-submessage {
                    font-size: 1.1rem;
                    color: #666;
                    margin-bottom: 2rem;
                    line-height: 1.6;
                }
                .cta-btn {
                    background: linear-gradient(135deg, var(--primary) 0%, #5a6e53 100%);
                    color: white;
                    border: none;
                    padding: 1.2rem 3rem;
                    border-radius: 50px;
                    font-size: 1.2rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s;
                    box-shadow: 0 10px 25px rgba(124, 148, 115, 0.3);
                }
                .cta-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 15px 35px rgba(124, 148, 115, 0.4);
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(50px) scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
                
                @media (max-width: 600px) {
                    .popup-container {
                        padding: 2rem;
                    }
                    .popup-title {
                        font-size: 2rem;
                    }
                    .discount-badge {
                        font-size: 2rem;
                        padding: 0.8rem 2rem;
                    }
                    .christmas-icon {
                        font-size: 4rem;
                    }
                }
            `}</style>
        </>
    );
}
