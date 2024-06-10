import React, { useRef, useEffect } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1340,
  height: 770,
  facingMode: "user",
};

const WebcamCapture = ({ onCapture }) => {
  const webcamRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (webcamRef.current) {
        const imageSrc = webcamRef.current.getScreenshot();
        onCapture(imageSrc);
      }
    }, 10000); // 10초 후에 자동으로 사진을 찍음

    return () => clearTimeout(timer);
  }, [onCapture]);

  return (
    <Webcam
      audio={false}
      ref={webcamRef}
      width={1340}
      height={770}
      screenshotFormat="image/png"
      videoConstraints={videoConstraints}
      style={{transform: 'scaleX(-1)'}}
    />
  );
};

export default WebcamCapture;