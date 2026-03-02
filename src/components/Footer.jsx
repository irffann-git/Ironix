
import { Link } from "react-router-dom";
import "./Footer.css"



function Footer(){
return(
<div>
   {/* ===== Footer Alternative ===== */}
<footer className="footer-alt">
  <div className="container">
    {/* Main Footer Content */}
    <div className="footer-alt-main">
      {/* Column 1 - Brand */}
      <div className="footer-alt-col">
        <img src="/ironix.png" alt="Ironix" className="footer-alt-logo" />
        <p className="footer-alt-text">
          Ironix is more than a gym – it's a community. Join us to transform your fitness journey.
        </p>
      </div>

      {/* Column 2 - Quick Links */}
      <div className="footer-alt-col">
        <h4 className="footer-alt-heading">Explore</h4>
        <ul className="footer-alt-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">About Us</Link></li>
          <li><Link to="/">Classes</Link></li>
          <li><Link to="/">Blog</Link></li>
        </ul>
      </div>

      {/* Column 3 - Support */}
      <div className="footer-alt-col">
        <h4 className="footer-alt-heading">Support</h4>
        <ul className="footer-alt-links">
          <li><Link to="/">Faqs</Link></li>
          <li><Link to="/">Contact</Link></li>
          <li><Link to="/">Privacy Policy</Link></li>
          <li><Link to="/">Terms of Use</Link></li>
        </ul>
      </div>

      {/* Column 4 - Newsletter */}
      <div className="footer-alt-col">
        <h4 className="footer-alt-heading">Stay Updated</h4>
        <p className="footer-alt-newsletter-text">
          Subscribe to get special offers and updates.
        </p>
        <form className="footer-alt-newsletter">
          <input type="email" placeholder="Your email address" required />
          <button type="submit">Subscribe</button>
        </form>
        <div className="footer-alt-social">
          <Link to="/" aria-label="Facebook"><i className="fab fa-facebook-f"></i></Link>
          <Link to="/" aria-label="Instagram"><i className="fab fa-instagram"></i></Link>
          <Link to="/" aria-label="Twitter"><i className="fab fa-twitter"></i></Link>  
          
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="footer-alt-bottom">
      <p>&copy; {new Date().getFullYear()} Ironix. All rights reserved. Built with in the gym.</p>
    </div>
  </div>
</footer>
</div>
);
}
export default Footer;