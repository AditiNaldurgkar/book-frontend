import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import axios from 'axios'
import  toast ,{ Toaster }from 'react-hot-toast' 
import "./add.css"
import img1 from "./../../components/Reading glasses-rafiki.png"
import home from "./../../components/home (2).png"
import { Link } from 'react-router-dom'

function Add() {
    const [name,Setname]=useState("")
    const [price,Setprice]=useState("")
  return (
    <div> 
        <Link to={"/"}> <img className='homeimg' src={home}></img></Link>
        <img className='img'
        src={img1}></img><span className='headingadd'>Add Book </span>
    <div className='form'>
        <label htmlFor='name'>Name of book :</label>
        <input id='name' onChange={(e)=>{Setname(e.target.value)}} value={name}>
        </input><br/>
        <label htmlFor='price' > Price of book :</label>
        <input id='price' onChange={(e)=>{Setprice(e.target.value)}} value={price}></input>
        <button className='btn-add' onClick={
            async ()=>{
                try{
            const response = await axios.post("http://localhost:5000/books",{
                name:name,price:price
            })
            console.log(response)
            Setname("")
            Setprice("")
            toast.success("Book added successfully")
        }
    catch(error){
        console.log(error)
    }}}
        >
            Submit
            </button >

    </div>
    <Toaster/>
    </div>
  )
}

export default Add