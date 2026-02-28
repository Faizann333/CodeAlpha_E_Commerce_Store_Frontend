import React from 'react'
import heroImage from '../assets/heroImage.png'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className='flex justify-between items-center h-[500px] bg-gray-500 px-40'>
      <div className='flex flex-col '>
        <h1 className='text-2xl mb-2 '>Smart Products</h1>
        <h1 className='text-7xl font-bold mb-4 w-[300px]'>Welcome to Our Store</h1>
        <p className='text-lg mb-6'>Discover the best products at unbeatable prices.</p>
       <Button name="Shop Now" className="bg-purple-600 h-[50px] w-[120px] hover:bg-purple-700"
       onClick={()=>navigate("/products")}/>
      </div>
      <div>
        <img src={heroImage} alt="Hero" className='w-full h-[480px] mb-[-20px] rounded' />
      </div>
    </div>
  )
}

export default HeroSection
