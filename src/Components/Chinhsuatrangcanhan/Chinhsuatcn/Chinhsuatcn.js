import React from 'react';
import './Chinhsuatcn.css'; // Import file CSS
import anhavtne from "../../../Assets/profile.jpg";
import { useNavigate } from 'react-router-dom';
const ProfileEdit = () => {
    const navigate = useNavigate();
    const handleOverlayClick6 = (e) => {
        e.preventDefault(); // Ngăn chặn hành vi mặc định
        navigate(-1);
    };

    return (

        <div className="profile-edit-container">
            <button onClick={handleOverlayClick6} className='nutdong6'>x</button>
            <div className="profile-edit-card">
                <h1 className="profile-edit-title">Chỉnh sửa trang cá nhân</h1>
                <div className="profile-edit-header">
                    <img
                        src={anhavtne}
                        alt="Ảnh đại diện của Nam Per"
                        className="profile-edit-image"
                        width={100} // Thay đổi kích thước theo yêu cầu của bạn
                        height={100} // Thay đổi kích thước theo yêu cầu của bạn
                    />
                    <div className="profile-edit-info">
                        <div className="profile-edit-username">vx_neiper</div>
                        <div className="profile-edit-name">Nam Per</div>
                    </div>
                    <button className="profile-edit-button">
                        Đổi ảnh
                    </button>
                </div>
                {/* <div className="profile-edit-field">
                    <label className="profile-edit-field-label">Trang web</label>
                    <input
                        type="text"
                        placeholder="Nhập trang web của bạn"
                        className="profile-edit-field-input"
                    />
                    <p className="profile-edit-field-description">
                        Bạn chỉ có thể chỉnh sửa liên kết trên di động. Hãy mở ứng dụng Instagram và chỉnh sửa trang cá nhân của bạn để thay đổi trang web trong phần tiểu sử.
                    </p>
                </div> */}
                <div className="profile-edit-field">
                    <label className="profile-edit-field-label">Tiểu sử</label>
                    <textarea
                        placeholder="Tiểu sử"
                        className="profile-edit-field-textarea"
                        maxLength={150}
                    ></textarea>
                    <div className="profile-edit-text-count">0 / 150</div>
                </div>
                <div className="profile-edit-field">
                    <label className="profile-edit-field-label">Giới tính</label>
                    <input
                        type="text"
                        placeholder="Nam"
                        className="profile-edit-field-input"
                    />
                    <p className="profile-edit-field-description">
                        Thông tin này sẽ không xuất hiện trên trang cá nhân công khai của bạn.
                    </p>
                </div>
            </div>
            <div className="overlaylogin6 show6" onClick={handleOverlayClick6}>
                {/* <img src={anhbanlamviec2} alt="huhu" /> */}
            </div>
        </div>
    );
};

export default ProfileEdit;
