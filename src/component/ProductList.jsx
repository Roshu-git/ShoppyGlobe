import { useSelector } from 'react-redux';
import useProducts from '../hooks/useProducts';
import ProductItem from './ProductItem';

export default function ProductList() {
  const { products, loading, error } = useProducts();
  const search = useSelector(state => state.cart.searchTerm);

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid">
      {filtered.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
