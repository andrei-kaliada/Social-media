
import "./Dialogs.scss";
import Dialogs from './Dialogs';
import {addMessageActionCreator } from '../../redux/dialogs-reducer.ts';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {reset} from 'redux-form';
import withAuthRedirect from '../../hoc/withAuthRedirect';
 

let mapStateToProps = (state) => {
    return {
        dialogsPage:state.dialogsPage,
        isAuth:state.auth.isAuth,
    }
} 

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (text) => {
            dispatch(addMessageActionCreator(text));
            dispatch(reset('message'));
        },

        // changeMessage:(text) => {
        //     dispatch(updateNewMessageTextActionCreator(text));
        // }
    }
}


export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)
(Dialogs);
