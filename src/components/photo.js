import React, { useEffect, useState } from "react";
import './css/photo.css';
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1340,
  height: 770,
  facingMode: "user",
};

const WebcamCapture = ({ onCapture }) => (
  <Webcam
    audio={false}
    screenshotFormat="image/png"
    videoConstraints={videoConstraints}
  >
    {({ getScreenshot }) => (
      <button
        onClick={() => {
          const imageSrc = getScreenshot();
          onCapture(imageSrc);
        }}
      >
        사진 찍기
      </button>
    )}
  </Webcam>
);

export default function Photo() {
    const [bgImg] = useState('url(../images/backgrounds/play_background1.png)')
    const [showModal, setShowModal] = useState(true)
    const [capturedImage, setCapturedImage] = useState(null);

    useEffect(() => {
        document.body.style.backgroundImage = bgImg;
    }, [bgImg])

    // spcae 누르면 모달창 사라지고 사진 찍을 수 있도록 설정
    useEffect(() => {
        const handleModal = (e) => {
            if(e.key === 'Space' || e.key === ' ') setShowModal(false)
        }
        document.addEventListener('keydown', handleModal)
        return () => document.removeEventListener('keydown', handleModal)
    }, [showModal])

    return (
        showModal ? 
        <div className="photoModalContainer">
          <div className='photoModal'>
            <p className='modalText'>사진을 찍어주세요!</p>
            <div className='spacebar'>space</div>
          </div>
        </div>
        :
        <>
          {capturedImage ? (
            <div className="capturedImageContainer">
              <img src={capturedImage} alt="Captured" />
            </div>
          ) : (
            <div className="webcamContainer">
              <WebcamCapture onCapture={setCapturedImage} />
            </div>
          )}
        </>
    );
}