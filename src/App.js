import './App.css';
import React, { useState } from 'react';
import Home from './Components/page/Home/Home';
import Baidang from './Components/page/Baidang/Baidang';
import Profile from './Components/Proflie/Profile';
import Timkiem from './Components/page/Timkiem/Timkiem';
import Thongbao from './Components/page/Thongbao/Thongbao';
import Chinhsua from './Components/Chinhsuatrangcanhan/Chinhsua';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Menu } from "antd";
import Headers from './Components/Headers/Headers';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Taobaiviet from './Components/page/Taobaiviet/Taobaiviet';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const openModal = () => {
    setIsModalOpen(true); // Open modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <div>
      <Headers />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideMenu openModal={openModal} />
        <Content />
      </div>
      <Footer />
      <Thongbao isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}

function Footer() {
  return <div>Footer</div>;
}

function SideMenu({ openModal }) { // Accept openModal as a prop
  const navigate = useNavigate();

  return (
    <div className="Sidemenu">
      <Menu className="lable"
        onClick={({ key }) => {
          if (key === '/Thông báo') {
            openModal(); // Open modal on notification click
          } else {
            navigate(key); // Navigate to other pages
          }
        }}
        items={[
          { label: "Trang chủ", key: "/Trang chủ" },
          { label: "Tìm kiếm", key: "/Tìm kiếm" },
          { label: "Bài đăng", key: "/Bài đăng" },
          { label: "Thông báo", key: "/Thông báo" },
          { label: "Tạo bài viết", key: "/Tạo bài viết" },
          // { label: "Thể loại", key: "/Thể loại" },
        ]}
      />
    </div>
  );
}

function Content() {
  return (
    <div>
      <Routes>
        <Route path="/Trang chủ" element={<Home />} />
        <Route path="/Tìm kiếm" element={<Timkiem />} />
        <Route path="/Bài đăng" element={<Baidang />} />
        {/* Removed the duplicate Thongbao route */}
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Tạo bài viết" element={<Taobaiviet />} />
        <Route path="/Chỉnh sửa trang cá nhân" element={<Chinhsua />} />
      </Routes>
    </div>
  );
}

export default App;
