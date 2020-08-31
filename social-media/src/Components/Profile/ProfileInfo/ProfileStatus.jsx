import React, { Component } from 'react';

class ProfileStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            textStatus: this.props.status,
        }
    }

    activateEditMode = () => {

        this.setState((state, props) => ({
            editMode: true,
        }));
    }

    deactivateEditMode = () => {
        this.setState((state, props) => ({
            editMode: false,
        }));

        this.props.updateUserStatus(this.state.textStatus);
    }

    onChangeTextStatus = (event) => {
        this.setState({
            textStatus: event.target.value,
        });
    }

    render() {
   
        return (
            <div>
                {!this.state.editMode
                    ?
                    <div>
                        <label for="statusText">Status:</label>
                        <span id="statusText" onClick={this.activateEditMode}>{this.props.isFetching ?

                            <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

                            : this.state.textStatus}</span>
                    </div>
                    :
                    <div>
                        <input
                            onChange={(event) => this.onChangeTextStatus(event)}
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
