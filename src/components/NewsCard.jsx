import React from 'react'
import CardImg from '/assets/home-1.jpg'
const NewsCard = () => {
  return (
    <div className='w-64'>
        <img src={CardImg} alt="" className='object-contain object-center'/>
        <div className='pr-6'>

        <h3 className='py-4 text-xl font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime</h3>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores eveniet repellendus veritatis laboriosam quo quod!</p>
        </div>
    </div>
  )
}

export default NewsCard