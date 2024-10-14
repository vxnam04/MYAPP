import React, { useState } from 'react';
import './Baidang.css';
import Theloai from '../Theloai/Theloai';
import Thatim from "../../../Components/SocialActions/Thatim"

const Baidang = () => {

    const [showCategory, setShowCategory] = useState(false); // Manages showing category component

    const handleCategoryClick = () => {
        setShowCategory(!showCategory);
    };
    return (
        <div className='box'>
            {showCategory && <div className="overlay show" onClick={handleCategoryClick}></div>}
            <div className='THELOAI'>
                <span className='Theloai' onClick={handleCategoryClick}>Thể Loại</span>
                {showCategory && <Theloai />}
            </div>
            <div className="feed">

                <div className="post">
                    <div className="post-header">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="profile-pic"
                            className="profile-pic"
                        />
                        <div className="post-info">
                            <span className="username">tromviadeptraiqua</span>
                            <span className="time">1 giờ</span>
                        </div>
                    </div>
                    <div className="post-content">
                        <h4>Kinh doanh</h4>
                        <h3>TP.HCM chỉ còn tồn 9.150 hồ sơ thuế đất</h3>
                        <p>Từ chỗ tồn đến 15.800 hồ sơ thuế nhà đất, đến nay TP.HCM chỉ còn tồn 9.150 hồ sơ, tính cả số hồ sơ mới nhận từ đầu tuần đến nay.</p>
                    </div>
                    <div className='SocialAction'>
                        <Thatim />
                    </div>
                </div>

                {/* Bài đăng 2 */}
                <div className="post">
                    <div className="post-header">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="profile-pic"
                            className="profile-pic"
                        />
                        <div className="post-info">
                            <span className="username">honghot.showbiz</span>
                            <span className="time">1 ngày</span>
                        </div>


                    </div>
                    <div className="post-content">
                        <img
                            src="https://via.placeholder.com/500x300"
                            alt="post-image"
                            className="post-image"
                        />
                        <p className="post-caption">
                            <strong>JUSTIN BIEBER SUY SỤP TRONG HẬU TRƯỜNG</strong>
                        </p>
                    </div>
                    <div className='SocialAction'>
                        <Thatim />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Baidang;
