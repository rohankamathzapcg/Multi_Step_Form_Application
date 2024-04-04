import React, { useState } from "react";
import Stepper from "./Components/Stepper";
import StepperControl from "./Components/StepperControl";
import Description from "./Components/Steps/Description";
import Interested from "./Components/Steps/Interested";
import RightPlace from "./Components/Steps/RightPlace";
import Math from "./Components/Steps/Math";
import Complete from "./Components/Steps/Complete";
import { StepperContext } from "./Context/StepperContext";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData,setUserData]=useState('')
  const [finalData,setFinalData]=useState([])
  const steps = [
    "Description",
    "Interested",
    "Right Place",
    "Math",
    "Complete",
    "Next"
  ];
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Description />;
      case 2:
        return <Interested />;
      case 3:
        return <RightPlace />;
      case 4:
        return <Math />;
      case 5:
        return <Complete />;
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "Continue" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <>
      <div className="md:w-3/4 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
        {/* Stepper */}
        <div className="container horizontal mt-2">
          <Stepper
            steps={steps}
            currentStep={currentStep}
            handleClick={handleClick}
          />

          {/* Display Components */}
          <div className="my-5 p-10">
            <StepperContext.Provider value={{
              userData,
              setUserData,
              finalData,
              setFinalData
            }}>
            {displayStep(currentStep)}
            </StepperContext.Provider>
          </div>
        </div>

        {/* Navigation Controls */}
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      </div>
    </>
  );
};

export default App;
