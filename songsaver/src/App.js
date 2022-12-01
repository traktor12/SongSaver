import React from "react";
import About from "./components/about";
import SongList from "./components/SongComp/SongList";
import Navbar from "./components/navbar";
import './styling/style.css';
function App() {

  let Page;
  switch(window.location.pathname){
    default :
      Page = SongList
    break
    case "/songsaver" :
      Page = SongList
    break
    case "/about" :
      Page = About
    break
  }

  return (
    <div>
      <Navbar />
      <Page />
      
    </div>
  );
}

export default App;
