import './avt.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AvatarMenu = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const navigate = useNavigate();

    const handleMenuClick = (key) => {
        if (key === '/avt') {
            toggleModal(); // Bật/tắt modal
        } else {
            navigate(key); // Điều hướng đến các trang khác
            toggleModal(); // Đóng modal khi điều hướng
        }
    };

    const toggleModal = () => {
        setIsModalOpen(prev => !prev); // Bật/tắt trạng thái modal
    };

    // const handleSubmit1 = () => {
    //     toggleModal(); // Đóng modal khi nhấn nút đóng
    // };

    const handleOverlayClick7 = (e) => {
        toggleModal(); // Đóng modal khi nhấp ra ngoài
    };

    return (
        <>
            {
                isModalOpen && (
                    <div className='boxavt'>
                        {/* <button onClick={handleSubmit1} className='nutdong4'>x</button> */}
                        <p className='xemtrangcanhan chungavt' onClick={() => handleMenuClick('/Profile')}>Xem trang cá nhân</p>
                        <p className='dangnhapavt chungavt' onClick={() => handleMenuClick('/Đăng nhập')}>Đăng nhập</p>
                        <p className='dangkiavt chungavt' onClick={() => handleMenuClick('/Đăng ký')}>Đăng ký</p>
                    </div>
                )
            }
            {isModalOpen && (
                <div className="overlaylogin7 show7" onClick={handleOverlayClick7}>
                    {/* <img src={anhbanlamviec2} alt="huhu" /> */}
                </div>
            )}
        </>
    );
};

export default AvatarMenu;
