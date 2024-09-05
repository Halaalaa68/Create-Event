import React, { useEffect, useState } from 'react';
import EventList from '../components/EventList';

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  return (
    <div className='text-center'>
      <h1 className="text-2xl font-bold text-center">Event Management Platform</h1>
      <EventList events={events} />
    </div>
  );
};

export default Home;
