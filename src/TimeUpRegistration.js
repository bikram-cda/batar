
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Level1.css";
import "./TimeUpRegistration.css"

export function Timeup1({apiData}) {
  let navigate = useNavigate();
  const handleButtonClick = () => {
   navigate("/register");
  };

  const backgroundImage = apiData ? apiData['16'].find((image) => image.key === 'Background.png') : null;
  const banner = apiData ? apiData['16'].find((image) => image.key === 'Time Up1.png') : null;

  const backgroundImageStyle = {
    backgroundImage: `url("${backgroundImage?.value || ''}")`,
  };

  return (
    <div className="page-container">
      <div className="background-image" style={backgroundImageStyle}>
        <div className="timeup-container">
          {banner && (
            <img
              src={banner.value}
              alt={banner.key}
              className="timeup-images"
            />
          )}

          <div className="timeup-begin text-center" onClick={handleButtonClick}>
          
          </div>
        </div>
        
      </div>
    </div>
  );
}

export function Timeup2({apiData}) {
    let navigate = useNavigate();
    const handleButtonClick = () => {
     navigate("/register");
    };

    const backgroundImage = apiData ? apiData['16'].find((image) => image.key === 'Background.png') : null;
  const banner = apiData ? apiData['16'].find((image) => image.key === 'Time Up2.png') : null;

  const backgroundImageStyle = {
    backgroundImage: `url("${backgroundImage?.value || ''}")`,
  };
  
    return (
      <div className="page-container">
        <div className="background-image" style={backgroundImageStyle}>
          <div className="timeup-container">
            {/* <img src={banner2} alt="Banner" className="timeup-images" /> */}
            {banner && (
            <img
              src={banner.value}
              alt={banner.key}
              className="timeup-images"
            />
          )}

            <div className="timeup-begin text-center" onClick={handleButtonClick}>
            
            </div>
          </div>
          
        </div>
      </div>
    );
  }
  export function Timeup3({apiData}) {
    let navigate = useNavigate();
    const handleButtonClick = () => {
     navigate("/register");
    };

    const backgroundImage = apiData ? apiData['16'].find((image) => image.key === 'Background.png') : null;
  const banner = apiData ? apiData['16'].find((image) => image.key === 'Time Up3.png') : null;

  const backgroundImageStyle = {
    backgroundImage: `url("${backgroundImage?.value || ''}")`,
  };
  
    return (
      <div className="page-container">
        <div className="background-image" style={backgroundImageStyle}>
          <div className="timeup-container">
            {/* <img src={banner3} alt="Banner" className="timeup-images" /> */}
            {banner && (
            <img
              src={banner.value}
              alt={banner.key}
              className="timeup-images"
            />
          )}

            <div className="timeup-begin text-center" onClick={handleButtonClick}>
            
            </div>
          </div>
          
        </div>
      </div>
    );
  }
  export function Timeup4({apiData}) {
    let navigate = useNavigate();
    const handleButtonClick = () => {
     navigate("/register");
    };

    const backgroundImage = apiData ? apiData['16'].find((image) => image.key === 'Background.png') : null;
  const banner = apiData ? apiData['16'].find((image) => image.key === 'Time Up4.png') : null;

  const backgroundImageStyle = {
    backgroundImage: `url("${backgroundImage?.value || ''}")`,
  };
  
    return (
      <div className="page-container">
        <div className="background-image" style={backgroundImageStyle}>
          <div className="timeup-container">
            {/* <img src={banner4} alt="Banner" className="timeup-images" /> */}
            {banner && (
            <img
              src={banner.value}
              alt={banner.key}
              className="timeup-images"
            />
          )}

            <div className="timeup-begin text-center" onClick={handleButtonClick}>
            
            </div>
          </div>
          
        </div>
      </div>
    );
  }