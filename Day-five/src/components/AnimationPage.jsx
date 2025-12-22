import React, { useState } from 'react';
import Image1 from '../assets/image1.jpg';
import Image2 from '../assets/image2.png';
import Image3 from '../assets/image3.jpg';
import Slider from "react-slick";

const AnimationPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    { image: Image1 },
    { image: Image2 },
    { image: Image3 },
  ];

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    };

  return (
    <section className="lg:px-10 py-8 px-6 bg-[#FBFCFA]">

        <div className="flex flex-col gap-y-2 lg:flex-row justify-between">
            <div className="flex lg:flex-row flex-col gap-x-3">
            <p className="text-[#2D6105] font-roboto font-bold text-5xl">FEATURED</p>
            <p className="text-black font-roboto font-bold text-5xl">COLLECTION</p>
            </div>
            <button className="w-fit font-semibold text-base text-center lg:text-end border-2 border-black rounded-3xl py-2 px-6">
            View all
            </button>
        </div>

        <div className="block md:hidden lg:hidden mt-2">
            <Slider {...sliderSettings}>

                <div>
                    <div className="flex flex-col gap-y-2 p-4 rounded-3xl shadow-sm">
                        <div className="relative w-full h-55 overflow-hidden rounded-3xl">
                            <img src={Image1} alt="Slide1" className="w-full h-auto rounded-3xl" />
                        </div>

                        <div className="flex flex-col gap-y-4 mt-2">
                            <div className="w-fit py-1 px-2 bg-[#6CF6001A] text-[#2D6105] text-xs">
                                FLAT 40%
                            </div>

                            <p className="font-roboto text-black font-semibold text-3xl leading-[120%]">
                                Timeless tribal jewellery
                            </p>

                            <p className="font-medium text-[#273025] text-base leading-[150%]">
                                Make a bold statement with our classic eye wear selection from Italy.
                                These are sure to turn some heads.
                            </p>

                            <button className="bg-black w-fit text-white font-semibold text-base py-4 px-6 rounded-4xl">
                                Buy now →
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col gap-y-2 p-4 rounded-3xl shadow-sm">
                        <div className="relative w-full h-55 overflow-hidden rounded-3xl">
                            <img src={Image2} alt="Slide2" className="w-full h-auto rounded-3xl" />
                        </div>

                        <div className="flex flex-col gap-y-4 mt-2">
                            <div className="w-fit py-1 px-2 bg-[#6CF6001A] text-[#2D6105] text-xs">
                                FLAT 40%
                            </div>

                            <p className="font-roboto text-black font-semibold text-3xl leading-[120%]">
                                Timeless tribal jewellery
                            </p>

                            <p className="font-medium text-[#273025] text-base leading-[150%]">
                                Make a bold statement with our classic eye wear selection from Italy.
                                These are sure to turn some heads.
                            </p>

                            <button className="bg-black w-fit text-white font-semibold text-base py-4 px-6 rounded-4xl">
                                Buy now →
                            </button>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col gap-y-2 p-4 rounded-3xl shadow-sm">
                        <div className="relative w-full h-55 overflow-hidden rounded-3xl">
                            <img src={Image3} alt="Slide3" className="w-full h-auto rounded-3xl" />
                        </div>

                        <div className="flex flex-col gap-y-4 mt-2">
                            <div className="w-fit py-1 px-2 bg-[#6CF6001A] text-[#2D6105] text-xs">
                                FLAT 40%
                            </div>

                            <p className="font-roboto text-black font-semibold text-3xl leading-[120%]">
                                Timeless tribal jewellery
                            </p>

                            <p className="font-medium text-[#273025] text-base leading-[150%]">
                                Make a bold statement with our classic eye wear selection from Italy.
                                These are sure to turn some heads.
                            </p>

                            <button className="bg-black w-fit text-white font-semibold text-base py-4 px-6 rounded-4xl">
                                Buy now →
                            </button>
                        </div>
                    </div>
                </div>

            </Slider>
            </div>

        <div className="hidden md:flex lg:flex gap-x-10 mt-8">
            {cards.map((card, index) => (
            <div
                key={index}
                tabIndex={0}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                className={`collection-card border border-gray-50 flex flex-row rounded-3xl overflow-hidden shadow-lg h-130
                ${activeIndex === index ? 'active' : ''}
                `}
            >
                <div className="relative card-image">
                <img
                    className="h-full w-full object-cover"
                    src={card.image}
                    alt={`Slide ${index + 1}`}
                />
                </div>

                {activeIndex === index && (
                <div className="card-content flex flex-col justify-center gap-y-10 px-8 py-10 bg-white flex-1 transition-all duration-300 ease-in-out">
                    <div className="flex flex-col gap-y-4">
                    <div className="w-fit py-1 px-2 bg-[#6CF6001A] text-[#2D6105] text-xs">
                        FLAT 40%
                    </div>

                    <p className="font-roboto text-black font-semibold text-5xl leading-[120%]">
                        Timeless tribal jewellery
                    </p>

                    <p className="font-medium text-[#273025] text-base leading-[150%]">
                        Make a bold statement with our classic eye wear selection from Italy.
                        These are sure to turn some heads.
                    </p>
                    </div>

                    <button className="bg-black w-fit text-white font-semibold text-base py-4 px-6 rounded-4xl">
                    Buy now →
                    </button>
                </div>
                )}
            </div>
            ))}
        </div>
    </section>
  );
};

export default AnimationPage;