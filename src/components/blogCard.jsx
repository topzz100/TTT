import Image from 'next/image'
import React from 'react'

const BlogCard = ({blog}) => {
  return (
    <div className='flex-1 flex flex-col justify-between '>
        <Image width={500} height={500}  src={blog?.img} alt="" className='w-full' />
        <div className='flex space-x-6 mt-4'>
            <span className='font-bold text-[#0A2640]'>{blog?.category}</span>
            <span className='text-[#777777]'>{blog?.time}</span>
        </div>
        <p className='text-xl mt-4'>{blog?.desc}</p>
        <div className='flex items-center space-x-6 mt-8'>
            <Image width={50} height={50} src="/images/blog-img-1.png" alt="" />
            <span>{blog?.name}</span>
        </div>    

    </div>
  )
}

export default BlogCard