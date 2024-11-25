import React, { useState, useEffect, useCallback } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = ({ products = [], addToCart, bestSellers = [] }) => {
  const [visibleProducts, setVisibleProducts] = useState([]); // Danh sách sản phẩm hiển thị
  const [currentIndex, setCurrentIndex] = useState(10); // Chỉ số của sản phẩm tiếp theo để hiển thị
  const itemsPerPage = 10; // Số sản phẩm tải thêm mỗi lần

  // Hàm lấy sản phẩm và phân trang
  const getVisibleProducts = useCallback(() => {
    return products.slice(0, currentIndex);
  }, [products, currentIndex]);

  useEffect(() => {
    setVisibleProducts(getVisibleProducts()); // Lấy sản phẩm hiển thị mỗi khi sản phẩm thay đổi
  }, [getVisibleProducts]);

  const loadMore = () => {
    setCurrentIndex(prevIndex => prevIndex + itemsPerPage); // Tải thêm sản phẩm
  };

  return (
    <div className="product-list">
      {/* Hiển thị sản phẩm bán chạy (không lọc theo giá) */}
      {bestSellers && bestSellers.length > 0 && (
        <div className="best-sellers">
          <h2>Sản phẩm bán chạy</h2>
          <div className="product-list">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </div>
      )}

      {/* Hiển thị sản phẩm */}
      {visibleProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}

      {/* Nút Xem thêm chỉ hiển thị nếu có sản phẩm còn lại để hiển thị */}
      {visibleProducts.length < products.length && (
        <div className="pagination-controls">
          <button onClick={loadMore}>Xem thêm</button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
