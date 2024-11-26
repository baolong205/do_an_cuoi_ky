import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./checkout.css";

const Checkout = ({ cartItems, clearCart }) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
    paymentMethod: "cash",
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
    bankAccount: "",
    selectedBank: "",  // Trường chọn ngân hàng
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  // Load saved customer info if available in localStorage
  useEffect(() => {
    const savedCustomerInfo = JSON.parse(localStorage.getItem("customerInfo"));
    if (savedCustomerInfo) {
      setCustomerInfo(savedCustomerInfo);
    }
  }, []);

  // Calculate the total amount based on discounted prices

  // Danh sách các ngân hàng
  const banks = [
    { id: "vietcombank", name: "Vietcombank" },
    { id: "techcombank", name: "Techcombank" },
    { id: "bidv", name: "BIDV" },
    { id: "agribank", name: "Agribank" },
    { id: "mbbank", name: "MB Bank" },
  ];

  // Tính tổng tiền với giá sau khi giảm
  const totalAmount = cartItems.reduce((total, item) => {
    const discountedPrice = item.discount
      ? item.price - item.price * item.discount
      : item.price;
    return total + discountedPrice * item.quantity;
  }, 0);

  // Định dạng tiền tệ
  const formatCurrency = (amount) => {
    return amount.toLocaleString("en-US") + " VND";
  };

  // Xử lý thay đổi thông tin khách hàng
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  // Xử lý thay đổi phương thức thanh toán
  const handlePaymentMethodChange = (e) => {
    setCustomerInfo({ ...customerInfo, paymentMethod: e.target.value });
  };

  // Xử lý đặt hàng
  const handlePlaceOrder = () => {
    if (customerInfo.name && customerInfo.phone && customerInfo.address) {
      alert("Your order has been placed successfully!");

      // Save customer info to localStorage
      localStorage.setItem("customerInfo", JSON.stringify(customerInfo));

      clearCart();  // Call clearCart to remove items from the cart
    } else {
      alert("Vui lòng điền đầy đủ thông tin giao hàng!");
    }
  };

  return (
    <div className="checkout">
      <h2>Thanh Toán</h2>

      {showSuccessMessage && (
        <div className="success-message">
          <h2>Đặt Hàng Thành Công!</h2>
          <p>Chúc mừng bạn! Đặt hàng của bạn đã được xác nhận.</p>
          <p>Cảm ơn bạn đã mua hàng.</p>
        </div>
      )}

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Giỏ hàng của bạn hiện tại trống!</p>
          <Link to="/" className="continue-shopping-btn">
            Tiếp tục mua sắm
          </Link>
        </div>
      ) : (
        <>
          {/* Danh sách sản phẩm */}
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
                      Giá Gốc:{" "}
                      <span className="original-price">
                        {formatCurrency(item.price)}
                      </span>
                      {item.discount && (
                        <>
                          {" "}
                          | Giá Sau Giảm:{" "}
                          <span className="discounted-price">
                            {formatCurrency(discountedPrice)}
                          </span>
                        </>
                      )}
                    </p>
                    <p className="checkout-item-quantity">
                      Số Lượng: {item.quantity}
                    </p>
                    <p className="checkout-item-total">
                      Tổng Cộng: {formatCurrency(discountedPrice * item.quantity)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Thông tin giao hàng */}
          <div className="checkout-form">
            <h3>Thông Tin Giao Hàng</h3>
            <div className="form-group">
              <label htmlFor="name">Họ và Tên:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={customerInfo.name}
                onChange={handleInputChange}
                placeholder="Nhập họ và tên của bạn"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Số Điện Thoại:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={customerInfo.phone}
                onChange={handleInputChange}
                placeholder="Nhập số điện thoại của bạn"
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Địa Chỉ:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={customerInfo.address}
                onChange={handleInputChange}
                placeholder="Nhập địa chỉ giao hàng"
              />
            </div>
            <div className="form-group">
              <label>Phương Thức Thanh Toán:</label>
              <select
                name="paymentMethod"
                value={customerInfo.paymentMethod}
                onChange={handlePaymentMethodChange}
              >
                <option value="cash">Thanh Toán Khi Nhận Hàng</option>
                <option value="card">Thẻ Tín Dụng/Ghi Nợ</option>
                <option value="bank">Thanh toán qua ngân hàng</option>
              </select>
            </div>

            {/* Thông tin thanh toán */}
            {customerInfo.paymentMethod === "card" && (
              <>
                <div className="form-group">
                  <label htmlFor="cardNumber">Số Thẻ:</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={customerInfo.cardNumber}
                    onChange={handleInputChange}
                    placeholder="Nhập số thẻ của bạn"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cardExpiry">Ngày Hết Hạn:</label>
                  <input
                    type="text"
                    id="cardExpiry"
                    name="cardExpiry"
                    value={customerInfo.cardExpiry}
                    onChange={handleInputChange}
                    placeholder="Nhập ngày hết hạn thẻ"
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
                    placeholder="Nhập mã CVV"
                  />
                </div>
              </>
            )}

            {customerInfo.paymentMethod === "bank" && (
              <>
                <div className="form-group">
                  <label htmlFor="selectedBank">Chọn Ngân Hàng:</label>
                  <select
                    name="selectedBank"
                    value={customerInfo.selectedBank}
                    onChange={handleInputChange}
                  >
                    <option value="">Chọn ngân hàng</option>
                    {banks.map((bank) => (
                      <option key={bank.id} value={bank.id}>
                        {bank.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="bankAccount">Số Tài Khoản Ngân Hàng:</label>
                  <input
                    type="text"
                    id="bankAccount"
                    name="bankAccount"
                    value={customerInfo.bankAccount}
                    onChange={handleInputChange}
                    placeholder="Nhập số tài khoản ngân hàng của bạn"
                  />
                </div>
              </>
            )}
          </div>

          {/* Tổng tiền và nút đặt hàng */}

          <div className="checkout-summary">
            <h3>Tổng Tiền: {formatCurrency(totalAmount)}</h3>
            <button className="proceed-payment-btn" onClick={handlePlaceOrder}>
              Đặt Hàng
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
