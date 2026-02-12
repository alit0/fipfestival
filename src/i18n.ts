import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav": {
        "rules": "Rules",
        "categories": "Categories",
        "inscription": "Inscription",
        "closingDates": "Closing dates",
        "fees": "Fees",
        "awards": "Awards/Replicas",
        "judges": "Judges",
        "winners": "Winners",
        "hallOfFame": "Hall of fame",
        "contact": "Contact",
        "loginJudges": "Judges Login",
        "loginAgencies": "Agencies Login",
        "selectLanguage": "Select Language"
      },
      "hero": {
        "title": "27 YEARS OF\nSUCCESSFUL\nTRACK RECORD",
        "date": "December 20, 2022 - 19:30 hs",
        "location": "Salón Zeus - Hotel Regal Pacific",
        "cta": "How to get there >"
      }
    }
  },
  es: {
    translation: {
      "nav": {
        "rules": "Reglamento",
        "categories": "Categorías",
        "inscription": "Inscripción",
        "closingDates": "Fechas de cierre",
        "fees": "Tarifario",
        "awards": "Premios/Replicas",
        "judges": "Jurados",
        "winners": "Ganadores",
        "hallOfFame": "Hall de la fama",
        "contact": "Contacto",
        "loginJudges": "Ingreso Jurados",
        "loginAgencies": "Ingreso Agencias",
        "selectLanguage": "Seleccionar Idioma"
      },
      "hero": {
        "title": "27 AÑOS DE\nEXITOSA\nTRAYECTORIA",
        "date": "20 de diciembre de 2022 - 19:30 hs",
        "location": "Salón Zeus - Hotel Regal Pacific",
        "cta": "Como llegar >"
      }
    }
  },
  it: {
    translation: {
      "nav": {
        "rules": "Regolamento",
        "categories": "Categorie",
        "inscription": "Iscrizione",
        "closingDates": "Date di chiusura",
        "fees": "Tariffe",
        "awards": "Premi/Repliche",
        "judges": "Giudici",
        "winners": "Vincitori",
        "hallOfFame": "Hall of fame",
        "contact": "Contatti",
        "loginJudges": "Login Giudici",
        "loginAgencies": "Login Agenzie",
        "selectLanguage": "Seleziona Lingua"
      },
      "hero": {
        "title": "27 ANNI DI\nSUCCESSI",
        "date": "20 dicembre 2022 - 19:30 hs",
        "location": "Salón Zeus - Hotel Regal Pacific",
        "cta": "Come arrivare >"
      }
    }
  },
  fr: {
    translation: {
      "nav": {
        "rules": "Règlement",
        "categories": "Catégories",
        "inscription": "Inscription",
        "closingDates": "Dates de clôture",
        "fees": "Tarifs",
        "awards": "Prix/Répliques",
        "judges": "Juges",
        "winners": "Gagnants",
        "hallOfFame": "Hall of fame",
        "contact": "Contact",
        "loginJudges": "Connexion Juges",
        "loginAgencies": "Connexion Agences",
        "selectLanguage": "Choisir la langue"
      },
      "hero": {
        "title": "27 ANS DE\nSUCCÈS",
        "date": "20 décembre 2022 - 19h30",
        "location": "Salón Zeus - Hotel Regal Pacific",
        "cta": "Comment s'y rendre >"
      }
    }
  },
  pt: {
    translation: {
      "nav": {
        "rules": "Regulamento",
        "categories": "Categorias",
        "inscription": "Inscrição",
        "closingDates": "Datas de encerramento",
        "fees": "Tarifas",
        "awards": "Prêmios/Réplicas",
        "judges": "Jurados",
        "winners": "Vencedores",
        "hallOfFame": "Hall da fama",
        "contact": "Contato",
        "loginJudges": "Login Jurados",
        "loginAgencies": "Login Agências",
        "selectLanguage": "Selecionar Idioma"
      },
      "hero": {
        "title": "27 ANOS DE\nTRAJETÓRIA DE SUCESSO",
        "date": "20 de dezembro de 2022 - 19:30 hs",
        "location": "Salón Zeus - Hotel Regal Pacific",
        "cta": "Como chegar >"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
