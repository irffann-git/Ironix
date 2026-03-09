import { useState } from "react";
import "./ContactPage.css";

function ContactPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setMessage("Thanks for reaching out! We'll get back to you soon.");
    setEmail("");
    setName("");
  };

  return (
    <div>
       <div className="contact-page">
        {/* Hero Section with Image (styled like homepage) */}
        <div className="contact-hero">
          <img
            src="/contact.jpg"
            alt="our classes"
            className="contact-hero-image"
          />
          <div className="contact-hero-overlay"></div>
          <div className="contact-content-box">
            <div className="contact-hero-content">
              <h1 className="contact-first">Let’s Talk</h1>
              <h1 className="contact-last"> about Fitness</h1>
            </div>
          </div>
        </div>
      </div>
        
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-heading">
          Connect with Us <span className="block">Let's Build Together</span>
        </h1>
        <p className="contact-description">
          Reach out and connect with the Glossy CodeCraft team. Whether you have questions,
          feedback, or partnership inquiries, we're here to listen and collaborate. Let's build
          something incredible together.
        </p>

        <div className="contact-grid">
          {/* Form Column */}
          <div className="contact-form-col">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
            {message && <p className="form-message">{message}</p>}
          </div>

          {/* Contact Info Column */}
          <div className="contact-info-col">
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:hello@email.com">Ironix@gmail.com</a>
            </div>
            <div className="info-item">
              <i className="fas fa-phone-alt"></i>
              <a href="tel:+1-123-123-123">+91 9876543210</a>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>MG Road, Ernakulam, Kochi, Kerala 682016, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}

export default ContactPage;