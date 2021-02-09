import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export const useFetch = () => {
    const [APIresult, setAPIResult] = useState();
    const [APIStatusCode, SetAPIStatusCode] = useState(500);
    const [APIerror, setAPIError] = useState();
    const [isLoading, setIsLoading] = useState(false);


    interface IFetchAPI {
        method: string,
        url: string,
        data?: any,
        config?: any,
        withCredentials?: boolean
    }

    const fetchAPI: any = async ({ method, url, data = null, config = null, withCredentials = false }: IFetchAPI) => {

        url = process.env.NODE_ENV === 'production' ? url : `http://localhost:8000/${url}`;

        let options: any = {
            method,
            url,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data,
            withCredentials: withCredentials
        };

        setIsLoading(true);
        await new Promise(r => setTimeout(r, 1000));

        try {
            axios(options)
                .then(res => {
                    setAPIResult(res.data);
                    SetAPIStatusCode(res.status || 500);
                })
                .catch(err => {
                    setAPIError(err.response);
                    SetAPIStatusCode(err.response.status || 500);
                })
                .finally(() => {
                    setIsLoading(false);
                })

        } catch (e) {
            setIsLoading(false);
        }

    };

    return [isLoading, APIresult, APIerror, fetchAPI, APIStatusCode];
};
