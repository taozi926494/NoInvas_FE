import { Message } from 'element-ui';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const request = axios.create({
    baseURL: 'http://localhost:5000'
})

request.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
request.interceptors.response.use(function(response) {
    return Promise.resolve(response.data);
}, function(error) {
    let message;
    if (error.response) {
        message = error.response.data.message;
    } else {
        message = error.toString()
    }
    Message.error({
        message: message
    });
    return Promise.reject({ error: error })
})

export default request;