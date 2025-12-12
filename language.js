/**********************************************
   GLOBAL: load saved language (default en)
**********************************************/
let savedLang = localStorage.getItem("siteLang") || "en";

/**********************************************
   SITE-WIDE TEXT
**********************************************/
const siteText = {
    en: {
        headerTitle: "SDM College of Medical Sciences & Hospital",
        headerSubtitle: "Ophthalmology — Cataract Information Portal",

        menu: ["Home", "What is Cataract?", "Before Surgery", "After Surgery", "FAQs", "Contact / Help"],

        heroTitle: "Expert Cataract Care You Can Trust",
        heroSubtitle: "Restoring clear vision with advanced technology and compassionate care at SDM Hospital.",
        heroBtn: "Learn More",

        sectionFeatures: "Our Services",
        featuresHead: "Comprehensive Eye Care",

        tiles: {
            t1: "What is Cataract?",
            t2: "Before Surgery",
            t3: "After Surgery",
            t4: "FAQs",
            t5: "Contact / Help"
        },
        tileDescs: {
            d1: "Understanding the condition, causes, and treatment options.",
            d2: "Step-by-step guide to preparing for your procedure.",
            d3: "Essential care tips for a smooth and fast recovery.",
            d4: "Answers to common concerns about surgery and care.",
            d5: "Reach out to our specialists for appointments and queries."
        },

        whyTitle: "Why Choose SDM?",
        whyList: [
            "State-of-the-art Phacoemulsification Technology",
            "Highly Experienced Ophthalmologists",
            "Affordable and Transparent Pricing",
            "Comprehensive Pre- and Post-Operative Care"
        ],

        footerText: "© 2025 SDM College of Medical Sciences & Hospital. Developed by SDMCET."
    },
    kn: {
        headerTitle: "ಎಸ್‌ಡಿಎಂ ವೈದ್ಯಕೀಯ ವಿಜ್ಞಾನಗಳ ಕಾಲೇಜು ಮತ್ತು ಆಸ್ಪತ್ರೆ",
        headerSubtitle: "ನೇತ್ರಶಾಸ್ತ್ರ — ಕ್ಯಾಟರಾಕ್ಟ್ ಮಾಹಿತಿ ಪೋರ್ಟಲ್",

        menu: ["ಮುಖಪುಟ", "ಕ್ಯಾಟರಾಕ್ಟ್ ಎಂದರೇನು?", "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೂ ಮೊದಲು", "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರ", "ಪ್ರಶ್ನೋತ್ತರ", "ಸಂಪರ್ಕ / ಸಹಾಯ"],

        heroTitle: "ನಂಬಲರ್ಹವಾದ ಕ್ಯಾಟರಾಕ್ಟ್ ಚಿಕಿತ್ಸೆ",
        heroSubtitle: "ಎಸ್‌ಡಿಎಂ ಆಸ್ಪತ್ರೆಯಲ್ಲಿ ಸುಧಾರಿತ ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಕಾಳಜಿಯೊಂದಿಗೆ ನಿಮ್ಮ ದೃಷ್ಟಿಯನ್ನು ಮರಳಿ ಪಡೆಯಿರಿ.",
        heroBtn: "ಹೆಚ್ಚಿನ ಮಾಹಿತಿ",

        sectionFeatures: "ನಮ್ಮ ಸೇವೆಗಳು",
        featuresHead: "ಸಂಪೂರ್ಣ ನೇತ್ರ ಆರೈಕೆ",

        tiles: {
            t1: "ಕ್ಯಾಟರಾಕ್ಟ್ ಎಂದರೇನು?",
            t2: "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೂ ಮೊದಲು",
            t3: "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರ",
            t4: "ಪ್ರಶ್ನೋತ್ತರ",
            t5: "ಸಂಪರ್ಕ / ಸಹಾಯ"
        },
        tileDescs: {
            d1: "ಕ್ಯಾಟರಾಕ್ಟ್ ಸಮಸ್ಯೆ ಮತ್ತು ಚಿಕಿತ್ಸೆಯ ಬಗ್ಗೆ ಸಂಪೂರ್ಣ ಮಾಹಿತಿ.",
            d2: "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೆ ಸಿದ್ಧರಾಗಲು ಹಂತ ಹಂತದ ಮಾರ್ಗದರ್ಶಿ.",
            d3: "ಸುಗಮ ಚೇತರಿಕೆಗಾಗಿ ಅಗತ್ಯವಾದ ಆರೈಕೆ ಸಲಹೆಗಳು.",
            d4: "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಬಗ್ಗೆ ಇರುವ ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಗಳು.",
            d5: "ನೇಮಕಾತಿ ಮತ್ತು ವಿಚಾರಣೆಗಾಗಿ ನಮ್ಮ ತಜ್ಞರನ್ನು ಸಂಪರ್ಕಿಸಿ."
        },

        whyTitle: "ಎಸ್‌ಡಿಎಂ ಆಸ್ಪತ್ರೆಯನ್ನೇ ಏಕೆ ಆರಿಸಬೇಕು?",
        whyList: [
            "ಅತ್ಯಾಧುನಿಕ ಫೇಕೋಎಮಲ್ಸಿಫಿಕೇಶನ್ ತಂತ್ರಜ್ಞಾನ",
            "ಅತ್ಯಂತ ಅನುಭವಿ ನೇತ್ರ ತಜ್ಞರು",
            "ಕೈಗೆಟುಕುವ ಮತ್ತು ಪಾರದರ್ಶಕ ದರಗಳು",
            "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೂ ಮುನ್ನ ಮತ್ತು ನಂತರದ ಸಂಪೂರ್ಣ ಆರೈಕೆ"
        ],

        footerText: "© 2025 ಎಸ್‌ಡಿಎಂ ಮೆಡಿಕಲ್ ಸೈನ್ಸಸ್ ಮತ್ತು ಆಸ್ಪತ್ರೆ, ಧಾರವಾಡ. ಎಸ್‌ಡಿಎಂಸಿಇಟಿ ನಿರ್ಮಿಸಲಾಗಿದೆ."
    }
};

const pages = [
    "index.html",
    "cataract.html",
    "pre-surgery.html",
    "post-surgery.html",
    "faq.html",
    "contact.html"
];

