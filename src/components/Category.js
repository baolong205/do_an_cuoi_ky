import React, { useState } from 'react';
import './Category.css'; // Tạo file CSS để áp dụng style riêng

const categories = ['Điện thoại', 'Laptop', 'Tai nghe', 'Bàn phím', 'Máy tính bảng']; // Danh sách danh mục

const Category = ({ onCategorySelect }) => {
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    const handleCategoryClick = (category) => {
        setActiveCategory(category); // Cập nhật danh mục đang chọn
        onCategorySelect(category); // Gọi callback để xử lý khi danh mục được chọn
    };

    return (
        <div className="category">
            {categories.map((category) => (
                <button
                    key={category}
                    className={`category-button ${category === activeCategory ? 'active' : ''}`}
                    onClick={() => handleCategoryClick(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Category;
