import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Layout/Navbar';
import LaptopPage from './Pages/LaptopPage';
import HeadphonePage from './Pages/Headphone';
import Iphone from './Pages/Iphone';
import KeyboardPage from './Pages/KeyboardPage';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import About from './components/About';
import Account from './Auth/Account';
import Admin from './Auth/AdminPanel';
import User from './Auth/UserInfo';
import ProductDetail from './components/ProductDetail';
import Footer from './Layout/Footer';
import { getProducts, filterProducts, addToCart, removeFromCart } from './Data/ProductData'; // Sửa lại import
import './components/ProductList.css';
import { useUserContext } from './Context/UserContext';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const { isLogin, currentUser } = useUserContext();

  // Lấy danh sách sản phẩm từ Local Storage khi component được render
  useEffect(() => {
    const products = getProducts(); // Lấy sản phẩm từ Local Storage
    setFilteredProducts(products); // Cập nhật filteredProducts
  }, []);

  useEffect(() => {
    if (!isLogin && (location.pathname === "/cart" || location.pathname === "/checkout")) {
      navigate('/account');
    }
  }, [isLogin, location.pathname, navigate]);

  const handleSearch = (searchTerm, category) => {
    const result = filterProducts(searchTerm, category); // Đã sửa từ products thành trực tiếp search
    setFilteredProducts(result); // Cập nhật danh sách sản phẩm sau khi lọc
  };

  const handleAddToCart = (product) => {
    const updatedCart = addToCart(cart, product);
    setCart(updatedCart);
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = removeFromCart(cart, productId);
    setCart(updatedCart);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ).filter((item) => item.quantity > 0);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isAdminPage = location.pathname.includes("/admin");

  return (
    <>
      {/* Chỉ hiển thị Navbar và Footer nếu không phải trang Admin */}
      {!isAdminPage && (
        <>
          <Navbar
            onSearch={handleSearch}
            category={category}
            setCategory={setCategory}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            products={filteredProducts}  // Pass filteredProducts to Navbar
          />
        </>
      )}

      <div className="app">
        <Routes>
          <Route path="/" element={<ProductList products={filteredProducts} addToCart={handleAddToCart} />} />
          <Route path="/laptops" element={<LaptopPage addToCart={handleAddToCart} />} />
          <Route path="/iphones" element={<Iphone addToCart={handleAddToCart} />} />
          <Route path="/products/Keyboard" element={<KeyboardPage addToCart={handleAddToCart} />} />
          <Route path="/products/Headphone" element={<HeadphonePage addToCart={handleAddToCart} />} />
          <Route path="/cart" element={isLogin ? <Cart cartItems={cart} removeFromCart={handleRemoveFromCart} updateQuantity={handleUpdateQuantity} /> : <Account />} />
          <Route path="/checkout" element={isLogin ? <Checkout cartItems={cart} clearCart={clearCart} /> : <Account />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={isLogin ? (currentUser?.isAdmin ? <Admin /> : <User />) : <Account />} />
          <Route path="/admin" element={isLogin && currentUser?.isAdmin ? <Admin /> : <Account />} />
          <Route path="/product/:id" element={<ProductDetail products={filteredProducts} addToCart={handleAddToCart} />} />
        </Routes>
      </div>

      {/* Hiển thị Footer chỉ khi không phải trang Admin */}
      {!isAdminPage && <Footer />}
    </>
  );
};

export default Home;
