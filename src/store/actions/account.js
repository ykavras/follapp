import {
    ACCOUNT_ADDED_DEFAULT,
    ACCOUNT_ADDED_REQUEST,
    ACCOUNT_ADDED_SUCCESS,
    ACCOUNT_USERNAME_CHANGED,
    ACCOUNT_ADDED_FAILURE,
    ACCOUNT_LISTING_REQUEST,
    ACCOUNT_LISTING_SUCCESS,
    ACCOUNT_LISTING_FAILURE,
    GET_ACCOUNT_REQUEST,
    GET_ACCOUNT_SUCCESS,
    GET_ACCOUNT_FAILURE
} from "./types";
import api from '../../lib/api';

export const fetchingRequest = (type) => ({ type });

export const fetchingSuccess = (type, json) => ({ type, payload: json });

export const fetchingFailure = (type, error) => ({ type, payload: error });


export const accountAdded = (username) => {
    const data = { username };
    return async dispatch => {
        dispatch(fetchingRequest(ACCOUNT_ADDED_REQUEST));
        try {
            const response = await api.post('/ig_accounts/', data);
            const payload = await response.data;
            dispatch(fetchingSuccess(ACCOUNT_ADDED_SUCCESS, payload));
        } catch (error) {
            dispatch(fetchingFailure(ACCOUNT_ADDED_FAILURE, error.response));
        }
    }
};

export const accountListingFunc = () => {
    return async dispatch => {
        dispatch(fetchingRequest(ACCOUNT_LISTING_REQUEST));
        try {
            const response = await api.get('/ig_accounts/');
            const payload = await response.data.reverse();
            dispatch(fetchingSuccess(ACCOUNT_LISTING_SUCCESS, payload));
        } catch (error) {
            dispatch(fetchingFailure(ACCOUNT_LISTING_FAILURE, error.response));
        }
    }
};

export const getAccount = (id) => {
    return async dispatch => {
        dispatch(fetchingRequest(GET_ACCOUNT_REQUEST));
        try {
            const response = await api.get('/ig_accounts/' + id + '/',);
            const payload = await response.data;
            dispatch(fetchingSuccess(GET_ACCOUNT_SUCCESS, payload));
        } catch (error) {
            dispatch(fetchingFailure(GET_ACCOUNT_FAILURE, error.response));
        }
    }
};

export const usernameChanged = (text) => {
    return {
        type: ACCOUNT_USERNAME_CHANGED,
        payload: text
    }
};

export const defaultAccountAdded = () => {
    return async dispatch => {
        dispatch(fetchingRequest(ACCOUNT_ADDED_DEFAULT));
    }
};
