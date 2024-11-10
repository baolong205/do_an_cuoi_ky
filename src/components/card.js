// src/components/Cart.js
import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart }) => {
  // Tính tổng tiền và đảm bảo price và quantity là số hợp lệ
  const totalAmount = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price) || 0; // Đảm bảo giá trị price là số hợp lệ
    const quantity = parseInt(item.quantity, 10) || 1; // Đảm bảo quantity là số nguyên hợp lệ, mặc định là 1
    return total + (price * quantity);
  }, 0);

  // Hàm định dạng tiền (với dấu chấm ngăn cách)
  const formatCurrency = (amount) => {
    return amount.toLocaleString('vi-VN') + ' VND'; // Định dạng với dấu chấm ngăn cách hàng nghìn
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id}>
            <p>{item.name} : {item.quantity} x {formatCurrency(item.price)}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      {/* Hiển thị tổng tiền */}
      <h3>Total: {formatCurrency(totalAmount)}</h3>

      <Link to="/checkout">
        <button className="checkout-btn">Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
