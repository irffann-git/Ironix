import { Link } from "react-router-dom";
import "./BlogPage.css";

function BlogPage() {
  const blogs = [
    {
      id: 1,
      date: "April 8, 2023",
      title: "Unleash Your Inner Strength",
      description:
        "Dive into a world of relentless determination and transforming workouts at IronPulse, where every rep brings you closer to unlocking your full potential.",
      image: "/blog1.png",
    },
    {
      id: 2,
      date: "April 8, 2023",
      title: "Stories of Power, Progress, and Peak Performance",
      description:
        "Explore the narrative of strength through our Gym Guides at FlexFables, where each tale is a lesson in resilience, showcasing the incredible feats achieved through dedication and hard work.",
      image: "/blog2.jpg",
    },
    {
      id: 3,
      date: "April 8, 2023",
      title: "Revitalize Your Fitness Lifestyle",
      description:
        "Discover the panoramic view of health and wellness at Vitality Vista. Dive into articles covering nutrition, workouts, and lifestyle tips, guiding you to a peak state of vitality.",
      image: "/blog3.jpg",
    },
    {
      id: 4,
      date: "April 8, 2023",
      title: "Your Journey to Herculean Fitness",
      description:
        "Join the EpicLift community for inspiring stories, expert advice, and workout wisdom. Embark on a fitness journey that transcends the ordinary and conquers the extraordinary.",
      image: "/blog4.jpg",
    },
    {
      id: 5,
      date: "April 8, 2023",
      title: "Breaking the Mold, Redefining Fitness",
      description:
        "RogueReps is your guide to breaking free from conventional fitness norms. Embrace unconventional workouts, nutrition hacks, and revolutionary ideas that redefine what it means to be fit.",
      image: "/blog5.jpg",
    },
    {
      id: 6,
      date: "April 8, 2023",
      title: "Wisdom for a Sculpted Physique",
      description:
        "Navigate the path to a sculpted body with insights from the SculptedSage Fitness Files. Uncover the secrets of balanced fitness, blending both physical and mental well-being.",
      image: "/blog6.jpg",
    },
  ];

  return (
    <div>
      <div className="Blog-page">
        {/* Hero Section */}
        <div className="Blog-hero">
          <img src="/Blog.jpg" alt="Blog" className="Blog-hero-image" />
          <div className="Blog-hero-overlay"></div>
          <div className="Blog-content-box">
            <div className="Blog-hero-content">
              <h1 className="Blog-first">Discover our.</h1>
              <h1 className="Blog-last">Health and Gym tips</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-section">
        <div className="container">
          <div className="head">
            <h2 className="blog-title">All Blogs</h2>
            <p className="blog-description">
              Explore your fitness possibilities with Ironix. Take a look at our
              packages designed to meet your needs and elevate your wellness journey.
            </p>
          </div>

          <div className="blog-grid">
            {blogs.map((blog) => (
              <Link
                to={`/blog/${blog.id}`}
                key={blog.id}
                className="blog-card-link"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="blog-card">
                  <div className="blog-image-wrapper">
                    <img src={blog.image} alt={blog.title} className="blog-image" />
                  </div>
                  <div className="blog-date">{blog.date}</div>
                  <h3 className="blog-card-title">{blog.title}</h3>
                  <p className="blog-card-description">{blog.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;