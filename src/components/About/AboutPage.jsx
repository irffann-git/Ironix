import { Link } from 'react-router-dom';
import './AboutPage.css';
import { useEffect, useRef, useState } from 'react';
import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function AboutPage() {
   const swiperRef = useRef(null);
  const swiperInstance = useRef(null);

 const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;

      const scrollY = window.scrollY;
      const section = document.querySelector('.fixed-parallax');
      if (!section) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      // Only apply when section is in view
      if (scrollY + windowHeight > sectionTop && scrollY < sectionTop + sectionHeight) {
        // Calculate progress through the section
        const progress = (scrollY + windowHeight - sectionTop) / (sectionHeight + windowHeight);
        // Move content slightly (adjust multiplier for strength)
        const translateY = (progress - 0.5) * 50; // range -25px to +25px
        contentRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


    const [currentIndex, setCurrentIndex] = useState(0);
  const [cardStep, setCardStep] = useState(0);
  const trackRef = useRef(null);
  const totalCards = 7;
  const visibleCards = 2.5;
  const maxIndex = totalCards - Math.ceil(visibleCards); // 7 - 3 = 4

 useEffect(() => {
    const initSwiper = () => {
      if (window.innerWidth <= 768) {
        if (!swiperInstance.current) {
          swiperInstance.current = new Swiper(swiperRef.current, {
            modules: [Pagination],
            slidesPerView: 1.15,
            centeredSlides: true,
            spaceBetween: 16,
            pagination: { el: ".swiper-pagination", clickable: true },
            breakpoints: {
              480: { slidesPerView: 1.3, spaceBetween: 20 },
            },
          });
        }
      } else {
        if (swiperInstance.current) {
          swiperInstance.current.destroy(true, true);
          swiperInstance.current = null;
        }
      }
    };

    initSwiper();
    window.addEventListener("resize", initSwiper);
    return () => {
      window.removeEventListener("resize", initSwiper);
      swiperInstance.current?.destroy(true, true);
    };
  }, []);


  useEffect(() => {
    const computeStep = () => {
      if (trackRef.current && trackRef.current.children.length > 1) {
        const first = trackRef.current.children[0];
        const second = trackRef.current.children[1];
        const step = second.offsetLeft - first.offsetLeft;
        setCardStep(step);
      }
    };
    computeStep();
    window.addEventListener('resize', computeStep);
    return () => window.removeEventListener('resize', computeStep);
  }, []);

  const goPrev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const goNext = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const testimonials = [
    {
      text: "Ironix has transformed my workouts! The personalized plans and supportive community make every session enjoyable. Thanks to Ironix I’m achieving my fitness goals faster than ever.",
      name: "Sarah Anderson",
      role: "Fitness Enthusiast"
    },
    {
      text: "As a fitness professional, I highly recommend Ironix to my clients. The platform’s versatility and expert guidance ensure effective and enjoyable workouts, making it an invaluable tool for achieving optimal results.",
      name: "David Mitchell",
      role: "Personal Trainer"
    },
    // Add 5 more testimonials (you can use placeholder or duplicate with variations)
    {
      text: "I've never felt stronger. The trainers at Ironix push you to your limits while keeping it fun. Highly recommended!",
      name: "Jessica Lee",
      role: "Yoga Instructor"
    },
    {
      text: "Ironix helped me recover from injury and build strength safely. The community support is unmatched.",
      name: "Michael Chen",
      role: "Marathon Runner"
    },
    {
      text: "The classes are diverse and challenging. I love the energy and the results I'm seeing.",
      name: "Emily Davis",
      role: "CrossFit Athlete"
    },
    {
      text: "Ironix's nutrition guidance combined with workouts changed my life. I'm healthier than ever.",
      name: "Robert Wilson",
      role: "Weightlifter"
    },
    {
      text: "As a busy mom, Ironix's flexible schedule and online resources let me stay fit on my own time.",
      name: "Amanda Taylor",
      role: "Fitness Mom"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section with Image (styled like homepage) */}
      <div className="about-hero">
        <img 
          src="/about.jpg" 
          alt="About Us" 
          className="about-hero-image" 
        />
        <div className="about-hero-overlay"></div>
        <div className="about-content-box">
          <div className="about-hero-content">
            <h1 className="about-first">ABOUT</h1>
            <h1 className="about-last">IRONIX</h1>
          </div>
        </div>
      </div>

     

 {/* Our Story Section with Two Images */}
<div className="about-story-two">
  <div className="container">
    <div className="about-story-two-content">
      <p>
        At Ironix, our story is one of passion, commitment, and community. 
        Founded with the vision of creating a fitness space where individuals could thrive, 
        we've cultivated an environment that goes beyond workouts. Our journey is built on 
        the belief that wellness is a holistic endeavor, deeply rooted in community.
      </p>
      <p>
        From the dedication of our certified trainers to the warmth of our members, 
        we invite you to join us in this empowering narrative, where your story of 
        transformation becomes an integral part of ours. Welcome to Ironix, where the 
        journey to a healthier, stronger you is a shared and celebrated experience!
      </p>
    </div>
    {/* Two Images Side by Side */}
    <div className="about-story-two-images">
      <img src="/about-1.jpg" alt="Ironix community" className="story-img" />
      <img src="/about-2.jpg" alt="Ironix trainers" className="story-img" />
    </div>

    
    <div className="about-story-two-btn-wrapper">
      <Link to="/" className="about-story-two-btn">Join Us</Link>
    </div>
  </div>
</div>




 <div className="fixed-parallax">
      {/* Background image – fixed */}
      <div className="fixed-parallax-bg"></div>
      <div className="fixed-parallax-overlay"></div>

      {/* Content that moves */}
      <div className="fixed-parallax-content" ref={contentRef}>
        <h2 className="fixed-parallax-title">STRENGTH GROWS HERE</h2>
      </div>
    </div>



      <div className="whyChooseUs">
      <div className="container">

        <div className="why-title">
          <h2>Why Us?</h2>
        </div>

        {/* ── Desktop grid ── */}
        <div className="why-cards">
          <div className="card">
            <div className="card-icon">
              <i className="fa fa-check"></i>
            </div>
            <h3>Certified trainers</h3>
            <p>
              Discover the difference of working with our certified trainers as
              you embark on a transformative fitness experience at Ironix.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">
              <i className="fas fa-fire-alt"></i>
            </div>
            <h3>Motivation</h3>
            <p>
              Unlock your full potential and embrace the power of fitness
              motivation with us. At Ironix, we understand that the journey to
              a healthier.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">
              <i className="far fa-smile"></i>
            </div>
            <h3>Friendly staff</h3>
            <p>
              Our community is not just about workouts, but about building
              connections and friendships that make your fitness.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">
              <i className="fas fa-heart"></i>
            </div>
            <h3>Support</h3>
            <p>
              We understand that the path to a healthier lifestyle can be
              challenging, and that's why our commitment to your success goes.
            </p>
          </div>
        </div>

        {/* ── Mobile swiper ── */}
        <div className="why-swiper swiper" ref={swiperRef}>
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <div className="card">
                <div className="card-icon">
                  <i className="fa fa-check"></i>
                </div>
                <h3>Certified trainers</h3>
                <p>
                  Discover the difference of working with our certified trainers
                  as you embark on a transformative fitness experience at Ironix.
                </p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="card">
                <div className="card-icon">
                  <i className="fas fa-fire-alt"></i>
                </div>
                <h3>Motivation</h3>
                <p>
                  Unlock your full potential and embrace the power of fitness
                  motivation with us. At Ironix, we understand that the journey
                  to a healthier.
                </p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="card">
                <div className="card-icon">
                  <i className="far fa-smile"></i>
                </div>
                <h3>Friendly staff</h3>
                <p>
                  Our community is not just about workouts, but about building
                  connections and friendships that make your fitness.
                </p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="card">
                <div className="card-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <h3>Support</h3>
                <p>
                  We understand that the path to a healthier lifestyle can be
                  challenging, and that's why our commitment to your success
                  goes.
                </p>
              </div>
            </div>

          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>
    </div>








<div className="testimonials-carousel">
  <div className="container">
    <h2 className="testimonials-title">What They Say</h2>
    <div className="testimonials-carousel-viewport">
      <div
        className="testimonials-carousel-track"
        ref={trackRef}
        style={{ transform: `translateX(-${currentIndex * cardStep}px)` }}
      >
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <i className="fas fa-quote-left quote-icon"></i>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              <h4>{t.name}</h4>
              <p>{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="testimonials-carousel-controls">
      <button
        className="carousel-btn prev"
        onClick={goPrev}
        disabled={currentIndex === 0}
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        className="carousel-btn next"
        onClick={goNext}
        disabled={currentIndex === maxIndex}
      >
        <i className="fas fa-chevron-right"></i>
      </button>
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

export default AboutPage;