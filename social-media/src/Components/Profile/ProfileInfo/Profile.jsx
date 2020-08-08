import React from 'react';
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from '../MyPosts/MyPostsContainer';

export default function Profile() {
    return (
        <div className="MainContent">
                <ProfileInfo />
                <MyPostsContainer />
            </div>
    )
}
