import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import "./css/round.css";

function PlayView({index, potatoImg}){
    if(index !== 3) {
        return <div className='playDiv'>
            <div className='gaugebar'>
                <img src={`../images/play_potatos/play_potato${index+1}.png`}/>
                <img src={`../images/play_potatos/play_potato${index+2}.png`}/>
            </div>
            <p className='time'>10</p>
            <img src={`${potatoImg}`} className='mainPotatoImg'/>
        </div>;
    }
}

export default function Round() {
    const location = useLocation(); // Link로 props값 받아오기
    const index = location.state.index;
    const playData = {
        bgImg : ["../images/backgrounds/play_background1.png", "../images/backgrounds/play_background2.png", "../images/backgrounds/play_background3.png", "../images/backgrounds/play_background3.png"],
        potatoImg : [`../images/potatos/potato${index}_1.png`, `../images/potatos/potato${index}_1.png`, `../images/potatos/potato${index}_2.png`,`../images/potatos/potato${index}_3.png`]
    }
    const [playIdx, setPlayIdx] = useState(0);

    const bgImg = playData.bgImg[playIdx];
    const potatoImg = playData.potatoImg[playIdx];

    useEffect(() => {
        document.body.style.backgroundImage = `url(${bgImg})`;
    }, [bgImg]);
    
    return <>
        <PlayView index={playIdx} potatoImg={potatoImg}/>
    </>;
}