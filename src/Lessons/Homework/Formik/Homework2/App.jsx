import './App.scss'
import { useState } from 'react'
import List from './List/List'
import jsonData from './data'


const citiesList = ['Yerevan',"London","Montevideo","NYC","Avarayr","Los Angeles","San Francisco","Athens","Liverpool","Ulm" ,"All"]

export default function App() {
  const [users, setusers] = useState(jsonData);

  return (
    <div className='App'>
      <List citiesList={citiesList} users={users} />
    </div>
  )
}


