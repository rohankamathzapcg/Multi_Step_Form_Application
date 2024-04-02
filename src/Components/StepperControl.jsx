import React from 'react'

const StepperControl = () => {
    return (
        <>
            <div className='container flex justify-around mt-4 mb-8'>
                {/* Back Button */}
                <button className='bg-white text-slate-400 upperCase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 eas-in-out'>
                    Back
                </button>
                {/* Next Button */}
                <button className='bg-black text-white upperCase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 eas-in-out'>
                    Continue
                </button>
            </div>
        </>
    )
}

export default StepperControl