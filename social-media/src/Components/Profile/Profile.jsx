import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({dispatch,newPostsText, posts}) => {
    return (
        <div className="MainContent">
            <ProfileInfo />
            <MyPosts 
            dispatch={dispatch}
             newPostsText={newPostsText}
              posts={posts}
              />
        </div>
    );
}

export default Profile;