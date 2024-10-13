import React from 'react';
import './New.css';
import tintuc1 from "../../../Assets/Tintucimg/tintuc1.jpg";
import tintuc2 from "../../../Assets/Tintucimg/tintuc2.jpg";
import tintuc4 from "../../../Assets/Tintucimg/tintuc4.jpg";
const New = () => {
    return (
        <div className="sidebar1">
            <div className='sidebarleft'>
                <h2>Tin tức mới nhất</h2>
                <div className="news-item">
                    <img src={tintuc1} alt="News" />
                    <p>Hai phương án xây cầu Cần Thơ 2</p>
                </div>
                <div className="news-item">
                    <img src={tintuc2} alt="News" />
                    <p>Bé trai 7 tuổi Làng Nủ xuất viện trên xe lăn</p>
                </div>
                <div className="news-item">
                    <img src={tintuc2} alt="News" />
                    <p>Vụ án 100 kg ma túy khiến bà trùm Oanh Hà bị truy nã đặc biệt</p>
                </div>
                <div className="news-item">
                    <img src={tintuc4} alt="News" />
                    <p>Đề xuất đầu tư cao tốc Bắc Kạn - Cao Bằng</p>
                </div>
            </div>
            <div className='sidebar-right'>
                <h2>Tin tức đề xuất</h2>
                <div className="news-item">
                    <img src={tintuc1} alt="News" />
                    <p>Hai đại tá Ukraine bị cáo buộc âm mưu ám sát ông Zelensky</p>
                </div>
                <div className="news-item">
                    <img src={tintuc1} alt="News" />
                    <p>Hai đại tá Ukraine bị cáo buộc âm mưu ám sát ông Zelensky</p>
                </div>
                <div className="news-item">
                    <img src={tintuc1} alt="News" />
                    <p>Hai đại tá Ukraine bị cáo buộc âm mưu ám sát ông Zelensky</p>
                </div>
                <div className="news-item">
                    <img src={tintuc1} alt="News" />
                    <p>Hai đại tá Ukraine bị cáo buộc âm mưu ám sát ông Zelensky</p>
                </div>
            </div>
        </div>
    );
}

export default New;
