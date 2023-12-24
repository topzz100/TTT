import Image from 'next/image'
import React from 'react'

const Contact = () => {
  return (
    <div className='bg-[rgb(10,38,64)] mx-[150px] rounded-xl my-16 relative z-10'>
        <Image width={650} height={300} src="/images/ellipse-1.png" alt="" className='absolute top-0 right-0 -z-10'/>
        <div className='p-16'>
            <h3 className='text-5xl font-normal text-white text-center w-[80%] leading-[72px]  mx-auto manrope'>An enterprise template to ramp up your company website</h3>
            <div className='flex justify-center space-x-4 mt-10'>
                <input type="text" placeholder='Your email address ' className='bg-white text-black text-xl w-[360px] h-[56px] rounded-[56px] p-4'/>
                <button  button className="  h-[56px] px-16 rounded-[56px] border-2 bg-[#65E4A3]">
                    <span className='text-[#0A2640] font-bold text-xl'>
                        Start now
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Contact