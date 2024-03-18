import React from 'react';
import SearchBar from './components/SearchBar';

const App = () => {
  const handlePlayTrack = (trackUrl) => {
    // Implement play functionality here
    console.log('Playing track:', trackUrl);
  };

  return (
    <div>
      <h1>Music Player</h1>
      <SearchBar />
    </div>
  );
};

export default App;
