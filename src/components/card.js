import React from 'react';
import { Link } from 'react-router-dom';
import './card.css'
const Cart = ({ cartItems, removeFromCart }) => {
  // Tính tổng tiền và đảm bảo price và quantity là số hợp lệ
  const totalAmount = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price) || 0; // Đảm bảo giá trị price là số hợp lệ
    const quantity = parseInt(item.quantity, 10) || 1; // Đảm bảo quantity là số nguyên hợp lệ, mặc định là 1
    return total + (price * quantity);
  }, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="cart-item-image"
            />
            <div className="cart-item-info">
              <p>{item.name}</p>
              <p>{item.quantity} x {item.price.toLocaleString('vi-VN')} VND</p>
              <button onClick={() => removeFromCart(item.id)} className="remove-item-btn">
                Remove
              </button>
            </div>
          </div>
        ))
      )}
      {/* Hiển thị tổng tiền */}
      <h3>Total: {totalAmount.toLocaleString('vi-VN')} VND</h3>

      <Link to="/checkout">
        <button className="checkout-btn">Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
