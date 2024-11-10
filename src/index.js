import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserProvider } from './UserContext'// Import UserProvider từ UserContext
import { ToastContainer } from 'react-toastify';  // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.render(
  <UserProvider>
    <ToastContainer
      autoClose={3000}  // Đặt thời gian tự động đóng toast là 3 giây
      newestOnTop={true}  // Đảm bảo toast mới sẽ luôn hiển thị trên cùng
    />
    <App />
  </UserProvider>,
  document.getElementById('root')
);
