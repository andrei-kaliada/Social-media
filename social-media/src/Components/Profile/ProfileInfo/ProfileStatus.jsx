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

    componentDidUpdate(prevProps, prevState){

        if(prevProps.status !== this.props.status){
            this.setState({
                textStatus:this.props.status
            })
        }
    
    }

    render() {
        
        return (
            <div>
                {!this.state.editMode
                    ?
                    <div>
                        
                        <span id="statusText" onClick={this.activateEditMode}>Status:{this.props.isFetching ?

                            <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>

                            : this.state.textStatus}</span>
                    </div>
                    :
                    <div>
                        <input
                            onChange={(event) => this.onChangeTextStatus(event)}
                            onBlur={this.deactivateEditMode}
                            value={this.state.textStatus}
                            autoFocus={true}
                        />
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;
