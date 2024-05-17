import { useState, useEffect, useCallback } from "react";
import "./css/gaugebar.css";

export default function Gaugebar({roundIdx, potatoIdx}) {
    const [gaugeWidth, setGaugeWidth] = useState(114)
    const gaugebarColor = ['F7F6BB', 'FFE23A', '9ADA28', '149710']

    const handleKeyUp = useCallback((event) => {
        if (event.code === 'Space') {
            setGaugeWidth((prevWidth) => {
                if (prevWidth < 1314) {
                    return prevWidth + 20;
                }
                return prevWidth; // 1314px 이상일 경우 더 이상 증가하지 않음
            });
        }
    }, []);

    useEffect(() => {
        // gaugeWidth 업데이트 코드
        setGaugeWidth(114); // roundIdx가 변경될 때마다 gaugeWidth를 114로 초기화
    }, [roundIdx]);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);  // spacebar를 꾹 눌렀을 때 게이지가 차지 않도록 keydown 대신 keyup을 사용함
        return () => {
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [handleKeyUp]);
    

    return <div className="gaugebarContainer">
        <div className='gaugebar'>
            <div className="innerGaugebar" style={{width : `${gaugeWidth}px`, backgroundImage : `linear-gradient(to right, #${gaugebarColor[roundIdx - 1]}, #${gaugebarColor[roundIdx]})`}}></div>
        </div>
        <div className="imgContainer">
            <img src={`../images/play_potatos/play_potato${roundIdx}.png`} alt='gaugePotatoImg'/>
            <img src={`../images/play_potatos/play_potato${roundIdx + 1}.png`} alt='gaugePotatoImg'/>
        </div>
    </div>
}