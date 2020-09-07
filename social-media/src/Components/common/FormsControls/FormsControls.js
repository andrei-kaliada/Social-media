import React from 'react';
import './FormsControls.scss';

const FormControl = ({ input, meta: { touched, error, warning }, ...props }) => {
    let style = error && touched ? "error" : null;

    return (
        <div className={style}>
            <div>
                {props.children}
            </div>
            {error && touched &&
                <div>
                    <span>{error}</span>
                </div>
            }
        </div>
    );
}

export const TextArea = (props) => {

    return (
        <FormControl {...props}>
            <textarea {...props.input} {...props} />
        </FormControl>
    );
}

export const Input = (props) => {

    return (
        <FormControl {...props}>
            <input {...props.input} {...props} />
        </FormControl>
    );
}