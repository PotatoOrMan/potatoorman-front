import "./css/gaugebar.css";

export default function Gaugebar({roundIdx, potatoIdx}) {
    return <div className="gaugebarContainer">
        <div className='gaugebar'>
            <input type="checkbox" className="testinput"/>
            <div className="innerGaugebar"></div>
        </div>
        <div className="imgContainer">
            <img src={`../images/play_potatos/play_potato${roundIdx}.png`} alt='gaugePotatoImg'/>
            <img src={`../images/play_potatos/play_potato${roundIdx + 1}.png`} alt='gaugePotatoImg'/>
        </div>
    </div>
}