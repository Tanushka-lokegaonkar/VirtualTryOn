import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'Contact'} text2={'Us'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="Contact Us" />
        <div className='flrx flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p><br/>
          <p className='text-gray-500'>Mumbai, Maharashtra</p><br/>
          <p className='text-gray-500'>Tel: +91 98765 43210</p>
          <p className='text-gray-500'>Email: info@forever.com</p><br/>
          <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p><br/>
          <p className='text-gray-500'>We're always looking for talented individuals to join our team. Check out our available positions and apply today!</p><br/>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default contact