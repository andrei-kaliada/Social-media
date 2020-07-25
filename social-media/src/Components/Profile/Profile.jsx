import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({store}) => {
    return (
        <div className="MainContent">
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;