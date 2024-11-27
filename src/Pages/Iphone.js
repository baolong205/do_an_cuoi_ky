import React, { useState, useEffect } from 'react';
import { getProducts } from '../Data/ProductData'; // Giả sử getProducts là hàm lấy tất cả sản phẩm
import ProductCard from '../components/ProductCard'; // Import ProductCard
import './Iphone.css';

const Iphone = ({ addToCart }) => {
    const [groupedIphones, setGroupedIphones] = useState({});

    useEffect(() => {
        const products = getProducts(); // Lấy tất cả sản phẩm
        const iphoneProducts = products.filter(product => product.category === 'Phone'); // Lọc sản phẩm theo category


        // Nhóm sản phẩm theo brand
        const brandGroups = iphoneProducts.reduce((groups, product) => {
            const brand = product.brand || 'Unknown Brand'; // Nếu không có brand, gán là 'Unknown Brand'
            if (!groups[brand]) {
                groups[brand] = [];
            }
            groups[brand].push(product);
            return groups;
        }, {});

        setGroupedIphones(brandGroups); // Cập nhật state với các nhóm sản phẩm
    }, []);

    return (
        <div className="laptop-page">
            <h1>Iphone</h1>
            {Object.keys(groupedIphones).length > 0 ? (
                Object.keys(groupedIphones).map((brand) => (
                    <div key={brand} className="brand-section">
                        <h2>{brand}</h2>
                        <div className="product-list">
                            {groupedIphones[brand].map((product) => (
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

export default Iphone;
