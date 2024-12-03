import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useOrderContext } from "../Context/OderContext"; // Import the context
import "./checkout.css";

const Checkout = ({ cartItems, clearCart }) => {
  const { addOrder } = useOrderContext(); // Access the addOrder function
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "cash",
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
    bankAccount: "",
    selectedBank: "",
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const savedCustomerInfo = JSON.parse(localStorage.getItem("customerInfo"));
    if (savedCustomerInfo) {
      setCustomerInfo(savedCustomerInfo);
    }
  }, []);

  const banks = [
    { id: "vietcombank", name: "Vietcombank" },
    { id: "techcombank", name: "Techcombank" },
    { id: "bidv", name: "BIDV" },
    { id: "agribank", name: "Agribank" },
    { id: "mbbank", name: "MB Bank" },
  ];

  const totalAmount = cartItems.reduce((total, item) => {
    const discountedPrice = item.discount
      ? item.price - item.price * item.discount
      : item.price;
    return total + discountedPrice * item.quantity;
  }, 0);

  const formatCurrency = (amount) => {
    return amount.toLocaleString("en-US") + " VND";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const handlePaymentMethodChange = (e) => {
    setCustomerInfo({ ...customerInfo, paymentMethod: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (customerInfo.name && customerInfo.phone && customerInfo.address) {
      const order = {
        id: Date.now().toString(),
        customerInfo: customerInfo,
        cartItems: cartItems,
        totalAmount: totalAmount,
        orderDate: new Date().toISOString(),
        status: "Processing",
      };

      // Save order to localStorage for persistence
      const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
      storedOrders.push(order);
      localStorage.setItem("orders", JSON.stringify(storedOrders));

      // Add the order to global context
      addOrder(order);

      // Display success message
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 5000);

      // Store customer info in localStorage for future checkout
      localStorage.setItem("customerInfo", JSON.stringify(customerInfo));

      // Clear cart
      clearCart();
    } else {
      alert("Please fill in all shipping information!");
    }
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>

      {showSuccessMessage && (
        <div className="success-message">
          <h2>Order Placed Successfully!</h2>
          <p>Your order has been confirmed.</p>
          <p>Thank you for shopping with us.</p>
        </div>
      )}

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is currently empty!</p>
          <Link to="/" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {/* List of products */}
          <div className="checkout-items">
            {cartItems.map((item) => {
              const discountedPrice = item.discount
                ? item.price - item.price * item.discount
                : item.price;

              return (
                <div key={item.id} className="checkout-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="checkout-item-image"
                  />
                  <div className="checkout-item-details">
                    <p className="checkout-item-name">{item.name}</p>
                    <p className="checkout-item-prices">
                      Original Price:{" "}
                      <span className="original-price">
                        {formatCurrency(item.price)}
                      </span>
                      {item.discount && (
                        <>
                          {" "}
                          | Discounted Price:{" "}
                          <span className="discounted-price">
                            {formatCurrency(discountedPrice)}
                          </span>
                        </>
                      )}
                    </p>
                    <p className="checkout-item-quantity">
                      Quantity: {item.quantity}
                    </p>
                    <p className="checkout-item-total">
                      Total: {formatCurrency(discountedPrice * item.quantity)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Customer Information Form */}
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
                onChange={handlePaymentMethodChange}
              >
                <option value="cash">Cash on Delivery</option>
                <option value="card">Credit/Debit Card</option>
                <option value="bank">Bank Transfer</option>
              </select>
            </div>

            {/* Payment details for card or bank */}
            {customerInfo.paymentMethod === "card" && (
              <>
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number:</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={customerInfo.cardNumber}
                    onChange={handleInputChange}
                    placeholder="Enter your card number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cardExpiry">Expiry Date:</label>
                  <input
                    type="text"
                    id="cardExpiry"
                    name="cardExpiry"
                    value={customerInfo.cardExpiry}
                    onChange={handleInputChange}
                    placeholder="Enter card expiry date"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cardCVV">CVV:</label>
                  <input
                    type="text"
                    id="cardCVV"
                    name="cardCVV"
                    value={customerInfo.cardCVV}
                    onChange={handleInputChange}
                    placeholder="Enter card CVV"
                  />
                </div>
              </>
            )}

            {customerInfo.paymentMethod === "bank" && (
              <>
                <div className="form-group">
                  <label htmlFor="selectedBank">Select Bank:</label>
                  <select
                    name="selectedBank"
                    value={customerInfo.selectedBank}
                    onChange={handleInputChange}
                  >
                    <option value="">Choose a bank</option>
                    {banks.map((bank) => (
                      <option key={bank.id} value={bank.id}>
                        {bank.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="bankAccount">Bank Account Number:</label>
                  <input
                    type="text"
                    id="bankAccount"
                    name="bankAccount"
                    value={customerInfo.bankAccount}
                    onChange={handleInputChange}
                    placeholder="Enter bank account number"
                  />
                </div>
              </>
            )}

            {/* Total Amount */}
            <div className="checkout-summary">
              <p>Total Amount: {formatCurrency(totalAmount)}</p>
            </div>

            <button className="place-order-btn" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
