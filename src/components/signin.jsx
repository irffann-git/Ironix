import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, remember });
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        {/* ── Left: Form ── */}
        <div className="auth-form-side">
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Please enter your details to sign in.</p>

          <form onSubmit={handleSubmit} className="auth-form">

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
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

            <div className="form-extras">
              <label className="remember-label">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Remember me
              </label>
              <a href="#" className="forgot-link">Forgot Password?</a>
            </div>

            <button type="submit" className="auth-btn">Sign In</button>

          </form>

          <div className="auth-divider"><span>OR CONTINUE WITH</span></div>

          <button className="google-btn">
            <img src="https://www.svgrepo.com/show/475656/google-co" alt="Google\" />
            Sign in with Google
          </button>

          <p className="auth-switch">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>

        {/* ── Right: Image ── */}
        <div className="auth-image-side">
          <img src="/contact.jpg" alt="Premium sneaker" />
          <div className="auth-image-overlay">
            <h2>Premium Comfort</h2>
            <p>Experience the future of footwear with our exclusive collection.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SignIn;