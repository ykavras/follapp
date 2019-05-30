import {
    ACCOUNT_ADDED_REQUEST,
    ACCOUNT_ADDED_SUCCESS,
    ACCOUNT_ADDED_FAILURE,
    ACCOUNT_LISTING_REQUEST,
    ACCOUNT_LISTING_SUCCESS,
    ACCOUNT_LISTING_FAILURE,
    GET_ACCOUNT_REQUEST,
    GET_ACCOUNT_SUCCESS,
    GET_ACCOUNT_FAILURE,
} from "./types";
import api from '../../lib/api';

export const fetchingPeopleRequest = (type) => ({ type });

export const fetchingPeopleSuccess = (type, json) => ({ type, payload: json });

export const fetchingPeopleFailure = (type, error) => ({ type, payload: error });

export const accountAdded = (username) => {
    const data = { username };
    return async dispatch => {
        dispatch(fetchingPeopleRequest(ACCOUNT_ADDED_REQUEST));
        try {
            const response = await api.post('/ig_accounts/', data);
            const payload = await response.data;
            dispatch(fetchingPeopleSuccess(ACCOUNT_ADDED_SUCCESS, payload));
        } catch (error) {
            dispatch(fetchingPeopleFailure(ACCOUNT_ADDED_FAILURE, error.response));
        }
    }
};

export const accountListing = () => {
    return async dispatch => {
        dispatch(fetchingPeopleRequest(ACCOUNT_LISTING_REQUEST));
        try {
            const response = await api.get('/ig_accounts/');
            const payload = await response.data.reverse();
            dispatch(fetchingPeopleSuccess(ACCOUNT_LISTING_SUCCESS, payload));
        } catch (error) {
            dispatch(fetchingPeopleFailure(ACCOUNT_LISTING_FAILURE, error.response));
        }
    }
};

export const getAccount = (id) => {
    return async dispatch => {
        dispatch(fetchingPeopleRequest(GET_ACCOUNT_REQUEST));
        try {
            const response = await api.get('/ig_accounts/' + id + '/',);
            const payload = await response.data;
            dispatch(fetchingPeopleSuccess(GET_ACCOUNT_SUCCESS, payload));
        } catch (error) {
            dispatch(fetchingPeopleFailure(GET_ACCOUNT_FAILURE, error.response));
        }
    }
};