import React, { Component } from 'react';
import Post from './Post/Post';
import './MyPosts.scss';
import { Field, reduxForm } from 'redux-form';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';


function myPostForm(props){
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component="textarea" name="myPostMessage" placeholder={"Write some message"}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
}

const MyPostFormContainer = reduxForm({
    form:'myPost'
})(myPostForm);

const MyPosts = ({ posts, addPost }) => {

    let submit = (value) => {
        console.log(value.myPostMessage);
        addPost(value.myPostMessage);
    }



    return (
        <div className="bostsBlock">
            <div className="bostsBlock__title">
                <h3>My posts</h3>
            </div>
            <div>
                <MyPostFormContainer onSubmit={submit}/>
            </div>
            <div className="posts">
                {posts && posts.map((post) => (
                    <Post
                        key={post.id}
                        message={post.message}
                        likes={post.likeCount}
                    />
                ))}

            </div>
        </div>
    );
}

export default MyPosts;