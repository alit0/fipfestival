import React from 'react';

import './FipNews.css';

const FipNews: React.FC = () => {

    const newsList = [
        { id: 1, category: "NOVEDADES", title: "El FIP anuncia su nueva sede para la edición 2026" },
        { id: 2, category: "PREMIOS", title: "Conoce a los nuevos integrantes del jurado internacional" },
        { id: 3, category: "ENTREVISTAS", title: "Hablamos con los ganadores del Gran Premio de la edición pasada" },
        { id: 4, category: "TENDENCIAS", title: "El impacto de la IA en el marketing promocional actual" }
    ];

    return (
        <section className="fip-news">
            <div className="container">
                <div className="news-grid">
                    {newsList.map((item) => (
                        <article key={item.id} className="news-card">
                            <div className="news-image-wrapper">
                                <img
                                    src={`https://picsum.photos/400/300?random=${item.id + 10}`}
                                    alt={item.category}
                                    loading="lazy"
                                />
                            </div>
                            <div className="news-content">
                                <p className="news-category">{item.category}</p>
                                <h3 className="news-title">{item.title}</h3>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FipNews;
