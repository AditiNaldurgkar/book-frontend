import React, { useEffect, useState } from 'react'
import axios from "axios";
import Button from '../../components/Button/Button';
import BookCard from '../../components/Bookcard/bookcard';
import "./home.css"
import homemain from "./../../components/Bookshop-cuate.png"
function Home() {
    const [Books,setBooks] = useState([""])
    useEffect(() => {
        loadbooks(); 
    }, []);
    const loadbooks=async ()=>{ 
        const response = await axios.get("https://book-backend-rlyf.onrender.com/books") 
        setBooks(response.data)
    }
  return (
    <div>
         <div>
            <img src={homemain} className='img'></img>
            <h1 className='homehead'>Home</h1>
            {Books.length > 0 ? (
          Books.map((book, index) => (
            <BookCard key={index} bookkey ={index} name={book.name} price={book.price} />
          ))
        )  : (
                <p>No books available</p>
            )}
        <Button/>
        </div>
    </div>
    
  )
}

export default Home