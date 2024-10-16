import './Thongbao.css';
import anh1 from "../../../Assets/Kinhdoanhimg/kinhdoanh1.jpg";
import anh2 from "../../../Assets/Kinhdoanhimg/kinhdoanh2.png";
import anh3 from "../../../Assets/Bongdaimg/bongda1.jpg";
import anh4 from "../../../Assets/Bongdaimg/bongda2.jpg";
import React, { useEffect, useRef, useCallback } from "react";

function Thongbao({ isOpen, closeModal }) {
    const modalRef = useRef(null);

    const handleClickOutside = useCallback((e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            closeModal();
        }
    }, [closeModal]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('mousedown', handleClickOutside);
        } else {
            window.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, handleClickOutside]);

    const notificationsData = [
        {
            id: 1,
            time: 'Yesterday',
            activities: [
                {
                    id: 1,
                    user: '2308hoa',
                    likedBy: ['dphuoc.o', '8 others'],
                    action: 'liked your reel',
                    image: anh1,
                    time: '1d',
                },
                {
                    id: 2,
                    user: '_qwinlezth_',
                    likedBy: ['iam._choco'],
                    action: 'liked your story',
                    image: anh2,
                    time: '1d',
                },
            ],
        },
        {
            id: 2,
            time: 'This week',
            activities: [
                {
                    id: 3,
                    user: 'timkiller078',
                    action: 'commented',
                    content: '😍😋',
                    image: anh3,
                    time: '1d',
                },
                {
                    id: 4,
                    user: '2308hoa',
                    mentions: ['vx_neiper'],
                    action: 'mentioned you in a comment',
                    content: 'trời ơi...',
                    image: anh4,
                    time: '2d',
                },
            ],
        },
        {
            id: 2,
            time: 'This week',
            activities: [
                {
                    id: 3,
                    user: 'timkiller078',
                    action: 'commented',
                    content: '😍😋',
                    image: anh3,
                    time: '1d',
                },
                {
                    id: 4,
                    user: '2308hoa',
                    mentions: ['vx_neiper'],
                    action: 'mentioned you in a comment',
                    content: 'trời ơi...',
                    image: anh4,
                    time: '2d',
                },
            ],
        },
        {
            id: 2,
            time: 'This week',
            activities: [
                {
                    id: 3,
                    user: 'timkiller078',
                    action: 'commented',
                    content: '😍😋',
                    image: anh3,
                    time: '1d',
                },
                {
                    id: 4,
                    user: '2308hoa',
                    mentions: ['vx_neiper'],
                    action: 'mentioned you in a comment',
                    content: 'trời ơi...',
                    image: anh4,
                    time: '2d',
                },
            ],
        },
        {
            id: 2,
            time: 'This week',
            activities: [
                {
                    id: 3,
                    user: 'timkiller078',
                    action: 'commented',
                    content: '😍😋',
                    image: anh3,
                    time: '1d',
                },
                {
                    id: 4,
                    user: '2308hoa',
                    mentions: ['vx_neiper'],
                    action: 'mentioned you in a comment anh namper nay dep trai qua ',
                    content: 'trời ơi...',
                    image: anh4,
                    time: '2d',
                },
            ],
        },
        {
            id: 2,
            time: 'This week',
            activities: [
                {
                    id: 3,
                    user: 'timkiller078',
                    action: 'commented',
                    content: '😍😋',
                    image: anh3,
                    time: '1d',
                },
                {
                    id: 4,
                    user: '2308hoa',
                    mentions: ['vx_neiper'],
                    action: 'mentioned you in a comment',
                    content: 'trời ơi...',
                    image: anh4,
                    time: '2d',
                },
            ],
        },
    ];

    return (
        <>
            {isOpen && (
                <div className="overlay show" onClick={closeModal}></div>
            )}
            {isOpen && (
                <div className="modal show">

                    <div className="notifications-container" ref={modalRef}>
                        <div className='hearedthongbao'></div>
                        <button onClick={closeModal} className='nutdong1'>x</button>
                        {notificationsData.map((section) => (
                            <div key={section.id} className="notification-section">
                                <h3>{section.time}</h3>
                                {section.activities.map((activity) => (
                                    <div ksey={activity.id} className="notification">
                                        <img src={activity.image} alt="User" className="profile-pic" />
                                        <div className="notification-content">
                                            <p>
                                                <strong>{activity.user}</strong> {activity.action}
                                            </p>
                                            {activity.content && <p>{activity.content}</p>}
                                            <span>{activity.time}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default Thongbao;
