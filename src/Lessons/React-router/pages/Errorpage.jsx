import { Link, useNavigate } from 'react-router-dom';
import ROUTES from '../routes';

export default function Errorpage() {
  const navigate = useNavigate();

  const goHome = () => {
    // navigate(ROUTES.HOME)
    // navigate({
    //   pathname: ROUTES.HOME,
    // })
    navigate(-1)
  }

  return (
    <div>
      <h2 style={{ color: 'grey' }}>
        404 | Page not found
      </h2>
      <Link to={ROUTES.HOME}>Go home</Link>
      <button onClick={goHome}>go home</button>
    </div>
  )
}
