import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import "./update.css"
import home from "./../../components/home (2).png"
import toast, { Toaster } from 'react-hot-toast'

function Update() {
  const { name: paramName } = useParams()
  const [price, setPrice] = useState("")

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/books/${encodeURIComponent(paramName)}`)
      .then(response => {
        setPrice(response.data.data.price)  
      })
      .catch(error => {
        console.error(error)
        toast.error("Failed to load book details")
      })
  }, [paramName])

  const updateDetail = async () => {
    try {
      axios.put(`/books/${name}`, {
  price: newPrice,
  role: localStorage.getItem("role")
});
      toast.success("Book price updated successfully!")
    } catch (error) {
      console.error(error)
      toast.error("Update failed")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateDetail()
  }

  return (
    <div>
      <Link to={"/Home"}>
        <img className='homeimg' src={home} alt="home" />
      </Link>

      <h2>Update Book Price</h2>
      <p className='info'>Book Name: {paramName}</p>

      <form onSubmit={handleSubmit}>
        <label className='info'>Enter book price:</label>
        <input
          className='inp'
          type="number"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <br />
        <button type="submit" className='btn-s'>Submit</button>
      </form>

      <Toaster />
    </div>
  )
}

export default Update
