import Image from 'next/image'
import React from 'react'

const ServiceCard = ({service}) => {
  return (
    <div className='w-[300px]'>
        <Image width={300} height={300} src={service?.img} alt="" className='w-full' />
        <div className='mt-5'>
            <h5 className='text-2xl'>{service?.title}</h5>
            <p className='text-[#777777] text-xl mt-3'>{service?.desc}</p>
            <div className='flex items-center space-x-2 text-xl font-bold border-b border-[#0A2640] w-fit pb-3 mt-5'>
                <span className=''>Explore page</span>
                <Image width={25} height={25} src="/images/arrow-right-1.png" alt="" />
            </div>
        </div>

    </div>
  )
}

export default ServiceCard