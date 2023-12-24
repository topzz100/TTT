import React from 'react'
import ServiceCard from './serviceCard'

const Services = () => {
  const services = [
    {
      title: "Cool fetaure title",
      desc: "Learning curve network effects return on investment.",
      img: "/images/service-1.png",
      id: 1
    },
    {
      title:"Even cooler feature",
      desc: "Learning curve network effects return on investment.",
      img: "/images/service-2.png",
      id: 2
    },
    {
      title:"Cool fetaure title",
      desc: "Learning curve network effects return on investment.",
      img: "/images/service-3.png",
      id: 3
    },
  ]
  return (
    <div className='px-[150px] py-16'>
        <h4 className='text-center text-[#777777] text-xl'>Our Services</h4>
        <h3 className='text-center text-[48px] w-[80%] mx-auto manrope'>Handshake infographic mass market crowdfunding iteration.</h3>
        <div className='flex justify-between mt-16'>
          {
            services.map((service) => (
              <ServiceCard id={service?.id} service={service}/>
            ))
          }
            {/* <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/> */}
        </div>
    </div>
  )
}

export default Services