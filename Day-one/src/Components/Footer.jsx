import linkedin from '../assets/linkedin.png';
import insta from '../assets/insta.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import { ArrowRight } from 'lucide-react';

const Footer = () => {

    return (
        <footer className='w-full h-auto bg-black py-6 px-12'>

            <div className='grid grid-cols-1 gap-y-6 md:grid-cols-1 lg:flex lg:flex-row lg:justify-between pb-3'> 

                <div className='grid grid-cols-1 gap-y-6 lg:flex lg:justify-between lg:gap-x-8'>

                    <div className='w-auto lg:w-2/4'>
                        <p className='text-base text-white text-start leading-6 font-normal'>This is a demo store. All products are representation purpose only.</p>
                        <div className='flex gap-4 mt-6'>
                            <img src={linkedin} alt="linkedin" className='w-8 h-8' />
                            <img src={insta} alt="instagram" className='w-8 h-8' />
                            <img src={facebook} alt="facebook" className='w-8 h-8' />
                            <img src={twitter} alt="twitter" className='w-8 h-8' />
                        </div>
                    </div>

                    <div className='leading-7 w-auto lg:w-1/4'>
                        <p className='text-base font-lato text-white font-bold text-start'>Pages</p>
                        <a className='text-base text-white font-normal'>Home</a> <br />
                        <a className='text-base text-white font-normal'>Search</a> <br />
                        <a className='text-base text-white font-normal'>Products</a> <br />
                        <a className='text-base text-white font-normal'>Collections</a> <br />
                        <a className='text-base text-white font-normal'>Featured</a>
                    </div>

                    <div className='leading-7 w-auto lg:w-1/4'>
                        <p  className='text-base font-lato text-white font-bold text-start'>Help and Support</p>
                        <a className='text-base text-white font-normal'>Contact</a> <br />
                        <a className='text-base text-white font-normal'>Privacy</a> <br />
                        <a className='text-base text-white font-normal'>Refunds</a> <br />
                        <a className='text-base text-white font-normal'>Terms of service</a>
                    </div>
                </div>

                <div className='flex flex-col gap-3 text-end'>
                    <p  className='text-base font-lato text-white font-bold text-start '>Get latest Fashion Updates</p>
                    <div className='bg-white w-auto sm:w-2/3 md:w-1/3 lg:w-auto h-auto flex items-center justify-between py-2 px-2 lg:px-4'>
                        <input type="text" placeholder="john@gmail.com"
                        className="placeholder-black" />
                        < ArrowRight color='black' size={20} />
                    </div>
                </div>
            </div>

            <div className=''>
                <div className='flex flex-col text-left lg:flex-row lg:items-center lg:justify-center gap-x-6 md:gap-x-3 border-t pt-4 border-gray-500 h-auto lg:justify-center'>
                    <a className='text-base text-white font-normal'>Refund Policy</a>
                    <a className='text-base text-white font-normal'>Privacy Policy</a>
                    <a className='text-base text-white font-normal'>Terms of service</a>
                </div>
                <p className='text-white text-base text-center mt-3 lg:text-end lg:-mt-6 md:ml-auto'>Copyright@wallyax.com, 2025</p>
            </div>

        </footer>
    )
}

export default Footer;