/**********************************************
   PAGE SPECIFIC TEXT OBJECTS
**********************************************/

/* CATARACT PAGE */
const cataractPage = {
    en: {
        cat_title: "What is Cataract?",
        cat_p1: "A cataract is a clouding of the eye’s natural lens, which lies behind the iris and the pupil. It is the most common cause of vision loss in people over age 40 and is the principal cause of blindness in the world.",
        cat_p2: "How it affects vision: Imagine looking through a frosty or fogged-up window. Clouded vision caused by cataracts can make it more difficult to read, drive a car (especially at night), or see the expression on a friend's face.",

        cat_causes_title: "What Causes Cataract?",
        cat_causes_intro: "Most cataracts develop when aging or injury changes the tissue that makes up the eye's lens.",
        cat_causes_list: [
            "Aging: The most common cause.",
            "Medical Conditions: Diabetes, hypertension, or obesity.",
            "Medications: Long-term use of steroid medications.",
            "Lifestyle: Smoking and excessive alcohol consumption.",
            "Environment: Prolonged exposure to ultraviolet (UV) sunlight."
        ],

        cat_symptoms_title: "Symptoms to Watch For",
        cat_symptoms_list: [
            "Clouded, blurred, or dim vision.",
            "Increasing difficulty with vision at night.",
            "Sensitivity to light and glare.",
            "Need for brighter light for reading and other activities.",
            "Seeing 'halos' around lights.",
            "Frequent changes in eyeglass or contact lens prescription.",
            "Fading or yellowing of colors."
        ],

        cat_treatment_title: "Treatment: Phacoemulsification",
        cat_treatment_p1: "The only effective treatment for cataracts is surgery. Modern cataract surgery (Phacoemulsification) is one of the safest and most effective surgical procedures performed today.",
        cat_treatment_step_title: "How it works:",
        cat_treatment_list: [
            "A tiny incision is made in the eye.",
            "Ultrasound waves break up the cloudy lens (Phacoemulsification).",
            "The fragments are suctioned out.",
            "A new artificial Intraocular Lens (IOL) is inserted."
        ],

        cat_iol_title: "Types of Intraocular Lenses (IOLs)",
        cat_iol_intro: "We offer a range of FDA-approved lenses to suit your lifestyle:",
        // Broken down for cards
        iol_cards: {
            t1: "Monofocal Lenses", d1: "Clear vision at one distance (usually far). Glasses required for reading.",
            t2: "Toric Lenses", d2: "Designed to correct astigmatism (cylindrical power) along with cataracts.",
            t3: "Multifocal Lenses", d3: "Premium lenses for clear vision at all distances. Reduces need for glasses."
        },

        cat_myth_title: "Myths vs Facts",
        cat_myth_list: [
            "Myth: Cataracts grow back. (Fact: They don't. A 'secondary' film can form but is laser-treatable.)",
            "Myth: Medication can cure cataracts. (Fact: Surgery is the only cure.)"
        ]
    },

    kn: {
        cat_title: "ಕ್ಯಾಟರಾಕ್ಟ್ (ಪೊರೆ) ಎಂದರೇನು?",
        cat_p1: "ಕ್ಯಾಟರಾಕ್ಟ್ ಎಂದರೆ ಕಣ್ಣಿನ ನೈಸರ್ಗಿಕ ಲೆನ್ಸ್ ಮೋಡದಂತೆ ಮಸುಕಾಗುವುದು. ಇದು 40 ವರ್ಷ ಮೇಲ್ಪಟ್ಟವರಲ್ಲಿ ದೃಷ್ಟಿ ಕಳೆದುಕೊಳ್ಳಲು ಪ್ರಮುಖ ಕಾರಣವಾಗಿದೆ.",
        cat_p2: "ದೃಷ್ಟಿ ಹೇಗೆ ಬದಲಾಗುತ್ತದೆ: ಮಂಜಿನ ಕಿಟಕಿಯಿಂದ ಹೊರಗೆ ನೋಡಿದಂತೆ ಭಾಸವಾಗುತ್ತದೆ. ಓದುವುದು, ರಾತ್ರಿ ವಾಹನ ಚಲಾಯಿಸುವುದು ಮತ್ತು ಜನರ ಮುಖ ಗುರುತಿಸುವುದು ಕಷ್ಟವಾಗಬಹುದು.",

        cat_causes_title: "ಕ್ಯಾಟರಾಕ್ಟ್ ಬರಲು ಕಾರಣಗಳು",
        cat_causes_intro: "ವಯಸ್ಸಾಗುವಿಕೆ ಅಥವಾ ಕಣ್ಣಿನ ಗಾಯದ ನಿಮಿತ್ತ ಇದು ಹೆಚ್ಚು ಕಂಡುಬರುತ್ತದೆ.",
        cat_causes_list: [
            "ವಯಸ್ಸು: ಇದು ಅತ್ಯಂತ ಸಾಮಾನ್ಯ ಕಾರಣ.",
            "ಆರೋಗ್ಯ ಸಮಸ್ಯೆಗಳು: ಮಧುಮೇಹ (Diabetes) ಮತ್ತು ರಕ್ತದೊತ್ತಡ.",
            "ಔಷಧಿಗಳು: ದೀರ್ಘಕಾಲದ ಸ್ಟೀರಾಯ್ಡ್ ಬಳಕೆ.",
            "ಜೀವನಶೈಲಿ: ಧೂಮಪಾನ ಮತ್ತು ಮದ್ಯಪಾನ.",
            "ಪರಿಸರ: ಸೂರ್ಯನ ತೀವ್ರ ಕಿರಣಗಳಿಗೆ (UV rays) ಹೆಚ್ಚು ಒಡ್ಡಿಕೊಳ್ಳುವುದು."
        ],

        cat_symptoms_title: "ಗಮನಿಸಬೇಕಾದ ಲಕ್ಷಣಗಳು",
        cat_symptoms_list: [
            "ಮಂಜಾದ ಅಥವಾ ಮಸುಕಾದ ದೃಷ್ಟಿ.",
            "ರಾತ್ರಿ ವೇಳೆ ನೋಡಲು ಕಷ್ಟವಾಗುವುದು.",
            "ಬೆಳಕಿಗೆ ಕಣ್ಣು ಕುಕ್ಕುವುದು (Glare).",
            "ಓದಲು ಹೆಚ್ಚು ಬೆಳಕು ಬೇಕಾಗುವುದು.",
            "ದೀಪದ ಸುತ್ತ ಬಣ್ಣದ ಉಂಗುರಗಳು ಕಾಣಿಸುವುದು.",
            "ಆಗಾಗ್ಗೆ ಕನ್ನಡಕದ ಪವರ್ ಬದಲಾಗುವುದು.",
            "ಬಣ್ಣಗಳು ಮಸುಕಾಗಿ ಕಾಣುವುದು."
        ],

        cat_treatment_title: "ಚಿಕಿತ್ಸೆ: ಫೇಕೋಎಮಲ್ಸಿಫಿಕೇಶನ್",
        cat_treatment_p1: "ಕ್ಯಾಟರಾಕ್ಟ್‌ಗೆ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯೇ ಏಕೈಕ ಪರಿಹಾರ. ಆಧುನಿಕ 'ಫೇಕೋ' ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಅತ್ಯಂತ ಸುರಕ್ಷಿತ ಮತ್ತು ಪರಿಣಾಮಕಾರಿ.",
        cat_treatment_step_title: "ಇದು ಹೇಗೆ ನಡೆಯುತ್ತದೆ:",
        cat_treatment_list: [
            "ಕಣ್ಣಿನಲ್ಲಿ ಸಣ್ಣ ರಂಧ್ರ ಮಾಡಲಾಗುತ್ತದೆ.",
            "ಅಲ್ಟ್ರಾಸೌಂಡ್ ಮೂಲಕ ಹಳೆಯ ಲೆನ್ಸ್ ಒಡೆಯಲಾಗುತ್ತದೆ.",
            "ಅದನ್ನು ಹೀರಿ ತೆಗೆದು, ಹೊಸ ಕೃತಕ ಲೆನ್ಸ್ (IOL) ಹಾಕಲಾಗುತ್ತದೆ.",
            "ಇದು ಕೆಲವೇ ನಿಮಿಷಗಳಲ್ಲಿ ಮುಗಿಯುವ ಸರಳ ಪ್ರಕ್ರಿಯೆ."
        ],

        cat_iol_title: "ಐಒಎಲ್ (IOL) ಲೆನ್ಸ್‌ಗಳ ವಿಧಗಳು",
        cat_iol_intro: "ನಿಮ್ಮ ಜೀವನಶೈಲಿಗೆ ಅನುಗುಣವಾಗಿ ನಾವು ವಿವಿಧ ಲೆನ್ಸ್‌ಗಳನ್ನು ಒದಗಿಸುತ್ತೇವೆ:",
        iol_cards: {
            t1: "ಮೊನೊಫೋಕಲ್ ಲೆನ್ಸ್", d1: "ದೂರದ ದೃಷ್ಟಿ ಸ್ಪಷ್ಟವಾಗಿರುತ್ತದೆ. ಓದಲು ಮತ್ತು ಹತ್ತಿರದ ಕೆಲಸಕ್ಕೆ ಕನ್ನಡಕ ಬೇಕು.",
            t2: "ಟೋರಿಕ್ ಲೆನ್ಸ್", d2: "ಕ್ಯಾಟರಾಕ್ಟ್ ಜೊತೆಗೆ ಅಸ್ಟಿಗ್ಮ್ಯಾಟಿಸಮ್ (ದೃಷ್ಟಿ ದೋಷ) ಸರಿಪಡಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ.",
            t3: "ಮಲ್ಟಿಫೋಕಲ್ ಲೆನ್ಸ್", d3: "ಎಲ್ಲಾ ದೂರಗಳಿಗೂ (ದೂರ, ಮಧ್ಯಮ, ಹತ್ತಿರ) ಸ್ಪಷ್ಟ ದೃಷ್ಟಿ ನೀಡುತ್ತದೆ. ಕನ್ನಡಕದ ಅವಶ್ಯಕತೆ ಕಡಿಮೆ."
        },

        cat_myth_title: "ಅಪನಂಬಿಕೆ vs ಸತ್ಯ",
        cat_myth_list: [
            "ಮಿಥ್ಯ: ಪೊರೆ ಮತ್ತೆ ಬೆಳೆಯುತ್ತದೆ. (ಸತ್ಯ: ಇಲ್ಲ, ಒಮ್ಮೆ ತೆಗೆದರೆ ಮತ್ತೆ ಬರುವುದಿಲ್ಲ.)",
            "ಮಿಥ್ಯ: ಹನಿಮದ್ದಿನಿಂದ ಪೊರೆ ಗುಣಪಡಿಸಬಹುದು. (ಸತ್ಯ: ಇಲ್ಲ, ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯೇ ಏಕೈಕ ದಾರಿ.)"
        ]
    }
};

