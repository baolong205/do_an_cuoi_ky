import React, { useState, useEffect } from 'react';
import { getProducts } from '../Data/ProductData'; // Lấy sản phẩm từ ProductData.js
import ProductCard from '../components/ProductCard'; // Import component ProductCard
import './Keyboard.css'; // File CSS cho trang Keyboard

const KeyboardPage = ({ addToCart }) => {
  const [groupedKeyboards, setGroupedKeyboards] = useState({}); // Nhóm sản phẩm theo thương hiệu (brand)

  useEffect(() => {
    const products = getProducts(); // Lấy tất cả sản phẩm
    const keyboardProducts = products.filter(product => product.category === 'Keyboard');

    // Nhóm sản phẩm theo thương hiệu (brand)
    const brandGroups = keyboardProducts.reduce((groups, product) => {
      const brand = product.brand || 'Unknown Brand'; // Nếu không có brand, gán là 'Unknown Brand'
      if (!groups[brand]) {
        groups[brand] = [];
      }
      groups[brand].push(product);
      return groups;
    }, {});

    setGroupedKeyboards(brandGroups); // Cập nhật state với các nhóm sản phẩm
  }, []);

  return (
    <div className="keyboard-page">
      <h1>Keyboards</h1>
      {Object.keys(groupedKeyboards).length > 0 ? (
        Object.keys(groupedKeyboards).map((brand) => (
          <div key={brand} className="brand-section-key">
            <h2>{brand}</h2>
            <div className="product-list-key">
              {groupedKeyboards[brand].map((product) => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>No keyboards available.</p> // Hiển thị thông báo nếu không có sản phẩm bàn phím
      )}
    </div>
  );
};

export default KeyboardPage;
