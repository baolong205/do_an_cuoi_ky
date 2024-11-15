import React from 'react';
import { useUserContext } from '../UserContext';
import '../Auth/AdminInfo.css'

const AdminInfo = () => {
    const { currentUser, logout } = useUserContext();

    return (
        <div className="admin-info-container">
            <h2>Thông tin Quản trị viên</h2>
            <p><strong>Tên đăng nhập:</strong> {currentUser.username}</p>
            <p><strong>Vai trò:</strong> {currentUser.isAdmin ? 'Admin' : 'Người dùng'}</p>
            <button onClick={logout}>Đăng xuất</button>
        </div>
    );
};

export default AdminInfo;
