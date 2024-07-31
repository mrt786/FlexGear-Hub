import React from 'react'
import './images.css'
import img1 from '../images/swimming.jpg'
import img2 from '../images/menu-13.png'
import img3 from '../images/gym.jpg'

export default function Section2() {
  return (
    <section className='my-16'>
        <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl  font-semibold">
             YOUR ALL SPORTS EQUIPMENTS <span className='text-orange-400'> AT ONE PLACE </span>
        </h1>
        <div className='flex flex-col justify-around items-center sm:flex-row sm:justify-around sm:items-center mt-16 '>
            <img className= "rounded-lg img " src={img1} alt="Swimming Image" />
            <img className= "mt-6 sm:mt-0 rounded-lg img " src = {img2} alt="" />
            <img className= "mt-6 sm:mt-0 rounded-lg img " src = {img3} alt="" />
        </div>
    </section>
  )
}
