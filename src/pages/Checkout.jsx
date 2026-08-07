import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const placeOrder = () => {
    alert('Order placed');

    dispatch(clearCart());

    setTimeout(() => navigate('/'), 1000);
  };

  return (
    <div>
      <h2>Checkout</h2>

      <input placeholder="Full Name" />
      <input placeholder="Email" />
      <input placeholder="Address" />

      <h3>Order Summary</h3>

      {items.map(i => (
        <p key={i.id}>
          {i.title} × {i.quantity}
        </p>
      ))}

      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}