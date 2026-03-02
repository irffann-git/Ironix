import { Link } from 'react-router-dom';
import './NotFount.css'; // we'll create this next

function NotFound() {
  return (
    <div className="oops-long-404">
      <div className="oops-long-overlay"></div>
      <div className="oops-long-content">
        <h1 className="oops-long-heading">Oops!</h1>
        <p className="oops-long-text">
          It looks like you've ventured into uncharted territory – this page is currently
          resting between sets. But don't let that stop your momentum! While we get this
          page back on track, why not head back to our homepage and explore the classes,
          trainers, and community that make Ironix the ultimate place to crush your goals.
        </p>
        <Link to="/" className="oops-long-btn">
          <i className="fas fa-home"></i> Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;