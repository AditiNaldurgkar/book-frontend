import React, { useEffect, useState } from 'react';
import axios from "axios";
import Button from '../../components/Button/Button';
import BookCard from '../../components/Bookcard/bookcard';
import "./home.css";
import homemain from "./../../components/Bookshop-cuate.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    loadbooks();
  }, []);

 const loadbooks = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/books`
  );

  const formattedBooks = response.data
    .map(item => {
      if (!item) return null;
      if (item.data) return item.data;
      return item;
    })
    .filter(book => book && book.name); 

  setBooks(formattedBooks);
};
  const getSortedBooks = () => {
    if (!search.trim()) return books;

    const lowerSearch = search.toLowerCase();

    const matched = books.filter(book =>
      book.author?.toLowerCase().includes(lowerSearch)
    );

    const unmatched = books.filter(book =>
      !book.author?.toLowerCase().includes(lowerSearch)
    );

    return [...matched, ...unmatched];
  };
  const handleLogout = async () => {
  await axios.post(`${process.env.REACT_APP_API_URL}/logout`);

  localStorage.removeItem("user"); 
  navigate("/"); 
};


  return (
    <div>
      <img src={homemain} className="img" alt="home" />
      <h1 className="homehead">Welcome to the world of Books!!</h1>
      <button onClick={handleLogout}>Logout</button>
      <input
        className="searchbar"
        type="text"
        placeholder="Search your favourite author year..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {books.length > 0 ? (
        getSortedBooks().map((book, index) => (
          <BookCard
            key={index}
            bookkey={index}
            name={book.name}
            author={book.author}
            price={book.price}
          />
        ))
      ) : (
        <p className="errormsg">Oops! No books available</p>
      )}

      <Button />

      <div className="quote">
        <span>
          A room without books is like a body without a soul." — Cicero
        </span>
        <br />
        Our mission is to connect souls with stories. Whether you are looking
        for a hidden gem or want to champion a classic, this is your space to
        explore and exchange book recommendations.
      </div>
    </div>
  );
}

export default Home;
