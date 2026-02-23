import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Categorias.css';
import { FaArrowDown, FaTrophy } from 'react-icons/fa';
import FipSocials from '../../components/layout/FipSocials/FipSocials';

const Categorias: React.FC = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Simulated array of categories to create the 3-column grid look as requested.
    // In a real scenario, this might come from t('categorias.list', {returnObjects: true})
    const categoryItems = Array.from({ length: 6 }, (_, i) => ({
        id: i + 1,
        title: t('rubros.cardTitle'),
        subtitle: `${t('rubros.cardSubtitle')} ${i + 1}`
    }));

    return (
        <div className="categorias-page container">
            <h1 className="categorias-title">
                {t('categorias.pageTitle', 'Categorías del FIP\n2026').split('\n').map((line: string, i: number) => (
                    <React.Fragment key={i}>
                        {line}
                        {i !== t('categorias.pageTitle', 'Categorías del FIP\n2026').split('\n').length - 1 && <br />}
                    </React.Fragment>
                ))}
            </h1>

            <div className="categorias-grid">
                {categoryItems.map((cat) => (
                    <div className="categoria-card" key={cat.id}>
                        <h3 className="categoria-card-title">{cat.title}</h3>
                        <p className="categoria-card-subtitle">{cat.subtitle}</p>
                    </div>
                ))}
            </div>

            <div className="categorias-download-wrapper">
                <button className="categorias-download-btn">
                    {t('categorias.downloadPdf', 'Descargar PDF Categorías en español')}
                    <span className="download-icon"><FaArrowDown size={14} /></span>
                </button>
            </div>

            <div className="categorias-sections-container">
                {/* Render predefined Text Sections from i18n if they exist */}
                {t('categorias.sections', { returnObjects: true }) && Array.isArray(t('categorias.sections', { returnObjects: true })) &&
                    (t('categorias.sections', { returnObjects: true }) as any[]).map((section: any, idx: number) => (
                        <div className="categorias-text-section" key={idx}>
                            <h2 className="categorias-section-header">
                                <span className="section-id">{section.id}</span>
                                <span className="section-divider">|</span>
                                <span className="section-title">{section.title}</span>
                            </h2>
                            {section.text && (
                                <p className="categorias-section-text">
                                    {section.text.split('\n').map((line: string, i: number) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            {i !== section.text.split('\n').length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                </p>
                            )}
                        </div>
                    ))}

                <div className="categorias-placeholder-box"></div>

                {/* Render the Detailed Categories from the imported Data Store */}
                <div className="categorias-detailed-list">
                    {t('categorias.detailedList', { returnObjects: true }) && Array.isArray(t('categorias.detailedList', { returnObjects: true })) &&
                        (t('categorias.detailedList', { returnObjects: true }) as any[]).map((categoryBlock: any, index: number) => (
                            <div className="categoria-detail-block" key={index}>
                                <h2 className="categoria-detail-header">
                                    {categoryBlock.categoryTitle}
                                </h2>
                                {categoryBlock.categoryDescription && (
                                    <p className="categoria-detail-description">
                                        {categoryBlock.categoryDescription}
                                    </p>
                                )}

                                <div className="rubro-items">
                                    {categoryBlock.items.map((item: any, itemIdx: number) => (
                                        <div className="rubro-item" key={itemIdx}>
                                            <div className="rubro-icon-wrapper">
                                                <FaTrophy className="rubro-icon" />
                                            </div>
                                            <div className="rubro-content">
                                                <h3 className="rubro-title">
                                                    <span className="rubro-id">{item.id}</span>
                                                    {item.id && <span className="rubro-divider">|</span>}
                                                    {item.title}
                                                </h3>
                                                <p className="rubro-description">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            <FipSocials />
        </div>
    );
};

export default Categorias;
