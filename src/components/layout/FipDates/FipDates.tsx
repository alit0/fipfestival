import React from 'react';
import { useTranslation } from 'react-i18next';
import './FipDates.css';

const FipDates: React.FC = () => {
    const { t } = useTranslation();

    const datesList = [
        { id: 1, tag: "PRIMERA LLAMADA", date: "hasta el 10 de abril, 2026", discount: "25% de descuento por inscripción anticipada", cta: "INSCRIBITE ->" },
        { id: 2, tag: "SEGUNDA LLAMADA", date: "hasta el 15 de mayo, 2026", discount: "15% de descuento en la inscripción", cta: "INSCRIBITE ->" },
        { id: 3, tag: "TERCERA LLAMADA", date: "hasta el 20 de junio, 2026", discount: "5% de descuento en la inscripción", cta: "INSCRIBITE ->" },
        { id: 4, tag: "CIERRE DEFINITIVO", date: "hasta el 10 de julio, 2026", discount: "Inscripción a precio regular", cta: "INSCRIBITE ->" }
    ];

    return (
        <section className="fip-dates">
            <div className="container">
                <h2 className="section-title">Las fechas del FIP</h2>

                <div className="dates-grid">
                    {datesList.map((item) => (
                        <div key={item.id} className="date-card">
                            <span className="date-tag">{item.tag}</span>
                            <h3 className="date-deadline">{item.date}</h3>
                            <p className="date-discount">{item.discount}</p>
                            <button className="date-cta">
                                {item.cta}
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
