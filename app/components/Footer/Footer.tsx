import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="">
        <p>What should I put in footer?</p>
        <nav>
        <Link href="/">Home</Link> |
        <Link href="/about">About</Link> |
        <Link href="/blog">Blog</Link> |
        </nav>
    </footer>
  );
}
