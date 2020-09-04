import React from 'react';
import './FormsControls.scss';

export const TextArea = ({input, ...props}) => {

let style = input.onDragStart ? "notError" : "error";

    return(
        <div className={style}>
            <textarea {...input} {...props}/>
        </div>
    );
}