import React, { useState } from 'react';

const MusicPlayer = ({ trackUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <h2>Music Player</h2>
      <audio src={trackUrl} controls autoPlay={isPlaying} />
      <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
};

export default MusicPlayer;
