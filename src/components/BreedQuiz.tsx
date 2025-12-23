"use client";

import { useState } from 'react';
import { useLocalization } from '@/context/LocalizationContext';
import Link from 'next/link';

interface Question {
    id: number;
    text: { en: string; de: string };
    options: {
        id: string;
        text: { en: string; de: string };
        weights: { [breed: string]: number };
    }[];
}

const quizQuestions: Question[] = [
    {
        id: 1,
        text: { en: "What is your living situation?", de: "Wie ist Ihre Wohnsituation?" },
        options: [
            { id: 'apt', text: { en: "Apartment / Small space", de: "Wohnung / Kleiner Raum" }, weights: { "Poodle": 3, "Australian Shepherd": 1, "Cane Corso": 0 } },
            { id: 'house', text: { en: "House with fenced yard", de: "Haus mit eingezäuntem Garten" }, weights: { "Poodle": 3, "Australian Shepherd": 3, "Cane Corso": 2 } },
            { id: 'estate', text: { en: "Large estate / Rural", de: "Großes Grundstück / Ländlich" }, weights: { "Poodle": 2, "Australian Shepherd": 3, "Cane Corso": 3 } },
        ]
    },
    {
        id: 2,
        text: { en: "How active is your lifestyle?", de: "Wie aktiv ist Ihr Lebensstil?" },
        options: [
            { id: 'low', text: { en: "Relaxed / Occasional walks", de: "Entspannt / Gelegentliche Spaziergänge" }, weights: { "Poodle": 2, "Australian Shepherd": 0, "Cane Corso": 1 } },
            { id: 'mod', text: { en: "Moderate / Daily walks & play", de: "Moderat / Tägliche Spaziergänge & Spiele" }, weights: { "Poodle": 3, "Australian Shepherd": 2, "Cane Corso": 2 } },
            { id: 'high', text: { en: "Very active / Jogging & training", de: "Sehr aktiv / Joggen & Training" }, weights: { "Poodle": 2, "Australian Shepherd": 3, "Cane Corso": 3 } },
        ]
    },
    {
        id: 3,
        text: { en: "Do you have prior experience with dogs?", de: "Haben Sie bereits Erfahrung mit Hunden?" },
        options: [
            { id: 'none', text: { en: "First-time owner", de: "Zum ersten Mal Hundebesitzer" }, weights: { "Poodle": 3, "Australian Shepherd": 1, "Cane Corso": 0 } },
            { id: 'some', text: { en: "Have owned dogs before", de: "Hatte schon früher Hunde" }, weights: { "Poodle": 3, "Australian Shepherd": 2, "Cane Corso": 2 } },
            { id: 'exp', text: { en: "Experienced / Skilled trainer", de: "Erfahren / Erfahrener Trainer" }, weights: { "Poodle": 3, "Australian Shepherd": 3, "Cane Corso": 3 } },
        ]
    },
    {
        id: 4,
        text: { en: "Are you looking for a hypoallergenic dog?", de: "Suchen Sie einen hypoallergenen Hund?" },
        options: [
            { id: 'yes', text: { en: "Yes, allergies are a concern", de: "Ja, Allergien sind ein Thema" }, weights: { "Poodle": 10, "Australian Shepherd": -5, "Cane Corso": 0 } },
            { id: 'no', text: { en: "No, shedding is not an issue", de: "Nein, Haaren ist kein Problem" }, weights: { "Poodle": 2, "Australian Shepherd": 2, "Cane Corso": 2 } },
        ]
    }
];

