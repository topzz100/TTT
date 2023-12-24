import React from 'react'
import BlogCard from './blogCard'

const Blog = () => {
    const blogs = [
        {
            category: "category",
            time: "November 22, 2021",
            desc: "Pitch termsheet backing validation focus release.",
            img: "/images/blog-1.png",
            photo: "/images/blog-img-1.png",
            name: "Chandler Bing",
            id: 1
        },
        {
            category: "category",
            time: "November 22, 2021",
            desc: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
            img: "/images/blog-3.png",
            photo: "/images/blog-img-3.png",
            name: "Rachel Green",
            id: 2
        },
        {
            category: "category",
            time: "November 22, 2021",
            desc: "Beta prototype sales iPad gen-z marketing network effects value proposition",
            img: "/images/blog-3.png",
            photo: "/images/blog-img-3.png",
            name: "Monica Geller",
            id: 3
        }
    ]
  return (
    <div className='px-[150px] py-16'>
         <h4 className='text-center text-[#777777] text-xl'>Our Blog</h4>
        <h3 className='text-center text-[48px] w-[80%] mx-auto manrope'>Value proposition accelerator product management venture</h3>
        <div className='flex justify-between mt-16 space-x-16'>
            {blogs.map((blog) => (
                <BlogCard key={blog?.id} blog={blog}/>
            ))}
            
        </div>
        <div className=' flex justify-center mt-16'>
            <button  button className="bg-transparent  py-4 px-16 rounded-[56px] border-2 border-[#0A2640]">
                <span className='text-[#0A2640] font-bold text-xl'>
                    Load more
                </span>
            </button>
        </div>
    </div>
  )
}

export default Blog