import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './FipParallax.css';

const FipParallax: React.FC = () => {
    const { t } = useTranslation();
    const sectionRef = useRef<HTMLElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let animId: number;

        const handleScroll = () => {
            animId = requestAnimationFrame(() => {
                if (!sectionRef.current || !bgRef.current) return;

                const rect = sectionRef.current.getBoundingClientRect();
                const viewH = window.innerHeight;

                // Only animate when section is in view
                if (rect.bottom < 0 || rect.top > viewH) return;

                // Progress 0→1 as section travels through viewport
                const progress = (viewH - rect.top) / (viewH + rect.height);
                // Move bg at 70% of scroll speed in opposite direction → strong parallax
                const offset = (progress - 0.5) * rect.height * 0.7;

                bgRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // initial position

        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animId);
        };
    }, []);

    return (
        <section className="fip-parallax" ref={sectionRef}>
            {/* Parallax background layer */}
            <div className="parallax-bg" ref={bgRef} />

            {/* Dark overlay */}
            <div className="parallax-overlay" />

            {/* Content */}
            <div className="container parallax-content">
                <h2 className="parallax-title">{t('parallax.title')}</h2>
                <p className="parallax-description">{t('parallax.description')}</p>
                <button className="parallax-cta">
                    {t('parallax.cta')}
                </button>
            </div>
        </section>
    );
};

export default FipParallax;
