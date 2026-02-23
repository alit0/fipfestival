import { categoriasEN } from '../data/categoriasEN';
import { reglamentoES } from '../data/reglamentoES';
import { fechasCierreEN } from '../data/fechasCierreEN';

export const en = {
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
            "pageTitle": "Judges",
            "thumbnailRole": "MULTI-LINE ROLE",
            "founderRole": "Founding Partner",
            "bioText": "He holds a Bachelor of Arts in Business Studies in Marketing from the University of Exeter, and an MBA-Executive and PADE from ICAI-ICADE at the Pontifical University of Comillas. Certified in management programs from MIT Boston. His extensive career is backed by the various positions he has held: marketing director, commercial manager, general manager in competitive sectors such as food, beverages, health, and industry. His wealth of knowledge led him to found TSMGO | The show must go on.",
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
        "fechasCierre": fechasCierreEN,
        "tarifario": {
            "title": "Fees",
            "discounts": {
                "badge": "Discounts 2026",
                "main": {
                    "value": "25%",
                    "desc": "off for early registration until March 30, 2026. Additionally, quantity discount"
                },
                "sub1": {
                    "value": "3%",
                    "desc": "additional when presenting between 3 to 5 entries"
                },
                "sub2": {
                    "value": "5%",
                    "desc": "additional when presenting between 6 to 15 entries"
                },
                "sub3": {
                    "value": "8%",
                    "desc": "additional when presenting more than 16 entries"
                }
            },
            "base": {
                "general": {
                    "label": "GENERAL:",
                    "amount": "380 US/€"
                },
                "marketing": {
                    "label": "PROMOTIONAL MARKETING:",
                    "amount": "380 US/€"
                },
                "eventos": {
                    "label": "EVENTS:",
                    "amount": "380 US/€"
                }
            },
            "details": {
                "general": {
                    "title": "GENERAL FEE. NET PRICE",
                    "desc": "Actions carried out between January 1, 2025, to September 1, 2026.",
                    "price": "380 US/€"
                },
                "agency": {
                    "title": "AGENCY OF THE YEAR COUNTRY",
                    "desc": "Registration cost for agency of the year country. Only one fee per year is paid per participating agency",
                    "price": "150 US/€"
                },
                "materials": {
                    "title": "MATERIALS AND DIGITAL SAMPLE",
                    "desc": "A fee of five (5) US dollars will be paid for each submitted case. This amount will be applied per case, regardless of the number of categories in which it is registered, corresponding to a single fee of five dollars per case.",
                    "price": "10 US/€"
                }
            },
            "note": {
                "registration": "Once the payment is made, the FIP will send you a tutorial on how to complete the registration."
            },
            "warning": {
                "label": "Important:",
                "text": "For each presented category, 1 registration is considered. If the same campaign is presented in several categories, each one does so independently and pays a fee for each, that is: 1 registration = 1 fee regardless of whether it is the same action or not"
            }
        }
    }
};
