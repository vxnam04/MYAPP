import './avt.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Home from '../../page/Home/Home';
import anhbackgroundavt from "../../../Assets/profile.jpg";

const AvatarMenu = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const navigate = useNavigate();

    const handleOverlayClick = () => {
        if (isModalOpen) {
            navigate(-1);
        }
    };

    const handleMenuClick = (key) => {
        if (key === '/avt') {
            toggleModal(); // Bật/tắt modal
        } else {
            navigate(key); // Điều hướng đến các trang khác
        }
    };

    const toggleModal = () => {
        setIsModalOpen(prev => !prev); // Bật/tắt trạng thái modal
    };
    const handleSubmit1 = () => {
        // Thực hiện xử lý lưu dữ liệu ở đây 

        // Sau đó điều hướng về trang Profile
        navigate(-1);
    };
    return (
        <>
            {/* Hiện overlay chỉ khi modal đang mở */}
            {isModalOpen && <div className="overlayavt show" onClick={handleOverlayClick}>
                <img src={anhbackgroundavt} alt="haha" />
            </div>}
            {isModalOpen && (
                <div className='boxavt'>
                    <button onClick={handleSubmit1} className='nutdong2'>x</button>
                    <p className='xemtrangcanhan chungavt' onClick={() => handleMenuClick('/Profile')}>Xem trang cá nhân</p>
                    <p className='dangnhapavt chungavt' onClick={() => handleMenuClick('/dang-nhap')}>Đăng nhập</p>
                    <p className='dangkiavt chungavt' onClick={() => handleMenuClick('/dang-ky')}>Đăng ký</p>
                </div>
            )}
        </>
    );
};

export default AvatarMenu;