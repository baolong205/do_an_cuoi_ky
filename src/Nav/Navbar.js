import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = ({ onSearch, setCategory, searchTerm, setSearchTerm, products }) => {
  const [searchSuggestions, setSearchSuggestions] = useState([]); // Lưu trữ gợi ý tìm kiếm
  const location = useLocation();

  const handleSearch = () => {
    onSearch(searchTerm, "All"); // Tìm kiếm tất cả sản phẩm khi nhấn nút tìm kiếm
  
    // Cuộn xuống phần sản phẩm
    const productSection = document.getElementById("products-section");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" }); // Cuộn mượt đến phần sản phẩm
    }
  };
  

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value, "All");

    // Kiểm tra nếu products tồn tại và là mảng trước khi sử dụng filter
    if (value) {
      const suggestions = Array.isArray(products) ? products.filter(product =>
        product.name.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 5) : []; // Giới hạn 5 gợi ý
      setSearchSuggestions(suggestions);
    } else {
      setSearchSuggestions([]); // Nếu không có giá trị, xóa gợi ý
    }
  };

  const isAccountPage = location.pathname === "/account";

  return (
    <nav>
      <div className="navbar">
        <div className="navbar-logo">
          <Link to="/">E-commerce</Link>
        </div>

        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search products..."
            className="navbar-search-input"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button className="navbar-search-button" onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>

          {/* Hiển thị gợi ý tìm kiếm nếu có */}
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
            Account
          </Link>
          <Link to="/about" className="navbar-link">
            About
          </Link>
          <Link to="/cart" className="navbar-link">
            <i className="fas fa-shopping-cart"></i> Cart
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
              onSearch("", "All"); // Hiển thị tất cả sản phẩm
            }}
          >
            Home
          </Link>
          <Link
            to="/products/Phone"
            className={`navbar-category-btn ${location.pathname.includes("/Phone") ? "active" : ""}`}
            onClick={() => {
              setCategory("Phone");
              onSearch("", "Phone"); // Hiển thị sản phẩm Phone
            }}
          >
            Phone
          </Link>
          <Link
            to="/products/Laptop"
            className={`navbar-category-btn ${location.pathname.includes("/Laptop") ? "active" : ""}`}
            onClick={() => {
              setCategory("Laptop");
              onSearch("", "Laptop"); // Hiển thị sản phẩm Laptop
            }}
          >
            Laptop
          </Link>
          <Link
            to="/products/Headphone"
            className={`navbar-category-btn ${location.pathname.includes("/Headphone") ? "active" : ""}`}
            onClick={() => {
              setCategory("Headphone");
              onSearch("", "Headphone"); // Hiển thị sản phẩm Headphone
            }}
          >
            Headphone
          </Link>
          <Link
            to="/products/Keyboard"
            className={`navbar-category-btn ${location.pathname.includes("/Keyboard") ? "active" : ""}`}
            onClick={() => {
              setCategory("Keyboard");
              onSearch("", "Keyboard"); // Hiển thị sản phẩm Keyboard
            }}
          >
            Keyboard
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
