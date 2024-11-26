import React, { useState, useEffect, useCallback, useRef } from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";
import IM1 from "../assets/anh do-an/iphone-16-blue-600x600.png";
import IM2 from "../assets/anh do-an/asus-vivobook-x1404za-i5-nk376w-thumb-600x600.jpg";
import IM3 from "../assets/anh do-an/razer-blackwidow-v3.jpg";
import IM4 from "../assets/anh do-an/acer-aspire-3-a314-42p-r3b3-r7-nxksfsv001-thumb-600x600.jpg";

// Giả sử đây là danh sách sản phẩm bán chạy của bạn (có thể thay đổi tùy vào dữ liệu thực tế)
const bestSellingProducts = [
  {
    id: 8,
    name: "Iphone 16",
    price: 4000000,
    image: IM1,
    rating: 4.5,
  },
  {
    id: 12,
    name: "ASUS ViVoBook 1404",
    price: 1500900,
    image: IM2,
    rating: 4,
  },
  {
    id: 21,
    name: "Razer BlackWindow 3",
    price: 200000,
    image: IM3,
    rating: 3.8,
  },
  {
    id: 13,
    name: "Acer Aspire 3",
    price: 2500000,
    image: IM4,
    rating: 4.2,
  },
];

const ProductList = ({ products = [], addToCart }) => {
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(15);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 15;

  const getVisibleProducts = useCallback(() => {
    return products.slice(0, currentIndex);
  }, [products, currentIndex]);

  useEffect(() => {
    setVisibleProducts(getVisibleProducts());
  }, [getVisibleProducts]);

  const loadMore = () => {
    if (loading || visibleProducts.length >= products.length) return;
    setLoading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
      setLoading(false);
    }, 500);
  };

  // Phân loại sản phẩm theo danh mục
  const categorizedProducts = products.reduce((categories, product) => {
    if (!categories[product.category]) {
      categories[product.category] = [];
    }
    categories[product.category].push(product);
    return categories;
  }, {});

  // Dùng ref để tham chiếu đến phần tử chứa các sản phẩm
  const productContainersRef = useRef({});
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e, category) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setScrollLeft(productContainersRef.current[category].scrollLeft);
    productContainersRef.current[category].classList.add("dragging");
  };

  const onMouseMove = (e, category) => {
    if (!isDragging) return;
    const x = e.clientX - startX;
    productContainersRef.current[category].scrollLeft = scrollLeft - x;
  };

  const onMouseUp = (category) => {
    setIsDragging(false);
    productContainersRef.current[category].classList.remove("dragging");
  };

  const onMouseLeave = (category) => {
    if (isDragging) {
      setIsDragging(false);
      productContainersRef.current[category].classList.remove("dragging");
    }
  };

  return (
    <div className="product-list-container">
      {/* Hiển thị sản phẩm bán chạy */}
      {bestSellingProducts && bestSellingProducts.length > 0 && (
        <div className="best-sellers">
          <h2>🔥 Sản phẩm bán chạy</h2>
          <div
            className="category-products"
            ref={(el) => (productContainersRef.current["best-sellers"] = el)}
            onMouseDown={(e) => onMouseDown(e, "best-sellers")}
            onMouseMove={(e) => onMouseMove(e, "best-sellers")}
            onMouseUp={() => onMouseUp("best-sellers")}
            onMouseLeave={() => onMouseLeave("best-sellers")}
          >
            {bestSellingProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>
      )}

      {/* Hiển thị các sản phẩm theo danh mục */}
      {Object.keys(categorizedProducts).map((category) => (
        <div className="category-section" key={category}>
          <h2 className="category-title">{category}</h2>
          <div
            className="category-products"
            ref={(el) => (productContainersRef.current[category] = el)}
            onMouseDown={(e) => onMouseDown(e, category)}
            onMouseMove={(e) => onMouseMove(e, category)}
            onMouseUp={() => onMouseUp(category)}
            onMouseLeave={() => onMouseLeave(category)}
          >
            {categorizedProducts[category].map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Hiển thị tất cả sản phẩm */}
      <div className="main-products-section">
        <h2 className="section-title">📦 Tất cả sản phẩm</h2>

        {/* Nếu không có sản phẩm */}
        {products.length === 0 && (
          <p className="no-products">Không tìm thấy sản phẩm nào.</p>
        )}

        {/* Hiển thị sản phẩm dạng grid */}
        <div className="product-grid">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>

        {/* Nút xem thêm sản phẩm */}
        {visibleProducts.length < products.length && !loading && (
          <div className="pagination-controls">
            <button className="load-more-button" onClick={loadMore}>
              Xem thêm sản phẩm
            </button>
          </div>
        )}

        {/* Trạng thái đang tải */}
        {loading && <div className="loading">Đang tải...</div>}
      </div>
    </div>
  );
}

export default ProductList;
