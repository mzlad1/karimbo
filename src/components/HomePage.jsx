import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import "./HomePage.css";

function HomePage() {
  const { t, language } = useLanguage();
  const [showWeChatModal, setShowWeChatModal] = useState(false);

  const getHeroTitleImage = () => {
    switch (language) {
      case "ar":
        return "/images/heroTitleAR.png";
      case "ch":
        return "/images/heroTitleCH.png";
      case "hb":
        return "/images/heroTitleHB.png";
      default:
        return "/images/heroTitle.png";
    }
  };

  const getLikeImage = () => {
    switch (language) {
      case "ar":
        return "/images/likeAR.png";
      case "ch":
        return "/images/likeCH.png";
      case "hb":
        return "/images/likeHB.png";
      default:
        return "/images/like.png";
    }
  };

  const getHeroImage = () => {
    return language === "hb"
      ? "/images/heroImage.png"
      : "/images/heroImage.png";
  };

  const getScrapImage = () => {
    return language === "hb" ? "/images/scrap2.png" : "/images/scrap2.png";
  };

  const getTopContainerImage = () => {
    return language === "hb"
      ? "/images/topContainer.png"
      : "/images/topContainer.png";
  };

  const getServiceCardImage = (cardNumber) => {
    return language === "hb"
      ? `/images/HB/cardHB${cardNumber}.png`
      : `/images/card${cardNumber}.png`;
  };

  const getHalfCircleImage = () => {
    return language === "hb"
      ? "/images/HB/halfCircleHB.png"
      : "/images/halfCircle.png";
  };

  const getRightStarsImage = () => {
    return language === "hb"
      ? "/images/HB/right-starsHB.png"
      : "/images/right-stars.png";
  };

  const getLeftStarsImage = () => {
    return language === "hb"
      ? "/images/HB/left-starsHB.png"
      : "/images/left-stars.png";
  };

  const getMapImage = () => {
    return language === "hb" ? "/images/HB/mapHB.png" : "/images/map.png";
  };

  const getSocialImage = (platform) => {
    return language === "hb"
      ? `/images/HB/${platform}HB.png`
      : `/images/${platform}.png`;
  };

  const getHorzDotsImage = () => {
    return language === "hb"
      ? "/images/HB/horz-dotHB.png"
      : "/images/horz-dots.png";
  };

  const getVertDotsImage = () => {
    return language === "hb"
      ? "/images/HB/vert-dotsHB.png"
      : "/images/vert-dots.png";
  };

  const getWhatsAppUrl = () => {
    return language === "hb"
      ? "https://wa.me/972539058972"
      : "https://wa.me/970593565638";
  };

  const getFacebookUrl = () => {
    return language === "hb"
      ? "https://www.facebook.com/profile.php?id=61575891773266"
      : "https://www.facebook.com/almatrans.palestine";
  };

  const getContactEmail = () => {
    return language === "hb"
      ? "mailto:mesk.ml2025@gmail.com"
      : "mailto:Nidal@Alma-Trans.com";
  };

  return (
    <div
      className="homepage"
      dir={language === "ar" || language === "hb" ? "rtl" : "ltr"}
      data-language={language}
    >
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img
            src={getHeroImage()}
            alt="Door to Door Shipping"
            className="hero-image"
          />
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <img
              src={getHeroTitleImage()}
              alt={t("heroTitle")}
              className="hero-title-image"
            />
          </div>
        </div>

        <div className="hero-patterns">
          <div className="pattern-left">
            <img
              src={getRightStarsImage()}
              alt="Stars Pattern"
              className="stars-pattern"
            />
          </div>
          <div className="pattern-right">
            <img
              src={getHorzDotsImage()}
              alt="Dots Pattern"
              className="dots-pattern"
            />
          </div>
        </div>
      </section>

      {/* Second Section - Container with Text */}
      <section className="second-section">
        <div className="half-circle-container">
          <img
            src={getHalfCircleImage()}
            alt="Half Circle"
            className="half-circle-image"
          />
        </div>

        <div className="dots-pattern-left">
          <img
            src={getVertDotsImage()}
            alt="Dots Pattern"
            className="vert-dots-image"
          />
        </div>

        <div className="section-content-second">
          <div className="container-image-wrapper">
            <img
              src="/images/topContainer.png"
              alt="Shipping Container"
              className="container-image"
            />
          </div>

          <div className="text-box">
            <p
              className="text-box-content"
              dir={language === "ar" || language === "hb" ? "rtl" : "ltr"}
            >
              {t("mainDescription")}
              <br />
              <br />
              {t("experienceDescription")}
            </p>
          </div>

          <div className="bottom-images">
            <div className="like-image-container">
              <img
                src={getLikeImage()}
                alt="100% Success Rate"
                className="like-image"
              />
            </div>

            <div className="services-list">
              <div className="vertical-border"></div>
              <ul className="parts-list">
                <li className="parts-item auto-parts">{t("autoParts")}</li>
                <li className="parts-item truck-parts">{t("truckParts")}</li>
                <li className="parts-item heavy-parts">{t("heavyParts")}</li>
                <li className="parts-item motorcycle-parts">
                  {t("motorcycleParts")}
                </li>
              </ul>
            </div>

            <div className="scrap-image-container">
              <img
                src={getScrapImage()}
                alt="Auto Parts"
                className="scrap-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Third Section - Logistics Services */}
      <section className="third-section">
        <div className="section-content-third">
          <div className="logistics-header">
            <div className="stars-pattern-left">
              <img
                src={getLeftStarsImage()}
                alt="Stars Pattern"
                className="left-stars-image"
              />
            </div>
            <div className="header-content">
              <h2 className="logistics-title">{t("logisticsTitle")}</h2>
              <h2 className="logistics-subtitle">{t("logisticsSubtitle")}</h2>
              <div className="title-underline"></div>
            </div>
          </div>
          <div className="dots-pattern-right">
            <img
              src={getVertDotsImage()}
              alt="Dots Pattern"
              className="vert-dots-right"
            />
          </div>
          {/* if language is arabic no need for card subtitle */}
          <div className="services-cards">
            <div className="service-card card-primary">
              <img
                src={getServiceCardImage(1)}
                alt="Air Freight"
                className="card-icon"
              />
              <h3 className="card-title white-text">{t("airFreight")}</h3>
              <h4 className="card-subtitle white-text">{t("solutions")}</h4>
            </div>
            <div className="service-card card-secondary">
              <img
                src={getServiceCardImage(2)}
                alt="Ocean Freight"
                className="card-icon"
              />
              <h3 className="card-title blue-text">{t("oceanFreight")}</h3>
              <h4 className="card-subtitle blue-text">{t("services")}</h4>
            </div>
            <div className="service-card card-secondary">
              <img
                src={getServiceCardImage(3)}
                alt="Road Transport"
                className="card-icon"
              />
              <h3 className="card-title blue-text">{t("roadTransport")}</h3>
              <h4 className="card-subtitle blue-text">{t("delivery")}</h4>
            </div>
            <div className="service-card card-dark">
              <img
                src={getServiceCardImage(4)}
                alt="Customs Clearance"
                className="card-icon"
              />
              <h3 className="card-title orange-text">{t("customs")}</h3>
              <h4 className="card-subtitle orange-text">{t("clearance")}</h4>
            </div>
            <div className="service-card card-secondary">
              <img
                src={getServiceCardImage(5)}
                alt="Warehouse Management"
                className="card-icon"
              />
              <h3 className="card-title blue-text">{t("warehouse")}</h3>
              <h4 className="card-subtitle blue-text">{t("management")}</h4>
            </div>
          </div>

          <div className="global-reach-section">
            <div className="plus-decorations">
              <div className="plus plus-1">+</div>
              <div className="plus plus-2">+</div>
            </div>
            <div className="global-reach-badge">
              <h3 className="global-title">{t("globalReach")}</h3>
              <h4 className="global-subtitle">{t("localPrecision")}</h4>
            </div>
          </div>

          <div className="map-container">
            <img src={getMapImage()} alt="Global Map" className="map-image" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="social-contact-section">
            <div className="social-icons-footer">
              <a
                href={getFacebookUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={getSocialImage("facebook")}
                  alt="Facebook"
                  className="social-icon-img"
                />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={getSocialImage("whatsapp")}
                  alt="WhatsApp"
                  className="social-icon-img"
                />
              </a>
              <img
                src={getSocialImage("wechat")}
                alt="WeChat"
                className="social-icon-img"
                onClick={() => setShowWeChatModal(true)}
                style={{ cursor: "pointer" }}
              />
            </div>
            {/* Contact Us Button if Hebrew language is selected use contactHB */}
            <a
              href={getContactEmail()}
              className="contact-us-btn"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src={
                  language === "hb"
                    ? "/images/HB/contactusHB.png"
                    : "/images/contact.png"
                }
                alt="Contact Us"
                className="contact-btn-bg"
              />
              <span className="contact-btn-text">{t("contactUs")}</span>
            </a>
          </div>

          <div className="contact-banner">
            <div className="contact-details">
              {language === "ar" ? (
                <>
                  <span className="phone" dir="ltr">
                    +972 53-724-8778
                  </span>
                  <span className="email" dir="ltr">
                    Mosaab@Alma-Trans.com
                  </span>
                </>
              ) : language === "hb" ? (
                <>
                  <span className="phone" dir="ltr">
                    +972 53-724-8778
                  </span>
                </>
              ) : (
                <>
                  <span className="phone" dir="ltr">
                    +972 53-724-8778
                  </span>
                  <span className="email" dir="ltr">
                    Mosaab@Alma-Trans.com
                  </span>
                </>
              )}
            </div>
          </div>
          {/* if Hebrew language is selected use locationHB */}
          <div className="location-section">
            <img
              src={
                language === "hb"
                  ? "/images/HB/locationHB.png"
                  : "/images/location.png"
              }
              alt="Location"
              className="location-icon"
            />
            <span className="location-text">{t("locations")}</span>
          </div>
        </div>
      </footer>

      {/* WeChat QR Code Modal */}
      {showWeChatModal && (
        <div
          className="wechat-modal-overlay"
          onClick={() => setShowWeChatModal(false)}
        >
          <div
            className="wechat-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={() => setShowWeChatModal(false)}
            >
              ×
            </button>
            <h2 className="modal-title">
              {t("wechatQRCodes") || "WeChat QR Codes"}
            </h2>
            <div className="qr-codes-container">
              <div className="qr-code-item">
                <img
                  src="/images/almatransQR.png"
                  alt="AlmaTrans WeChat QR"
                  className="qr-code-image"
                />
                <p className="qr-code-label">AlmaTrans</p>
              </div>
              {language !== "hb" && (
                <div className="qr-code-item">
                  <img
                    src="/images/nidalQR.png"
                    alt="Nidal WeChat QR"
                    className="qr-code-image"
                  />
                  <p className="qr-code-label">Nidal</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
