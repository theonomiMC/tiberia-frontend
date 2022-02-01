import { useState, useEffect, useCallback } from 'react';
import axios from 'axios'

export const useFetch = (url) => {
    const [stat, setStat] = useState([])
    const fetchStats = useCallback(async () => {
        try {
            let res = await axios.get(url)
            setStat(res.data)
        } catch (err) {
            console.log(err)
        }

    }, [url])
    useEffect(() => {
        fetchStats()
    }, [fetchStats])
    return stat
};
