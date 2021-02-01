import axios from "./axios";
import React, { useEffect, useState } from "react";
import './App.css';
import Video from "./Video";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('/v2/posts');
      setVideos(response.data);

      return response;
    }
    fetchPosts();
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({url, channel, description, song, likes, shares, messages}) => (
          <Video
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            shares={shares}
            messages={messages}
          />
          )
        )}
      </div>
    </div>
  );
}

export default App;
