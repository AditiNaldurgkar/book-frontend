import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
      alert("Book details updated successfully!");
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
      <h2>Update Book</h2>
      <p>Book Name: {paramName}</p> 
      <form onSubmit={handleSubmit}>
        <label>Enter book price:</label>
        <input 
          id="price" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Update;
