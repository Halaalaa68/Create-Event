import React from 'react';
import EventForm from '../components/EventForm';

const CreateEvent = () => {
  const handleSubmit = (event) => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    localStorage.setItem('events', JSON.stringify([...storedEvents, event]));
    alert('Event created successfully!');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold ms-6 text-cyan-700 mb-3">Create Event</h1>
      <EventForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateEvent;
