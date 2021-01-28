import React from "react";
import './App.css';
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <h1>🚀🚀🚀</h1>

      <div className="app__videos">
        <Video url="https://static.videezy.com/system/resources/previews/000/005/575/original/matrix.mp4"
              channel="luca"
              song="kickin it late yeah"
              likes={1223}
              messages={456}
              description="it f**kn works"
              shares={789}
        />
        <Video 
          url="https://static.videezy.com/system/resources/previews/000/005/575/original/matrix.mp4"
          channel="luca"
          song="Kickin it late yeah!!!"
          likes={1223}
          messages={456}
          description="it works"
          shares={789}
        />
        
      </div>
    </div>
  );
}

export default App;
