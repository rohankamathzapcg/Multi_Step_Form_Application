import React from 'react'

const StepperControl = ({ handleClick, currentStep, steps }) => {
    return (
        <>
            <div className='container flex justify-around mt-3 mb-3'>
                {/* Next Button */}
                <button onClick={() => handleClick("Continue")} className='bg-black text-white upperCase py-2 px-4 rounded-xl 
                font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition 
                duration-200 eas-in-out'>
                    {currentStep === steps.length - 1 ? "Continue" : "Continue"}
                </button>
            </div>
        </>
    )
}

export default StepperControl