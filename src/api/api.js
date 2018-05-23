import { create } from 'apisauce';
import { Urls } from '../configs';


const baseApi = create({
    baseURL: Urls.BASE_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + Urls.ACCESS_TOKEN
    }
});

const Api = {
    get(endpoint, params) {
        return baseApi.get(endpoint, params);
    },
};


export default Api;
