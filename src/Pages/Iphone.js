import React, { useState, useEffect, useRef } from "react";
import { getProducts } from "../Data/ProductData";
import ProductCard from "../components/ProductCard";
import "./Iphone.css";

const Iphone = ({ addToCart }) => {
    const [groupedIphones, setGroupedIphones] = useState({});
    const [filters, setFilters] = useState({
        priceRange: "all", // Giá "Tất cả" mặc định
        cameraFeatures: "all", // Camera "Tất cả" mặc định
        specialFeatures: "all", // Tính năng đặc biệt "Tất cả" mặc định
    });
    const brandRefs = useRef({});

    useEffect(() => {
        const products = getProducts();
        const iphoneProducts = products.filter((product) => product.category === "Phone");

        const brandGroups = iphoneProducts.reduce((groups, product) => {
            const brand = product.brand || "Unknown Brand";
            if (!groups[brand]) {
                groups[brand] = [];
            }
            groups[brand].push(product);
            return groups;
        }, {});

        setGroupedIphones(brandGroups);
    }, []);

    const applyFilters = (products) => {
        return products.filter((product) => {
            // Lọc theo giá
            if (filters.priceRange !== "all") {
                const [minPrice, maxPrice] = filters.priceRange;
                if (product.price < minPrice || product.price > maxPrice) return false;
            }

            // Lọc theo tính năng camera
            if (filters.cameraFeatures !== "all") {
                if (!filters.cameraFeatures.every((feature) =>
                    product.cameraFeatures?.includes(feature)
                )) {
                    return false;
                }
            }

            // Lọc theo tính năng đặc biệt
            if (filters.specialFeatures !== "all") {
                if (!filters.specialFeatures.every((feature) =>
                    product.specialFeatures?.includes(feature)
                )) {
                    return false;
                }
            }

            return true;
        });
    };


    const handlePriceSliderChange = (minPrice, maxPrice) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            priceRange: [minPrice, maxPrice]
        }));
    };

    const scrollToBrand = (brand) => {
        const section = brandRefs.current[brand];
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="iphone-container">
            <h1 className="iphone-title">Phone</h1>

            {/* Bộ lọc */}
            <div className="filter-section">
                {/* Lọc giá */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3>Mức giá</h3>
                    <div className="price-slider">
                        <input
                            type="range"
                            min="0"
                            max="30000000"
                            value={filters.priceRange === "all" ? 0 : filters.priceRange[0]}
                            onChange={(e) => handlePriceSliderChange(e.target.value, filters.priceRange[1])}
                        />
                        <input
                            type="range"
                            min="0"
                            max="50000000"
                            value={filters.priceRange === "all" ? 50000000 : filters.priceRange[1]}
                            onChange={(e) => handlePriceSliderChange(filters.priceRange[0], e.target.value)}
                        />
                    </div>
                    <div className="price-value">
                        <span>Giá từ: {filters.priceRange === "all" ? "Tất cả" : filters.priceRange[0]} đ</span>
                        <span>Giá đến: {filters.priceRange === "all" ? "Tất cả" : filters.priceRange[1]} đ</span>
                    </div>
                </div>
            </div>

            {/* Nút chuyển đến từng thương hiệu */}
            <div className="brand-buttons">
                {Object.keys(groupedIphones).map((brand) => (
                    <button key={brand} onClick={() => scrollToBrand(brand)} className="brand-button">
                        {brand}
                    </button>
                ))}
            </div>

            {/* Hiển thị sản phẩm theo thương hiệu */}
            {Object.keys(groupedIphones).length > 0 ? (
                Object.keys(groupedIphones).map((brand) => (
                    <div
                        key={brand}
                        ref={(el) => (brandRefs.current[brand] = el)}
                        className="brand-section"
                    >
                        <h2 className="brand-title">{brand}</h2>
                        <div className="product-g">
                            {applyFilters(groupedIphones[brand]).map((product) => (
                                <ProductCard key={product.id} product={{ ...product }} />
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <p className="no-phones-message">No phones available.</p>
            )}
        </div>
    );
};

export default Iphone;
