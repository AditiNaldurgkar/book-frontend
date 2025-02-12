import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Update from '../update/update';

function loaddetail(name) {
  return axios.get(`http://localhost:5000/books/${name}`);
}

function Detailview() {
  const { name } = useParams(); 
  const [bookDetails, setBookDetails] = useState(null); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await loaddetail(name);
        setBookDetails(response.data); 
      } catch (err) {
        console.error(err); 
        setError('Failed to fetch book details.'); 
      }
    };

    fetchDetails();
  }, [name]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!bookDetails) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <h1>Detail View</h1>
      <span>Name: {name}</span>
        <p>{bookDetails.data.price}</p> 
        <Link to={`/update/${name}`}>
        <button >Update</button>
        </Link>
        
     
    </div>
  );
}


export default Detailview;
