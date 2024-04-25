import { useLocation } from 'react-router-dom';

export default function RoundManager() {
    const location = useLocation();
    const index = location.state.index; //stroy에서 넘긴 index값 저장

    return console.log(index);
}