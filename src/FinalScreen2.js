import React from "react";

function FinalScreen2({apiData}) {

  const backgroundImage = apiData ? apiData['14'].find((image) => image.key === 'Background.png') : null;
  const banner = apiData ? apiData['14'].find((image) => image.key === 'Final Screen2.png') : null;

  const backgroundImageStyle = {
    backgroundImage: `url("${backgroundImage?.value || ''}")`,
  };

  return (
    <div className="page-container">
      <div className="background-image" style={backgroundImageStyle}>
        <div className="page-container3">
          {banner && (
            <img
              src={banner.value}
              alt={banner.key}
              className="clock-images"
            />
          )}

        </div>
      </div>
    </div>
  );
}

export default FinalScreen2;