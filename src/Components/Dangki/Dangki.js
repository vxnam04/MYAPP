import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './Dangki.css';
import { useNavigate } from 'react-router-dom';
import logodangki from '../../Assets/Logo.png';
import anhbanlamviec2 from '../../Assets/banlamviec.avif';

const Dangki = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:5000/users', data); // URL đầy đủ cho API
            setMessage('Đăng ký thành công!');
            navigate('/Profile');
        } catch (error) {
            console.error('Đã xảy ra lỗi khi đăng ký!', error);
            setMessage('Đăng ký không thành công. Vui lòng kiểm tra lại!');
        }
    };

    const handleOverlayClick5 = (e) => {
        e.preventDefault();
        navigate(-1);
    };

    return (
        <div>
            <button onClick={handleOverlayClick5} className='nutdong6'>x</button>
            <div className="dangki-container">
                <img src={logodangki} alt="Logo Đăng Ký" className='anhlogodangki' />
                <form className="dangki-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className='xoayngang'>
                        <input {...register('firstName')} className="dangki-input dangki-firstName" placeholder="First Name" />
                        <input {...register('lastName')} className="dangki-input dangki-lastName" placeholder="Last Name" />
                    </div>
                    <input {...register('email')} className="dangki-input dangki-email" type="email" placeholder="Email" />
                    <input {...register('password')} className="dangki-input dangki-password" type="password" placeholder="Password" />
                    <input {...register('dob')} className="dangki-input dangki-dob" type="date" placeholder="Date of Birth" />
                    <input {...register('address')} className="dangki-input dangki-address" placeholder="Address" />
                    <button type="submit" className="dangki-submit">Đăng ký</button>
                </form>
                {message && <p className="message">{message}</p>}
            </div>
            <div className="overlaylogin5 show5" onClick={handleOverlayClick5}>
                <img src={anhbanlamviec2} alt="hình ảnh nền" />
            </div>
        </div>
    );
};

export default Dangki;
