import Story from "./story";
import { useLocation } from "react-router-dom"

export default function Storymanager() {
    const propsNum = useLocation();

    const storyData1 = {
        text: ["아 역시 할 것도 없고 심심하네...", "어? 저게 할머니 감자밭인가?", "음? 뭐지?"],
        bgImg: [
            "../images/backgrounds/story_background1.png",
            "../images/backgrounds/story_background2.png",
            "../images/backgrounds/story_background3.png"
        ]}; 
    const person1 = "나"
    const limit1 = 2
    const navigateURL1 = "choice"
        
    const storyData2 = {
    text: ["어! 저를 구해주셨군요!", "저는 김땡땡이라고 합니다", "새벽까지 공부하다가 간식으로 감자를 먹었는데...", "감자가 돼버렸어요!", "어쨌든 구해주셔서 감사해요! 복 받으실거에요!"],
    bgImg: [
        "../images/backgrounds/end_background1.png",
        "../images/backgrounds/end_background1.png",
        "../images/backgrounds/end_background1.png",
        "../images/backgrounds/end_background1.png",
        "../images/backgrounds/end_background1.png"
    ]}; 
    const person2 = "김땡땡"
    const limit2 = 4
    const navigateURL2 = ""

    const storyData6 = {
    text: ["(당신의 감자는 그렇게 평생 감자로 살았다....)"],
    bgImg: [
        "../images/backgrounds/play_background1.png"
    ]}; 
    const person6 = "감자"
    const limit6 = 0
    const navigateURL6 = "gallery"

    switch(propsNum) {
        case 1 : return( <Story storyData={storyData1} person={person1} limit={limit1} navigateURL={navigateURL1}/> )
        case 2 : return( <Story storyData={storyData2} person={person2} limit={limit2} navigateURL={navigateURL2}/> )
        case 6 : return( <Story storyData={storyData6} person={person6} limit={limit6} navigateURL={navigateURL6}/>)
        default : return null
    }

    // 배경이미지, person 등 넘겨주기
    // 조건에 맞게 story, resultStory 불러오기
}