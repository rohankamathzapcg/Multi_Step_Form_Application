import React from 'react'
import  imageC  from '../../assets/img2.png';

const Complete = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="flex flex-1 justify-center">
        <img src={imageC} alt="Your Image" className="w-full h-auto" />
      </div>

      <div className="flex flex-1 justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">You're on your way!</h2>
          <p className="text-gray-500 text-sm">
          "Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations
          </p><br/>
          <p className='text-left ms-10'>- Jacob S.</p>
        </div>
      </div>
    </div>
  )
}

export default Complete