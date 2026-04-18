import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const authModalRef = useRef(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const openAuthModal = () => setShowAuthModal(true);
  const closeAuthModal = () => setShowAuthModal(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) setIsMobileMenuOpen(false);
    };

    const handleOutsideClick = (e) => {
      // close mobile menu
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target)
      ) {
        setIsMobileMenuOpen(false);
      }

      // close auth modal
      if (
        authModalRef.current &&
        !authModalRef.current.contains(e.target)
      ) {
        setShowAuthModal(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = showAuthModal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [showAuthModal]);

  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <div className="logo">
            <Link to="/"><img src="/ironix.png" alt="logo" /></Link>
          </div>

          <div className="nav_links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/classes">Classes</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="nav-actions">
            <button className="signin-btn" onClick={openAuthModal}>
              Sign In
            </button>
          </div>

          <div className="hamburger" ref={hamburgerRef} onClick={toggleMobileMenu}>
            <i className="fas fa-bars"></i>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`mobileNavbar ${isMobileMenuOpen ? "show" : ""}`}
        >
          <div className="head">
            <div className="mob-nav-actions">
              <button
                className="signin-btn"
                onClick={() => { closeMobileMenu(); openAuthModal(); }}
              >
                Sign In
              </button>
            </div>
            <div className="nav-close" onClick={closeMobileMenu}>
              <i className="fas fa-close"></i>
            </div>
          </div>
          <hr />
          <div className="mob-nav_links">
            <Link to="/" onClick={closeMobileMenu}>Home</Link>
            <Link to="/about" onClick={closeMobileMenu}>About</Link>
            <Link to="/classes" onClick={closeMobileMenu}>Classes</Link>
            <Link to="/pricing" onClick={closeMobileMenu}>Pricing</Link>
            <Link to="/blog" onClick={closeMobileMenu}>Blog</Link>
            <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
          </div>
        </div>
      </div>

      {/* Auth Modal Overlay */}
      <div className={`login-popup ${showAuthModal ? "show" : ""}`}>
        <div className="login-div" ref={authModalRef}>

          <button className="login-close" onClick={closeAuthModal}>
            <i className="fas fa-times"></i>
          </button>

          <h2 className="login-title">WELCOME TO Ironix</h2>
          <p className="login-sub">Choose an option to continue</p>

          <div className="login-buttons">
            <Link to="/signin" onClick={closeAuthModal} className="login-btn primary">
              <i className="fas fa-sign-in-alt"></i>
             Login in
            </Link>
            <Link to="/signup" onClick={closeAuthModal} className="login-btn secondary">
              <i className="fas fa-user-plus"></i>
              Create Account
            </Link>
          </div>

          <p className="login-note">
            By continuing, you agree to our{" "}
            <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
          </p>

        </div>
      </div>
    </>
  );
}

export default Navbar;