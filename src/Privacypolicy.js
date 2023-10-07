import React, { useState } from "react";
import './Privacypolicy.css';
import { useNavigate } from "react-router-dom";
import { Timer } from "./Timer"; 

export function Privacypolicy({ setPNo, apiData  }) {
  let navigate = useNavigate();
  const [timerActive, setTimerActive] = useState(false); 

  const handleButtonClick = () => {
    navigate("/begin-1");
    setTimerActive(true);
  };

  const handleCloseIcon = () => {
    navigate('/');
  }


  const backgroundImage = apiData ? apiData['2'].find((image) => image.key === 'Kiosk background.png') : null;
  const privacyPolicyImage = apiData?.['2'].find((image) => image.key === 'Privacy Policy.png');

  const backgroundImageStyle = {
    backgroundImage: `url("${backgroundImage?.value || ''}")`,
  };

  return (
    <div className="page-container">
      <div className="background-image" style={backgroundImageStyle}>
        <div className="page-container3">
        {privacyPolicyImage && (
            <img
              src={privacyPolicyImage.value}
              alt={privacyPolicyImage.key}
              className="begin-images"
            />
          )}

          <div className="close-icon text-center" onClick={handleCloseIcon}></div>
          <div className="button-begin text-center" onClick={handleButtonClick}></div>
        </div>
      </div>
    </div>
  );
}
