import React from 'react';
import { Link } from 'react-router-dom';

const EventList = ({ events }) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-stone-600">Event List</h2>
      <ul className="space-y-2">
        {events.map((event, index) => (
          <li key={index} className="border p-4">
            <Link to=''>
              <h3 className="font-semibold">{event.name}</h3>
              <p>{event.date}</p>
              <p>{event.location}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
