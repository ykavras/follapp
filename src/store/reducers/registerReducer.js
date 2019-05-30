import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from "../actions/types";

const INITIAL_STATE = {
    isRegister: false,
    registerErrorMessage: null,
    register: null,
};

export default function (state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case REGISTER_REQUEST:
            return { ...state, isRegister: true, registerErrorMessage: null, register: null };
        case REGISTER_SUCCESS:
            return { ...state, isRegister: false, register: payload };
        case REGISTER_FAILURE:
            return { ...state, isRegister: false, registerErrorMessage: payload };
        default:
            return state;
    }
};
