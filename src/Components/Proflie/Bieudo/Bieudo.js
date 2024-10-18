import React, { useState, useEffect } from 'react';
import './SimpleMovingBarChart.css';  // Import file CSS

const SimpleMovingBarChart = () => {
    const [data, setData] = useState([30, 20, 70, 90, 50, 40, 50, 60]); // Dữ liệu khởi tạo
    const [animated, setAnimated] = useState(false); // Trạng thái để kích hoạt hiệu ứng

    useEffect(() => {
        // Tạo hiệu ứng chuyển động bằng cách cập nhật dữ liệu mỗi 2 giây
        const interval = setInterval(() => {
            setData((prevData) => {
                // Thêm một giá trị mới ngẫu nhiên vào mảng và xóa giá trị cũ nhất
                const newData = [...prevData.slice(1), Math.floor(Math.random() * 100)];
                return newData;
            });
        }, 2000);

        // Đặt trạng thái animated sau khi component đã render
        setAnimated(true);

        return () => clearInterval(interval); // Dọn dẹp khi component bị huỷ
    }, []);

    return (
        <div className="chart-container">
            {data.map((value, index) => (
                <div
                    key={index}
                    className={`bar ${animated ? 'bar-animate' : ''}`}
                    style={{ height: `${value}%` }}
                >
                    {value}%
                </div>
            ))}
        </div>
    );
};

export default SimpleMovingBarChart;
