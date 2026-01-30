import dynamic from 'next/dynamic';
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy load below-the-fold components
const Portfolio = dynamic(() => import('./components/Portfolio'), { ssr: true });
const WhyChooseUs = dynamic(() => import('./components/WhyChooseUs'), { ssr: true });
const BookShowcase = dynamic(() => import('./components/BookShowcase'), { ssr: true });
const Platforms = dynamic(() => import('./components/Platforms'), { ssr: true });
const HomeAbout = dynamic(() => import('./components/HomeAbout'), { ssr: true });
const Contact = dynamic(() => import('./components/Contact'), { ssr: true });
const QuoteBar = dynamic(() => import('./components/QuoteBar'), { ssr: true });
const Footer = dynamic(() => import('./components/Footer'), { ssr: true });
const ErrorBoundary = dynamic(() => import('./components/ErrorBoundary'), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Portfolio />
      <WhyChooseUs />
      <BookShowcase />
      <Platforms />
      <ErrorBoundary>
        <HomeAbout />
      </ErrorBoundary>
      <Contact />
      <QuoteBar />
      <Footer />
    </main>
  );
}