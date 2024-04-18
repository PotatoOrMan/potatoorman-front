import { useState, useEffect } from "react";
import "./css/story.css";

function InfoBox() {
    return <div className="info-box">
        <img src="../images/ect/info_box.png" alt="infoBox" className="infoImg"/>
    </div>
}

export default function Story() {
    const [bgImg, setBgImg] = useState("../images/backgrounds/story_background1.png");
    
    useEffect(() => {
        document.body.style.backgroundImage = `url(${bgImg})`;
    }, [bgImg]);

    return (
        <div className="storyDiv">
            <InfoBox/>
        </div>
    )
}