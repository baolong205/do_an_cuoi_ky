import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = ({ onSearch, setCategory, searchTerm, setSearchTerm }) => {
  const location = useLocation(); // Lấy vị trí hiện tại
  const handleSearch = () => {
    onSearch(searchTerm, "All"); // Tìm kiếm tất cả sản phẩm khi nhấn nút tìm kiếm
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value, "All");
  };

  // Kiểm tra nếu đang ở trang /account
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
