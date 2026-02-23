import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { reglamentoES } from './data/reglamentoES';
import { categoriasES } from './data/categoriasES';
import { categoriasEN } from './data/categoriasEN';
import { categoriasIT } from './data/categoriasIT';
import { categoriasFR } from './data/categoriasFR';
import { categoriasPT } from './data/categoriasPT';
import { fechasCierreES } from './data/fechasCierreES';
import { fechasCierreEN } from './data/fechasCierreEN';
import { fechasCierreIT } from './data/fechasCierreIT';
import { fechasCierreFR } from './data/fechasCierreFR';
import { fechasCierrePT } from './data/fechasCierrePT';

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
        "date": "December 20, 2026 - 19:30 hs",
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
      "categorias": {
        "pageTitle": "FIP Categories\n2026",
        "downloadPdf": "Download Categories PDF in English",
        "sections": [
          { "id": "A", "title": "Conditions of participation", "text": "This official regulation is integrated by its general articles and complementary clarifications.\nOnce the registration form is submitted, all rules are implicitly agreed and accepted by the participant." },
          { "id": "B", "title": "Conditions of participation", "text": "This official regulation is integrated by its general articles and complementary clarifications.\nOnce the registration form is submitted, all rules are implicitly agreed and accepted by the participant." }
        ],
        "detailedList": categoriasEN
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
        "downloadsPtTitle": "Downloads in Portuguese",
        "contactTitle": "Contact",
        "address": "Av. Forest 1147, Buenos Aires,\nArgentina.",
        "rules": "Rules .pdf",
        "presentation": "Campaign Presentation .pptx",
        "form": "Registration Form .pdf",
        "replicas": "Replicas Request .doc",
        "categories": "Categories .pdf"
      },
      "reglamento": {
        ...reglamentoES,
        "title": "FIP Rules\n2026",
        "description": "These official rules are composed of their general articles and complementary clarifications.\nOnce the registration form is submitted, all rules are implicitly agreed upon and accepted by the participant."
      },
      "fechasCierre": fechasCierreEN
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
        "date": "20 de diciembre de 2026 - 19:30 hs",
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
      "categorias": {
        "pageTitle": "Categorías del FIP\n2026",
        "downloadPdf": "Descargar PDF Categorías en español",
        "sections": [
          { "id": "A", "title": "Condiciones de participacion", "text": "Este reglamento de carácter oficial, está integrado por sus artículos generales y sus aclaraciones complementarias.\nUna vez enviado el formulario de inscripción, todas las reglas quedan implícitamente convenidas y aceptadas por el participante." },
          { "id": "B", "title": "Condiciones de participacion", "text": "Este reglamento de carácter oficial, está integrado por sus artículos generales y sus aclaraciones complementarias.\nUna vez enviado el formulario de inscripción, todas las reglas quedan implícitamente convenidas y aceptadas por el participante." }
        ],
        "detailedList": categoriasES
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
      },
      "reglamento": reglamentoES,
      "fechasCierre": fechasCierreES
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
        "date": "20 dicembre 2026 - 19:30 hs",
        "location": "Salón Zeus - Hotel Regal Pacific",
        "cta": "Come arrivare >"
      },
      "dates": {
        "tag": "PRIMA CHIAMATA",
        "date": "fino al 10 aprile, 2026",
        "discount": "25% di sconto per l'iscrizione anticipata",
        "cta": "ISCRIVITI ->",
        "closing": "DATE DI CHIUSURA >"
      },
      "news": {
        "category": "CATEGORIA ARTICOLO",
        "title": "Titolo di un articolo multi-linea nella home"
      },
      "rubros": {
        "title": "22 Settori. +200 categorie",
        "cardTitle": "Marketing Promozionale (MP)",
        "cardSubtitle": "SETTORE 1"
      },
      "categorias": {
        "pageTitle": "Categorie FIP\n2026",
        "downloadPdf": "Scarica il PDF delle categorie in italiano",
        "sections": [
          { "id": "A", "title": "Condizioni di partecipazione", "text": "Questo regolamento ufficiale è integrato dai suoi articoli generali e chiarimenti complementari.\nUna volta inviato il modulo di registrazione, tutte le regole sono implicitamente concordate e accettate dal partecipante." },
          { "id": "B", "title": "Condizioni di partecipazione", "text": "Questo regolamento ufficiale è integrato dai suoi articoli generali e chiarimenti complementari.\nUna volta inviato il modulo di registrazione, tutte le regole sono implicitamente concordate e accettate dal partecipante." }
        ],
        "detailedList": categoriasIT
      },
      "jury": {
        "title": "Giuria Internazionale",
        "role": "DESCRIZIONE DEL RUOLO IN PIÙ RIGHE",
        "countries": {
          "argentina": "ARGENTINA",
          "colombia": "COLOMBIA",
          "mexico": "MESSICO",
          "chile": "CILE",
          "uruguay": "URUGUAY",
          "brazil": "BRASILE"
        }
      },
      "parallax": {
        "title": "27 anni\nGrandi idee",
        "description": "Idee eseguite con senso.\nCampagne, esperienze e strategie che generano un impatto reale e lasciano il segno nell'industria.",
        "cta": "ISCRIVITI AL FIP >"
      },
      "rankings": {
        "title": "Classifiche FIP",
        "country": "Argentina"
      },
      "winningCases": {
        "title": "Resta ispirato",
        "subtitle": "Casi Vincenti 2025",
        "cardMetadata": "AGENZIA / MARCA / PAESE",
        "cardTitle": "Titolo della Campagna",
        "cta": "TUTTI I CASI VINCENTI >"
      },
      "socials": {
        "title": "Seguici"
      },
      "footer": {
        "downloadsEsTitle": "Download in Spagnolo",
        "downloadsPtTitle": "Download in Portoghese",
        "contactTitle": "Contatti",
        "address": "Av. Forest 1147, Buenos Aires,\nArgentina.",
        "rules": "Regolamento .pdf",
        "presentation": "Presentazione Campagne .pptx",
        "form": "Modulo di Iscrizione .pdf",
        "replicas": "Richiesta Repliche .doc",
        "categories": "Categorie .pdf"
      },
      "reglamento": {
        ...reglamentoES,
        "title": "Regole del FIP\n2026",
        "description": "Queste regole ufficiali sono composte da articoli generali e chiarimenti complementari.\nUna volta inviato il modulo di registrazione, tutte le regole sono implicitamente concordate e accettate dal partecipante."
      },
      "fechasCierre": fechasCierreIT
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
        "date": "20 décembre 2026 - 19h30",
        "location": "Salón Zeus - Hotel Regal Pacific",
        "cta": "Comment s'y rendre >"
      },
      "dates": {
        "tag": "PREMIER APPEL",
        "date": "jusqu'au 10 avril 2026",
        "discount": "25% de réduction pour une inscription anticipée",
        "cta": "S'INSCRIRE ->",
        "closing": "DATES DE CLÔTURE >"
      },
      "news": {
        "category": "CATÉGORIE D'ARTICLE",
        "title": "Titre d'un article sur plusieurs lignes sur la page d'accueil"
      },
      "rubros": {
        "title": "22 Secteurs. +200 catégories",
        "cardTitle": "Marketing Promotionnel (MP)",
        "cardSubtitle": "SECTEUR 1"
      },
      "categorias": {
        "pageTitle": "Catégories FIP\n2026",
        "downloadPdf": "Télécharger le PDF des catégories en français",
        "sections": [
          { "id": "A", "title": "Conditions de participation", "text": "Ce règlement officiel est intégré par ses articles généraux et clarifications complémentaires.\nUne fois le formulaire d'inscription soumis, toutes les règles sont implicitement convenues et acceptées par le participant." },
          { "id": "B", "title": "Conditions de participation", "text": "Ce règlement officiel est intégré par ses articles généraux et clarifications complémentaires.\nUne fois le formulaire d'inscription soumis, toutes les règles sont implicitement convenues et acceptées par le participant." }
        ],
        "detailedList": categoriasFR
      },
      "jury": {
        "title": "Jury International",
        "role": "DESCRIPTION DU RÔLE SUR PLUSIEURS LIGNES",
        "countries": {
          "argentina": "ARGENTINE",
          "colombia": "COLOMBIE",
          "mexico": "MEXIQUE",
          "chile": "CHILI",
          "uruguay": "URUGUAY",
          "brazil": "BRÉSIL"
        }
      },
      "parallax": {
        "title": "27 ans\nGrandes idées",
        "description": "Des idées exécutées avec sens.\nCampagnes, expériences et stratégies qui génèrent un impact réel et laissent leur marque dans l'industrie.",
        "cta": "S'INSCRIRE AU FIP >"
      },
      "rankings": {
        "title": "Classement FIP",
        "country": "Argentine"
      },
      "winningCases": {
        "title": "Restez inspiré",
        "subtitle": "Cas Gagnants 2025",
        "cardMetadata": "AGENCE / MARQUE / PAYS",
        "cardTitle": "Titre de la Campagne",
        "cta": "TOUS LES CAS GAGNANTS >"
      },
      "socials": {
        "title": "Suivez-nous"
      },
      "footer": {
        "downloadsEsTitle": "Téléchargements en Espagnol",
        "downloadsPtTitle": "Téléchargements en Portugais",
        "contactTitle": "Contact",
        "address": "Av. Forest 1147, Buenos Aires,\nArgentine.",
        "rules": "Règlement .pdf",
        "presentation": "Présentation des Campagnes .pptx",
        "form": "Formulaire d'Inscription .pdf",
        "replicas": "Demande de Répliques .doc",
        "categories": "Catégories .pdf"
      },
      "reglamento": {
        ...reglamentoES,
        "title": "Règles du FIP\n2026",
        "description": "Ces règles officielles sont composées de leurs articles généraux et de clarifications complémentaires.\nUne fois le formulaire d'inscription soumis, toutes les règles sont implicitement convenues et acceptées par le participant."
      },
      "fechasCierre": fechasCierreFR
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
        "date": "20 de dezembro de 2026 - 19:30 hs",
        "location": "Salón Zeus - Hotel Regal Pacific",
        "cta": "Como chegar >"
      },
      "dates": {
        "tag": "PRIMEIRA CHAMADA",
        "date": "até 10 de abril de 2026",
        "discount": "25% de desconto para inscrição antecipada",
        "cta": "INSCREVA-SE ->",
        "closing": "DATAS DE ENCERRAMENTO >"
      },
      "news": {
        "category": "CATEGORIA DE ARTIGO",
        "title": "Título de um artigo de várias linhas na página inicial"
      },
      "rubros": {
        "title": "22 Setores. +200 categorias",
        "cardTitle": "Marketing Promocional (MP)",
        "cardSubtitle": "SETOR 1"
      },
      "categorias": {
        "pageTitle": "Categorias do FIP\n2026",
        "downloadPdf": "Baixar pdf das categorias em portugues",
        "sections": [
          { "id": "A", "title": "Condições de participação", "text": "Este regulamento oficial é integrado por seus artigos gerais e esclarecimentos complementares.\nUma vez enviado o formulário de inscrição, todas as regras são implicitamente acordadas e aceitas pelo participante." },
          { "id": "B", "title": "Condições de participação", "text": "Este regulamento oficial é integrado por seus artigos gerais e esclarecimentos complementares.\nUma vez enviado o formulário de inscrição, todas as regras são implicitamente acordadas e aceitas pelo participante." }
        ],
        "detailedList": categoriasPT
      },
      "jury": {
        "title": "Júri Internacional",
        "role": "DESCRIÇÃO DO CARGO EM VÁRIAS LINHAS",
        "countries": {
          "argentina": "ARGENTINA",
          "colombia": "COLÔMBIA",
          "mexico": "MÉXICO",
          "chile": "CHILE",
          "uruguay": "URUGUAI",
          "brazil": "BRASIL"
        }
      },
      "parallax": {
        "title": "27 anos\nGrandes ideias",
        "description": "Ideias executadas com sentido.\nCampanhas, experiências e estratégias que geram impacto real e deixam sua marca na indústria.",
        "cta": "INSCREVA-SE NO FIP >"
      },
      "rankings": {
        "title": "Rankings do FIP",
        "country": "Argentina"
      },
      "winningCases": {
        "title": "Mantenha-se inspirado",
        "subtitle": "Casos Vencedores 2025",
        "cardMetadata": "AGÊNCIA / MARCA / PAÍS",
        "cardTitle": "Título da Campanha",
        "cta": "TODOS OS CASOS VENCEDORES >"
      },
      "socials": {
        "title": "Siga-nos"
      },
      "footer": {
        "downloadsEsTitle": "Downloads em Espanhol",
        "downloadsPtTitle": "Download em Português",
        "contactTitle": "Contato",
        "address": "Av. Forest 1147, Buenos Aires,\nArgentina.",
        "rules": "Regulamento .pdf",
        "presentation": "Apresentação de Campanhas .pptx",
        "form": "Formulário de Inscrição .pdf",
        "replicas": "Solicitação de Réplicas .doc",
        "categories": "Categorias .pdf"
      },
      "reglamento": {
        ...reglamentoES,
        "title": "Regras do FIP\n2026",
        "description": "Estas regras oficiais são compostas por seus artigos gerais e esclarecimentos complementares.\nUma vez enviado o formulário de inscrição, todas as regras são implicitamente acordadas e aceitas pelo participante."
      },
      "fechasCierre": fechasCierrePT
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

