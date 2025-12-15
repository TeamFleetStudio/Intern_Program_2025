import React from 'react'
import productbanner from '../assets/products_img.png';

const Products = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between w-full max-w-full mx-auto lg:px-20 lg:py-4 bg-white">

       <div className='w-3/5 grid grid-cols-1 md:grid-cols-3'>
            <div className='w-auto leading-7'>
                <p className='text-base text-black font-bold text-start leading-4'>Pages</p>
                <a className='text-base font-weight-400 text-black'>Anti-Agening</a><br />
                <a className='text-base font-weight-400 text-black'>Cleansers & Toners</a><br />
                <a className='text-base font-weight-400 text-black'>Serums & Oils</a><br />
                <a className='text-base font-weight-400 text-black'>Creams & Fluids</a><br />
            </div>

            <div className='w-auto leading-7'>
                <p className='text-base text-black font-bold text-start leading-4'>Hair & beauty</p>
                <a className='text-base font-weight-400 text-black'>Pure & Natural</a><br />
                <a className='text-base font-weight-400 text-black'>Synthetic</a><br />
                <a className='text-base font-weight-400 text-black'>Face Masks</a><br />
                <a className='text-base font-weight-400 text-black'>Hair Masks</a><br />
            </div>

            <div className='w-auto leading-7'>
                <p className='text-base text-black font-bold text-start leading-4'>Night cream</p>
                <a className='text-base font-weight-400 text-black'>Jojova Cream</a><br />
                <a className='text-base font-weight-400 text-black'>Aloevera Freshness</a><br />
                <a className='text-base font-weight-400 text-black'>Night Skin Care</a><br />
            </div>
       </div>

        <div className='w-2/5'>
            <img className='w-auto h-auto' src={productbanner} alt="Product Banner" />
        </div>

    </div>
  )
}

export default Products