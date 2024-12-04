import React from 'react';
import { useForm } from 'react-hook-form';
// import axios from 'axios';
import './Dangnhap.css';
import { useNavigate } from 'react-router-dom';
import anhbanlamviec1 from "../../Assets/banlamviec.avif";
import { Link } from 'react-router-dom';

const Dangnhap = () => {
    const navigate = useNavigate();
    const { register } = useForm();

    const handleOverlayClick = (e) => {
        e.preventDefault();
        navigate(-1);
    };

    return (
        <div className="container5">
            <button onClick={handleOverlayClick} className='nutdong6'>x</button>

            <div className='formlogin1'>
                <form className='formlogin'>
                    <div className='formleftlogin'>
                        <label className='Login'>Đăng nhập</label>
                        <input
                            {...register('username')}
                            placeholder="Username hoặc Email"
                            className='inputusername'
                            required
                        />
                        <input
                            {...register('password')}
                            type="password"
                            placeholder="Mật khẩu"
                            className='inputpassword'
                            required
                        />
                        <button type="submit" className='nutlogin'>Đăng nhập</button>
                    </div>
                    <div className='formrightlogin'>
                        <p className='xinchaologin'>Xin Chào !</p>
                        <p className='taoblogchoriengminh'>Hãy tạo blog cho riêng mình.</p>
                        <Link to="/Dang ky">
                            <button type="button" className='nutlogin2'>Đăng kí</button>
                        </Link>
                    </div>
                </form>
            </div>
            <div className="overlaylogin show" onClick={handleOverlayClick}>
                <img src={anhbanlamviec1} alt="hình ảnh bàn làm việc" />
            </div>
        </div>
    );
};

export default Dangnhap;
