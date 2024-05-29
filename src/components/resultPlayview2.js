import { useEffect, useState } from "react";
import "./css/resultPlayview2.css";
import { useNavigate, useLocation } from "react-router-dom";

function ResultScreen() {
    return (
        <>
            <div className="gaugeResultContainer">
                <div className='gaugebar'>
                    <div className="innerGaugebar" style={{backgroundImage : "linear-gradient(to right, #F7F6BB, #FFE23A)"}}>
                        <img src={`../images/play_potatos/play_potato2.png`} alt='gaugePotatoImg'/>
                    </div>
                </div>
                <div className='gaugebar'>
                    <div className="innerGaugebar" style={{backgroundImage : "linear-gradient(to right, #FFE23A, #9ADA28)"}}>
                        <img src={`../images/play_potatos/play_potato3.png`} alt='gaugePotatoImg'/>
                    </div>
                </div>
                <div className='gaugebar'>
                    <div className="innerGaugebar" style={{backgroundImage : "linear-gradient(to right, #9ADA28, #149710)"}}>
                        <img src={`../images/play_potatos/play_potato4.png`} alt='gaugePotatoImg'/>
                    </div>
                </div>

            </div>
            <img src="../images/ect/end_mark.png" className="endMark" alt="endmark"/>
            <div className="finalGaugebar">
                <div className="finalInnerGaugebar">
                    <img src={"../images/play_potatos/play_potato2.png"} alt='gaugePotatoImg'/>
                </div>
            </div>
        </>
    )
}

export default function ResultPlayview2() {
    const navigate = useNavigate()
    const [smoke, setSmoke] = useState(false)
    const location = useLocation();

    useEffect(() => {
        document.body.style.backgroundImage = "url(../images/backgrounds/play_background1.png)"
    }, [])

    // 5초 동안 결과를 보여주기 -> 연기 효과 나오면서 결과 스토리 화면으로 이동
    useEffect(() => {
        const resultTimer = setTimeout(() => {
            setSmoke(true)
        }, 5000)
        return () => clearTimeout(resultTimer)
    }, [])

    useEffect(() => {
        const navigateTimer = setTimeout(() => {
            navigate('/storymanager', {state : {propsNum : location.state.propsNum}})
        }, 6200)
        return () => clearTimeout(navigateTimer)
    }, [navigate, location.state])
    
    return (
        smoke ?
        <img src="../images/smokeGIF.gif" alt="smokeGIF" style={{width : '100%', height : 'auto'}}/> 
        :
        <ResultScreen />
    )
}