import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import './FipSocials.css';

const FipSocials: React.FC = () => {
    const { t } = useTranslation();

    const socialLinks = [
        { id: 'facebook', icon: <FaFacebookF />, label: 'FACEBOOK', url: '#' },
        { id: 'instagram', icon: <FaInstagram />, label: 'INSTAGRAM', url: '#' },
        { id: 'linkedin', icon: <FaLinkedinIn />, label: 'LINKEDIN', url: '#' },
        { id: 'twitter', icon: <FaTwitter />, label: 'TWITTER', url: '#' },
        { id: 'youtube', icon: <FaYoutube />, label: 'YOUTUBE', url: '#' },
    ];

    return (
        <section className="fip-socials">
            <div className="container">
                <h2 className="socials-title">{t('socials.title')}</h2>
                <div className="socials-list">
                    {socialLinks.map((social) => (
                        <a key={social.id} href={social.url} className="social-pill" target="_blank" rel="noopener noreferrer">
                            <span className="social-icon-circle">
                                {social.icon}
                            </span>
                            <span className="social-label">{social.label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FipSocials;
