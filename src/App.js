// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Nav/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/card';
import Checkout from './components/Checkout';
import About from './components/About'; // Thay Orders bằng About
import Account from './Auth/Account'; 
import './Nav/Navbar.css';
import productImage1 from './assets/images/image1.jpg'; 
import productImage2 from './assets/images/image2.jpg';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'iPhone 16 Pro Max 256GB', price: 34590000, category: 'Electronics', image: productImage1 },
    { id: 2, name: 'Lập trình và cuộc sống', price: 200000, category: 'Books', image: productImage2 },
    { id: 3, name: 'iPhone 14 Pro Max 256GB', price: 34590000, category: 'Electronics', image: productImage1 },
    { id: 4, name: 'Áo thun nam', price: 200000, category: 'Clothing', image: productImage1 },
    { id: 5, name: 'Samsung Galaxy S21', price: 25000000, category: 'Electronics', image: productImage1 },
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products); // State để lưu sản phẩm đã lọc
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Hàm tìm kiếm và lọc sản phẩm theo từ khóa và danh mục
  const handleSearch = (searchTerm, category) => {
    let filtered = [...products]; // Sao chép mảng sản phẩm ban đầu để tránh thay đổi trực tiếp

    // Lọc theo danh mục
    if (category !== 'All') {
      filtered = filtered.filter(product => product.category === category);
    }

    // Lọc theo từ khóa
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered); // Cập nhật danh sách sản phẩm đã lọc
  };

  return (
    <Router>
      <Navbar onSearch={handleSearch} />
      <div className="app">
        <Routes>
          <Route 
            path="/" 
            element={<ProductList products={filteredProducts} addToCart={addToCart} />} 
          />
          <Route 
            path="/cart" 
            element={<Cart cartItems={cart} removeFromCart={removeFromCart} />} 
          />
          <Route 
            path="/checkout" 
            element={<Checkout cartItems={cart} />} 
          />
          {/* Thay Orders thành About */}
          <Route 
            path="/about" 
            element={<About />} 
          />
          <Route 
            path="/account" 
            element={<Account />} 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
