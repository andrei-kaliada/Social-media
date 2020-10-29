import React from "react";
import { CreateField } from "../../../common/FormsControls/FormsControls";
import { Input, TextArea } from "../../../common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";

export function ProfileDataForm({
  setFullName,
  hundlerUpdateProfile,
  profile,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className='modal__header'>
        <h3>Edit Profile</h3>
      </div>
      <div className='modal__main-content main-content'>
        <p>Customize Your Intro</p>
        <div className='main-content__inputs'>
          <div>
            <p>Full name: {CreateField("Full name", "fullName", [], Input)} </p>
          </div>
          <div>
            <p>
              Looking for a job:
              {CreateField("", "lookingForAJob", [], Input, {
                type: "checkbox",
              })}{" "}
            </p>
          </div>
          <div>
            <p>Description looking For a job: </p>
            {CreateField(
              "Description looking for a job",
              "LookingForAJobDescription",
              [],
              TextArea
            )}
          </div>
          <div>
            <p>My professional skills:</p>
            {CreateField("Descriptions skills", "skills", [], TextArea)}
          </div>
          <div>
            <p>About Me:</p>
            {CreateField("About me", "aboutMe", [], Input)}
          </div>
          <div>
            <p>
              Contacts:
              {Object.keys(profile.contacts).map((key) => (
                <div key={key} className="inputContact">
                    {key}: {CreateField(`${key}`, `contacts.${key}`, [], Input)}
                </div>
              ))}
            </p>
          </div>
        </div>
      </div>
      <div>
        <button>Save</button>
      </div>
    </form>
  );
}

export default reduxForm({
  form: "profileDataForm",
})(ProfileDataForm);
