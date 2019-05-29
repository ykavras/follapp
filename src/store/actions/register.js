import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from "./types";
import api from '../../lib/api';

export const fetchingPeopleRequest = (type) => ({ type });

export const fetchingPeopleSuccess = (type, json) => ({ type, payload: json });

export const fetchingPeopleFailure = (type, error) => ({ type, payload: error });

export const register = (username, email, password) => {
    const data = { username, email, password };
    return async dispatch => {
        dispatch(fetchingPeopleRequest(REGISTER_REQUEST));
        try {
            const response = await api.post('/users/', data);
            const payload = await response.data;
            dispatch(fetchingPeopleSuccess(REGISTER_SUCCESS, payload));
        } catch (error) {
            dispatch(fetchingPeopleFailure(REGISTER_FAILURE, error.response));
        }
    }
};