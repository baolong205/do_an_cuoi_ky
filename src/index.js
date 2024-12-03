import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';  // Only here
import './index.css';
import App from './App';
import { UserProvider } from "./Context/UserContext";
import { OrderProvider } from "./Context/OderContext";  // Import OrderProvider
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <BrowserRouter>  {/* Only BrowserRouter here */}
    <UserProvider>
      <OrderProvider>  {/* Wrap your components with OrderProvider */}
        <ToastContainer autoClose={3000} newestOnTop={true} />
        <App />
      </OrderProvider>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
