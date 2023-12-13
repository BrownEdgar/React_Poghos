import {useState,useEffect} from 'react'
import axios from 'axios'
import instance from './axios'
import './Products.scss'

const axiosOptions = (limit=10,skip=0) => {
    return {
        params:{
            limit:limit,
            skip:skip,
        }
    }
}

export default function Products() {
    const [carts, setCarts] = useState([])

    useEffect(() => {
      axios.all([
        instance('products',axiosOptions(1,0)),
        instance('carts',axiosOptions(10,2)),
      ])
      .then(([products,carts]) => {
        console.log([products,carts]);
        setCarts(carts.data.carts)

      })
      .catch(err => console.log(err))
      .finally(() => console.log('Be happy!'))

    }, [])
    

  return (
    <div className='Items'>
        <div className='Items__Carts'>
        {
            carts.map(cart => {
                return(
                    <div key={cart.id} className='Items__Cart'>
                        <div className='Items__CartProducts'>
                            {
                                cart.products.map(prod => {
                                    return(
                                        <div key={prod.id} className='Items__CartProduct'>
                                            <h2>{prod.title}</h2>
                                            <img src={`${prod.thumbnail}`} alt={`${prod.title}`} style={{'opacity':0.6 + prod.quantity/10}} />
                                            <span>Quantity:{prod.quantity}</span>
                                            <span>Price:{prod.price}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <span>Total Price:{cart.total}</span>
                        <span>Total Products:{cart.totalProducts}</span>
                        <span>Total Quantity:{cart.totalQuantity}</span>
                    </div>
                )
            })
        }
        </div>

    </div>
  )
}
