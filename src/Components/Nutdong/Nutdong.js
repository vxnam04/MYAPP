import React, { useState } from 'react';
import Taobaiviet from '../page/Taobaiviet/Taobaiviet'; // Đảm bảo đường dẫn đến file Taobaiviet là chính xác

const Nutdong = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // Trạng thái để quản lý việc mở/đóng modal

    const openModal = () => {
        setIsModalOpen(true); // Mở modal
    };

    const closeModal = () => {
        setIsModalOpen(false); // Đóng modal
    };

    return (
        <div>
            <button onClick={openModal}>Tạo bài viết mới</button> {/* Nút để mở modal */}
            {isModalOpen && (
                <>
                    <Taobaiviet closeModal={closeModal} /> {/* Truyền hàm closeModal cho Taobaiviet */}
                    <div className={`overlay ${isModalOpen ? 'show' : ''}`} onClick={closeModal}></div> {/* Lớp phủ */}
                </>
            )}
        </div>
    );
};

export default Nutdong;
