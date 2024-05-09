import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between items-center rounded-[40px] px-[60px] py-12 bg-[#f5f5f5] my-8'>
    <div className='font-primary font-medium'>
    © Talup 2023. All rights reserved
    </div>
    <div className='flex gap-8'>
        <a href="#!" className=' underline font-normal underline-offset-2 '>Terms & Conditions</a>
        <a href="#!" className=' underline font-normal underline-offset-2 '>Privacy Policy</a>
        </div>
</div>
  )
}

export default Footer