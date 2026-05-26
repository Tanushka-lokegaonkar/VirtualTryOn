import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.exchange_icon} alt="Exchange" className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>Not satisfied with your purchase? No worries! We offer a simple and hassle-free exchange process.</p>
        </div>

        <div>
            <img src={assets.quality_icon} alt="Quality" className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>Quality Assurance</p>
            <p className='text-gray-400'>We stand by the quality of our products. If you're not satisfied, we'll make it right.</p>
        </div>

        <div>
            <img src={assets.support_img} alt="Support" className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>24/7 Customer Support</p>
            <p className='text-gray-400'>Our dedicated support team is always ready to assist you with any questions or concerns.</p>
        </div>
    </div>
  )
}

export default OurPolicy