/* PRE-SURGERY PAGE */
const preSurgeryPage = {
    en: {
        pre_title: "Before Cataract Surgery",
        pre_intro: "A successful surgery starts with good preparation. Follow this timeline to ensure you are ready for your procedure.",

        pre_week_title: "1 Week Before Surgery",
        pre_week_list: [
            "Medical Review: Visit your general physician for a fitness check-up (ECG, Blood Sugar, BP).",
            "Eye Drops: Start using antibiotic eye drops if prescribed by your ophthalmologist.",
            "Plan Ahead: Arrange for a family member or friend to drive you home after surgery."
        ],

        pre_daybefore_title: "The Day Before Surgery",
        pre_daybefore_list: [
            "Review Medications: Ask your doctor which medicines to take or stop (especially blood thinners).",
            "Hygiene: Wash your hair and face. You won’t be able to wash your hair for a few days after surgery.",
            "Rest: Get a good night's sleep to keep your blood pressure stable."
        ],

        pre_dayof_title: "On the Morning of Surgery",
        pre_dayof_list: [
            "Fasting: Do not eat solid food for 6 hours before surgery. You may drink clear water/tea up to 2 hours before.",
            "Medication: Take your blood pressure or thyroid medicines with a sip of water (unless told otherwise).",
            "Dress Code: Wear loose, comfortable cotton clothes with buttons (avoid T-shirts that pull over the head).",
            "No Makeup: Do not use cosmetics, creams, perfumes, or hair oil."
        ],

        pre_bring_title: "Checklist: What to Bring",
        pre_bring_list: [
            "File containing all medical reports and ID proof (Aadhaar/Voter ID).",
            "List of current medications.",
            "One attendant/family member.",
            "Dark sunglasses to wear on your way home."
        ]
    },

    kn: {
        pre_title: "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೂ ಮೊದಲು ತಯಾರಿ",
        pre_intro: "ಯಶಸ್ವಿ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೆ ಉತ್ತಮ ತಯಾರಿ ಅತ್ಯಗತ್ಯ. ಈ ಕೆಳಗಿನ ಹಂತಗಳನ್ನು ಅನುಸರಿಸಿ.",

        pre_week_title: "1 ವಾರ ಮೊದಲು",
        pre_week_list: [
            "ವೈದ್ಯಕೀಯ ತಪಾಸಣೆ: ಸುಗರ್ (Diabetes), ಬಿಪಿ (BP) ಮತ್ತು ಇಸಿಜಿ (ECG) ಚೆಕ್ ಮಾಡಿಸಿಕೊಳ್ಳಿ.",
            "ಕಣ್ಣಿನ ಹನಿಗಳು: ವೈದ್ಯರು ಸೂಚಿಸಿದ್ದರೆ, ಇಂದಿನಿಂದಲೇ ಕಣ್ಣಿಗೆ ಔಷಧಿ ಹಾಕಲು ಪ್ರಾರಂಭಿಸಿ.",
            "ಯೋಜನೆ: ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರ ನಿಮ್ಮನ್ನು ಮನೆಗೆ ಕರೆದೊಯ್ಯಲು ಯಾರನ್ನಾದರೂ ವ್ಯವಸ್ಥೆ ಮಾಡಿ."
        ],

        pre_daybefore_title: "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ಹಿಂದಿನ ದಿನ",
        pre_daybefore_list: [
            "ಔಷಧಿ ಪರಿಶೀಲನೆ: ರಕ್ತ ತೆಳುವಾಗಿಸುವ ಮಾತ್ರೆಗಳನ್ನು (Blood thinners) ನಿಲ್ಲಿಸಬೇಕೇ ಎಂದು ವೈದ್ಯರನ್ನು ಕೇಳಿ.",
            "ಸ್ವಚ್ಛತೆ: ತಲೆ ಮತ್ತು ಮುಖವನ್ನು ಚೆನ್ನಾಗಿ ತೊಳೆದುಕೊಳ್ಳಿ. ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರ ಕೆಲವು ದಿನ ತಲೆಗೆ ನೀರು ಹಾಕುವಂತಿಲ್ಲ.",
            "ವಿಶ್ರಾಂತಿ: ರಕ್ತದೊತ್ತಡ ಸ್ಥಿರವಾಗಿರಲು ಚೆನ್ನಾಗಿ ನಿದ್ರಿಸಿ."
        ],

        pre_dayof_title: "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ದಿನ ಬೆಳಿಗ್ಗೆ",
        pre_dayof_list: [
            "ಉಪವಾಸ: ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೆ 6 ಗಂಟೆಗಳ ಮೊದಲು ಘನ ಆಹಾರ ಸೇವಿಸಬೇಡಿ. ನೀರು ಅಥವಾ ಚಹಾವನ್ನು 2 ಗಂಟೆಗಳ ಮುಂಚಿತವಾಗಿ ಕುಡಿಯಬಹುದು.",
            "ಮಾತ್ರೆಗಳು: ಬಿಪಿ (BP) ಅಥವಾ ಥೈರಾಯ್ಡ್ ಮಾತ್ರೆಗಳಿದ್ದರೆ ಸ್ವಲ್ಪ ನೀರಿನೊಂದಿಗೆ ತೆಗೆದುಕೊಳ್ಳಿ.",
            "ಬಟ್ಟೆ: ಬಟನ್ ಇರುವ ಹತ್ತಿ ಬಟ್ಟೆ ಧರಿಸಿ (ತಲೆಯ ಮೇಲಿಂದ ಹಾಕುವ ಟಿ-ಶರ್ಟ್ ಬೇಡ).",
            "ಮೇಕಪ್ ಬೇಡ: ಮುಖಕ್ಕೆ ಯಾವುದೇ ಕ್ರೀಮ್, ಪೌಡರ್ ಅಥವಾ ಎಣ್ಣೆ ಹಚ್ಚಬೇಡಿ."
        ],

        pre_bring_title: "ಆಸ್ಪತ್ರೆಗೆ ತರಬೇಕಾದ ವಸ್ತುಗಳು",
        pre_bring_list: [
            "ಎಲ್ಲಾ ವೈದ್ಯಕೀಯ ರಿಪೋರ್ಟ್‌ಗಳು ಮತ್ತು ಐಡಿ ಪ್ರೂಫ್ (ಆಧಾರ್ ಕಾರ್ಡ್).",
            "ಪ್ರಸ್ತುತ ತೆಗೆದುಕೊಳ್ಳುತ್ತಿರುವ ಔಷಧಿಗಳ ಪಟ್ಟಿ.",
            "ಜೊತೆಗೆ ಒಬ್ಬ ಸಹಾಯಕರು (Attendant).",
            "ಮನೆಗೆ ಹೋಗುವಾಗ ಧರಿಸಲು ಕಪ್ಪು ಕನ್ನಡಕ (Sunglasses)."
        ]
    }
};

