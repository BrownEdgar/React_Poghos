import axios from 'axios';
import { useState, useEffect } from 'react';


export default function useFetchData({ url }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log(url)
    setLoading(true)
    axios(url)
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [url])


  return [data, loading, error];
}
