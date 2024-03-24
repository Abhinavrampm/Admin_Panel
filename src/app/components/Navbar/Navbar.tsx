"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import './Navbar.css'

const Navbar = () => {
    const[isAdminAuthenticated,setIsAdminAuthenticated] = React.useState(false)
  return (
    <div className='navbar'>
        <div className='adminlinks'>
            {isAdminAuthenticated?(
                    <>

                        <Link href='/pages/addworkout'>Add Workout</Link>
                    </>
            ):(
                    <>
                    <Link href='/adminauth/login'>Login</Link>
                    
                    <Link href='/adminauth/register'>SignUp</Link>
                    </>
            )}

        </div>
      
    </div>
  )
}

export default Navbar
