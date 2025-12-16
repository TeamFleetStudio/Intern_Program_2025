import React from 'react';
import Logo from '../assets/logo-sift-hire.png';

const Home = () => {
  return (
    <div>
        <div className='absolute bg-cover w-full h-full bg-[url(D:\Week1-Frontend\Intern_Program_2025\Day-three\src\assets\banner_img3.png)] lg:w-3/4 lg:h-full lg:bg-[url(D:\Week1-Frontend\Intern_Program_2025\Day-three\src\assets\banner_img4.png)]'>

            <div>

                <div>
                    <img src={Logo} alt="Sift hire Logo" className='w-[174px] h-7 top-[50px] left-[162px]'/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Home