import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/cartSlice';

export default function Header() {
  const count = useSelector(state =>
    state.cart.items.reduce((a, c) => a + c.quantity, 0)
  );

  const dispatch = useDispatch();

  return (
    <header className="header">
      <Link to="/">ShoppyGlobe</Link>

      <input
        placeholder="Search products..."
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />

      <Link to="/cart">🛒 {count}</Link>
    </header>
  );
}