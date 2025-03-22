import React from 'react'
import "./bookcard.css"
import { Link } from 'react-router-dom'
import axios from 'axios'
const deletebtn = async (name) => {
  try {
    await axios.delete(`https://book-backend-rlyf.onrender.com/books/${name}`);
    window.location.reload(); 
  } catch (error) {
    console.error("Error deleting book:", error);
  }
};

function BookCard({name,price}) {

  return (
    <Link to={`/detail/${name}`} style={{textDecoration: 'none'}}> 
    <div className='bookcard'> 
    <span>{name}</span>
    <button className='delbtn'onClick={(e)=>{
      e.stopPropagation();
      deletebtn(name);
    }}>Delete</button>
    </div>
    </Link>
  )
}

export default BookCard