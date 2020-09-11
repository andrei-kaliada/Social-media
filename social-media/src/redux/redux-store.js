import {combineReducers, createStore, applyMiddleware} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import userReducer from './users-reducer';
import authReducer from './auth-reduser';
import appReducer from './app-reducer';
import thunkMiddlewar from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
/* It's state*/    profilePage:profileReducer,
 /* It's state*/   dialogsPage:dialogsReducer,
/* It's state*/    sidebar:sidebarReducer,
/* It's state*/     usersPage:userReducer,
/* It's state*/     auth:authReducer,
                    form:formReducer,
                    appInit:appReducer,
})


let store = createStore(reducers, applyMiddleware(thunkMiddlewar));

document.store = store;


export default store;