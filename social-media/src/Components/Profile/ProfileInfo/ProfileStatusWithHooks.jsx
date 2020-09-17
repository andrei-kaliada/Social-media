import React, { useState, useEffect } from 'react';

function ProfileStatus(props){
    const [editMode, changeEditMode] = useState(false);
    const [textStatus, changeTextStatus] = useState(props.status);
    

    useEffect(()=>{
        
        changeTextStatus(props.status);
    },[props.status]);
   

    const activateEditMode = () => {

        changeEditMode(true);
    }

    const deactivateEditMode = () => {
        changeEditMode(false);

        props.updateUserStatus(textStatus);
    }

    const onChangeTextStatus = (event) => {
        changeTextStatus(event.target.value);
    }

  

        
        return (
            <div>
                {!editMode
                    ?
                    <div>
                        
                        <span id="statusText" onClick={activateEditMode}>Status:{props.isFetching ?

                            <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

                            : textStatus}</span>
                    </div>
                    :
                    <div>
                        <input
                            onChange={(event) => onChangeTextStatus(event)}
                            onBlur={deactivateEditMode}
                            value={textStatus}
                            autoFocus={true}
                        />
                    </div>
                }
            </div>
        );
    }

export default ProfileStatus;
