import { useEffect } from "react";
import "./css/resultPlayview1.css";
import { useNavigate } from "react-router-dom";

export default function ResultPlayview1({potatoIdx}) {
    const navigate = useNavigate()

    useEffect(() => {
        document.body.style.backgroundImage = "url(../images/backgrounds/play_background3.png)"
    }, [])

    useEffect(() => {
        const resultplayviewTimer = setTimeout(() => {navigate("/resultPlayview2")}, 2000)
        return () => clearTimeout(resultplayviewTimer)
    }, [navigate])

    return <div className='resultDiv'>
        <img src={`../images/potatos/potato${potatoIdx}_3.png`} className='resultPotato' alt='resultPotatoImg'/>
    </div>;
}