import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as faStarEmpty } from '@fortawesome/free-solid-svg-icons';
import './components.css';

// Hàm tạo sao
const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  let stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FontAwesomeIcon key={`full-${i}`} icon={faStar} style={{ color: 'gold' }} />);
  }
  if (halfStar) {
    stars.push(<FontAwesomeIcon key="half" icon={faStarHalfAlt} style={{ color: 'gold' }} />);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={faStarEmpty} style={{ color: '#d3d3d3' }} />);
  }
  return stars;
};

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{new Intl.NumberFormat('vi-VN').format(product.price)} VND</p>
      <div className="product-card-footer">
        <div className="rating">{renderStars(product.rating)}</div>
        <Link to={`/product/${product.id}`}>
          <button className="buy-product-btn">Buy</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
