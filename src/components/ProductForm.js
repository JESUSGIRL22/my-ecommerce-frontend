import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';


function ProductForm() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
      if (id) {
        // Fetch product details from your backend API based on the id
        fetch(`/products/${id}`)
          .then(response => response.json())
          .then(data => {
            setName(data.name);
            setDescription(data.description);
            setPrice(data.price);
          });
      }
    }, [id]);

    const handleSubmit = event => {
      event.preventDefault();

      const productData = {
        name,
        description,
        price,
      };

      if (id) {
        // Update existing product data
        fetch(`/products/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(productData),
        }).then(() => {
          history.push(`/products/${id}`);
        });
      } else {
        // Create a new product
        fetch('/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(productData),
        }).then(() => {
          history.push('/');
        });
      }
    };

    return (
      <div>
        <h2>{id ? 'Edit' : 'Add'} Product</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
          </label>
          <label>
            Description:
            <textarea value={description} onChange={e => setDescription(e.target.value)} />
          </label>
          <label>
            Price:
            <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }

  export default ProductForm;
