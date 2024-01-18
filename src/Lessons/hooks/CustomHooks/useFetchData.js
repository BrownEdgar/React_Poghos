import{useState, useEffect} from 'react'
import axios from "axios"

export default function useFetchData({url}) {
    const [data,setData] = useState(null)
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        axios(url)
            .then(res => {
                setData(res.data)
            })
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    },[url])
  return [data,loading,error];
}
