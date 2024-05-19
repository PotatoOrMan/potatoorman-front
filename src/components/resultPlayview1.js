import { useEffect } from "react";
import "./css/resultPlayview1.css";

export default function ResultPlayview1({potatoIdx}) {
    useEffect(() => {
        document.body.style.backgroundImage = "url(../images/backgrounds/play_background3.png)"
    }, [])

    return <div className='resultDiv'>
        <img src={`../images/potatos/potato${potatoIdx}_3.png`} className='resultPotato' alt='resultPotatoImg'/>
    </div>;
}