import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';

const SearchBar = () => {

  const {search,
        setSearch,
        showSearch,
        setShowSearch} = useContext(ShopContext);

  return showSearch ? (
    <div className='border-t border-b bg-gray-50 text-center'>
      {/* FIXED: Changed 'border-geray-400' to 'border-gray-400' */}
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input 
          type='text' 
          placeholder='Search products...' 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='flex-1 outline-none bg-inherit text-sm'
        />
        <img src={assets.search_icon} alt="Search" className="w-4" />
      </div>
      <img src={assets.cross_icon} alt="Close" className="inline w-3 cursor-pointer" onClick={() => setShowSearch(false)} />
    </div>
  ) : null
}

export default SearchBar