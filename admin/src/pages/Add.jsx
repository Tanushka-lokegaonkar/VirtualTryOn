import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Add = () => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // Connect to your FormData / API call here
  };

  return (
    <div className="w-full">
      <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
        <div>
          <p className="mb-2 font-medium text-gray-700">Upload Image</p>

          <div className="flex gap-3">
            {/* Image 1 */}
            <label htmlFor="image1" className="cursor-pointer">
              <img
                className="w-20 h-20 object-cover border border-dashed border-gray-300 rounded"
                src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
                alt="Upload Area"
              />
              <input
                onChange={(e) => setImage1(e.target.files[0])}
                type="file"
                id="image1"
                hidden
              />
            </label>

            {/* Image 2 */}
            <label htmlFor="image2" className="cursor-pointer">
              <img
                className="w-20 h-20 object-cover border border-dashed border-gray-300 rounded"
                src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
                alt="Upload Area"
              />
              <input
                onChange={(e) => setImage2(e.target.files[0])}
                type="file"
                id="image2"
                hidden
              />
            </label>

            {/* Image 3 */}
            <label htmlFor="image3" className="cursor-pointer">
              <img
                className="w-20 h-20 object-cover border border-dashed border-gray-300 rounded"
                src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
                alt="Upload Area"
              />
              <input
                onChange={(e) => setImage3(e.target.files[0])}
                type="file"
                id="image3"
                hidden
              />
            </label>

            {/* Image 4 */}
            <label htmlFor="image4" className="cursor-pointer">
              <img
                className="w-20 h-20 object-cover border border-dashed border-gray-300 rounded"
                src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
                alt="Upload Area"
              />
              <input
                onChange={(e) => setImage4(e.target.files[0])}
                type="file"
                id="image4"
                hidden
              />
            </label>
          </div>
        </div>

        <div className='w-full'>
          <p className='mb-2'>Product Name</p>
          <input className='w-full max-w-[500px] px-3 py-2' type="text" placeholder="Enter product name" required />
        </div>

        <div className='w-full'>
          <p className='mb-2'>Product description</p>
          <textarea className='w-full max-w-[500px] px-3 py-2' placeholder="Enter product description" required />
        </div>

        <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>

          <div>
            <p className='mb-2'>Product Category</p>
            <select className='w-full px-3 py-2'>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>

          <div>
            <p className='mb-2'>Sub Category</p>
            <select className='w-full px-3 py-2'>
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="WinterWear">Winter Wear</option>
            </select>
          </div>

          <div>
            <p className='mb-2'>Product Price</p>
            <input className='w-full px-3 py-2 sm:w-[120px]' type="number" placeholder="25" required />
          </div>
        </div>

        <div>
          <p className='mb-2'>Product Size</p>
          <div className='flex gap-3'>
            <div>
              <p className='bg-gray-200 px-3 py-1 cursor-pointer'>S</p>
            </div>

            <div>
              <p className='bg-gray-200 px-3 py-1 cursor-pointer'>M</p>
            </div>
            
            <div>
              <p className='bg-gray-200 px-3 py-1 cursor-pointer'>L</p>
            </div>

            <div>
              <p className='bg-gray-200 px-3 py-1 cursor-pointer'>XL</p>
            </div>

            <div>
              <p className='bg-gray-200 px-3 py-1 cursor-pointer'>XXL</p>
            </div>
          </div>
        </div>

        
      </form>
    </div>
  );
};

export default Add;