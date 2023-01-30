import React from 'react'
import FooterLOGO from "/assets/logo_uam--transparent.png"
const Footer = () => {
  return (
    <div className='bg-indigo-900'>
        <div className='px-60 flex pt-10 justify-between'>

    <div>
        <img src={FooterLOGO} alt="" className='h-20'/>
        <p className='text-white mt-6'>copyright 2022</p>
    </div>
    <div>
    <ul  className='flex flex-col gap-2 uppercase '>
          <li className='text-xs  text-white hover:text-blue-600 cursor-pointer'>HOME</li>
          <li className='text-xs  text-white hover:text-blue-600 cursor-pointer'>About</li>
          <li className='text-xs  text-white hover:text-blue-600 cursor-pointer'>Services</li>
          <li className='text-xs  text-white hover:text-blue-600 cursor-pointer'>Product</li>
          <li className='text-xs  text-white hover:text-blue-600 cursor-pointer'>Industries</li>
          <li className='text-xs  text-white hover:text-blue-600 cursor-pointer'>Case Studys</li>
        </ul>
    </div>

    <div>
    <ul  className='flex flex-col gap-2 uppercase '>
          <li className='text-xs  text-white hover:text-blue-600 cursor-pointer'>HOME</li>
          <li className='text-xs  text-white hover:text-blue-600 cursor-pointer'>About</li>
          <li className='text-xs  text-white hover:text-blue-600 cursor-pointer'>Services</li>
          <li className='text-xs  text-white hover:text-blue-600 cursor-pointer'>Product</li>
          <li className='text-xs  text-white hover:text-blue-600 cursor-pointer'>Industries</li>
          <li className='text-xs  text-white hover:text-blue-600 cursor-pointer'>Case Studys</li>
        </ul>
    </div>
  
    <div className='basis-1/4'>
        <h3 className='text-lg font-bold text-white'>GET IN TOUCH</h3>
        <p className='text-white text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi harum esse voluptatibus eaque mollitia perspiciatis temporibus, sequi obcaecati, alias ex veniam! !</p>
        <button className="py-3 px-6 bg-blue-500 rounded-3xl text-white text-sm mt-6">
            Read More
          </button>


    </div>
    </div>

    </div>
  )
}

export default Footer