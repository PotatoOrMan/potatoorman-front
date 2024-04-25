import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import "./css/round.css";

function GaugeBar({index}) {
    return <div className='gaugebar'>
        <img src={`../images/play_potatos/play_potato${index+1}.png`} alt='gaugePotatoImg'/>
        <img src={`../images/play_potatos/play_potato${index+2}.png`} alt='gaugePotatoImg'/>
    </div>
}
function MainPlayView({potatoImg, time}) {
    let color = 'black';
    if(time <= 6 && time >= 4) color='#7C0000';
    else if(time <= 3) color='#FF0000';
    return <>     
        <p className='time' style={{color:color}}>{time}</p>
        <img src={`${potatoImg}`} className='mainPotatoImg' alt='playPotatoImg'/>
    </>
}
function ResultPlayView({potatoImg}) {
    return <div className='resultDiv'>
        <img src={`${potatoImg}`} className='resultPotato' alt='playPotatoImg'/>
    </div>;
}
function PlayView({index, potatoImg, time}){
    if(index !== 3) {
        return <div className='playDiv'>
            <GaugeBar index={index}/>
            <MainPlayView potatoImg={potatoImg} time={time}/>
        </div>;
    }
    else if(index ===3) {
        return <ResultPlayView potatoImg={potatoImg} />
    }
}

export default function Round() {   
    const location = useLocation(); // Link로 props값 받아오기
    const index = location.state.index; //stroy에서 넘긴 index값 저장
    const playData = {
        bgImg : ["../images/backgrounds/play_background1.png", "../images/backgrounds/play_background2.png", "../images/backgrounds/play_background3.png", "../images/backgrounds/play_background3.png"],
        potatoImg : [`../images/potatos/potato${index}_1.png`, `../images/potatos/potato${index}_1.png`, `../images/potatos/potato${index}_2.png`,`../images/potatos/potato${index}_3.png`]
        };
    const [playIdx, setPlayIdx] = useState(0);
    const [time, setTime] = useState(10);

    const bgImg = playData.bgImg[playIdx];
    const potatoImg = playData.potatoImg[playIdx];

    // 배경이미지와 playIdx를 바꾸는 useEffect 함수
    useEffect(() => {
        document.body.style.backgroundImage = `url(${bgImg})`;
        const timeoutId = setTimeout(() => {
            if (playIdx !== 3) setPlayIdx((prevIdx) => prevIdx + 1);
        }, 11000);
        return () => clearTimeout(timeoutId);
    }, [playIdx, bgImg]);
    // time을 설정하는 useEffect 함수
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (time > 0) setTime((prevTime) => prevTime - 1);
            else setTime(10); // 한 라운드가 끝나면 time을 5로 초기화시켜줌
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, [time]);

    return <>
    <PlayView index={playIdx} potatoImg={potatoImg} time={time}/>
    </>;
}

// root 컴포넌트가 이미지를 props로 주고, 라운드들을 관리하도록 만들기
// root
// round1, round2, round3
// gaugebar, playview
// 더 추가해야 하는 것 : 타이머 숫자 색깔, 스페이스바 누르는 기능, 값 저장하기, 게이지바 길이 조정하기, 각 라운드 시작전 팝업화면 띄우기