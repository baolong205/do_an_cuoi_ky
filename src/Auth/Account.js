import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Account.css';

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const loginFormik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Tên đăng nhập là bắt buộc')
        .min(5, 'Tên đăng nhập ít nhất 5 ký tự'),
      password: Yup.string()
        .required('Vui lòng nhập mật khẩu')
        .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
    }),
    onSubmit: values => {
      // Gọi API đăng nhập
      alert('Đăng nhập thành công');
      console.log('Thông tin đăng nhập:', values);
    }
  });

  const registerFormik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: ''
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Tên đăng nhập là bắt buộc')
        .min(5, 'Tên đăng nhập ít nhất 5 ký tự'),
      password: Yup.string()
        .required('Vui lòng nhập mật khẩu')
        .min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
      email: Yup.string()
        .required('Vui lòng nhập email')
        .email('Email không hợp lệ')
    }),
    onSubmit: values => {
      // Gọi API đăng ký
      alert('Đăng ký thành công');
      console.log('Thông tin đăng ký:', values);
    }
  });

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Đăng Nhập' : 'Đăng Ký'}</h2>

      {isLogin ? (
        <form onSubmit={loginFormik.handleSubmit}>
          <label htmlFor="username">Tên đăng nhập</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={loginFormik.handleChange}
            onBlur={loginFormik.handleBlur}
            value={loginFormik.values.username}
          />
          {loginFormik.touched.username && loginFormik.errors.username ? (
            <div className="error-message">{loginFormik.errors.username}</div>
          ) : null}

          <label htmlFor="password">Mật khẩu</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={loginFormik.handleChange}
            onBlur={loginFormik.handleBlur}
            value={loginFormik.values.password}
          />
          {loginFormik.touched.password && loginFormik.errors.password ? (
            <div className="error-message">{loginFormik.errors.password}</div>
          ) : null}

          <button type="submit">Đăng Nhập</button>
        </form>
      ) : (
        <form onSubmit={registerFormik.handleSubmit}>
          <label htmlFor="username">Tên đăng nhập</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={registerFormik.handleChange}
            onBlur={registerFormik.handleBlur}
            value={registerFormik.values.username}
          />
          {registerFormik.touched.username && registerFormik.errors.username ? (
            <div className="error-message">{registerFormik.errors.username}</div>
          ) : null}

          <label htmlFor="password">Mật khẩu</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={registerFormik.handleChange}
            onBlur={registerFormik.handleBlur}
            value={registerFormik.values.password}
          />
          {registerFormik.touched.password && registerFormik.errors.password ? (
            <div className="error-message">{registerFormik.errors.password}</div>
          ) : null}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={registerFormik.handleChange}
            onBlur={registerFormik.handleBlur}
            value={registerFormik.values.email}
          />
          {registerFormik.touched.email && registerFormik.errors.email ? (
            <div className="error-message">{registerFormik.errors.email}</div>
          ) : null}

          <button type="submit">Đăng Ký</button>
        </form>
      )}

      <button onClick={toggleForm} className="toggle-button">
        {isLogin ? 'Chưa có tài khoản? Đăng ký' : 'Đã có tài khoản? Đăng nhập'}
      </button>
    </div>
  );
}

export default AuthForm;
