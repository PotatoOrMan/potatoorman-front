import { useState, useEffect, useCallback } from "react";
import "./css/gaugebar.css";

export default function Gaugebar({ roundIdx }) {
    const [gaugeWidth, setGaugeWidth] = useState(114);
    const gaugebarColor = ['F7F6BB', 'FFE23A', '9ADA28', '149710'];
    const [keysPressed, setKeysPressed] = useState({}); // 두 개의 키 이벤트의 상태를 관리하는 상태
    const [comboTriggered, setComboTriggered] = useState(false); // 두 개의 키를 연속적으로 누를 때 게이지가 올라가지 않도록 막는 트리거
    
    const handleKeyDown = useCallback((event) => {
        setKeysPressed((prevKeys) => ({
            ...prevKeys,
            [event.code]: true,
        }));
    }, []);
    
    const handleKeyUp = useCallback((event) => {
        setKeysPressed((prevKeys) => ({
            ...prevKeys,
            [event.code]: false,
        }));
    }, []);
    
    useEffect(() => {
        const keyNames = ['ArrowUp', 'ArrowLeft', 'ArrowRight'];
        if (keysPressed['Space'] && keysPressed[keyNames[roundIdx-1]] && !comboTriggered) {
            setGaugeWidth((prevWidth) => {
                if (prevWidth < 1314) {
                    return prevWidth + 15;
                }
                return prevWidth; // 1314px 이상일 경우 더 이상 증가하지 않음
            });
            setComboTriggered(true);    // 연속적으로 누르는 것을 방지
        }
        
        if (!keysPressed['Space'] || !keysPressed[keyNames[roundIdx-1]]) {
            setComboTriggered(false);
        }
    }, [keysPressed, comboTriggered, roundIdx]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [handleKeyDown, handleKeyUp]);

    useEffect(() => {
        setGaugeWidth(114); // roundIdx가 변경될 때마다 gaugeWidth를 114로 초기화
    }, [roundIdx]);

    return (
        <div className="gaugebarContainer">
            <div className='gaugebar'>
                <div className="innerGaugebar" style={{ width: `${gaugeWidth}px`, backgroundImage: `linear-gradient(to right, #${gaugebarColor[roundIdx - 1]}, #${gaugebarColor[roundIdx]})` }}></div>
            </div>
            <div className="imgContainer">
                <img src={`../images/play_potatos/play_potato${roundIdx}.png`} alt='gaugePotatoImg' />
                <img src={`../images/play_potatos/play_potato${roundIdx + 1}.png`} alt='gaugePotatoImg' />
            </div>
        </div>
    );
}
