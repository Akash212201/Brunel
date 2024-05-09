import React from 'react'
import heroImg from '../assests/HeroImg.png'
import { PiRocketLaunchFill } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
import CarouselSlider from './HeroSlider'
const Hero = () => {
    return (
        <div className='mb-24'>

            <div className='mb-8'>
                <p className='font-secondary text-center text-[#2DA950] font-normal text-[36px]'>Success stories</p>
                <h1 className='font-primary font-semibold text-[56px] text-center text-[1c1c1c] leading-[4.5rem]'>Every success journey<br /> we've encountered.</h1>
            </div>
            <div className='flex justify-center items-center'>
                <div className='border border-black'>
                    <div className='w-[506.98px] h-[546.27px] rounded-[50.7px] overflow-hidden'>
                        <img src={heroImg} alt="" className=' object-cover' />
                    </div>
                    
                    <div className='absolute top-[483px] left-[62px] bg-white rounded-[27.11px] w-[267.82px] h-[267.82px] p-[30px] shadow-[0px_22.59px_36.14px_0px_#1e1e1e17]'>
                        <h1 className=' font-medium text-[64px] leading-[76.8px] text-[#1c1c1c]'>40%</h1>
                        <p className='text-[#828282] font-primary font-medium text-[18px]'>Achieved reduction in project execution time by optimising team availability</p>
                    </div>
                    <div className='flex justify-center items-center absolute top-[781.71px] bg-white left-[148.19px] w-[245px] h-[88px] py-[1rem] pr-[2rem] pl-[1rem] rounded-[111.54px] shadow-[0px_15.21px_35.49px_0px_#00000017]'>
                        <PiRocketLaunchFill className='text-4xl text-[#2DA950]'/>
                        <div><h3>10 DAYS</h3>
                        Staff Deployment</div>
                    </div>

                    <div className='absolute top-[726px] left-[499px] bg-[#002E18] rounded-[28.36px] pt-[34px] pr-[30px] pb-[40px] pl-[36px] w-[300px]'>
                        <div className='flex items-baseline gap-2'>
                            <h1 className='text-white font-medium text-[4rem]'>$0.5</h1>
                            <h3 className='text-[#A6A3A0] text-[22px] font-medium'>MILLION</h3>
                        </div>
                        <p className='text-[#ccc] font-primary'>Reduced client expenses by saving on hiring and employee costs.</p>
                    </div>
                </div>
                <div className='border border-black flex flex-col'>
                    <div>
                        <CarouselSlider/>
                    </div>
                    <h1>Enhance fortune 50 company’s insights teams research capabilities</h1>
                    <div className='flex  items-center py-[31px] px-[40px] border border-black bg-[#1c1c1c] text-white gap-2 '>
                        <button className=''>Explore More</button>
                       < FaArrowRight/> 
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Hero