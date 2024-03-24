"use client"
import { useState } from "react"
import React from 'react'
import { ToastContainer,toast } from "react-toastify"

const page = () => {
  const [email,setEmail] = React.useState('')
  const [password,setPassword] = React.useState('')

  const handleLogin = async ()=>{
    try{
      const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/admin/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email,password}),
        credentials: 'include'
    })
    const data = await response.json()
    if(data.ok){
    
        // Handle successful login.Eg: show a success msg
        console.log('Admin login successful',data)

        toast.success('Admin login successful'
        )
        window.location.href = '/pages/addWorkout'
    }
    else{
      //Handle signup error
      console.log('Admin login failed',response.statusText)

      toast.error('Admin login failed')


    }
  }
  catch(error){
    toast.error('An error occured during login');
    console.log('An error occured during login',error);
  }

  }

  return (
   <div className="formpage">
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
