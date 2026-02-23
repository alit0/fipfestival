import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import { LanguageSelector } from '../../common/LanguageSelector/LanguageSelector';
import { ThemeToggle } from '../../common/ThemeToggle/ThemeToggle';
import './Header.css';

const Header: React.FC = () => {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleLang = () => setIsLangOpen(!isLangOpen);

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
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <span className="logo-text" role="heading" aria-level={1}>FIP<span>festival</span></span>
                        </Link>
                    </div>

                    <div className="header-actions">
                        <ThemeToggle />

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

                        <LanguageSelector
                            isLangOpen={isLangOpen}
                            toggleLang={toggleLang}
                            setIsLangOpen={setIsLangOpen}
                        />

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
                                <Link
                                    to={['reglamento', 'categorias', 'fechas', 'tarifario', 'jurados'].includes(link.key) ? `/${link.key}` : (location.pathname === '/' ? `#${link.key}` : `/#${link.key}`)}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
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

                        <LanguageSelector
                            isLangOpen={false}
                            toggleLang={() => { }}
                            setIsLangOpen={() => { }}
                            isMobile={true}
                        />

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
