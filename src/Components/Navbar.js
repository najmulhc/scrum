import React from 'react'
import logo from '../Images/logo.png'
const Navbar = () => {
  return (
      <nav className='container mx-auto py-4 flex justify-between items-center'>
          <img src={logo} alt="" />
          <ul className='flex justify-center items-center gap-12 uppercase font-medium'>
              <li className='text-white text-md'>Home</li>
              <li className='text-white text-md'>about</li>
              <li className='text-white text-md'>courses</li>
              <li className='text-white text-md'>blogs</li>
          </ul>
          <ul className='flex justify-center items-center gap-6 uppercase font-medium'>
              <li className='text-white text-md'>login</li>
              <li className='text-white text-md px-4 py-1 border-2 border-white rounded-full'>sign Up</li> 
          </ul>
      </nav>
  )
}

export default Navbar