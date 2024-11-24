import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = ({ onSearch, setCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation(); // Lấy vị trí hiện tại

  const handleSearch = () => {
    onSearch(searchTerm, '');
  };

  // Kiểm tra nếu đang ở trang /account
  const isAccountPage = location.pathname === '/account';

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
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="navbar-search-button" onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div className="navbar-links">
          <Link to="/account" className="navbar-link">Account</Link>
          <Link to="/about" className="navbar-link">About</Link>
          <Link to="/cart" className="navbar-link">
            <i className="fas fa-shopping-cart"></i> Cart
          </Link>
        </div>
      </div>

      {!isAccountPage && (
        <div className="navbar-category-buttons">
          <Link
            to="/"
            className={`navbar-category-btn ${location.pathname === '/' ? 'active' : ''}`}
            onClick={() => {
              setCategory('All');
              onSearch('', 'All'); // Hiển thị tất cả sản phẩm
            }}
          >
            Home
          </Link>
          <Link
            to="/products/Phone"
            className={`navbar-category-btn ${location.pathname.includes('/Phone') ? 'active' : ''}`}
            onClick={() => {
              setCategory('Phone');
              onSearch('', 'Phone'); // Hiển thị sản phẩm Phone
            }}
          >
            Phone
          </Link>
          <Link
            to="/products/Laptop"
            className={`navbar-category-btn ${location.pathname.includes('/Laptop') ? 'active' : ''}`}
            onClick={() => {
              setCategory('Laptop');
              onSearch('', 'Laptop'); // Hiển thị sản phẩm Laptop
            }}
          >
            Laptop
          </Link>
          <Link
            to="/products/Headphone"
            className={`navbar-category-btn ${location.pathname.includes('/Headphone') ? 'active' : ''}`}
            onClick={() => {
              setCategory('Headphone');
              onSearch('', 'Headphone'); // Hiển thị sản phẩm Headphone
            }}
          >
            Headphone
          </Link>
          <Link
            to="/products/Furniture"
            className={`navbar-category-btn ${location.pathname.includes('/Furniture') ? 'active' : ''}`}
            onClick={() => {
              setCategory('Furniture');
              onSearch('', 'Furniture'); // Hiển thị sản phẩm Furniture
            }}
          >
            Furniture
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
