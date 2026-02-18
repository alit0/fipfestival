import React from 'react';
import { useTranslation } from 'react-i18next';
import './FipNews.css';

const FipNews: React.FC = () => {
    const { t } = useTranslation();

    const newsItems = [1, 2, 3, 4]; // 4 identical cards

    return (
        <section className="fip-news">
            <div className="container">
                <div className="news-grid">
                    {newsItems.map((item) => (
                        <article key={item} className="news-card">
                            <div className="news-image-wrapper">
                                <img
                                    src={`https://picsum.photos/400/300?random=${item + 10}`}
                                    alt={t('news.category')}
                                    loading="lazy"
                                />
                            </div>
                            <div className="news-content">
                                <p className="news-category">{t('news.category')}</p>
                                <h3 className="news-title">{t('news.title')}</h3>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FipNews;
