import React from 'react';
import Logo from '../../Assets/Logo.png';
import profile from "../../Assets/profile.jpg"
import "./Headers.css";
// import Link from 'antd/es/typography/Link';
import { Link } from "react-router-dom";
function Headers() {
    return (
        <div className='container'>
            <div>
                <Link to="/Trang chủ"><div className='logo'><img src={Logo} alt='logo' /></div></Link>
            </div>
            <div><Link to="/Profile"><div className='profile'><img src={profile} alt='proflie' /></div></Link></div>
        </div>
    );
}

export default Headers;
