import React from 'react'

export default function Home({ posts }) {
  return (
      <>
          <h1>Post</h1>
          <hr/>
          { posts && posts.map( (item) => (
              <div key={item.id}>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
              </div>
          )) }
      </>
  )
}