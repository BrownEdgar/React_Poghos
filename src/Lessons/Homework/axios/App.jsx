import {useState,useEffect} from 'react'
import axios from 'axios'
import './App.scss'

export default function App() {
    const [quotes, setQuotes] = useState([])

    useEffect(() => {
      axios({
        baseURL:'https://dummyjson.com/',
        url: 'quotes',
        params:{
         limit:10,
         skip:20
       }
    })
      .then(res => {
        setQuotes(res.data.quotes)
        console.log(res);
    })
    
     
    }, [])
    


  return (
    <div className='App'>
        {
            quotes.map(quote => {
                return(
                    <div key={quote.id} className='App__Quote'>
                        <p>{quote.quote}</p>
                        <h3>{quote.author}</h3>
                    </div>
                )
            })
        }

    </div>
  )
}
