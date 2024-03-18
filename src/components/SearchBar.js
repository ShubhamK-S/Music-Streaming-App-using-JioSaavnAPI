import React, { useState } from 'react';
import axios from 'axios';
import MusicPlayer from './MusicPlayer';
import './SearchBar.css'; // Import CSS file for styling

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);

  const searchTracks = async () => {
    try {
      const response = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=track.search&track=${query}&api_key=31cca8c3df07098291eb6f8d56c88732&format=json`);
      setSearchResults(response.data.results.trackmatches.track);
    } catch (error) {
      console.error('Error searching tracks:', error);
    }
  };

  const fetchTrackDetails = async (track) => {
    try {
      const response = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=31cca8c3df07098291eb6f8d56c88732&artist=${encodeURIComponent(track.artist)}&track=${encodeURIComponent(track.name)}&format=json`);
      const { album } = response.data.track;
      const trackUrl = response.data.track.url;
      setSelectedTrack({ ...track, url: trackUrl, image: album.image[1]['#text'] });
    } catch (error) {
      console.error('Error fetching track details:', error);
    }
  };

  const handlePlayTrack = (track) => {
    fetchTrackDetails(track);
  };

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent page reload
    searchTracks();
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for songs..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="search-results">
        {searchResults.map((track) => (
          <div className="track" key={track.name}>
            <img src={track.image[1]['#text']} alt="Album Art" />
            <p>{track.name} by {track.artist}</p>
            <button onClick={() => handlePlayTrack(track)}>Play</button>
          </div>
        ))}
      </div>
      {selectedTrack && <MusicPlayer trackUrl={selectedTrack.url} />}
    </div>
  );
};

export default SearchBar;
