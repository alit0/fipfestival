import React from 'react';
import { useTranslation } from 'react-i18next';
import './FipDates.css';

const FipDates: React.FC = () => {
    const { t } = useTranslation();

    const dates = [1, 2, 3, 4]; // 4 identical cards for now

    return (
        <section className="fip-dates">
            <div className="container">
                <h2 className="section-title">Las fechas del FIP</h2>

                <div className="dates-grid">
                    {dates.map((item) => (
                        <div key={item} className="date-card">
                            <span className="date-tag">{t('dates.tag')}</span>
                            <h3 className="date-deadline">{t('dates.date')}</h3>
                            <p className="date-discount">{t('dates.discount')}</p>
                            <button className="date-cta">
                                {t('dates.cta')}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="dates-footer">
                    <button className="dates-closing-btn">
                        {t('dates.closing')}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FipDates;
