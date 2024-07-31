import React from 'react'
import img1 from './images/about-1.jpg'
import img2 from './images/about-2.jpg'
import img3 from './images/about-3.jpg'

export default function About() {
  return (
    <>
        <div className='h-screen text-white bg-black pt-14 max-w-full'>
            <h1 className='text-5xl text-center font-bold py-16'>
                <span className='text-yellow-500'>ABOUT</span> US
            </h1>
            <div className=' flex-col space-y-12 bg-black pl-0 md:pl-20 '>
                <div className='flex flex-col items-center  lg:flex-row pl-0 lg:pl-12 '>
                    <img src={img1} alt="" className=' max-w-xs md:max-w-lg lg:max-w-xl '/>
                    <div className='flex flex-col justify-center items-center pl-0 lg:pl-20 leading-loose max-w-md lg:max-w-lg'>
                        <h1 className='text-3xl font-bold pt-10 lg:pt-0'>Our Mission</h1>
                        <br />
                        <h3 className='text-justify px-10' >
                                At FlexGear Hub, Our Mission Is To Inspire And Empower Athletes Of All Levels. We Strive To Provide Premium-Quality Sportswear That Not Only Enhances Performance But Also Fosters Confidence And Determination.
                        </h3>

                    </div>
                </div>
                <div className='flex flex-col items-center lg:flex-row pl-0 lg:pl-12 '>
                    <img src={img2} alt="" className='max-w-xs md:max-w-lg lg:max-w-xl'/>
                    <div className='flex flex-col justify-center items-center pl-0 lg:pl-20 leading-loose max-w-md lg:max-w-lg'>
                        <h1 className='text-3xl font-bold pt-10 lg:pt-0 '>Our Values</h1>
                        <br />
                        <h3 className='text-justify px-10' >
                            Quality Excellence: We Are Committed To Delivering Sportswear Crafted With The 
                            Highest Quality Materials And Superior Craftsmanship. Innovation And Technology: Embracing Innovation, We Integrate Cutting-Edge Technology Into Our
                            Designs To Elevate Your Athletic Experience. Community Engagement: We Believe
                                In The Power Of Sports To Unite Communities. We Actively Support And Engage
                                With Athletes, Teams, And Sports Organizations.
                        </h3>

                    </div>
                </div>
                <div className='flex flex-col items-center lg:flex-row pl-0 lg:pl-12'>
                    <img src={img3} alt="" className='max-w-xs md:max-w-lg lg:max-w-xl'/>
                    <div className='flex flex-col justify-center items-center pl-0 lg:pl-20 leading-loose max-w-md lg:max-w-lg '>
                        <h1 className='text-3xl font-bold pt-10 lg:pt-0'>What Sets Us Apart</h1>
                        <br />
                        <h3 className='text-justify px-10' >
                            At FlexGear Hub We Go Beyond Just Selling Sportswear. Our Dedicated Team 
                            Consists Of Passionate Athletes And Fitness Enthusiasts Who Understand Your
                            Needs Firsthand. We Curate Our Collections With A Keen Eye For Performance,
                            Style, And Durability, Ensuring You Get The Best.
                        </h3>
                    </div>                
                </div>
             </div>
        </div>
    </>
  )
}
