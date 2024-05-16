import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import "./css/round.css";
import Gaugebar from './gaugebar';
import PlayView from './playview';

// 게이지바, 타이머, 감자를 각각 다른 컴포넌트에 정의하여 불러오기
// 여기에서 감자인덱스와 라운드 인덱스를 받아서 컴포넌트 관리하기

export default function Round() {
    const location = useLocation()
    const index = location.state.index   //stroy에서 넘긴 index값 저장
    const [roundIdx, setRoundIdx] = useState(1)

    useEffect(() => {
        document.body.style.backgroundImage = `url("../images/backgrounds/play_background${roundIdx}.png")`;
    }, [roundIdx]);

    useEffect(() => {
        const roundTime = setTimeout(() => {
            if(roundIdx < 3) setRoundIdx(idx => idx + 1)
        }, 6000)
        return () => clearTimeout(roundTime)
    }, [roundIdx])

    return (
        <div className='playDiv'>
        <Gaugebar roundIdx={roundIdx} potatoIdx={index}/>
        <PlayView roundIdx={roundIdx} potatoIdx={index}/>
        </div>
    )
}

