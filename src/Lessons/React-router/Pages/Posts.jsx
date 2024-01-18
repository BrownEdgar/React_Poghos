import { useEffect } from 'react';
import useFetchData from '../../hooks/CustomHooks/useFetchData'

export default function Posts() {

 const [data,loading,error] = useFetchData({
  url:"http://localhost:3000/posts"
 });
 useEffect(() => {
  console.log("Fetched data:", data);
  console.log("Fetch error:", error);
}, [data,loading,error])

if(loading){
  return <h1>Loading....</h1>
}
  return (
    <div>
        <h1>
            Posts Page 
        </h1>
        <pre>
          {JSON.stringify(data,null,1)}
        </pre>
    </div>
  )
}
