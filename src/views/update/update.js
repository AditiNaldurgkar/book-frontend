import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./update.css"
import home from "./../../components/home (2).png"
import { Link } from 'react-router-dom';
import toast,{Toaster} from 'react-hot-toast';

function Update() {
  const { name: paramName } = useParams(); 
  const [price, setPrice] = useState(""); 

  useEffect(() => {
    axios.get(`http://localhost:5000/books/${paramName}`)
      .then(response => {
        setPrice(response.data.price);
      })
      .catch(error => console.error(error));
  }, [paramName]);

  const updateDetail = async () => {
    try {
      console.log("Updating book:", paramName, price);
      await axios.put(`http://localhost:5000/books/${paramName}`, { price });
      toast.success("Book details updated successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    updateDetail();
  };

  return (
    <div>
       <Link to={"/"}> <img className='homeimg' src={home}></img></Link>
      <h2>Update Book Price</h2>
      <p className='info'>Book Name: {paramName}</p> 
      <form onSubmit={handleSubmit}>
        <label className='info'>Enter book price:</label>
        <input  className='inp'
          id="price" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)
          }
        />
        <br />
        <button type="submit" className='btn-s'>Submit</button>
      </form>
      <Toaster/>
    </div>
  );
}

export default Update;
