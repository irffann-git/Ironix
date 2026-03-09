import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import blogs from "../../Data/BlogData";
import "./ArticlePage.css";

function ArticlePage() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  // Newsletter state
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Basic email validation
    if (!email || !email.includes("@") || !email.includes(".")) {
      setMessage("Please enter a valid email address.");
      setMessageType("error");
      return;
    }
    // Simulate successful subscription
    setMessage("Thank you for subscribing!");
    setMessageType("success");
    setEmail(""); // optional: clear input
    // In a real app, you'd send to an API here
  };

  if (!blog) {
    return (
      <div className="not-found">
        <h2>Article not found</h2>
        <Link to="/blog" className="back-btn">Back to Blogs</Link>
      </div>
    );
  }

  // Get other blogs (max 3)
  const otherBlogs = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

  return (
    <div className="article-page">
      {/* Hero Section */}
      <div className="article-hero">
        <img src={blog.image} alt={blog.title} className="article-hero-image" />
        <div className="article-hero-overlay"></div>
        <div className="article-hero-content">
          <h1 className="article-title">{blog.title}</h1>
          <p className="article-subtitle">{blog.description}</p>
          <div className="article-meta">
            <span className="article-date">{blog.date}</span>
            <span className="article-read-time">5 min read</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="article-content container">
        {blog.content?.map((item, index) => {
          if (item.type === "heading") {
            return <h2 key={index} className="article-content-heading">{item.text}</h2>;
          } else if (item.type === "paragraph") {
            return <p key={index} className="article-content-paragraph">{item.text}</p>;
          } else if (item.type === "image") {
            return (
              <div key={index} className="article-content-image-wrapper">
                <img src={item.src} alt={item.alt} className="article-content-image" />
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* Newsletter Signup */}
      <div className="cont">
        <h2>Sign-up for newsletter</h2>
        <p>Powerful, self-serve product and growth analytics to help you convert, engage</p>
        <form onSubmit={handleSubscribe} className="cont-inp">
          <input
            type="email"
            name="email"
            id="newsletter"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Get started</button>
        </form>
        {message && (
          <div className={`newsletter-message ${messageType}`}>
            {message}
          </div>
        )}
      </div>

      {/* More Blogs Section */}
      {otherBlogs.length > 0 && (
        <div className="more-blogs">
          <h3 className="more-blogs-title">More from our blog</h3>
          <div className="more-blogs-grid">
            {otherBlogs.map((other) => (
              <Link to={`/blog/${other.id}`} key={other.id} className="more-blog-card">
                <div className="more-blog-image-wrapper">
                  <img src={other.image} alt={other.title} className="more-blog-image" />
                </div>
                <div className="more-blog-content">
                  <p className="more-blog-date">{other.date}</p>
                  <h4 className="more-blog-title">{other.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticlePage;