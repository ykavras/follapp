import {
    ACCOUNT_ADDED_REQUEST,
    ACCOUNT_ADDED_SUCCESS,
    ACCOUNT_ADDED_FAILURE,
    ACCOUNT_LISTING_REQUEST,
    ACCOUNT_LISTING_SUCCESS,
    ACCOUNT_LISTING_FAILURE,
    GET_ACCOUNT_REQUEST,
    GET_ACCOUNT_SUCCESS,
    GET_ACCOUNT_FAILURE
} from "../actions/types";

const INITIAL_STATE = {
    isAccount: false,
    accountErrorMessage: null,
    account: null,
    isAccountListing: false,
    accountListingErrorMessage: null,
    accountListing: null,
    isGetAccount: false,
    getAccountErrorMessage: null,
    getAccount: null,
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
        case ACCOUNT_LISTING_REQUEST:
            return { ...state, isAccountListing: true, accountListingErrorMessage: null, accountListing: null };
        case ACCOUNT_LISTING_SUCCESS:
            return { ...state, isAccountListing: false, accountListing: payload };
        case ACCOUNT_LISTING_FAILURE:
            return { ...state, isAccountListing: false, accountListingErrorMessage: payload };
        case GET_ACCOUNT_REQUEST:
            return { ...state, isGetAccount: true, getAccountErrorMessage: null, getAccount: null };
        case GET_ACCOUNT_SUCCESS:
            return { ...state, isGetAccount: false, getAccount: payload };
        case GET_ACCOUNT_FAILURE:
            return { ...state, isGetAccount: false, getAccountErrorMessage: payload };
        default:
            return state;
    }
}
