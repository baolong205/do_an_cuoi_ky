import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';  // Only here
import './index.css';
import App from './App';
import { UserProvider } from './UserContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <BrowserRouter>  {/* Only BrowserRouter here */}
    <UserProvider>
      <ToastContainer autoClose={3000} newestOnTop={true} />
      <App />
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
