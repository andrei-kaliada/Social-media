import {combineReducers, createStore, applyMiddleware} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import userReducer from './users-reducer';
import authReducer from './auth-reduser';
import thunkMiddlewar from 'redux-thunk';


let reducers = combineReducers({
/* It's state*/    profilePage:profileReducer,
 /* It's state*/   dialogsPage:dialogsReducer,
/* It's state*/    sidebar:sidebarReducer,
/* It's state*/     usersPage:userReducer,
/* It's state*/     auth:authReducer,
})


let store = createStore(reducers, applyMiddleware(thunkMiddlewar));


export default store;