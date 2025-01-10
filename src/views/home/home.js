import React, { useEffect, useState } from 'react'
import axios from "axios";
import Button from '../../components/Button/Button';
import BookCard from '../../components/Bookcard/bookcard';

function Home() {
    const [Books,setBooks] = useState([""])
    useEffect(() => {
        loadbooks(); 
    }, []);
    const loadbooks=async ()=>{ 
        const response = await axios.get("http://localhost:5000/books") 
        setBooks(response.data)
    }
  return (
    <div>
         <div>
            <h1>Home</h1>
            {Books.length > 0 ? (
          Books.map((book, index) => (
            <BookCard key={index} name={book.name} price={book.price} />
          ))
        )  : (
                <p>No books available or loading...</p>
            )}
        <Button/>
        </div>
    </div>
    
  )
}

export default Home