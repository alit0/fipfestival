import React from 'react';
import { useTranslation } from 'react-i18next';
import './FipJury.css';

const FipJury: React.FC = () => {
    const { t } = useTranslation();

    const juryMembers = [
        { id: 1, countryKey: 'argentina', flag: '🇦🇷' },
        { id: 2, countryKey: 'colombia', flag: '🇨🇴' },
        { id: 3, countryKey: 'mexico', flag: '🇲🇽' },
        { id: 4, countryKey: 'chile', flag: '🇨🇱' },
        { id: 5, countryKey: 'uruguay', flag: '🇺🇾' },
        { id: 6, countryKey: 'brazil', flag: '🇧🇷' },
    ];

    return (
        <section className="fip-jury">
            <div className="container">
                <h2 className="jury-title">{t('jury.title')}</h2>

                <div className="jury-grid">
                    {juryMembers.map((member) => (
                        <div key={member.id} className="jury-card">
                            <div className="jury-image-wrapper">
                                <img
                                    src={`https://picsum.photos/150/150?random=${member.id + 50}`}
                                    alt="Jury Member"
                                    className="jury-image"
                                    loading="lazy"
                                />
                            </div>
                            <div className="jury-content">
                                <h3 className="jury-name">Diego Miranda</h3>
                                <p className="jury-role">{t('jury.role')}</p>
                                <div className="jury-country">
                                    <span className="country-badge">
                                        {t(`jury.countries.${member.countryKey}`)} {member.flag}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FipJury;
