import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  // Danh sách admin mặc định
  const defaultAdmins = [
    { username: 'admin', password: '123456', isAdmin: true },
  ];

  // Lấy danh sách người dùng thường từ localStorage
  const getUsersFromLocalStorage = () => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
  };

  // Quản lý trạng thái người dùng
  const [users, setUsers] = useState([...defaultAdmins, ...getUsersFromLocalStorage()]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  // Cập nhật danh sách người dùng thường vào localStorage khi `users` thay đổi
  useEffect(() => {
    const nonAdminUsers = users.filter((user) => !user.isAdmin); // Lọc chỉ tài khoản thường
    localStorage.setItem('users', JSON.stringify(nonAdminUsers));
  }, [users]);

  // Hàm đăng ký người dùng mới
  const register = (user) => {
    if (users.some((u) => u.username === user.username)) {
      toast.error('Tên đăng nhập đã tồn tại!');
      return;
    }

    user.isAdmin = user.isAdmin || false; // Đảm bảo tài khoản mới luôn có `isAdmin`
    setUsers((prevUsers) => [...prevUsers, user]); // Thêm vào danh sách người dùng
    toast.success('Đăng ký thành công!');
  };

  // Hàm đăng nhập
  const login = (username, password) => {
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      setCurrentUser(user);
      setIsLogin(true);

      if (user.isAdmin) {
        toast.success('Bạn đã đăng nhập với vai trò Admin');
        navigate('/admin'); // Điều hướng đến trang admin
      } else {
        toast.success('Đăng nhập thành công!');
        navigate('/'); // Điều hướng đến trang chủ cho người dùng thường
      }
    } else {
      toast.error('Tên đăng nhập hoặc mật khẩu không chính xác!');
    }
  };

  // Hàm đăng xuất
  const logout = () => {
    setCurrentUser(null);
    setIsLogin(false);
    toast.info('Đã đăng xuất!');
    navigate('/');
  };

  return (
    <UserContext.Provider value={{ isLogin, users, currentUser, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
