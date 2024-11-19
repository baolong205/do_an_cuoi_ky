import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  // Lấy dữ liệu từ localStorage hoặc gán giá trị mặc định
  const getUsersFromLocalStorage = () => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [
      { username: 'admin1', password: '123456', isAdmin: true },
      { username: 'user1', password: 'user1password', isAdmin: false },
    ];
  };

  const getCurrentUserFromLocalStorage = () => {
    const storedUser = localStorage.getItem('currentUser');
    return storedUser ? JSON.parse(storedUser) : null;
  };

  const [isLogin, setIsLogin] = useState(!!getCurrentUserFromLocalStorage());
  const [users, setUsers] = useState(getUsersFromLocalStorage());
  const [currentUser, setCurrentUser] = useState(getCurrentUserFromLocalStorage());

  // Lưu dữ liệu vào localStorage khi users thay đổi
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  // Lưu currentUser vào localStorage
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('currentUser');
    }
  }, [currentUser]);

  const register = (user) => {
    if (users.some((u) => u.username === user.username)) {
      toast.error('Tên đăng nhập đã tồn tại!');
      return;
    }

    setUsers((prevUsers) => [...prevUsers, user]);
    toast.success('Đăng ký thành công!');
  };

  const login = (username, password) => {
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      setCurrentUser(user);
      setIsLogin(true);

      if (user.isAdmin) {
        toast.success('Bạn đã đăng nhập với vai trò Admin');
        navigate('/admin');
      } else {
        toast.success('Đăng nhập thành công!');
        navigate('/');
      }
    } else {
      toast.error('Tên đăng nhập hoặc mật khẩu không chính xác!');
    }
  };

  const logout = () => {
    setIsLogin(false);
    setCurrentUser(null);
    toast.info('Đã đăng xuất!');
    navigate('/');
  };

  return (
    <UserContext.Provider value={{ isLogin, users, currentUser, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
