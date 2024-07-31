import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';
export default function Navbar() {
  return (
        <nav className='fixed w-full z-10'>
            <div className='h-20 bg-black text-white'>
                <div className='px-5 py-3 flex'>
                    <div>
                        <img  className = "h-[58px] w-[58px] ml-7  cursor-pointer" src= {logo} alt="Logo Here" />
                    </div>
                    <div  className='mx-28 hidden lg:flex lg:mx-auto justify-around items-center '>
                        <ul className='flex'>
                            <li className='cursor-pointer mx-5 hover:text-yellow-600 hover:underline'>
                                <Link to="/" >
                                    Home
                                </Link>
                            </li>
                            <li className='cursor-pointer mx-5 hover:text-yellow-600 hover:underline'>
                                <Link to="/about" >
                                    About Us
                                </Link>
                            </li>
                            <a href='./Products.jsx'className='cursor-pointer mx-5 hover:text-yellow-600 hover:underline'>
                                Products
                            </a>
                            <a href='./TopSellers.jsx'className='cursor-pointer mx-5 hover:text-yellow-600 hover:underline'>
                                Top Sellers
                            </a>
                            <a href='./Reviews.jsx'className='cursor-pointer mx-5 hover:text-yellow-600 hover:underline'>
                                Reviews
                            </a>
                            <a href='./Blogs.jsx'className='cursor-pointer mx-5 hover:text-yellow-600 hover:underline'>
                                Blogs
                            </a>
                            <a href='./Contact.jsx'className='cursor-pointer mx-5 hover:text-yellow-600 hover:underline'>
                                Contact
                            </a>
                            <li className='cursor-pointer mx-5 hover:text-yellow-600 hover:underline'>
                                <Link to="/login" >
                                    Login
                                </Link>
                            </li>
                            <a href='./Cart.jsx'className='cursor-pointer mx-5 hover:text-yellow-600 hover:underline'>
                                Cart
                            </a>
                            <a href='./Payment.jsx'className='cursor-pointer mx-5 hover:text-yellow-600 hover:underline'>
                                Payment
                            </a>
                        </ul>
                    </div>
                    <div className=' lg:hidden flex items-center'>
                        <FontAwesomeIcon className='absolute right-0 pr-5' icon = {faBars}  color='white' size='2x'/>
                    </div>
                </div>
            </div>
            <hr className='border-t-2 border-gray-600'/>
        </nav>
  )
}
