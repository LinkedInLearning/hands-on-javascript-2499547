import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Hero from './sections/Hero.jsx';
import Machine from './sections/Machine.jsx';
import Origin from './sections/Origin.jsx';
import Menu from './sections/Menu.jsx';
import Why from './sections/Why.jsx';
import Locations from './sections/Locations.jsx';
import Partner from './sections/Partner.jsx';
import Film from './sections/Film.jsx';
import Statement from './sections/Statement.jsx';
import Programs from './sections/Programs.jsx';
import useReveal from './useReveal.js';

export default function App() {
  useReveal();
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Statement />
        <Machine />
        <Origin />
        <Menu />
        <Why />
        <Locations />
        <Film />
        <Programs />
        <Partner />
      </main>
      <Footer />
    </>
  );
}
