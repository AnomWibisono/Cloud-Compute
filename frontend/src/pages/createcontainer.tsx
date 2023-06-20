import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import BackButton from '../../components/BackButton';

export default function CreateContainer() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted!');
    // Navigate back to the home page
    router.push('/');
  };

  return (
    <div>
      <Navbar />
      <div className="w-screen h-screen">
        <div className="pt-20">
          <div className="flex items-start mt-4">
            <div className="mr-4">
              <Link href="/home" passHref>
                <BackButton />
              </Link>
            </div>
            <div className='ml-4'>
              <h2 className="text-3xl font-bold mb-4 mt-4">Create Container</h2>
              <form onSubmit={handleSubmit} className="flex">
                <div className="flex flex-col">
                  <div className="flex items-center mb-4">
                    <label className="text-gray-700 font-bold mr-2" htmlFor="name">
                      Name:
                    </label>
                    <input
                      className="appearance-none border rounded w-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <button
                    className="bg-abyss hover:bg-sky text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
                    type="submit"
                  >Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-gradient-to-b'></div>
    </div>
  );
}
