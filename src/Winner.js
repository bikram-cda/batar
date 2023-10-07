import React from "react";
 import { useNavigate } from "react-router-dom";
import "./Level2.css";

export function Winner({apiData}) {
  
  let navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/register");
  };

  const backgroundImage = apiData ? apiData['13'].find((image) => image.key === 'Background.png') : null;
  const banner = apiData ? apiData['13'].find((image) => image.key === 'Winner Screen.png') : null;
  const ProgressBar = apiData ? apiData['13'].find((image) => image.key === 'Progress Bar.png') : null;

  const backgroundImageStyle = {
    backgroundImage: `url("${backgroundImage?.value || ''}")`,
  };

  return (
    <div className="page-container">
      <div className="background-image" style={backgroundImageStyle}>
        <div className="page-container1">
          {banner && (
            <img
              src={banner.value}
              alt={banner.key}
              className="clock-image"
            />
          )}

          <div className="time-text  text-center"  onClick={handleButtonClick}>
          </div>
        </div>
        <div className="page-container2">
          {ProgressBar && (
            <img
              src={ProgressBar.value}
              alt={ProgressBar.key}
              className="progress-image"
            />
          )}

          <div className="time-text  text-center"></div>
        </div>
      </div>
    </div>
  );
}