/* POST-SURGERY PAGE */
const postSurgeryPage = {
    en: {
        post_title: "After Cataract Surgery",
        post_intro: "Your vision will likely be blurry at first as your eye heals and adjusts. This is normal. Most patients see clearly within a few days.",

        post_timeline_title: "Recovery Timeline",
        post_timeline_list: [
            "Day 1: Rest. Your eye may feel gritty or itchy. Wear your protective shield while sleeping.",
            "Week 1: Vision improves. Avoid getting water/soap in your eye. No heavy lifting.",
            "Month 1: Full healing. You can usually get a final eyeglass prescription if needed."
        ],

        post_followup_title: "Follow-up Visit Schedule",
        post_followup_intro: "Regular check-ups are vital to monitor healing:",
        fol_cards: {
            t1: "Day 1", d1: "Mandatory check for pressure and infection signs.",
            t2: "Day 7", d2: "Vision assessment and drop adjustment.",
            t3: "Month 1", d3: "Final check-up and glasses prescription if needed."
        },

        post_guide_title: "Activity Guide: Do's & Don'ts",
        post_do_head: "&#9989; Do This",
        post_do_list: [
            "Use prescribed eye drops on time.",
            "Wear sunglasses outside.",
            "Watch TV (at a normal distance).",
            "Read books or mobile (if comfortable)."
        ],
        post_dont_head: "&#10060; Avoid This",
        post_dont_list: [
            "Do NOT rub your eye.",
            "No swimming or splashing water on face.",
            "No cooking (smoke/steam) for 1 week.",
            "No driving until doctor approves."
        ],

        post_emergency_title: "When to Call the Doctor",
        post_emergency_intro: "Contact us immediately if you experience:",
        post_emergency_list: [
            "Severe pain not relieved by medicine.",
            "Sudden loss of vision or a 'curtain' effect.",
            "Flashes of light or new floaters.",
            "Excessive redness or discharge."
        ]
    },

    kn: {
        post_title: "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರ ಆರೈಕೆ",
        post_intro: "ಆರಂಭದಲ್ಲಿ ದೃಷ್ಟಿ ಸ್ವಲ್ಪ ಮಸುಕಾಗಿರಬಹುದು, ಇದು ಸಹಜ. ಕೆಲವೇ ದಿನಗಳಲ್ಲಿ ದೃಷ್ಟಿ ನಿರ್ಮಲವಾಗುತ್ತದೆ.",

        post_timeline_title: "ಚೇತರಿಕೆಯ ಸಮಯ",
        post_timeline_list: [
            "1 ನೇ ದಿನ: ವಿಶ್ರಾಂತಿ ಪಡೆಯಿರಿ. ಕಣ್ಣು ಸ್ವಲ್ಪ ಕೆರೆದಂತೆ ಅನಿಸಬಹುದು. ಮಲಗುವಾಗ ಕಣ್ಣಿನ ಕವಚ (Shield) ಧರಿಸಿ.",
            "1 ನೇ ವಾರ: ದೃಷ್ಟಿ ಸುಧಾರಿಸುತ್ತದೆ. ಕಣ್ಣಿಗೆ ಸೋಪು/ನೀರು ತಗುಲದಂತೆ ಎಚ್ಚರವಹಿಸಿ. ಭಾರ ಎತ್ತಬೇಡಿ.",
            "1 ನೇ ತಿಂಗಳು: ಸಂಪೂರ್ಣ ಗುಣಮುಖ. ಬೇಕಿದ್ದರೆ ಹೊಸ ಕನ್ನಡಕದ ಪರೀಕ್ಷೆ ಮಾಡಿಸಬಹುದು."
        ],

        post_followup_title: "ಪರಿಶೀಲನಾ ವೇಳಾಪಟ್ಟಿ (Follow-up)",
        post_followup_intro: "ಚೇತರಿಕೆಯನ್ನು ಪರೀಕ್ಷಿಸಲು ಈ ದಿನಗಳಲ್ಲಿ ತಪ್ಪದೇ ಬನ್ನಿ:",
        fol_cards: {
            t1: "1 ನೇ ದಿನ", d1: "ಕಣ್ಣಿನ ಒತ್ತಡ ಪರೀಕ್ಷಿಸಲು ಕಡ್ಡಾಯವಾಗಿ ಬರಬೇಕು.",
            t2: "1 ನೇ ವಾರ", d2: "ದೃಷ್ಟಿ ಪರೀಕ್ಷೆ ಮತ್ತು ಔಷಧ ಬದಲಾವಣೆ ಮಾಡಲಾಗುತ್ತದೆ.",
            t3: "1 ನೇ ತಿಂಗಳು", d3: "ಅಂತಿಮ ಪರೀಕ್ಷೆ ಮತ್ತು ಕನ್ನಡಕದ ಚೀಟಿ (ಬೇಕಿದ್ದರೆ)."
        },

        post_guide_title: "ಚಟುವಟಿಕೆ ಮಾರ್ಗದರ್ಶಿ",
        post_do_head: "&#9989; ಇವನ್ನು ಮಾಡಿ",
        post_do_list: [
            "ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಔಷಧ ಹಾಕಿ.",
            "ಹೊರಗೆ ಹೋಗುವಾಗ ಕಪ್ಪು ಕನ್ನಡಕ ಧರಿಸಿ.",
            "ಟಿವಿ ನೋಡಬಹುದು (ಸಾಮಾನ್ಯ ದೂರದಿಂದ).",
            "ಮೊಬೈಲ್ ಅಥವಾ ಪುಸ್ತಕ ಓದಬಹುದು (ತ್ರಾಸವಾಗದಿದ್ದರೆ)."
        ],
        post_dont_head: "&#10060; ಇವನ್ನು ಮಾಡಬೇಡಿ",
        post_dont_list: [
            "ಕಣ್ಣನ್ನು ಉಜ್ಜಲೇಬಾರದು.",
            "ಈಜುವುದು ಅಥವಾ ಮುಖಕ್ಕೆ ನೀರು ಸಿಂಪಡಿಸುವುದು ಬೇಡ.",
            "ಒಂದು ವಾರ ಅಡುಗೆ ಮಾಡಬೇಡಿ (ಹೊಗೆ ತಗುಲಬಾರದು).",
            "ವೈದ್ಯರು ಹೇಳುವವರೆಗೂ ವಾಹನ ಓಡಿಸಬೇಡಿ."
        ],

        post_emergency_title: "ತುರ್ತಾಗಿ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ",
        post_emergency_intro: "ಈ ಲಕ್ಷಣಗಳು ಕಂಡುಬಂದರೆ ತಕ್ಷಣ ಆಸ್ಪತ್ರೆಗೆ ಬನ್ನಿ:",
        post_emergency_list: [
            "ಔಷಧಿಯಿಂದಲೂ ಕಡಿಮೆಯಾಗದ ತೀವ್ರ ಕಣ್ಣು ನೋವು.",
            "ದಿಢೀರ್ ದೃಷ್ಟಿ ಮಂಜಾಗುವುದು.",
            "ಮಿಂಚಿನ ಬೆಳಕು ಕಂಡಂತೆ ಆಗುವುದು.",
            "ವಿಪರೀತ ಕಣ್ಣು ಕೆಂಪಾಗುವುದು."
        ]
    }
};

