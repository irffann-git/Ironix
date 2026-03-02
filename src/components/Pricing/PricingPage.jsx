import { useState } from "react";
import "./PricingPage.css";
import { Link } from "react-router-dom";

function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState("yearly"); // 'monthly' or 'yearly'

  // Pricing data (could be moved to a constant)
  const pricingData = {
    starter: {
      yearly: { price: 4999, text: "Billed annually" },
      monthly: { price: 499, text: "Billed monthly" }, // example monthly price, adjust as needed
    },
    premium: {
      yearly: { price: 7999, text: "Billed annually" },
      monthly: { price: 799, text: "Billed monthly" },
    },
    elite: {
      yearly: { price: 10999, text: "Billed annually" },
      monthly: { price: 999, text: "Billed monthly" },
    },
  };

  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What’s the best workout routine for beginners at the gym?",
      answer:
        "For beginners, we recommend starting with a full-body workout 2-3 times per week. Focus on compound movements like squats, deadlifts, bench presses, and rows. Start with light weights to master form, then gradually increase intensity. Our trainers can create a personalized plan for you.",
    },
    {
      question: "How important is nutrition for achieving fitness goals?",
      answer:
        "Nutrition is 70-80% of the equation. You can't out-train a bad diet. Proper nutrition fuels your workouts, aids recovery, and helps you achieve body composition goals. We offer nutritional guidance as part of our premium packages.",
    },
    {
      question: "How often should I change my workout routine?",
      answer:
        "Generally, you should change your routine every 4-6 weeks to prevent plateaus and keep progress steady. However, if you're still seeing gains, you can stick with it longer. Listen to your body and consult with a trainer.",
    },
    {
      question: "What’s the significance of warming up before a workout?",
      answer:
        "Warming up increases blood flow to muscles, improves flexibility, and reduces injury risk. A proper warm-up should include 5-10 minutes of light cardio followed by dynamic stretches. Never skip it!",
    },
    {
      question: "How can I stay motivated to go to the gym consistently?",
      answer:
        "Set realistic goals, track progress, find a workout buddy, mix up your routine, and reward yourself. Remember why you started. At Ironix, our community will keep you motivated!",
    },
    {
      question:
        "Is cardio or strength training more important for weight loss?",
      answer:
        "Both are important, but strength training helps build muscle, which increases your resting metabolism. A combination of both, along with proper nutrition, yields the best results. Our trainers can design a balanced plan.",
    },
  ];

  return (
    <div>
      <div className="pricing-page">
        {/* Hero Section with Image (styled like homepage) */}
        <div className="pricing-hero">
          <img
            src="/pricing.jpg"
            alt="pricing"
            className="pricing-hero-image"
          />
          <div className="pricing-hero-overlay"></div>
          <div className="pricing-content-box">
            <div className="pricing-hero-content">
              <h1 className="pricing-first">Discover our.</h1>
              <h1 className="pricing-last">Pricing and Plans .</h1>
            </div>
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
              className={`toggle-btn ${billingPeriod === "monthly" ? "active" : ""}`}
              onClick={() => setBillingPeriod("monthly")}
            >
              Monthly
            </button>
            <button
              className={`toggle-btn ${billingPeriod === "yearly" ? "active" : ""}`}
              onClick={() => setBillingPeriod("yearly")}
            >
              Yearly
            </button>
          </div>

          <div className="pricing-grid">
            {/* Starter Package */}
            <div className="pricing-card">
              <h3 className="package-name">Starter</h3>
              <div className="price">
                <span className="amount">
                  {pricingData.starter[billingPeriod].price}
                </span>
              </div>
              <p className="billing">
                {pricingData.starter[billingPeriod].text}
              </p>
              <ul className="features">
                <li>
                  <i className="fas fa-check"></i> Access to gym during regular
                  hours (6AM – 10PM)
                </li>
                <li>
                  <i className="fas fa-check"></i> Access to cardio & strength
                  equipment
                </li>
                <li>
                  <i className="fas fa-check"></i> 2 group fitness classes per
                  week
                </li>
                <li>
                  <i className="fas fa-check"></i> Beginner-friendly workout
                  plans
                </li>
                <li>
                  <i className="fas fa-check"></i> Locker room access
                </li>
                <li>
                  <i className="fas fa-check"></i> Free fitness assessment (1
                  time)
                </li>
              </ul>
              <button className="pricing-btn">Get started</button>
            </div>

            {/* Premium Package */}
            <div className="pricing-card">
              <h3 className="package-name">Premium</h3>
              <div className="price">
                <span className="amount">
                  {pricingData.premium[billingPeriod].price}
                </span>
              </div>
              <p className="billing">
                {pricingData.premium[billingPeriod].text}
              </p>
              <ul className="features">
                <li>
                  <i className="fas fa-check"></i> Everything in Starter
                </li>
                <li>
                  <i className="fas fa-check"></i> 24/7 gym access
                </li>
                <li>
                  <i className="fas fa-check"></i> Weekly personal training
                  session (1 per week)
                </li>
                <li>
                  <i className="fas fa-check"></i> Customized workout program
                </li>
                <li>
                  <i className="fas fa-check"></i> Monthly body composition
                  analysis
                </li>
                <li>
                  <i className="fas fa-check"></i> Access to advanced strength
                  equipment
                </li>
                <li>
                  <i className="fas fa-check"></i> Priority support from
                  trainers
                </li>
              </ul>
              <button className="pricing-btn">Get started</button>
            </div>

            {/* Elite Package */}
            <div className="pricing-card popular">
              <h3 className="package-name">Elite</h3>
              <div className="price">
                <span className="amount">
                  {pricingData.elite[billingPeriod].price}
                </span>
              </div>
              <p className="billing">{pricingData.elite[billingPeriod].text}</p>
              <ul className="features">
                <li>
                  <i className="fas fa-check"></i> Everything in Premium
                </li>
                <li>
                  <i className="fas fa-check"></i> Unlimited personal training
                  sessions
                </li>
                <li>
                  <i className="fas fa-check"></i> Unlimited group fitness
                  classes
                </li>
                <li>
                  <i className="fas fa-check"></i> Personalized nutrition & diet
                  plan
                </li>
                <li>
                  <i className="fas fa-check"></i> Dedicated fitness coach
                </li>
                <li>
                  <i className="fas fa-check"></i> Personalized keycard access
                </li>
                <li>
                  <i className="fas fa-check"></i> Priority booking for classes
                </li>
                <li>
                  <i className="fas fa-check"></i> Access to premium recovery
                  zone (if available)
                </li>
                <li>
                  <i className="fas fa-check"></i> Early access to events &
                  workshops
                </li>
              </ul>
              <button className="pricing-btn">Get started</button>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-accordion">
        <div className="container">
          <h2 className="faq-title">Questions</h2>
          <p className="faq-description">
            Explore your fitness possibilities with Ironix. Take a look at our
            packages designed to meet your needs and elevate your wellness
            journey.
          </p>
          <div className="faq-list">
            {faqData.map((item, index) => (
              <div className="faq-item" key={index}>
                <div
                  className="faq-question-row"
                  onClick={() => toggleQuestion(index)}
                >
                  <span className="faq-question">{item.question}</span>
                  <button
                    className={`faq-toggle ${openIndex === index ? "open" : ""}`}
                  >
                    <i
                      className={`fas ${openIndex === index ? "fa-minus" : "fa-plus"}`}
                    ></i>
                  </button>
                </div>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
            <div className="still-qsn">
            <div className="qsn-box">
              <h2>Still have questions?</h2>
              <p>
                Can’t find the answer you’re looking for? Please chat to our
                friendly team.
              </p>
            </div>
            <div>
              <Link to="/contact">
                <button>contact  <i class='fas fa-angle-right'></i></button>
              </Link>
            </div>
          </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default PricingPage;
