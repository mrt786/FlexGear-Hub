import React from 'react'
import Section1 from './homeSections/Section1'
import Section2 from './homeSections/Section2'
import Section3 from './homeSections/Section3'
export default function Home() {
  return (
    <main className='bg-black text-white'>
        <Section1/>
        <Section2/>
        <Section3/>
    </main>
  )
}
