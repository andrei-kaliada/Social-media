import React from 'react';
import {CreateField} from '../../../common/FormsControls/FormsControls';
import {Input, TextArea} from '../../../common/FormsControls/FormsControls';
import { reduxForm } from 'redux-form';

export  function ProfileDataForm({setFullName, hundlerUpdateProfile, profile, handleSubmit}) {
 
    return (
        <form onSubmit={handleSubmit}>
            <div className="modal__header">
                <h3>Edit Profile</h3>
              </div>
              <div className="modal__main-content main-content">
                <p>Customize Your Intro</p>
                <div className="main-content__inputs">
                  <div>
                  <p>Full name: {CreateField("Full name", "fullName", [], Input)} </p>
                  </div>
                  <div>
                  <p>Looking for a job: {profile.lookingForAJob ? "Yes" : "No"} </p>
                  {CreateField("","lookingForAJob",[],Input, {type:"checkbox"})}
                  </div>
                  <div>
                  <p>My professional skills:{profile.lookingForAJobDescription}</p>
                  {CreateField("Descriptions skills","skills",[],TextArea, )}
                  </div>
                  <div>
                  <p>About Me:{profile.aboutMe}</p>
                  {CreateField("About me","aboutMe",[],Input, )}
                  </div>

                </div>
                
              </div>
              <div>
                <button onClick={()=>{}}>Save</button>
              </div>
        </form>
    )
}


export default reduxForm({
  form:'profileDataForm',
})(ProfileDataForm);
