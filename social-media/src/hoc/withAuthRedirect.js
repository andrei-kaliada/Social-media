import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router';

let mapStateToPropsForRedirect = (state) => {
    return{
        auth:state.auth.isAuth
    }
}

export default function withAuthRedirect(Component) {


    class RedirectComponent extends React.Component {
        constructor(props){
            super(props);
        }

        render() {
            debugger
            if(!this.props.isAuth){
                return <Redirect to="/login"/>
            }
            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    
    return ConnectedAuthRedirectComponent;
}
