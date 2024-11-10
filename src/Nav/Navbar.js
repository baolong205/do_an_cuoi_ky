import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onSearch, category, setCategory, searchTerm, setSearchTerm }) => {
  const handleSearch = () => {
    onSearch(); // Gửi từ khóa và danh mục đến App.js
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">E-commerce</Link>
      </div>
      
      <div className="navbar-search">
        <select 
          className="navbar-search-category" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} // Cập nhật category
        >
          <option>All</option>
          <option>Electronics</option>
          <option>Books</option>
          <option>Clothing</option>
          <option>Furniture</option>
        </select>
        <input 
          type="text" 
          placeholder="Search products..." 
          className="navbar-search-input" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <button className="navbar-search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="navbar-links">
        <Link to="/account" className="navbar-link">Account</Link>
        <Link to="/about" className="navbar-link">About</Link>
        <Link to="/cart" className="navbar-link">
          <i className="fas fa-shopping-cart"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
