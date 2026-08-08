// Passing each product object as a prop to ProductItem component
import { useSelector } from 'react-redux';
import useProducts from '../hooks/useProduct';
import ProductItem from './ProductItem';

export default function ProductList() {
    // Fetch products using custom hook
    const { products, loading, error } = useProducts();
    
    // Get search term from Redux store
    const search = useSelector(state => state.cart.searchTerm);
    
    // Filter products based on search text
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  // Loading state
  if (loading) return <p>Loading...</p>;

  // Error state
  if (error) return (
    <div className="error-box"> <h3>Product not found</h3> <p>{error}</p> </div>
  );

// Render product cards
  return (
    <div className="product-grid">
      {filteredProducts.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}