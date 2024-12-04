import React, { useState, useEffect } from 'react';
import { getProducts } from '../Data/ProductData'; // Lấy sản phẩm từ ProductData.js
import ProductCard from '../components/ProductCard'; // Import component ProductCard
import './Headphone.css'; // File CSS cho trang Headphone

const HeadphonePage = ({ addToCart }) => {
  const [groupedHeadphones, setGroupedHeadphones] = useState({}); // Nhóm sản phẩm theo thương hiệu (brand)

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

  return (
    <div className="Headphone-page">
      <h1>Headphones</h1>
      {Object.keys(groupedHeadphones).length > 0 ? (
        Object.keys(groupedHeadphones).map((brand) => (
          <div key={brand} className="brand-section-head">
            <h2>{brand}</h2>
            <div className="H_product-list">
              {groupedHeadphones[brand].map((product) => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>No headphones available.</p> // Hiển thị thông báo nếu không có sản phẩm tai nghe
      )}
    </div>
  );
};

export default HeadphonePage;
