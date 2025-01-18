import React from 'react'
import "./bookcard.css"
import { Link } from 'react-router-dom'
function BookCard({name,price}) {

  return (
    <Link to={`/detail/${name}`} style={{textDecoration: 'none'}}> 
    <div className='bookcard'> 
    <span>{name}</span>
    </div>
    </Link>
  )
}

export default BookCard