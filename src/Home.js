import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Nav/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/card';
import Checkout from './components/Checkout';
import About from './components/About';
import Account from './Auth/Account';
import ProductDetail from './components/ProductDetail';
import productImage1 from './assets/images/image1.jpg';
import productImage2 from './assets/images/image2.jpg';
import './components/components.css'
const Home = () => {
  const [products] = useState([
    { id: 1, name: 'iPhone 16 Pro Max 256GB', price: 34590000, category: 'Electronics', image: productImage1, display: '6.7-inch Super Retina XDR OLED, HDR10, Dolby Vision',
      chipset: 'A16 Bionic', camera: '48 MP (sau), 12 MP (trước)', storage: '256GB', description: 'A premium smartphone with cutting-edge features.' },
    { id: 2, name: 'Lập trình và cuộc sống', price: 200000, category: 'Books', image: productImage2 },
    { id: 3, name: 'iPhone 14 Pro Max 256GB', price: 34590000, category: 'Electronics', image: productImage1 },
    { id: 4, name: 'Áo thun nam', price: 200000, category: 'Clothing', image: productImage1 },
    { id: 5, name: 'Samsung Galaxy S21', price: 25000000, category: 'Electronics', image: productImage1 },
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products); 
  const [category, setCategory] = useState('All'); // State cho category
  const [searchTerm, setSearchTerm] = useState(''); // State cho searchTerm
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
      setCart(cart.map(item => 
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const handleSearch = () => {
    let filtered = [...products];

    // Lọc theo danh mục
    if (category !== 'All') {
      filtered = filtered.filter(product => product.category === category);
    }

    // Lọc theo từ khóa tìm kiếm
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  return (
    <>
      <Navbar 
        onSearch={handleSearch} 
        category={category} 
        setCategory={setCategory}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className="app">
        <Routes>
          <Route path="/" element={<ProductList products={filteredProducts} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cart} removeFromCart={removeFromCart} />} />
          <Route path="/checkout" element={<Checkout cartItems={cart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<Account />} />
          <Route path="/product/:id" element={<ProductDetail products={products} addToCart={addToCart} />} />
        </Routes>
      </div>
    </>
  );
};

export default Home;
