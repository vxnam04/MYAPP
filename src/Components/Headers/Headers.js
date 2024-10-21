import Logo from '../../Assets/Logo.png';
import profile from "../../Assets/profile.jpg";
import "./Headers.css";
import React from 'react';
import { Link } from "react-router-dom";

function Headers({ toggleAvatarMenu }) {
    return (
        <div className='container'>
            <div>
                <Link to="/Trang chủ">
                    <div className='logo'><img src={Logo} alt='logo' /></div>
                </Link>
            </div>
            <div>
                <div className='profile' onClick={toggleAvatarMenu}>
                    <img src={profile} alt='profile' />
                </div>
            </div>
        </div>
    );
}

export default Headers;
