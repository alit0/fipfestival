import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaWhatsapp, FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../../hooks/useTheme';
import './Header.css';

const Header: React.FC = () => {
    const { t, i18n } = useTranslation();
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleLang = () => setIsLangOpen(!isLangOpen);

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setIsLangOpen(false);
    };

    const navLinks = [
        { key: 'reglamento', label: t('nav.rules') },
        { key: 'categorias', label: t('nav.categories') },
        { key: 'inscripcion', label: t('nav.inscription') },
        { key: 'fechas', label: t('nav.closingDates') },
        { key: 'tarifario', label: t('nav.fees') },
        { key: 'premios', label: t('nav.awards') },
        { key: 'jurados', label: t('nav.judges') },
        { key: 'ganadores', label: t('nav.winners') },
        { key: 'hall', label: t('nav.hallOfFame') },
        { key: 'contacto', label: t('nav.contact') },
    ];

    return (
        <header className="header">
            <div className="header-top">
                <div className="container header-top-content">
                    <div className="logo">
                        <h1>FIP<span>festival</span></h1>
                    </div>

                    <div className="header-actions">
                        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
                            {theme === 'dark' ? <FaSun /> : <FaMoon />}
                        </button>

                        <div className="auth-links">
                            <a href="#">{t('nav.loginJudges')}</a>
                            <span className="separator">|</span>
                            <a href="#">{t('nav.loginAgencies')}</a>
                        </div>

                        <div className="social-icons">
                            <a href="#" aria-label="Instagram"><FaInstagram /></a>
                            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                            <a href="#" aria-label="Twitter"><FaTwitter /></a>
                            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                            <a href="#" aria-label="YouTube"><FaYoutube /></a>
                            <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
                        </div>

                        <div className="lang-selector">
                            <button onClick={toggleLang} className="lang-btn">
                                {i18n.language === 'es' ? 'Español' :
                                    i18n.language === 'en' ? 'English' :
                                        i18n.language === 'it' ? 'Italiano' :
                                            i18n.language === 'fr' ? 'Français' :
                                                i18n.language === 'pt' ? 'Português' : 'Language'} ▼
                            </button>
                            {isLangOpen && (
                                <ul className="lang-dropdown">
                                    <li onClick={() => changeLanguage('es')}>Español</li>
                                    <li onClick={() => changeLanguage('en')}>English</li>
                                    <li onClick={() => changeLanguage('it')}>Italiano</li>
                                    <li onClick={() => changeLanguage('fr')}>Français</li>
                                    <li onClick={() => changeLanguage('pt')}>Português</li>
                                </ul>
                            )}
                        </div>

                        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>

            <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
                <div className="container">
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.key}>
                                <a href={`#${link.key}`} onClick={() => setIsMenuOpen(false)}>{link.label}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Only Extras */}
                    <div className="mobile-extras">
                        <div className="auth-links">
                            <a href="#">{t('nav.loginJudges')}</a>
                            <span className="separator">|</span>
                            <a href="#">{t('nav.loginAgencies')}</a>
                        </div>

                        <div className="lang-selector-mobile">
                            <span>{t('nav.selectLanguage')}:</span>
                            <div className="lang-options">
                                <button onClick={() => i18n.changeLanguage('es')} className={i18n.language === 'es' ? 'active' : ''}>ES</button>
                                <button onClick={() => i18n.changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>EN</button>
                                <button onClick={() => i18n.changeLanguage('it')} className={i18n.language === 'it' ? 'active' : ''}>IT</button>
                                <button onClick={() => i18n.changeLanguage('fr')} className={i18n.language === 'fr' ? 'active' : ''}>FR</button>
                                <button onClick={() => i18n.changeLanguage('pt')} className={i18n.language === 'pt' ? 'active' : ''}>PT</button>
                            </div>
                        </div>

                        <div className="social-icons">
                            <a href="#" aria-label="Instagram"><FaInstagram /></a>
                            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                            <a href="#" aria-label="Twitter"><FaTwitter /></a>
                            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                            <a href="#" aria-label="YouTube"><FaYoutube /></a>
                            <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
