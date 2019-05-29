import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "./types";
import api from '../../lib/api';

export const fetchingPeopleRequest = (type) => ({ type });

export const fetchingPeopleSuccess = (type, json) => ({ type, payload: json });

export const fetchingPeopleFailure = (type, error) => ({ type, payload: error });

export const login = (username, password) => {
    const data = { username, password };
    return async dispatch => {
        dispatch(fetchingPeopleRequest(LOGIN_REQUEST));
        try {
            const response = await api.post('/token-auth/', data);
            const payload = await response.data;
            dispatch(fetchingPeopleSuccess(LOGIN_SUCCESS, payload));
        } catch (error) {
            dispatch(fetchingPeopleFailure(LOGIN_FAILURE, error.response));
        }
    }
};
