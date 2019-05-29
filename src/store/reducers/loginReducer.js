import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "../actions/types";

const INITIAL_STATE = {
    isLogin: false,
    loginErrorMessage: null,
    login: null,
};

export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_REQUEST:
            return { ...state, isLogin: true, loginErrorMessage: null, login: null };
        case LOGIN_SUCCESS:
            return { ...state, isLogin: false, login: payload };
        case LOGIN_FAILURE:
            return { ...state, isLogin: false, loginErrorMessage: payload };
        default:
            return state;
    }
}
