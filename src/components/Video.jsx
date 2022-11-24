import React from 'react';
import VideoBg from '../video/video1.mp4';
import '../stylesheet/Video.css';

function Video() {
    return (
        <div className="containerVideoBg">
            <video src={VideoBg} autoPlay loop muted />
        </div>
    );
}

export default Video;
