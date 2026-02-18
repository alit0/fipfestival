import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronRight } from 'react-icons/fa';
import './FipRubros.css';

const FipRubros: React.FC = () => {
    const { t } = useTranslation();

    const items = [1, 2, 3, 4, 5, 6]; // 6 identical cards

    return (
        <section className="fip-rubros">
            <div className="container">
                <h2 className="rubros-title">{t('rubros.title')}</h2>

                <div className="rubros-grid">
                    {items.map((item) => (
                        <div key={item} className="rubros-card">
                            <div className="card-content">
                                <h3 className="card-title">{t('rubros.cardTitle')}</h3>
                                <p className="card-subtitle">{t('rubros.cardSubtitle')}</p>
                            </div>
                            <div className="card-icon">
                                <FaChevronRight />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FipRubros;
