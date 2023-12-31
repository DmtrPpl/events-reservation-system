// components/ArtistsList.js
import React from 'react';
import ArtistCard from './VenueCard';
import { venues } from './venuesData'; // Шлях до вашого файлу з даними

const VenuesList = () => {
  return (
    <div className="container">
      {venues.map((venue) => (
        <ArtistCard key={venue.id} venue={venue} />
      ))}
    </div>
  );
};

export default VenuesList;
