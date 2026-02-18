import React from 'react';
import { useTranslation } from 'react-i18next';
import './FipRankings.css';

const FipRankings: React.FC = () => {
    const { t } = useTranslation();

    // Generate years from 2019 to 2025
    const years = Array.from({ length: 2025 - 2019 }, (_, i) => 2019 + i);

    return (
        <section className="fip-rankings">
            <div className="container">
                <h2 className="rankings-title">{t('rankings.title')}</h2>

                <div className="rankings-grid">
                    {years.map((year) => (
                        <div key={year} className="rankings-card">
                            <div className="rankings-image-wrapper">
                                <img
                                    src={`https://picsum.photos/300/400?random=${year}`}
                                    alt={`Ranking ${year}`}
                                    className="rankings-image"
                                    loading="lazy"
                                />
                            </div>
                            <div className="rankings-info">
                                <span className="rankings-flag">🇦🇷</span>
                                <div>
                                    <h3 className="rankings-country">{t('rankings.country')}</h3>
                                    <p className="rankings-year">{year} - 2025</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FipRankings;