export default function BreedQuiz() {
    const [currentStep, setCurrentStep] = useState(0);
    const [scores, setScores] = useState<{ [breed: string]: number }>({ "Poodle": 0, "Australian Shepherd": 0, "Cane Corso": 0 });
    const [isFinished, setIsFinished] = useState(false);
    const { language, t } = useLocalization();

    const handleOptionClick = (weights: { [breed: string]: number }) => {
        const newScores = { ...scores };
        Object.keys(weights).forEach(breed => {
            newScores[breed] += weights[breed];
        });
        setScores(newScores);

        if (currentStep < quizQuestions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setIsFinished(true);
        }
    };

    const getResult = () => {
        let maxScore = -Infinity;
        let resultBreed = "Poodle";
        Object.keys(scores).forEach(breed => {
            if (scores[breed] > maxScore) {
                maxScore = scores[breed];
                resultBreed = breed;
            }
        });
        return resultBreed;
    };

    const resetQuiz = () => {
        setCurrentStep(0);
        setScores({ "Poodle": 0, "Australian Shepherd": 0, "Cane Corso": 0 });
        setIsFinished(false);
    };

    if (isFinished) {
        const winner = getResult();
        return (
            <div className="quiz-container finished">
                <div className="ribbon">🎉</div>
                <h2>{t('perfect_match')}</h2>
                <div className="result-card">
                    <h3>{winner}</h3>
                    <p className="result-desc">
                        {winner === "Poodle" && (language === 'en' ? "Highly intelligent, easy to train, and allergy-friendly. Poodles are versatile companions for all living situations." : "Hochintelligent, leicht zu trainieren und allergikerfreundlich. Pudel sind vielseitige Begleiter für jede Lebenslage.")}
                        {winner === "Australian Shepherd" && (language === 'en' ? "Energetic, loyal, and incredibly smart. Best for active owners who love outdoor adventures." : "Energetisch, loyal und unglaublich schlau. Am besten für aktive Besitzer, die Outdoor-Abenteuer lieben.")}
                        {winner === "Cane Corso" && (language === 'en' ? "Protective, noble, and devoted. A powerful guardian who needs a confident handler and space to thrive." : "Beschützend, edel und hingebungsvoll. Ein kraftvoller Wächter, der eine selbstbewusste Führung und Platz zum Gedeihen braucht.")}
                    </p>
                    <Link href="/available" className="btn-primary-quiz">
                        {t('see_available')}
                    </Link>
                    <button className="btn-retry" onClick={resetQuiz}>
                        {t('take_again')}
                    </button>
                </div>
                <style jsx>{`
                    .quiz-container {
                        max-width: 600px;
                        margin: 2rem auto;
                        padding: 3rem;
                        background: white;
                        border-radius: 30px;
                        box-shadow: 0 20px 50px rgba(0,0,0,0.08);
                        text-align: center;
                        position: relative;
                        overflow: hidden;
                    }
                    .ribbon { font-size: 3rem; margin-bottom: 1rem; }
                    .result-card h3 { font-size: 2.5rem; color: var(--primary); margin-bottom: 1rem; }
                    .result-desc { color: #666; font-size: 1.1rem; line-height: 1.6; margin-bottom: 2.5rem; }
                    .btn-primary-quiz {
                        display: inline-block;
                        background: var(--primary);
                        color: white;
                        padding: 1rem 2.5rem;
                        border-radius: 50px;
                        text-decoration: none;
                        font-weight: 700;
                        margin-bottom: 1rem;
                        transition: transform 0.3s;
                    }
                    .btn-primary-quiz:hover { transform: translateY(-3px); }
                    .btn-retry {
                        display: block;
                        width: 100%;
                        background: transparent;
                        border: none;
                        color: #999;
                        cursor: pointer;
                        font-weight: 600;
                    }
                `}</style>
            </div>
        );
    }

    const currentQuestion = quizQuestions[currentStep];

    return (
        <div className="quiz-container">
            <div className="progress-bar">
                <div className="progress" style={{ width: `${((currentStep) / quizQuestions.length) * 100}%` }}></div>
            </div>
            <span className="step-label">{t('question')} {currentStep + 1} {t('of')} {quizQuestions.length}</span>
            <h2>{currentQuestion.text[language]}</h2>
            <div className="options-grid">
                {currentQuestion.options.map(option => (
                    <button
                        key={option.id}
                        className="option-btn"
                        onClick={() => handleOptionClick(option.weights)}
                    >
                        {option.text[language]}
                    </button>
                ))}
            </div>

            <style jsx>{`
                .quiz-container {
                    max-width: 600px;
                    margin: 2rem auto;
                    padding: 3rem;
                    background: white;
                    border-radius: 30px;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.08);
                    text-align: center;
                }
                .progress-bar {
                    width: 100%;
                    height: 6px;
                    background: #eee;
                    border-radius: 10px;
                    margin-bottom: 1rem;
                    overflow: hidden;
                }
                .progress {
                    height: 100%;
                    background: var(--primary);
                    transition: width 0.4s ease;
                }
                .step-label { font-size: 0.8rem; color: #999; text-transform: uppercase; letter-spacing: 1px; }
                h2 { font-size: 2rem; color: #333; margin: 1.5rem 0 2.5rem; }
                .options-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 1rem;
                }
                .option-btn {
                    padding: 1.2rem;
                    border: 2px solid #f0f0f0;
                    background: white;
                    border-radius: 15px;
                    font-size: 1.1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s;
                    color: #555;
                }
                .option-btn:hover {
                    border-color: var(--primary);
                    color: var(--primary);
                    background: #fdfdfd;
                    transform: translateX(5px);
                }
            `}</style>
        </div>
    );
}
