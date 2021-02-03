import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export const useFetch = () => {
    const [result, setResult] = useState();
    const [error, setError] = useState();
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
        await new Promise(r => setTimeout(r, 2000));

        try {
            axios(options)
                .then(res => {
                    setResult(res.data);
                })
                .catch(err => {
                    setError(err.response);
                })
                .finally(() => {
                    setIsLoading(false);
                })

        } catch (e) {
            setIsLoading(false);
        }

    }, [setIsLoading, setResult]);

    return [isLoading, result, error, fetchAPI];
};
