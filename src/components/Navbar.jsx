import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import "./Navbar.css";

function Navbar() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const getLogo1 = () => {
    return language === "hb" ? "/images/logo1.png" : "/images/logo1.png";
  };

  const getLogo2 = () => {
    return language === "hb" ? "/images/logo2.png" : "/images/logo2.png";
  };

  const getLanguageIcon = (iconLang) => {
    if (language === "hb") {
      return `/images/HB/icon${iconLang}-HB.png`;
    }
    return `/images/icon-${iconLang}.png`;
  };
  return (
    <nav className="navbar" data-language={language}>
      {/* if language is hebrew show just mesk trade logo */}
      <div className="navbar-logos">
        {language === "hb" ? (
          <img src={getLogo2()} alt="Mesk Trade Logo" className="logo-2" />
        ) : (
          <>
            <img src={getLogo1()} alt="Almatrans Logo" className="logo-1" />
            <img src={getLogo2()} alt="Mesk Trade Logo" className="logo-2" />
          </>
        )}
      </div>

      <div className="navbar-divider"></div>

      <div className="language-icons">
        <div
          className={`lang-icon lang-en ${language === "en" ? "active" : ""}`}
          onClick={() => handleLanguageChange("en")}
        >
          <img src={getLanguageIcon("EN")} alt="English" />
        </div>
        <div
          className={`lang-icon lang-ar ${language === "ar" ? "active" : ""}`}
          onClick={() => handleLanguageChange("ar")}
        >
          <img src={getLanguageIcon("AR")} alt="Arabic" />
        </div>
        <div
          className={`lang-icon lang-hb ${language === "hb" ? "active" : ""}`}
          onClick={() => handleLanguageChange("hb")}
        >
          <img src={getLanguageIcon("HB")} alt="Hebrew" />
        </div>
        <div
          className={`lang-icon lang-ch ${language === "ch" ? "active" : ""}`}
          onClick={() => handleLanguageChange("ch")}
        >
          <img src={getLanguageIcon("CH")} alt="Chinese" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
