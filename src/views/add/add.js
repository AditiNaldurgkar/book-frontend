import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import axios from 'axios'
import  toast ,{ Toaster }from 'react-hot-toast' 

function Add() {
    const [name,Setname]=useState("")
    const [price,Setprice]=useState("")
  return (
    <div>add
    <div className='form'>
        <label htmlFor='name'>Name of book :</label>
        <input id='name' onChange={(e)=>{Setname(e.target.value)}} value={name}>
        </input><br/>
        <label htmlFor='price' > Price of book :</label>
        <input id='price' onChange={(e)=>{Setprice(e.target.value)}} value={price}></input>
        <button onClick={
            async ()=>{
                try{
            const response = await axios.post("http://localhost:5000/books",{
                name:name,price:price
            })
            console.log(response)
            Setname("")
            Setprice("")
            toast.success("added")
        }
    catch(error){
        console.log(error)
    }}}
        >
            submit
            </button>

    </div>
    <Toaster/>
    </div>
  )
}

export default Add