/* CONTACT PAGE */
const contactPage = {
    en: {
        contact_title: "Contact Us",
        contact_desc: "Tap the card below to call or email us.",
        phone_title: "Phone",
        email_title: "Email",
        location_title: "Location",
        location_value: "Dharwad – SDM College of Medical Sciences & Hospital",
        map_title: "Find us on Map",
        footer_text: "© 2025 SDM College of Medical Sciences & Hospital, Dharwad. Developed by SDMCET."
    },

    kn: {
        contact_title: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
        contact_desc: "ಕಾಲ್ ಅಥವಾ ಇಮೇಲ್ ಮಾಡಲು ಕೆಳಗಿನ ಕಾರ್ಡ್ ಅನ್ನು ಟ್ಯಾಪ್ ಮಾಡಿ.",
        phone_title: "ದೂರವಾಣಿ",
        email_title: "ಇಮೇಲ್",
        location_title: "ಸ್ಥಳ",
        location_value: "ಧಾರವಾಡ – SDM ಮೆಡಿಕಲ್ ಸೈನ್ಸಸ್ ಮತ್ತು ಆಸ್ಪತ್ರೆ",
        map_title: "ನಮಗೆ ಮ್ಯಾಪ್‌ನಲ್ಲಿ ಹುಡುಕಿ",
        footer_text: "© 2025 ಎಸ್‌ಡಿಎಂ ಮೆಡಿಕಲ್ ಸೈನ್ಸಸ್ ಮತ್ತು ಆಸ್ಪತ್ರೆ, ಧಾರವಾಡ. ಎಸ್‌ಡಿಎಂಸಿಇಟಿ ನಿರ್ಮಿಸಲಾಗಿದೆ."
    }
};

