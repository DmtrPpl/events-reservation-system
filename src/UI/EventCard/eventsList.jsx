// components/ArtistsList.js
import React from 'react';
import EventCard from './EventCard';
import { events } from './eventsData'; // Шлях до вашого файлу з даними

const EventList = () => {
  return (
    <div className="containerX">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
