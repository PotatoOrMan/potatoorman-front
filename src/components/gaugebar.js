import { useState, useEffect, useCallback } from "react";
import "./css/gaugebar.css";

export default function Gaugebar({roundIdx, potatoIdx}) {
    const [gaugeWidth, setGaugeWidth] = useState(114)

    const handleKeyDown = useCallback((event) => {
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
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return <div className="gaugebarContainer">
        <div className='gaugebar'>
            <div className="innerGaugebar" style={{width : `${gaugeWidth}px`}}></div>
        </div>
        <div className="imgContainer">
            <img src={`../images/play_potatos/play_potato${roundIdx}.png`} alt='gaugePotatoImg'/>
            <img src={`../images/play_potatos/play_potato${roundIdx + 1}.png`} alt='gaugePotatoImg'/>
        </div>
    </div>
}