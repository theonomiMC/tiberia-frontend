import { useState, useEffect, useCallback } from 'react';
import axios from 'axios'

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const fetchStats = useCallback(async () => {
        try {
            setIsLoading(true)
            let res = await axios.get(url)
            if (res.status === 200) {
                setIsLoading(false)
                setData(res.data)
            }

        } catch (err) {
            setIsLoading(false)
            setError('Could not loading!..')
            setData([])
            console.log(err)
        } finally {
            setIsLoading(false)
        }

    }, [url])
    useEffect(() => {
        fetchStats()
    }, [fetchStats])
    return { data, error, isLoading }
};

export default useFetch
