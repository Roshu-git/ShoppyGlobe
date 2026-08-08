// Fetch product details based on route parameter
import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  // Show loading state
  // Show product information and add to cart button
  // useEffect(() => {
  //   fetch(`https://dummyjson.com/products/${id}`)
  //     .then(res => {
  //       if (!res.ok) throw new Error('Product not found');
  //       return res.json();
  //     })
  //     .then(setProduct)
  //     .catch(err => setError(err.message));
  // }, [id]);

  useEffect(() => { const fetchProduct = async () => { 
    try { 
    setLoading(true); 
    const response = await fetch( `https://dummyjson.com/products/${id}` ); 
    if (!response.ok) { 
      throw new Error('Product not found'); 
    } 
    const data = await response.json(); 
    setProduct(data); 
  } 
  catch (err) { 
    setError(err.message); 
  } finally { 
    setLoading(false); 
  } 
}; 
fetchProduct(); 
}, [id]);

  if (loading) return <p>Loading product...</p>;
  if (error) return (
  <div className="error-box"> <h3>Product not found</h3> <p>{error}</p> </div> );
  if (!product) return <p>Loading...</p>;

  return (
    <div className="detail">
      <img src={product.thumbnail} alt={product.title} loading="lazy" />
      <div>
        <h2 className="product-title" title={product.title}>{product.title}</h2>
        <p>{product.description}</p>
        <h3>₹{product.price}</h3>

        <button onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
