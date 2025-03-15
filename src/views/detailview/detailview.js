import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Update from '../update/update';
import "./detail.css"
import home from "./../../components/home (2).png"

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
        console.log(response.data)
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
       <Link to={"/"}> <img className='homeimg' src={home}></img></Link>
      <h1 className='heading-d'>Detail View</h1>
      <div className='maindiv'>
      <span className='span'>Name: {name}</span><br/>
      <span className='span'>Price: </span>
        <span>{bookDetails.data.price}</span> <br/>
        <span className='span'>About the book :</span>
        <span>{bookDetails.data.description}</span>
        </div>
        <img src={bookDetails.data.imglink} className='bookimg'/>
        <Link to={`/update/${name}`}>
        <button className='btn-update'>Update Price</button>
        </Link>
        
     
    </div>
  );
}


export default Detailview;
