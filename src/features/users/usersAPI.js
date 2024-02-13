import axios from "axios"

const getUsers = async()=> {
   const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    return data
}

export default getUsers