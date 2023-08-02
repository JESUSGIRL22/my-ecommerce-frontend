import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
      // Fetch product details from your backend API based on the id
      fetch(`/products/${id}`)
        .then(response => response.json())
        .then(data => setProduct(data));
    }, [id]);

    return (
      <div>
        <h2>Product Details</h2>
        <p>Name: {product.name}</p>
        <p>Description: {product.description}</p>
        <p>Price: ${product.price}</p>
      </div>
    );
  }

  export default ProductDetail;
