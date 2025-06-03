import Link from 'next/link';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <main className="">
      <Header />
      <p className="font-medium hover:text-blue-400">Home page</p>
      <Footer />
    </main>
  );
}
