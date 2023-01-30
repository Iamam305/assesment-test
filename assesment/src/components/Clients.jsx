import React from 'react'
import ClientImg from "/assets/client_1.png"

const Clients = () => {
  return (
    <div className='my-40 container  mx-auto bg-gray-200 py-20'>
        <h3 className="text-blue-500 flex items-center  w-full justify-center">
        {" "}
        <span className="border border-solid border-blue-500 w-20 mr-4 " />{" "}
        OUR CLIENTS{" "}
        <span className="border border-solid border-blue-500 w-20 ml-4" />
      </h3>

      <h2 className="text-2xl font-bold text-center my-4">
       We love our clients
      </h2>
      <p className='text-sm text-center text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, adipisicing elit. Obcaecati</p>

      <div className='flex gap-5 w-full px-60 pt-10  justify-between'>
        <img src={ClientImg} alt="" className='h-8'/>
        <img src={ClientImg} alt="" className='h-8'/>
        <img src={ClientImg} alt="" className='h-8'/>
        <img src={ClientImg} alt="" className='h-8'/>
        <img src={ClientImg} alt="" className='h-8'/>
        <img src={ClientImg} alt="" className='h-8'/>

 

      
        
      </div>
    </div>
  )
}

export default Clients