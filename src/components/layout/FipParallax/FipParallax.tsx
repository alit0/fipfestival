import React from 'react';
import { useTranslation } from 'react-i18next';
import './FipParallax.css';

const FipParallax: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="fip-parallax">
            <div className="parallax-overlay">
                <div className="container parallax-content">
                    <h2 className="parallax-title">{t('parallax.title')}</h2>
                    <p className="parallax-description">{t('parallax.description')}</p>
                    <button className="parallax-cta">
                        {t('parallax.cta')}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FipParallax;
