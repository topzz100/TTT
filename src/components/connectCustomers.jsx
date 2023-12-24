import Image from 'next/image'
import React from 'react'

const ConnectCustomers = () => {
  return (
    <div className='px-[150px] py-16'>
        <div className=' mb-16 flex justify-between space-x-16 items-center'>
            <div className="left flex-1 relative">
                <Image width={600} height={600} src="/images/img-1.png" alt="" className='w-full' />
                <Image width={300} height={400} src="/images/img-2.png" alt="" className=' absolute bottom-[-150px] right-[50px]'  />
            </div>
            <div className="right flex-1">
                <p className='text-4xl mb-12 manrope'>We connect our customers with the best, and help them keep up-and stay open.</p>
                <div>
                    <p className='flex items-center space-x-4 mb-8'>
                        <Image width={25} height={25} src="/images/check-1.png" alt="" />
                        <span className='text-xl'>We connect our customers with the best.</span>
                    </p>
                    <p className='flex items-center space-x-4 mb-8'>
                        <Image width={25} height={25} src="/images/check-1.png" alt="" />
                        <span className='text-xl'>Advisor success customer launch party.</span>
                    </p>
                    <p className='flex items-center space-x-4 mb-8'>
                        <Image width={25} height={25} src="/images/check-1.png" alt="" />
                        <span className='text-xl'>Business-to-consumer long tail.</span>
                    </p>
                </div>
                <button className="bg-[#0A2640] py-4 px-16 rounded-[56px] mt-8">
                    <span className='text-white font-bold'>
                        Start now
                    </span>
                </button>
            </div>
        </div>

        <div className='mt-64 flex justify-between space-x-16 items-center mb-[150px]'>
        
            <div className="right flex-1 ">
                <p className='text-4xl mb-12 manrope'>We connect our customers with the best, and help them keep up-and stay open.</p>
                <div>
                    <p className='flex items-center space-x-4 mb-8 shadow-lg p-5 bg-[#0A2640] rounded'>
                        <Image width={25} height={25} src="/images/star.png" alt="" />
                        <span className='text-xl text-white'>We connect our customers with the best.</span>
                    </p>
                    <p className='flex items-center space-x-4 mb-8 shadow-lg p-5 rounded'>
                        <Image width={25} height={25} src="/images/star-1.png" alt="" />
                        <span className='text-xl'>Advisor success customer launch party.</span>
                    </p>
                    <p className='flex items-center space-x-4 mb-8 shadow-lg p-5 rounded'>
                        <Image width={25} height={25} src="/images/sun.png" alt="" />
                        <span className='text-xl'>Business-to-consumer long tail.</span>
                    </p>
                </div>
            </div>
            <div className="left flex-1 relative">
                <Image width={600} height={600} src="/images/img-3.png" alt="" className='w-full' />
                <Image width={300} height={400} src="/images/img-4.png" alt="" className=' absolute bottom-[-150px] left-[50px]'  />
            </div>
        </div>
    </div>

    
  )
}

export default ConnectCustomers