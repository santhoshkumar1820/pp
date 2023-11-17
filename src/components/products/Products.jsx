import React from 'react'
import Product from './Product';
const Products = () => {
  return (
    <>
    <div className='mt-32'>
    <h1 className='text-2xl sm:text-3xl md:text-4xl   text-center text-slate-300 bg-stone-700 w-10/12 mx-auto md:w-6/12 Belanosima rounded-full abou py-1'>PRODUCTS & SERVICES</h1>
    <div className='w-full mx-auto'>
    <div id="/products" className="w-11/12 mx-auto  grid  sm:grid-cols-2   lg:grid-cols-3 gap-2 mt-16">
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    </div>
    </div>
    </div>
    </>
  )
}

export default Products