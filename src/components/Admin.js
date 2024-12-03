import React, { useState, useEffect } from "react";
import {
  getProducts,
  addProduct,
  editProduct,
  deleteProduct, // Thêm hàm xóa từ backend (nếu cần)
} from "../Data/ProductData";
import "./Admin.css";

const Admin = () => {
  const [products, setProducts] = useState(getProducts());
  const [form, setForm] = useState({ id: "", name: "", price: "", description: "", image: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState(""); // Thêm trạng thái để lưu thông báo

  // Xử lý thay đổi form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  // Xử lý submit
  const handleSubmit = () => {
    if (!form.name || !form.price) {
      alert("Cần có tên sản phẩm và giá!");
      return;
    }
    if (isEditing) {
      editProduct(form); // Cập nhật sản phẩm trong dữ liệu chính
      setMessage("Sản phẩm được cập nhật thành công!"); // Thông báo chỉnh sửa thành công
    } else {
      const newProduct = { ...form, id: Date.now().toString() };
      addProduct(newProduct); // Thêm sản phẩm mới vào dữ liệu chính
      setMessage("Sản phẩm được thêm thành công!"); // Thông báo thêm thành công
    }
    setProducts(getProducts()); // Lấy danh sách sản phẩm mới
    resetForm();
  };

  // Xử lý chỉnh sửa sản phẩm
  const handleEdit = (product) => {
    setForm(product);
    setIsEditing(true);
  };

  // Xử lý xóa sản phẩm
  const handleDeleteProduct = (productId) => {
    const success = deleteProduct(productId); // Gọi hàm xóa sản phẩm từ dữ liệu chính (hoặc backend)
  
    if (!success) {
      alert("Không thể xóa sản phẩm!");
      return;
    }
  
    // Cập nhật danh sách sản phẩm sau khi xóa
    const updatedProducts = products.filter((product) => product.id !== productId); // Loại bỏ sản phẩm vừa xóa
    setProducts(updatedProducts); // Cập nhật danh sách trong state
    alert("Sản phẩm đã được xóa thành công!"); // Thông báo xóa thành công
  };
  


  // Reset form
  const resetForm = () => {
    setForm({ id: "", name: "", price: "", description: "", image: "" });
    setIsEditing(false);
  };

  // Tự động ẩn thông báo sau 3 giây (tùy chọn)
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="admin-gz">
      <h2>Admin Panel</h2>
      {/* Hiển thị thông báo */}
      {message && <div className="notification">{message}</div>}
      
      <div className="form-gz">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        ></textarea>
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>{isEditing ? "Update Product" : "Add Product"}</button>
        {isEditing && <button onClick={resetForm}>Cancel</button>}
      </div>

      <h3>Product List</h3>
      <ul className="product-lists">
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <span>
                {product.name} - ${product.price}
              </span>
              {product.image && <img src={product.image} alt={product.name} width="50" />}
            </div>
            <button onClick={() => handleEdit(product)} style={{ marginLeft: "450px" }}>
              Edit
            </button>
            <button className="delete" onClick={() => handleDeleteProduct(product.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
