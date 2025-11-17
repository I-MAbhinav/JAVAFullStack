import React from 'react';
import './App.css';
import './components/RandomGif';
import RandomGif from './components/RandomGif';
function App() {
  return (
    <div className="App">
      <h2>
        Welcome to Random Gif App
      </h2>
      <RandomGif />
      <SearchMeme/>
    </div>
  );
}
export default App;
