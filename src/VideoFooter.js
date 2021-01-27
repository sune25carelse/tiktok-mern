import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
          <h3>@Luca</h3>
          <p>Description</p>
          <div className="videoFooter__ticker">
              <MusicNoteIcon className="videoFooter__icon"/>
              <Ticker mode="smooth">
                  {({ index }) => (
                    <>
                      <p>I am a Song</p>
                    </>
                  )}
              </Ticker>
          </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://seeklogo.net/wp-content/uploads/2012/11/liverbir-vector-logo-400x400.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
