import React, { useState, useEffect } from "react";
import {
  getProducts,
  addProduct,
  editProduct,
  deleteProduct,
} from "../Data/ProductData";
import AdminNavbar from "./AdminNav"; // Import AdminNavbar
import { useOrderContext } from "../Context/OderContext"; // Import OrderContext
import "./Admin.css";

const AdminPanel = () => {
  const { orders, addOrder, deleteOrder } = useOrderContext(); // Use OrderContext
  const [products, setProducts] = useState(getProducts());
  const [form, setForm] = useState({
    id: "",
    name: "",
    price: "",
    description: "",
    image: "",
    discount: "",
    stock: "",
    rating: "",
    brand: "",
    category: ""
  });
  const [message, setMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedSection, setSelectedSection] = useState("product-management");
  const [newUserForm, setNewUserForm] = useState({
    username: "",
    password: "",
    isAdmin: false,
  });
  const [users, setUsers] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product

  // Load saved data (users) from localStorage
  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(savedUsers); // Load saved users from localStorage
  }, []);

  // Handle form changes for product management
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  // Handle form submit (Add or Edit product)
  const handleSubmit = () => {
    if (!form.name || !form.price || parseFloat(form.price) <= 0) {
      alert("Tên sản phẩm và giá hợp lệ là bắt buộc!");
      return;
    }

    if (isEditing) {
      // Chỉnh sửa sản phẩm hiện tại
      editProduct(form);
      setMessage("Sản phẩm được cập nhật thành công!");

      // Cập nhật sản phẩm trong localStorage
      const updatedProducts = products.map((product) =>
        product.id === form.id ? { ...product, ...form } : product
      );
      setProducts(updatedProducts);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
    } else {
      // Thêm sản phẩm mới
      const newProduct = {
        ...form,
        id: Date.now().toString(),
        discount: form.discount || 0,
        stock: form.stock || 0,
        rating: form.rating || 0,
        brand: form.brand || "",
        category: form.category || "Uncategorized",
      };
      addProduct(newProduct);
      setMessage("Sản phẩm được thêm thành công!");

      // Thêm sản phẩm mới vào localStorage
      const updatedProducts = [...products, newProduct];
      setProducts(updatedProducts);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
    }

    resetForm(); // Đặt lại form sau khi gửi
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
    const updatedUsers = users.filter((user) => user.username !== username);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setMessage("Tài khoản đã được xóa!");
  };

  // Reset the product form
  const resetForm = () => {
    setForm({
      id: "",
      name: "",
      price: "",
      description: "",
      image: "",
      discount: "",
      stock: "",
      rating: "",
      brand: "",
    });
    setIsEditing(false);
  };

  // Handle delete product
  const handleDeleteProduct = (productId) => {
    const success = deleteProduct(productId);
    if (!success) {
      alert("Không thể xóa sản phẩm!");
      return;
    }

    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    alert("Sản phẩm đã được xóa thành công!");
  };

  // Handle editing a product
  const handleEdit = (product) => {
    setForm({
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
      discount: product.discount,
      stock: product.stock,
      rating: product.rating,
      brand: product.brand,
      category: product.category || "",
    });
    setIsEditing(true); // Set editing state to true
  };

  // Handle showing product details
  const handleShowProductDetails = (product) => {
    setSelectedProduct(product);
  };

  // Handle closing the product details view
  const handleCloseProductDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="admin-panel">
      <AdminNavbar /> {/* Admin Navigation */}
      <div className="admin-content">
        <div className="left-column">
          <h3>Quản lý</h3>
          <ul>
            <li onClick={() => setSelectedSection("product-management")}>
              Quản lý sản phẩm
            </li>
            <li onClick={() => setSelectedSection("order-management")}>
              Quản lý đơn hàng
            </li>
            <li onClick={() => setSelectedSection("account-management")}>
              Quản lý tài khoản
            </li>
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
                <input
                  type="number"
                  name="discount"
                  placeholder="Giảm giá (%)"
                  value={form.discount}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="stock"
                  placeholder="Số lượng tồn kho"
                  value={form.stock}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="rating"
                  placeholder="Đánh giá (1-5)"
                  value={form.rating}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="brand"
                  placeholder="Thương hiệu"
                  value={form.brand}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="category"
                  placeholder="Danh mục sản phẩm"
                  value={form.category}
                  onChange={handleChange}
                />
                <button onClick={handleSubmit}>
                  {isEditing ? "Cập nhật sản phẩm" : "Thêm sản phẩm"}
                </button>
                {isEditing && <button onClick={resetForm}>Hủy</button>}
              </div>

              {/* List of products */}
              <h3>Danh sách sản phẩm</h3>
              <ul className="product-list-admin">
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
                        {product.name} -{" "}
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(product.price)}
                      </span>
                    </div>
                    <div className="product-actions">
                      <button
                        onClick={() => handleEdit(product)}
                        className="edit-btn"
                      >
                        Sửa
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        Xóa
                      </button>
                      <button
                        onClick={() => handleShowProductDetails(product)}
                        className="view-btn"
                      >
                        Xem chi tiết
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Product Details Modal */}
          {selectedProduct && (
            <div className="product-details-modal">
              <div className="product-details-content">
                <button onClick={handleCloseProductDetails} className="close-btn">
                  X
                </button>
                <h2>{selectedProduct.name}</h2>
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  width="200"
                />
                <p>{selectedProduct.description}</p>
                <p>
                  Giá:{" "}
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(selectedProduct.price)}
                </p>
                <p>Giảm giá: {selectedProduct.discount}%</p>
                <p>Số lượng tồn kho: {selectedProduct.stock}</p>
                <p>Đánh giá: {selectedProduct.rating} / 5</p>
                <p>Thương hiệu: {selectedProduct.brand}</p>
              </div>
            </div>
          )}

          {/* Order Management Section */}
          {selectedSection === "order-management" && (
            <div className="order-management">
              <h2>Quản lý đơn hàng</h2>
              {orders.length > 0 ? (
                <ul>
                  {orders.map((order) => (
                    <li key={order.id}>
                      <div>Order ID: {order.id}</div>
                      <div>Customer: {order.customerInfo ? order.customerInfo.name : "Unknown"}</div>
                      <div>Total: {order.totalAmount}</div>
                      <div>Status: {order.status}</div>

                      {/* Displaying Cart Items */}
                      <div>
                        <h4>Chi tiết sản phẩm trong đơn hàng:</h4>
                        <ul>
                          {order.cartItems && order.cartItems.length > 0 ? (
                            order.cartItems.map((item) => (
                              <li key={item.product?.id}>
                                <div className="cart-item">
                                  {item.product?.image && (
                                    <img
                                      src={item.product.image}
                                      alt={item.product.name}
                                      width="50"
                                      className="cart-item-image"
                                    />
                                  )}
                                  <span>{item.name || "No name"}</span>
                                  <span>Số lượng: {item.quantity}</span>
                                  <span>
                                    {new Intl.NumberFormat("vi-VN", {
                                      style: "currency",
                                      currency: "VND",
                                    }).format(item.price * item.quantity || 0)}
                                  </span>
                                </div>
                              </li>
                            ))
                          ) : (
                            <p>No items in this order.</p>
                          )}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Chưa có đơn hàng nào!</p>
              )}
            </div>
          )}
          {/* Account Management Section */}
          {selectedSection === "account-management" && (
            <div className="account-management">
              <h2>Quản lý tài khoản</h2>
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
                  Admin:
                  <input
                    type="checkbox"
                    name="isAdmin"
                    checked={newUserForm.isAdmin}
                    onChange={() =>
                      setNewUserForm((prevForm) => ({
                        ...prevForm,
                        isAdmin: !prevForm.isAdmin,
                      }))
                    }
                  />
                </label>
                <button onClick={handleAddUser}>Tạo tài khoản</button>
              </div>

              <h3>Danh sách tài khoản</h3>
              <ul>
                {users.map((user) => (
                  <li key={user.id}>
                    <div>{user.username}</div>
                    <div>
                      <button
                        onClick={() => handleDeleteUser(user.username)}
                        className="delete-btn"
                      >
                        Xóa
                      </button>
                    </div>
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
