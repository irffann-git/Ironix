import { Link } from "react-router-dom";
import "./HomePage.css";
import { useState } from "react";

function HomePage() {
const [billingPeriod, setBillingPeriod] = useState('yearly'); // 'monthly' or 'yearly'

  // Pricing data (could be moved to a constant)
  const pricingData = {
    starter: {
      yearly: { price: 4999, text: 'Billed annually' },
      monthly: { price: 499, text: 'Billed monthly' } // example monthly price, adjust as needed
    },
    premium: {
      yearly: { price: 7999, text: 'Billed annually' },
      monthly: { price: 799, text: 'Billed monthly' }
    },
    elite: {
      yearly: { price: 10999, text: 'Billed annually' },
      monthly: { price: 999, text: 'Billed monthly' }
    }
  };


  return (
    <div className="homepage">
      <div className="hero-section">
        {/* Video Background */}
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/5319101-uhd_3840_2160_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="hero-overlay"></div>
        <div className="content-box">
          {/* Content */}
          <div className="hero-content">
            <h1 className="first">TRY HARD.</h1>
            <h1 className="last"> STRONG TOMORROW.</h1>
          </div>
        </div>
      </div>

      <div className="whyChooseUs">
        <div className="container">
          <div className="why-title">
            <h2>Why Us?</h2>
          </div>
          <div className="why-cards">
            <div className="card">
              <div className="card-icon"><i className="fa fa-check"></i></div>
              <h3>Certified trainers</h3>
              <p>Discover the difference of working with our certified trainers as you embark on a transformative fitness experience at Ironix.</p>
            </div>
            <div className="card">
              <div className="card-icon"><i className='fas fa-fire-alt'></i></div>
              <h3>Motivation</h3>
              <p>Unlock your full potential and embrace the power of fitness motivation with us. At Ironix, we understand that the journey to a healthier.</p>
            </div>
            <div className="card">
              <div className="card-icon"><i className='far fa-smile'></i></div>
              <h3>Friendly staff</h3>
              <p>Our community is not just about workouts, but about building connections and friendships that make your fitness.</p>
            </div>
            <div className="card">
              <div className="card-icon"><i className='fas fa-heart'></i></div>
              <h3>Support</h3>
              <p>We understand that the path to a healthier lifestyle can be challenging, and that's why our commitment to your success goes.</p>
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




    {/* ===== Pricing Section ===== */}
      <div className="pricing">
        
        <div className="container">
          <h2 className="pricing-title">Choose Your Plan</h2>

          {/* Billing Toggle */}
          <div className="billing-toggle">
            <button
              className={`toggle-btn ${billingPeriod === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingPeriod('monthly')}
            >
              Monthly
            </button>
            <button
              className={`toggle-btn ${billingPeriod === 'yearly' ? 'active' : ''}`}
              onClick={() => setBillingPeriod('yearly')}
            >
              Yearly
            </button>
          </div>

          <div className="pricing-grid">
            {/* Starter Package */}
            <div className="pricing-card">
              <h3 className="package-name">Starter</h3>
              <div className="price">
                <span className="amount">{pricingData.starter[billingPeriod].price}</span>
              </div>
              <p className="billing">{pricingData.starter[billingPeriod].text}</p>
              <ul className="features">
                <li><i className="fas fa-check"></i> Access to gym during regular hours (6AM – 10PM)</li>
                <li><i className="fas fa-check"></i> Access to cardio & strength equipment</li>
                <li><i className="fas fa-check"></i> 2 group fitness classes per week</li>
                <li><i className="fas fa-check"></i> Beginner-friendly workout plans</li>
                <li><i className="fas fa-check"></i> Locker room access</li>
                <li><i className="fas fa-check"></i> Free fitness assessment (1 time)</li>

              </ul>
              <button className="pricing-btn">Get started</button>
            </div>

            {/* Premium Package */}
            <div className="pricing-card">
              <h3 className="package-name">Premium</h3>
              <div className="price">
                <span className="amount">{pricingData.premium[billingPeriod].price}</span>
              </div>
              <p className="billing">{pricingData.premium[billingPeriod].text}</p>
              <ul className="features">
                <li><i className="fas fa-check"></i> Everything in Starter</li>
                <li><i className="fas fa-check"></i> 24/7 gym access</li>
                <li><i className="fas fa-check"></i> Weekly personal training session (1 per week)</li>
                <li><i className="fas fa-check"></i> Customized workout program</li>
                <li><i className="fas fa-check"></i> Monthly body composition analysis</li>
                <li><i className="fas fa-check"></i> Access to advanced strength equipment</li>
                <li><i className="fas fa-check"></i> Priority support from trainers</li>
              </ul>
              <button className="pricing-btn">Get started</button>
            </div>

            {/* Elite Package */}
            <div className="pricing-card popular">
              <h3 className="package-name">Elite</h3>
              <div className="price">
                <span className="amount">{pricingData.elite[billingPeriod].price}</span>
              </div>
              <p className="billing">{pricingData.elite[billingPeriod].text}</p>
              <ul className="features">
                <li><i className="fas fa-check"></i> Everything in Premium</li>
                <li><i className="fas fa-check"></i> Unlimited personal training sessions</li>
                <li><i className="fas fa-check"></i> Unlimited group fitness classes</li>
                <li><i className="fas fa-check"></i> Personalized nutrition & diet plan</li>
                <li><i className="fas fa-check"></i> Dedicated fitness coach</li>
                <li><i className="fas fa-check"></i> Personalized keycard access</li>
                <li><i className="fas fa-check"></i> Priority booking for classes</li>
                <li><i className="fas fa-check"></i> Access to premium recovery zone (if available)</li>
                <li><i className="fas fa-check"></i> Early access to events & workshops</li>

              </ul>
              <button className="pricing-btn">Get started</button>
            </div>
          </div>
        </div>
      </div>


      {/* ===== Trainer Section ===== */}
<div className="trainers">
  <div className="container">
    <h2 className="trainers-title">Team of professional trainers</h2>
    <div className="trainers-grid">
      {/* Trainer 1 - Olivia Parker */}
      <div className="trainer-card">
        <div className="trainer-img">
          <img src="/yoga-trainer.jpg" alt="Olivia Parker" />
          <div className="trainer-overlay"></div>
        </div>
        <h3 className="trainer-name">Olivia Parker</h3>
        <p className="trainer-role">Yoga Trainer</p>
      </div>

      {/* Trainer 2 - Jackson Mitchell */}
      <div className="trainer-card">
        <div className="trainer-img">
          <img src="/gym-trainer-1.jpg" alt="Jackson Mitchell" />
          <div className="trainer-overlay"></div>
        </div>
        <h3 className="trainer-name">Jackson Mitchell</h3>
        <p className="trainer-role">Gym Trainer</p>
      </div>

      {/* Trainer 3 - Ethan Reynolds */}
      <div className="trainer-card">
        <div className="trainer-img">
          <img src="/gym-trainer-2.jpg" alt="Ethan Reynolds" />
          <div className="trainer-overlay"></div>
        </div>
        <h3 className="trainer-name">Ethan Reynolds</h3>
        <p className="trainer-role">Gym Trainer</p>
      </div>
    </div>
  </div>
</div>


    </div>
  );
}

export default HomePage;