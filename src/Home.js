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
import Footer from './Nav/Footer';
import productImage1 from './assets/images/image1.jpg';
import productImage2 from './assets/images/image2.jpg';
import productImage3 from './assets/images/image3.jpg';
import productImage4 from './assets/images/image4.jpg';
import productImage5 from './assets/images/image5.jpg';
import productImage6 from './assets/images/image6.jpg';
import productImage7 from './assets/images/image7.jpg';
import productImage8 from './assets/images/image8.jpg';
import productImage9 from './assets/images/image9.jpg';
import productImage10 from './assets/images/image10.jpg';
import productImage11 from './assets/images/image11.jpg';
import productImage12 from './assets/images/image12.jpg';
import productImage13 from './assets/images/image13.jpg';
import productImage14 from './assets/images/image14.jpg';
import './components/components.css';

const Home = () => {
    const [products] = useState([
        { id: 1, name: 'iPhone 16 Pro Max 256GB', price: 34590000, category: 'Electronics', image: productImage1, description: 'Premium smartphone with A16 Bionic chipset.' },
        { id: 2, name: 'Lập trình và cuộc sống', price: 200000, category: 'Books', image: productImage2, description: 'Book on programming and life.' },
        { id: 3, name: 'iPhone 14 Pro Max 256GB', price: 34590000, category: 'Electronics', image: productImage3, description: 'Smartphone with Super Retina XDR OLED.' },
        { id: 4, name: 'Áo thun nam', price: 200000, category: 'Clothing', image: productImage4, description: 'Stylish men\'s t-shirt made from high-quality cotton.' },
        { id: 5, name: 'Samsung Galaxy S21', price: 25000000, category: 'Electronics', image: productImage5, description: 'Flagship smartphone with stunning display and performance.' },
        { id: 6, name: 'MacBook Air M2 256GB', price: 29000000, category: 'Electronics', image: productImage6, description: 'Lightweight and powerful laptop with Apple M2 chip.' },
        { id: 7, name: 'iPad Pro 12.9-inch 2022', price: 28990000, category: 'Electronics', image: productImage7, description: 'Large screen tablet with powerful performance.' },
        { id: 8, name: 'T-shirt Nữ Xinh Xắn', price: 150000, category: 'Clothing', image: productImage8, description: 'Beautiful and comfortable women\'s t-shirt.' },
        { id: 9, name: 'Bàn làm việc văn phòng', price: 1800000, category: 'Furniture', image: productImage9, description: 'Elegant office desk with ample storage.' },
        { id: 10, name: 'Bàn phím cơ RGB', price: 1000000, category: 'Electronics', image: productImage10, description: 'Mechanical keyboard with customizable RGB lighting.' },
        { id: 11, name: 'Lò vi sóng Sharp 20L', price: 1800000, category: 'Furniture', image: productImage11, description: 'Compact microwave with smart functions.' },
        { id: 12, name: 'Áo khoác nữ mùa đông', price: 550000, category: 'Clothing', image: productImage12, description: 'Warm and stylish winter jacket for women.' },
        { id: 13, name: 'Tủ lạnh Panasonic 250L', price: 8000000, category: 'Furniture', image: productImage13, description: 'Energy-efficient refrigerator with modern design.' },
        { id: 14, name: 'Sách Python cho người mới bắt đầu', price: 350000, category: 'Books', image: productImage14, description: 'Beginner-friendly book on Python programming.' },
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
            <Footer />
        </>
    );
};

export default Home;
