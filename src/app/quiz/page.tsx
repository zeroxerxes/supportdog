"use client";

import BreedQuiz from "@/components/BreedQuiz";
import { useLocalization } from "@/context/LocalizationContext";

export default function QuizPage() {
    const { language, t } = useLocalization();

    return (
        <div className="quiz-page">
            <div className="page-header">
                <h1>{t('quiz_intro_title')}</h1>
                <p>{t('quiz_intro_desc')}</p>
            </div>

            <BreedQuiz />

            <style jsx>{`
                .quiz-page {
                    padding: 8rem 5% 4rem;
                    background: var(--bg-gradient);
                    min-height: 100vh;
                }
                .page-header {
                    text-align: center;
                    margin-bottom: 3rem;
                }
                h1 {
                    font-size: 3rem;
                    color: var(--primary);
                    margin-bottom: 1rem;
                }
                p {
                    color: #666;
                    font-size: 1.2rem;
                }
            `}</style>
        </div>
    );
}
