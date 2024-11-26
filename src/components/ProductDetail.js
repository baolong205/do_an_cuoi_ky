import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './ProductDetail.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as faStarEmpty } from '@fortawesome/free-solid-svg-icons';
import { useUserContext } from '../UserContext'; // Import useUserContext (hoặc phương thức quản lý người dùng của bạn)

const ProductDetail = ({ products, addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false); // Trạng thái mở/đóng modal
  const [successMessage, setSuccessMessage] = useState(''); // Trạng thái thông báo thành công

  // Lấy thông tin người dùng từ context
  const { isLogin } = useUserContext();

  // Tìm sản phẩm theo ID
  const product = products.find((p) => p.id === parseInt(id));

  // Nếu không tìm thấy sản phẩm, hiển thị thông báo
  if (!product) {
    return <p>Không tìm thấy sản phẩm!</p>;
  }

  // Tính giá đã giảm (nếu có)
  const discountedPrice = product.discount
    ? product.price - product.price * product.discount
    : product.price;

  // Hàm tạo sao với màu sắc và xử lý sao nửa
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

  // Hàm xử lý khi bấm "Thêm vào giỏ hàng"
  const handleAddToCart = () => {
    if (isLogin) {
      addToCart(product);
      setSuccessMessage('Thêm vào giỏ hàng thành công!'); // Hiển thị thông báo thành công
      setTimeout(() => setSuccessMessage(''), 3000); // Ẩn thông báo sau 3 giây
    } else {
      alert('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!');
      navigate('/account'); // Điều hướng người dùng đến trang đăng nhập
    }
  };

  return (
    <div className={styles.productDetail}>
      <div className={styles.productImage}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onClick={() => setModalOpen(true)} // Mở modal khi nhấp vào ảnh
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div className={styles.productInfo}>
        <h2>{product.name}</h2>
        <p>{product.category}</p>
        <p>
          {product.discount > 0 && (
            <span style={{ textDecoration: 'line-through', color: '#888' }}>
              {new Intl.NumberFormat('vi-VN').format(product.price)} VND
            </span>
          )}{' '}
          {new Intl.NumberFormat('vi-VN').format(discountedPrice)} VND
        </p>
        <p>
          <strong>Đánh giá: </strong>
          <span className={styles.starRating}>
            {renderStars(product.rating)}
          </span>
          ({product.rating} trên 5)
        </p>
        <p>{product.stock} sản phẩm còn lại</p>
        <div className="product-description">
          <p><strong>Mô tả:</strong> {product.description}</p>
        </div>
        <button onClick={handleAddToCart} className={styles.addToCartBtn}>
          Thêm vào giỏ hàng
        </button>
        <button onClick={() => navigate('/')} className={styles.backToHomeBtn}>
          Quay lại trang chủ
        </button>

        {/* Hiển thị thông báo thành công */}
        {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
      </div>

      {/* Modal hiển thị ảnh full */}
      {isModalOpen && (
        <div className={styles.modal} onClick={() => setModalOpen(false)}>
          <div className={styles.modalContent}>
            <img src={product.image} alt={product.name} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
