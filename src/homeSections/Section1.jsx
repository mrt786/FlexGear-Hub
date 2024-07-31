import React from 'react'
export default function Section1() {
  return (
    <section>
        <div className = 'bg-home1 bg-cover bg-center w-auto min-w-screen h-[950px]'>
            <div className='relative'>
                <div className='absolute ml-[60px] my-[330px] leading-5 text-white'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold'>YOUR SPORTSWEAR  PERFORMANCE  APPAREL FOR ATHLETES</h1>
                    <br />
                    <button className='text-center w-36 h-9 bg-black text-white hover:w-44 hover:tracking-widest'>Get Yours Now</button>
                </div>            
            </div>
        </div>
    </section>
  )
}
