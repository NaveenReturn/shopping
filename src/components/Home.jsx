/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Product } from './Product';
import "./Home.css";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getAllProducts() {
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/products');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setProducts(data.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []); // Only run once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='product-container'>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
