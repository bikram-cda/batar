import React from "react";

export function LevelMap4({apiData}) {

  const backgroundImage = apiData ? apiData['10'].find((image) => image.key === 'Background.png') : null;
  const LevelMap4gif = apiData ? apiData['10'].find((image) => image.key === 'LevelMap4.gif') : null;

  const backgroundImageStyle = {
    backgroundImage: `url("${backgroundImage?.value || ''}")`,
  };

  return (
    <div className="page-container">
      <div className="background-images" style={backgroundImageStyle}>
        <div className="page-container3">
          {LevelMap4gif && (
            <img
              src={LevelMap4gif.value}
              alt={LevelMap4gif.key}
              className="clock-images"
            />
          )}

        </div>
      </div>
    </div>
  );
}