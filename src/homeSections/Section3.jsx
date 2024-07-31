import React from 'react'
import img1 from '../images/product-4.png'
export default function Section3() {
  return (
    <section >
        
        <div className='my-3 flex flex-col sm:flex-row justify-center sm:items-center sm:justify-start'>
            <h1 className='text-center ml-0 sm:ml-12 font-bold text-xl '>Learn More About US</h1>
            <div className='mt-4 sm:mt-0  sm:absolute  sm:right-0 mr-0  sm:mr-6 flex justify-center'>
                <button className= 'text-center w-36 h-9 bg-orange-400 text-white hover:w-44 hover:tracking-widest'>About Us</button>
            </div>    
        </div>
        <h1 className='font-bold text-xl text-center mt-3'> Shop Our Top Sellers </h1>
        <div className='flex-col justify-center items-center mt-5'>
            <a href="">
                <img className = 'img rounded-lg cursor-pointer m-auto' src = {img1} alt="" typeof='link'/> 
            </a>
            <h1 className='text-center mt-5 font-bold text-xl '>
                Check Out Our Blogs
            </h1>
            <div className='flex items-center justify-center my-4'>
                <button className = 'text-center w-36 h-9 bg-orange-400 text-white hover:w-44 hover:tracking-widest right-14'>
                    Blogs
                </button>
            </div>
            <h1 className='text-center mt-5 font-bold text-xl '>
                How Was Your Experience? Leave A Review
            </h1>
            <div className='flex items-center justify-center py-4 bg-black'>  
                <button className ='text-center w-36 h-9 bg-orange-400 text-white hover:w-44 hover:tracking-widest '>
                    Reviews
                </button>
            </div>
        </div>
        
    </section>
  )
}
