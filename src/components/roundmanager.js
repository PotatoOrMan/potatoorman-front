import { useLocation } from 'react-router-dom';
import Round from "./round"

export default function RoundManager() {
    const location = useLocation();
    const index = location.state.index; //stroy에서 넘긴 index값 저장

    // 이미지, 감자인덱스 매개변수로 넘기기, 필요없을 수도 있는 컴포넌트, round에서 관리할 수 있는지 생각해보기
    switch(index) {
        case 1: return <Round />
        case 2: return <Round />
        case 3: return <Round />
        case 4: return <Round />
        case 5: return <Round />
    }
}