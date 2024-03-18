import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TopTracks = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTopTracks = async () => {
      try {
        const response = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=31cca8c3df07098291eb6f8d56c88732&format=json`);
        setTracks(response.data.tracks.track);
      } catch (error) {
        console.error('Error fetching top tracks:', error);
      }
    };

    fetchTopTracks();
  }, []);

  return (
    <div>
      <h2>Top Tracks</h2>
      <ul>
        {tracks.map((track) => (
          <li key={track.name}>{track.name} by {track.artist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TopTracks;
