import React, { useState, useEffect } from 'react';
import { getProducts } from '../Data/ProductData';
import ProductCard from '../components/ProductCard';
import './Laptop.css';

const LaptopPage = ({ addToCart }) => {
    const [groupedLaptops, setGroupedLaptops] = useState({}); // Nhóm sản phẩm theo thương hiệu (brand)
    const [allLaptops, setAllLaptops] = useState([]); // Tất cả sản phẩm laptop
    const [visibleCount, setVisibleCount] = useState(20); // Số sản phẩm hiển thị ban đầu cho "Tất cả"
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const products = getProducts(); // Lấy tất cả sản phẩm
        const laptopProducts = products.filter(product => product.category === 'Laptop');

        // Nhóm sản phẩm theo thương hiệu (brand)
        const brandGroups = laptopProducts.reduce((groups, product) => {
            const brand = product.brand || 'Unknown Brand'; // Nếu không có brand, gán là 'Unknown Brand'
            if (!groups[brand]) {
                groups[brand] = [];
            }
            groups[brand].push(product);
            return groups;
        }, {});

        setGroupedLaptops(brandGroups); // Cập nhật state với các nhóm sản phẩm
        setAllLaptops(laptopProducts); // Lưu lại tất cả sản phẩm laptop
    }, []);

    // Xử lý khi nhấn "Xem thêm" cho mục "Tất cả"
    const handleShowMoreAll = () => {
        setLoading(true);
        setTimeout(() => {
            setVisibleCount(prevCount => prevCount + 20); // Hiển thị thêm 20 sản phẩm
            setLoading(false);
        }, 500);
    };

    return (
        <div className="laptop-page">
            <h1>Laptops</h1>

            {/* Hiển thị theo từng thương hiệu */}
            {Object.keys(groupedLaptops).map((brand) => (
                <div key={brand} className="brand-section-laptop">
                    <h2>{brand}</h2>
                    <div className="product-list-laptop">
                        {groupedLaptops[brand].map((product) => (
                            <ProductCard key={product.id} product={product} addToCart={addToCart} />
                        ))}
                    </div>
                </div>
            ))}

            {/* Hiển thị danh sách tất cả sản phẩm */}
            <div className="brand-section-laptop">
                <h2>Tất cả</h2>
                <div className="product-list-laptop">
                    {allLaptops.slice(0, visibleCount).map(product => (
                        <ProductCard key={product.id} product={product} addToCart={addToCart} />
                    ))}
                </div>
                {allLaptops.length > visibleCount && !loading && (
                    <button className="show-more-btn" onClick={handleShowMoreAll}>
                        Xem thêm
                    </button>
                )}
                {loading && <div className="loading">Đang tải...</div>}
            </div>
        </div>
    );
};

export default LaptopPage;
