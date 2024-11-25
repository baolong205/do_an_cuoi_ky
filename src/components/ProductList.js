import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import "./ProductList.css";

const ProductList = ({ products = [], addToCart, bestSellers = [] }) => {
  const [visibleProducts, setVisibleProducts] = useState([]); // Danh sách sản phẩm hiển thị
  const [visibleBestSellers, setVisibleBestSellers] = useState([]); // Danh sách sản phẩm bán chạy hiển thị
  const [currentIndex, setCurrentIndex] = useState(10); // Chỉ số của sản phẩm tiếp theo để hiển thị
  const itemsPerPage = 10; // Số sản phẩm tải thêm mỗi lần

  // Cập nhật danh sách sản phẩm khi có thay đổi trong props
  useEffect(() => {
    setVisibleProducts(products.slice(0, itemsPerPage));
    setVisibleBestSellers(bestSellers.slice(0, itemsPerPage));
  }, [products, bestSellers]);

  // Hàm "Xem thêm" để tải thêm sản phẩm
  const loadMore = () => {
    if (currentIndex < products.length) {
      const nextIndex = currentIndex + itemsPerPage;
      setVisibleProducts((prevVisibleProducts) => [
        ...prevVisibleProducts,
        ...products.slice(currentIndex, nextIndex),
      ]);
      setCurrentIndex(nextIndex); // Cập nhật chỉ số của sản phẩm tiếp theo
    }
  };

  return (
    <div className="product-list">
      {/* Hiển thị sản phẩm bán chạy */}
      {bestSellers && bestSellers.length > 0 && (
        <div className="best-sellers">
          <h2>Sản phẩm bán chạy</h2>
          <div className="product-list">
            {visibleBestSellers.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </div>
      )}

      {/* Hiển thị sản phẩm */}
      {visibleProducts.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
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
