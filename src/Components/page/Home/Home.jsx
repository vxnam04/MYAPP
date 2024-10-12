import React from 'react';
import MainContent from "./MainContent";
import Sidebar from "./Sidebar"

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className='Maincontent'>
                    <MainContent />
                </div>
                <div className='Sidebar'>
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}
export default Home
