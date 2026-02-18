import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './FipWinningCases.css';

const FipWinningCases: React.FC = () => {
    const { t } = useTranslation();

    // Placeholder data for cases
    const cases = Array.from({ length: 8 }, (_, i) => ({
        id: i + 1,
        image: `https://picsum.photos/400/300?random=${i + 100}`,
    }));

    return (
        <section className="fip-winning-cases">
            <div className="container">
                <div className="section-header">
                    <h2 className="winning-cases-title">{t('winningCases.title')}</h2>
                    <h3 className="winning-cases-subtitle">{t('winningCases.subtitle')}</h3>
                </div>

                <div className="winning-cases-carousel">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1280: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {cases.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="case-card">
                                    <div className="case-image-wrapper">
                                        <img
                                            src={item.image}
                                            alt={t('winningCases.cardTitle')}
                                            className="case-image"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="case-content">
                                        <p className="case-metadata">{t('winningCases.cardMetadata')}</p>
                                        <h4 className="case-title">{t('winningCases.cardTitle')}</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="winning-cases-footer">
                    <button className="winning-cases-cta">
                        {t('winningCases.cta')}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FipWinningCases;
