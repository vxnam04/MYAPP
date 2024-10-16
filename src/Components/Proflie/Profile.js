import React from 'react';
import Post from './Baivietcuatoi/Baivietcuatoi';
import Profileheader from './Profileheader/Profileheader.js';
function Profile() {
    return (
        <div className="App">
            <Profileheader />
            <div className="posts">
                <Post />
            </div>
        </div>
    );
}
export default Profile;
