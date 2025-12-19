import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Update from '../update/update';
import "./detail.css"
import home from "./../../components/home (2).png"

function loaddetail(name) {
  return axios.get(`${process.env.REACT_APP_API_URL}/books/${name}`);
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
      <span className='spany'>Know more about the book here!!</span>
      <br/>
      <div className='maindiv'>
      <span className='namebook'> {name}</span><br/><br/>
      <span className='pricebook'>₹{bookDetails.data.price}</span>
        <br/><br/>
        <div className='abt'>About the book :<br/> {bookDetails.data.description}<br/> </div>
        </div>
        <img src={bookDetails.data.imglink} className='bookimg'/>
        <Link to={`/update/${name}`}>
        <button className='btn-update'>Update Price</button>
        </Link>
        
     
    </div>
  );
}


export default Detailview;
