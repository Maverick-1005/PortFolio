import ClientWrapper from './components/ClientWrapper';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

export default function Home() {
  return (
    <ClientWrapper>
      <div className="min-h-screen">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </ClientWrapper>
  );
}
