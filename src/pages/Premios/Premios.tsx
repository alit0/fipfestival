import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { FaArrowDown } from 'react-icons/fa';
import './Premios.css';

// Importing the generated placeholder images
import trophyGrandPrix from '../../assets/images/trophies/trophy_grand_prix.png';
import trophyOctagon from '../../assets/images/trophies/trophy_glass_octagon.png';
import trophyGold from '../../assets/images/trophies/trophy_gold_round.png';
import trophySilver from '../../assets/images/trophies/trophy_silver_round.png';
import trophyBronze from '../../assets/images/trophies/trophy_bronze_round.png';

const Premios: React.FC = () => {
    const { t } = useTranslation();
    const location = useLocation();

    // Scroll to section based on hash or pill click
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const trophies = [
        { id: 'grand-prix', img: trophyGrandPrix, nameKey: 'premios.items.grandPrix.title' },
        { id: 'agency-year', img: trophyOctagon, nameKey: 'premios.items.agency.title' },
        { id: 'gold', img: trophyGold, nameKey: 'premios.items.oro.title' },
        { id: 'silver', img: trophySilver, nameKey: 'premios.items.plata.title' },
        { id: 'bronze', img: trophyBronze, nameKey: 'premios.items.bronce.title' },
    ];

    const CostsSection = () => (
        <section id="costos-replicas" className="premios-section">
            <div className="costos-header">
                <p>
                    {t('premios.costos.intro.part1')} <a href="#descargar" className="form-link">{t('premios.costos.intro.link')}</a>, {t('premios.costos.intro.part2')} <a href="mailto:productos@fipfestival.com.ar" className="email-link">productos@fipfestival.com.ar</a>
                </p>
            </div>

            <div className="costos-list">
                <div className="costo-card">
                    <div className="costo-img-col"><img src={trophyGrandPrix} alt="Agencia del Año" /></div>
                    <div className="costo-text-col">
                        <h3>{t('premios.items.agency.title')}</h3>
                        <p>{t('premios.items.agency.desc')}</p>
                    </div>
                    <div className="costo-price-col">{t('premios.items.agency.price')}</div>
                </div>

                <div className="costo-card">
                    <div className="costo-img-col"><img src={trophyGold} alt="Marca del Año" /></div>
                    <div className="costo-text-col">
                        <h3>{t('premios.items.brand.title')}</h3>
                        <p>{t('premios.items.brand.desc')}</p>
                    </div>
                    <div className="costo-price-col">{t('premios.items.brand.price')}</div>
                </div>

                <div className="costo-card">
                    <div className="costo-img-col"><img src={trophyOctagon} alt="Gran Prix" /></div>
                    <div className="costo-text-col">
                        <h3>{t('premios.items.grandPrix.title')}</h3>
                        <p>{t('premios.items.grandPrix.desc')}</p>
                    </div>
                    <div className="costo-price-col">{t('premios.items.grandPrix.price')}</div>
                </div>

                <div className="costo-card">
                    <div className="costo-img-col"><img src={trophyGold} alt="Fip de Oro" /></div>
                    <div className="costo-text-col">
                        <h3>{t('premios.items.oro.title')}</h3>
                        <p>{t('premios.items.oro.desc')}</p>
                    </div>
                    <div className="costo-price-col">{t('premios.items.oro.price')}</div>
                </div>

                <div className="costo-card">
                    <div className="costo-img-col"><img src={trophySilver} alt="Fip de Plata" /></div>
                    <div className="costo-text-col">
                        <h3>{t('premios.items.plata.title')}</h3>
                        <p>{t('premios.items.plata.desc')}</p>
                    </div>
                    <div className="costo-price-col">{t('premios.items.plata.price')}</div>
                </div>

                <div className="costo-card">
                    <div className="costo-img-col"><img src={trophyBronze} alt="Fip de Bronce" /></div>
                    <div className="costo-text-col">
                        <h3>{t('premios.items.bronce.title')}</h3>
                        <p>{t('premios.items.bronce.desc')}</p>
                    </div>
                    <div className="costo-price-col">{t('premios.items.bronce.price')}</div>
                </div>
            </div>

            <div className="costos-important">
                <strong>{t('premios.costos.important.title')}</strong>
                <p>{t('premios.costos.important.p1')}</p>
                <p><strong>{t('premios.costos.important.p2Bold')}</strong> {t('premios.costos.important.p2Text')}</p>
            </div>
        </section>
    );

    const PaymentSection = () => (
        <section id="medios-pago" className="premios-section payment-section">
            <h2 className="payment-title">{t('premios.payment.title')}</h2>

            <div className="payment-method">
                <h3><span>1 | </span>{t('premios.payment.argentina.title')}</h3>
                <p>{t('premios.payment.argentina.desc')}</p>
            </div>

            <div className="payment-method">
                <h3><span>2 | </span>{t('premios.payment.international.title')}</h3>
                <p>{t('premios.payment.international.desc')}</p>
            </div>

            <div className="payment-method">
                <h3><span>3 | </span>{t('premios.payment.paypal.title')}</h3>
                <p>{t('premios.payment.paypal.desc')}</p>
            </div>

            <div className="payment-method">
                <h3><span>4 | </span>{t('premios.payment.others.title')}</h3>
                <p>{t('premios.payment.others.desc')}</p>
            </div>
        </section>
    );

    return (
        <div className="premios-page">
            <div className="premios-container">

                {/* Top Nav Pills */}
                <div className="premios-nav-pills">
                    <button onClick={() => scrollToSection('costos-replicas')} className="pill active">{t('premios.nav.costos')}</button>
                    <button onClick={() => scrollToSection('medios-pago')} className="pill">{t('premios.nav.medios')}</button>
                    <button onClick={() => scrollToSection('envio-replicas')} className="pill">{t('premios.nav.envio')}</button>
                </div>

                {/* Hero Showcase */}
                <div className="premios-hero">
                    <h1 className="premios-main-title">{t('premios.hero.title')}</h1>

                    <div className="hero-trophies-grid">
                        {trophies.map(trophy => (
                            <div key={trophy.id} className="hero-trophy-item">
                                <img src={trophy.img} alt={t(trophy.nameKey)} loading="lazy" />
                            </div>
                        ))}
                    </div>

                    <div className="hero-action-buttons">
                        <a href="#form-es" className="btn-primary-dark">
                            {t('premios.hero.btnEs')} <FaArrowDown className="btn-icon" />
                        </a>
                        <a href="#form-pt" className="btn-primary-dark">
                            {t('premios.hero.btnPt')} <FaArrowDown className="btn-icon" />
                        </a>
                    </div>
                </div>

                {/* Detailed Sections */}
                <CostsSection />
                <PaymentSection />

            </div>
        </div>
    );
};

export default Premios;
