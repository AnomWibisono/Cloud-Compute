import React from 'react';
import Navbar from '../../components/Navbar';
import ButtonCreate from '../../components/ButtonCreate';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 pt-28 flex items-center justify-between">
        <h1 className="text-4xl font-semibold font-body text-abyss mr-4">List Container</h1>
        <ButtonCreate />
      </div>
    </div>
  );
}
