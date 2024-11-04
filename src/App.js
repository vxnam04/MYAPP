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
import { Navigate } from 'react-router-dom';
import Headers from './Components/Headers/Headers';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Taobaiviet from './Components/page/Taobaiviet/Taobaiviet';
import AvatarMenu from './Components/Headers/avt/avt';
import Comment from './Components/Comments/Comment';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [isAvatarMenuOpen, setIsAvatarMenuOpen] = useState(false); // Avatar menu state
  const [isAvatarcomment, setIscomment] = useState(false);
  const openModal = () => {
    setIsModalOpen(true); // Open modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  const toggleAvatarMenu = () => {
    setIsAvatarMenuOpen(!isAvatarMenuOpen); // Toggle avatar menu
  };
  const togglecomment = () => {
    setIscomment(!isAvatarcomment);
  };
  return (
    <>
      <div><Loginlogup /></div>
      <div>
        <Headers toggleAvatarMenu={toggleAvatarMenu} />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <SideMenu
            openModal={openModal}
            isModalOpen={isModalOpen}
            closeModal={closeModal}
          />
          <Content />
          {isAvatarcomment && <Comment />}
          {isAvatarMenuOpen && <AvatarMenu />} {/* Render AvatarMenu conditionally */}
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

function SideMenu({ openModal, isModalOpen, closeModal }) {
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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <Menu className="lable"
        onClick={handleClick}
        items={[
          { label: <><i className="fa-solid fa-house"></i> Trang chủ</>, key: "/Trang chủ" },
          { label: <><i className="fa-solid fa-search"></i> Tìm kiếm</>, key: "/Tìm kiếm" },
          { label: <><i className="fa-solid fa-newspaper"></i> Bài đăng</>, key: "/Bài đăng" },
          { label: <><i className="fa-solid fa-bell"></i> Thông báo</>, key: "/Thông báo" },
          { label: <><i className="fa-solid fa-pen"></i> Tạo bài viết</>, key: "/Tạo bài viết" },
        ]}
      />
    </div>
  );
}

function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/Trang chủ" />} />
        <Route path="/Trang chủ" element={<Home />} />
        <Route path="/Tìm kiếm" element={<Timkiem />} />
        <Route path="/Bài đăng" element={<Baidang />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/comment" element={<Comment />} />
        <Route path="/Tạo bài viết" element={<Taobaiviet />} />
        <Route path="/Chỉnh sửa bài viết" element={<Chinhsua />} />
        <Route path="/Chỉnh sửa trang cá nhân" element={<Chinhsuatcn />} />
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
