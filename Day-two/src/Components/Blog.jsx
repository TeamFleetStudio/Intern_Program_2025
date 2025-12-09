import React, {useState} from 'react';
import blogImg from '../assets/blog_img.png';
import BlogDescription from './BlogDescription';
import { ChevronDown, ChevronRight } from 'lucide-react';

const Blog = () => {
  const [visibleHeading, setVisibleHeading] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [currentSectionId, setCurrentSectionId] = useState("");
  const [currentHeadingText, setCurrentHeadingText] = useState("");

  return (
    <section className='my-10 mx-10 lg:my-16 lg:mx-16'>
      
      <div className='flex flex-col w-auto md:flex-row lg:flex-row gap-18'>
        <div className='lg:w-2/3'>
          <img className='h-auto sm:w-auto' src={blogImg} alt="Blog Banner Image" />

          <div className='block md:hidden lg:hidden'>
            <div className='px-7 pt-5 mt-6 w-auto h-auto bg-black border rounded-4xl'>
              <p className='text-white font-bold text-4xl leading-10'>A Life-Changing Experience</p>
              <button className='mt-6 mb-5 w-auto text-sm border font-inter leading-4 rounded-lg bg-[#FFD602] text-black py-2.5 px-4'>Get Audit</button>
            </div>

            <div className='sticky top-1'>
              <button aria-live='polite' className="sticky top-5 w-full flex justify-between self-start items-center bg-white p-3 border border-black mt-3 rounded-2xl" onClick={() => setIsOpen(prev => !prev)}> {currentHeadingText || 'Table of Content'}
                
                <ChevronRight
                className={`transition-transform ${isOpen ? "rotate-90" : ""}`} />
                 </button>

                {isOpen && (
                  <div className='flex flex-col gap-4 p-3 w-auto h-auto bg-white border border-gray-500 mt-5 rounded-xl'>
                    <div>
                      <p className='font-bold text-2xl pt-2 pb-2'>Table of Content</p>
                    </div>
                    <div className='flex flex-col gap-4 px-3'>
                      <div className={`flex items-center justify-between bg-white rounded-3xl border border-gray-200 transition ${currentSectionId === 'para1' ? "bg-yellow-100" : "bg-white" }`} >
                        <a href='#para1' onClick={() => setIsOpen(false)} className='font-semibold text-lg leading-2xl p-3 w-full'>A Life-Changing Experience</a>
                      </div>
                      <div className={`flex items-center justify-between bg-white rounded-3xl border border-gray-200 transition ${currentSectionId === 'para2' ? "bg-yellow-100" : "bg-white"}`}>
                        <a href='#para2' onClick={() => setIsOpen(false)} className='font-semibold text-lg leading-2xl p-3 w-full'>A Advocacy at Scale</a>
                      </div>
                      <div className={`flex items-center justify-between bg-white rounded-3xl border border-gray-200 transition ${currentSectionId === 'para3' ? "bg-yellow-100" : "bg-white" }`}>
                        <a href='#para3' onClick={() => setIsOpen(false)} className='font-semibold text-lg leading-2xl p-3 w-full'>The Power of Small Steps</a>
                      </div>
                      <div className={`flex items-center justify-between bg-white rounded-3xl border border-gray-200 transition ${currentSectionId === 'para4' ? "bg-yellow-100" : "bg-white" }`}>
                        <a href='#para4' onClick={() => setIsOpen(false)} className='font-semibold text-lg leading-2xl p-3 w-full'>A Life-Changing Experience</a>
                      </div>
                      <div className={`flex items-center justify-between bg-white rounded-3xl border border-gray-200 transition ${currentSectionId === 'para5' ? "bg-yellow-100" : "bg-white" }`}>
                        <a href='#para5' onClick={() => setIsOpen(false)} className='font-semibold text-lg leading-2xl p-3 w-full'>A Life-Changing Experience</a>
                      </div>
                      <div className={`flex items-center justify-between bg-white rounded-3xl border border-gray-200 transition ${currentSectionId === 'para6' ? "bg-yellow-100" : "bg-white" }`}>
                        <a href='#para6' onClick={() => setIsOpen(false)} className='font-semibold text-lg leading-2xl p-3 w-full'>A Life-Changing Experience</a>
                      </div>
                    </div>
                  </div>
                )}
            </div>

            {window.innerWidth < 768 && (
              <div className='mt-6'>
                <BlogDescription onSectionView={({ id, heading }) => {
                  setCurrentSectionId(id);
                  setCurrentHeadingText(heading);
                }} />
              </div>
            )}
          </div>

          {window.innerWidth >= 768 && (
            <div className='mt-8'>
              <BlogDescription onSectionView={({ id, heading }) => {
                setCurrentSectionId(id);
                setCurrentHeadingText(heading);
              }} />
            </div>
          )}
        </div>

        <div className='hidden md:block lg:block w-1/3'>
          <div className='px-7 pt-5 w-full h-auto bg-black border rounded-4xl'>
            <p className='text-white font-bold text-4xl leading-10'>A Life-Changing Experience</p>
            <button className='mt-6 mb-5 w-auto lg:w-[139px] text-sm border font-inter leading-4 rounded-lg bg-[#FFD602] text-black py-2.5 px-4'>Get Audit</button>
          </div>
          <div className='sticky top-5 flex flex-col gap-4 p-5 w-full h-auto bg-[#FFFBE6] mt-14 rounded-xl'>
              <div>
                <p className='font-bold text-2xl pt-4 pb-6'>Table of Content</p>
              </div>
              <div className='flex flex-col gap-4 px-5'>
                <div className={`flex items-center justify-between border-b border-gray-200 transition ${currentSectionId === 'para1' ? "border rounded-2xl bg-white border-gray-400" : "bg-[#FFFBE6]"}`}>
                  <a href='#para1' className='font-semibold text-lg leading-2xl p-3'>A Life-Changing Experience</a>
                  <ChevronRight className='text-gray-500' size={20} />
                </div>
                <div className={`flex items-center justify-between border-b border-gray-200 transition ${currentSectionId === 'para2' ? "border rounded-2xl bg-white border-gray-400" : "bg-[#FFFBE6]"}`}>
                  <a href='#para2' className='font-semibold text-lg leading-2xl p-3'>A Advocacy at Scale</a>
                  <ChevronRight className='text-gray-500' size={20} />
                </div>
                <div className={`flex items-center justify-between border-b border-gray-200 transition ${currentSectionId === 'para3' ? "border rounded-2xl bg-white border-gray-400" : "bg-[#FFFBE6]"}`}>
                  <a href='#para3' className='font-semibold text-lg leading-2xl p-3'>The Power of Small Steps</a>
                  <ChevronRight className='text-gray-500' size={20} />
                </div>
                <div className={`flex items-center justify-between border-b border-gray-200 transition ${currentSectionId === 'para4' ? "border rounded-2xl bg-white border-gray-400" : "bg-[#FFFBE6]"}`}>
                  <a href='#para4' className='font-semibold text-lg leading-2xl p-3'>A Life-Changing Experience</a>
                  <ChevronRight className='text-gray-500' size={20} />
                </div>
                <div className={`flex items-center justify-between border-b border-gray-200 transition ${currentSectionId === 'para5' ? "border rounded-2xl bg-white border-gray-400" : "bg-[#FFFBE6]"}`}>
                  <a href='#para5' className='font-semibold text-lg leading-2xl p-3'>A Life-Changing Experience</a>
                  <ChevronRight className='text-gray-500' size={20} />
                </div>
                <div className={`flex items-center justify-between border-b border-gray-200 transition ${currentSectionId === 'para6' ? "border rounded-2xl bg-white border-gray-400" : "bg-[#FFFBE6]"}`}>
                  <a href='#para6' className='font-semibold text-lg leading-2xl p-3'>A Life-Changing Experience</a>
                  <ChevronRight className='text-gray-500' size={20} />
                </div>
              </div>
          </div>
        </div>
      </div>

      <div className='w-auto h-auto bg-black p-5 rounded-4xl mt-8'>
          <h2 className='text-4xl text-white font-bold p-2 my-2'>Not sure if you're accessible? Audit your website for free</h2>
          <p className='text-white text-xl p-2 my-2'>Get actionable insights instantly and ensure your website is fully accessible to all users.</p>
          <button className='w-auto h-auto bg-amber-300 rounded-4xl my-2'>
            <p className='p-3 font-bold text-black'>Get Free Report   →</p>
          </button>
        </div>

    </section>
  )
}

export default Blog;