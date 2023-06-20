import React from 'react';
import BackButton from '../../components/BackButton';
import Link from 'next/link';

const InvoicePage = () => {
  return (
    <div>
        <Link href='/index' passHref>
            <button>
                <BackButton />
            </button>
        </Link>
        
      <h1>Invoice Page</h1>
    </div>
  );
};

export default InvoicePage;
