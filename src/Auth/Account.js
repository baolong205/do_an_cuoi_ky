import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Account.css'; // Import CSS cũ

const Account = () => {
  const [isLogin, setIsLogin] = useState(true); // Kiểm tra form đăng nhập hay đăng ký

  const handleToggleForm = () => {
    setIsLogin(!isLogin); // Chuyển đổi giữa form đăng nhập và đăng ký
  };

  const loginFormik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Tên đăng nhập là bắt buộc')
        .min(5, 'Tên đăng nhập ít nhất 5 ký tự')
        .max(20, 'Tên đăng nhập không quá dài'),
      password: Yup.string()
        .required('Vui lòng nhập mật khẩu')
        .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
        .max(20, 'Mật khẩu không quá dài')
    }),
    onSubmit: (values) => {
      alert('Đăng nhập thành công');
      console.log(values);
    }
  });

  const registerFormik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Tên đăng nhập là bắt buộc')
        .min(5, 'Tên đăng nhập ít nhất 5 ký tự')
        .max(20, 'Tên đăng nhập không quá dài'),
      email: Yup.string().email('Địa chỉ email không hợp lệ').required('Email là bắt buộc'),
      password: Yup.string()
        .required('Vui lòng nhập mật khẩu')
        .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
        .max(20, 'Mật khẩu không quá dài'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Mật khẩu xác nhận không khớp')
        .required('Vui lòng xác nhận mật khẩu')
    }),
    onSubmit: (values) => {
      alert('Đăng ký thành công');
      console.log(values);
    }
  });

  return (
    <div className="login"> {/* Sử dụng class login cho container */}
      <h2>{isLogin ? 'Đăng Nhập' : 'Đăng Ký'}</h2>

      {isLogin ? (
        <form onSubmit={loginFormik.handleSubmit} className="account-form">
          <label htmlFor="username">Tên đăng nhập</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={loginFormik.handleChange}
            onBlur={loginFormik.handleBlur}
            value={loginFormik.values.username}
          />
          {loginFormik.touched.username && loginFormik.errors.username && (
            <div className="error-message">{loginFormik.errors.username}</div>
          )}

          <label htmlFor="password">Mật khẩu</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={loginFormik.handleChange}
            onBlur={loginFormik.handleBlur}
            value={loginFormik.values.password}
          />
          {loginFormik.touched.password && loginFormik.errors.password && (
            <div className="error-message">{loginFormik.errors.password}</div>
          )}

          <button type="submit" className="submit-button">Đăng Nhập</button>
        </form>
      ) : (
        <form onSubmit={registerFormik.handleSubmit} className="account-form">
          <label htmlFor="username">Tên đăng nhập</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={registerFormik.handleChange}
            onBlur={registerFormik.handleBlur}
            value={registerFormik.values.username}
          />
          {registerFormik.touched.username && registerFormik.errors.username && (
            <div className="error-message">{registerFormik.errors.username}</div>
          )}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={registerFormik.handleChange}
            onBlur={registerFormik.handleBlur}
            value={registerFormik.values.email}
          />
          {registerFormik.touched.email && registerFormik.errors.email && (
            <div className="error-message">{registerFormik.errors.email}</div>
          )}

          <label htmlFor="password">Mật khẩu</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={registerFormik.handleChange}
            onBlur={registerFormik.handleBlur}
            value={registerFormik.values.password}
          />
          {registerFormik.touched.password && registerFormik.errors.password && (
            <div className="error-message">{registerFormik.errors.password}</div>
          )}

          <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={registerFormik.handleChange}
            onBlur={registerFormik.handleBlur}
            value={registerFormik.values.confirmPassword}
          />
          {registerFormik.touched.confirmPassword && registerFormik.errors.confirmPassword && (
            <div className="error-message">{registerFormik.errors.confirmPassword}</div>
          )}

          <button type="submit" className="submit-button">Đăng Ký</button>
        </form>
      )}

      <button onClick={handleToggleForm} className="switch-form">
        {isLogin ? 'Chưa có tài khoản? Đăng ký' : 'Đã có tài khoản? Đăng nhập'}
      </button>
    </div>
  );
};

export default Account;
