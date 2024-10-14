import React, { useState } from 'react';
import './Thatim.css';

const SocialActions = () => {
    // State để lưu trữ số lượng
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState(0);
    const [shares, setShares] = useState(0);

    // Hàm để xử lý click vào thả tim
    const handleLike = () => {
        setLikes(likes + 1);
    };

    // Hàm để xử lý click vào comment
    const handleComment = () => {
        setComments(comments + 1);
    };

    // Hàm để xử lý click vào chia sẻ
    const handleShare = () => {
        setShares(shares + 1);
    };

    return (
        <div className="social-actions">
            <div className="action" onClick={handleLike}>
                <i className="fas fa-heart"></i>
                <span>{likes} Likes</span>
            </div>
            <div className="action" onClick={handleComment}>
                <i className="fas fa-comment"></i>
                <span>{comments} Comments</span>
            </div>
            <div className="action" onClick={handleShare}>
                <i className="fas fa-share"></i>
                <span>{shares} Shares</span>
            </div>
        </div>
    );
};

export default SocialActions;
