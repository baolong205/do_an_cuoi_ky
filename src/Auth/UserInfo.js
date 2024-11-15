import React from 'react';
import { useUserContext } from '../UserContext';
import './UserInfo.css';

const UserInfo = () => {
    const { currentUser, logout } = useUserContext();

    if (!currentUser) {
        return <p>Không có thông tin người dùng.</p>;
    }

    return (
        <div className="user-info-container">
            <h2>Thông tin người dùng</h2>
            <div className="user-details">
                <p>
                    <strong>Tên đăng nhập:</strong> {currentUser.username}
                </p>
                <p>
                    <strong>Vai trò:</strong> {currentUser.isAdmin ? 'Quản trị viên' : 'Người dùng'}
                </p>
            </div>
            <button className="logout-button" onClick={logout}>
                Đăng xuất
            </button>
        </div>
    );
};

export default UserInfo;