/* FAQ PAGE */
const faqPage = {
    en: {
        faq_title: "Frequently Asked Questions",
        faq_sub: "Click on any question to read the detailed answer."
    },

    kn: {
        faq_title: "ಮತ್ತೆ ಮತ್ತೆ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು",
        faq_sub: "ವಿಸ್ತೃತ ಉತ್ತರವನ್ನು ನೋಡಲು ಯಾವುದೇ ಪ್ರಶ್ನೆಯನ್ನು ಒತ್ತಿರಿ."
    }
};


/**********************************************
   HELPER FUNCTIONS
**********************************************/
function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

function setList(id, items) {
    const ul = document.getElementById(id);
    if (!ul) return;
    ul.innerHTML = "";
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
}


/**********************************************
   RENDER HEADER (Fixed for CSS classes)
**********************************************/
function renderHeader(lang) {
    const headerEl = document.querySelector('header.site-header');
    if (!headerEl) return;

    const t = siteText[lang];
    const currentFile = window.location.pathname.split("/").pop() || "index.html";

    // Build Desktop Nav
    let navLinksHtml = "";
    pages.forEach((page, index) => {
        const isActive = (page === currentFile) ? 'active' : '';
        navLinksHtml += `<li><a href="${page}" class="nav-link ${isActive}">${t.menu[index]}</a></li>`;
    });

    // Build Mobile Nav
    let mobileLinksHtml = "";
    pages.forEach((page, index) => {
        mobileLinksHtml += `<li><a href="${page}" class="nav-link">${t.menu[index]}</a></li>`;
    });

    headerEl.innerHTML = `
        <div class="header-top">
            <div class="header-left">
                <img src="sdmlogo.png" class="site-logo" alt="SDM Logo" />
                <div class="site-title">
                    <h1>${t.headerTitle}</h1>
                    <h2>${t.headerSubtitle}</h2>
                </div>
            </div>

            <div class="header-right">
                <select id="language" class="lang-select">
                    <option value="en" ${lang === 'en' ? 'selected' : ''}>English</option>
                    <option value="kn" ${lang === 'kn' ? 'selected' : ''}>ಕನ್ನಡ</option>
                </select>
                <div id="hamburgerBtn" class="hamburger">☰</div>
            </div>
        </div>

        <div class="header-bottom">
            <nav class="main-nav">
                <ul>${navLinksHtml}</ul>
            </nav>
        </div>

        <div id="mobileNav" class="mobile-nav-container">
            <div id="closeMenu" class="close-menu">✕</div>
            <ul class="mobile-nav">${mobileLinksHtml}</ul>
        </div>
        <div id="overlay" class="overlay"></div>
    `;

    // Listeners
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const mobileNav = document.getElementById("mobileNav");
    const closeMenu = document.getElementById("closeMenu");
    const overlay = document.getElementById("overlay");
    const langSel = document.getElementById("language");

    function toggleMenu() {
        mobileNav.classList.toggle("active");
        overlay.classList.toggle("active");
    }

    if (hamburgerBtn) hamburgerBtn.addEventListener("click", toggleMenu);
    if (closeMenu) closeMenu.addEventListener("click", toggleMenu);
    if (overlay) overlay.addEventListener("click", toggleMenu);

    if (langSel) {
        langSel.addEventListener("change", function () {
            const newLang = this.value;
            localStorage.setItem("siteLang", newLang);
            renderHeader(newLang);
            renderFooter(newLang);
            updatePageContent(newLang);
        });
    }
}


/**********************************************
   RENDER FOOTER
**********************************************/
function renderFooter(lang) {
    const footerEl = document.querySelector('footer.site-footer');
    if (!footerEl) return;
    footerEl.innerHTML = `<p>${siteText[lang].footerText}</p>`;
}


/**********************************************
   UPDATE PAGE CONTENT MAPPING
**********************************************/
function updatePageContent(lang) {
    updateHomeTiles(lang);
    updateCataractPage(lang);
    updatePreSurgeryPage(lang);
    updatePostSurgeryPage(lang);
    updateContactPage(lang);
    updateFAQPage(lang);
}


