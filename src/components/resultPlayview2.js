import { useEffect } from "react";
import "./css/resultPlayview2.css";

export default function ResultPlayview2() {
    useEffect(() => {
        document.body.style.backgroundImage = "url(../images/backgrounds/play_background1.png)"
    }, [])

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
            <div className="finalGaugebar">
                <div className="finalInnerGaugebar">
                    <img src={`../images/play_potatos/play_potato2.png`} alt='gaugePotatoImg'/>
                </div>
            </div>
        </>
    )
}