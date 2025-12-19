import React, { useEffect, useState } from 'react'
import axios from "axios";
import Button from '../../components/Button/Button';
import BookCard from '../../components/Bookcard/bookcard';
import "./home.css"
import homemain from "./../../components/Bookshop-cuate.png"
function Home() {
    const [Books,setBooks] = useState([])
    useEffect(() => {
        loadbooks(); 
    }, []);
    const loadbooks=async ()=>{ 
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/books`) 
        setBooks(response.data)
    }
  return (
    <div>
         <div>
            <img src={homemain} className='img'></img>
            <h1 className='homehead'>Welcome to the world of Books!!</h1>
            {Books.length > 0 ? (
          Books.map((book, index) => (
            <BookCard key={index} bookkey ={index} name={book.name} price={book.price} />
          ))
        )  : (
                <p className='errormsg'>Oops!No books available</p>
            )}
        <Button/>
        <div className='quote'>
          किताबें हमारी सबसे अच्छी दोस्त होती हैं, वो न शिकायत करती हैं न मांग करती हैं... बस साथ देती हैं
        </div>
        </div>
    </div>
    
  )
}

export default Home