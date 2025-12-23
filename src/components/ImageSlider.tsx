"use client";

import { useState, useEffect, useCallback } from 'react';

interface ImageSliderProps {
    images: string[];
    alt: string;
    aspectRatio?: string;
    autoSlide?: boolean;
    autoSlideInterval?: number;
}

export default function ImageSlider({
    images,
    alt,
    aspectRatio = "4/3",
    autoSlide = true,
    autoSlideInterval = 3000
}: ImageSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback((e?: React.MouseEvent) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prevSlide = useCallback((e?: React.MouseEvent) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(nextSlide, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval, nextSlide]);

    if (!images || images.length === 0) return null;

    return (
        <div className="slider-container">
            <div className="slider-wrapper">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentIndex ? 'active' : ''}`}
                    >
                        <img src={`/dog-pics/${img}`} alt={`${alt} - view ${index + 1}`} />
                    </div>
                ))}
            </div>

            {images.length > 1 && (
                <>
                    <button className="slider-btn prev" onClick={prevSlide}>&#10094;</button>
                    <button className="slider-btn next" onClick={nextSlide}>&#10095;</button>

                    <div className="slider-dots">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setCurrentIndex(index);
                                }}
                            ></span>
                        ))}
                    </div>
                </>
            )}

            <style jsx>{`
                .slider-container {
                    position: relative;
                    width: 100%;
                    aspect-ratio: ${aspectRatio};
                    overflow: hidden;
                }
                .slider-wrapper {
                    position: relative;
                    width: 100%;
                    height: 100%;
                }
                .slide {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    transition: opacity 0.5s ease-in-out;
                    z-index: 1;
                }
                .slide.active {
                    opacity: 1;
                    z-index: 2;
                }
                .slide img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .slider-btn {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(255, 255, 255, 0.7);
                    border: none;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    cursor: pointer;
                    z-index: 10;
                    font-size: 1.2rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--primary);
                    transition: background 0.3s;
                }
                .slider-btn:hover {
                    background: white;
                }
                .prev { left: 10px; }
                .next { right: 10px; }
                
                .slider-dots {
                    position: absolute;
                    bottom: 10px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    gap: 8px;
                    z-index: 10;
                }
                .dot {
                    width: 8px;
                    height: 8px;
                    background: rgba(255, 255, 255, 0.5);
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all 0.3s;
                }
                .dot.active {
                    background: white;
                    transform: scale(1.2);
                }
            `}</style>
        </div>
    );
}
