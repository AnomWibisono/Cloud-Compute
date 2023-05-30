import React from 'react'
import Logo from '../public/Logo.svg'

const Navbar = () => {
  return (
    <nav className='bg-abyss fixed w-full h-20 shadow-xl'>
        <div className='flex justify-between items-center h-full w-full px-4 2xl:px-16'>
            <img src={Logo} alt="Logo" width = "100"/>
            <div>
                <ul className='hiddem sm:flex'>
                    <li className='ml-10 hover:border-b text-xl text-white font-body font-semibold'> Container List </li>
                    <li className='ml-10 hover:border-b text-xl text-white font-body font-semibold'> Price List </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar