import { Link } from 'react-router-dom';
import "./css/reset.css";
import "./css/home.css";

export default function Home() {
    return <div className="backgroundDiv">
        <img src="../images/ect/logo.png" alt="logo" className="logoImg"/>
        <Link to="/story"><p className="startPlay">- 게임시작 -</p></Link>
        <Link to="/gallery"><p className="gallery">갤러리</p></Link>
    </div>
}