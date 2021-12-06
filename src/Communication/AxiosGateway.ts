import axios from 'axios';

export default class AxiosGateWay {
    public static post(url: string, params: any ) {
        let response = axios.post(url, params);
        response.catch((error: any) => {
            if(!error.response) {
                console.log(error);
            }
        })
        return response;
    }
    public static put(url: string, params: any ) {
        let response = axios.put(url, params)
        response.catch((error: any) => {
            if(!error.response) {
                console.log(error);
            }
        })
        return response;
    }
    public static get(url: string) {
        var response = axios.get(url);
        response.catch(error => {
            if(!error.response) {
                console.log(error);
            }
        })
        return response;
    }
}