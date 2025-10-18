import { Link } from "react-router-dom";
import "../styles.css";

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="overlay">
        <h1>Welcome to Paradise Nursery 🌱</h1>
        <p>Discover the beauty of nature through our aromatic and medicinal plants.</p>
        <Link to="/products">
          <button className="btn-main">Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
