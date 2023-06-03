import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function CreateContainer() {
  return (
    <div>
      <Navbar />
      <div className='max-w-screen mx-auto pt-28'>
        <Link href="/home" passHref>
          <img src="./arrowback.svg" alt="Go back to home" />
        </Link>
      </div>
    </div>
  );
}
