import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const grandTotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = () => {
    alert('Order placed');

    dispatch(clearCart());

    setTimeout(() => navigate('/'), 1000);
  };

  return (
    <div className="checkout-container">
      {/* Left Side - Form */}
      <div className="checkout-form">
        <h2>Checkout</h2>

        <input
          placeholder="Full Name"
          className="form-control"
        />

        <input
          placeholder="Email"
          className="form-control"
        />

        <input
          placeholder="Phone Number"
          className="form-control"
        />

        <textarea
          placeholder="Address"
          className="form-control address-box"
          rows="4"
        ></textarea>

        <button
          onClick={placeOrder}
          className="check-button"
        >
          Place Order
        </button>
      </div>

      {/* Right Side - Order Summary */}
      <div className="checkout-summary">
        <h3>Order Summary</h3>

        {items.map(i => (
          <div key={i.id} className="summary-item">
            <div>
              <p className="summary-title" title={i.title}>
                {i.title}
              </p>
              <small>Qty: {i.quantity}</small>
            </div>

            <strong>
              ₹{(i.price * i.quantity).toFixed(2)}
            </strong>
          </div>
        ))}

        <hr />

        <div className="summary-total">
          <span>Total</span>
          <strong>₹{grandTotal.toFixed(2)}</strong>
        </div>
      </div>
    </div>
  );
}