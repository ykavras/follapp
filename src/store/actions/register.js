import {
    REGISTER_DEFAULT,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    REGISTER_USERNAME_CHANGED,
    REGISTER_PASSWORD_CHANGED,
    REGISTER_EMAIL_CHANGED,
} from "./types";
import api from '../../lib/api';

export const fetchingRequest = (type) => ({ type });

export const fetchingSuccess = (type, json) => ({ type, payload: json });

export const fetchingFailure = (type, error) => ({ type, payload: error });

export const register = (username, password, email) => {
    const data = { username, password, email };
    return async dispatch => {
        dispatch(fetchingRequest(REGISTER_REQUEST));
        try {
            const response = await api.post('/users/', data);
            const payload = await response.data;
            dispatch(fetchingSuccess(REGISTER_SUCCESS, payload));
        } catch (error) {
            dispatch(fetchingFailure(REGISTER_FAILURE, error.response));
        }
    }
};

export const usernameChanged = (text) => {
    return {
        type: REGISTER_USERNAME_CHANGED,
        payload: text
    }
};
export const passwordChanged = (text) => {
    return {
        type: REGISTER_PASSWORD_CHANGED,
        payload: text
    }
};

export const emailChanged = (text) => {
    return {
        type: REGISTER_EMAIL_CHANGED,
        payload: text
    }
};

export const registerDefault = () => {
    return async dispatch => {
        dispatch(fetchingRequest(REGISTER_DEFAULT));
    }
};
