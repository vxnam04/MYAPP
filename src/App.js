
import './App.css';
import React from 'react';
import Home from './Components/page/Home/Home';
import Baidang from './Components/page/Baidang/Baidang';
import Profile from './Components/Proflie/Profile';
import Timkiem from './Components/page/Timkiem/Timkiem';
import Thongbao from './Components/page/Thongbao/Thongbao';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Menu } from "antd";
import Headers from './Components/Headers/Headers';
import '@fortawesome/fontawesome-free/css/all.min.css';

// import { Footer, Header } from 'antd/es/layout/layout';

function App() {

  return (
    <div>
      <Headers />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div ><SideMenu /></div>
        <div ><Content /></div>
      </div>
      <Footer />
    </div>
  );
}
function Footer() {
  return <div>header</div>
}
function SideMenu() {
  const navigator = useNavigate()
  return (
    <div className="Sidemenu">
      <Menu className="lable"
        onClick={({ key }) => {
          navigator(key)
        }}
        items={[
          { label: "Trang chủ", key: "/Trang chủ" },
          { label: "Tìm kiếm", key: "/Tìm kiếm" },
          { label: "Bài đăng", key: "/Bài đăng" },
          { label: "Thông báo", key: "/Thông báo" },
          { label: "Tạo bài viết", key: "/Tạo bài viết" },
          { label: "Thể loại", key: "/Thể loại" },
        ]}></Menu>
    </div>
  )
}
function Content() {
  return <div>
    <Routes>
      <Route path="/Trang chủ" element={<Home />} />
      <Route path="/Tìm kiếm" element={<Timkiem />} />
      <Route path="/Bài đăng" element={<Baidang />} />
      <Route path="/Thông báo" element={<Thongbao />} />
      <Route path="/Tạo bài viết" element={<Baidang />} />
      <Route path="/Thể loại" element={<Baidang />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
  </div>
}


export default App;
