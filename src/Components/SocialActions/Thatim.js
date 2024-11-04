import React, { useState } from 'react';
import './Thatim.css';

const SocialActions = ({ togglecomment }) => {
    // State để lưu trữ số lượng
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState(0);
    const [shares, setShares] = useState(0);

    // State để lưu trữ các biểu tượng đang được nhấp
    const [activeIcons, setActiveIcons] = useState({
        like: false,
        comment: false,
        share: false,
    });

    // Hàm để xử lý click vào thả tim
    const handleLike = () => {
        setLikes(likes + 1);
        setActiveIcons({ ...activeIcons, like: true }); // Đánh dấu biểu tượng "Thích" là đang hoạt động
    };
    const handlecomment = () => {
        setComments(comments + 1);
        setActiveIcons({ ...activeIcons, comment: true }); // Đánh dấu biểu tượng "Thích" là đang hoạt động
    };
    // Hàm để xử lý click vào chia sẻ
    const handleShare = () => {
        setShares(shares + 1);
        setActiveIcons({ ...activeIcons, share: true }); // Đánh dấu biểu tượng "Chia sẻ" là đang hoạt động
    };

    return (
        <div className="social-actions">
            <div className="action" onClick={handleLike}>
                <i className={`fas fa-heart chung1 ${activeIcons.like ? 'active' : ''}`}></i>
                <span>{likes} Likes</span>
            </div>
            <div className="action" onClick={handlecomment}>
                <i className={`fas fa-comment chung1 ${activeIcons.comment ? 'active' : ''}`}></i>
                <span>{comments} Comments</span>
            </div>

            <div className="action" onClick={handleShare}>
                <i className={`fas fa-share chung1 ${activeIcons.share ? 'active' : ''}`}></i>
                <span>{shares} Shares</span>
            </div>
        </div>
    );
};

export default SocialActions;
