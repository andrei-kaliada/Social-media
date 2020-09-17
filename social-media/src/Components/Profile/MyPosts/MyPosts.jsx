import React from 'react';
import Post from './Post/Post';
import './MyPosts.scss';
import { Field, reduxForm } from 'redux-form';
import {required, maxLength} from '../../../utils/validators/validators';
import {TextArea} from '../../common/FormsControls/FormsControls';


const maxLengthCreator = maxLength(10);

function myPostForm(props){
    const { handleSubmit } = props;
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field 
                component={TextArea}
                name="myPostMessage" 
                placeholder={"Write some message"}
                validate={[required, maxLengthCreator]}
                />
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

const MyPosts = (props) => {
  

  let submit = value => {
    console.log(value.myPostMessage);
    props.addPost(value.myPostMessage);
  };

  console.log("RENDER");
  let posts  = props.posts.map(post => <Post key={post.id} message={post.message} likes={post.likeCount} />)

  return <div className="bostsBlock">
            <div className="bostsBlock__title">
                <h3>My posts</h3>
            </div>
            <div>
                <MyPostFormContainer onSubmit={submit} />
            </div>
            <div className="posts">
            <button onClick={props.reverceMsg}>Reverce Messages</button>
                {props.posts && posts}
                
            </div>
        </div>;
};

export default React.memo(MyPosts);