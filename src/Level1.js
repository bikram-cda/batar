import React from "react";
import { useNavigate } from "react-router-dom";
import "./Level1.css";

export function Level1({ setPNo, apiData }) {
  let navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/scanner");
    setPNo("1");
  };

  const backgroundImage = apiData ? apiData['4'].find((image) => image.key === 'background.png') : null;
  const LevelMap1 = apiData?.['4'].find((image) => image.key === 'LevelMap1.gif');

    const backgroundImageStyle = {
      backgroundImage: `url("${backgroundImage?.value || ''}")`,
    };

  return (
    <div className="page-container">
      <div className="background-images" style={backgroundImageStyle}>
        <div className="page-container3">

          {LevelMap1 && (
            <img
              src={LevelMap1.value}
              alt={LevelMap1.key}
              className="begin-images"
            />
          )}
          
          <div className="button-begin text-center" onClick={handleButtonClick}>
          </div>
        </div>
      </div>
    </div>
  );
}

