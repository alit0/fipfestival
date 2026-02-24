import React, { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Using react-icons for download if available, else a placeholder
import { FiDownload, FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

import './Inscripcion.css';

const StepIcon: React.FC<{ active?: boolean }> = ({ active }) => {
    if (active) {
        return (
            <svg width="100%" height="100%" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-svg active">
                <circle cx="25" cy="25" r="23" className="step-outer-ring" strokeWidth="4" />
                <circle cx="25" cy="25" r="8" className="step-inner-dot" />
            </svg>
        );
    }
    return (
        <svg width="100%" height="100%" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="step-svg inactive">
            <circle cx="25" cy="25" r="25" className="step-outer-circle" />
            <circle cx="25" cy="25" r="6" className="step-inner-dot-inactive" />
        </svg>
    );
};

const Inscripcion: React.FC = () => {
    const { t } = useTranslation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Helper translation getters
    // t('inscripcion.title')
    // t('inscripcion.steps.1.title')
    // t('inscripcion.steps.1.desc')

    return (
        <div className="inscripcion-page">
            <div className="inscripcion-header">
                <h1 className="inscripcion-title">{t('inscripcion.title', 'Inscripción')}</h1>

                <div className="horizontal-timeline">
                    <div className="timeline-step">
                        <div className="step-circle active"><StepIcon active /></div>
                        <div className="step-content">
                            <h4>{t('inscripcion.steps.1.label', 'Paso 1')}</h4>
                            <p>{t('inscripcion.steps.1.short', 'Completar & enviar formulario de inscripción')}</p>
                        </div>
                    </div>

                    <div className="timeline-step">
                        <div className="step-circle"><StepIcon /></div>
                        <div className="step-content">
                            <h4>{t('inscripcion.steps.2.label', 'Paso 2')}</h4>
                            <p>{t('inscripcion.steps.2.short', 'Preparar presentación para cada campaña')}</p>
                        </div>
                    </div>

                    <div className="timeline-step">
                        <div className="step-circle"><StepIcon /></div>
                        <div className="step-content">
                            <h4>{t('inscripcion.steps.3.label', 'Paso 3')}</h4>
                            <p>{t('inscripcion.steps.3.short', 'Subir campañas en el sistema online')}</p>
                        </div>
                    </div>

                    <div className="timeline-step">
                        <div className="step-circle"><StepIcon /></div>
                        <div className="step-content">
                            <h4>{t('inscripcion.steps.4.label', 'Paso 4')}</h4>
                            <p>{t('inscripcion.steps.4.short', 'Enviar láminas finales')}</p>
                        </div>
                    </div>
                </div>

                <div className="inscripcion-actions">
                    <a href="#download-es" className="btn-primary-dark">
                        <span>{t('inscripcion.btnForm', 'Formulario inscripción - español')}</span>
                        <div className="btn-icon-circle">
                            <FiDownload className="btn-icon" />
                        </div>
                    </a>
                    <a href="#download-pt" className="btn-primary-dark">
                        <span>{t('inscripcion.btnFormPT', 'Formulario de inscrição - português')}</span>
                        <div className="btn-icon-circle">
                            <FiDownload className="btn-icon" />
                        </div>
                    </a>
                </div>
            </div>

            <div className="vertical-timeline-container">
                <div className="vertical-line"></div>

                {/* Paso 1 */}
                <div className="v-step">
                    <div className="v-step-circle active"><StepIcon active /></div>
                    <div className="v-step-content">
                        <h3>{t('inscripcion.steps.1.label', 'Paso 1')}</h3>
                        <h4>{t('inscripcion.steps.1.title', 'Completar y enviar el formulario de inscripción')}</h4>
                        <ul>
                            <li><a href="#download">{t('inscripcion.steps.1.bullet1', 'Descarga el formulario de inscripción (PDF).')}</a></li>
                            <li>{t('inscripcion.steps.1.bullet2', 'Completar con los datos requeridos.')}</li>
                            <li>{t('inscripcion.steps.1.bullet3', 'Enviar por email a info@fipfestival.com.ar.')}</li>
                            <li>{t('inscripcion.steps.1.bullet4', 'Luego de acreditado el pago, recibirás usuario y contraseña para continuar.')}</li>
                            <li>{t('inscripcion.steps.1.bullet5', 'Puedes inscribir varias categorías con un solo formulario (indicando cada código de categoría).')}</li>
                        </ul>
                        <a href="#download" className="btn-download-small">
                            {t('inscripcion.btnDownloadForm', 'Formulario de inscripción')} <FiDownload />
                        </a>
                    </div>
                </div>

                {/* Paso 2 */}
                <div className="v-step">
                    <div className="v-step-circle"><StepIcon /></div>
                    <div className="v-step-content">
                        <h3>{t('inscripcion.steps.2.label', 'Paso 2')}</h3>
                        <h4>{t('inscripcion.steps.2.title', 'Crear la presentación de cada campaña')}</h4>
                        <ul>
                            <li><a href="#download">{t('inscripcion.steps.2.bullet1', 'Descarga el modelo de presentación.')}</a></li>
                            <li>{t('inscripcion.steps.2.bullet2', 'Crea la presentación máximo 30 láminas (recomendado ~25).')}</li>
                            <li>{t('inscripcion.steps.2.bullet3', 'Coloca el link del video de campaña en la última diapositiva')}</li>
                        </ul>
                        <a href="#download" className="btn-download-small">
                            {t('inscripcion.btnDownloadModel', 'Modelo de presentación')} <FiDownload />
                        </a>
                    </div>
                </div>

                {/* Paso 3 */}
                <div className="v-step">
                    <div className="v-step-circle"><StepIcon /></div>
                    <div className="v-step-content">
                        <h3>{t('inscripcion.steps.3.label', 'Paso 3')}</h3>
                        <h4>{t('inscripcion.steps.3.title', 'Subir campañas al sistema online')}</h4>
                        <ul>
                            <li>{t('inscripcion.steps.3.bullet1', 'Entra en Ingreso Agencias con tu usuario y contraseña.')}</li>
                            <li>
                                {t('inscripcion.steps.3.bullet2', 'Completar:')}
                                <ul>
                                    <li>{t('inscripcion.steps.3.bullet2a', 'Nombre de la campaña')}</li>
                                    <li>{t('inscripcion.steps.3.bullet2b', 'Empresa')}</li>
                                    <li>{t('inscripcion.steps.3.bullet2c', 'Descripción (opcional)')}</li>
                                </ul>
                            </li>
                            <li>{t('inscripcion.steps.3.bullet3', 'Selecciona las categorías a las que se postula cada campaña.')}</li>
                            <li>{t('inscripcion.steps.3.bullet4', 'Adjunta la presentación (sin exceder el límite de diapositivas).')}</li>
                            <li>{t('inscripcion.steps.3.bullet5', 'Links o videos pueden adjuntarse; los videos no deben superar 35 MB.')}</li>
                            <li>{t('inscripcion.steps.3.bullet6', 'Una vez cargada, la campaña quedará oficialmente inscripta.')}</li>
                        </ul>
                    </div>
                </div>

                {/* Paso 4 */}
                <div className="v-step">
                    <div className="v-step-circle"><StepIcon /></div>
                    <div className="v-step-content">
                        <h3>{t('inscripcion.steps.4.label', 'Paso 4')}</h3>
                        <h4>{t('inscripcion.steps.4.title', 'Enviar láminas para la muestra digital')}</h4>
                        <ul>
                            <li>{t('inscripcion.steps.4.bullet1', 'Por cada campaña inscripta, prepara una lámina digital (60 × 40 cm) en JPG o PDF, color CMYK.')}</li>
                            <li>{t('inscripcion.steps.4.bullet2', 'Envía estos archivos por email o transferencia (WeTransfer, iCloud, etc.).')}</li>
                            <li>{t('inscripcion.steps.4.bullet3', 'Estas láminas se usan en la muestra digital y exposiciones itinerantes del Festival.')}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="inscripcion-conditions">
                <h3>{t('inscripcion.conditions.title', 'Condiciones Generales')}</h3>
                <p>{t('inscripcion.conditions.text', 'En el caso de que un jurado informe al Comité Ejecutivo del FIP, que alguna campaña inscripta no figura en la planilla oficial que el festival envía a sus jueces, dicho comité aplicará las sanciones que correspondan que comprenderán las siguientes medidas; No tomar en cuenta dicha inscripción multando al inscriptor en idéntica suma a la incurrida. En caso de reiteración (2 o más piezas irregularmente inscriptas a partir de la cesión de la clave) procederá a eliminar automáticamente todas las piezas del participante, considerando a la misma una falta grave. En ambos casos queda entendido que la infracción no tendrá derecho a resarcimiento ni reembolso alguno')}</p>
            </div>

            <div className="inscripcion-social">
                <h3>{t('inscripcion.social.title', 'SEGUINOS')}</h3>
                <div className="social-pills-container">
                    <a href="#" className="social-pill"><FiFacebook /> <span>FACEBOOK</span></a>
                    <a href="#" className="social-pill"><FiInstagram /> <span>INSTAGRAM</span></a>
                    <a href="#" className="social-pill"><FiLinkedin /> <span>LINKEDIN</span></a>
                    <a href="#" className="social-pill"><FiTwitter /> <span>X</span></a>
                    <a href="#" className="social-pill"><FiYoutube /> <span>YOUTUBE</span></a>
                    <a href="#" className="social-pill"><FaWhatsapp /> <span>WHATSAPP</span></a>
                </div>
            </div>
        </div>
    );
};

export default Inscripcion;
