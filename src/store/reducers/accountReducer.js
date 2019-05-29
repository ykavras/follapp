import {
    ACCOUNT_ADDED_REQUEST,
    ACCOUNT_ADDED_SUCCESS,
    ACCOUNT_ADDED_FAILURE
} from "../actions/types";

const INITIAL_STATE = {
    isAccount: false,
    accountErrorMessage: null,
    account: null,
};

export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case ACCOUNT_ADDED_REQUEST:
            return { ...state, isAccount: true, accountErrorMessage: null, account: null };
        case ACCOUNT_ADDED_SUCCESS:
            return { ...state, isAccount: false, account: payload };
        case ACCOUNT_ADDED_FAILURE:
            return { ...state, isAccount: false, accountErrorMessage: payload };
        default:
            return state;
    }
}
