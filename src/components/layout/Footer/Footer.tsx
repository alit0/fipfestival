import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './Footer.css';

const Footer: React.FC = () => {
    const { t } = useTranslation();

    const socialIcons = [
        { id: 'instagram', icon: <FaInstagram />, url: '#' },
        { id: 'facebook', icon: <FaFacebookF />, url: '#' },
        { id: 'twitter', icon: <FaXTwitter />, url: '#' }, // Using X icon
        { id: 'youtube', icon: <FaYoutube />, url: '#' },
        { id: 'whatsapp', icon: <FaWhatsapp />, url: '#' },
    ];

    const esDownloads = [
        { key: 'rules', url: '#' },
        { key: 'presentation', url: '#' },
        { key: 'form', url: '#' },
        { key: 'replicas', url: '#' },
        { key: 'categories', url: '#' },
    ];

    const ptDownloads = [
        { key: 'rules', url: '#' },
        { key: 'presentation', url: '#' },
        { key: 'form', url: '#' },
        { key: 'replicas', url: '#' },
        { key: 'categories', url: '#' },
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    {/* Placeholder Logic for Logo if image not found, text fallback */}
                    <div className="footer-logo logo">
                        <h1>FIP<span>festival</span></h1>
                    </div>

                    <div className="footer-socials-mini">
                        {socialIcons.map((social) => (
                            <a key={social.id} href={social.url} className="footer-social-icon" target="_blank" rel="noopener noreferrer">
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="footer-main">
                    <div className="footer-column">
                        <h3 className="footer-heading">{t('footer.downloadsEsTitle')}</h3>
                        <ul className="footer-links">
                            {esDownloads.map((item) => (
                                <li key={item.key}>
                                    <a href={item.url}>{t(`footer.${item.key}`)}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-heading">{t('footer.downloadsPtTitle')}</h3>
                        <ul className="footer-links">
                            {ptDownloads.map((item) => (
                                <li key={item.key}>
                                    <a href={item.url}>{t(`footer.${item.key}`)}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3 className="footer-heading">{t('footer.contactTitle')}</h3>
                        <div className="footer-contact-info">
                            <p className="contact-address">{t('footer.address')}</p>
                            <p className="contact-item">Whatsapp: (+54) 9 11 6377 7902</p>
                            <p className="contact-item">(+54) 11 5707 8856</p>
                            <p className="contact-item">Oficina: +54 9 4803 0227</p>
                            <p className="contact-item email">info@fipfestival.com.ar</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
