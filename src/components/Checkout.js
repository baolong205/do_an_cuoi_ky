// src/components/Checkout.js
import React from 'react';

const Checkout = ({ cartItems }) => {
  // Tính tổng tiền và định dạng số tiền
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Định dạng tiền (với dấu chấm ngăn cách)
  const formatCurrency = (amount) => {
    return amount.toLocaleString('vi-VN') + ' VND';
  };

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
              <p>{item.name} : {item.quantity} x {formatCurrency(item.price)}</p>
            </div>
          ))}
          <h3>Total: {formatCurrency(totalAmount)}</h3>
        </>
      )}

      {/* Nút thanh toán */}
      <button className="proceed-payment-btn">Proceed to Payment</button>
    </div>
  );
};

export default Checkout;
