import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=user.getRecommendedTracks&user=ShubhamKS&api_key=31cca8c3df07098291eb6f8d56c88732&format=json`);
        setRecommendations(response.data.recommendedtracks.track);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <div>
      <h2>Recommendations</h2>
      {recommendations.length > 0 ? (
        <ul>
          {recommendations.map((recommendation) => (
            <li key={recommendation.name}>{recommendation.name} by {recommendation.artist.name}</li>
          ))}
        </ul>
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
};

export default Recommendations;
