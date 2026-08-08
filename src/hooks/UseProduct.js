// Custom hook to fetch products from API

import { useEffect, useState } from 'react';

export default function useProducts() {
    // State for products, loading and error
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

//   useEffect(() => {
//     fetch('https://dummyjson.com/products')
//       .then((res) => {
//         if (!res.ok) throw new Error('Failed to fetch products');
//         return res.json();
//       })
//       .then((data) => setProducts(data.products))
//       .catch((err) => setError(err.message))
//       .finally(() => setLoading(false));
//   }, []);

useEffect(() => { 
    const fetchProducts = async () => { 
        try { setLoading(true); 
            const response = await fetch( 'https://dummyjson.com/products' ); 
            // Handle API failure 
            if (!response.ok) { 
                throw new Error('Failed to fetch products'); 
            } 
            const data = await response.json(); 
            // Store products in state 
            setProducts(data.products); 
        } 
        catch (err) { 
            // Store error message 
            setError(err.message); 
        } 
        finally { 
            // Stop loading in all cases 
            setLoading(false); 
        } 
    }; 
    fetchProducts(); 
}, []);

  return { products, loading, error };
}
