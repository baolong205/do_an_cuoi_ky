import React, { useState, useEffect } from 'react';
import { getProducts } from '../Data/ProductData'; // Lấy sản phẩm từ ProductData.js
import ProductCard from '../components/ProductCard'; // Import component ProductCard
import './Headphone.css'; // File CSS cho trang Headphone

const HeadphonePage = ({ addToCart }) => {
  const [groupedHeadphones, setGroupedHeadphones] = useState({}); // Nhóm sản phẩm theo thương hiệu (brand)
  const [selectedBrand, setSelectedBrand] = useState(''); // Thương hiệu đã chọn
  const [visibleProducts, setVisibleProducts] = useState(10); // Số sản phẩm hiển thị mặc định là 10

  useEffect(() => {
    const products = getProducts(); // Lấy tất cả sản phẩm
    const headphoneProducts = products.filter(product => product.category === 'Headphone');

    // Nhóm sản phẩm theo thương hiệu (brand)
    const brandGroups = headphoneProducts.reduce((groups, product) => {
      const brand = product.brand || 'Unknown Brand'; // Nếu không có brand, gán là 'Unknown Brand'
      if (!groups[brand]) {
        groups[brand] = [];
      }
      groups[brand].push(product);
      return groups;
    }, {});

    setGroupedHeadphones(brandGroups); // Cập nhật state với các nhóm sản phẩm
  }, []);

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand === 'all' ? '' : brand); // Nếu chọn 'all', hiển thị tất cả sản phẩm
  };

  const handleLoadMore = () => {
    setVisibleProducts(visibleProducts + 10); // Tăng số lượng sản phẩm hiển thị khi nhấn "Load More"
  };

  return (
    <div className="headphone-page">
      {/* Sidebar phân loại thương hiệu */}
      <div className="headphone-sidebar">
        <h2>Tai Nghe</h2>
        <ul className="brand-list">
          <li 
            key="all" 
            className="brand-item-headphone"
            onClick={() => handleBrandSelect('all')}
          >
            Tất Cả Thương Hiệu
          </li>
          {Object.keys(groupedHeadphones).map((brand) => (
            <li 
              key={brand} 
              className="brand-item" 
              onClick={() => handleBrandSelect(brand)}
            >
              {brand.toUpperCase()} ({groupedHeadphones[brand].length})
            </li>
          ))}
        </ul>
      </div>

      {/* Hiển thị sản phẩm */}
      <div className="headphone-products">
        <h1>{selectedBrand ? `Thương hiệu: ${selectedBrand}` : 'Tất cả Tai Nghe'}</h1>
        <div className="product-list-headphone">
          {selectedBrand ? (
            groupedHeadphones[selectedBrand]?.slice(0, visibleProducts).map(product => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))
          ) : (
            // Hiển thị tất cả sản phẩm nếu không có thương hiệu được chọn
            Object.values(groupedHeadphones).flat().slice(0, visibleProducts).map(product => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))
          )}
        </div>
        {visibleProducts < Object.values(groupedHeadphones).flat().length && (
          <button className="load-more-btn-headphone" onClick={handleLoadMore}>Xem Thêm</button>
        )}
      </div>
    </div>
  );
};

export default HeadphonePage;
