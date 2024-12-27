import React, { useEffect, useState } from 'react'
import axios from "axios";
import Button from '../../components/Button/Button';

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
                <ul>
                    {Books.map((book, index) => (
                        <li key={index}>{book.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No books available or loading...</p>
            )}
        <Button/>
        </div>
    </div>
    
  )
}

export default Home