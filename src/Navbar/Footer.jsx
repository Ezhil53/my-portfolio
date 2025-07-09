import React from 'react'


const Footer = () => {    
  
  return (
    <>
      <section className='bg-gray-100 text-gray-800 py-5 px-4'>
        <div className='container mx-auto text-center'>
          <p className='text-sm'>© {new Date().getFullYear()}. Ezhilarasu  - All rights reserved</p>
          <p className='text-xs mt-2'>Built with ❤️ using React</p>
        </div>


      </section>

    </>
  )
}

export default Footer
