import React from "react";
import { useNavigate } from "react-router-dom";
import "./Level2.css";

export function Level4({setPNo, apiData}) {
  let navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/scanner");
    setPNo('4')

  };

  const backgroundImage = apiData ? apiData['9'].find((image) => image.key === 'Background.png') : null;
    const Banner = apiData?.['9'].find((image) => image.key === 'Banner.png');
    const ProgressBar = apiData?.['9'].find((image) => image.key === 'Process Bar.png');

    const backgroundImageStyle = {
      backgroundImage: `url("${backgroundImage?.value || ''}")`,
    };

  return (
    <div className="page-container">
      <div className="background-image" style={backgroundImageStyle}>
        <div className="page-container1">
          {Banner && (
            <img
              src={Banner.value}
              alt={Banner.key}
              className="clock-image"
            />
          )}

          <div className="time-text  text-center" onClick={handleButtonClick}>
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
