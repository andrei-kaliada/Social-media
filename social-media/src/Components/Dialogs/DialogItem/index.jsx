import React from 'react';
import { NavLink } from 'react-router-dom';


const  DialogItem = ({name, id}) => {
    return (
        
            <li className="dialog">
                <NavLink to={`/dialogs/${id}`}> {name} </NavLink>
            </li>
    );
}

export default DialogItem;