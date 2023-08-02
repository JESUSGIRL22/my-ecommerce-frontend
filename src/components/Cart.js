import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Cart() {
    const [cartItems, setCartItems] = useState({});
    const history = useHistory();

    useEffect(() => {
      // Fetch cart items from your backend API
      fetch('/cart')
        .then(response => response.json())
        .then(data => setCartItems(data));
    }, []);

    const handleCheckout = () => {
      // Implement your checkout logic here
      // For example, you can clear the cart and navigate to a thank you page
      fetch('/checkout', {
        method: 'POST',
      }).then(() => {
        history.push('/thank-you');
      });
    };

    return (
      <div>
        <h2>Cart</h2>
        <ul>
          {Object.keys(cartItems).map(productId => (
            <li key={productId}>
              Product ID: {productId}, Quantity: {cartItems[productId]}
            </li>
          ))}
        </ul>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    );
  }

  export default Cart;
