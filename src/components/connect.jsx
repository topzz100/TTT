import React from 'react'

const Connect = () => {
    const faqs = [
        {
            title: "We connect our customers with the best?",
            id: 1
        },
        {
            title: "Android research & development rockstar?",
            id: 2
        }
    ]
  return (
    <div className='px-[150px] py-16'>
        <img src="/images/connect-1.png" alt="" className='w-full' />
        <div className='flex mt-10 space-x-20 justify-between'>
            <p className='text-4xl mb-12 flex-1 manrope'>We connect our customers with the best, and help them keep up-and stay open.</p>
        
            <div className='flex-1'>
                {
                    faqs.map((faq) => (
                        <div key={faq?.id} className='flex items-center justify-between space-x-4 mb-4  py-5 border-b border-[#C4C4C4]'>
                            <span className='text-xl'>{faq?.title}</span>
                            <img src="/images/dropdown.png" alt="" />
                        </div>
                    ))
                }
                {/* <p className='flex items-center justify-between space-x-4 mb-4  py-5 border-b border-[#C4C4C4]'>
                    <span className='text-xl'>We connect our customers with the best?</span>
                    <img src="/images/dropdown.png" alt="" />
                </p>
                <p className='flex items-center justify-between space-x-4  py-5 border-b border-[#C4C4C4]'>
                    <span className='text-xl'>Android Research and Development rockstar?.</span>
                    <img src="/images/dropdown.png" alt="" />
                </p> */}

                
            </div>
        </div>
    </div>
  )
}

export default Connect