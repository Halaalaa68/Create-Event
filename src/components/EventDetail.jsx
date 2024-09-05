import React from 'react';

const EventDetail = ({ event }) => {
  return (
    <div className="border p-4">
      <h2 className="text-2xl font-bold">{event.name}</h2>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Description:</strong> {event.description}</p>
    </div>
  );
};

export default EventDetail;
