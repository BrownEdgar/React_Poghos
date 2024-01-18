export default function Users({ users }) {
  console.log(users)
  return (
    <h1 className='pre'>
      {
        JSON.stringify(users, ['username', "email"], 1)
      }
    </h1>
  )
}
