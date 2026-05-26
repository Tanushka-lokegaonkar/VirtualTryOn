import React from 'react'
import { assets } from '../assets/assets' // ✅ Added this to fix the crash!

const Footer = () => {
  return (
    <div className='mt-40'>
        {/* Main Grid: Responsive column structure */}
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm text-gray-600'>

          {/* Column 1: Logo & Copyright */}
          <div>
            <img src={assets.logo} alt="logo" className='w-32 mb-5' />
            <p className='w-full md:w-2/3 leading-relaxed'>
              Discover our latest arrivals and premium essentials crafted to elevate your daily style. Experience seamless shopping with fast delivery and excellent support.
            </p>
          </div>

          {/* Column 2: Company Links */}
          <div>
            <p className='text-xl font-medium text-gray-800 mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2'>
                <li className='cursor-pointer hover:text-gray-900'>Home</li>
                <li className='cursor-pointer hover:text-gray-900'>About us</li>
                <li className='cursor-pointer hover:text-gray-900'>Delivery</li>
                <li className='cursor-pointer hover:text-gray-900'>Privacy policy</li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <p className='text-xl font-medium text-gray-800 mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2'>
                <li>+1-212-456-7890</li>
                <li>contact@foreveryou.com</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright line */}
        <div>
            <hr className='border-gray-300' />
            <p className='py-5 text-sm text-center text-gray-500'>
              © 2026 All rights reserved. Made with ❤️ by <a className='hover:text-gray-900 underline' href="https://www.linkedin.com/in/tanushka-lokegaonkar-b9aa5b293" target="_blank" rel="noopener noreferrer">Tanushka Lokegaonkar</a>.
            </p>
        </div>
    </div>
  )
}

export default Footer