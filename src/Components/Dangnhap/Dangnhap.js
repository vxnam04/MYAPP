import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './Dangnhap.css'; // Nhập file CSS
import { useNavigate } from 'react-router-dom';
import anhbanlamviec1 from "../../Assets/banlamviec.avif";

const Dangnhap = () => {
    const navigate = useNavigate(); // Tạo đối tượng điều hướng

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        axios.post('http://localhost:5000/login', data)
            .then((response) => {
                console.log('User logged in:', response.data);
                // Sau khi đăng nhập thành công, điều hướng đến trang Profile
                navigate('/Profile');
            })
            .catch((error) => {
                console.error('There was an error logging in!', error);
            });
    };
    const handleOverlayClick = (e) => {
        e.preventDefault(); // Ngăn chặn hành vi mặc định
        navigate(-1);
    };

    return (
        <div className="container5">
            <button onClick={handleOverlayClick} className='nutdong6'>x</button> {/* Nút để đóng modal */}

            <div className='formlogin1'>
                <form onSubmit={handleSubmit(onSubmit)} className='formlogin'>
                    <div className='formleftlogin'>
                        <label className='Login'>Đăng nhập</label>
                        <input {...register('username')} placeholder="Username hoặc Email" className='inputusername' />
                        <input {...register('password')} type="password" placeholder="Mật khẩu" />
                        <button type="submit" className='nutlogin'>Đăng nhập</button>
                    </div>
                    <div className='formrightlogin'>
                        <p className='xinchaologin'>Xin Chào !</p>
                        <p className='taoblogchoriengminh'>Hãy tạo blog cho riêng mình.</p>
                        <button type="submit" className='nutlogin2'>Đăng kí</button>
                    </div>
                </form>
            </div>
            <div className="overlaylogin show" onClick={handleOverlayClick}>
                <img src={anhbanlamviec1} alt="huhu" />
            </div>
        </div>
    );
};

export default Dangnhap;
