import React, { useState, useEffect } from "react";
import "./Timer.css";
import { useNavigate } from "react-router-dom";

export function Timer(props) {
  
  const savedTimeLeft = localStorage.getItem("timerValue");
  const initialTimeLeft = savedTimeLeft ? parseInt(savedTimeLeft, 10) :600;

  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  

  useEffect(() => {
    setIsActive(true);
  }, [])
  
  const formatTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min}:${sec < 10 ? `0${sec}` : sec}`;
  };

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  useEffect(() => {
    let interval;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
     
    } else if (timeLeft === 0) {
      stopTimer();
      switch (props.pageNo) {
        case "1":
         navigate("/timeup1")
          break;
        case "2":
          navigate("/timeup2");
          break;
        case "3":
          navigate("/timeup3")
          break;
        case "4":
          navigate("/timeup4")
          break;
        // case "5":
        //   navigate("/winner");
        //   break;
        default:
          break;
      }      
    }

    localStorage.setItem("timerValue", timeLeft.toString());

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const apiData = props.apiData;
  const clockImage = apiData ? apiData['17'].find((image) => image.key === 'Clock Image.png') : null;

  return (
    <div>
      <div className="clock-container">
        {clockImage && (
            <img
              src={clockImage.value}
              alt={clockImage.key}
              className="clock-image"
            />
          )}
          
        <span className="clock-text">{formatTime(timeLeft)}</span>
      </div>
      <div>
      </div>
    </div>
  );
}
