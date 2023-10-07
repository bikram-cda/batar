import React, { useEffect, useRef, useState } from 'react';
import { MindARThree } from 'mind-ar/dist/mindar-image-three.prod.js';
import * as THREE from 'three';
import './IMGScanner.css';
import { useNavigate } from 'react-router-dom';

const MindARComponent = (props) => {
  const containerRef = useRef(null);

  const [currentImage, setCurrentImage] = useState(null);
  const [currentTextImage, setCurrentTextImage] = useState(null);

  const navigate = useNavigate();

  const apiData = props.apiData;
  const girlImage = apiData ? apiData['17'].find((image) => image.key === 'Girl Image.png') : null;
  const boyImage = apiData ? apiData['17'].find((image) => image.key === 'Boy Image.png') : null;


  const textPromtAfterSuccessfulScan1 = apiData ? apiData['18'].find((image) => image.key === 'Text Promt After Successful Scan 1.png') : null;
  const textPromtAfterSuccessfulScan2 = apiData ? apiData['18'].find((image) => image.key === 'Text Promt After Successful Scan 2.png') : null;
  const textPromtAfterSuccessfulScan3 = apiData ? apiData['18'].find((image) => image.key === 'Text Promt After Successful Scan 3.png') : null;
  const textPromtAfterSuccessfulScan4 = apiData ? apiData['18'].find((image) => image.key === 'Text Promt After Successful Scan 4.png') : null;
  const textPromtAfterSuccessfulScan5 = apiData ? apiData['18'].find((image) => image.key === 'Text Promt After Successful Scan 5.png') : null;


  const imageMap = {
    1: girlImage.value,
    2: boyImage.value,
    3: girlImage.value,
    4: boyImage.value,
    5: girlImage.value,
  };

  const textImageMap = {
    1: textPromtAfterSuccessfulScan1.value,
    2: textPromtAfterSuccessfulScan2.value,
    3: textPromtAfterSuccessfulScan3.value,
    4: textPromtAfterSuccessfulScan4.value,
    5: textPromtAfterSuccessfulScan5.value,
  };
  
  
  const pages = props.pageNo;
const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('https://skillmuni.in:8080/allsignedurls/99255/imagescan')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('There was an error fetching the API!', error);
      });
  }, []);

  const imageUrls = [];
  if (data && data['0']) {
    data['0'].forEach((item) => {
      const url = item.value;
      imageUrls.push(url);
    });
  }

  const imageTargets = [
      { page: "1", imageUrl: imageUrls[1] },
      { page: "2", imageUrl: imageUrls[3] },
      { page: "3", imageUrl: imageUrls[5] },
      { page: "4", imageUrl: imageUrls[7] },
      { page: "5", imageUrl: imageUrls[9] },
    ];

  const initializeMindAR = (imageTargetSrc) => {
    
    const mindarThree = new MindARThree({
      container: containerRef.current,
      imageTargetSrc: imageTargetSrc,
      uiScanning: 'no'      
    });
    const { renderer, scene, camera } = mindarThree;
    const anchor = mindarThree.addAnchor(0);
    anchor.onTargetFound = () => {

      handleNavigation(pages);
    }

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('https://cdn.glitch.global/94fdf1ba-415a-4780-93b7-aeb171b0a962/banner.png?v=1695800216998', (texture) => {
    texture.minFilter = THREE.LinearFilter;
    const geometry = new THREE.PlaneGeometry(1, 0.55);
    const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.5
    });
    const plane = new THREE.Mesh(geometry, material);
    });
    mindarThree.start();
    renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
    });
    return () => {
      renderer.setAnimationLoop(null);
      mindarThree.stop();
    }
  };

  const handleNavigation = (page) => {
    switch (page) {
      case "1":
        setCurrentTextImage(textImageMap["1"]);
        setTimeout(() => {
        setCurrentImage(imageMap["1"]);
        setTimeout(() => {
          navigate("/levelmap2");
          localStorage.setItem('level-cleared', '1');
          setTimeout(() => {
            setCurrentImage(null);
            navigate("/begin-2");
          }, 4000);
        }, 3000);
      }, 4000);
        break;

        case "2":
          setCurrentTextImage(textImageMap["2"]);
        setTimeout(() => {
        setCurrentImage(imageMap["2"]);
        setTimeout(() => {
          navigate("/levelmap3");
          localStorage.setItem('level-cleared', '2');
          setTimeout(() => {
            setCurrentImage(null);
            navigate("/begin-3");
          }, 4000);
        }, 3000);
      }, 4000);
        break;

        case "3":
          setCurrentTextImage(textImageMap["3"]);
        setTimeout(() => {
        setCurrentImage(imageMap["3"]);
        setTimeout(() => {
          navigate("/levelmap4");
          localStorage.setItem('level-cleared', '4');
          setTimeout(() => {
            setCurrentImage(null);
            navigate("/begin-4");
          }, 4000);
        }, 3000);
      }, 4000);
        break;

        case "4":
          setCurrentTextImage(textImageMap["4"]);
        setTimeout(() => {
        setCurrentImage(imageMap["4"]);
        setTimeout(() => {
          navigate("/levelmap5");
          localStorage.setItem('level-cleared', '4');
          setTimeout(() => {
            setCurrentImage(null);
            navigate("/begin-5");
          }, 4000);
        }, 3000);
      }, 4000);
        break;

        case "5":
          setCurrentTextImage(textImageMap["5"]);
        setTimeout(() => {
            setCurrentImage(imageMap["5"]);
            setTimeout(() => {
              navigate("/winner");
              localStorage.setItem('level-cleared', '5')
            }, 3000);
          }, 4000);
            break;
            
      default:
        break;
    }
  };


  useEffect(() => {
    const currentPage = pages;
    const matchingTarget = imageTargets.find(target => target.page === currentPage);
    if (matchingTarget && matchingTarget.imageUrl) {
      // console.log('Initializing MindAR for currentImage:', currentImage);
      initializeMindAR(matchingTarget.imageUrl);
    }
  }, [pages, imageTargets]);

  return (
    <div className='container'>
        <div style={{ width: "100%", height: "100%" }} ref={containerRef}>
        </div>
        { !currentImage ? <div className="charater-container4">
        {currentTextImage && (
          <img src={currentTextImage} alt="Verification Successful" />
        )}
      </div> : null }
        <div className="charater-container3">
        {currentImage && (
          <img src={currentImage} alt="Verification Successful" />
        )}
      </div>
    </div>
    
  )
}

export default MindARComponent;