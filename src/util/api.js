import axios from 'axios'
import config from 'src/config'

const instance = axios.create({
    baseURL: config.serverUrl,
    timeout: 15000,
    withCredentials: true
});
instance.defaults.headers.common['Content-Type'] = 'application/json';
export default {
    get(url, params) {
        return new Promise((resolve, reject) => {
            instance.get(url, { params })
            .then(res => {
                resolve(res.data);
            }).catch(error => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
               } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
               } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
               }
               console.log(error.config);
               reject(error);
            })
        })
    },
    post(url, params) {
        return new Promise((resolve, reject) => {
            instance.post(url, params)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    console.log(err);
                    reject(err);
                });
        })
    }
}