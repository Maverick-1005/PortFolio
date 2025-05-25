import ClientWrapper from './components/ClientWrapper';
import Hero from './sections/Hero';
import About from './sections/About';
import Work from './sections/Work';
import Contact from './sections/Contact';

export default function Home() {
  return (
    <ClientWrapper>
      <div className="min-h-screen">
        <Hero />
        <About />
        <Work />
        <Contact />
      </div>
    </ClientWrapper>
  );
}
