import React, { useContext, useState } from 'react'
import { StepperContext } from "../../Context/StepperContext";

const Math = () => {
  const values = [
    { formula: "5 × 1/2 = ?", title: "Arithmetic", subTitle: "Introductory" },
    { formula: "3x + 5 = 4", title: "Basic Algebra", subTitle: "Foundational" },
    { formula: "x = (-b ± √(b^2 - 4ac)) / 2a", title: "Intermediate Algebra", subTitle: "Intermediate" },
    { formula: "∫(0→x) x^4 dx = ?", title: "Calculus", subTitle: "Advanced" },
  ];

  const { userData, setUserData } = useContext(StepperContext);
  const [clickedIndex, setClickedIndex] = useState(-1);

  const handleChange = (index, title) => {
    setClickedIndex(index);
    setUserData(prevUserData => ({
      ...prevUserData,
      math: title
    }));
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">What is your math comfort level?</h2>
      <p className="text-gray-600 mb-8">
        Choose the highest level you feel confident in — you can always adjust later.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        {values.map((value, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`p-5 rounded-md shadow-md mb-2 text-center cursor-pointer bg-white border ${
                index === clickedIndex ? 'border-orange-500' : 'border-gray-300'
              }`}
              onClick={() => handleChange(index, value.title)}
            >
              <span>{value.formula}</span><br/>
              <span className="font-bold text-black">{value.title}</span><br/>
              <span className="text-gray-400">{value.subTitle}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Math;
