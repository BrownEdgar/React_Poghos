import { useState } from 'react'
import './App.scss'
import { arr } from './info';


export default function App() {

  const [country, setCountry] = useState(arr[0]);

  const handleChange = (e) => {
    setCountry(JSON.parse( e.target.value))
  }
  return (
    <div>
      <select name="countries" id="countries" onChange={handleChange} defaultValue={country}>
        {
          arr.map(item => {
            return (
            <option value={JSON.stringify(item)} key={item.id}>{item.name}</option>
            )
          })
        }
      </select>
      <h1 style={{marginLeft:15}}>{country.name }</h1>
      <h2>Capital:{country.capital}</h2>
      <div className='Info'>
      <div className='Images' >
      <img src={country.countryImg} className='map'/>
      <div className="Catalog">
      {
        country.images.map((img,index) => {
            return <img  src={img} className='image' key={index}/>     
        })
      }
      </div>

      </div> 
      <p className='Desc'>{country.description}</p>
      </div>
    </div>
  )
}