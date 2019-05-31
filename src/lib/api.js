import axios from 'axios'
import store from '../store/index';

const BASE_URL = 'http://emoty88.pythonanywhere.com/api/';


const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000
});

axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

axiosInstance.interceptors.request.use((config) => {
    //config.headers.Authorization = `JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNTkwNjk5NTM2LCJlbWFpbCI6ImVtb3R5ODhAZ21haWwuY29tIiwib3JpZ19pYXQiOjE1NTkxNjM1MzZ9.wTYjNF7DUaIA1__RkKmWqoBhbZ8_9qDyzhxVZLJPPks`
    console.log('REQUEST : ', config);
    const { token } = store.getState().loginReducer;
    if (token !== '' && config != null) {
        console.log(token, config)
        config.headers.Authorization = `JWT ${ token }`;
    }
    return config
}, (err) => Promise.reject(err));

axiosInstance.interceptors.response.use((response) => {
    console.log('RESPONSE : ', response);
    return response
}, error => {
    console.log('response error: ', error.response ? error.response : error);
    return Promise.reject(error)
});

export default axiosInstance
