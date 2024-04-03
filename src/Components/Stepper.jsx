import React, { useEffect, useRef, useState } from 'react';

const Stepper = ({ steps, currentStep, handleClick }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    newSteps.forEach((step, index) => {
      if (index === stepNumber) {
        step.highlighted = true;
        step.selected = true;
        step.completed = true;
      } else if (index < stepNumber) {
        step.highlighted = false;
        step.selected = true;
        step.completed = true;
      } else {
        step.highlighted = false;
        step.selected = false;
        step.completed = false;
      }
    });
    return newSteps;
  };

  useEffect(() => {
    const stepState = steps.map((step, index) => ({
      description: step,
      completed: false,
      highlighted: index === 0,
      selected: index === 0,
    }));
    stepRef.current = stepState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => (
    <div key={index} className={index !== newStep.length - 1 ? "w-full flex items-center" : "flex items-center"}>
      <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${step.completed ? "border-green-600" : "border-gray-300"}`}>{/* Display Line */}</div>
    </div>
  ));

  return (
    <>
      <div className="mx-4 p-4 flex justify-between items-center">
        <div
          className="cursor-pointer"
          onClick={() => handleClick("back")}
        >
          {/* Insert SVG back arrow icon here */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </div>
        {displaySteps}
      </div>
    </>
  );
};

export default Stepper;