/**********************************************
   SPECIFIC PAGE UPDATE FUNCTIONS
**********************************************/
function updateHomeTiles(lang) {
    const t = siteText[lang];

    // Hero & Headers
    if (document.getElementById("heroTitle")) setText("heroTitle", t.heroTitle);
    if (document.getElementById("heroSubtitle")) setText("heroSubtitle", t.heroSubtitle);
    if (document.getElementById("heroBtn")) setText("heroBtn", t.heroBtn);
    if (document.getElementById("sectionFeatures")) setText("sectionFeatures", t.sectionFeatures);
    if (document.getElementById("featuresHead")) setText("featuresHead", t.featuresHead);

    // Feature Cards
    if (document.getElementById("tile1")) setText("tile1", t.tiles.t1);
    if (document.getElementById("tile2")) setText("tile2", t.tiles.t2);
    if (document.getElementById("tile3")) setText("tile3", t.tiles.t3);
    if (document.getElementById("tile4")) setText("tile4", t.tiles.t4);
    if (document.getElementById("tile5")) setText("tile5", t.tiles.t5);

    if (document.getElementById("tileDesc1")) setText("tileDesc1", t.tileDescs.d1);
    if (document.getElementById("tileDesc2")) setText("tileDesc2", t.tileDescs.d2);
    if (document.getElementById("tileDesc3")) setText("tileDesc3", t.tileDescs.d3);
    if (document.getElementById("tileDesc4")) setText("tileDesc4", t.tileDescs.d4);
    if (document.getElementById("tileDesc5")) setText("tileDesc5", t.tileDescs.d5);

    // Why Choose SDM
    if (document.getElementById("whyTitle")) setText("whyTitle", t.whyTitle);
    if (document.getElementById("whyList")) setList("whyList", t.whyList);
}

function updateCataractPage(lang) {
    if (!document.getElementById("cat_title")) return;
    const t = cataractPage[lang];

    setText("cat_title", t.cat_title);
    setText("cat_p1", t.cat_p1);
    setText("cat_p2", t.cat_p2);

    if (document.getElementById("cat_causes_title")) setText("cat_causes_title", t.cat_causes_title);
    if (document.getElementById("cat_causes_intro")) setText("cat_causes_intro", t.cat_causes_intro);
    if (document.getElementById("cat_causes_list")) setList("cat_causes_list", t.cat_causes_list);

    if (document.getElementById("cat_symptoms_title")) setText("cat_symptoms_title", t.cat_symptoms_title);
    if (document.getElementById("cat_symptoms_list")) setList("cat_symptoms_list", t.cat_symptoms_list);

    if (document.getElementById("cat_treatment_title")) setText("cat_treatment_title", t.cat_treatment_title);
    if (document.getElementById("cat_treatment_p1")) setText("cat_treatment_p1", t.cat_treatment_p1);
    if (document.getElementById("cat_treatment_step_title")) setText("cat_treatment_step_title", t.cat_treatment_step_title);
    if (document.getElementById("cat_treatment_list")) setList("cat_treatment_list", t.cat_treatment_list);

    // New IOL Section (Cards)
    if (document.getElementById("cat_iol_title")) setText("cat_iol_title", t.cat_iol_title);
    if (document.getElementById("cat_iol_intro")) setText("cat_iol_intro", t.cat_iol_intro);
    // Card Updates
    if (document.getElementById("iol_title_1")) setText("iol_title_1", t.iol_cards.t1);
    if (document.getElementById("iol_desc_1")) setText("iol_desc_1", t.iol_cards.d1);
    if (document.getElementById("iol_title_2")) setText("iol_title_2", t.iol_cards.t2);
    if (document.getElementById("iol_desc_2")) setText("iol_desc_2", t.iol_cards.d2);
    if (document.getElementById("iol_title_3")) setText("iol_title_3", t.iol_cards.t3);
    if (document.getElementById("iol_desc_3")) setText("iol_desc_3", t.iol_cards.d3);

    if (document.getElementById("cat_myth_title")) setText("cat_myth_title", t.cat_myth_title);
    if (document.getElementById("cat_myth_list")) setList("cat_myth_list", t.cat_myth_list);
}

function updatePreSurgeryPage(lang) {
    if (!document.getElementById("pre_title")) return;
    const t = preSurgeryPage[lang];

    setText("pre_title", t.pre_title);
    setText("pre_intro", t.pre_intro);

    setText("pre_week_title", t.pre_week_title);
    setList("pre_week_list", t.pre_week_list);

    setText("pre_daybefore_title", t.pre_daybefore_title);
    setList("pre_daybefore_list", t.pre_daybefore_list);

    setText("pre_dayof_title", t.pre_dayof_title);
    setList("pre_dayof_list", t.pre_dayof_list);

    setText("pre_bring_title", t.pre_bring_title);
    setList("pre_bring_list", t.pre_bring_list);
}

function updatePostSurgeryPage(lang) {
    if (!document.getElementById("post_title")) return;
    const t = postSurgeryPage[lang];

    setText("post_title", t.post_title);
    setText("post_intro", t.post_intro);

    setText("post_timeline_title", t.post_timeline_title);
    setList("post_timeline_list", t.post_timeline_list);

    // New Follow-up Section (Cards)
    if (document.getElementById("post_followup_title")) setText("post_followup_title", t.post_followup_title);
    if (document.getElementById("post_followup_intro")) setText("post_followup_intro", t.post_followup_intro);
    // Card Updates
    if (document.getElementById("fol_title_1")) setText("fol_title_1", t.fol_cards.t1);
    if (document.getElementById("fol_desc_1")) setText("fol_desc_1", t.fol_cards.d1);
    if (document.getElementById("fol_title_2")) setText("fol_title_2", t.fol_cards.t2);
    if (document.getElementById("fol_desc_2")) setText("fol_desc_2", t.fol_cards.d2);
    if (document.getElementById("fol_title_3")) setText("fol_title_3", t.fol_cards.t3);
    if (document.getElementById("fol_desc_3")) setText("fol_desc_3", t.fol_cards.d3);

    setText("post_guide_title", t.post_guide_title);
    setText("post_do_head", t.post_do_head);
    setList("post_do_list", t.post_do_list);
    setText("post_dont_head", t.post_dont_head);
    setList("post_dont_list", t.post_dont_list);

    setText("post_emergency_title", t.post_emergency_title);
    setText("post_emergency_intro", t.post_emergency_intro);
    setList("post_emergency_list", t.post_emergency_list);
}

