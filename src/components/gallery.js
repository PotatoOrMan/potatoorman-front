import "./css/reset.css";
import "./css/gallery.css";
import { useEffect } from 'react';

function TextView() {
    return (
        <div className="top-bar">
            <i className="bi bi-caret-left-fill"></i>
            <span className="gallery-text">갤러리</span>
            <i className="bi bi-caret-right-fill"></i>
        </div>
    )
}

function PhotoView() {
    return (
        <div className="photo-container">
            <div className="photo-item"></div>
            <div className="photo-item"></div>
            <div className="photo-item"></div>
            <div className="photo-item"></div>
            <div className="photo-item"></div>
            <div className="photo-item"></div>
            <div className="photo-item"></div>
            <div className="photo-item"></div>
            <div className="photo-item"></div>
            <div className="photo-item"></div>
            <div className="photo-item"></div>
            <div className="photo-item"></div>
        </div>
    )
}

export default function Gallery() {
    useEffect(() => {
        document.body.style.backgroundImage = `url("../images/backgrounds/play_background1.png")`;
    }, []);

    return <div className="photo-div">
    <TextView />
    <PhotoView />
    </div>
}