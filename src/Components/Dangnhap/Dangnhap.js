import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './Dangnhap.css';
import { useNavigate } from 'react-router-dom';
import anhbanlamviec1 from "../../Assets/banlamviec.avif";
import { Link } from 'react-router-dom';
import { getUser } from '../../API/UserService'; // Nhập các hàm API đã tạo

const Dangnhap = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState(null);

    const onSubmit = async (data) => {
        try {
            // Gọi API đăng nhập
            const response = await axios.post('http://localhost:5000/users', data);
            console.log('User logged in:', response.data);

            // Lấy chi tiết người dùng từ response
            const user = await getUser(response.data.userId);
            console.log("User data:", user);

            // Điều hướng đến trang Profile và truyền dữ liệu user
            navigate('/Profile', { state: { user } });

        } catch (error) {
            console.error('Có lỗi khi đăng nhập!', error);
            setError('Đăng nhập thất bại!'); // Hiển thị thông báo lỗi
        }
    };

    const handleOverlayClick = (e) => {
        e.preventDefault();
        navigate(-1); // Quay lại trang trước đó
    };

    return (
        <div className="container5">
            <button onClick={handleOverlayClick} className='nutdong6'>x</button>

            <div className='formlogin1'>
                <form onSubmit={handleSubmit(onSubmit)} className='formlogin'>
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
                        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Hiển thị thông báo lỗi nếu có */}
                    </div>
                    <div className='formrightlogin'>
                        <p className='xinchaologin'>Xin Chào !</p>
                        <p className='taoblogchoriengminh'>Hãy tạo blog cho riêng mình.</p>
                        <Link to="/Dang ky">
                            <button type="button" className='nutlogin2'>Đăng kí</button> {/* Nút Đăng ký */}
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
