import React from 'react'
import "./bookcard.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
const deletebtn = async (name) => {
  try {
    const encodedName = encodeURIComponent(name); // Encode before sending
    await axios.delete(`${process.env.REACT_APP_API_URL}/books/${encodedName}`);
    window.location.reload();
  } catch (error) {
    console.error("Error deleting book:", error.response?.data || error.message);
  }
};


function BookCard({name,price,author}) {

  return (
    <Link to={`/detail/${name}`} style={{textDecoration: 'none'}}> 
    <div className='bookcard'> 
    <span className='bookname'>{name}</span>
    <br/>
    <span className='authorname'>{author}</span>
    <button className='delbtn'onClick={(e)=>{
       e.preventDefault();
      e.stopPropagation();
      deletebtn(name);
    }}>Delete</button>
    </div>
    </Link>
  )
}

export default BookCard