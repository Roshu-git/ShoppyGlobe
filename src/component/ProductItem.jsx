// Single product card component
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import PropTypes from 'prop-types';

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  // Navigate to product details page
  return (
    <div className="card">
      <Link to={`/product/${product.id}`} className="product-link">
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
        />
        <h3 className="product-title" title={product.title}>{product.title}</h3>

        <p>₹{product.price}</p>
      </Link>

{/* // Add selected product to cart */}
      <button onClick={() => dispatch(addToCart(product))} className='add-btn'>
        <ShoppingCart size={18} />
        Add to Cart
      </button>
    </div>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string,
  }).isRequired,
};
