import React, { useEffect, useState } from "react";
import './css/photo.css';
import WebcamCapture from "./webcamCapture";

export default function Photo() {
  const [bgImg, setBgImg] = useState('url(../images/backgrounds/play_background1.png)');
  const [showModal, setShowModal] = useState(true);
  const [capturedImage, setCapturedImage] = useState(null);
  const [time, setTime] = useState(10)

  useEffect(() => {
    document.body.style.backgroundImage = bgImg;
  }, [bgImg]);

  // space 누르면 모달창 사라지고 사진 찍을 수 있도록 설정
  useEffect(() => {
    const handleModal = (e) => {
      if (e.key === ' ' || e.key === 'Space') {
        setShowModal(false);
        setBgImg('url(../images/backgrounds/home_background.png)')
      }
    };
    document.addEventListener('keydown', handleModal);
    return () => document.removeEventListener('keydown', handleModal);
  }, []);

  useEffect(() => {
    if(time > 1 && showModal === false) {  // 타이머가 무한반복 하지 않도록
        const timeId = setTimeout(() => {
            setTime(prevTime => prevTime - 1)
        },1000)
        return () => clearTimeout(timeId)
    }
  }, [time, showModal])

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
          <div className="webcamBorder">
            <WebcamCapture onCapture={setCapturedImage} />
            <p className="timeText">{time<=5 && time}</p>
          </div>
        </div>
      )}
    </>
  );
}
