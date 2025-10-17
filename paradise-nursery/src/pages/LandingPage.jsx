import bg from "../assets/natural-green-leaves.jpg";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div
      className="landing-container"
      style={{
        backgroundImage: `url(${bg})`, // ✅ imported image
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        padding: "80px 20px",
        color: "rgb(0,0,0)",
        backdropFilter: "brightness(0.8)",
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
