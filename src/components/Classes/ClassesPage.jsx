import { Link } from "react-router-dom";
import "./ClassesPage.css";

function ClassesPage() {
  return (
    <div>
      <div className="classes-page">
        {/* Hero Section with Image (styled like homepage) */}
        <div className="classes-hero">
          <img
            src="/classes.jpg"
            alt="our classes"
            className="classes-hero-image"
          />
          <div className="classes-hero-overlay"></div>
          <div className="classes-content-box">
            <div className="classes-hero-content">
              <h1 className="classes-first">Our Classes.</h1>
              <h1 className="classes-last">For each age.</h1>
            </div>
          </div>
        </div>
      </div>



      {/* Discover Classes Section */}
      <div className="classes">
        <div className="container">
          <h2 className="classes-title">Discover our classes</h2>

          <div className="classes-grid">
            <div className="class-card">
              <img src="/hitt.jpg" alt="HIIT" />
              <div className="card-overlay">
                <h3>HIIT</h3>
              <Link to="/">  <button className="learn-more">Learn More</button></Link>
              </div>
            </div>

            <div className="class-card">
              <img src="/crossfit.jpg" alt="CrossFit" />
              <div className="card-overlay">
                <h3>CrossFit</h3>
              <Link to="/">  <button className="learn-more">Learn More</button></Link>
              </div>
            </div>

            <div className="class-card">
              <img src="/boxing.jpg" alt="Kickboxing" />
              <div className="card-overlay">
                <h3>Kickboxing</h3>
              <Link to="/">  <button className="learn-more">Learn More</button></Link>
              </div>
            </div>

            <div className="class-card">
              <img src="/yoga.jpg" alt="yoga" />
              <div className="card-overlay">
                <h3>Yoga</h3>
              <Link to="/">  <button className="learn-more">Learn More</button></Link>
              </div>
            </div>

          </div>

          <div className="view-btn-wrapper">
            <button className="view-btn">View All</button>
          </div>
        </div>
        
      </div>








    </div>
  );
}

export default ClassesPage;
