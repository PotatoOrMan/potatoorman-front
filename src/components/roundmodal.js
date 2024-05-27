import { useEffect } from 'react'
import './css/roundmodal.css'

export default function Roundmodal() {

    useEffect(() => {
        document.body.style.backgroundImage = "url(../images/backgrounds/play_background1.png)"
    }, [])

    return (
        <div className='roundmodalContainer'>
            <div className='roundmodal'>
                <text className='modalText'>스페이스바로<br></br>감자를 키워주세요!</text>
                <div className='keysContainer'>
                    <div className='spacebar'>space</div>
                    <div className='fourKeys'>
                            <div className='keyItem'>↑</div>
                            <div className='keyItem'>←</div>
                            <div className='keyItem'>↓</div>
                            <div className='keyItem'>→</div>
                    </div>
                </div>
            </div>
        </div>
    )
}