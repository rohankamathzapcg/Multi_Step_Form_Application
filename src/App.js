import React from "react";
import Stepper from "./Components/Stepper";
import StepperControl from "./Components/StepperControl";

const App = () => {
  return (
    <>
      <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
        {/* Stepper */}
        <div className="container horizontal mt-5">
          <Stepper />
        </div>
        {/* Navigation Controls */}
        <StepperControl />
      </div>
    </>
  );
};

export default App;
