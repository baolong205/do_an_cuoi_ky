import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// Tạo ngữ cảnh người dùng
const UserContext = createContext();

// Hook để sử dụng UserContext
export const useUserContext = () => {
  return useContext(UserContext);
};

// Provider cho UserContext
export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  // State quản lý trạng thái đăng nhập
  const [isLogin, setIsLogin] = useState(false);

  // Tài khoản mẫu
  const [users, setUsers] = useState([
    { username: 'admin1', password: 'adminpassword', isAdmin: true },
    { username: 'user1', password: 'user1password', isAdmin: false }
  ]);

  // Người dùng hiện tại
  const [currentUser, setCurrentUser] = useState(null);

  // Đăng ký người dùng mới
  const register = (user) => {
    // Kiểm tra trùng username
    if (users.some((u) => u.username === user.username)) {
      toast.error('Tên đăng nhập đã tồn tại!');
      return;
    }

    setUsers((prevUsers) => [...prevUsers, user]);
    toast.success('Đăng ký thành công!');
  };

  // Đăng nhập
  const login = (username, password) => {
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      setCurrentUser(user);
      setIsLogin(true);

      if (user.isAdmin) {
        toast.success('Bạn đã đăng nhập với vai trò Admin');
        navigate('/admin-info'); // Điều hướng đến trang Admin
      } else {
        toast.success('Đăng nhập thành công!');
        navigate('/user-info'); // Điều hướng đến trang User
      }
    } else {
      toast.error('Tên đăng nhập hoặc mật khẩu không chính xác!');
    }
  };

  // Đăng xuất
  const logout = () => {
    setIsLogin(false);
    setCurrentUser(null);
    toast.info('Đã đăng xuất!');
    navigate('/'); // Điều hướng về trang đăng nhập
  };

  // Giá trị cung cấp cho ngữ cảnh
  return (
    <UserContext.Provider value={{ isLogin, users, currentUser, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
