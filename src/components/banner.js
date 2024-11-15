import React, { useState, useEffect } from 'react';
import bannerImage1 from '../assets/anh do-an/banner1.jpg';
import bannerImage2 from '../assets/anh do-an/banner2.jpg';
import './banner.css';

const Banner = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [bannerImage1, bannerImage2];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Thay đổi ảnh sau 3 giây

        return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
    }, [images.length]);

    const goToPrevious = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="banner">
            <img src={images[currentImageIndex]} alt="Banner" className="banner-image" />
            <div className="banner-buttons">
                <button className="banner-button left" onClick={goToPrevious}>←</button>
                <button className="banner-button right" onClick={goToNext}>→</button>
            </div>
        </div>
    );
};

export default Banner;
