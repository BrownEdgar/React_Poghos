import axios from "axios"

const getPosts = async () => {
   const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=3')
        return data
}

export default getPosts