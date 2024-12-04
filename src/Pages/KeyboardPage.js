import React, { useState, useEffect } from 'react';
import { getProducts } from '../Data/ProductData';
import ProductCard from '../components/ProductCard';
import './Keyboard.css';

const KeyboardPage = ({ addToCart }) => {
  const [groupedKeyboards, setGroupedKeyboards] = useState({});
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [visibleProducts, setVisibleProducts] = useState(10); // Số lượng sản phẩm hiển thị ban đầu

  useEffect(() => {
    const products = getProducts();
    const keyboardProducts = products.filter(product => product.category === 'Keyboard');

    // Nhóm sản phẩm theo thương hiệu
    const brandGroups = keyboardProducts.reduce((groups, product) => {
      const brand = product.brand || 'Unknown Brand';
      groups[brand] = (groups[brand] || []).concat(product);
      return groups;
    }, {});

    setGroupedKeyboards(brandGroups);
  }, []);

  // Xử lý khi người dùng chọn thương hiệu
  const handleBrandSelect = (brand) => {
    if (brand === 'all') {
      setSelectedBrand(null); // Khi chọn "Tất cả thương hiệu", không lọc theo thương hiệu
    } else {
      setSelectedBrand(brand);
    }
  };

  // Xử lý nút "Xem thêm"
  const handleLoadMore = () => {
    setVisibleProducts(prevVisible => prevVisible + 10); // Tăng số lượng sản phẩm hiển thị thêm 10
  };

  return (
    <div className="keyboard-page">
      {/* Sidebar phân loại thương hiệu */}
      <div className="keyboard-sidebar">
        <h2>Bàn Phím Cơ</h2>
        <ul className="brand-list">
          <li 
            key="all" 
            className="brand-item" 
            onClick={() => handleBrandSelect('all')}
          >
            Tất Cả Thương Hiệu
          </li>
          {Object.keys(groupedKeyboards).map((brand) => (
            <li 
              key={brand} 
              className="brand-item" 
              onClick={() => handleBrandSelect(brand)}
            >
              {brand.toUpperCase()} ({groupedKeyboards[brand].length})
            </li>
          ))}
        </ul>
      </div>

      {/* Hiển thị sản phẩm */}
      <div className="keyboard-products">
        <h1>{selectedBrand ? `Thương hiệu: ${selectedBrand}` : 'Tất cả Bàn Phím'}</h1>
        <div className="product-list-key">
          {selectedBrand ? (
            groupedKeyboards[selectedBrand]?.slice(0, visibleProducts).map(product => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))
          ) : (
            // Hiển thị tất cả sản phẩm nếu không có thương hiệu được chọn
            Object.values(groupedKeyboards).flat().slice(0, visibleProducts).map(product => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))
          )}
        </div>
        {/* Nút "Xem thêm" */}
        {Object.values(groupedKeyboards).flat().length > visibleProducts && (
          <button className="load-more-btn" onClick={handleLoadMore}>
            Xem Thêm
          </button>
        )}
      </div>
    </div>
  );
};

export default KeyboardPage;
