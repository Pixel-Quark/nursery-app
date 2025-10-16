import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart.items);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <nav>
      <h2>🌿 Paradise Nursery</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({count})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
