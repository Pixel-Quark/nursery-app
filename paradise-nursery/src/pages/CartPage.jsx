import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from "../redux/cartSlice";

const CartPage = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((sum, i) => sum + i.quantity * 10, 0); // each plant = $10

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart 🛒</h2>
      {items.length === 0 ? (
        <p>Your cart is empty. Add some plants!</p>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item.name} className="cart-item">
              <img src={item.img} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <div>
                  <button onClick={() => dispatch(decreaseQuantity(item.name))}>-</button>
                  <button onClick={() => dispatch(increaseQuantity(item.name))}>+</button>
                  <button onClick={() => dispatch(removeFromCart(item.name))}>Delete</button>
                </div>
              </div>
            </div>
          ))}
          <h3>Total: ${total}</h3>
          <button className="shop-btn" onClick={() => dispatch(clearCart())}>
            Clear Cart
          </button>
          <button className="shop-btn">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
