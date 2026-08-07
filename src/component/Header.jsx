import { ShoppingCart, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/cartSlice';

export default function Header() {
  const count = useSelector(state =>
    state.cart.items.reduce((a, c) => a + c.quantity, 0)
  );

  const dispatch = useDispatch();
// Header component with logo, search bar and cart icon
  return (
    <header className="header">
      <Link to="/" className='logo'>ShoppyGlobe</Link>

{/* // Update search term in Redux on input change */}
    <div className="ShoppyGlobe-search"> 
        <Search size={18} color='black'/>
      <input
        placeholder="Search products..."
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      />
      </div>

{/* // Get total quantity of items from Redux store */}
    <Link to="/cart" className="cart-link">
    <ShoppingCart size={22} /> <span className="cart-count">{count}</span> </Link>
      {/* <Link to="/cart">🛒 {count}</Link> */}
    </header>
  );
}