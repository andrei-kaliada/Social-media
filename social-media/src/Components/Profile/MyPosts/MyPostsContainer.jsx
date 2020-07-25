import React, { Component } from 'react';
import './MyPosts.scss';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';



const mapStateToProps = (state) => {
    return{
        newPostsText:state.profilePage.newPostsText,
        posts:state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        addPost:() => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText:(text) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;