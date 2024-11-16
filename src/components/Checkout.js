import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css';

const Checkout = ({ cartItems }) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: 'cash',
  });

  // Calculate the total amount based on discounted prices
  const totalAmount = cartItems.reduce((total, item) => {
    const discountedPrice = item.discount
      ? item.price - item.price * item.discount
      : item.price;
    return total + discountedPrice * item.quantity;
  }, 0);

  // Format currency with dots as separators
  const formatCurrency = (amount) => {
    return amount.toLocaleString('en-US') + 'VND';
  };

  // Handle customer information change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  // Handle order confirmation
  const handlePlaceOrder = () => {
    if (customerInfo.name && customerInfo.phone && customerInfo.address) {
      alert('Your order has been placed successfully!');
      console.log('Order details:', { customerInfo, cartItems, totalAmount });
    } else {
      alert('Please fill in all the shipping information!');
    }
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is currently empty!</p>
          <Link to="/" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {/* Product Information */}
          <div className="checkout-items">
            {cartItems.map((item) => {
              const discountedPrice = item.discount
                ? item.price - item.price * item.discount
                : item.price;

              return (
                <div key={item.id} className="checkout-item">
                  <img src={item.image} alt={item.name} className="checkout-item-image" />
                  <div className="checkout-item-details">
                    <p className="checkout-item-name">{item.name}</p>
                    <p className="checkout-item-prices">
                      Original Price: <span className="original-price">{formatCurrency(item.price)}</span>
                      {item.discount && (
                        <>
                          {' '}| Discounted Price: <span className="discounted-price">{formatCurrency(discountedPrice)}</span>
                        </>
                      )}
                    </p>
                    <p className="checkout-item-quantity">Quantity: {item.quantity}</p>
                    <p className="checkout-item-total">
                      Total: {formatCurrency(discountedPrice * item.quantity)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Shipping Information */}
          <div className="checkout-form">
            <h3>Shipping Information</h3>
            <div className="form-group">
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={customerInfo.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={customerInfo.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={customerInfo.address}
                onChange={handleInputChange}
                placeholder="Enter your shipping address"
              />
            </div>
            <div className="form-group">
              <label>Payment Method:</label>
              <select
                name="paymentMethod"
                value={customerInfo.paymentMethod}
                onChange={handleInputChange}
              >
                <option value="cash">Cash on Delivery</option>
                <option value="card">Credit/Debit Card</option>
                <option value="e-wallet">E-Wallet</option>
              </select>
            </div>
          </div>

          {/* Order Summary */}
          <div className="checkout-summary">
            <h3>Total Amount: {formatCurrency(totalAmount)}</h3>
            <button className="proceed-payment-btn" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
