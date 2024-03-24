"use client"
import { useState } from "react"
import React from 'react'
import { ToastContainer,toast } from "react-toastify"

const page = () => {
    const [name,setName] = React.useState('')
    const [email,setEmail] = React.useState('')
    const [password,setPassword] = React.useState('')

    const handleSignup = async () => {
      try{
      const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/admin/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name,email,password}),
        credentials: 'include'
    })
    const data = await response.json()
    if(data.ok){
    
        // Handle successful signup .Eg: show a success msg
        console.log('Admin registration successful',data)

        toast.success('Admin registration successful'
        )
    }
    else{
      //Handle signup error
      console.log('Admin registration failed',response.statusText)

      toast.error('Admin registration failed')


    }
  }
  catch(error){
    toast.error('An error occured during registration');
    console.log('An error occured during registration',error);
  }

    }                 //used to handle registering of the admin
  return (
    <div className="formpage">
      <input 
      type="name"
      placeholder="name"
      value={name}
      onChange={(e)=>setName(e.target.value)}
      
      />
      <input 
      type="email"
      placeholder="email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
        />
      <input
      type="password"
      placeholder="password"
      value={email}
      onChange={(e)=>setPassword(e.target.value)}
      />
      
    </div>
  )
}

export default page
