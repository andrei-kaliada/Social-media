import React from 'react';
import {CreateField} from '../../../common/FormsControls/FormsControls';

export default function ProfileDataForm({setFullName, hundlerUpdateProfile}) {
    return (
        <form>
            <div className="modal__header">
                <h3>Edit Profile</h3>
              </div>
              <div className="modal__main-content main-content">
                <p>Customize Your Intro</p>
                <div className="main-content__inputs">
                  <p>Full name: <input onChange={e=>setFullName(e.target.value)} type="text"/></p>
                  <p>Full name: <CreateField /></p>
                </div>
              </div>
              <div className="modal__editBtn">
                <button onClick={hundlerUpdateProfile}>Edit Your About Info</button>
              </div>
        </form>
    )
}
