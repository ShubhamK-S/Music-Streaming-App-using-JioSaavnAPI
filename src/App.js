import React from 'react';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const handlePlayTrack = (trackUrl) => {
    // Implement play functionality here
    console.log('Playing track:', trackUrl);
  };

  return (
    <div>
      <h1 className="funky-font"><center>Music Player</center></h1>
      <SearchBar />
    </div>
  );
};

export default App;
