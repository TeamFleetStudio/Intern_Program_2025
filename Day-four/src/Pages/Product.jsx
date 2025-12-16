import React, {useState} from 'react'
import Image1 from '../assets/image1.avif';
import Image2 from '../assets/image2.jpg';
import Image3 from '../assets/image3.avif';
import Image4 from '../assets/image4.avif';
import Image5 from '../assets/image5.avif';
import Image6 from '../assets/image6.webp';
import Image7 from '../assets/image7.png';
import Image8 from '../assets/image8.webp';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, A11y, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/a11y";

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
];

const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0);
  const [horizontalSlider, setHorizontalSlider] = useState(null);
  const [verticalSliderLg, setVerticalSliderLg] = useState(null);
  const [verticalSliderSm, setVerticalSliderSm] = useState(null);


  return (
    <section className='min-h-screen lg:h-screen overflow-visible lg:overflow-hidden flex gap-x-6 mx-2 md:mx-4 lg:mx-8 p-4'>

        <div className='lg:block hidden w-1/5' role='region' aria-label='Vertical Image gallery slider'>
        {/* VERTICAL SLIDER LG */}
            <Swiper
            onSwiper={setVerticalSliderLg}
            direction="vertical"
            slidesPerView={3}
            spaceBetween={10}
            mousewheel={false}
            allowTouchMove={false}
            keyboard={false} 
            a11y={{ enabled: true }}
            modules={[Mousewheel, Keyboard, A11y]}
            className="h-full"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index} role='group' aria-roledescription="slide"
                    aria-label={`Slide ${index + 1} of ${images.length}`}
                    tabIndex={0}
                    onClick={() => {
                        setSelectedImg(index);
                        horizontalSlider?.slideTo(index);
                        verticalSliderLg?.slideTo(index);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                        setSelectedImg(index);
                        horizontalSlider?.slideTo(index);
                        verticalSliderLg?.slideTo(index);
                        }
                    }}
                    className="cursor-pointer" >
                    <img
                        src={img}
                        alt={`Gallery image ${index + 1}`}
                        className={`w-full h-full p-2 object-cover transition-all 
                        ${selectedImg === index ? "border-4 border-black" : "border border-transparent"}
                        `}
                    />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

        <div className='flex flex-col w-full h-auto lg:p-0 lg:h-auto border border-gray-400 md:flex-col lg:flex-row lg:w-4/5'>

            <div className='relative p-8 lg:p-2 w-auto lg:w-3/7 h-auto lg:h-full flex items-center justify-center' role='region' aria-label='Vertical Image gallery slider'>
                <button 
                    className="cursor-pointer absolute -left-5 top-1/2 -translate-y-1/2 
                        w-10 h-10 bg-white rounded-full border-2 border-black
                        flex items-center justify-center hover:bg-gray-100 z-50"
                    onClick={() => {
                    horizontalSlider?.slidePrev();
                    verticalSliderSm?.slidePrev();
                    }}
                >
                    <ArrowLeft size={20} />  
                </button>
                
                {/* HORIZONTAL SLIDER */}
                <Swiper
                    onSwiper={setHorizontalSlider}
                    onSlideChange={(swiper) => {
                    setSelectedImg(swiper.activeIndex);
                    verticalSliderLg?.slideTo(swiper.activeIndex);
                    }}
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={false}
                    modules={[Keyboard, A11y]}
                    keyboard={{ enabled: true }}
                    a11y={{ enabled: true }}
                    className="w-full h-full"
                >
                    {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img
                        src={img}
                        alt={`Selected image ${index + 1}`}
                        className="w-full h-full object-cover"
                        />
                    </SwiperSlide>
                    ))}
                </Swiper>

                <button 
                    className="cursor-pointer absolute -right-5 top-1/2 -translate-y-1/2 
                        w-10 h-10 bg-white rounded-full border-2 border-black
                        flex items-center justify-center hover:bg-gray-100 z-50"
                    onClick={() => {
                    horizontalSlider?.slideNext();
                    verticalSliderSm?.slideNext();
                    }}
                >
                    <ArrowRight size={20} /> 
                </button>
            </div>

            <div className='block lg:hidden w-auto px-8 h-auto'>
                {/* VERTICAL SLIDER SM */}
                <Swiper
                    onSwiper={setVerticalSliderSm}
                    direction="horizontal"
                    slidesPerView={4}
                    spaceBetween={10}
                    mousewheel={false}
                    allowTouchMove={false}
                    keyboard={false} 
                    a11y={{ enabled: true }}
                    modules={[Mousewheel, Keyboard, A11y]}
                    className="h-full"
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index} role='group' aria-roledescription="slide"
                            aria-label={`Slide ${index + 1} of ${images.length}`}
                            tabIndex={0}
                            onClick={() => {
                                setSelectedImg(index);
                                horizontalSlider?.slideTo(index);
                                verticalSliderSm?.slideTo(index);
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                setSelectedImg(index);
                                horizontalSlider?.slideTo(index);
                                verticalSliderSm?.slideTo(index);
                                }
                            }}
                            className="cursor-pointer" >
                            <img
                                src={img}
                                alt={`Gallery image ${index + 1}`}
                                className={`w-full h-full p-2 object-cover transition-all 
                                ${selectedImg === index ? "border-4 border-black" : "border border-transparent"}
                                `}
                            />
                            </SwiperSlide>
                        ))}
                    </Swiper>
            </div>

            <div className='bg-white flex flex-col w-auto lg:w-4/7 p-2 h-full'>
                <div className='flex flex-col gap-y-6 px-8 pt-5 pb-6 lg:pb-0 lg:px-8 lg:pt-16 flex-1'>

                    <div>
                        <div className='flex space-x-4'>
                            <div className='bg-[#EEF1EC] inline-block p-2'>
                                <p className='font-medium text-xs text-[#273025]'>EXPERT CERTIFIED</p>
                            </div>
                            <div className='bg-[#EEF1EC] inline-block p-2'>
                                <p className='font-medium text-xs text-[#273025]'>OFFER</p>
                            </div>
                        </div>

                        <p className='font-lato font-bold text-[40px]'>Skincare Glow Creme</p>

                        <p className='flex space-x-4 font-lato font-semibold text-2xl'>  
                            <span className='text-black'>$ 12.99 </span>
                            <span className='text-[#8E9689] line-through'> $ 24.99</span>
                        </p>
                    </div>

                    <div className='leading-normal'>
                        <p className='font-normal text-base text-[#273025]'>Make a bold statement makwith our classic eye wear selection from Italy. These are sure to turn some heads.</p>
                    </div> 

                    <div className='flex flex-col gap-y-3'>
                        <p className='font-bold text-sm text-[#273025]'>Size</p>
                        <div className='flex gap-x-2'>
                            <p className='font-medium text-2xl text-[#273025] p-2 hover:text-white hover:bg-black'>S</p>
                            <p className='font-medium text-2xl text-[#273025] p-2 hover:text-white hover:bg-black'>M</p>
                            <p className='font-medium text-2xl text-[#273025] p-2 hover:text-white hover:bg-black'>L</p>
                            <p className='font-medium text-2xl text-[#273025] p-2 hover:text-white hover:bg-black'>XL</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-3'>
                        <p className='font-bold text-sm text-[#273025]'>Quantity</p>
                        <div className='w-fit py-2 px-4 border border-black'>
                            <span className='font-bold text-[#273025] text-2xl px-2'> - </span>
                            <span className='font-bold text-[#273025] text-2xl px-2'> 1 </span>
                            <span className='font-bold text-[#273025] text-2xl px-2'> + </span>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-y-2 lg:flex-row lg:gap-x-4 lg:px-8'>
                    <button className='cursor-pointer bg-black font-semibold text-base text-white w-full h-auto py-4'> ADD TO CART </button>
                    <button className='cursor-pointer bg-[#6CF600] font-semibold text-base text-black w-full h-auto py-4'> BUY NOW </button>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Product;