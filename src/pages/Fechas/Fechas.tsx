import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Fechas.css';
import FipSocials from '../../components/layout/FipSocials/FipSocials';

const Fechas: React.FC = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Helper to render newlines from t()
    const renderWithNewlines = (text: string) => {
        if (!text) return null;
        return text.split('\n').map((line, i, arr) => (
            <React.Fragment key={i}>
                {line}
                {i !== arr.length - 1 && <br />}
            </React.Fragment>
        ));
    };

    return (
        <div className="fechas-page container">
            <h1 className="fechas-title">
                {renderWithNewlines(t('fechasCierre.title', 'Fechas de cierre\n2026'))}
            </h1>

            <div className="fechas-regions-grid">
                {t('fechasCierre.regions', { returnObjects: true }) && Array.isArray(t('fechasCierre.regions', { returnObjects: true })) &&
                    (t('fechasCierre.regions', { returnObjects: true }) as any[]).map((region: any, index: number) => (
                        <div className={`fecha-card region-card border-${region.colorId}`} key={index}>
                            <div className="card-header">
                                <h3 className="card-title">{region.title}</h3>
                                {region.badge && <span className="card-badge green-badge">{region.badge}</span>}
                            </div>
                            <p className="card-countries">{region.countries}</p>
                            <button className="card-btn">{t('fechasCierre.registerBtn', 'Inscribite ->')}</button>
                        </div>
                    ))}
            </div>

            <div className="fechas-stages-grid">
                {t('fechasCierre.stages', { returnObjects: true }) && Array.isArray(t('fechasCierre.stages', { returnObjects: true })) &&
                    (t('fechasCierre.stages', { returnObjects: true }) as any[]).map((stage: any, index: number) => {
                        const isFinal = stage.isFinal;
                        return (
                            <div className={`fecha-card stage-card ${isFinal ? 'border-gold final-stage' : 'border-darkpurple'}`} key={index}>
                                <div className="card-header">
                                    <h3 className="card-title stage-title">{stage.title}</h3>
                                    {stage.badge && <span className={`card-badge ${isFinal ? 'grey-badge' : 'green-badge'}`}>{stage.badge}</span>}
                                </div>
                                <p className="card-desc">{stage.description}</p>
                            </div>
                        )
                    })}
            </div>

            <div className="fechas-footer-note">
                <p>{t('fechasCierre.footerNote', ':: Se podrán presentar en el FIP todos los trabajos realizados entre el 1° de enero del 2024 hasta el 1° de Septiembre 2025 y que no se hayan presentado anteriormente ::')}</p>
            </div>

            <FipSocials />
        </div>
    );
};

export default Fechas;
