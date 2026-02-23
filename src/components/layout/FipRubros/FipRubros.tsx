import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronRight } from 'react-icons/fa';
import './FipRubros.css';

const FipRubros: React.FC = () => {
    const { t } = useTranslation();

    const rubrosList = [
        { id: 1, title: "Campañas y activaciones", subtitle: "MARKETING PROMOCIONAL (MP)" },
        { id: 2, title: "Corporativos y masivos", subtitle: "EVENTOS (EV)" },
        { id: 3, title: "Relaciones Públicas", subtitle: "PR Y COMUNICACIÓN (PR)" },
        { id: 4, title: "Campañas online", subtitle: "MARKETING DIGITAL (MD)" },
        { id: 5, title: "Identidad visual", subtitle: "DISEÑO Y PACKAGING (DP)" },
        { id: 6, title: "Audiovisual y gráfica", subtitle: "PRODUCCIÓN (PD)" }
    ];

    return (
        <section className="fip-rubros">
            <div className="container">
                <h2 className="rubros-title">{t('rubros.title')}</h2>

                <div className="rubros-grid">
                    {rubrosList.map((item) => (
                        <div key={item.id} className="rubros-card">
                            <div className="card-content">
                                <h3 className="card-title">{item.title}</h3>
                                <p className="card-subtitle">{item.subtitle}</p>
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
