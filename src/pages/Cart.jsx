import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

export default function Cart() {
  const items = useSelector(state => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!items.length) return <p>Cart is empty</p>;

  return (
    <div>
      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}

      <h3>Total: ₹{total.toFixed(2)}</h3>

      <Link to="/checkout">
        <button>Proceed to Checkout</button>
      </Link>
    </div>
  );
}