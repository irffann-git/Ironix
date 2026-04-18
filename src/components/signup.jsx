import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords do not match.");
      return;
    }
    console.log({ name, email, password });
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        {/* ── Left: Form ── */}
        <div className="auth-form-side">
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-subtitle">Join us to get exclusive drops and offers.</p>

          <form onSubmit={handleSubmit} className="auth-form">

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Min 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  className="eye-icon"
                  onClick={() => setShowPassword((p) => !p)}
                >
                  <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                </span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="confirm">Confirm Password</label>
              <div className="input-wrapper">
                <input
                  type={showConfirm ? "text" : "password"}
                  id="confirm"
                  placeholder="Repeat password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  required
                />
                <span
                  className="eye-icon"
                  onClick={() => setShowConfirm((p) => !p)}
                >
                  <i className={showConfirm ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                </span>
              </div>
            </div>

            <button type="submit" className="auth-btn">Create Account</button>

          </form>

          <div className="auth-divider"><span>OR SIGN UP WITH</span></div>

          <button className="google-btn">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" />
            Sign up with Google
          </button>

          <p className="auth-switch">
            Already have an account? <Link to="/signin">Log in</Link>
          </p>
        </div>

        {/* ── Right: Image ── */}
        <div className="auth-image-side">
          <img src="/contact.jpg" alt="Sneaker drop" />
          <div className="auth-image-overlay">
            <h2>Join the Movement</h2>
            <p>Be the first to know about new drops and exclusive events.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SignUp;