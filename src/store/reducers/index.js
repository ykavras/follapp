import { combineReducers } from "redux";
import accountReducer from './accountReducer';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';

export default combineReducers({
    accountReducer, loginReducer, registerReducer
})
