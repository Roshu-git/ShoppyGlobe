import { useSelector } from 'react-redux';
import useProducts from '../hooks/useProduct';
import ProductItem from './ProductItem';

export default function ProductList() {
  const { products, loading, error } = useProducts();

  const search = useSelector(state => state.cart.searchTerm);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-grid">
      {filteredProducts.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}