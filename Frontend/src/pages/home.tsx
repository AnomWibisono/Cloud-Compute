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
      <div className="max-w-7xl mx-auto mt-8">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Usage Time</th>
              <th className="px-4 py-2">Last Started</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">John Doe</td>
              <td className="border px-4 py-2">Profile Image Here</td>
              <td className="border px-4 py-2">2 hours</td>
              <td className="border px-4 py-2">2023-06-01 09:30 AM</td>
              <td className="border px-4 py-2">
                <button className="bg-abyss hover:bg-sky text-white font-bold py-2 px-4 rounded">Start</button>
                <button className="bg-abyss hover:bg-sky text-white font-bold py-2 px-4 rounded ml-2">Stop</button>
                <button className="bg-abyss hover:bg-sky text-white font-bold py-2 px-4 rounded ml-2">Delete</button>
                <button className="bg-abyss hover:bg-sky text-white font-bold py-2 px-4 rounded ml-2">Billing</button>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Jane Smith</td>
              <td className="border px-4 py-2">Profile Image Here</td>
              <td className="border px-4 py-2">1 hour</td>
              <td className="border px-4 py-2">2023-06-02 12:45 PM</td>
              <td className="border px-4 py-2 flex">
                <button className="bg-abyss hover:bg-sky text-white font-bold py-2 px-4 rounded">Start</button>
                <button className="bg-abyss hover:bg-sky text-white font-bold py-2 px-4 rounded ml-2">Stop</button>
                <button className="bg-abyss hover:bg-sky text-white font-bold py-2 px-4 rounded ml-2">Delete</button>
                <button className="bg-abyss hover:bg-sky text-white font-bold py-2 px-4 rounded ml-2">Billing</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
