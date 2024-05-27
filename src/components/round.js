import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import "./css/round.css";
import "./css/roundmodal.css"
import Gaugebar from './gaugebar';
import PlayView from './playview';
import ResultPlayView1 from './resultPlayview1'

export default function Round() {
    const location = useLocation()
    const index = location.state.index   //choice에서 넘긴 index값 저장
    const [roundIdx, setRoundIdx] = useState(1)
    const [showModal, setShowModal] = useState(true)

    useEffect(() => {
        document.body.style.backgroundImage = `url(../images/backgrounds/play_background${roundIdx}.png)`;
    }, [roundIdx]);

    useEffect(() => {
        const roundTime = setTimeout(() => {
            if(roundIdx < 4) setRoundIdx(idx => idx + 1)
        }, 11000)
        return () => clearTimeout(roundTime)
    }, [roundIdx])

    useEffect(() => {
        const handleKeyDwon = (e) => {
            // 스페이스바를 누르면 모달창이 사라지기
            if(e.key === ' ' || e.key === 'Space') setShowModal(false)
        } 
        document.addEventListener('keydown', handleKeyDwon)

        return () => document.removeEventListener('keydown', handleKeyDwon)
    }, [])
    

    return (
        showModal ? 
        <div className='roundmodalContainer'>
            <div className='roundmodal'>
                <text className='modalText'>스페이스바로<br></br>감자를 키워주세요!</text>
                <div className='keysContainer'>
                    <div className='spacebar'>space</div>
                    <div className='fourKeys'>
                        {/* style에서 조건 체크해서 라운드마다 배경색 달라지게, 순서 배열에 넣기 */}
                        <div className='keyItem upKey' style={{backgroundColor: 'red'}}>↑</div>
                        <div className='arrowKeys'>
                            <div className='keyItem leftKey' style={{backgroundColor: 'blue'}}>←</div>
                            <div className='keyItem downKey'>↓</div>
                            <div className='keyItem rightKey'>→</div>
                        </div>
                    </div>
                </div>
            </div>
        </div> :
        roundIdx === 4 ? 
        <ResultPlayView1  potatoIdx={index}/> :  // 결과 화면
        // 라운드 화면
        <div className='playDiv'>  
        <Gaugebar roundIdx={roundIdx} potatoIdx={index}/>
        <PlayView roundIdx={roundIdx} potatoIdx={index}/>
        </div>
    )
}

