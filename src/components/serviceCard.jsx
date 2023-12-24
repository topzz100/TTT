import React from 'react'

const ServiceCard = ({service}) => {
  return (
    <div className='w-[300px]'>
        <img src={service?.img} alt="" />
        <div className='mt-5'>
            <h5 className='text-2xl'>{service?.title}</h5>
            <p className='text-[#777777] text-xl mt-3'>{service?.desc}</p>
            <div className='flex items-center space-x-2 text-xl font-bold border-b border-[#0A2640] w-fit pb-3 mt-5'>
                <span className=''>Explore page</span>
                <img src="/images/arrow-right-1.png" alt="" />
            </div>
        </div>

    </div>
  )
}

export default ServiceCard