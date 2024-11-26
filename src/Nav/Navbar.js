// src/Nav/Navbar.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import LOGO from "../assets/Laptop/18Sep24_Free_Upload-removebg-preview.png";

const Navbar = ({ onSearch, setCategory, searchTerm, setSearchTerm, products }) => {
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const location = useLocation();

  const handleSearch = () => {
    onSearch(searchTerm, "All"); // Logic vẫn giữ nguyên
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value, "All"); // Logic vẫn giữ nguyên

    if (value) {
      const suggestions = Array.isArray(products)
        ? products.filter((product) =>
          product.name.toLowerCase().includes(value.toLowerCase())
        ).slice(0, 5)
        : [];
      setSearchSuggestions(suggestions);
    } else {
      setSearchSuggestions([]);
    }
  };

  const isAccountPage = location.pathname === "/account";

  return (
    <nav>
      <div className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src={LOGO} alt="Logo" className="navbar-logo-image" />
          </Link>
        </div>

        <div className="navbar-search">
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            className="navbar-search-input"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button className="navbar-search-button" onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>

          {searchSuggestions.length > 0 && (
            <div className="search-suggestions">
              {searchSuggestions.map((suggestion, index) => (
                <Link
                  to={`/product/${suggestion.id}`}
                  key={index}
                  className="search-suggestion-item"
                  onClick={() => onSearch(suggestion.name, "All")}
                >
                  {suggestion.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="navbar-links">
          <Link to="/account" className="navbar-link">
            Tài khoản
          </Link>
          <Link to="/about" className="navbar-link">
            Về chúng tôi
          </Link>
          <Link to="/cart" className="navbar-link">
            <i className="fas fa-shopping-cart"></i> Giỏ hàng
          </Link>
        </div>
      </div>

      {!isAccountPage && (
        <div className="navbar-category-buttons">
          <Link
            to="/"
            className={`navbar-category-btn ${location.pathname === "/" ? "active" : ""}`}
            onClick={() => {
              setCategory("All");
              onSearch("", "All");
            }}
          >
            Trang chủ
          </Link>
          <Link
            to="/products/Phone"
            className={`navbar-category-btn ${location.pathname.includes("/Phone") ? "active" : ""}`}
            onClick={() => {
              setCategory("Phone");
              onSearch("", "Phone");
            }}
          >
            Điện thoại
          </Link>
          {/* Link đến LaptopPage */}
          <Link
            to="/laptops"
            className={`navbar-category-btn ${location.pathname.includes("/laptops") ? "active" : ""}`}
            onClick={() => {
              setCategory("Laptop");
              onSearch("", "Laptop");
            }}
          >
            Laptop
          </Link>
          <Link
            to="/products/Headphone"
            className={`navbar-category-btn ${location.pathname.includes("/Headphone") ? "active" : ""}`}
            onClick={() => {
              setCategory("Headphone");
              onSearch("", "Headphone");
            }}
          >
            Tai nghe
          </Link>
          <Link
            to="/products/Keyboard"
            className={`navbar-category-btn ${location.pathname.includes("/Keyboard") ? "active" : ""}`}
            onClick={() => {
              setCategory("Keyboard");
              onSearch("", "Keyboard");
            }}
          >
            Bàn phím
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
