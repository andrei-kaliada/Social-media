import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import userReducer from './users-reducer';

let reducers = combineReducers({
/* It's state*/    profilePage:profileReducer,
 /* It's state*/   dialogsPage:dialogsReducer,
/* It's state*/    sidebar:sidebarReducer,
/* It's state*/     usersPage:userReducer,
})


let store = createStore(reducers);


export default store;