import Link from 'next/link';
import Dropdowndemo from '../widgets/Dropdowndemo';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-neutral-300 ">
      <Dropdowndemo />
      <Link href="/job" className="text-3xl bg-indigo-500 px-4 py-2">
        Create job
      </Link>
    </div>
  );
}
