import React from 'react'
import  imageP  from '../../assets/rightplace.jpg';

const RightPlace = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="flex flex-1 justify-center">
        <img src={imageP} alt="Your Image" className="w-full h-auto" />
      </div>

      <div className="flex flex-1 justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">You're in the right place</h2>
          <p className="text-gray-500 text-sm">Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science</p>
        </div>
      </div>
    </div>
  )
}

export default RightPlace