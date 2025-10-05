import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logos">
        <img src="/images/logo1.png" alt="Almatrans Logo" className="logo-1" />
        <img src="/images/logo2.png" alt="Mesk Trade Logo" className="logo-2" />
      </div>

      <div className="navbar-divider"></div>

      <div className="language-icons">
        <div className="lang-icon lang-en">
          <img src="/images/icon-EN.png" alt="English" />
        </div>
        <div className="lang-icon lang-ar">
          <img src="/images/icon-AR.png" alt="Arabic" />
        </div>
        <div className="lang-icon lang-hb">
          <img src="/images/icon-HB.png" alt="Hebrew" />
        </div>
        <div className="lang-icon lang-ch">
          <img src="/images/icon-CH.png" alt="Chinese" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
