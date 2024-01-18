import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ROUTES from '../routes'

export default function Errorpage() {

    const navigate = useNavigate()

    const goHome = () => {
        // navigate(ROUTES.HOME)

        // navigate ({
        //     pathname:ROUTES.HOME,
        // })

        navigate(-1)
    }

  return (
    <div>
        <h2 style={{color:"grey"}}>
            404 | Page Not Faund
        </h2>
        <Link to={ROUTES.HOME}>Go Home</Link>
        <button onClick={goHome}>Go Home</button>
    </div>
  )
}
