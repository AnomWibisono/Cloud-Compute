import Link from 'next/link';

export default function ButtonCreate() {
  return (
    <>
      <Link href="/createcontainer" passHref>
        <button className="bg-gray text-black font-semibold py-2 px-6 rounded-2xl font-body flex items-center drop-shadow text-xl">
          <img src="/add.svg" alt="Add" className="mr-2" />
          <span>Create</span>
        </button>
      </Link>
    </>
  );
}
