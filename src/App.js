import React, { useEffect, useState } from "react";
import Stepper from "./Components/Stepper";
import StepperControl from "./Components/StepperControl";
import Description from "./Components/Steps/Description";
import Interested from "./Components/Steps/Interested";
import RightPlace from "./Components/Steps/RightPlace";
import Math from "./Components/Steps/Math";
import Complete from "./Components/Steps/Complete";
import { StepperContext } from "./Context/StepperContext";
import LoadingPage from "../src/Components/LoadingPage";
import FinalPage from "./Components/FinalPage";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);
  const [change, setChange] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
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
      default:
        return null;
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    if (direction === "Continue") {
      if (newStep < steps.length - 1) {
        newStep++;
      } else {
        newStep = 0;
        setChange(newStep);
      }
    } else {
      newStep--;
    }

    if (newStep > 0 && newStep <= steps.length) {
      setCurrentStep(newStep);
    }
  };

  useEffect(() => {
    if (change === 0) {
      setTimeout(() => {
        setIsLoading(false);
        setChange(-1)
      }, 5000);
    }
  }, [change]);

  useEffect(() => {
    if (!isLoading && currentStep === steps.length) {
      setChange(-1); // Trigger the rendering of FinalPage
    }
  }, [isLoading, currentStep, steps.length]);

  return (
    <>
      {change === 0 ? (
        <LoadingPage />
      ) : change === -1 ? (
        <FinalPage />
      ) : (
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
              <StepperContext.Provider
                value={{
                  userData,
                  setUserData,
                  finalData,
                  setFinalData,
                }}
              >
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
      )}
    </>
  );
};

export default App;
