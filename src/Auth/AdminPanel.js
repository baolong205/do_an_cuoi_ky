import React, { useState, useEffect } from "react";
import {
    getProducts,
    addProduct,
    editProduct,
    deleteProduct,
} from "../Data/ProductData";
import { useUserContext } from "../UserContext";
import AdminInfo from "./AdminInfo";
import "../Auth/Admin.css";

const Admin = () => {
    const [products, setProducts] = useState(getProducts());
    const [form, setForm] = useState({ id: "", name: "", price: "", description: "", image: "" });
    const [isEditing, setIsEditing] = useState(false);
    const [message, setMessage] = useState("");

    const { currentUser } = useUserContext();

    // Xử lý thay đổi form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    // Xử lý submit
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
        setProducts(getProducts());
        resetForm();
    };

    // Xử lý chỉnh sửa sản phẩm
    const handleEdit = (product) => {
        setForm(product);
        setIsEditing(true);
    };

    // Xử lý xóa sản phẩm
    const handleDeleteProduct = (productId) => {
        if (isEditing && form.id === productId) {
            alert("Không thể xóa sản phẩm đang được chỉnh sửa!");
            return;
        }

        const success = deleteProduct(productId);
        if (!success) {
            alert("Không thể xóa sản phẩm!");
            return;
        }

        setProducts(products.filter((product) => product.id !== productId));
        setMessage("Sản phẩm đã được xóa thành công!");
    };

    // Reset form
    const resetForm = () => {
        setForm({ id: "", name: "", price: "", description: "", image: "" });
        setIsEditing(false);
    };

    // Tự động ẩn thông báo sau 3 giây
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setMessage(""), 3000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <div className="admin-panel">
            <AdminInfo />
            <h2>Quản lý sản phẩm</h2>

            {message && <div className="notification">{message}</div>}

            <div className="form-gz">
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
                <button onClick={handleSubmit}>{isEditing ? "Cập nhật sản phẩm" : "Thêm sản phẩm"}</button>
                {isEditing && <button onClick={resetForm}>Hủy</button>}
            </div>

            <h3>Danh sách sản phẩm</h3>
            <ul className="product-lists">
                {products.map((product) => (
                    <li key={product.id} className="product-item">
                        <div className="product-info">
                            {product.image && (
                                <img src={product.image} alt={product.name} width="50" className="product-image" />
                            )}
                            <span>{product.name} - ${product.price}</span>
                        </div>
                        <div className="product-actions">
                            <button onClick={() => handleEdit(product)} className="edit-btn">Sửa</button>
                            <button className="delete-btn" onClick={() => handleDeleteProduct(product.id)}>Xóa</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Admin;
