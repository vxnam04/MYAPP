import React from 'react';
import './Profileheader.css';
import { Link } from "react-router-dom";
import anhavt from "../../../Assets/profile.jpg";

const Profileheader = () => {
    return (
        <div className="profile-header">
            <div className="avatar">
                <img src={anhavt} alt="avatar" />
            </div>
            <div className="user-info">
                <h2>vx_neiper</h2>
                <div className="stats">
                    <span>36 bài viết</span>
                    <span>265 người theo dõi</span>
                    <span>Đang theo dõi 360 người dùng</span>
                </div>
                <div><Link to="/Chỉnh sửa trang cá nhân"><button className='chinhsuatrangcanhan'>Chỉnh sửa trang cá nhân</button></Link></div>
            </div>
        </div>
    );
};

export default Profileheader;