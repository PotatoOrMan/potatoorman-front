import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import "./css/round.css";

function GaugeBar({index}) {
    return <div className='gaugebar'>
        <img src={`../images/play_potatos/play_potato${index+1}.png`} alt='gaugePotatoImg'/>
        <img src={`../images/play_potatos/play_potato${index+2}.png`} alt='gaugePotatoImg'/>
    </div>
}

function PlayView({index, potatoImg}){
    if(index !== 3) {
        return <div className='playDiv'>
            <GaugeBar index={index}/>
            <p className='time'>10</p>
            <img src={`${potatoImg}`} className='mainPotatoImg' alt='playPotatoImg'/>
        </div>;
    }
    else if(index ===3) {
        return <div className='resultDiv'>
        <img src={`${potatoImg}`} className='resultPotato' alt='playPotatoImg'/>
    </div>;
    }
}

export default function Round() {
    const location = useLocation(); // Link로 props값 받아오기
    const index = location.state.index; //stroy에서 넘긴 index값 저장
    const playData = {
        bgImg : ["../images/backgrounds/play_background1.png", "../images/backgrounds/play_background2.png", "../images/backgrounds/play_background3.png", "../images/backgrounds/play_background3.png"],
        potatoImg : [`../images/potatos/potato${index}_1.png`, `../images/potatos/potato${index}_1.png`, `../images/potatos/potato${index}_2.png`,`../images/potatos/potato${index}_3.png`]
    }
    const [playIdx, setPlayIdx] = useState(0);
    const [time, setTime] = useState(10);

    const bgImg = playData.bgImg[playIdx];
    const potatoImg = playData.potatoImg[playIdx];

    useEffect(() => {
        document.body.style.backgroundImage = `url(${bgImg})`;

        const timeoutId = setTimeout(() => {
            if (playIdx !== 3) {
                setPlayIdx((prevIdx) => prevIdx + 1);
            }
        }, 10000);

        return () => clearTimeout(timeoutId);
    }, [playIdx, bgImg]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (time > 0) {
                setTime((prevTime) => prevTime - 1);
            }
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, [time]);
    
    return <>
        <PlayView index={playIdx} potatoImg={potatoImg} time={time}/>
    </>;
}