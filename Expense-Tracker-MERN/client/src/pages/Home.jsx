import Navbar from '../components/layout/Navbar';
import Hero from '../components/layout/Hero';
import Features from '../components/layout/Features';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden pb-16">
      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
