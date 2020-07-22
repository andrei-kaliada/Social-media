import React from 'react'
import "./Dialogs.scss";
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';

export default function DialogsContainer({ store }) {
    let state = store.getState();
    

    let addNewMessage = () => {
        store.dispatch(addMessageActionCreator());
    }

    let onChangeMessage = (text) => {
        
        store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <Dialogs 
        dialogsPage={state.dialogsPage}
        addMessage={addNewMessage}
        changeMessage={onChangeMessage}
        />
    )
}
