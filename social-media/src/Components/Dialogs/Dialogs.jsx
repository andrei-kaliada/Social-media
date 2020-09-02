import React from 'react'
import "./Dialogs.scss";
import Message from './Message/index';
import DialogItem from './DialogItem/index';
import { Field, reduxForm, reset } from 'redux-form';

function DialogsForm(props){

    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit} enableReinitialize={true}>
           <div>
            <Field component="textarea" name="messageInput"></Field>
           </div>
            <button>Send</button>
        </form>
    );
}

const DialogsFormContainer = reduxForm({
    form:'message'
})(DialogsForm);

// dispatch(reset('message'));

export default function Dialogs({ dialogsPage, addMessage, changeMessage, isAuth }) {

    console.log(dialogsPage.dialogs)
    // let addNewMessage = () => {
    //     addMessage();
    // }

    // let onChangeMessage = (event) => {

    //     changeMessage(event.target.value);
    // }

    let submit = (value) => {
        console.log(value.messageInput);
        addMessage(value.messageInput);
    }

    return (
        <>
            <div className="dialogs">
                <ul className="dialogs__items">
                    {dialogsPage && dialogsPage.dialogs.map(dialog => (
                        <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
                    ))}
                </ul>
                <div className="dialogs__messages">
                    {dialogsPage && dialogsPage.messages.map(element => (
                        <Message key={element.id} message={element.message} />
                    ))}
                </div>
                <div className="inputMessage">
                        <DialogsFormContainer onSubmit={submit}/>
                </div>
            </div>
        </>
    )
}
