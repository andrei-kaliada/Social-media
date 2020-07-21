const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {

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
};


export const dialogsReducer = (state=initialState, action) => {

    switch(action.type){
        case ADD_MESSAGE:{
            state.messages.push({
                id: state.messages.length + 1,
                message: state.newMessageText
            });
    
            state.newMessageText = '';
            return state;
        }
        case UPDATE_NEW_MESSAGE_TEXT:{
            state.newMessageText = action.newMessage;
            return state;
        }
        default: return state;
    }
 
}

export const addMessageActionCreator = () => {
    return {
      type:ADD_MESSAGE,
    }
  }
  
  export const updateNewMessageTextActionCreator = (text) => {
    return {
      type:UPDATE_NEW_MESSAGE_TEXT,
      newMessage:text,
    }
  }

export default dialogsReducer;