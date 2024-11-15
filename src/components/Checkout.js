import React from 'react';

import './Checkout.css'

const Checkout = ({ cartItems }) => {
  // Tính tổng tiền theo giá đã giảm của các sản phẩm
  const totalAmount = cartItems.reduce((total, item) => {
    const discountedPrice = item.discount
      ? item.price - item.price * item.discount
      : item.price;
    return total + discountedPrice * item.quantity;
  }, 0);

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
          {cartItems.map(item => {
            // Tính giá giảm cho mỗi sản phẩm
            const discountedPrice = item.discount
              ? item.price - item.price * item.discount
              : item.price;

            return (
              <div key={item.id}>
                <p>{item.name} : {item.quantity} x {formatCurrency(discountedPrice)}</p>
              </div>
            );
          })}
          <h3>Total: {formatCurrency(totalAmount)}</h3>
        </>
      )}

      {/* Nút thanh toán */}
      <button className="proceed-payment-btn">Proceed to Payment</button>
    </div>
  );
};

export default Checkout;
