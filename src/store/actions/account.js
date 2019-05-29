import {
    ACCOUNT_ADDED_REQUEST,
    ACCOUNT_ADDED_SUCCESS,
    ACCOUNT_ADDED_FAILURE
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
