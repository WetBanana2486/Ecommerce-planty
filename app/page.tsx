import Link from 'next/link';


export default function Home() {
  return (
    <main className="">
      <p className="font-medium hover:text-blue-400">Home page</p>
      <Link href="/blog">Blog</Link>
    </main>
  );
}
