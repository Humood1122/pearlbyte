let currentLang = "ar";

const translations = {
    ar: {
        "header-title": "بيرل بايت",
        "site-title": "Pearl Byte | بيرل بايت",
        "site-desc": "خدمات تقنية احترافية - تواصل معنا: +97336700408",
        "footer-text": "© 2025 بيرل بايت",
        "web-title": "تصميم موقع",
        "web-desc": "مواقع احترافية ومتجاوبة مع جميع الأجهزة.",
        "web-link": "عرض التفاصيل",
        "script-title": "تصميم سكربت",
        "script-desc": "برمجة سكربتات مخصصة حسب الطلب.",
        "script-link": "عرض التفاصيل",
        "ai-title": "الذكاء الاصطناعي",
        "ai-desc": "برامج متقدمة بالذكاء الاصطناعي.",
        "ai-link": "عرض التفاصيل",
        "data-title": "تحليل بيانات",
        "data-desc": "تحليل أرباح ومبيعات وفترات ذروة.",
        "data-link": "عرض التفاصيل"
    },
    en: {
        "header-title": "Pearl Byte",
        "site-title": "Pearl Byte | Tech Services",
        "site-desc": "Professional tech services - Contact: +97336700408",
        "footer-text": "© 2025 Pearl Byte",
        "web-title": "Website Design",
        "web-desc": "Responsive websites for all devices.",
        "web-link": "View Details",
        "script-title": "Script Development",
        "script-desc": "Custom scripts tailored to your needs.",
        "script-link": "View Details",
        "ai-title": "Artificial Intelligence",
        "ai-desc": "Advanced AI-powered applications.",
        "ai-link": "View Details",
        "data-title": "Data Analysis",
        "data-desc": "Sales, profits, and peak time analysis.",
        "data-link": "View Details"
    }
};

function toggleLang() {
    currentLang = currentLang === "ar" ? "en" : "ar";

    // تحديث اتجاه الصفحة ولغتها
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

    // تغيير محتوى كل عنصر حسب اللغة
    const langData = translations[currentLang];
    for (const key in langData) {
        const el = document.getElementById(key);
        if (el) el.textContent = langData[key];
    }

    // زر اللغة نفسه
    document.querySelector(".lang-toggle").textContent = currentLang === "ar" ? "EN" : "AR";
}
