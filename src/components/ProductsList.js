// components/ProductsList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products') // Replace with your actual API endpoint
  .then(response => response.json())
  .then(data => setProducts(data))
  }, []);

  // Render the list of products
  return (
    <div>
      <h1>All Makeup Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/add-product">Add Product</Link>
    </div>
  );
}

export default ProductsList;
