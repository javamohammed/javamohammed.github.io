/*
  ملف المحتوى — عدّل هنا فقط لإضافة أي شيء جديد للموقع.
  كل نص له ثلاث لغات: ar (العربية) و en (الإنجليزية) و fr (الفرنسية).
  لإضافة تطبيق: انسخ عنصراً من APPS وغيّر قيمه.
  لإضافة قناة: انسخ عنصراً من CHANNELS. لإضافة مشروع قادم: انسخ عنصراً من NEXT.
*/

const SITE = {
  name: { ar: "محمد أولاد بوشتة", en: "Mohammed Oulad Bouchta", fr: "Mohammed Oulad Bouchta" },
  intro: {
    ar: "أصنع ألعاباً وتطبيقات عربية للهاتف، وأحكي قصص التاريخ الإسلامي بفن خيال الظل.",
    en: "I make Arabic games and apps for phones, and tell stories from Islamic history as shadow-puppet theatre.",
    fr: "Je crée des jeux et des applications mobiles en arabe, et je raconte l'histoire islamique en théâtre d'ombres.",
  },
  since: {
    ar: "أنشر تطبيقاتي على Google Play منذ 2020.",
    en: "Publishing on Google Play since 2020.",
    fr: "Je publie sur Google Play depuis 2020.",
  },
  email: "java.mohammed@gmail.com",
};

const APPS = [
  {
    name: { ar: "وصلة كلمات", en: "Wasla Kalimat", fr: "Wasla Kalimat" },
    desc: {
      ar: "لعبة ألغاز كلمات عربية: صِل الحروف وكوّن الكلمات.",
      en: "An Arabic word puzzle: connect the letters to form words.",
      fr: "Un jeu de mots en arabe : reliez les lettres pour former des mots.",
    },
    icon: "images/wasla-icon.png",
    play: "https://play.google.com/store/apps/details?id=com.aouladbouchta.waslakalimat",
    privacy: "privacy.html",
    terms: "terms.html",
  },
  {
    name: { ar: "رحلة عبر التاريخ الإسلامي", en: "A Journey Through Islamic History", fr: "Voyage dans l'histoire islamique" },
    desc: {
      ar: "1500 سؤال في 15 عصراً، من السيرة النبوية إلى الدولة العثمانية، مع شرح ومصدر لكل إجابة.",
      en: "1,500 questions across 15 eras, from the Prophet's life to the Ottomans, each answer explained with its source.",
      fr: "1 500 questions sur 15 époques, de la vie du Prophète aux Ottomans, chaque réponse expliquée avec sa source.",
    },
    icon: "images/tarikh-icon.png",
    play: "https://play.google.com/store/apps/details?id=com.aouladbouchta.tarikh",
    privacy: "privacy-tarikh.html",
    terms: "terms-tarikh.html",
  },
  {
    name: { ar: "AITube", en: "AITube", fr: "AITube" },
    desc: {
      ar: "فيديوهات يوتيوب آمنة للأطفال يختارها الأهل، مع ملف لكل طفل ووقت يومي ونجوم تحفيزية.",
      en: "Safe YouTube videos for kids, chosen by parents, with a profile per child, a daily time limit and reward stars.",
      fr: "Des vidéos YouTube sûres pour les enfants, choisies par les parents, avec un profil par enfant, un temps quotidien et des étoiles.",
    },
    icon: "images/aitube-icon.png",
    play: "https://play.google.com/store/apps/details?id=com.aitubev2",
    privacy: "privacy-aitube.html",
    terms: "",
  },
  {
    name: { ar: "مصحف ورش عن نافع", en: "Quran: Warsh from Nafi'", fr: "Coran : Warsh d'après Nafi'" },
    desc: {
      ar: "المصحف برواية ورش عن نافع بالرسم العثماني، يعمل دون إنترنت، مع وضع ليلي وفهرس للسور والأحزاب والأجزاء، ويحفظ آخر صفحة قرأتها.",
      en: "The Quran in the Warsh reading from Nafi', in Uthmani script. Works offline, with a night mode, an index of surahs, hizbs and juz', and it reopens on your last page.",
      fr: "Le Coran selon la lecture de Warsh d'après Nafi', en écriture uthmanie. Fonctionne hors ligne, avec un mode nuit, un index des sourates, hizbs et juz', et reprend à la dernière page lue.",
    },
    icon: "images/quranwarsh-icon.png",
    play: "https://play.google.com/store/apps/details?id=com.aouladbouchta.quranwarsh",
    privacy: "https://sites.google.com/view/quran-warsh-nafie/accueil",
    docsLang: "fr", // لغة صفحة الخصوصية
    terms: "",
  },
];

const CHANNELS = [
  {
    name: { ar: "ظلال التاريخ", en: "Shadows of History", fr: "Les Ombres de l'Histoire" },
    desc: {
      ar: "قصص قصيرة من التاريخ الإسلامي، تُروى بالعربية على ستار خيال الظل، بمؤثرات صوتية ومن دون موسيقى.",
      en: "Short stories from Islamic history, narrated in Arabic on a shadow-puppet screen, with sound effects and no music.",
      fr: "De courts récits de l'histoire islamique, racontés en arabe sur un écran de théâtre d'ombres, avec des bruitages et sans musique.",
    },
    url: "https://www.youtube.com/@shadows.of.history-24",
  },
];

const NEXT = [
  {
    name: { ar: "عائشة ومريم وعلي", en: "Aisha, Maryam & Ali", fr: "Aïcha, Maryam et Ali" },
    desc: {
      ar: "قناة كرتونية تعليمية للأطفال.",
      en: "An educational cartoon channel for kids.",
      fr: "Une chaîne de dessins animés éducatifs pour enfants.",
    },
  },
];

// حساباتك على مواقع التواصل — أضف أو احذف كما تشاء
const SOCIAL = [
  { name: "YouTube", url: "https://www.youtube.com/@shadows.of.history-24" },
  { name: "Instagram", url: "https://www.instagram.com/aouladbouchta.med/" },
  { name: "TikTok", url: "https://www.tiktok.com/@madarata.elzaman" },
];
