import React from 'react';

const Checkout = ({ cartItems }) => {
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <h3>Items in your cart:</h3>
          {cartItems.map(item => (
            <div key={item.id}>
              <p>{item.name} - {item.quantity} x {item.price} VND</p>
            </div>
          ))}
          <h3>Total: {totalAmount} VND</h3>
        </>
      )}
      <button>Proceed to Payment</button>
    </div>
  );
};

export default Checkout;
