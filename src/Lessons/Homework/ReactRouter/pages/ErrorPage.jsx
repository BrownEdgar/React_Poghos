import {} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ROUTES from '../routes'

export default function ErrorPage() {
    const navigate = useNavigate()
    const goHome = ()=> {
        // navigate(ROUTES.HOME)
        // navigate({
        //     pathname:ROUTES.HOME,
        // })
        navigate(-1)
        // window.open(),<a href=""></a>ayl site gnalu hamar

    }
  return (
    <div>
        <h2 style={{color:'grey'}}>
            404|Page not found!
        </h2>
        <Link to={ROUTES.HOME}>Go Home</Link>
        <button onClick={goHome}>Go Home</button>
    </div>
  )
}
