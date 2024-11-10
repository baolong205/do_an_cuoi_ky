import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  // Restore data from localStorage when the component mounts
  const [isLogin, setIsLogin] = useState(() => {
    const storedIsLogin = localStorage.getItem('isLogin');
    return storedIsLogin ? JSON.parse(storedIsLogin) : false;
  });

  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  const [currentUser, setCurrentUser] = useState(() => {
    const storedCurrentUser = localStorage.getItem('currentUser');
    return storedCurrentUser ? JSON.parse(storedCurrentUser) : null;
  });

  // Register user
  const register = (user) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers, user];
      localStorage.setItem('users', JSON.stringify(updatedUsers)); // Save to localStorage
      return updatedUsers;
    });

    toast.dismiss();
    toast.success('Account registered successfully');
  };

  // Login user
  const login = (username, password) => {
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      setCurrentUser(user);
      setIsLogin(true);
      localStorage.setItem('currentUser', JSON.stringify(user)); // Save currentUser to localStorage
      localStorage.setItem('isLogin', JSON.stringify(true)); // Save login state to localStorage
      toast.dismiss();
      toast.success('Login successful!');
    } else {
      toast.dismiss();
      toast.error('Incorrect username or password!');
    }
  };

  // Logout user
  const logout = () => {
    setIsLogin(false);
    setCurrentUser(null);
    localStorage.removeItem('currentUser'); // Remove currentUser from localStorage
    localStorage.setItem('isLogin', JSON.stringify(false)); // Save logout state
    toast.dismiss();
    toast.info('Logged out!');
  };

  // Ensure the users state is always correctly updated after changes
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users)); // Save users list to localStorage
  }, [users]);

  useEffect(() => {
    localStorage.setItem('isLogin', JSON.stringify(isLogin)); // Save isLogin state to localStorage
  }, [isLogin]);

  return (
    <UserContext.Provider value={{ isLogin, users, currentUser, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
