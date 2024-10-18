import './App.css';
import React, { useState } from 'react';
import Home from './Components/page/Home/Home';
import Baidang from './Components/page/Baidang/Baidang';
import Profile from './Components/Proflie/Profile';
import Timkiem from './Components/page/Timkiem/Timkiem';
import Dangnhap from './Components/Dangnhap/Dangnhap';
import Dangki from './Components/Dangki/Dangki';
import Thongbao from './Components/page/Thongbao/Thongbao';
import Chinhsuatcn from './Components/Chinhsuatrangcanhan/Chinhsuatcn/Chinhsuatcn';
import Chinhsua from './Components/Chinhsuatrangcanhan/chinhsuabaiviet/Chinhsua';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Menu } from "antd";
import Headers from './Components/Headers/Headers';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Taobaiviet from './Components/page/Taobaiviet/Taobaiviet';
import AvatarMenu from './Components/Headers/avt/avt';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const openModal = () => {
    setIsModalOpen(true); // Open modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };
  return (
    <>
      <div><Loginlogup /></div>
      <div >
        <Headers />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <SideMenu openModal={openModal} isModalOpen={isModalOpen} closeModal={closeModal} />
          <Content />
        </div>
        <Footer />
        <Thongbao isOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </>
  );
}

function Footer() {
  return <div>Footer</div>;
}

function SideMenu({ openModal, isModalOpen, closeModal }) { // Accept isModalOpen and closeModal as props
  const navigate = useNavigate();

  const handleClick = ({ key }) => {
    if (key === '/Thông báo') {
      if (isModalOpen) {
        closeModal(); // Close modal if it's open
      } else {
        openModal(); // Open modal if it's closed
      }
    } else {
      navigate(key); // Navigate to other pages
    }
  };
  return (
    <div className="Sidemenu">
      <Menu className="lable"
        onClick={handleClick}
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
        <Route path="/Chỉnh sửa bài viết" element={<Chinhsua />} />
        <Route path="/Chỉnh sửa trang cá nhân" element={<Chinhsuatcn />} />
        <Route path="/avt" element={<AvatarMenu />} />
        {/* <Route path="/Đăng nhập" element={<Dangnhap />} />
        <Route path="/Đăng ký" element={<Dangki />} /> */}
      </Routes>
    </div>
  );
}
function Loginlogup() {
  return (
    <div>
      <Routes>
        <Route path="/Đăng nhập" element={<Dangnhap />} />
        <Route path="/Đăng ký" element={<Dangki />} />
      </Routes>
    </div>
  );
}
export default App;
