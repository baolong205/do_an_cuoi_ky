import React, { useState, useEffect } from 'react';
import { getProducts } from '../Data/ProductData'; // Giả sử getProducts là hàm lấy tất cả sản phẩm
import ProductCard from '../components/ProductCard'; // Import ProductCard
import './Laptop.css';

const LaptopPage = ({ addToCart }) => {
    const [laptops, setLaptops] = useState([]);
    const [groupedLaptops, setGroupedLaptops] = useState({});

    useEffect(() => {
        const products = getProducts(); // Lấy tất cả sản phẩm
        const laptopProducts = products.filter(product => product.category === 'Laptop'); // Lọc sản phẩm theo category
        setLaptops(laptopProducts); // Cập nhật state với sản phẩm laptop

        // Nhóm sản phẩm theo brand
        const brandGroups = laptopProducts.reduce((groups, product) => {
            const brand = product.brand || 'Unknown Brand'; // Nếu không có brand, gán là 'Unknown Brand'
            if (!groups[brand]) {
                groups[brand] = [];
            }
            groups[brand].push(product);
            return groups;
        }, {});

        setGroupedLaptops(brandGroups); // Cập nhật state với các nhóm sản phẩm
    }, []);

    return (
        <div className="laptop-page">
            <h1>Laptops</h1>
            {Object.keys(groupedLaptops).length > 0 ? (
                Object.keys(groupedLaptops).map((brand) => (
                    <div key={brand} className="brand-section">
                        <h2>{brand}</h2>
                        <div className="product-list">
                            {groupedLaptops[brand].map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <p>No laptops available.</p> // Hiển thị thông báo nếu không có sản phẩm laptop
            )}
        </div>
    );
};

export default LaptopPage;
