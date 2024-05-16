import { useEffect, useState } from "react";
import "./css/playview.css";

export default function PlayView({roundIdx, potatoIdx}) {
    const [time, setTime] = useState(2)

    useEffect(() => {
        if(time > 0) {  // 타이머가 무한반복 하지 않도록
            const timeId = setTimeout(() => {
                setTime(prevTime => prevTime - 1)
            },1000)
            return () => clearTimeout(timeId)
        }
    }, [time])

    useEffect(() => {
        setTime(5)
    }, [roundIdx])

    return <>     
        <p className='time'>{time}</p>
        <img src={`../images/potatos/potato${potatoIdx}_${roundIdx}.png`} className='mainPotatoImg' alt='playPotatoImg'/>
    </>

}