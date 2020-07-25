import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let reducers = combineReducers({
/* It's state*/    profilePage:profileReducer,
 /* It's state*/   dialogsPage:dialogsReducer,
/* It's state*/    sidebar:sidebarReducer
})


let store = createStore(reducers);


export default store;