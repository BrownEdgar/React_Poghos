import React, {useState} from 'react'
import './App.scss'
import { nanoid } from 'nanoid'
import Users from './Users/Users'


export default function App() {
const [users, setusers] = useState([])

const handleSubmit = (e) => {
    e.preventDefault()
    const { username, email } = e.target;
    const isEmailExist = users.some(user => user.email === email.value.trim());

    if (isEmailExist) {
        alert ('this user is alredy exist!')
    } else {
        const user = {
            id: nanoid(),
            username: username.value.trim(),
            email: email.value.trim(),
}
setusers([...users, user])
e.target.reset()
    }
}
    

return (
 <div className='App'>
<h1 className='App_title'>Contact Us</h1>
<p className='App_text'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptates dolore sint eaque nemo voluptatum itaque alias excepturi cupiditate, odio ratione soluta quo consequuntur earum explicabo reiciendis iure nesciunt repellendus.
</p>
<form className='App__form' onSubmit={handleSubmit}>
    <input type="text" placeholder='Name' name='username' required />
    <input type="email" placeholder='Email' name='email' required />
    <input type="submit" value='Send' />

</form>
<hr />
<Users users={users} />

    </div>
   )
}
