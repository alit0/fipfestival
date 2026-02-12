import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './Hero.css';

const Hero: React.FC = () => {
    const { t } = useTranslation();

    // Using Picsum for placeholder images that look nice
    const imagesColumn1 = [
        'https://picsum.photos/400/600?random=1',
        'https://picsum.photos/400/600?random=2',
        'https://picsum.photos/400/600?random=3',
        'https://picsum.photos/400/600?random=4',
    ];

    const imagesColumn2 = [
        'https://picsum.photos/400/600?random=5',
        'https://picsum.photos/400/600?random=6',
        'https://picsum.photos/400/600?random=7',
        'https://picsum.photos/400/600?random=8',
    ];

    // Tripling images for smoother infinite loop without gaps
    const duplicatedImages1 = [...imagesColumn1, ...imagesColumn1, ...imagesColumn1];
    const duplicatedImages2 = [...imagesColumn2, ...imagesColumn2, ...imagesColumn2];

    return (
        <section className="hero">
            <div className="hero-container">

                {/* Left Side: Image Carousels */}
                <div className="hero-visuals">
                    <div className="carousel-wrapper">
                        {/* Column 1 - Moving Up */}
                        <div className="carousel-column">
                            <motion.div
                                className="carousel-track"
                                animate={{ y: [0, -2400] }} // 4 images * (600px height + 20px gap) roughly
                                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                            >
                                {duplicatedImages1.map((img, index) => (
                                    <div key={`col1-${index}`} className="carousel-item">
                                        <img src={img} alt="Festival Highlight" />
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Column 2 - Moving Down */}
                        <div className="carousel-column">
                            <motion.div
                                className="carousel-track"
                                initial={{ y: -2400 }}
                                animate={{ y: 0 }}
                                transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                            >
                                {duplicatedImages2.map((img, index) => (
                                    <div key={`col2-${index}`} className="carousel-item">
                                        <img src={img} alt="Festival Highlight" />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* Gradients */}
                    <div className="gradient-overlay-left"></div>
                    <div className="gradient-overlay-bottom"></div>
                </div>

                {/* Right Side: Content */}
                <div className="hero-content">
                    <div className="stamp-badge">
                        <div className="badge-inner">
                            <span className="badge-text-top">CON LAS MEJORES IDEAS</span>
                            <span className="badge-number">27</span>
                            <span className="badge-text-bottom">AÑOS</span>
                        </div>
                    </div>

                    <h1 className="hero-title">
                        {t('hero.title').split('\n').map((line, i) => (
                            <span key={i}>{line}<br /></span>
                        ))}
                    </h1>

                    <div className="hero-details">
                        <p className="hero-date">{t('hero.date')}</p>
                        <p className="hero-location">{t('hero.location')}</p>
                    </div>

                    <button className="cta-button">
                        {t('hero.cta')}
                    </button>

                    <div className="hero-socials">
                        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" aria-label="YouTube"><FaYoutube /></a>
                        <a href="#" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
