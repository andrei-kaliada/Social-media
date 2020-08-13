import React from 'react';
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from '../MyPosts/MyPostsContainer';

export default function Profile(props) {
    return (
        <div className="MainContent">
                <ProfileInfo  profile={props.profile}/>
                <MyPostsContainer />
            </div>
    )
}
