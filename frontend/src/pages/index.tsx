import React from 'react';
import Navbar from '../../components/Navbar';
import ButtonCreate from '../../components/ButtonCreate';
import Link from 'next/link';

export default function Home() {
  const tableData = [
    {
      id: 1,
      name: 'Container 1',
      image: 'nginx',
      usageTime: '2 hours',
      lastStarted: '2 hours ago',
    },
    {
      id: 2,
      name: 'Container 2',
      image: 'nginx',
      usageTime: '1 hour',
      lastStarted: '3 hours ago',
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 pt-28 flex items-center justify-between">
        <h1 className="text-4xl font-semibold font-body text-abyss mr-4">List Container</h1>
        <ButtonCreate />
      </div>
      <div className="max-w-7xl mx-auto mt-8">
        <table className="table-auto w-full mx-auto">
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
            {tableData.map((item) => (
              <tr key={item.id}>
                <td className="border-2 border-darkgray px-4 py-2">{item.name}</td>
                <td className="border-2 border-darkgray px-4 py-2 text-center">{item.image}</td>
                <td className="border-2 border-darkgray px-4 py-2 text-center">{item.usageTime}</td>
                <td className="border-2 border-darkgray px-4 py-2 text-center">{item.lastStarted}</td>
                <td className="border-2 border-darkgray py-2 flex justify-center items-center">
                  <div className='mr-10'>
                    <button className="mr-8">
                      <img src="/start.svg" alt="Start" />
                    </button>
                    <button>
                      <img src="/stop.svg" alt="Stop" />
                    </button>
                  </div>
                  <img src='/rectangle 3.svg' className='mr-10'></img>
                  <div>
                    <button className="mr-8">
                      <img src="/delete.svg" alt="Delete" />
                    </button>
                    <Link href='/invoice' passHref>
                      <button>
                        <img src="/pay.svg" alt="Pay" />
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
