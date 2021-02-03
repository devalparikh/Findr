import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export const useFetch = () => {
    const [APIresult, setAPIResult] = useState();
    const [APIerror, setAPIError] = useState();
    const [isLoading, setIsLoading] = useState(false);

    interface IFetchAPI {
        method: string,
        url: string,
        data?: any,
        config?: any
    }

    const fetchAPI: any = useCallback(async ({ method, url, data }: IFetchAPI) => {
        let options: any = {
            method,
            url,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data
        };


        setIsLoading(true);
        await new Promise(r => setTimeout(r, 1000));

        try {
            axios(options)
                .then(res => {
                    setAPIResult(res.data);
                })
                .catch(err => {
                    setAPIError(err.response);
                })
                .finally(() => {
                    setIsLoading(false);
                })

        } catch (e) {
            setIsLoading(false);
        }

    }, [setIsLoading, setAPIResult]);

    return [isLoading, APIresult, APIerror, fetchAPI];
};
