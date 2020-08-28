import React from 'react'
import "./Dialogs.scss";
import Message from './Message/index';
import DialogItem from './DialogItem/index';



export default function Dialogs({ dialogsPage, addMessage, changeMessage, isAuth }) {

 

    let addNewMessage = () => {
        addMessage();
    }

    let onChangeMessage = (event) => {
        
        changeMessage(event.target.value);
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
                    <textarea onChange={onChangeMessage} value={dialogsPage.newMessageText}></textarea>
                    <button onClick={addNewMessage}>Send</button>
                </div>
            </div>
        </>
    )
}
