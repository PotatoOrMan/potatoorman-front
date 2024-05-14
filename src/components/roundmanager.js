import { useLocation } from 'react-router-dom';
import Round from "./round"

export default function RoundManager() {
    const location = useLocation();
    const index = location.state.index; //stroy에서 넘긴 index값 저장

    const playData = {
    bgImg : ["../images/backgrounds/play_background1.png", "../images/backgrounds/play_background2.png", "../images/backgrounds/play_background3.png", "../images/backgrounds/play_background3.png"],
    potatoImg : [`../images/potatos/potato${index}_1.png`, `../images/potatos/potato${index}_1.png`, `../images/potatos/potato${index}_2.png`,`../images/potatos/potato${index}_3.png`]
    };
        

    // 이미지, 감자인덱스 매개변수로 넘기기, 필요없을 수도 있는 컴포넌트, round에서 관리할 수 있는지 생각해보기
    // 감자 인덱스와 라운드 인덱스 관리
    // setInterval로 10초마다 다른 라운드 호출, 라운드 인덱스 증가 
    switch(index) {
        case 1: return <Round bgImg={playData.bgImg[0]}/>
        case 2: return <Round />
        case 3: return <Round />
        case 4: return <Round />
        case 5: return <Round />
        default : <Round />
    }
}