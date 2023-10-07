import React from "react";

export function LevelMap5({apiData}) {

  const backgroundImage = apiData ? apiData['12'].find((image) => image.key === 'Background.png') : null;
  const LevelMap5gif = apiData ? apiData['12'].find((image) => image.key === 'LevelMap5.gif') : null;

  const backgroundImageStyle = {
    backgroundImage: `url("${backgroundImage?.value || ''}")`,
  };

  return (
    <div className="page-container">
      <div className="background-images" style={backgroundImageStyle}>
        <div className="page-container3">
          {LevelMap5gif && (
            <img
              src={LevelMap5gif.value}
              alt={LevelMap5gif.key}
              className="clock-images"
            />
          )}

        </div>
      </div>
    </div>
  );
}
