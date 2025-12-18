import React, { useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import "./add.css"
import img1 from "./../../components/Reading glasses-rafiki.png"
import home from "./../../components/home (2).png"
import { Link } from 'react-router-dom'

function Add() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [imglink, setLink] = useState("")
  const [desp, setDesp] = useState("")

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/books`,
        {
          name: name,
          price: Number(price),   
          imglink: imglink,
          description: desp
        }
      )

      console.log(response.data)

      setName("")
      setPrice("")
      setLink("")
      setDesp("")

      toast.success("Book added successfully")
    } catch (error) {
      console.error(error)
      toast.error("Failed to add book")
    }
  }

  return (
    <div>
      <Link to={"/"}>
        <img className='homeimg' src={home} alt="home" />
      </Link>

      <img className='img' src={img1} alt="illustration" />
      <span className='headingadd'>Add Books</span>
      <span className='caption'>Add information about more amazing books for fellow readers!!</span>

      <div className='form'>
        <label>Name of book :</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br/>
        <label>Price of book :</label>
        <input
          type="number"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <br/>
        <label>Description :</label>
        <input
          type="text"
          value={desp}
          onChange={e => setDesp(e.target.value)}
        />
        <br/>
        <label>Image link :</label>
        <input
          type="text"
          value={imglink}
          onChange={e => setLink(e.target.value)}
        />
        <br/>
        <button className='btn-add' onClick={handleSubmit}>
          Submit
        </button>
      </div>

      <Toaster />
    </div>
  )
}

export default Add
