import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Nav/Navbar';
import Banner from './components/banner';
import ProductList from './components/ProductList';
import Cart from './components/card';
import Checkout from './components/Checkout';
import About from './components/About';
import Account from './Auth/Account';
import Admin from './Auth/AdminPanel';
import User from './Auth/UserInfo';
import ProductDetail from './components/ProductDetail';
import Footer from './Nav/Footer';
import products, { filterProducts, addToCart, removeFromCart, getBestSellingProducts } from './Data/ProductData';
import './Home.css';
import { useUserContext } from './UserContext';

const Home = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [category, setCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [cart, setCart] = useState([]);
    const [visibleCount, setVisibleCount] = useState(20); // Initial products visible
    const [bestSellingProducts, setBestSellingProducts] = useState([]);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(50000000);
    const { isLogin, currentUser } = useUserContext();
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    useEffect(() => {
        setBestSellingProducts(getBestSellingProducts(products));
    }, []);

    useEffect(() => {
        if (!isLogin && (location.pathname === "/cart" || location.pathname === "/checkout")) {
            navigate('/account');
        }
    }, [isLogin, location.pathname, navigate]);

    const handleSearch = (searchTerm, category) => {
        const result = filterProducts(products, searchTerm, category);
        setFilteredProducts(result);
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

    const filterProductsByPrice = (min, max) => {
        return products.filter(product => product.price >= min && product.price <= max);
    };

    const handlePriceFilter = () => {
        const filtered = filterProductsByPrice(minPrice, maxPrice);
        setFilteredProducts(filtered);
    };

    const formatPrice = (price) => {
        return price.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });
    };

    const handleSeeMore = () => {
        setVisibleCount(visibleCount + 20); // Load more products
    };

    return (
        <>
            {!currentUser?.isAdmin && (
                <Navbar
                    onSearch={handleSearch}
                    category={category}
                    setCategory={setCategory}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
            )}

            {location.pathname === "/" && !currentUser?.isAdmin && <Banner />}

            <div className="app">
                {location.pathname === "/" && !currentUser?.isAdmin && (
                    <div className="best-selling">
                        <h2>Best selling products</h2>
                        <ProductList
                            products={bestSellingProducts}
                            addToCart={handleAddToCart}
                        />
                    </div>
                )}

                {!currentUser?.isAdmin && (
                    <div
                        className="filter-toggle"
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        title="Filter by Price"
                    >
                        <span className="filter-icon">{isFilterOpen ? '-' : '+'}</span>
                    </div>
                )}

                {isFilterOpen && !currentUser?.isAdmin && (
                    <div className="price-filter">
                        <h3>Filter by Price</h3>
                        <div className="slider-container">
                            <input
                                type="range"
                                min="175000"
                                max="50000000"
                                step="1000"
                                value={minPrice}
                                onChange={(e) => setMinPrice(Number(e.target.value))}
                                className="slider"
                            />
                            <input
                                type="range"
                                min="175000"
                                max="50000000"
                                step="1000"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(Number(e.target.value))}
                                className="slider"
                            />
                        </div>
                        <div className="slider-values">
                            <span>{`Min Price: ${formatPrice(minPrice)}`}</span>
                            <span>{`Max Price: ${formatPrice(maxPrice)}`}</span>
                        </div>
                        <button className='btn-price' onClick={handlePriceFilter}>Apply Price Filter</button>
                    </div>
                )}

                <Routes>
                    <Route
                        path="/"
                        element={
                            <ProductList
                                products={filteredProducts.slice(0, visibleCount)}
                                addToCart={handleAddToCart}
                            />
                        }
                    />
                    <Route path="/cart" element={isLogin ? <Cart cartItems={cart} removeFromCart={handleRemoveFromCart} updateQuantity={handleUpdateQuantity} /> : <Account />} />
                    <Route path="/checkout" element={isLogin ? <Checkout cartItems={cart} clearCart={clearCart} /> : <Account />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/account" element={isLogin ? (currentUser?.isAdmin ? <Admin /> : <User />) : <Account />} />
                    <Route path="/admin" element={isLogin && currentUser?.isAdmin ? <Admin /> : <Account />} />
                    <Route path="/product/:id" element={<ProductDetail products={products} addToCart={handleAddToCart} />} />
                </Routes>

                {/* Show See More Button */}
                {filteredProducts.length > visibleCount && (
                    <button className="see-more-btn" onClick={handleSeeMore}>
                        See More
                    </button>
                )}
            </div>

            {!currentUser?.isAdmin && <Footer />}
        </>
    );
};

export default Home;
