import React from 'react';
import { useTranslation } from 'react-i18next';
import FipSocials from '../../components/layout/FipSocials/FipSocials';
import './Tarifario.css';

const Tarifario: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="tarifario-page">
            <div className="container tarifario-container">
                <h1 className="tarifario-title">{t('tarifario.title')}</h1>

                {/* Section: Discounts 2026 */}
                <div className="discounts-section">
                    <span className="discounts-badge">{t('tarifario.discounts.badge')}</span>

                    <div className="discount-main-card">
                        <div className="discount-value">{t('tarifario.discounts.main.value')}</div>
                        <div className="discount-desc">{t('tarifario.discounts.main.desc')}</div>
                    </div>

                    <div className="discount-sub-cards">
                        <div className="sub-card">
                            <span className="sub-value">{t('tarifario.discounts.sub1.value')}</span>
                            <span className="sub-desc">{t('tarifario.discounts.sub1.desc')}</span>
                        </div>
                        <div className="sub-card">
                            <span className="sub-value">{t('tarifario.discounts.sub2.value')}</span>
                            <span className="sub-desc">{t('tarifario.discounts.sub2.desc')}</span>
                        </div>
                        <div className="sub-card">
                            <span className="sub-value">{t('tarifario.discounts.sub3.value')}</span>
                            <span className="sub-desc">{t('tarifario.discounts.sub3.desc')}</span>
                        </div>
                    </div>
                </div>

                {/* Section: Base Prices */}
                <div className="base-prices">
                    <div className="price-item">
                        <span className="price-label">{t('tarifario.base.general.label')}</span>
                        <span className="price-amount">{t('tarifario.base.general.amount')}</span>
                    </div>
                    <div className="price-item">
                        <span className="price-label">{t('tarifario.base.marketing.label')}</span>
                        <span className="price-amount">{t('tarifario.base.marketing.amount')}</span>
                    </div>
                    <div className="price-item">
                        <span className="price-label">{t('tarifario.base.eventos.label')}</span>
                        <span className="price-amount">{t('tarifario.base.eventos.amount')}</span>
                    </div>
                </div>

                {/* Section: Detailed Fees */}
                <div className="detailed-fees">
                    {/* Tarifa General */}
                    <div className="fee-row">
                        <div className="fee-info">
                            <h3>{t('tarifario.details.general.title')}</h3>
                            <p>{t('tarifario.details.general.desc')}</p>
                        </div>
                        <div className="fee-price">{t('tarifario.details.general.price')}</div>
                    </div>

                    {/* Agencia del año */}
                    <div className="fee-row">
                        <div className="fee-info">
                            <h3>{t('tarifario.details.agency.title')}</h3>
                            <p>{t('tarifario.details.agency.desc')}</p>
                        </div>
                        <div className="fee-price">{t('tarifario.details.agency.price')}</div>
                    </div>

                    {/* Materiales y muestra digital */}
                    <div className="fee-row">
                        <div className="fee-info">
                            <h3>{t('tarifario.details.materials.title')}</h3>
                            <p>{t('tarifario.details.materials.desc')}</p>
                        </div>
                        <div className="fee-price fee-price-small">{t('tarifario.details.materials.price')}</div>
                    </div>
                </div>

                {/* Registration Note */}
                <div className="registration-note">
                    <p>{t('tarifario.note.registration')}</p>
                </div>

                {/* Important Warning */}
                <div className="important-warning">
                    <p><strong>{t('tarifario.warning.label')}</strong> {t('tarifario.warning.text')}</p>
                </div>
            </div>

            {/* Socials Block */}
            <FipSocials />
        </div>
    );
};

export default Tarifario;
