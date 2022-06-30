import React from 'react'

const EmailUs = () => {
  return (
      <section className='container mx-auto bg-[#5F72BE] p-10 rounded-2xl flex justify-between items-center my-12'>
          <div>
              <h2 className='font-bold text-white mb-2 text-xl'>Email Us</h2>
              <p className="text-white text-lg font-normal">Connect with us in case of any queries, complaints or feedbacks...</p>
          </div> 
          <button className='bg-[#2D81F7] rounded-2xl text-lg text-white py-4 px-32 font-bold uppercase'>Contact Us</button>
    </section>
  )
}

export default EmailUs