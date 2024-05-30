import { useEffect, useState } from "react"
import './css/photo.css'

export default function Photo() {
    const [bgImg, setBgImg] = useState('../images/backgrounds/play_background1.png')
    useEffect(() => {
        document.body.style.backgroundImage = `url(${bgImg}})`;
    }, [bgImg])

    return (
        <div className='roundmodalContainer'>
            <text className='modalText'>사진을 찍어주세요!</text>
            <div className='spacebar'>space</div>
        </div>
    )
}