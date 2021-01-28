import React from "react";
import './App.css';
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <h1>🚀🚀🚀</h1>

      <div className="app__videos">
        <Video url="https://static.videezy.com/system/resources/previews/000/005/575/original/matrix.mp4" />
        <Video />
        
      </div>
    </div>
  );
}

export default App;

