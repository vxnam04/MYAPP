import React, { useState } from 'react';
import Taobaiviet from '../page/Taobaiviet/Taobaiviet'; // Đảm bảo đường dẫn đến file Taobaiviet là chính xác

const Nutdong = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // Trạng thái để quản lý việc mở/đóng modal

    const toggleModal = () => {
        setIsModalOpen(prev => !prev); // Đảo ngược trạng thái modal
    };

    return (
        <div>
            <button onClick={toggleModal}>Tạo bài viết mới</button> {/* Nút để mở/đóng modal */}
            {isModalOpen && (
                <>
                    <Taobaiviet closeModal={toggleModal} /> {/* Truyền hàm closeModal cho Taobaiviet */}
                    <div className={`overlay ${isModalOpen ? 'show' : ''}`} onClick={toggleModal}></div> {/* Lớp phủ */}
                </>
            )}
        </div>
    );
};

export default Nutdong;