function updateContactPage(lang) {
    if (!document.getElementById("contact_title")) return;
    const t = contactPage[lang];

    setText("contact_title", t.contact_title);
    setText("contact_desc", t.contact_desc);

    // Feature Cards (Standardized IDs from map)
    if (document.getElementById("phone_title")) setText("phone_title", t.phone_title);
    if (document.getElementById("email_title")) setText("email_title", t.email_title);
    if (document.getElementById("location_title")) setText("location_title", t.location_title);
    if (document.getElementById("location_value")) setText("location_value", t.location_value);

    if (document.getElementById("map_title")) setText("map_title", t.map_title);
}

function updateFAQPage(lang) {
    if (!document.getElementById("faq_title")) return;
    const t = faqPage[lang];
    setText("faq_title", t.faq_title);
    setText("faq_sub", t.faq_sub);

    // RENDER FAQ LIST
    if (typeof faqs !== 'undefined') {
        const list = document.getElementById("faq-list");
        if (list) {
            list.innerHTML = "";
            faqs.forEach(item => {
                const q = item[lang] ? item[lang].q : item.en.q;
                const a = item[lang] ? item[lang].a : item.en.a;

                const card = document.createElement("div");
                card.className = "faq-card";

                // Video Embed Logic
                card.innerHTML = `
                    <div class="faq-question">
                        <span class="faq-icon">&#10067;</span>
                        <h3>${q}</h3>
                    </div>
                    <p class="faq-answer">${a}</p>
                    <button class="listen-btn audio-btn" data-text="${q}. ${a}">&#128266; Listen</button>
                `;
                list.appendChild(card);
            });
        }
    }

    // RENDER VIDEO SECTION
    const videos = [
        { id: "oK68omys5x0", title_en: "Cataract Surgery Animation (NEI)", title_kn: "ಕ್ಯಾಟರಾಕ್ಟ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ (NEI)" },
        { id: "d5D0B2PoC7U", title_en: "How to Use Eye Drops (Recovery)", title_kn: "ಕಣ್ಣಿನ ಹನಿಗಳನ್ನು ಬಳಸುವುದು ಹೇಗೆ" },
        { id: "d5D0B2PoC7U", title_en: "Dos and Don'ts After Surgery", title_kn: "ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಯ ನಂತರ ಮಾಡಬೇಕಾದ/ಬಾರದ ಕೆಲಸಗಳು" },
        { id: "oK68omys5x0", title_en: "YAG Laser & Secondary Cataract", title_kn: "YAG ಲೇಸರ್ ಬಗ್ಗೆ ವಿವರಣೆ" },
        { id: "oK68omys5x0", title_en: "Diet & Healing Foods", title_kn: "ಚೇತರಿಕೆಗೆ ಸಹಕಾರಿ ಆಹಾರ" },
        { id: "d5D0B2PoC7U", title_en: "Warning Signs of Infection", title_kn: "ಸೋಂಕಿನ ಲಕ್ಷಣಗಳು" },
        { id: "d5D0B2PoC7U", title_en: "Sleeping Safely", title_kn: "ಸುರಕ್ಷಿತವಾಗಿ ಮಲಗುವುದು" },
        { id: "oK68omys5x0", title_en: "Why Vision Gets Blurry?", title_kn: "ದೃಷ್ಟಿ ಮಸುಕಾಗಲು ಕಾರಣವೇನು?" }
    ];

    if (document.getElementById("video_title")) {
        setText("video_title", lang === 'kn' ? "ರೋಗಿಗಳ ಶಿಕ್ಷಣ ವೀಡಿಯೊಗಳು" : "Patient Education Videos");
        const videoGrid = document.getElementById("video-grid");
        if (videoGrid) {
            videoGrid.innerHTML = "";
            videos.forEach(v => {
                const title = lang === 'kn' ? v.title_kn : v.title_en;
                const vCard = document.createElement("div");
                vCard.className = "feature-card";
                vCard.style.padding = "0";
                vCard.style.overflow = "hidden";
                vCard.innerHTML = `
                    <div style="position: relative; padding-bottom: 56.25%; height: 0; width: 100%;">
                        <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" src="https://www.youtube.com/embed/${v.id}" title="${title}" allowfullscreen></iframe>
                    </div>
                    <div style="padding: 15px;">
                        <h3 style="font-size: 1rem; margin: 0; color: var(--primary);">${title}</h3>
                    </div>
                `;
                videoGrid.appendChild(vCard);
            });
        }
    }
}


/**********************************************
   AUDIO FUNCTION
**********************************************/
function playAudio(idOrText, isDirectText = false) {
    try { speechSynthesis.cancel(); } catch (e) { }
    const lang = savedLang;

    let text = "";
    if (isDirectText) {
        text = idOrText;
    } else {
        if (idOrText === "FULL_PAGE") {
            const m = document.querySelector("main");
            if (!m) return;
            text = m.innerText;
        } else {
            const el = document.getElementById(idOrText);
            if (!el) {
                console.warn("Audio text not found: " + idOrText);
                return;
            }
            text = el.innerText;
        }
    }

    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = (lang === "kn") ? "kn-IN" : "en-US";
    msg.rate = 1;
    msg.pitch = 1;
    speechSynthesis.speak(msg);
}


/**********************************************
   INIT
**********************************************/
document.addEventListener("DOMContentLoaded", () => {
    savedLang = localStorage.getItem("siteLang") || "en";
    renderHeader(savedLang);
    renderFooter(savedLang);
    updatePageContent(savedLang);

    // Audio Event Delegation
    document.body.addEventListener('click', (e) => {
        if (e.target.matches('.listen-btn')) {
            const text = e.target.getAttribute('data-text');
            playAudio(text, true);
        }
    });
});
