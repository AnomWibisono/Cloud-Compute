import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-abyss fixed w-full h-20 shadow-xl'>
      <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
        <img src='/logo.svg' alt="Logo" width="150" />
        <div>
          <ul className='hidden sm:flex'>
            <li className='ml-5 hover:bg-sky px-5 py-1 rounded-xl transition-all text-xl text-white font-body font-semibold'> Container List </li>
            <li className='ml-5 hover:bg-sky px-5 py-1 rounded-xl transition-all text-xl text-white font-body font-semibold'> Price List </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
