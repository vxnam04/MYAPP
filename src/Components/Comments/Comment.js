import './Comment.css';
import React from "react";

const Comment = ({ closeModal }) => {
    const handleOverlayClick7 = (e) => {
        closeModal(); // Đóng modal khi nhấp ra ngoài
    };


    return (
        <>
            <div className='boxavt'>
                helo
            </div>

            <div className="overlaylogin7 show7" onClick={handleOverlayClick7}>
                {/* <img src={anhbanlamviec2} alt="huhu" /> */}
            </div>
        </>
    );
};

export default Comment;
