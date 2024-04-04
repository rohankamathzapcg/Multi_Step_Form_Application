import React, { useContext, useState } from 'react'
import { StepperContext } from "../../Context/StepperContext";
import { faGraduationCap, faUserTie, faPerson, faChalkboardUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Description = () => {
  const values = [
    { imgSrc: "", iconSrc: faGraduationCap, title: "Student or soon to be enrolled" },
    { imgSrc: "", iconSrc: faUserTie, title: "Professional pursuing a career" },
    { imgSrc: "", iconSrc: faPerson, title: "Parent of a school-age child" },
    { imgSrc: "", iconSrc: faPerson, title: "Lifelong learner" },
    { imgSrc: "", iconSrc: faChalkboardUser, title: "Teacher" },
    { imgSrc: "", iconSrc: faPerson, title: "Other" }
  ];
  const { userData, setUserData } = useContext(StepperContext)
  const [clickedIndex, setClickedIndex] = useState(-1);

  const handleChange = (index, title) => {
    setClickedIndex(index);
    setUserData(prevUserData => ({
      ...prevUserData,
      description: title
    }));
  };
  return (
    <div className="flex flex-col items-center mx-2 my-2">
      <h2 className="text-2xl font-bold mb-2">Which describes you best?</h2>
      <p className="text-gray-600 mb-3">This will help us personalize your experience.</p>

      <div className="flex flex-col">
        {
          values.map((value, index) => {
            return (
              <div key={index} className={`flex items-center p-4 rounded-md cursor-pointer mb-4 shadow bg-white border ${index === clickedIndex ? 'border-orange-500' : 'border-gray-300'}`} onClick={() => handleChange(index, value.title)}>
                {/* <img src={value.imageSrc} alt="Student" className="w-6 h-6 mr-2" /> */}
                <FontAwesomeIcon icon={value.iconSrc} />&nbsp;&nbsp;
                <span>{value.title}</span>
              </div>
            )
          })
        }


      </div>
    </div>
  )
}

export default Description
