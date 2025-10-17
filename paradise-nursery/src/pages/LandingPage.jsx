import { Link } from "react-router-dom";
import bg from "../assets/natural-green-leaves.jpg";

const LandingPage = () => {
  return (
    <div
      className="landing-container"
      style={{
        backgroundImage: `url(${bg})`, // ✅ imported image
      }}
    >
      <h1>Welcome to Paradise Nursery 🌱</h1>
      <p>Discover aromatic and medicinal plants to bring nature into your home.</p>
      <Link to="/products">
        <button className="shop-btn">Shop Now</button>
      </Link>
    </div>
  );
};

export default LandingPage;
