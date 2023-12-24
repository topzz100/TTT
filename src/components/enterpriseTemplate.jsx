import React from 'react'
import AuthorCard from './authorCard'
import Image from 'next/image'

const EnterpriseTemplate = () => {

    const authors = [
        {
            message: "Buyer buzz partner network disruptive non-disclosure agreement business",
            name: "Albus Dumbledore",
            role: "Manager @ Howarts",
            img: "/images/author-1.png",
            id: 1
        }, 
        {
            message: "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
            name: "Severus Snape",
            role: "Manager @ Slytherine",
            img: "/images/author-2.png",
            id: 2
        },
        {
            message: "Release facebook responsive web design business model canvas seed money monetization.",
            name: "Harry Potter",
            role: "Team Leader @ Gryffindor",
            img: "/images/author-3.png",
            id: 3
        }
    ]
  return (
    <div className=' bg-[#0A2640] px-[150px] py-16'>
        <div className='relative mb-10'>
            <p className='text-5xl text-white w-[70%] leading-[72px] manrope'>An enterprise template to ramp up your company website</p>
            <div className='absolute -bottom-6 -right-8 flex space-x-6'>
                <Image width={50} height={50} src="/images/arr-1.png" alt="" />
                <Image width={50} height={50} src="/images/arr-2.png" alt="" />
            </div>
        </div>
        <div className='flex justify-between space-x-12 mt-16'>
            {
                authors.map((author) => (
                    <AuthorCard id={author?.id} author={author}/>
                ))
            }
        </div>
    </div>
  )
}

export default EnterpriseTemplate