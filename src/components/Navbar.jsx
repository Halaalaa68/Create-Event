import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 text-center fixed top-0 left-0 right-0 z-10">
      <Link className="text-white mx-2 hover:bg-slate-50 duration-500 transition-all p-2 rounded-lg" to="/">Home</Link>
      <Link className="text-white mx-2 hover:bg-slate-50 duration-500 transition-all p-2 rounded-lg" to="/create-event">Create Event</Link>
    </nav>
  );
}

export default Navbar;
