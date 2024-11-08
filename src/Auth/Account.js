// src/Auth/Account.js
import React, { useState } from 'react';
import RegisterForm from './RegisterForm'; // Import form đăng ký
import LoginForm from './LoginForm'; // Import form đăng nhập
import './Account.css';

const Account = () => {
  const [isLogin, setIsLogin] = useState(true);  // Kiểm tra form đăng nhập hay đăng ký

  const handleToggleForm = () => {
    setIsLogin(!isLogin); // Đổi giữa form đăng nhập và đăng ký
  };

  return (
    <div className="account-container">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      
      {isLogin ? <LoginForm /> : <RegisterForm />} {/* Render form đăng nhập hoặc đăng ký */}

      <button onClick={handleToggleForm} className="switch-form">
        {isLogin ? 'Don\'t have an account? Register' : 'Already have an account? Login'}
      </button>
    </div>
  );
};

export default Account;
