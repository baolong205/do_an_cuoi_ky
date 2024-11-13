import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Nav/Navbar';
import Banner from './components/banner';
import ProductList from './components/ProductList';
import Cart from './components/card';
import Checkout from './components/Checkout';
import About from './components/About';
import Account from './Auth/Account';
import ProductDetail from './components/ProductDetail';
import Footer from './Nav/Footer';
import products, { filterProducts, addToCart, removeFromCart } from './Data/ProductData';

const Home = () => {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [category, setCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [cart, setCart] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;

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

    // Pagination logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const nextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
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
            {location.pathname === "/" && <Banner />}
            <div className="app">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ProductList
                                products={currentProducts}
                                addToCart={handleAddToCart}
                                currentPage={currentPage}
                                nextPage={nextPage}
                                prevPage={prevPage}
                                hasNextPage={indexOfLastProduct < filteredProducts.length}
                            />
                        }
                    />
                    <Route path="/cart" element={<Cart cartItems={cart} removeFromCart={handleRemoveFromCart} />} />
                    <Route path="/checkout" element={<Checkout cartItems={cart} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/product/:id" element={<ProductDetail products={products} addToCart={handleAddToCart} />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
};

export default Home;
