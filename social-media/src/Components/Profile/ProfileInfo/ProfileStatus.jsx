import React, { Component } from 'react';

class ProfileStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            textStatus:'Something status',
        }
    }

    activateEditMode = () => {
        this.setState((state,props)=>({
            editMode:true,
        }));
    }

    deactivateEditMode = () => {
        this.setState((state,props)=>({
            editMode:false,
        }));
    }

    onChangeTextStatus = (event) => {
        this.setState({
            textStatus:event.target.value,
        });
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ?
                    <div>
                        <span onClick={this.activateEditMode}>Status:{this.state.textStatus}</span>
                    </div>
                    :
                    <div>
                        <input
                        onChange={(event)=> this.onChangeTextStatus(event)} 
                        onBlur={this.deactivateEditMode} 
                        placeholder='Write your status'
                        autoFocus={true}
                         />
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;
