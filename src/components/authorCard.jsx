import Image from 'next/image'
import React from 'react'

const AuthorCard = ({author}) => {
  return (
    <div className='bg-white rounded-md p-6 flex-1 h-fit'>
        <p className='text-2xl'>{`"${author?.message}"`}</p>
        <div className='flex space-x-6 items-center mt-10'>
            <Image width={50} height={50} src={author?.img} alt="" />
            <div>
                <h5 className='text-base font-bold'>{author?.name}</h5>
                <span className='text-sm text-[#0A2640]'>{author?.role}</span>
            </div>
        </div>

    </div>
  )
}

export default AuthorCard