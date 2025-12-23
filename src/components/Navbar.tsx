"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocalization } from '@/context/LocalizationContext';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const { language, setLanguage, currency, setCurrency, t } = useLocalization();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

    const navLinks = [
        { href: '/', label: t('nav_home') },
        { href: '/available', label: t('nav_available') },
        { href: '/gallery', label: t('nav_gallery') },
        { href: '/esa-info', label: t('nav_esa') },
        { href: '/process', label: t('nav_process') },
        { href: '/about', label: t('nav_about') },
    ];

    return (
        <nav className="navbar">
            <Link href="/" className="logo">
                ESA & SD Hub
            </Link>

            <div className="nav-right">
                <div className="nav-links desktop-only">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={pathname === link.href ? 'active' : ''}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="loc-controls mobile-visible">
                    <button
                        className={`loc-btn ${language === 'en' ? 'active' : ''}`}
                        onClick={() => { setLanguage('en'); setCurrency('USD'); }}
                    >
                        EN
                    </button>
                    <button
                        className={`loc-btn ${language === 'de' ? 'active' : ''}`}
                        onClick={() => { setLanguage('de'); setCurrency('EUR'); }}
                    >
                        DE
                    </button>
                </div>

                <button
                    className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isMenuOpen ? 'visible' : ''}`} onClick={() => setIsMenuOpen(false)}>
                <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
                    <div className="mobile-menu-header">
                        <span className="mobile-logo">ESA & SD Hub</span>
                        <button className="close-btn" onClick={() => setIsMenuOpen(false)}>✕</button>
                    </div>

                    <div className="mobile-links">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`mobile-link ${pathname === link.href ? 'active' : ''}`}
                            >
                                {link.label}
                                <span className="arrow">→</span>
                            </Link>
                        ))}
                    </div>

                    <div className="mobile-footer">
                        <p className="loc-title">{t('premium_esd')}</p>
                    </div>
                </div>
            </div>

            <style jsx>{`
            .navbar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1.5rem 10%;
                position: fixed;
                width: 100%;
                top: 0;
                z-index: 1000;
                background: rgba(255, 255, 255, 0.85);
                backdrop-filter: blur(15px);
                border-bottom: 1px solid rgba(0, 0, 0, 0.05);
                transition: all 0.3s ease;
            }
            .logo {
                font-size: 1.6rem;
                font-weight: 800;
                color: var(--primary);
                text-decoration: none;
                letter-spacing: -1px;
                background: linear-gradient(135deg, var(--primary) 0%, #5c7054 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            .nav-right {
                display: flex;
                align-items: center;
                gap: 2.5rem;
            }
            .nav-links {
                display: flex;
                align-items: center;
            }
            .nav-links a {
                text-decoration: none;
                color: var(--text);
                margin-left: 2rem;
                font-weight: 600;
                transition: var(--transition);
                font-size: 0.95rem;
                position: relative;
            }
            .nav-links a::after {
                content: '';
                position: absolute;
                bottom: -5px;
                left: 0;
                width: 0;
                height: 2px;
                background: var(--primary);
                transition: width 0.3s ease;
            }
            .nav-links a:hover::after, .nav-links a.active::after {
                width: 100%;
            }
            .nav-links a:hover, .nav-links a.active {
                color: var(--primary);
            }
            .loc-controls {
                display: flex;
                background: #f0f0f0;
                padding: 4px;
                border-radius: 12px;
                gap: 4px;
            }
            .loc-btn {
                background: none;
                border: none;
                padding: 6px 14px;
                border-radius: 9px;
                font-size: 0.8rem;
                font-weight: 700;
                cursor: pointer;
                transition: all 0.3s;
                color: #777;
            }
            .loc-btn.active {
                background: white;
                color: var(--primary);
                box-shadow: 0 4px 12px rgba(0,0,0,0.08);
            }
            .mobile-visible {
                display: flex;
            }

            /* Hamburger Menu Toggle */
            .menu-toggle {
                display: none;
                flex-direction: column;
                justify-content: space-between;
                width: 30px;
                height: 20px;
                background: none;
                border: none;
                cursor: pointer;
                padding: 0;
                z-index: 1001;
            }
            .menu-toggle span {
                width: 100%;
                height: 3px;
                background: var(--primary);
                border-radius: 10px;
                transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }
            .menu-toggle.open span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 6px);
            }
            .menu-toggle.open span:nth-child(2) {
                opacity: 0;
            }
            .menu-toggle.open span:nth-child(3) {
                transform: rotate(-45deg) translate(6px, -7px);
            }

            /* Mobile Menu Container */
            .mobile-menu-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.3);
                backdrop-filter: blur(5px);
                z-index: 999;
                opacity: 0;
                visibility: hidden;
                transition: all 0.4s ease;
            }
            .mobile-menu-overlay.visible {
                opacity: 1;
                visibility: visible;
            }
            .mobile-menu {
                position: absolute;
                top: 0;
                right: -100%;
                width: 85%;
                max-width: 400px;
                height: 100%;
                background: white;
                padding: 0;
                display: flex;
                flex-direction: column;
                box-shadow: -15px 0 50px rgba(0,0,0,0.2);
                transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
            }
            .mobile-menu.open {
                right: 0;
            }
            .mobile-menu-header {
                background: linear-gradient(160deg, var(--primary) 0%, #4a5d44 100%);
                padding: 3rem 2.5rem;
                margin: 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .mobile-logo {
                font-size: 1.6rem;
                font-weight: 800;
                color: #ffffff;
                text-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .close-btn {
                background: rgba(255,255,255,0.1);
                border: none;
                width: 44px;
                height: 44px;
                border-radius: 50%;
                font-size: 1.2rem;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                color: white;
                transition: background 0.3s;
            }
            .close-btn:hover {
                background: rgba(255,255,255,0.2);
            }
            .mobile-links {
                display: flex;
                flex-direction: column;
                gap: 0;
                flex-grow: 1;
                padding: 2rem 2.5rem;
                background: white;
            }
            .mobile-link {
                text-decoration: none;
                color: var(--text);
                font-size: 1.5rem;
                font-weight: 700;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1.2rem 0;
                border-bottom: 1px solid #f0f0f0;
                transition: all 0.3s ease;
            }
            .mobile-link:hover {
                color: var(--primary);
                padding-left: 10px;
            }
            .mobile-link .arrow {
                opacity: 0.5;
                transform: translateX(-10px);
                transition: all 0.3s ease;
                color: #999;
            }
            .mobile-link:hover .arrow, .mobile-link.active .arrow {
                opacity: 1;
                transform: translateX(0);
            }
            .mobile-link.active {
                color: var(--primary);
                background: rgba(124, 148, 115, 0.08);
                border-radius: 8px;
                padding-left: 1rem;
                padding-right: 1rem;
                margin: 0 -1rem;
            }
            .mobile-footer {
                margin-top: auto;
                padding: 2rem 2.5rem;
                border-top: 1px solid #f0f0f0;
                background: #fafafa;
            }
            .loc-title {
                font-size: 0.9rem;
                font-weight: 600;
                color: #666;
                text-transform: uppercase;
                letter-spacing: 1.5px;
                margin-bottom: 1rem;
            }
            .mobile-loc-controls {
                display: flex;
                gap: 0.8rem;
            }
            .mobile-loc-btn {
                flex: 1;
                padding: 1rem;
                border: 1.5px solid #e0e0e0;
                background: white;
                border-radius: 12px;
                font-weight: 700;
                font-size: 0.9rem;
                cursor: pointer;
                transition: all 0.3s ease;
                color: #666;
            }
            .mobile-loc-btn.active {
                background: var(--primary);
                color: white;
                border-color: var(--primary);
                box-shadow: 0 4px 12px rgba(124, 148, 115, 0.3);
            }

            @media (max-width: 1024px) {
                .desktop-only {
                    display: none;
                }
                .menu-toggle {
                    display: flex;
                }
                .navbar {
                    padding: 1rem 5%;
                }
                .nav-right {
                    gap: 1rem;
                }
                .loc-btn {
                    padding: 6px 10px;
                    font-size: 0.75rem;
                }
            }
        `}</style>
        </nav>
    );
}
