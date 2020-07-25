import React from 'react'
import "./Dialogs.scss";
import Dialogs from './Dialogs';
import {addMessageActionCreator,updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage:state.dialogsPage
    }
} 

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        changeMessage:(text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;
