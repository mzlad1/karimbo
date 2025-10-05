import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img
            src="/images/heroImage.png"
            alt="Door to Door Shipping"
            className="hero-image"
          />
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <img
              src="/images/heroTitle.png"
              alt="Door to Door, Powering Your Trade"
              className="hero-title-image"
            />
          </div>
        </div>

        <div className="hero-patterns">
          <div className="pattern-left">
            <img
              src="/images/right-stars.png"
              alt="Stars Pattern"
              className="stars-pattern"
            />
          </div>
          <div className="pattern-right">
            <img
              src="/images/horz-dots.png"
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
            src="/images/halfCircle.png"
            alt="Half Circle"
            className="half-circle-image"
          />
        </div>

        <div className="dots-pattern-left">
          <img
            src="/images/vert-dots.png"
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
            <p className="text-box-content">
              We provide dedicated logistic service for powering auto parts
              trade to Israeli and Palestinian markets.
              <br />
              <br />
              Our long experience, cutting edge knowledge, and deep
              understanding of requirements are our key to secure your trade
              logistics from door to door without concern.
            </p>
          </div>

          <div className="bottom-images">
            <div className="like-image-container">
              <img
                src="/images/like.png"
                alt="100% Success Rate"
                className="like-image"
              />
            </div>

            <div className="services-list">
              <div className="vertical-border"></div>
              <ul className="parts-list">
                <li className="parts-item auto-parts">Auto Parts</li>
                <li className="parts-item truck-parts">Truck Parts</li>
                <li className="parts-item heavy-parts">
                  Heavy Engineering Machinery Parts
                </li>
                <li className="parts-item motorcycle-parts">
                  Motorcycles Parts
                </li>
              </ul>
            </div>

            <div className="scrap-image-container">
              <img
                src="/images/scrap2.png"
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
                src="/images/left-stars.png"
                alt="Stars Pattern"
                className="left-stars-image"
              />
            </div>
            <div className="header-content">
              <h2 className="logistics-title">Reliable, End-to-End</h2>
              <h2 className="logistics-subtitle">Logistics Solutions</h2>
              <div className="title-underline"></div>
            </div>
          </div>
          <div className="dots-pattern-right">
            <img
              src="/images/vert-dots.png"
              alt="Dots Pattern"
              className="vert-dots-right"
            />
          </div>

          <div className="services-cards">
            <div className="service-card card-primary">
              <img
                src="/images/card1.png"
                alt="Air Freight"
                className="card-icon"
              />
              <h3 className="card-title white-text">Air Freight</h3>
              <h4 className="card-subtitle white-text">Solutions</h4>
            </div>
            <div className="service-card card-secondary">
              <img
                src="/images/card2.png"
                alt="Ocean Freight"
                className="card-icon"
              />
              <h3 className="card-title blue-text">Ocean Freight</h3>
              <h4 className="card-subtitle blue-text">Services</h4>
            </div>
            <div className="service-card card-secondary">
              <img
                src="/images/card3.png"
                alt="Road Transport"
                className="card-icon"
              />
              <h3 className="card-title blue-text">Road Transport</h3>
              <h4 className="card-subtitle blue-text">& Delivery</h4>
            </div>
            <div className="service-card card-dark">
              <img
                src="/images/card4.png"
                alt="Customs Clearance"
                className="card-icon"
              />
              <h3 className="card-title orange-text">Customs</h3>
              <h4 className="card-subtitle orange-text">Clearance</h4>
            </div>
            <div className="service-card card-secondary">
              <img
                src="/images/card5.png"
                alt="Warehouse Management"
                className="card-icon"
              />
              <h3 className="card-title blue-text">Warehouse</h3>
              <h4 className="card-subtitle blue-text">Management</h4>
            </div>
          </div>

          <div className="global-reach-section">
            <div className="plus-decorations">
              <div className="plus plus-1">+</div>
              <div className="plus plus-2">+</div>
            </div>
            <div className="global-reach-badge">
              <h3 className="global-title">Global Reach,</h3>
              <h4 className="global-subtitle">Local Precision</h4>
            </div>
          </div>

          <div className="map-container">
            <img src="/images/map.png" alt="Global Map" className="map-image" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="social-contact-section">
            <div className="social-icons-footer">
              <img
                src="/images/facebook.png"
                alt="Facebook"
                className="social-icon-img"
              />
              <img
                src="/images/whatsapp.png"
                alt="WhatsApp"
                className="social-icon-img"
              />
              <img
                src="/images/wechat.png"
                alt="WeChat"
                className="social-icon-img"
              />
            </div>
            <div className="contact-us-btn">
              <img
                src="/images/contact.png"
                alt="Contact Us"
                className="contact-btn-bg"
              />
              <span className="contact-btn-text">CONTACT US</span>
            </div>
          </div>

          <div className="contact-banner">
            <div className="contact-details">
              <span className="phone">+972 59-3565-630</span>
              <span className="phone">+972 54-9511-133</span>
              <span className="phone">+972 59-3565-635</span>
              <span className="email">Nidal@Alma-Trans.com</span>
            </div>
          </div>

          <div className="location-section">
            <img
              src="/images/location.png"
              alt="Location"
              className="location-icon"
            />
            <span className="location-text">Ramallah & Haifa</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
