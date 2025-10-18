import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from "../redux/cartSlice";
import "../styles.css";

const CartPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const total = items.reduce((sum, i) => sum + i.quantity * 10, 0);

  return (
    <div className="cart-page">
      <h2>🛒 Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.name} className="cart-item">
              <img src={item.img} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <div className="cart-btns">
                  <button onClick={() => dispatch(increaseQuantity(item.name))}>+</button>
                  <button onClick={() => dispatch(decreaseQuantity(item.name))}>-</button>
                  <button onClick={() => dispatch(removeFromCart(item.name))}>Delete</button>
                </div>
              </div>
            </div>
          ))}
          <h3>Total: ${total}</h3>
          <div className="checkout-btns">
            <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
            <button>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
