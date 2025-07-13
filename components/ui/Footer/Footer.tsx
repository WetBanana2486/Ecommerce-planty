import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="">
      <p>Footer section</p>
      <nav>
        <Link href="#">Privacy Policy</Link> |
        <Link href="#">Terms of Service</Link> |
        <Link href="#">Shipping & Returns</Link> |
      </nav>
      <nav>
        <Link href="#">Icon1</Link> |
        <Link href="#">Icon2</Link> |
        <Link href="#">Icon3</Link>
      </nav>
      <p>© {new Date().getFullYear()} Planty. All rights reserved.</p>
    </footer>
  );
}
