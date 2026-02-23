import React, { useState, useLayoutEffect, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaLinkedin } from 'react-icons/fa';
import './HallFama.css';

interface Member {
    id: string;
    name: string;
    role: string;
    country: string;
    photo: string;
    linkedin?: string;
}

const HallFama: React.FC = () => {
    const { t } = useTranslation();
    const [selectedMember, setSelectedMember] = useState<Member | null>(null);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Scroll to detail when a member is selected
    useEffect(() => {
        if (selectedMember) {
            const detailElement = document.getElementById('member-detail-view');
            if (detailElement) {
                // Give a slight delay for render
                setTimeout(() => {
                    detailElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
        }
    }, [selectedMember]);

    // Hardcoded dummy members based on design
    const members: Member[] = [
        { id: '1', name: 'Diego Miranda', role: t('hallFama.roles.multiLine', 'CARGO DE VARIAS\nLINEAS'), country: 'ARGENTINA', photo: 'https://picsum.photos/100/100?random=11' },
        { id: '2', name: 'Diego Miranda', role: t('hallFama.roles.multiLine', 'CARGO DE VARIAS\nLINEAS'), country: 'ARGENTINA', photo: 'https://picsum.photos/100/100?random=12' },
        { id: '3', name: 'Diego Miranda', role: t('hallFama.roles.multiLine', 'CARGO DE VARIAS\nLINEAS'), country: 'ARGENTINA', photo: 'https://picsum.photos/100/100?random=13' },
        { id: '4', name: 'Diego Miranda', role: t('hallFama.roles.multiLine', 'CARGO DE VARIAS\nLINEAS'), country: 'ARGENTINA', photo: 'https://picsum.photos/100/100?random=14' },
        { id: '5', name: 'Diego Miranda', role: t('hallFama.roles.multiLine', 'CARGO DE VARIAS\nLINEAS'), country: 'ARGENTINA', photo: 'https://picsum.photos/100/100?random=15' },
        { id: '6', name: 'Diego Miranda', role: t('hallFama.roles.multiLine', 'CARGO DE VARIAS\nLINEAS'), country: 'ARGENTINA', photo: 'https://picsum.photos/100/100?random=16' },
        { id: '7', name: 'Diego Miranda', role: t('hallFama.roles.multiLine', 'CARGO DE VARIAS\nLINEAS'), country: 'ARGENTINA', photo: 'https://picsum.photos/100/100?random=17' },
        { id: '8', name: 'Diego Miranda', role: t('hallFama.roles.multiLine', 'CARGO DE VARIAS\nLINEAS'), country: 'ARGENTINA', photo: 'https://picsum.photos/100/100?random=18' },
        { id: '9', name: 'Diego Miranda', role: t('hallFama.roles.multiLine', 'CARGO DE VARIAS\nLINEAS'), country: 'ARGENTINA', photo: 'https://picsum.photos/100/100?random=19' },
    ];

    // Special member for the detail view (like Ricardo Moreno in design)
    const featuredDetail: Member = {
        id: 'detail',
        name: 'Ricardo Moreno',
        role: t('hallFama.roles.founder', 'Socio Fundador'),
        country: 'ARGENTINA',
        photo: 'https://picsum.photos/400/500?random=20',
        linkedin: 'https://linkedin.com'
    };

    const displayMember = selectedMember || featuredDetail;

    return (
        <div className="hall-page">
            <h1 className="hall-title">{t('hallFama.title', 'Hall de la fama')}</h1>

            <div className="members-grid">
                {members.map((member) => (
                    <div
                        key={member.id}
                        className={`member-card ${selectedMember?.id === member.id ? 'active' : ''}`}
                        onClick={() => setSelectedMember(member)}
                    >
                        <div className="member-photo">
                            <img src={member.photo} alt={member.name} loading="lazy" />
                        </div>
                        <div className="member-info">
                            <h3>{member.name}</h3>
                            <p className="role">{member.role}</p>
                            <div className="country-badge">
                                {member.country} <span className="flag">🇦🇷</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="hall-rules">
                <h2 className="rules-main-title">{t('hallFama.rulesTitle', 'HALL DE LA FAMA DEL FIP')}</h2>

                <div className="rule-section">
                    <h3>1 | {t('hallFama.rules.1.title', 'QUÉ ES — QUÉ BUSCA CONSAGRAR')}</h3>
                    <p>{t('hallFama.rules.1.p1', 'El Hall de la Fama del FIP nace para rendir tributo a las personalidades que han marcado la historia del Marketing, la Comunicación y los Eventos en el ámbito internacional.')}</p>
                    <p>{t('hallFama.rules.1.p2', 'Es un espacio de consagración.')}</p>
                    <p>{t('hallFama.rules.1.p3', 'Reconoce trayectorias excepcionales, ideas que transformaron la industria y figuras que elevaron los estándares profesionales en la región.')}</p>
                    <p>{t('hallFama.rules.1.p4', 'El Hall honra a quienes alcanzaron la excelencia sostenida en el tiempo:')}</p>
                    <ul>
                        <li>{t('hallFama.rules.1.li1', 'Creativos premiados en múltiples ediciones.')}</li>
                        <li>{t('hallFama.rules.1.li2', 'Pioneros que asumieron riesgos cuando el contexto no era favorable.')}</li>
                        <li>{t('hallFama.rules.1.li3', 'Fundadores, docentes y referentes que construyeron estructura y visión.')}</li>
                    </ul>
                    <p>{t('hallFama.rules.1.p5', 'Ser incorporado al Hall de la Fama del FIP implica una distinción definitiva dentro de la actividad.')}</p>
                </div>

                <div className="rule-section">
                    <h3>2 | {t('hallFama.rules.2.title', 'PRINCIPIOS Y FUNDAMENTOS')}</h3>
                    <p>{t('hallFama.rules.2.p1', 'El Hall de la Fama fue registrado el 15 de febrero de 2015, tras un proceso de análisis sobre la necesidad de reconocer trayectorias notables en la región (incluyendo España y Portugal).')}</p>
                    <p>{t('hallFama.rules.2.p2', 'Durante décadas, la industria premió campañas y resultados.')}</p>
                    <p>{t('hallFama.rules.2.p3', 'Faltaba una instancia que consagrara personas, marcas y referentes cuya contribución excediera un premio puntual.')}</p>
                    <p>{t('hallFama.rules.2.p4', 'El Hall de la Fama del FIP cumple esa función testimonial y simbólica.')}</p>
                    <p>{t('hallFama.rules.2.p5', 'Reconoce:')}</p>
                    <ul>
                        <li>{t('hallFama.rules.2.li1', 'Profesionales destacados.')}</li>
                        <li>{t('hallFama.rules.2.li2', 'Fundadores y pioneros.')}</li>
                        <li>{t('hallFama.rules.2.li3', 'Marcas con desempeño sobresaliente.')}</li>
                        <li>{t('hallFama.rules.2.li4', 'Medios especializados.')}</li>
                        <li>{t('hallFama.rules.2.li5', 'Docentes e instituciones formadoras.')}</li>
                    </ul>
                    <p>{t('hallFama.rules.2.p6', 'Su objetivo es consolidar un referente permanente de excelencia.')}</p>
                </div>

                <div className="rule-section">
                    <h3>3 | {t('hallFama.rules.3.title', 'CRITERIO PARA LAS CANDIDATURAS')}</h3>
                    <p>{t('hallFama.rules.3.p1', 'El análisis fundacional partió de una realidad regional: existen verdaderos protagonistas que, aun en contextos complejos, desarrollaron ideas extraordinarias y generaron impacto real.')}</p>
                    <p>{t('hallFama.rules.3.p2', 'Se consideraron especialmente:')}</p>
                    <ul>
                        <li>{t('hallFama.rules.3.li1', 'Trayectoria profesional sostenida.')}</li>
                        <li>{t('hallFama.rules.3.li2', 'Innovación e influencia en la industria.')}</li>
                        <li>{t('hallFama.rules.3.li3', 'Contribución estructural al desarrollo del marketing y los eventos.')}</li>
                        <li>{t('hallFama.rules.3.li4', 'Legado formativo o institucional.')}</li>
                    </ul>
                </div>

                <div className="rule-section">
                    <h3>4 | {t('hallFama.rules.4.title', 'JURY DE DESIGNACIÓN — NOMINACIONES')}</h3>
                    <p>{t('hallFama.rules.4.p1', 'El FIP definió un jurado mixto, integrado por figuras en actividad y referentes retirados, con carácter rotativo.')}</p>
                    <p>{t('hallFama.rules.4.p2', 'Este sistema garantiza:')}</p>
                    <ul>
                        <li>{t('hallFama.rules.4.li1', 'Transparencia.')}</li>
                        <li>{t('hallFama.rules.4.li2', 'Pluralidad de criterios.')}</li>
                        <li>{t('hallFama.rules.4.li3', 'Debate profesional.')}</li>
                        <li>{t('hallFama.rules.4.li4', 'Neutralidad en las designaciones.')}</li>
                    </ul>
                    <p>{t('hallFama.rules.4.p3', 'La renovación periódica del jury asegura independencia y equilibrio.')}</p>
                </div>

                <div className="rule-section">
                    <h3>5 | {t('hallFama.rules.5.title', 'CRITERIOS FUTUROS — NUEVOS INGRESOS')}</h3>
                    <p>{t('hallFama.rules.5.p1', 'En su etapa inicial, los fundadores del FIP designaron a los primeros integrantes, priorizando figuras indiscutidas para establecer el estándar de excelencia.')}</p>
                    <p>{t('hallFama.rules.5.p2', 'En adelante, el Hall continuará ampliándose bajo criterios de trayectoria, mérito e influencia comprobable.')}</p>
                    <p>{t('hallFama.rules.5.p3', 'El objetivo es consolidar un archivo vivo de excelencia profesional.')}</p>
                </div>

                <div className="rule-section">
                    <h3>6 | {t('hallFama.rules.6.title', 'DISTINCIÓN PARA LOS INTEGRANTES')}</h3>
                    <p>{t('hallFama.rules.6.p1', 'Quienes ingresan al Hall de la Fama reciben:')}</p>
                    <ul>
                        <li>{t('hallFama.rules.6.li1', 'Certificado oficial.')}</li>
                        <li>{t('hallFama.rules.6.li2', 'Medalla conmemorativa.')}</li>
                        <li>{t('hallFama.rules.6.li3', 'Inclusión permanente en la web institucional.')}</li>
                        <li>{t('hallFama.rules.6.li4', 'Presencia en comunicaciones y redes del Hall.')}</li>
                        <li>{t('hallFama.rules.6.li5', 'Estatuilla conmemorativa (prevista).')}</li>
                    </ul>
                    <p>{t('hallFama.rules.6.p2', 'Más allá de los elementos físicos, la verdadera distinción es la consagración pública de su legado.')}</p>
                </div>

                <div className="rule-section">
                    <h3>7 | {t('hallFama.rules.7.title', 'EL PRESTIGIO QUE RESPALDA AL FIP')}</h3>
                    <p>{t('hallFama.rules.7.p1', 'El FIP cuenta con más de 25 años de trayectoria continua, con jurados provenientes de múltiples países de Europa, África, Asia y América.')}</p>
                    <p>{t('hallFama.rules.7.p2', 'Su historia y transparencia institucional sostienen la legitimidad del Hall de la Fama.')}</p>
                </div>

                <div className="rule-section">
                    <h3>8 | {t('hallFama.rules.8.title', 'EL ÍCONO DEL HALL')}</h3>
                    <p>{t('hallFama.rules.8.p1', 'El símbolo del Hall de la Fama fue diseñado por Diego de la Vega, fundador del Festival y creador del nombre y el primer logotipo del FIP.')}</p>
                </div>

                <div className="rule-section">
                    <h3>9 | {t('hallFama.rules.9.title', 'FUNCIONAMIENTO Y PROPUESTAS')}</h3>

                    <h4 className="sub-heading">{t('hallFama.rules.9.sub1', 'Embajadores')}</h4>
                    <p>{t('hallFama.rules.9.p1', 'El FIP aspira a contar con embajadores por país, quienes propondrán ternas de candidatos y elevarán las nominaciones al Hall.')}</p>

                    <h4 className="sub-heading">{t('hallFama.rules.9.sub2', 'Agencias y Marcas')}</h4>
                    <p>{t('hallFama.rules.9.p2', 'Las agencias podrán proponer candidatos vinculados a marcas, acompañando antecedentes y logros documentados.')}</p>

                    <h4 className="sub-heading">{t('hallFama.rules.9.sub3', 'Designaciones Directas')}</h4>
                    <p>{t('hallFama.rules.9.p3', 'El Hall de la Fama podrá integrar directamente a aquellas marcas que hayan demostrado desempeño excepcional y sostenido en las distintas ediciones del Festival.')}</p>
                </div>
            </div>

            {/* Member Detail Expansion View */}
            <div id="member-detail-view" className="member-detail-view">
                <div className="detail-image">
                    <img src={displayMember.photo} alt={displayMember.name} />
                </div>
                <div className="detail-content">
                    <h2>{displayMember.name}</h2>
                    <p className="detail-role">{displayMember.role}</p>

                    <p className="detail-bio">
                        {t('hallFama.bioText', 'Es Bachelor of Arts in Business Studies en Marketing por la Universidad de Exeter, MBA-Executive y PADE por ICAI-ICADE de la Universidad Pontificia de Comillas. Certificado en programas directivos del MIT de Boston. Su amplia carrera la respaldan las distintas posiciones que ha ocupado: director de marketing, gerente comercial, director general en sectores tan diversos y competitivos como el de la alimentación, bebidas, salud e industrial. Su cúmulo de conocimientos lo llevó a fundar TSMGO | The show must go on.')}
                    </p>

                    {displayMember.linkedin && (
                        <a href={displayMember.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-button">
                            <FaLinkedin /> LinkedIn
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HallFama;
