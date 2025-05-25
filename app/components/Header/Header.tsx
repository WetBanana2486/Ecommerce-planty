import Link from 'next/link';


export default function Header() {
  return (
    <header className="">
        <nav>
        <Link href="/">Home</Link> |
        <Link href="/about">About</Link> |
        <Link href="/blog">Blog</Link> |
        </nav>
    </header>
  );
}
