import React from 'react';

const AlbumList = ({ albums }) => {
  return (
    <div>
      <h2>Albums</h2>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>{album.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;
