import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './ProductDetail.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as faStarEmpty } from '@fortawesome/free-solid-svg-icons';

const ProductDetail = ({ products, addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Tìm sản phẩm theo ID
  const product = products.find((p) => p.id === parseInt(id));

  // Nếu không tìm thấy sản phẩm, hiển thị thông báo
  if (!product) {
    return <p>Product not found!</p>;
  }

  // Tính giá đã giảm (nếu có)
  const discountedPrice = product.discount
    ? product.price - product.price * product.discount
    : product.price;

  // Hàm tạo sao với màu sắc và xử lý sao nửa
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Số sao đầy đủ
    const halfStar = rating % 1 !== 0; // Kiểm tra có sao nửa không
    const emptyStars = 5 - Math.ceil(rating); // Số sao rỗng

    let stars = [];

    // Thêm sao đầy
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={`full-${i}`} icon={faStar} style={{ color: 'gold' }} />);
    }

    // Thêm sao nửa nếu có
    if (halfStar) {
      stars.push(<FontAwesomeIcon key="half" icon={faStarHalfAlt} style={{ color: 'gold' }} />);
    }

    // Thêm sao rỗng
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={faStarEmpty} style={{ color: '#d3d3d3' }} />);
    }

    return stars;
  };

  return (
    <div className={styles.productDetail}>
      <div className={styles.productImage}>
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className={styles.productInfo}>
        <h2>{product.name}</h2>
        <p>{product.category}</p>
        <p>
          {product.discount > 0 && (
            <span style={{ textDecoration: 'line-through', color: '#888' }}>
              {new Intl.NumberFormat('vi-VN').format(product.price)} VND
            </span>
          )}
          {' '}
          {new Intl.NumberFormat('vi-VN').format(discountedPrice)} VND
        </p>
        <p>
          <strong>Rating: </strong>
          <span className={styles.starRating}>
            {renderStars(product.rating)}
          </span>
          ({product.rating} out of 5)
        </p>
        <p>{product.stock} in stock</p>
        <div className="product-description">
          <p><strong>Description:</strong> {product.description}</p>
        </div>
        <button onClick={() => addToCart(product)} className={styles.addToCartBtn}>
          Add to Cart
        </button>
        <button onClick={() => navigate('/')} className={styles.backToHomeBtn}>
          Back
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
