import { useEffect, useState } from "react";
import "./css/resultPlayview2.css";
import { useNavigate, useLocation } from "react-router-dom";

function ResultScreen({gauge1, gauge2, gauge3, finalGauge}) {
    // 게이지 관련 변수
    const gaugeStyles = [
        { width: gauge1, backgroundImage: "linear-gradient(to right, #F7F6BB, #FFE23A)" },
        { width: gauge2, backgroundImage: "linear-gradient(to right, #FFE23A, #9ADA28)" },
        { width: gauge3, backgroundImage: "linear-gradient(to right, #9ADA28, #149710)" },
    ]

    return (
        <>
        <div className="gaugeResultContainer">
            {/* 게이지바 3개를 map으로 출력 */}
                {gaugeStyles.map((style, index) => (
                    <div key={index} className="gaugebar">
                        <div className="innerGaugebar" style={style}>
                            <img src={`../images/play_potatos/play_potato${index + 2}.png`} alt='gaugePotatoImg'/>
                        </div>
                    </div>
                ))}
            </div>
        <img src="../images/ect/end_mark.png" className="endMark" alt="endmark"/>
        <div className="finalGaugebar">
            <div className="finalInnerGaugebar" style={{width : finalGauge}}>
                <img src={"../images/play_potatos/play_potato2.png"} alt='gaugePotatoImg'/>
            </div>
        </div>
        </>
    )
}

export default function ResultPlayview2() {
    const navigate = useNavigate()
    const location = useLocation()
    const success = 0
    const [smoke, setSmoke] = useState(false)
    // 게이지바 길이를 useState 배열에 저장
    const [gauges, setGauges] = useState({
        gauge1: "85px",
        gauge2: "85px",
        gauge3: "85px",
        finalGauge: "100px"
    });
    
    // 5초 동안 결과를 보여주기 -> 연기 효과 나오면서 결과 스토리 화면으로 이동
    useEffect(() => {
        document.body.style.backgroundImage = "url(../images/backgrounds/play_background1.png)";
        
        // setTimeout을 한 번에 묶어서 사용
        const timeouts = [
            setTimeout(() => setGauges(gauges => ({ ...gauges, gauge1: "800px" })), 1000),
            setTimeout(() => setGauges(gauges => ({ ...gauges, gauge2: "500px" })), 2000),
            setTimeout(() => setGauges(gauges => ({ ...gauges, gauge3: "700px" })), 3000),
            setTimeout(() => setGauges(gauges => ({ ...gauges, finalGauge: "900px" })), 4000),
            setTimeout(() => setSmoke(true), 5000),
            // 결과창 보여주는것과 연기 gif가 나타나는 시간을 합친 것
            setTimeout(() => {
                navigate('/storymanager', { state: { propsNum: location.state.propsNum, success: success } });
            }, 6200)
        ];

        return () => timeouts.forEach(timeout => clearTimeout(timeout));
    }, [navigate, location.state]);

    return ( 
        smoke ?
        <img src="../images/smokeGIF.gif" alt="smokeGIF" style={{width : '100%', height : 'auto'}}/> 
        :
        <ResultScreen gauge1={gauges.gauge1} gauge2={gauges.gauge2} gauge3={gauges.gauge3} finalGauge={gauges.finalGauge}/>
    )
}