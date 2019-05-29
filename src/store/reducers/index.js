import { combineReducers } from "redux";
import accountReducer from './accountReducer';
import loginReducer from './loginReducer';

export default combineReducers({
    accountReducer,
    loginReducer
})
