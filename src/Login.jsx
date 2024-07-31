import React from 'react'
import {useNavigate } from 'react-router-dom'
export default function Login() {
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/register');
    };    
  return (
    <div className='bg-black h-screen flex justify-center items-center '>
        <div className=' bg-slate-400 w-full max-w-md rounded-lg p-8 '>
            <h1 className='text-yellow-600 text-center font-bold text-2xl my-10'>
                Welcome Back
            </h1>
            <form action="" className='space-y-6 flex flex-col '>
                <input type= "email" className='bg-black text-white hover:text-black p-2 rounded w-full h-2/4 hover:bg-slate-200 ' placeholder="Enter Email"/>
                <input type="password" className='bg-black text-white hover:text-black p-2 rounded w-full h-2/4 hover:bg-slate-200 ' placeholder="Enter Password"/>
                <button className='bg-yellow-900  text-white m-auto h-10 rounded w-2/6'>
                Sign In
                </button >
             </form>
            <button onClick = {handleLoginClick} className = 'bg-yellow-600 rounded-full w-full h-9 mt-10' >
                Sign Up
            </button>
        </div>
    </div>
  )
}
