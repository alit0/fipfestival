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
      },
      "dates": {
        "tag": "FIRST CALL",
        "date": "until April 10, 2026",
        "discount": "25% off for early registration",
        "cta": "REGISTER ->",
        "closing": "CLOSING DATES >"
      },
      "news": {
        "category": "ARTICLE CATEGORY",
        "title": "Title of a multi-line note on the home page"
      },
      "rubros": {
        "title": "22 Sectors. +200 categories",
        "cardTitle": "Promotional Marketing (PM)",
        "cardSubtitle": "SECTOR 1"
      },
      "jury": {
        "title": "International Jury",
        "role": "MULTI-LINE ROLE DESCRIPTION",
        "countries": {
          "argentina": "ARGENTINA",
          "colombia": "COLOMBIA",
          "mexico": "MEXICO",
          "chile": "CHILE",
          "uruguay": "URUGUAY",
          "brazil": "BRAZIL"
        }
      },
      "parallax": {
        "title": "27 years\nBig ideas",
        "description": "Ideas that are executed with meaning.\nCampaigns, experiences and strategies that generate real impact and leave a mark on the industry.",
        "cta": "REGISTER FOR THE FIP >"
      },
      "rankings": {
        "title": "The FIP rankings",
        "country": "Argentina"
      },
      "winningCases": {
        "title": "Keep inspired",
        "subtitle": "Winning Cases 2025",
        "cardMetadata": "AGENCY / BRAND / COUNTRY",
        "cardTitle": "Campaign Title",
        "cta": "ALL WINNING CASES >"
      },
      "socials": {
        "title": "Follow us"
      },
      "footer": {
        "downloadsEsTitle": "Downloads in Spanish",
        "downloadsPtTitle": "Download in Portuguese",
        "contactTitle": "Contact",
        "address": "Av. Forest 1147, Buenos Aires,\nArgentina.",
        "rules": "Rules .pdf",
        "presentation": "Campaign Presentation .pptx",
        "form": "Registration Form .pdf",
        "replicas": "Replicas Request .doc",
        "categories": "Categories .pdf"
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
      },
      "dates": {
        "tag": "PRIMERA LLAMADA",
        "date": "hasta el 10 de abril, 2026",
        "discount": "25% de descuento por inscripción anticipada",
        "cta": "INSCRIBITE ->",
        "closing": "FECHAS DE CIERRE >"
      },
      "news": {
        "category": "CATEGORIA DE ARTICULO",
        "title": "Titulo de una nota de varias lineas en la home"
      },
      "rubros": {
        "title": "22 Rubros. +200 categorias",
        "cardTitle": "Marketing Promocional (MP)",
        "cardSubtitle": "RUBRO 1"
      },
      "jury": {
        "title": "Jurado internacional",
        "role": "CARGO DE VARIAS LINEAS",
        "countries": {
          "argentina": "ARGENTINA",
          "colombia": "COLOMBIA",
          "mexico": "MEXICO",
          "chile": "CHILE",
          "uruguay": "URUGUAY",
          "brazil": "BRASIL"
        }
      },
      "parallax": {
        "title": "27 años\nGrandes ideas",
        "description": "Ideas que se ejecutan con sentido.\nCampañas, experiencias y estrategias que generan impacto real y dejan huella en la industria.",
        "cta": "INSCRIBIRSE EN EL FIP >"
      },
      "rankings": {
        "title": "El rankings del FIP",
        "country": "Argentina"
      },
      "winningCases": {
        "title": "Mantenete inspirado",
        "subtitle": "Casos ganadores 2025",
        "cardMetadata": "AGENCIA / MARCA / PAIS",
        "cardTitle": "Titulo de Campaña",
        "cta": "TODOS LOS CASOS GANADORES >"
      },
      "socials": {
        "title": "Seguinos"
      },
      "footer": {
        "downloadsEsTitle": "Descargas en español",
        "downloadsPtTitle": "Download em Português",
        "contactTitle": "Contacto",
        "address": "Av. Forest 1147, Buenos Aires,\nArgentina.",
        "rules": "Reglamento .pdf",
        "presentation": "Presentación de campañas .pptx",
        "form": "Formulario de Inscripción .pdf",
        "replicas": "Solicitud de Réplicas .doc",
        "categories": "Categorías .pdf"
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
