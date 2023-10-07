import React from 'react';
import './StartGame.css';
import { useNavigate } from "react-router-dom";

export function StartGame({apiData}) {

  let navigate = useNavigate();

  function handleButtonClick() {
    navigate('/begin-1')
    localStorage.removeItem("timerValue");
  }

  function handleHowToBeginButtonClick() {
    navigate('/view-instruction')
    localStorage.removeItem("timerValue");
  }

  const backgroundImage = apiData ? apiData['1'].find((image) => image.key === 'Kiosk background.png') : null;
  const welcomeImage = apiData ? apiData['1'].find((image) => image.key === 'Welcome Screeen.png') : null;

  const backgroundImageStyle = {
    backgroundImage: `url("${backgroundImage?.value || ''}")`,
  };

  return (
    <div className="page-container">
      <div className="background-image" style={backgroundImageStyle}>
        <div className="page-container3">
          {welcomeImage && (
            <img src={welcomeImage.value} alt="Banner" className="begin-images" />
          )}
          <div className="how-begin text-center" onClick={handleHowToBeginButtonClick}>
          </div>
          <div className="button-begin text-center" onClick={handleButtonClick}>
          </div>
        </div>
      </div>
    </div>
  );
}
