import React, { Component} from 'react';
import './MyPosts.scss';
import MyPosts from './MyPosts';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';




const MyPostsContainer = ({store}) => {
    let state = store.getState();

    let addPost = () => {
        store.dispatch(addPostActionCreator())
    }

    let updateNewPostText = (text) => {
        store.dispatch(updateNewPostTextActionCreator(text))
    }
    
        return (
            <MyPosts 
            addPost={addPost} 
            updateNewPostText={updateNewPostText}
            newPostsText={state.profilePage.newPostsText}
            posts={state.profilePage.posts}
            />
        );
    }

export default MyPostsContainer;