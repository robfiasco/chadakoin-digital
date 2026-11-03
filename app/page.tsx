import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Offers from '@/components/Offers';
import ChadakoinNow from '@/components/ChadakoinNow';
import Portfolio from '@/components/Portfolio';
import HowIWork from '@/components/HowIWork';
import FlexiblePayment from '@/components/FlexiblePayment';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  alternates: { canonical: 'https://chadakoindigital.com' },
};

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative">
        <Hero />
        <Offers />
        <ChadakoinNow />
        <Portfolio />
        <HowIWork />
        <FlexiblePayment />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
