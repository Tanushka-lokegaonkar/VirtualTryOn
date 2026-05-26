import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (e) => {
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 10% off!</p>
        <p className='text-gray-500 text-sm mt-2 mb-5'>
            Join our newsletter to receive updates on new arrivals, special offers and more.
        </p>

        <form>
            <input type="email" placeholder='Enter your email' className='border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
            <button type='submit' className='bg-black text-white py-2 px-4 rounded-r-md hover:bg-gray-500 transition-colors duration-300'>
                Subscribe
            </button>
        </form>
    </div>
  )
}

export default NewsletterBox