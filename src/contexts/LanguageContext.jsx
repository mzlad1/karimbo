import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

const translations = {
  en: {
    // Hero Section
    heroTitle: "Door to Door, Powering Your Trade",

    // Second Section
    mainDescription:
      "We provide dedicated logistic service for powering auto parts trade to Israeli and Palestinian markets.",
    experienceDescription:
      "Our long experience, cutting edge knowledge, and deep understanding of requirements are our key to secure your trade logistics from door to door without concern.",
    autoParts: "Auto Parts",
    truckParts: "Truck Parts",
    heavyParts: "Heavy Engineering Machinery Parts",
    motorcycleParts: "Motorcycles Parts",

    // Third Section
    logisticsTitle: "Reliable, End-to-End",
    logisticsSubtitle: "Logistics Solutions",
    airFreight: "Air Freight",
    solutions: "Solutions",
    oceanFreight: "Ocean Freight",
    services: "Services",
    roadTransport: "Road Transport",
    delivery: "& Delivery",
    customs: "Customs",
    clearance: "Clearance",
    warehouse: "Warehouse",
    management: "Management",
    globalReach: "Global Reach,",
    localPrecision: "Local Precision",
    contactUs: "CONTACT US",
    wechatQRCodes: "WeChat QR Codes",

    // Footer
    locations: "Ramallah & Haifa",
  },

  ch: {
    // Hero Section
    heroTitle: "门到门，助力您的贸易",

    // Second Section
    mainDescription:
      "我们为以色列和巴勒斯坦市场的汽车零部件贸易提供专业的物流服务。",
    experienceDescription:
      "我们丰富的经验、尖端的知识以及对需求的深刻理解，是我们确保您的贸易物流从门到门无忧无虑的关键。",
    autoParts: "汽车配件",
    truckParts: "卡车零件",
    heavyParts: "重型工程机械配件",
    motorcycleParts: "摩托车零件",

    // Third Section
    logisticsTitle: "可靠的端到端",
    logisticsSubtitle: "物流解决方案",
    airFreight: "空运",
    solutions: "解决方案",
    oceanFreight: "海运服务",
    services: " ",
    roadTransport: "公路运输",
    delivery: "与配送",
    customs: "报关",
    clearance: " ",
    warehouse: "仓库管理",
    management: " ",
    globalReach: "全球覆盖，",
    localPrecision: "本地精准",
    contactUs: "联系我们",
    wechatQRCodes: "微信二维码",

    // Footer
    locations: "拉马拉和海法",
  },

  ar: {
    // Hero Section
    heroTitle: "من الباب إلى الباب،\nتعزيز تجارتك",

    // Second Section
    mainDescription:
      "نقدم خدمات لوجستية متخصصة لتجارة قطع غيار السيارات والشاحنات و الدراجات و المعدات الثقيلة في الأسواق الإسرائیلیة والفلسطينية.",
    experienceDescription:
      "خبرتنا الطويلة ومعرفتنا المتطورة وفهمنا العميق للمتطلبات هي مفتاحنا لتأمين لوجستيات تجارتكم من الباب إلى الباب دون قلق.",
    autoParts: "قطع غيار السيارات",
    truckParts: "قطع غيار الشاحنات",
    heavyParts: "قطع غيار المعدات الثقيلة",
    motorcycleParts: "قطع غيار الدراجات",

    // Third Section
    logisticsTitle: "حلول لوجستية يمكنك الاعتماد عليها ",
    logisticsSubtitle: "من النهاية إلى النهاية",
    airFreight: "الشحن الجوي",
    solutions: " ",
    oceanFreight: "الشحن البحري",
    services: " ",
    roadTransport: "الشحن البري",
    delivery: " ",
    customs: "التخليص",
    clearance: "الجمركي",
    warehouse: "التجميع وإدارة",
    management: "المخزون",
    globalReach: "من جميع أنحاء العالم...",
    localPrecision: "وبكل دقة",
    contactUs: "اتصل بنا",
    wechatQRCodes: "رموز WeChat QR",

    // Footer
    locations: "رام الله وحيفا",
  },

  hb: {
    // Hero Section
    heroTitle: "מדלת לדלת,\nמחזק את המסחר שלך",

    // Second Section
    mainDescription:
      "אנחנו מספקים שירות לוגיסטי ייעודי להעצמת סחר חלקי רכב לשווקים הישראליים והפלסטיניים.",
    experienceDescription:
      "הניסיון הרב שלנו, הידע החדשני והבנה עמוקה של הדרישות הם המפתח שלנו להבטחת הלוגיסטיקה של המסחר שלך מדלת לדלת ללא דאגה.",
    autoParts: "חלקי רכב",
    truckParts: "חלקי משאיות",
    heavyParts: "חלקי מכונות הנדסיות כבדות",
    motorcycleParts: "חלקי אופנועים",

    // Third Section
    logisticsTitle: "אמין, מקצה לקצה",
    logisticsSubtitle: "פתרונות לוגיסטיים",
    airFreight: "שילוח אווירי",
    solutions: "פתרונות",
    oceanFreight: "שילוח ימי",
    services: "שירותים",
    roadTransport: "הובלה יבשתית",
    delivery: "ומשלוח",
    customs: "מכס",
    clearance: "שחרור",
    warehouse: "מחסן",
    management: "ניהול",
    globalReach: "הגעה גלובלית,",
    localPrecision: "דיוק מקומי",
    contactUs: "צור קשר",
    wechatQRCodes: "קודי QR של WeChat",

    // Footer
    locations: "כפר קרע - חיפה",
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const t = (key) => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
