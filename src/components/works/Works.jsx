import React from 'react'
import './work.css'
import Work from './Work'
const Services = () => {
  return (
    <div id="/services">
    <h1 className='text-4xl text-center text-slate-300 bg-stone-700 mx-auto md:w-6/12 Belanosima rounded-full abou py-1 mt-20'>OUR WORKS</h1>
    <div className='w-full mx-auto'>
    <div id="/products" className="w-10/12 mx-auto  grid  sm:grid-cols-2   lg:grid-cols-3 gap-1 mt-16">
    <Work />
    <Work />
    <Work />
    <Work />
    <Work />
    <Work />
    </div>
    </div>
    </div>
  )
}

export default Services