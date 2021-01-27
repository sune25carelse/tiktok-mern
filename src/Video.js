import React, { useRef, useState } from 'react';
import './Video.css';

function Video() {
  const [playing, setPlyaing] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlyaing(false)
    } else {
      videoRef.current.play();
      setPlyaing(true);
    }
  };

  return (
    <div className="video">
      <video
      onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src="https://static.videezy.com/system/resources/previews/000/005/575/original/matrix.mp4"></video>

      {/* VideoFooter */}
      {/* VideoSidebar */}
    </div>
  )
}

export default Video;
