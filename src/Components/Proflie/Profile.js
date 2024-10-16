import React from 'react';
import Post from './Baivietcuatoi/Baivietcuatoi';
import Profileheader from '../Proflie/Profileheader/ProfileHeader';
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
