"use client";

import { useState } from "react";
import { galleryImages } from "@/data/galleryImages";
import { useLocalization } from "@/context/LocalizationContext";

export default function GalleryPage() {
    const [filter, setFilter] = useState("all");
    const { t } = useLocalization();

    const filteredImages = filter === "all"
        ? galleryImages
        : galleryImages.filter(img => img.breed === filter);

    return (
        <div className="gallery-container">
            <div className="section-header">
                <h1>{t('gallery_title')}</h1>
                <p>{t('gallery_desc')}</p>
            </div>

            <div className="gallery-filters">
                <button
                    className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                    onClick={() => setFilter('all')}
                >
                    {t('filter_all')}
                </button>
                <button
                    className={`filter-btn ${filter === 'Aussie' ? 'active' : ''}`}
                    onClick={() => setFilter('Aussie')}
                >
                    {t('filter_aussie')}
                </button>
                <button
                    className={`filter-btn ${filter === 'Poodle' ? 'active' : ''}`}
                    onClick={() => setFilter('Poodle')}
                >
                    {t('filter_poodle')}
                </button>
                <button
                    className={`filter-btn ${filter === 'Cane' ? 'active' : ''}`}
                    onClick={() => setFilter('Cane')}
                >
                    {t('filter_cane')}
                </button>
            </div>

            <div className="masonry-grid">
                {filteredImages.map((img, index) => (
                    <div
                        key={`${img.src}-${index}`}
                        className="masonry-item reveal"
                        style={{ animationDelay: `${(index % 10) * 0.1}s` }}
                    >
                        <div className="image-wrapper">
                            <img src={`/dog-pics/${img.src}`} alt={img.name} loading="lazy" />
                            <div className="overlay">
                                <div className="dog-meta">
                                    <h3>{img.name}</h3>
                                    <span className="breed-label">{img.breed === 'Aussie' ? t('filter_aussie') : img.breed === 'Poodle' ? t('filter_poodle') : t('filter_cane')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
        .gallery-container {
          padding: 8rem 5% 4rem;
          background: #fafafa;
          min-height: 100vh;
        }
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .section-header h1 {
          font-size: 3.5rem;
          color: var(--primary);
          margin-bottom: 1rem;
        }
        .section-header p {
          font-size: 1.2rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }
        .gallery-filters {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 4rem;
          flex-wrap: wrap;
        }
        .filter-btn {
          padding: 0.8rem 1.5rem;
          border: none;
          background: white;
          color: #666;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }
        .filter-btn.active {
          background: var(--primary);
          color: white;
          box-shadow: 0 8px 20px rgba(124, 148, 115, 0.3);
        }
        .masonry-grid {
          column-count: 4;
          column-gap: 1.5rem;
          width: 100%;
        }
        @media (max-width: 1200px) { .masonry-grid { column-count: 3; } }
        @media (max-width: 900px) { .masonry-grid { column-count: 2; } }
        @media (max-width: 600px) { .masonry-grid { column-count: 1; } }

        .masonry-item {
          break-inside: avoid;
          margin-bottom: 1.5rem;
          border-radius: 20px;
          overflow: hidden;
          background: white;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: transform 0.3s ease;
        }
        .masonry-item:hover {
          transform: translateY(-5px);
        }
        .image-wrapper {
          position: relative;
          cursor: pointer;
        }
        .image-wrapper img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }
        .masonry-item:hover img {
          transform: scale(1.05);
        }
        .overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
          padding: 2rem 1.5rem 1.5rem;
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: flex-end;
        }
        .image-wrapper:hover .overlay {
          opacity: 1;
        }
        .dog-meta h3 {
          color: white;
          margin-bottom: 0.3rem;
          font-size: 1.4rem;
        }
        .breed-label {
          color: rgba(255,255,255,0.8);
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      `}</style>
        </div>
    );
}
