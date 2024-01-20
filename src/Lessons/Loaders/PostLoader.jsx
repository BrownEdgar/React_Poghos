import React from 'react'
import ContentLoader from 'react-content-loader'

const PostLoader = props => {
  return (
    <ContentLoader
      speed={2}
      width={600}
      height={600}
      viewBox="0 0 600 600"
      backgroundColor="#ccc"
      foregroundColor="tomato"
      {...props}
    >
      <rect x="5" y="60" rx="4" ry="4" width="580" height="44" />
      <rect x="5" y="125" rx="4" ry="4" width="580" height="44" />
      <rect x="5" y="184" rx="4" ry="4" width="580" height="44" />
      <rect x="5" y="243" rx="4" ry="4" width="580" height="44" />
      <rect x="5" y="302" rx="4" ry="4" width="580" height="44" />
    </ContentLoader>
  )
}

export default PostLoader