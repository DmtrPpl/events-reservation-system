// components/ArtistsList.js
import React from 'react';
import ArtistCard from './ArtistCard';
import { artists } from './artistsData'; // Шлях до вашого файлу з даними

const ArtistsList = () => {
  return (
    <div className="container">
      {artists.map((artist) => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
    </div>
  );
};

export default ArtistsList;
