import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/assets/logo_uam.png'

const Navbar = () => {
  return (
    <div className='bg-white flex h-20 justify-between container mx-auto px-4 md:px-40 items-center'>
      <div>

        <img src={logo} alt="logo" className='h-10 ' height={40}/>
      </div>

        <ul  className='flex gap-4 uppercase font-semibold'>
          <li className='text-sm  text-gray-500 hover:text-blue-600 cursor-pointer'><Link to={"/"}>HOME</Link>HOME</li>
          <li className='text-sm  text-gray-500 hover:text-blue-600 cursor-pointer'>About</li>
          <li className='text-sm  text-gray-500 hover:text-blue-600 cursor-pointer'>Services</li>
          <li className='text-sm  text-gray-500 hover:text-blue-600 cursor-pointer'>Product</li>
          <li className='text-sm  text-gray-500 hover:text-blue-600 cursor-pointer'>Industries</li>
          <li className='text-sm  text-gray-500 hover:text-blue-600 cursor-pointer'>Case Studys</li>
          <li className='text-sm  text-gray-500 hover:text-blue-600 cursor-pointer'>News</li>
          <li className='text-sm  text-gray-500 hover:text-blue-600 cursor-pointer'>Contact us</li>
          <li className='text-sm  text-gray-500 hover:text-blue-600 cursor-pointer'>
            <Link to={"/employees"}>Employees</Link></li>

    

        </ul>
    </div>
  )
}

export default Navbar