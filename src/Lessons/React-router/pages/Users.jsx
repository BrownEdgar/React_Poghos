// export default function Users({ users }) {
//   console.log(users)
//   return (
//     <h1 className='pre'>
//       {
//         JSON.stringify(users, ['username', "email"], 1)
//       }
//     </h1>
//   )
// }

import { useState } from 'react'
import { Link } from 'react-router-dom'
import useFetchData from '../../hooks/CustomHooks/useFetchData'
import Pagination from '../components/Pagination/Pagination';
import UsersLoader from '../../Loaders/UserLoader'

export default function Users() {
  const [page, setPage] = useState(1);
  const [perPage] = useState(1);

  const [data, loading, error] = useFetchData({
    url: 'https://jsonplaceholder.typicode.com/users',
    limit: perPage,
    start: (page * perPage) - perPage
  })


  const changePage = (n) => setPage(() => n)

  return (
    <div className='Users'>
      <div className='UserList'>

        {loading ? (
          <div className="loader">
            <UsersLoader />
          </div>
        ) : (
          <>
            {
              data?.map(user => {
                return (
                  <Link
                    key={user.id}
                    className="UserList__item"
                    to={`/users/${user.id}`}
                  >
                    <span>Name : {user.name}</span>
                    <span>Username : {user.username}</span>
                    <span>Email : {user.email}</span>
                    <span>City : {user.address.city}</span>
                    <span>Company : {user.company.name}</span>
                  </Link>
                )
              })
            }
          </>
        )}
      </div>
      <Pagination total={10} perPage={perPage} changePage={changePage} />
    </div>
  )
}
