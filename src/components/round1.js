import { useLocation } from 'react-router-dom';

export default function Round1() {
    const location = useLocation(); // Link로 props값 받아오기
    const index = location.state.index;
    
    return index;
}