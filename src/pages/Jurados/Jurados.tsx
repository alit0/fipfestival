import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaLinkedin } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Jurados.css';

// Predefined set of judges for now. Can be moved to a data file later.
// Note: Keeping IDs sequential.
const JURY_DATA = [
    { id: 1, name: "Diego Miranda", countryKey: "argentina", flag: "🇦🇷" },
    { id: 2, name: "Ricardo Moreno", countryKey: "colombia", flag: "🇨🇴" },
    { id: 3, name: "Ana Silva", countryKey: "mexico", flag: "🇲🇽" },
    { id: 4, name: "Carlos Ruiz", countryKey: "chile", flag: "🇨🇱" },
    { id: 5, name: "Laura Gomez", countryKey: "uruguay", flag: "🇺🇾" },
    { id: 6, name: "Fernanda Costa", countryKey: "brazil", flag: "🇧🇷" },
    { id: 7, name: "Martín Pérez", countryKey: "argentina", flag: "🇦🇷" },
    { id: 8, name: "Sofia Lopez", countryKey: "colombia", flag: "🇨🇴" },
    { id: 9, name: "Juan Torres", countryKey: "mexico", flag: "🇲🇽" },
    { id: 10, name: "Camila Díaz", countryKey: "chile", flag: "🇨🇱" },
    { id: 11, name: "Andrés Silva", countryKey: "uruguay", flag: "🇺🇾" },
    { id: 12, name: "Lucas Santos", countryKey: "brazil", flag: "🇧🇷" }
];

const Jurados: React.FC = () => {
    const { t } = useTranslation();
    const [selectedJudge, setSelectedJudge] = useState(JURY_DATA[0]);

    return (
        <div className="jurados-page">
            <div className="container jurados-container">
                <h1 className="jurados-title">{t('jury.pageTitle')}</h1>

                {/* Swiper List of Judges */}
                <div className="jurados-swiper-container">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1.5}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            480: { slidesPerView: 2.5 },
                            768: { slidesPerView: 3.5 },
                            1024: { slidesPerView: 4.5 },
                            1200: { slidesPerView: 5.5 }
                        }}
                        className="jurados-swiper"
                    >
                        {JURY_DATA.map((judge) => (
                            <SwiperSlide key={judge.id}>
                                <div
                                    className={`jurado-thumbnail-card ${selectedJudge.id === judge.id ? 'active' : ''}`}
                                    onClick={() => setSelectedJudge(judge)}
                                >
                                    <div className="jurado-thumb-img-wrapper">
                                        <img
                                            src={`https://picsum.photos/100/100?random=${judge.id + 100}`}
                                            alt={judge.name}
                                            className="jurado-thumb-img"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="jurado-thumb-info">
                                        <h4 className="jurado-thumb-name">{judge.name}</h4>
                                        <p className="jurado-thumb-role">{t('jury.thumbnailRole')}</p>
                                        <span className="jurado-thumb-badge">
                                            {t(`jury.countries.${judge.countryKey}`)} {judge.flag}
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Detailed View */}
                <div className="jurado-detail-view">
                    <div className="jurado-detail-image-wrapper">
                        <img
                            src={`https://picsum.photos/400/500?random=${selectedJudge.id + 100}`}
                            alt={selectedJudge.name}
                            className="jurado-detail-img"
                            loading="lazy"
                        />
                    </div>

                    <div className="jurado-detail-info">
                        <h2 className="jurado-detail-name">{selectedJudge.name}</h2>
                        <h3 className="jurado-detail-role">{t('jury.founderRole')}</h3>

                        <div className="jurado-detail-bio">
                            <p>{t('jury.bioText')}</p>
                        </div>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="jurado-linkedin-btn"
                        >
                            <span className="linkedin-icon"><FaLinkedin /></span>
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Jurados;
