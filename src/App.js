import React, { useState } from "react";
import Stepper from "./Components/Stepper";
import StepperControl from "./Components/StepperControl";
import Description from "./Components/Steps/Description";
import Interested from "./Components/Steps/Interested";
import RightPlace from "./Components/Steps/RightPlace";
import Math from "./Components/Steps/Math";
import Complete from "./Components/Steps/Complete";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Description",
    "Interested",
    "Right Place",
    "Math",
    "Complete",
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
      <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
        {/* Stepper */}
        <div className="container horizontal mt-5">
          <Stepper steps={steps} currentStep={currentStep} handleClick={handleClick} />
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
