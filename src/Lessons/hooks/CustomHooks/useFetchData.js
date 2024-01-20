import axios from 'axios';
import { useState, useEffect } from 'react';


export default function useFetchData({ url, start, limit }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)



  useEffect(() => {
    const axiosConfig = {
      params: {
        _limit: limit,
        _start: start
      }
    }
    setLoading(true)
    axios(url, axiosConfig)
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [url, limit, start])


  return [data, loading, error];
}
