import Story from "./story";
import { useLocation } from "react-router-dom"

export default function Storymanager() {
    const propsNum = useLocation();
    console.log(propsNum.state.propsNum)

    //사람 이미지도 props로 전달하기
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
    const resultImgURL1 = null
        
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
    const resultImgURL2 = "../images/men/handsome.png"

    const storyData3 = {
    text: ["어! 저를 구해주셨군요!", "저는 김땡땡이라고 합니다", "새벽까지 공부하다가 간식으로 감자를 먹었는데...", "감자가 돼버렸어요!", "어쨌든 구해주셔서 감사해요! 복 받으실거에요!"],
    bgImg: [
        "../images/backgrounds/end_background1.png",
        "../images/backgrounds/end_background1.png",
        "../images/backgrounds/end_background1.png",
        "../images/backgrounds/end_background1.png",
        "../images/backgrounds/end_background1.png"
    ]}; 
    const person3 = "김땡땡"
    const limit3 = 4
    const navigateURL3 = ""
    const resultImgURL3 = "../images/men/student.png"

    const storyData4 = {
    text: ["어! 저를 구해주셨군요!", "저는 김땡땡이라고 합니다", "새벽까지 공부하다가 간식으로 감자를 먹었는데...", "감자가 돼버렸어요!", "어쨌든 구해주셔서 감사해요! 복 받으실거에요!"],
    bgImg: [
        "../images/backgrounds/end_background1.png",
        "../images/backgrounds/end_background1.png",
        "../images/backgrounds/end_background1.png",
        "../images/backgrounds/end_background1.png",
        "../images/backgrounds/end_background1.png"
    ]}; 
    const person4 = "김땡땡"
    const limit4 = 4
    const navigateURL4 = ""
    const resultImgURL4 = "../images/men/badboy.png"

    const storyData5 = {
    text: ["어! 저를 구해주셨군요!", "저는 김땡땡이라고 합니다", "새벽까지 공부하다가 간식으로 감자를 먹었는데...", "감자가 돼버렸어요!", "어쨌든 구해주셔서 감사해요! 복 받으실거에요!"],
    bgImg: [
        "../images/backgrounds/end_background1.png",
        "../images/backgrounds/end_background1.png",
        "../images/backgrounds/end_background1.png",
        "../images/backgrounds/end_background1.png",
        "../images/backgrounds/end_background1.png"
    ]}; 
    const person5 = "김땡땡"
    const limit5 = 4
    const navigateURL5 = ""
    const resultImgURL5 = "../images/men/nerd.png"

    const storyData6 = {
    text: ["(당신의 감자는 그렇게 평생 감자로 살았다....)"],
    bgImg: [
        "../images/backgrounds/play_background1.png"
    ]}; 
    const person6 = "감자"
    const limit6 = 0
    const navigateURL6 = "gallery"
    const resultImgURL6 = `../images/potatos/potato${propsNum.state.propsNum}_1.png`

    switch(propsNum.state.propsNum) {
        case 0 : return( <Story storyData={storyData1} person={person1} limit={limit1} navigateURL={navigateURL1} resultImgURL={resultImgURL1}/> )
        case 2 : return( <Story storyData={storyData2} person={person2} limit={limit2} navigateURL={navigateURL2} resultImgURL={resultImgURL2}/> )
        case 3 : return( <Story storyData={storyData3} person={person3} limit={limit3} navigateURL={navigateURL3} resultImgURL={resultImgURL3}/> )
        case 4 : return( <Story storyData={storyData4} person={person4} limit={limit4} navigateURL={navigateURL4} resultImgURL={resultImgURL4}/> )
        case 5 : return( <Story storyData={storyData5} person={person5} limit={limit5} navigateURL={navigateURL5} resultImgURL={resultImgURL5}/> )
        case 6 : return( <Story storyData={storyData6} person={person6} limit={limit6} navigateURL={navigateURL6} resultImgURL={resultImgURL6}/>)
        default : return null
    }

    // 배경이미지, person 등 넘겨주기
    // 조건에 맞게 story, resultStory 불러오기
}