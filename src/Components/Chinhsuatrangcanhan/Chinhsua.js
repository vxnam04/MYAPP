import React from 'react';
import './Chinhsua.css'; // Đảm bảo đường dẫn đến file CSS là chính xác
import anhtaobaiviet from "../../Assets/profile.jpg"; // Đảm bảo đường dẫn đến hình ảnh là chính xác

const Chinhsua = ({ closeModal }) => {
    return (
        <>
            <div className="container2">
                <div className='headertaobaiviet1'>
                    <button onClick={closeModal} className='nutdong3'>Hủy</button> {/* Nút để đóng modal */}
                    <p className='taobaivietmoi1'>Chỉnh sửa bài viết mới</p>
                    <button className="submit-button2">Chia sẻ</button>
                </div>
                <div className='thanhchan'></div>
                <div className='containt-taobaiviet'>
                    <textarea
                        placeholder="Nhập vào nội dung......"
                        maxLength="200"
                        className="content-input2"
                    ></textarea>
                    <div className="image-upload2">
                        <div className='tieudebaiviet'>
                            <textarea
                                placeholder="Nhập vào tiêu đề bài viết......"
                                maxLength="200"
                                className="content-input3"
                            ></textarea>
                            <div className='thanhchan1'></div>
                        </div>
                        <div className='anhbaiviet'>
                            <label htmlFor="file-input">
                                <div className="image-placeholder2">
                                    <img src={anhtaobaiviet} alt="Upload" className='anhtaobaiviet' />
                                </div>
                            </label>
                            <input type="file" accept="image/*" id="file-input" className='nhapanhtaobaiviet' />
                            <label htmlFor="file-input" className='upload-label'>Chọn hình ảnh</label>
                        </div>
                    </div>
                </div>
            </div>
            {/* Lớp phủ */}
            <div className="overlay show" onClick={closeModal}></div>
        </>
    );
};

export default Chinhsua;
