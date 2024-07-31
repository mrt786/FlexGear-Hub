import React from 'react'
import {Link,useNavigate} from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login');
  };
  return (
    <div className='bg-black h-screen flex items-center justify-center'>
    <div className="bg-slate-400  text-black rounded-lg p-8 w-full max-w-md max-h-[550px]">
      <h1 className='font-bold text-4xl text-center mb-8'>
        SIGN UP
      </h1>
      <form className='flex flex-col space-y-4'>
        <input type="text" className='bg-black  text-white hover:text-black p-2 rounded w-full h-2/4 hover:bg-slate-200 ' placeholder="Enter Name"/>
        <input type="text" className='bg-black text-white hover:text-black p-2 rounded w-full h-2/4 hover:bg-slate-200 ' placeholder="Enter UserName"/>
        <input type="password" className='bg-black text-white hover:text-black p-2 rounded w-full h-2/4 hover:bg-slate-200 ' placeholder="Enter Password"/>
        <input type="password" className='bg-black text-white hover:text-black p-2 rounded w-full h-2/4 hover:bg-slate-200 ' placeholder="Enter Password Again"/>
        <input type= "email" className='bg-black text-white hover:text-black p-2 rounded w-full h-2/4 hover:bg-slate-200 ' placeholder="Enter Email"/>
        <button className='bg-yellow-900  text-white m-auto h-10 rounded w-2/6'>
            Sign Up
        </button >
      </form>
      <button onClick = {handleLoginClick} className = 'bg-yellow-600 rounded-full w-full h-9 mt-10' >
            Login
      </button>
    </div>
  </div>
  
  )
}
