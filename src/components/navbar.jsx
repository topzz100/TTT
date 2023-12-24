import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
        <img src="/images/logo_1.png" className='w-[160px] h-[40px]' alt="" />
        <div className='text-white space-x-8 text-base font-semibold'>
            <span>Products</span>
            <span>Services</span>
            <span>About</span>
            <button className="bg-white px-8 py-2 rounded-[20px]">
                <span className='text-[#0A2640] font-bold'>
                    Log in
                </span>
            </button>
        </div>
    </div>
  )
}

export default Navbar