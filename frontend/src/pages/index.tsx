import React from 'react';
import Navbar from '../../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 pt-28 flex items-center">
        <h1 className="text-4xl font-semibold font-body text-abyss mr-4">List Container</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Button
        </button>
      </div>
    </div>
  );
}
