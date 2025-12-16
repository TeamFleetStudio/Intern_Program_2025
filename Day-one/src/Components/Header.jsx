import React, {useState} from 'react'
import cart from '../assets/cart.svg';
import like from '../assets/like.svg';
import profile from '../assets/profile.svg';
import search from '../assets/search.svg';
import { ChevronDown, Search, Menu } from "lucide-react";
import Products from './Products';

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [showProducts, setShowProducts] = useState(false);
    const [showProduct1, setShowProduct1] = useState(false);
    const [showProduct2, setShowProduct2] = useState(false);
    const [showProduct3, setShowProduct3] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md h-16 items-center">
        <div className='relative w-full h-full'>
            <div className='flex items-center justify-between mx-8 md:mx-12 lg:mx-14 h-full'>
                <div className='flex items-center justify-center gap-x-4'>
                    <Menu color='black' size={20} className='block lg:hidden' onClick={() => setShowMenu(prev => !prev)} />
                    <h1 className="font-weight-600 font-playfair font-semibold text-2xl">WALLY</h1>
                </div>

                {showMenu && (
                    <nav className="lg:hidden absolute w-full top-16 left-0 bg-white border-b border-gray-300">
                        <div className='w-full h-full flex flex-col gap-y-5 px-6 py-3'>
                            <a aria-label='Home' className='cursor-pointer text-base font-weight-400 text-black'>Home</a>
                            <div className='flex justify-between' onClick={() => setShowProducts(prev => !prev)}>
                                <a aria-label='Products' className='cursor-pointer text-base flex items-center gap-1 font-weight-400 text-black'>Products</a>
                                <ChevronDown className={`text-gray-700 ${showProducts ? "rotate-180" : " "}`} size={24} />
                            </div>
                                {showProducts && (
                                    <div className='flex flex-col gap-y-4 pl-4'>
                                        <div className='flex justify-between' onClick={() => setShowProduct1(prev => !prev)}>
                                            <a aria-label='Pages' className='cursor-pointer text-base font-weight-400 text-black'>Pages</a><ChevronDown className={`text-gray-700 ${showProduct1 ? "rotate-180" : " "}`} size={24} />
                                        </div>
                                        {showProduct1 && (
                                            <div className='leading-8 pl-2'>
                                                <p>Anti-Agening</p>
                                                <p>Cleansers & Toners</p>
                                                <p>Serums & Oils</p>
                                                <p>Creams & Fluids</p>
                                            </div>
                                        )}
                                        <div className='flex justify-between' onClick={() => setShowProduct2(prev => !prev)}>
                                            <a aria-label='Hair & Beauty' className='cursor-pointer text-base font-weight-400 text-black'>Hair & Beauty</a><ChevronDown className={`text-gray-700 ${showProduct2 ? "rotate-180" : " "}`} size={24} />
                                        </div>
                                        {showProduct2 && (
                                            <div className='leading-8 pl-2'>
                                                <p>Pure & Natural</p>
                                                <p>Synthetic</p>
                                                <p>Face Masks</p>
                                                <p>Hair Masks</p>
                                            </div>
                                        )}
                                        <div className='flex justify-between' onClick={() => setShowProduct3(prev => !prev)}>
                                            <a aria-label='Night cream' className='cursor-pointer text-base font-weight-400 text-black'>Night cream</a><ChevronDown className={`text-gray-700 ${showProduct3 ? "rotate-180" : " "}`} size={24} />
                                        </div>
                                        {showProduct3 && (
                                            <div className='leading-8 pl-2'>
                                                <p>Jojova Cream</p>
                                                <p>Aloevera Freshness</p>
                                                <p>Night Skin Care</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            <div className='flex justify-between'>
                                <a aria-label='Collections' className='cursor-pointer text-base flex items-center gap-1 font-weight-400 text-black'>Collections</a>
                                <ChevronDown className='text-gray-700' size={24} />
                            </div>
                            <a aria-label='Home' className=' cursor-pointer text-base font-weight-400 text-black'>Contact</a>
                        </div>
                    </nav>
                )}

                <div className='flex items-center justify-between gap-6 h-full'>
                    <nav className="hidden lg:flex items-center gap-8 h-full">
                        <a aria-label='Home' className='cursor-pointer text-base font-weight-400 text-black'>Home</a>
                        <div className="group h-full items-center">
                            <div className="flex items-center gap-1 cursor-pointer h-full">
                                <a aria-label='Products' className="text-base flex items-center gap-1 font-weight-400 text-black ">
                                Products <ChevronDown className="text-gray-700" size={24} />
                                </a>
                            </div>
                            <div className="hidden group-hover:block absolute top-16 left-0 w-full bg-white shadow-md border-t border-gray-300 z-40 py-6">
                                <Products />
                            </div>
                        </div>
                        <a aria-label='Collections' className='cursor-pointer text-base flex items-center gap-1 font-weight-400 text-black'>Collections <ChevronDown className='text-gray-700' size={24} /></a>
                        <a aria-label='Home' className=' cursor-pointer text-base font-weight-400 text-black'>Contact</a>
                        <div className='relative w-[220px]'>
                            <Search size={20} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-700' />
                            <input type="text" placeholder='Search...' 
                            className='w-full pl-12 pr-3 py-2 placeholder-black bg-[#F1F3F0] '/>
                        </div>
                    </nav>
                </div>

                <div className='flex gap-x-5'>
                    <img src={cart} alt="cart" className='cursor-pointer' />
                    <img src={like} alt="like" className='cursor-pointer' />
                    <img src={search} alt="search" className='lg:hidden cursor-pointer' />
                    <img src={profile} alt="profile" className='cursor-pointer'/>
                </div>

            </div>
        </div>
    </header>
  )
}

export default Header