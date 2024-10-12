import React from 'react';
import './MainContent.css';
import anhkinhdoanh1 from "../../../Assets/Kinhdoanhimg/kinhdoanh1.jpg";
import anhkinhdoanh2 from "../../../Assets/Kinhdoanhimg/kinhdoanh2.png";
import bongda1 from "../../../Assets/Bongdaimg/bongda1.jpg";
// import bongda2 from "../../../Assets/Bongdaimg/bongda2.jpg";
import thoisu1 from "../../../Assets/thoisuimg/thoisu1.jpg";
import giaoduc1 from "../../../Assets/giaducimg/giaoduc1.png";
const MainContent = () => {
    return (
        <div className='Containmain'>
            <div className='Content-dexuat'>
                <div className="category">

                    <div className="articles">
                        <div className="article1">
                            <img src={anhkinhdoanh1} alt="Article" />
                            <div className='chu'>
                                <p>Giá vàng thế giới tăng mạnh</p>
                                <p className='chunhat'>Số liệu lạm phát Mỹ củng cố khả năng giảm lãi suất tháng tới, giúp giá vàng tăng hơn 20 USD phiên thứ hai liên tiếp...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-content">
                    <div className="category">
                        <h2>Kinh Doanh</h2>
                        <div className="articles">
                            <div className="article">
                                <img src={anhkinhdoanh2} alt="Article" />
                                <div className='chu'>
                                    <p>Người dùng MobiFone sắp được trải nghiệm mạng 5G</p>
                                    <p className='chunhat'>Các dịch vụ 5G đang được MobiFone hoàn tất những công đoạn cuối cùng, dự kiến thương mại hoá và phủ sóng đến nhiều tỉnh thành từ tháng 11...</p>
                                </div>
                            </div>
                            <div className='Contains-nho'>
                                <div className="article2">
                                    <img src={anhkinhdoanh1} alt="Article" />
                                    <div className='chu'>
                                        <p>Giá vàng thế giới tăng mạnh</p>
                                    </div>
                                </div>
                                <div className="article2">
                                    <img src={anhkinhdoanh1} alt="Article" />
                                    <div className='chu'>
                                        <p>Giá vàng thế giới tăng mạnh</p>
                                    </div>
                                </div>
                                <div className="article2">
                                    <img src={anhkinhdoanh1} alt="Article" />
                                    <div className='chu'>
                                        <p>Giá vàng thế giới tăng mạnh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="category">
                        <h2>Bóng Đá</h2>
                        <div className="articles">
                            <div className="article">
                                <img src={bongda1} alt="Article" />
                                <div className='chu'>
                                    <p>Việt Nam - Ấn Độ: Tìm lại năng lượng tích cực</p>
                                    <p className='chunhat'>Việt Nam đã không thắng ba trận chính thức gần nhất, nhưng có thể giải cơn khát ấy trước Ấn Độ tối nay.
                                        * Việt Nam - Ấn Độ: 18h thứ Bảy 12/10, trên VnExpress...</p>
                                </div>
                            </div>
                        </div>
                        <div className='Contains-nho'>
                            <div className="article2">
                                <img src={anhkinhdoanh1} alt="Article" />
                                <div className='chu'>
                                    <p>Giá vàng thế giới tăng mạnh</p>
                                </div>
                            </div>
                            <div className="article2">
                                <img src={anhkinhdoanh1} alt="Article" />
                                <div className='chu'>
                                    <p>Giá vàng thế giới tăng mạnh</p>
                                </div>
                            </div>
                            <div className="article2">
                                <img src={anhkinhdoanh1} alt="Article" />
                                <div className='chu'>
                                    <p>Giá vàng thế giới tăng mạnh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="category">
                        <h2>Thời Sự</h2>
                        <div className="articles">
                            <div className="article">
                                <img src={thoisu1} alt="Article" />
                                <div className='chu'>
                                    <p>Thời sựLao động - Việc làmThứ bảy, 12/10/2024, 11:38 (GMT+7)</p>
                                    <p className='chunhat'>   Lương ứng viên mảng Al cao hơn vị trí khác 10-50%...
                                    </p></div>
                            </div>

                        </div>
                        <div className='Contains-nho'>
                            <div className="article2">
                                <img src={anhkinhdoanh1} alt="Article" />
                                <div className='chu'>
                                    <p>Giá vàng thế giới tăng mạnh</p>
                                </div>
                            </div>
                            <div className="article2">
                                <img src={anhkinhdoanh1} alt="Article" />
                                <div className='chu'>
                                    <p>Giá vàng thế giới tăng mạnh</p>
                                </div>
                            </div>
                            <div className="article2">
                                <img src={anhkinhdoanh1} alt="Article" />
                                <div className='chu'>
                                    <p>Giá vàng thế giới tăng mạnh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="category">
                        <h2>Giáo Dục</h2>
                        <div className="articles">
                            <div className="article">
                                <img src={giaoduc1} alt="Article" />
                                <div className='chu'>
                                    <p>
                                        Giáo dụcDu họcThứ bảy, 12/10/2024, 13:08 (GMT+7)</p>
                                    <p className='chunhat'>Đại học ở Anh bị tố bỏ bê giảng dạy
                                        Sinh viên ngành Kinh doanh, Đại học Regent College London...</p>
                                </div>
                            </div>
                            <div className='Contains-nho'>
                                <div className="article2">
                                    <img src={anhkinhdoanh1} alt="Article" />
                                    <div className='chu'>
                                        <p>Giá vàng thế giới tăng mạnh</p>
                                    </div>
                                </div>
                                <div className="article2">
                                    <img src={anhkinhdoanh1} alt="Article" />
                                    <div className='chu'>
                                        <p>Giá vàng thế giới tăng mạnh</p>
                                    </div>
                                </div>
                                <div className="article2">
                                    <img src={anhkinhdoanh1} alt="Article" />
                                    <div className='chu'>
                                        <p>Giá vàng thế giới tăng mạnh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MainContent;
