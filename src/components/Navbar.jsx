import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <div className="navbar-container">
      <div className="navbar">
        {/* Logo */}
        <div className="logo">
          <img src="/ironix.png" alt="logo" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="nav_links">
          <Link to="/">Home</Link>             
          <Link to="/about">About</Link>       
          <Link to="/classes">Classes</Link>
          <Link to="/pricing">Pricing</Link>          
          <Link to="/blog">Blog</Link>    
          <Link to="/contact">Contact</Link>  
        </div>

        {/* Desktop Sign In */}
        <div className="nav-actions">
          <button className="signin-btn">Sign In</button>
        </div>

        {/* Hamburger Icon (visible on mobile) */}
        <div className="hamburger" onClick={toggleMobileMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobileNavbar ${isMobileMenuOpen ? "show" : ""}`}>
        <div className="head">
          <div className="mob-nav-actions">
            <button className="signin-btn" onClick={closeMobileMenu}>
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
  );
}

export default Navbar;