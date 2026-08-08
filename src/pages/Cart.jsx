// Get cart items from Redux
// Passing each cart item as a prop to CartItem component

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../component/CartItem';

export default function Cart() {
  const items = useSelector(state => state.cart.items);

  // Calculate grand total
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!items.length) return <p>Cart is empty</p>;

  // Render cart items in table format
  return (
    <div className="sg-addcart">
      <h3 className='product-title'>Shopping Cart</h3>
      {/* {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))} */}
  {/* Summary Table */} 
  <h3 style={{ marginTop: '30px' }}>Order Summary:</h3> 
  <div className="table-wrapper">
  <table className="cart-table"> 
    <thead> 
      <tr> 
        <th>Product image</th> 
        <th>Product Name</th> 
        <th>Quantity</th> 
        <th>Price</th> 
        <th>Total</th> 
        <th>Action</th> 
      </tr> 
    </thead> 
    <tbody> 
      {items.map(item => ( 
        <CartItem key={item.id} item={item} /> 
      ))} 
      </tbody> 
      <tfoot> 
        <tr> 
          <td colSpan="5">
            <strong>Grand Total</strong></td> 
            <td><strong>₹{total.toFixed(2)}</strong></td> 
        </tr> 
      </tfoot> 
      </table>
      </div>
{/* // Navigate to checkout page */}
      <div className="checkout-btn-wrap">
        <Link to="/checkout" >
          <button>Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
}