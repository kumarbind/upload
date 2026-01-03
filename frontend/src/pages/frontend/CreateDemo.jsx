import Navbar from './components/main/Navbar';
import Hero from './components/portfolio/Hero';
import About from './components/portfolio/About';
import Projects from './components/portfolio/Projects';
import Contact from './components/portfolio/Contact';
import Footer from './components/portfolio/Footer';

function PortfolioHome() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default PortfolioHome;
