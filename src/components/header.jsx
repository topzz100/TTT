import React from 'react'
import Navbar from './navbar'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='bg-[#0A2640] px-[150px] py-8 relative z-10'>
      
      <Image width={150} height={40} src="/images/ellipse.png" alt="" className='absolute top-0 right-0 -z-10' />
     
      <Navbar/>
      <div className='flex justify-between items-center space-x-8 mt-8 '>
        <div className='w-[580px]'>
          <p  className='text-5xl text-white leading-[72px] manrope' >Save time by building  fast with Boldo Template </p>
          <p className='text-white mt-4'>Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
          <div className='flex space-x-4 mt-6'>
            <button className="bg-[#65E4A3] py-4 px-16 rounded-[56px]">
                <span className='text-[#0A2640] font-bold'>
                    Buy Template
                </span>
            </button>
            <button className="bg-transparent  py-4 px-16 rounded-[56px] border border-white">
                <span className='text-white font-bold'>
                    Explore
                </span>
            </button>
          </div>
        </div>
        <div className=''>
          <Image width={460} height={420} src="/images/right-t.svg" className='z-10' alt="" />
        </div>
      </div>
      <Image width={1000} height={50} class src="/images/logo_wall.png" alt="" className='mt-8 w-full ' />
    </div>
  )
}

export default Header