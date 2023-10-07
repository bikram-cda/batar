import React from "react";

export function LevelMap3({apiData}) {

  const backgroundImage = apiData ? apiData['8'].find((image) => image.key === 'Background.png') : null;
  const LevelMap3gif = apiData ? apiData['8'].find((image) => image.key === 'LevelMap 3.gif') : null;

  const backgroundImageStyle = {
    backgroundImage: `url("${backgroundImage?.value || ''}")`,
  };

  return (
    <div className="page-container">
      <div className="background-images" style={backgroundImageStyle}>
        <div className="page-container3">

          {LevelMap3gif && (
            <img
              src={LevelMap3gif.value}
              alt={LevelMap3gif.key}
              className="clock-images"
            />
          )}
        </div>
      </div>
    </div>
  );
}