import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) setIsMobileMenuOpen(false);
    };

    // close on outside click
    const handleOutsideClick = (e) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
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
          <button className="signin-btn">Sign In</button>
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
            <button className="signin-btn" onClick={closeMobileMenu}>Sign In</button>
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
  );
}

export default Navbar;