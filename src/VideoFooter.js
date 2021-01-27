import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
          <h3>@Luca</h3>
          <p>Description</p>
          <div className="videoFooter__ticker">
              <MusicNoteIcon 
                className="videoFooter__icon"
              />
          </div>
      </div>
    </div>
  );
}

export default VideoFooter;
