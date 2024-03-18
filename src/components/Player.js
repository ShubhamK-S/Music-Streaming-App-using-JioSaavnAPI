import React from 'react';

const Player = ({ trackUrl }) => {
  return (
    <div>
      <audio controls>
        <source src={trackUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Player;
