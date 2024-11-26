import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; // Biểu tượng kính lúp
import './Navbar.css';

const Navbar = ({ onSearch, category, setCategory, products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation(); // Lấy vị trí hiện tại  
  const productListRef = useRef(null); // Tạo một ref để tham chiếu đến danh sách sản phẩm

  const handleSearch = () => {
    onSearch(searchTerm, category); // Gọi hàm tìm kiếm từ parent
    if (productListRef.current) {
      // Cuộn xuống phần danh sách sản phẩm
      window.scrollTo({
        top: productListRef.current.offsetTop,
        behavior: 'smooth'
      });
    }
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
          <input
            type="text"
            placeholder="Search products..."
            className="navbar-search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Cập nhật term tìm kiếm  
          />
          <button className="navbar-search-button" onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} /> {/* Hiển thị biểu tượng kính lúp */}
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

      {!isAccountPage && (
        <div className="navbar-category-buttons">
          <button
            className={`navbar-category-btn ${category === 'All' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('All')}
          >
            Home
          </button>
          <button
            className={`navbar-category-btn ${category === 'Phone' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('Phone')}
          >
            Phone
          </button>
          <button
            className={`navbar-category-btn ${category === 'Laptop' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('Laptop')}
          >
            Laptop
          </button>
          <button
            className={`navbar-category-btn ${category === 'Headphone' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('Headphone')}
          >
            Headphone
          </button>
          <button
            className={`navbar-category-btn ${category === 'Furniture' ? 'active' : ''}`}
            onClick={() => handleCategoryChange('Furniture')}
          >
            Furniture
          </button>
        </div>
      )}

      {/* Hiển thị danh sách sản phẩm khi có kết quả tìm kiếm */}
      {products && products.length > 0 && searchTerm && (
        <div ref={productListRef} className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{new Intl.NumberFormat('vi-VN').format(product.price)} VND</p>
              <Link to={`/product/${product.id}`}>
                <button className="buy-product-btn">View Details</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
