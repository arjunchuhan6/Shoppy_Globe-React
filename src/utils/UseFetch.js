import React from 'react';
import { useEffect, useState } from "react"

const UseFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

//Fetch API to make HTTP requests and handle responses
    useEffect(() => {
        const fetchData = async (url) => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result);

            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        fetchData(url);
    }, [url]);


    return { data, loading, error };



}

export default UseFetch;