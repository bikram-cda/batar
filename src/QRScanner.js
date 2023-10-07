import React, { useEffect, useRef, useState } from "react";
import jsQR from "jsqr";
import "./QRScanner.css";
import { useNavigate } from "react-router-dom";

function QRScanner(props) {
  const [QRCodeValue, setQRCodeValue] = useState(null);
  const [result, setResult] = useState("");
  const [currentImage, setCurrentImage] = useState(null);

  const navigate = useNavigate();
  const videoRef = useRef(null);
  const scannerBarRef = useRef(null);


  const apiData = props.apiData;
  const girlImage = apiData ? apiData['17'].find((image) => image.key === 'Girl Image.png') : null;
  const boyImage = apiData ? apiData['17'].find((image) => image.key === 'Boy Image.png') : null;

  const imageMap = {
    1: girlImage.value,
    2: boyImage.value,
    3: girlImage.value,
    4: boyImage.value,
    5: girlImage.value,
  };

  const handleScan = () => {
    if (videoRef.current && videoRef.current.videoWidth > 0) {
      const videoElement = videoRef.current;
      const canvas = document.createElement("canvas");
      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;
      const context = canvas.getContext("2d");
      context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const code = jsQR(imageData.data, imageData.width, imageData.height);

      const qrStart = "http://neurotags.com";
      const qr1 = "http://en.m.wikipedia.org";
      const qr2 =
        "http://itunes.apple.com/us/app/encyclopaedia-britannica/id447919187?mt=8";
      const qr3 = "https://www.techopedia.com/";
      const qr4 =
        "http://searchmobilecomputing.techtarget.com/definition/2D-barcode";
      const qr5 =
        "https://www.investopedia.com/terms/q/quick-response-qr-code.asp";

      // const qr1 = '3110/1';
      // const qr2 = '3110/2';
      // const qr3 = '3110/3';
      // const qr4 = '3110/4';
      // const qr5 = '3110/5';

      const imageValues = [];
      if (apiData && apiData['0']) {
        apiData['0'].forEach((item) => {
          const key = item.key;
          const valueWithoutExtension = key.split('.')[0];
          imageValues.push(valueWithoutExtension);
        });
      }
      // console.log('Image Values:', imageValues);

      if (code) {
        setResult(code.data);
        const data = code.data;

        switch (true) {
          case data === imageValues[0] && props.pageNo === "1":
            setCurrentImage(imageMap["1"]);
            setTimeout(() => {
              setTimeout(() => {
                navigate("/levelmap2");
                localStorage.setItem('level-cleared', '1')
                setTimeout(() => {
                  setCurrentImage(null);
                  navigate("/begin-2");
                }, 4000);
              }, 0);
            }, 3000);
            break;

          case data === imageValues[1] && props.pageNo === "2":
            setCurrentImage(imageMap["2"]);
            setTimeout(() => {
              setTimeout(() => {
                navigate("/levelmap3");
                localStorage.setItem('level-cleared', '2')
                setTimeout(() => {
                  setCurrentImage(null);
                  navigate("/begin-3");
                }, 4000);
              }, 0);
            }, 3000);
            break;

          case data === imageValues[2] && props.pageNo === "3":
            setCurrentImage(imageMap["3"]);
            setTimeout(() => {
              setTimeout(() => {
                navigate("/levelmap4");
                localStorage.setItem('level-cleared', '3')
                setTimeout(() => {
                  setCurrentImage(null);
                  navigate("/begin-4");
                }, 4000);
              }, 0);
            }, 3000);
            break;

          case data === imageValues[3] && props.pageNo === "4":
            setCurrentImage(imageMap["4"]);
            setTimeout(() => {
              setTimeout(() => {
                navigate("/levelmap5");
                localStorage.setItem('level-cleared', '4')
                setTimeout(() => {
                  setCurrentImage(null);
                  navigate("/begin-5");
                }, 4000);
              }, 0);
            }, 3000);
            break;

          case data === imageValues[4] && props.pageNo === "5":
            setCurrentImage(imageMap["5"]);
            setTimeout(() => {
              navigate("/winner");
              localStorage.setItem('level-cleared', '5')
            }, 3000);
            break;

          default:
            break;
        }
      }
    }

    const handleError = (err) => {
      console.error(err);
    };
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    const scannerBarElement = scannerBarRef.current;
    let scannerBarPosition = 0;
    const scannerBarSpeed = 40;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: "environment" } })
        .then((stream) => {
          videoElement.srcObject = stream;
          videoElement.play();
        })
        .catch((error) => {
          console.error("Error accessing the camera:", error);
        });
    }
    const intervalId = setInterval(() => {
      handleScan();
      scannerBarPosition += scannerBarSpeed;
      if (scannerBarPosition > videoElement.videoHeight) {
        scannerBarPosition = 0;
      }
      if (scannerBarElement) {
        scannerBarElement.style.transform = `translateY(${scannerBarPosition}px)`;
      }
    }, 100);
    return () => {
      if (videoElement.srcObject) {
        videoElement.srcObject.getTracks().forEach((track) => track.stop());
      }
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="scanner-container">
      <div className="video-container">
        <div className="square">
          <div className="horizontal-line top-left"></div>
          <div className="horizontal-line bottom-left"></div>
          <div className="horizontal-line top-right"></div>
          <div className="horizontal-line bottom-right"></div>
          <div className="vertical-line top-left"></div>
          <div className="vertical-line bottom-left"></div>
          <div className="vertical-line top-right"></div>
          <div className="vertical-line bottom-right"></div>
        </div>
        <div className="video-mask">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="video-preview"
          />
        </div>
      </div>
      <div className="camera-mask" />
      <div className="scanner-bar" ref={scannerBarRef} />

      <div className="charater-container3">
        {currentImage && (
          <img src={currentImage} alt="Verification Successful" />
        )}
      </div>
      {/* <p>{result}</p> */}
    </div>
  );
}
export default QRScanner;






