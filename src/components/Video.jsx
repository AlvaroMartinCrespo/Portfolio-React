import React from 'react';
import VideoBg from '../video/video1.mp4';
import VideoBg2 from '../video/video2.mp4';
import '../stylesheet/Video.css';

function Video() {
    return (
        <div className="containerVideoBg">
            <video src={VideoBg2} autoPlay loop muted />
        </div>
    );
}

export default Video;
