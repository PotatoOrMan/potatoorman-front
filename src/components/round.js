import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import "./css/round.css";
import Gaugebar from './gaugebar';
import PlayView from './playview';
import ResultPlayView1 from './resultPlayview1'

export default function Round() {
    const location = useLocation()
    const index = location.state.index   //stroy에서 넘긴 index값 저장
    const [roundIdx, setRoundIdx] = useState(1)
    // const [updateGaugeWidth, setUpdateGaugeWidth] = useState([])

    useEffect(() => {
        document.body.style.backgroundImage = `url(../images/backgrounds/play_background${roundIdx}.png)`;
    }, [roundIdx]);

    useEffect(() => {
        const roundTime = setTimeout(() => {
            if(roundIdx < 4) setRoundIdx(idx => idx + 1)
        }, 11000)
        return () => clearTimeout(roundTime)
    }, [roundIdx])

    return (
        roundIdx === 4 ? 
        <ResultPlayView1  potatoIdx={index}/> :  // 결과 화면
        // 라운드 화면
        <div className='playDiv'>  
        <Gaugebar roundIdx={roundIdx} potatoIdx={index}/>
        <PlayView roundIdx={roundIdx} potatoIdx={index}/>
        </div>
    )
}

