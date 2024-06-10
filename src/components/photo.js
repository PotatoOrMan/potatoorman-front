import React, { useEffect, useState } from "react";
import './css/photo.css';
import WebcamCapture from "./webcamCapture";

function PhotoModal() {
  return (
    <div className="photoModalContainer">
      <div className='photoModal'>
        <p className='modalText'>사진을 찍어주세요!</p>
        <div className='spacebar'>space</div>
      </div>
    </div>
  )
}

function CapturedImage({capturedImage}) {
  return(
    <>
        <div className="capturedImageContainer">
          <div className="captureImgBorder">
            <img src={capturedImage} alt="Captured" />
            <img src="../images/manframes/badboy_frame.png" className="Frame" alt="nerdFrmae"/>
            {/* <img src="../images/potatoframes/frame_potato3.png" className="Frame" alt="nerdFrmae"/> */}
          </div>
        </div>
        <div className="sendEmail">
            <p>사진을 전송하시겠습니까?</p>
            <input type='text' />
            <div className="buttonContainer">
              <button>아니요</button>
              <button>전송</button>
            </div>
          </div>
      </>
  )
}

function WebCam({setCapturedImage, time}) {
  return (
    <div className="webcamContainer">
      <div className="webcamBorder">
        <WebcamCapture onCapture={setCapturedImage} />
        <p className="timeText">{time<=5 && time}</p>
        <img src="../images/manframes/badboy_frame.png" className="Frame" alt="nerdFrmae"/>
        {/* <img src="../images/potatoframes/frame_potato3.png" className="Frame" alt="nerdFrmae"/> */}
      </div>
    </div>
  )
}

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

  useEffect(() => {
    // 이메일 전송 창 띄우기
  })

  return (
    showModal ? 
    <PhotoModal />
    :
<<<<<<< Updated upstream
    <>
      {capturedImage ? 
      <>
        <div className="capturedImageContainer">
          <div className="captureImgBorder">
            <img src={capturedImage} alt="Captured" />
            <img src="../images/frames/frame_2.png" className="Frame" alt="nerdFrmae"/>
          </div>
        </div>
        <div className="sendEmail">
            <p>사진을 전송하시겠습니까?</p>
            <input type='text' />
            <div className="buttonContainer">
              <button>아니요</button>
              <button>전송</button>
            </div>
          </div>
      </>
       : 
        <div className="webcamContainer">
          <div className="webcamBorder">
            <WebcamCapture onCapture={setCapturedImage} />
            <p className="timeText">{time<=5 && time}</p>
            <img src="../images/frames/frame_2.png" className="Frame" alt="nerdFrmae"/>
          </div>
        </div>
      }
    </>
=======
    capturedImage ?
    <CapturedImage capturedImage={capturedImage}/>
    : 
    <WebCam setCapturedImage={setCapturedImage} time={time}/>
>>>>>>> Stashed changes
  );
}
