import { useState } from 'react'
import './App.scss'
import Child from "./Child"

function App() {

const[stories,setStories] = useState([
  {id:1,title:'Iphone 14',image:  'https://images.unsplash.com/photo-1680776785024-5223d7a75ea8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SXBob25lJTIwMTR8ZW58MHx8MHx8fDA%3D',description:'Why Apple is the best place to buy iPhone.,Why Apple is the best place  '},
  {id:2,title:'Iphone 14 Pro',image:'https://images.unsplash.com/photo-1677144646095-ecd95d06cd71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SXBob25lJTIwMTQlMjBwcm98ZW58MHx8MHx8fDA%3D',description:'Why Apple is the best place to buy iPhone.,Why Apple is the best place '},
  {id:3,title:'Iphone X',image:'https://images.unsplash.com/photo-1516245556508-7d60d4ff0f39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fElwaG9uZSUyMFh8ZW58MHx8MHx8fDA%3D',description:'Why Apple is the best place to buy iPhone.,Why Apple is the best place '},

])

const removeStoriesById = (id) =>{
    setStories((prevValue) =>{
       return prevValue.filter(elem => elem.id !==id)
    })
}

  return (
    <div className='App'>
       <h1 className='App__Title'>Our Shop</h1>
       <p className='App__Desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam perferendis, quos nam, esse cupiditate nobis, eum est minima tenetur assumenda iste! Sunt, obcaecati? Voluptatum aliquam nam fugit amet laudantium voluptatem.</p>
       <div className='App__Menu'>
      {
        stories.map(elem =>{
          return <Child key={elem.id} elem={elem} removeItem={removeStoriesById}/>
        })
      }
       </div>
    </div>
  )
}

export default App 