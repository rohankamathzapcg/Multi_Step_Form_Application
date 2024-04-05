import React from 'react';
import Image1 from '../assets/final1.jpg'
import Image2 from '../assets/final2.jpg'


const FinalPage = () => {
    return (
        <div className="bg-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-6">Learning paths based on your answers</h2>
            <p className="text-gray-600 mb-8">Choose one to get started. You can switch anytime.</p>

            <div className="flex justify-center space-x-8">

                <div className="bg-white border rounded-lg p-6 max-w-sm">
                    <div className="mb-4">
                        <span className="bg-yellow-500 text-white px-3 py-1 rounded-full font-semibold">
                            MOST POPULAR
                        </span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Foundational Math Build</h3>
                            <p className="text-gray-600 mb-4">
                                Build your foundational skills in algebra, geometry, and probability.
                            </p>
                        </div>
                        <div>
                            <img src={Image1} alt="Mathematical Thinking" />
                        </div>
                    </div>
                </div>

                <div className="bg-white border rounded-lg p-6 max-w-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h3 className="text-xl font-bold">Mathematical Thinking</h3>
                            <p className="text-gray-600">
                                Build your foundational skills in algebra, geometry, and probability.
                            </p>
                        </div>
                        <div>
                            <img src={Image2} alt="Mathematical Thinking" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinalPage;