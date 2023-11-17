import React from 'react'
import Testimonial from './Testimonial'

const Testimonials = () => {
  return (
    <div>
        <h1 className='text-4xl text-center text-slate-300 bg-stone-700 mx-auto md:w-6/12 Belanosima rounded-full abou py-1 mt-20'>TESTIMONIALS
      </h1>
      <div className="carousel carousel-center w-full mx-auto  space-x-4 bg-transparent rounded-box my-10">
  <div className="carousel-item">
  < Testimonial />
  </div> 
  <div className="carousel-item">
  < Testimonial />
  </div> 
  <div className="carousel-item">
  < Testimonial />
  </div> 
  <div className="carousel-item">
  < Testimonial />
  </div> 
  <div className="carousel-item">
  < Testimonial />
  </div> 
  <div className="carousel-item">
  < Testimonial />
  </div> 
  <div className="carousel-item">
  < Testimonial />
  </div> 
  <div className="carousel-item">
  < Testimonial />
  </div> 
  </div>
  
{/*     
      <div className="w-11/12 mx-auto  grid  sm:grid-cols-2   lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-16">
        < Testimonial />
        < Testimonial />
        < Testimonial />
        < Testimonial />
        < Testimonial />
        < Testimonial />
        < Testimonial />
      </div> */}
    </div>
  )
}

export default Testimonials