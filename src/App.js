
import './App.css';
import React from 'react';
import Home from './Components/page/Home';
import Baidang from './Components/page/Baidang';
import { Route, Routes } from 'react-router-dom';
import { Menu } from "antd";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Menu items={[
        { lable: "/Trang chủ" },
        { lable: "/Tìm kiếm" },
        { lable: "/Bài đăng" },
        { lable: "/Thông báo" },
        { lable: "/Tạo bài viết" },
        { lable: "/Thể loại" },
      ]}></Menu>
      <Content />
    </div>
  )
  function Content() {
    return <div>
      <Routes>
        <Route path="/Trang chủ" element={<Home />} />
        <Route path="//Tìm kiếm" element={<Baidang />} />
        <Route path="/Bài đăng" element={<Baidang />} />
        <Route path="/Thông báo" element={<Baidang />} />
        <Route path="/Tạo bài viết" element={<Baidang />} />
        <Route path="/Thể loại" element={<Baidang />} />
      </Routes>
    </div>
  }
}

export default App;
