import useProducts from '../hooks/useProduct';
import ProductItem from './ProductItem';

export default function ProductList() {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (import { useSelector } from 'react-redux';
import useProducts from '../hooks/useProduct';
import ProductItem from './ProductItem';

export default function ProductList() {
  const { products, loading, error } = useProducts();

  // Get search text from Redux
  const search = useSelector(state => state.cart.searchTerm);

  // Filter products
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px',
      }}
    >
      {filteredProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px',
      }}
    >
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}