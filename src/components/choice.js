import { useState, useEffect } from "react";
import "./css/choice.css";

function ChoicePotato(){
    return <div className="choicePotato">
        <img src="../images/potatos/potato1_1.png" className="potatoImg potato1"/>
        <img src="../images/potatos/potato2_1.png" className="potatoImg potato2"/>
        <img src="../images/potatos/potato3_1.png" className="potatoImg potato3"/>
        <img src="../images/potatos/potato4_1.png" className="potatoImg potato4"/>
        <img src="../images/potatos/potato5_1.png" className="potatoImg potato5"/>
    </div>
}

export default function Choice() {
    useEffect(() => {
        document.body.style.backgroundImage = `url("../images/backgrounds/choice_background.png")`;
    }, []);
    

    return <div className="choiceDiv">
        <div className="choiceText">당신의 감자를 선택하세요</div>
        <ChoicePotato/>
    </div>
}