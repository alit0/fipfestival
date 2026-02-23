import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

interface LanguageSelectorProps {
    isLangOpen: boolean;
    toggleLang: () => void;
    setIsLangOpen: (isOpen: boolean) => void;
    isMobile?: boolean;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
    isLangOpen,
    toggleLang,
    setIsLangOpen,
    isMobile = false
}) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setIsLangOpen(false);
    };

    if (isMobile) {
        return (
            <div className="lang-selector-mobile">
                <span>{t('nav.selectLanguage')}:</span>
                <div className="lang-options">
                    <button onClick={() => i18n.changeLanguage('es')} className={i18n.language === 'es' ? 'active' : ''}>ES</button>
                    <button onClick={() => i18n.changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>EN</button>
                    <button onClick={() => i18n.changeLanguage('it')} className={i18n.language === 'it' ? 'active' : ''}>IT</button>
                    <button onClick={() => i18n.changeLanguage('fr')} className={i18n.language === 'fr' ? 'active' : ''}>FR</button>
                    <button onClick={() => i18n.changeLanguage('pt')} className={i18n.language === 'pt' ? 'active' : ''}>PT</button>
                </div>
            </div>
        );
    }

    return (
        <div className="lang-selector">
            <button onClick={toggleLang} className="lang-btn">
                {i18n.language === 'es' ? 'Español' :
                    i18n.language === 'en' ? 'English' :
                        i18n.language === 'it' ? 'Italiano' :
                            i18n.language === 'fr' ? 'Français' :
                                i18n.language === 'pt' ? 'Português' : 'Language'} ▼
            </button>
            {isLangOpen && (
                <ul className="lang-dropdown">
                    <li onClick={() => changeLanguage('es')}>Español</li>
                    <li onClick={() => changeLanguage('en')}>English</li>
                    <li onClick={() => changeLanguage('it')}>Italiano</li>
                    <li onClick={() => changeLanguage('fr')}>Français</li>
                    <li onClick={() => changeLanguage('pt')}>Português</li>
                </ul>
            )}
        </div>
    );
};
