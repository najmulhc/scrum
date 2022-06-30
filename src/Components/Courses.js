import React from 'react'
import Carusel from './Carusel'

const Courses = () => {
  return (
    <section className='container mx-auto '>
      <div className='py-10'>
        <h2 className='text-black font-bold text-lg py-2'>A broad range of courses</h2>
        <p className='text-md font-semibold '>Choose from 100+ online video courses with new additions published every month</p>
      </div>
      <Carusel /> 
    </section>
  )
}

export default Courses