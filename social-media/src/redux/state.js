import dialogsReducer from '../redux/dialogs-reducer.ts'; 
import profileReducer from '../redux/profile-reducer.ts'; 
import sidebarReducer from '../redux/sidebar-reducer.ts'; 

let store = {

  _callSubscriber() {
    console.log('State change');
  },


  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likeCount: 12 },
        { id: 2, message: 'Hello', likeCount: 11 },
        { id: 3, message: 'I am fine', likeCount: 10 },
      ],
      newPostsText: 'Something'

    },
    dialogsPage: {
      dialogs:[
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Britani' },
        { id: 3, name: 'Flex' },
        { id: 4, name: 'Steave' },
        { id: 5, name: 'Robert' },
      ],
      messages:[
        {id:1, message:'Hi'},
        {id:2, message:'Hello'},
        {id:3, message:'How are you?'},
        {id:4, message:'I am fine'},
        {id:5, message:'It is good'},
        {id:6, message:'Yes. I know.'},
      ],
      newMessageText:'Input message'
    },
    sidebar:{}
    
  },

  getState() {

    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },


  dispatch(action) { //action - Object

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);

  },

}


console.log(store._state);

window.store = store;
export default store;




