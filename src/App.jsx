import { useState, useEffect } from 'react';

import './App.css'

function App() {

  const [posts, setPosts] = useState({
    original: [],
    filtered: []
  });
  const [isLoading, setIsLoading] = useState(false)
  const [currentFilter, setCurrentFilter] = useState("all")

  useEffect(() => {
    console.log("get data")
    const getData = () => {
      setIsLoading(true)
      fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data => {
          setPosts({ original: data.posts, filtered: data.posts })
          setIsLoading(false)
        })
    }
    getData()
  }, [])


  const filteredData = () => {
    if (currentFilter == "all") return posts.original
    const result = posts?.original.filter(post => post.tags.includes(currentFilter));
    return result
  }




  const getAllTags = () => {
    const tags = posts?.original.flatMap(post => post.tags);
    return [...new Set(tags)];
  }

  return (
    <div className='App'>
      <h1>Our Posts</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores totam dolore sit ea velit labore neque quibusdam, quam omnis voluptas, blanditiis, ipsa temporibus veniam maxime laborum saepe nobis ipsam ad?</p>
      <div className="buttons">
        {getAllTags().map(category => {
          return <button
            key={category}
            onClick={() => setCurrentFilter(category)}>
            {category}
            <span></span>
          </button>
        })}
      </div>

      <hr />
      {
        isLoading
          ? <h2>loading...</h2>
          : (
            filteredData().map(post => {
              return (
                <div key={post.id} className='Post'>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                  <div className="tags">
                    <p>
                      {post.tags.map(tag => {
                        return <span key={tag} className='tag'>{tag}</span>
                      })}
                    </p>
                  </div>
                </div>
              )
            })
          )
      }
    </div>
  )
}

export default App


