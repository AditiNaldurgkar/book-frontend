import React from 'react'
import "./Button.css"
import { Link } from 'react-router-dom'

export default function Button() {
  return (
    <Link to="/add">
    <button className='btn'>
        Add
    </button>
    </Link>
  )
}
