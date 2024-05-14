import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import "./css/story.css";

function InfoBox({ text, changeIndex }) {

    return (
        <>
            <div className="person-text">나</div>
            <div className="text-box">
                <Typewriter 
                    options={{
                        strings: text,
                        autoStart: true,
                        loop: false,
                      }}
                />  
            </div>
            <i className="bi bi-caret-right-fill" onClick={() => {
                    changeIndex();
            }}></i>
        </>
    );
}

export default function Story() {
    // 배경과 대사가 들어있는 storyData 객체
    const storyData = {
        text: ["아 역시 할 것도 없고 심심하네...", "어? 저게 할머니 감자밭인가?", "음? 뭐지?"],
        bgImg: [
            "../images/backgrounds/story_background1.png",
            "../images/backgrounds/story_background2.png",
            "../images/backgrounds/story_background3.png"
        ]
    };    
    const [index, setIndex] = useState(0);
    const navigate = useNavigate(); // 화면 바꿀 때 사용

    const changeIndex = () => {
        if (index !== 2) {
            setIndex(index + 1);
        } else {
            navigate('/choice') // choice 화면으로 이동
        }
    };

    const bgImg = storyData.bgImg[index];
    const text = storyData.text[index];

    useEffect(() => {
        document.body.style.backgroundImage = `url(${bgImg})`;
    }, [bgImg]);

    return (
        <div className="storyDiv">
            <InfoBox text={text} changeIndex={changeIndex}/>
        </div>
    );
}
