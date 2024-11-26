import React, { useState, useEffect } from "react";
import { getProducts, addProduct, editProduct, deleteProduct } from "../Data/ProductData";
import AdminNavbar from "./AdminNav";  // Import AdminNavbar
import './Admin.css';

const AdminPanel = () => {
    const [products, setProducts] = useState(getProducts());
    const [customerInfo, setCustomerInfo] = useState({}); // Add this line to define the state for customerInfo
    const [form, setForm] = useState({ id: "", name: "", price: "", description: "", image: "" });
    const [message, setMessage] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [selectedSection, setSelectedSection] = useState("product-management");
    const [newUserForm, setNewUserForm] = useState({ username: "", password: "", isAdmin: false });
    const [users, setUsers] = useState([]);  // Add state for users

    // Load saved customer info if available in localStorage
    useEffect(() => {
        const savedCustomerInfo = JSON.parse(localStorage.getItem("customerInfo"));
        if (savedCustomerInfo) {
            setCustomerInfo(savedCustomerInfo);  // Correct usage of setCustomerInfo here
        }

        const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(savedUsers);  // Load saved users from localStorage
    }, []);

    // Handle form changes for product management
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    // Handle form submit (Add or Edit product)
    const handleSubmit = () => {
        if (!form.name || !form.price || parseFloat(form.price) <= 0) {
            alert("Cần có tên sản phẩm và giá hợp lệ!");
            return;
        }

        if (isEditing) {
            editProduct(form);
            setMessage("Sản phẩm được cập nhật thành công!");
        } else {
            const newProduct = { ...form, id: Date.now().toString() };
            addProduct(newProduct);
            setMessage("Sản phẩm được thêm thành công!");
        }

        setProducts(getProducts());  // Update product list
        resetForm();
    };

    // Handle edit product
    const handleEdit = (product) => {
        setForm(product);
        setIsEditing(true);
    };

    // Handle delete product
    const handleDeleteProduct = (productId) => {
        const success = deleteProduct(productId);
        if (!success) {
            alert("Không thể xóa sản phẩm!");
            return;
        }
    
        const updatedProducts = products.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts)); // Cập nhật lại localStorage
        alert("Sản phẩm đã được xóa thành công!");
    };

    // Handle new user form changes
    const handleNewUserChange = (e) => {
        const { name, value } = e.target;
        setNewUserForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    // Add a new user
    const handleAddUser = () => {
        if (!newUserForm.username || !newUserForm.password) {
            alert("Tên đăng nhập và mật khẩu không được để trống!");
            return;
        }
        const newUser = { ...newUserForm, id: Date.now().toString() };
        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        setMessage("Tạo tài khoản thành công!");
        setNewUserForm({ username: "", password: "", isAdmin: false });
    };

    // Handle delete user
    const handleDeleteUser = (username) => {
        const updatedUsers = users.filter(user => user.username !== username);
        setUsers(updatedUsers);
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        setMessage("Tài khoản đã được xóa!");
    };

    // Reset the form
    const resetForm = () => {
        setForm({ id: "", name: "", price: "", description: "", image: "" });
        setIsEditing(false);
    };

    return (
        <div className="admin-panel">
            <AdminNavbar /> {/* Thanh điều hướng Admin */}
            <div className="admin-content">
                <div className="left-column">
                    <h3>Quản lý</h3>
                    <ul>
                        <li onClick={() => setSelectedSection("product-management")}>Quản lý sản phẩm</li>
                        <li onClick={() => setSelectedSection("order-management")}>Quản lý đơn hàng</li>
                        <li onClick={() => setSelectedSection("account-management")}>Quản lý tài khoản</li> {/* Thêm mục Quản lý tài khoản */}
                    </ul>
                </div>

                <div className="right-column">
                    {/* Product Management Section */}
                    {selectedSection === "product-management" && (
                        <div className="product-management">
                            <h2>Quản lý sản phẩm</h2>
                            {message && <div className="notification">{message}</div>}

                            {/* Product Form */}
                            <div className="product-form">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Tên sản phẩm"
                                    value={form.name}
                                    onChange={handleChange}
                                />
                                <input
                                    type="number"
                                    name="price"
                                    placeholder="Giá"
                                    value={form.price}
                                    onChange={handleChange}
                                />
                                <textarea
                                    name="description"
                                    placeholder="Mô tả"
                                    value={form.description}
                                    onChange={handleChange}
                                ></textarea>
                                <input
                                    type="text"
                                    name="image"
                                    placeholder="URL hình ảnh"
                                    value={form.image}
                                    onChange={handleChange}
                                />
                                <button onClick={handleSubmit}>
                                    {isEditing ? "Cập nhật sản phẩm" : "Thêm sản phẩm"}
                                </button>
                                {isEditing && <button onClick={resetForm}>Hủy</button>}
                            </div>

                            {/* List of products */}
                            <h3>Danh sách sản phẩm</h3>
                            <ul className="product-list">
                                {products.map((product) => (
                                    <li key={product.id} className="product-item">
                                        <div className="product-info">
                                            {product.image && (
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    width="50"
                                                    className="product-image"
                                                />
                                            )}
                                            <span>
                                                {product.name} - {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
                                            </span>
                                        </div>
                                        <div className="product-actions">
                                            <button onClick={() => handleEdit(product)} className="edit-btn">
                                                Sửa
                                            </button>
                                            <button className="delete-btn" onClick={() => handleDeleteProduct(product.id)}>
                                                Xóa
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Order Management Section */}
                    {selectedSection === "order-management" && (
                        <div className="order-management">
                            <h2>Quản lý đơn hàng</h2>
                            {/* Display customer info if available */}
                            <h3>Thông tin khách hàng</h3>
                            {customerInfo ? (
                                <div className="customer-info">
                                    <p><strong>Name:</strong> {customerInfo.name}</p>
                                    <p><strong>Phone:</strong> {customerInfo.phone}</p>
                                    <p><strong>Address:</strong> {customerInfo.address}</p>
                                    <p><strong>Payment Method:</strong> {customerInfo.paymentMethod}</p>
                                    {customerInfo.paymentMethod === "card" && (
                                        <>
                                            <p><strong>Card Number:</strong> {customerInfo.cardNumber}</p>
                                            <p><strong>Expiry Date:</strong> {customerInfo.cardExpiry}</p>
                                            <p><strong>CVV:</strong> {customerInfo.cardCVV}</p>
                                        </>
                                    )}
                                    {customerInfo.paymentMethod === "e-wallet" && (
                                        <>
                                            <p><strong>Wallet Provider:</strong> {customerInfo.walletProvider}</p>
                                            <p><strong>Wallet Number:</strong> {customerInfo.walletNumber}</p>
                                        </>
                                    )}
                                </div>
                            ) : (
                                <p>No customer information available.</p>
                            )}

                            {/* Sample Order List */}
                            <h3>Danh sách đơn hàng</h3>
                            <ul className="order-list">
                                <li className="order-item">
                                    <div className="order-info">
                                        <span><strong>Order ID:</strong> #12345</span>
                                        <span><strong>Customer:</strong> {customerInfo.name}</span>
                                        <span><strong>Total:</strong> 500,000 VND</span>
                                    </div>
                                    <div className="order-actions">
                                        <button>View Order</button>
                                        <button>Ship Order</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )}

                    {/* Account Management Section */}
                    {selectedSection === "account-management" && (
                        <div className="account-management">
                            <h2>Quản lý tài khoản</h2>
                            {message && <div className="notification">{message}</div>}

                            {/* New User Form */}
                            <div className="new-user-form">
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Tên đăng nhập"
                                    value={newUserForm.username}
                                    onChange={handleNewUserChange}
                                />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Mật khẩu"
                                    value={newUserForm.password}
                                    onChange={handleNewUserChange}
                                />
                                <label>
                                    <input
                                        type="checkbox"
                                        name="isAdmin"
                                        checked={newUserForm.isAdmin}
                                        onChange={(e) => setNewUserForm({ ...newUserForm, isAdmin: e.target.checked })}
                                    />
                                    Admin
                                </label>
                                <button onClick={handleAddUser}>Thêm tài khoản</button>
                            </div>

                            {/* List of users */}
                            <h3>Danh sách tài khoản</h3>
                            <ul className="user-list">
                                {users.map((user) => (
                                    <li key={user.id} className="user-item">
                                        <span>{user.username}</span>
                                        <button onClick={() => handleDeleteUser(user.username)} className="delete-btn">Xóa</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
