const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

type DialogsType = {
  id:number,
  name:string
}

type MessagesType = {
  id:number,
  message:string
}

let initialState = {

  dialogs: [
    { id: 1, name: 'Alex' },
    { id: 2, name: 'Britani' },
    { id: 3, name: 'Flex' },
    { id: 4, name: 'Steave' },
    { id: 5, name: 'Robert' },
  ] as Array<DialogsType>,
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hello' },
    { id: 3, message: 'How are you?' },
    { id: 4, message: 'I am fine' },
    { id: 5, message: 'It is good' },
    { id: 6, message: 'Yes. I know.' },
  ] as Array<MessagesType>,
  newMessageText: 'Input message' as string
};

export type InitialStateType = typeof initialState;

export const dialogsReducer = (state = initialState, action:any):InitialStateType => {

  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, {
          id: state.messages.length + 1,
          message: action.text
        }],
        newMessageText: '',
      }
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.newMessage
      }
    default: return state;
  }

}

type AddMessageActionCreatorType = {
  type: typeof ADD_MESSAGE,
  text:string
}

export const addMessageActionCreator = (text:string) : AddMessageActionCreatorType => {
  return {
    type: ADD_MESSAGE,
    text
  }
}

type UpdateNewMessageTextActionCreatorType = {
  type: typeof UPDATE_NEW_MESSAGE_TEXT,
  newMessage:string
}

export const updateNewMessageTextActionCreator = (text:string):UpdateNewMessageTextActionCreatorType => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: text,
  }
}

export default dialogsReducer;