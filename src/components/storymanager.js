import Story from "./story";

export default function Storymanager() {
    // const storyData = {
    // text: ["어! 저를 구해주셨군요!", "저는 김땡땡이라고 합니다", "새벽까지 공부하다가 간식으로 감자를 먹었는데...", "감자가 돼버렸어요!", "어쨌든 구해주셔서 감사해요! 복 받으실거에요!"],
    // bgImg: [
    //     "../images/backgrounds/end_background1.png",
    //     "../images/backgrounds/end_background1.png",
    //     "../images/backgrounds/end_background1.png",
    //     "../images/backgrounds/end_background1.png",
    //     "../images/backgrounds/end_background1.png"
    // ]}; 
    // const person = "김땡땡"
    // const limit = 4
    // const navigateURL = ""
    
    const storyData={
    text: ["아 역시 할 것도 없고 심심하네...", "어? 저게 할머니 감자밭인가?", "음? 뭐지?"],
    bgImg: [
            "../images/backgrounds/story_background1.png",
            "../images/backgrounds/story_background2.png",
            "../images/backgrounds/story_background3.png"
    ]}; 
    const person = "나"
    const limit = 2
    const navigateURL = "choice"
            
    // const storyData = {
    // text: ["(당신의 감자는 그렇게 평생 감자로 살았다....)"],
    // bgImg: [
    //     "../images/backgrounds/play_background1.png"
    // ]}; 
    // const person = "감자"
    // const limit = 0
    // const navigateURL = "gallery"

    return (
        <Story storyData={storyData} person={person} limit={limit} navigateURL={navigateURL}/>
    )

    // 배경이미지, person 등 넘겨주기
    // 조건에 맞게 story, resultStory 불러오기
}