import React from 'react'

const Footer = () => {
  return (
    <div className='px-[150px] pt-16 pb-24'>
        <div className='flex justify-between space-x-20'>
            <div className='basis-1/3'>
                <img src="/images/logo_2.png" alt="" />
                <p className='text-[#777777] mt-8'>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>

            </div>
            <div className='basis-2/3 flex justify-between'>
                <div>
                    <h4 className='text-xl font-bold'>Landings</h4>
                    <ul className='mt-8'>
                        <li className='text-[#777777] text-xl mt-8'>Home</li>
                        <li className='text-[#777777] text-xl mt-8'>Products</li>
                        <li className='text-[#777777] text-xl mt-8'>Services</li>
                    </ul>
                </div>

                <div>
                    <h4 className='text-xl font-bold'>Company</h4>
                    <ul className='mt-8'>
                        <li className='text-[#777777] text-xl mt-8'>Home</li>
                        <li className='text-[#777777] text-xl mt-8'>Careers <span className='bg-[#65E4A3] text-[13px] py-2 px-4 rounded-[16px] font-bold ms-4'>Hiring!</span></li>
                        <li className='text-[#777777] text-xl mt-8'>Services</li>
                    </ul>
                </div>

                <div>
                    <h4 className='text-xl font-bold'>Resources</h4>
                    <ul className='mt-8'>
                        <li className='text-[#777777] text-xl mt-8'>Blog</li>
                        <li className='text-[#777777] text-xl mt-8'>Products</li>
                        <li className='text-[#777777] text-xl mt-8'>Services</li>
                    </ul>
                </div>

            </div>
        </div>
        <p className='text-[#777777] mt-4'>All rights reserved</p>

    </div>
  )
}

export default Footer