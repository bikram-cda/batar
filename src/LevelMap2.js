import React from "react";

export function LevelMap2({apiData}) {

  const backgroundImage = apiData ? apiData['6'].find((image) => image.key === 'Background.png') : null;
  const LevelMap2gif = apiData ? apiData['6'].find((image) => image.key === 'LevelMap2.gif') : null;

  const backgroundImageStyle = {
    backgroundImage: `url("${backgroundImage?.value || ''}")`,
  };

  return (
    <div className="page-container">
      <div className="background-images" style={backgroundImageStyle}>
        <div className="page-container3">

          {LevelMap2gif && (
            <img
              src={LevelMap2gif.value}
              alt={LevelMap2gif.key}
              className="clock-images"
            />
          )}
        </div>
      </div>
    </div>
  );
}
