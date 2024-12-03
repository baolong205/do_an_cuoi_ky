import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const navigate = useNavigate();

  // Tính tổng số tiền đã giảm
  const totalAmount = cartItems.reduce((total, item) => {
    const discountedPrice = item.discount
      ? item.price - item.price * item.discount
      : item.price;
    return total + discountedPrice * item.quantity;
  }, 0);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const formatCurrency = (amount) => amount.toLocaleString('vi-VN') + ' VND';

  return (
    <div className="cart-page">
      <h2 className="cart-title">Giỏ hàng</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Giỏ hàng của bạn hiện đang trống.</p>
          <Link to="/" className="continue-shopping">
            Tiếp tục mua sắm
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items-container">
            {cartItems.map((item) => {
              const discountedPrice = item.discount
                ? item.price - item.price * item.discount
                : item.price;

              return (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <p className="cart-item-name">{item.name}</p>
                    <p className="cart-item-prices">
                      Giá gốc: <span className="original-price">{formatCurrency(item.price)}</span>
                      {item.discount && (
                        <>
                          {' '}| Giá đã giảm: <span className="discounted-price">{formatCurrency(discountedPrice)}</span>
                        </>
                      )}
                    </p>
                    <div className="cart-item-quantity">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        +
                      </button>
                    </div>
                    <p className="cart-item-total">
                      Tổng phụ: {formatCurrency(discountedPrice * item.quantity)}
                    </p>
                  </div>
                  <button
                    className="cart-item-remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Xóa
                  </button>
                </div>
              );
            })}
          </div>

          <div className="cart-summary">
            <div className="cart-total">
              <p>Tổng cộng: </p>
              <p>{formatCurrency(totalAmount)}</p>
            </div>
            <div className="checkout-btn-container">
              <button className="checkout-btn" onClick={handleCheckout}>
                Thanh toán
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
