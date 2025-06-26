import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
       <h1>404</h1>
      <h2>Page not found</h2>
      <h3>Go back to main page: <Link to="/">Main Page</Link></h3>
    </div>
  )
}

export default NotFound