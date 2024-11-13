import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onSearch, category, setCategory }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation(); // Lấy vị trí hiện tại  

  const handleSearch = () => {
    onSearch(searchTerm, category); // Gọi hàm tìm kiếm từ parent  
  };

  const handleCategoryChange = (category) => {
    setCategory(category);
    onSearch(searchTerm, category); // Gọi hàm tìm kiếm khi thay đổi danh mục  
  };

  // Ẩn navbar khi ở trang Account  
  const isAccountPage = location.pathname === '/account';

  return (
    <nav>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">E-commerce</Link>
        </div>

        <div className="navbar-search">
          <select
            className="navbar-search-category"
            value={category}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Phone">Phone</option>
            <option value="Laptop">Laptop</option>
            <option value="Headphone">Headphone</option>
            <option value="Furniture">Furniture</option>
          </select>

          <input
            type="text"
            placeholder="Search products..."
            className="navbar-search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Cập nhật term tìm kiếm  
          />

          <button className="navbar-search-button" onClick={handleSearch}>
            Search
          </button>
        </div>

        <div className="navbar-links">
          <Link to="/account" className="navbar-link">Account</Link>
          <Link to="/about" className="navbar-link">About</Link>
          <Link to="/cart" className="navbar-link">
            <i className="fas fa-shopping-cart"></i> Cart
          </Link>
        </div>
      </nav>
      <>
        {!isAccountPage && (
          <div className="navbarz">
            <div class="button-container">
              <button className="navbar-button" onClick={() => handleCategoryChange('All')}>All</button>
              <button className="navbar-button" onClick={() => handleCategoryChange('Phone')}>Phone</button>
              <button className="navbar-button" onClick={() => handleCategoryChange('Laptop')}>Laptop</button>
              <button className="navbar-button" onClick={() => handleCategoryChange('Headphone')}>Headphone</button>
              <button className="navbar-button" onClick={() => handleCategoryChange('Furniture')}>Furniture</button>
            </div>
          </div>
        )}
      </>
    </nav>


  );
};

export default Navbar;
