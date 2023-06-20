import Link from 'next/link';

export default function paysuccess() {
    return (
      <div className="w-screen h-screen bg-gradient-to-b from-sky to-abyss flex items-center justify-center">
        <div className="w-1/4 h-3/4 bg-white rounded-md shadow-lg flex flex-col items-center justify-center">
          <h1 className="text-center text-3xl mt-8 font-body font-semibold">
            Payment Successful
          </h1>
          <div className="flex items-center justify-center mt-4">
            <img src="/success.svg" alt="Success"/>
          </div>
          <Link href='/' passHref>
            <button className="text-center bg-sky text-white text-2xl px-12 py-4 rounded-lg font-semibold mt-4">
                Back
            </button>
          </Link>
        </div>
      </div>
    );
  }
  