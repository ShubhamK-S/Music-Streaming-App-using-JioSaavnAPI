import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=track.search&track=${query}&api_key=31cca8c3df07098291eb6f8d56c88732&format=json`);
      setSearchResults(response.data.results.trackmatches.track);
    } catch (error) {
      console.error('Error searching tracks:', error);
    }
  };

  const handlePlayTrack = (trackUrl) => {
    // Implement play functionality here
    console.log('Playing track:', trackUrl);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for songs..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <h2>Search Results</h2>
      <ul>
        {searchResults.map((track) => (
          <li key={track.name}>
            <a href="#" onClick={() => handlePlayTrack(track.url)}>{track.name} by {track.artist}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
