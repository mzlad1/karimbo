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
    oceanFreight: "海运",
    services: "服务",
    roadTransport: "公路运输",
    delivery: "与配送",
    customs: "报关",
    clearance: "清关",
    warehouse: "仓库",
    management: "管理",
    globalReach: "全球覆盖，",
    localPrecision: "本地精准",
    contactUs: "联系我们",

    // Footer
    locations: "拉马拉和海法",
  },

  ar: {
    // Hero Section
    heroTitle: "من الباب إلى الباب،\nتعزيز تجارتك",

    // Second Section
    mainDescription:
      "نحن نقدم خدمة لوجستية مخصصة لتعزيز تجارة قطع غيار السيارات في الأسواق الإسرائيلية والفلسطينية.",
    experienceDescription:
      "خبرتنا الطويلة ومعرفتنا المتطورة وفهمنا العميق للمتطلبات هي مفتاحنا لتأمين لوجستيات تجارتك من الباب إلى الباب دون قلق.",
    autoParts: "قطع غيار السيارات",
    truckParts: "قطع الشاحنات",
    heavyParts: "قطع الآلات الهندسية الثقيلة",
    motorcycleParts: "قطع الدراجات النارية",

    // Third Section
    logisticsTitle: "موثوقة، من النهاية إلى النهاية",
    logisticsSubtitle: "حلول لوجستية",
    airFreight: "الشحن الجوي",
    solutions: "الحلول",
    oceanFreight: "الشحن البحري",
    services: "الخدمات",
    roadTransport: "النقل البري",
    delivery: "والتسليم",
    customs: "الجمارك",
    clearance: "التخليص",
    warehouse: "المستودع",
    management: "الإدارة",
    globalReach: "وصول عالمي،",
    localPrecision: "دقة محلية",
    contactUs: "اتصل بنا",

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
