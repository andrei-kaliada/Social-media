const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likeCount: 12 },
        { id: 2, message: 'Hello', likeCount: 11 },
        { id: 3, message: 'I am fine', likeCount: 10 },
      ],
      newPostsText: 'Something'
};

const profileReducer = (state=initialState, action) => {
        
    switch(action.type){
        case ADD_POST :{
            let newPost = {
                id: state.posts.length+1,
                message: state.newPostsText,
              }
              state.posts.push(newPost);
              state.newPostsText = '';
              return state;
        }
        case UPDATE_NEW_POST_TEXT :{
            state.newPostsText = action.newText;
            return state;
        }
        default: return state;
    }

}


export const addPostActionCreator = () => {
    return {
        type:ADD_POST,
    }
  }
  
  export const updateNewPostTextActionCreator = (text) => {
    return {
        type:UPDATE_NEW_POST_TEXT,
        newText:text,
    }
  }

export default profileReducer;