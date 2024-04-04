import React, { useContext, useState } from 'react'
import { StepperContext } from "../../Context/StepperContext";
import { faGraduationCap, faUserTie, faPerson, faChalkboardUser, faSignal, faEarthAmericas, faBullseye, faSatellite, faEye} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Interested = () => {

  const values = [
    { imgSrc: "", iconSrc: faSignal, title: "Learning specific skills to advance my career" },
    { imgSrc: "", iconSrc: faEarthAmericas, title: "Exploring new topic I'm interested in" },
    { imgSrc: "", iconSrc: faSatellite, title: "Refreshing my math foundations" },
    { imgSrc: "", iconSrc: faBullseye, title: "Exercising my brain to stay sharp" },
    { imgSrc: "", iconSrc: faEye, title: "Something else" }
  ];
  const { userData, setUserData } = useContext(StepperContext)
  const [clickedIndex, setClickedIndex] = useState(-1);

  const handleChange = (index, title) => {
    setClickedIndex(index);
    setUserData(prevUserData => ({
      ...prevUserData,
      Interested: title
    }));
  };

  return (
    <div className="flex flex-col items-center mx-2 my-2">
      <h2 className="text-2xl font-bold mb-2">Which are you most interested in?</h2>
      <p className="text-gray-400 mb-6 text-sm">Choose just one. This will help us get you started (but won't limit your experience).</p>

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

export default Interested