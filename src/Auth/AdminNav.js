// AdminNavbar.js
import React from 'react';
import './AdminNav.css';  // Import your CSS file

const AdminNavbar = () => {
    return (
        <div className="admin-navbar">
            <ul className="nav-list">
                {/* Welcome message on the left */}
                <li className="welcome-message">Welcome, Admin</li>

                {/* Logout button on the right */}
                <li className="logout"><a href="/">Đăng xuất</a></li>
            </ul>
        </div>
    );
};

export default AdminNavbar;
