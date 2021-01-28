import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({ url, channel, description, song, likes, shares, messages }) {
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
        src={url}
        ></video>

      <VideoFooter 
        channels={channel} 
        description={description}
        song={song} 
      />
      <VideoSidebar likes={likes} shares={shares} messages={messages}/>
    </div>
  )
}

export default Video;
