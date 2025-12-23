"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { puppies } from "@/data/puppies";
import { galleryImages } from "@/data/galleryImages";
import ImageSlider from "@/components/ImageSlider";
import { useLocalization } from "@/context/LocalizationContext";

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { t, formatPrice, language } = useLocalization();

  // Custom Cursor Logic
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const featuredJoy = galleryImages.slice(0, 8);

  return (
    <>
      <div className="cursor-follower" ref={cursorRef}></div>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="fade-in">{t('hero_title')} <br /><span className="highlight">{t('hero_subtitle')}</span></h1>
          <p className="fade-in-delayed">{t('hero_desc')}</p>
          <div className="cta-group fade-in-delayed">
            <a href="/available" className="btn btn-primary">{t('cta_find')}</a>
            <a href="/gallery" className="btn btn-secondary">{t('nav_gallery')}</a>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-blob"></div>
          <div className="hero-img-wrapper" style={{ position: 'relative', width: '100%', maxWidth: '500px', aspectRatio: '1' }}>
            <img src="/dog-pics/Australian Shepherd 1 (1).jpg" alt="Support Dog" className="hero-img" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>



      {/* Breed Quiz Section - Now appears first */}
      <section className="quiz-section reveal">
        <div className="quiz-cta">
          <div className="quiz-cta-content">
            <h2>{t('quiz_title')}</h2>
            <p>{t('quiz_desc')}</p>
            <Link href="/quiz" className="btn btn-secondary">{t('quiz_start')}</Link>
          </div>
        </div>
        <style jsx>{`
          .quiz-section {
            padding: 6rem 10%;
            background: white;
          }
          .quiz-cta {
            background: linear-gradient(135deg, var(--primary) 0%, #5c7054 100%);
            border-radius: 40px;
            padding: 4rem;
            text-align: center;
            color: white;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            max-width: 900px;
            margin: 0 auto;
          }
          .quiz-cta h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: white;
            font-family: var(--font-quicksand), sans-serif;
          }
          .quiz-cta p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.9;
          }
          @media (max-width: 768px) {
            .quiz-section {
              padding: 4rem 5%;
            }
            .quiz-cta {
              padding: 3rem 2rem;
            }
            .quiz-cta h2 {
              font-size: 2rem;
            }
          }
        `}</style>
      </section>

      {/* Featured Puppies Section */}
      <section className="featured-section reveal">
        <div className="section-header">
          <h2>{t('nav_available')}</h2>
          <p>{t('ready_to_meet')}</p>
        </div>

        <div className="gallery-grid">
          {puppies.slice(0, 4).map((puppy, index) => (
            <Link href={`/available/${puppy.id}`} key={puppy.id} className={`featured-card-link reveal delay-${index + 1}`}>
              <div className="featured-card">
                <div className="featured-image-wrapper">
                  <ImageSlider images={puppy.images} alt={puppy.name} aspectRatio="1/1" />
                </div>
                <div className="featured-info">
                  <div className="info-row">
                    <h3>{puppy.name}</h3>
                    <div className="price-container">
                      {puppy.originalPrice && <span className="original-price">{formatPrice(puppy.originalPrice)}</span>}
                      <span className="price">{formatPrice(puppy.price)}</span>
                    </div>
                  </div>
                  <div className="card-footer">
                    <p className="breed">{puppy.breed}</p>
                    {puppy.discountPercentage && <span className="discount-tag">-{puppy.discountPercentage}% {t('off')}</span>}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="center-btn-container reveal">
          <Link href="/available" className="btn btn-primary">{t('nav_available')}</Link>
        </div>

        <style jsx>{`
                .featured-section {
                    padding: 6rem 10%;
                    background: #fcfcfc;
                }
                .featured-card-link {
                    text-decoration: none;
                    color: inherit;
                }
                .featured-card {
                    background: white;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
                    transition: transform 0.3s ease;
                }
                .featured-card:hover {
                    transform: translateY(-5px);
                }
                .featured-image-wrapper {
                   position: relative;
                }
                .featured-info {
                    padding: 1.5rem;
                }
                .center-btn-container {
                    text-align: center;
                    margin: 4rem 0;
                }
                .info-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 0.5rem;
                }
                .info-row h3 {
                    margin: 0;
                    font-size: 1.4rem;
                }
                .price {
                    font-weight: 700;
                    color: var(--primary);
                    font-size: 1.1rem;
                }
                .price-container {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                }
                .original-price {
                    font-size: 0.8rem;
                    text-decoration: line-through;
                    color: #999;
                    font-weight: 600;
                }
                .card-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .discount-tag {
                    font-size: 0.7rem;
                    font-weight: 800;
                    background: #c41e3a;
                    color: white;
                    padding: 0.2rem 0.5rem;
                    border-radius: 4px;
                }
                .breed {
                    color: #777;
                    margin: 0;
                    font-size: 0.9rem;
                }
                .center-btn-container {
                    text-align: center;
                    margin-top: 3rem;
                }
            `}</style>
      </section>

      {/* Joy Gallery Teaser */}
      <section id="gallery" className="gallery-section reveal">
        <div className="section-header">
          <h2>{t('gallery_title')}</h2>
          <p>{t('gallery_desc')}</p>
        </div>

        <div className="joy-grid">
          {featuredJoy.map((img, index) => (
            <div key={index} className={`joy-card reveal delay-${(index % 4) + 1}`}>
              <img src={`/dog-pics/${img.src}`} alt={img.name} />
            </div>
          ))}
        </div>

        <div className="center-btn-container reveal">
          <Link href="/gallery" className="btn btn-secondary">{t('view_all_joy')}</Link>
        </div>

        <style jsx>{`
            .gallery-section {
                padding: 6rem 10%;
                background: white;
            }
            .joy-grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 1.5rem;
                margin-top: 3rem;
                margin-bottom: 3rem;
            }
            .joy-card {
                aspect-ratio: 1;
                border-radius: 20px;
                overflow: hidden;
                box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                transition: transform 0.3s ease;
            }
            .joy-card:hover { transform: scale(1.03); }
            .joy-card img { width: 100%; height: 100%; object-fit: cover; }
            
            @media (max-width: 1024px) {
                .joy-grid { grid-template-columns: repeat(3, 1fr); }
            }
            @media (max-width: 768px) {
                .joy-grid { 
                   display: flex;
                   overflow-x: auto;
                   padding-bottom: 1rem;
                   gap: 1rem;
                   scroll-snap-type: x mandatory;
                }
                .joy-card {
                   flex: 0 0 250px;
                   scroll-snap-align: center;
                }
                .joy-grid::-webkit-scrollbar { display: none; }
            }
        `}</style>
      </section>

      <section id="support" className="support-section">
        <div className="support-card">
          <div className="support-content">
            <h2>{t('remember_title')}</h2>
            <ul className="affirmations">
              <li>{t('affirmation_1')}</li>
              <li>{t('affirmation_2')}</li>
              <li>{t('affirmation_3')}</li>
              <li>{t('affirmation_4')}</li>
            </ul>
            <div className="resource-links">
              <p>{t('join_community')}</p>
              <div className="links-grid">
                <a href="https://web.facebook.com/esalovehub" target="_blank" rel="noopener noreferrer" className="fb-link">
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '18px', height: '18px', verticalAlign: 'middle', marginRight: '5px' }}>
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  {t('fb_group')}
                </a>
                <a href="https://m.me/327884021233501" target="_blank" rel="noopener noreferrer" className="messenger-link">
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '18px', height: '18px', verticalAlign: 'middle', marginRight: '5px' }}>
                    <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.304 2.246.464 3.443.464 6.627 0 12-4.974 12-11.111C24 4.974 18.627 0 12 0zm1.291 14.193l-3.047-3.253-5.947 3.253 6.545-6.953 3.111 3.253 5.883-3.253-6.545 6.953z" />
                  </svg>
                  Messenger
                </a>
                <a href="https://988lifeline.org/" target="_blank" rel="noopener noreferrer">988 Lifeline</a>
                <a href="https://www.crisistextline.org/" target="_blank" rel="noopener noreferrer">Crisis Text Line</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
