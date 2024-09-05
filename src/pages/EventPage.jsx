import React from 'react';
import { useParams } from 'react-router-dom';

const EventPage = ({ events }) => {
  const { id } = useParams();
  const event = events[id];

  if (!event) return <div>Event not found</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold">{event.name}</h1>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Description:</strong> {event.description}</p>
    </div>
  );
};

export default EventPage;
