const Updatedetail = async (name) =>{
    try{
      await axios.put(`http://localhost:5000/books/${name}`)
    }
    catch(error){
      console.error(error);
    }
  }
  import React, { useEffect, useState } from 'react'
  import axios from 'axios';
  const [Name,setName] = useState("")
  function Update({name}) {
    useEffect(()=>{
         
        return axios.get(`http://localhost:5000/books/${name}`);
      },[name]);
    return (
     <div>
      <form>
        <label>Enter book name :</label>
        <input id='name' value={name} onChange={setName(name)}>
        </input>
        <br/>
        <label>Enter book price :</label>
        <input id='price'></input>
      </form>
      <button onClick={Updatedetail}>Submit</button>
      </div>
    )
  }
  
  export default Update