import React from 'react'

export default function Payment() {
  return (
    <div className='h-screen  bg-black flex items-center justify-center'>
    <h1 className='text-white font-bold text-xl md:text-5xl'>
        PAYMENT <span className='text-yellow-500'> FORM</span>
    </h1>

        <div className="bg-white max-w-md">
            <form action="" className='space-y-6 flex flex-col'>
                <input type="text" className='w-full ' placeholder='Enter'/>
                <input type="text" className='w-full ' placeholder='Enter'/>
                <input type="text" className='w-full ' placeholder='Enter'/>
                <input type="text" className='w-full ' placeholder='Enter'/>
                <input type="text" className='w-full ' placeholder='Enter'/>
            </form>
        </div>

    </div>
  )
}
