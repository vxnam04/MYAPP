import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import "./Dangki.css";
import { useNavigate } from 'react-router-dom';
import logodangki from '../../Assets/Logo.png';
import anhbanlamviec2 from '../../Assets/banlamviec.avif';
const Dangki = () => {
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
    const handleOverlayClick5 = (e) => {
        e.preventDefault(); // Ngăn chặn hành vi mặc định
        navigate(-1);
    };


    return (
        <div>
            <button onClick={handleOverlayClick5} className='nutdong6'>x</button>
            <div className="dangki-container">

                <img src={logodangki} alt="anhlogodangki" className='anhlogodangki' />
                <form className="dangki-form" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register('username')} className="dangki-input dangki-username" placeholder="Username" />
                    <div className='xoayngang'>
                        <input {...register('firstName')} className="dangki-input dangki-firstName" placeholder="First Name" />
                        <input {...register('lastName')} className="dangki-input dangki-lastName" placeholder="Last Name" />
                    </div>
                    <input {...register('email')} className="dangki-input dangki-email" type="email" placeholder="Email" />
                    <input {...register('password')} className="dangki-input dangki-password" type="password" placeholder="Password" />
                    <input {...register('dob')} className="dangki-input dangki-dob" type="date" placeholder="Date of Birth" />
                    <input {...register('address')} className="dangki-input dangki-address" placeholder="Address" />
                    <button type="submit" className="dangki-submit">Đăng kí</button>
                </form>

            </div>
            <div className="overlaylogin5 show5" onClick={handleOverlayClick5}>
                <img src={anhbanlamviec2} alt="huhu" />
            </div>
        </div>
    );
};

export default Dangki;
