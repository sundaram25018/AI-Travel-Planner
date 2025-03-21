import React from 'react'
import { Button } from '../button'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
     <h2 className='font-extrabold text-[56px] text-center mt-12'><span className='text-[#ff005d]'>Discove Your Next adventure with AI. </span> Personalise Expenses in you fingerTips</h2>
     <p className='text-xl text-gray-500 text-center'>Your Personalise trip planner and travel curtur creating custom itienaries tailors to your interest and budget</p>
     <Link to = {'/create-trip'}>
       <Button>Get Started its free</Button>
     </Link>
     
    </div>
  )
}

export default Hero
