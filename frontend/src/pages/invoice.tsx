import React from 'react';
import BackButton from '../../components/BackButton';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

const InvoicePage = () => {
  return (
    <div>
        <Navbar />
            <div className="pt-28 mr-10  flex " >
                <Link href="/" passHref>
                    <button>
                        <BackButton />
                    </button>
                </Link>
                <div className='w-full h-screen'>
                    <div  className='w-1/3 h-2/3 bg-white shadow-xl pt-10 rounded-lg text-center'>
                        <h1 className=' font-bold font-body text-4xl'>Invoice</h1>
                        <h2 className=' font-body font-semibold text-4xl mt-24'>Rp.50.000</h2>
                        <Link href='paysuccess'>
                        <button className='bg-abyss rounded-md shadow-md text-3xl px-20 py-5 text-center font-semibold text-white mt-36'>
                            Pay
                        </button>
                        </Link>
                    </div>
                </div>
                
            </div>
    </div>
  );
};

export default InvoicePage;
