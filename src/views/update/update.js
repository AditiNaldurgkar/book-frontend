import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Update() {
  const { name: paramName } = useParams(); 
  const [name, setName] = useState(paramName || ""); 
  const [price, setPrice] = useState(""); 

  useEffect(() => {
    axios.get(`http://localhost:5000/books/${paramName}`)
      .then(response => {
        setName(response.data.name);
        setPrice(response.data.price);
      })
      .catch(error => console.error(error));
  }, [paramName]); 
  const updateDetail = async () => {
    try {
      await axios.post(`http://localhost:5000/books/${name}`,{name,price});
      alert("Book details updated successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form>
        <label>Enter book name:</label>
        <input 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Enter book price:</label>
        <input 
          id="price" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)}
        />
      </form>
      <button onClick={updateDetail}>Submit</button>
    </div>
  );
}

export default Update;
