import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TheProblem from '@/components/TheProblem';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import RealProblems from '@/components/RealProblems';
import Pricing from '@/components/Pricing';
import WhyLocal from '@/components/WhyLocal';
import WhyJamestown from '@/components/WhyJamestown';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative">
        <Hero />
        <TheProblem />
        <Portfolio />
        <Services />
        <RealProblems />
        <Pricing />
        <WhyLocal />
        <WhyJamestown />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
