import {
    REGISTER_DEFAULT,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    REGISTER_USERNAME_CHANGED,
    REGISTER_PASSWORD_CHANGED,
    REGISTER_EMAIL_CHANGED,
} from "../actions/types";

const INITIAL_STATE = {
    username: '',
    password: '',
    email: '',
    isRegister: false,
    registerErrorMessage: null,
    register: null,
};

export default function (state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case REGISTER_DEFAULT:
            return { ...state, isRegister: false, registerErrorMessage: null, register: null, username: '', password: '', email: '' };
        case REGISTER_REQUEST:
            return { ...state, isRegister: true, registerErrorMessage: null, register: null };
        case REGISTER_SUCCESS:
            return { ...state, isRegister: false, register: payload, username: '', password: '', email: '', };
        case REGISTER_FAILURE:
            return { ...state, isRegister: false, registerErrorMessage: payload };
        case REGISTER_USERNAME_CHANGED:
            return { ...state, username: payload };
        case REGISTER_PASSWORD_CHANGED:
            return { ...state, password: payload };
        case REGISTER_EMAIL_CHANGED:
            return { ...state, email: payload };
        default:
            return state;
    }
};
