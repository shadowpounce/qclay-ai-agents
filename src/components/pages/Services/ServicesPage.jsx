import Blog from './components/Blog/Blog';
import Cases from './components/Cases/Cases';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Identify from './components/Identify/Identify';
import Impact from './components/Impact/Impact';
import Industry from './components/Industry/Industry';
import Price from './components/Price/Price';
import Process from './components/Process/Process';
import Results from './components/Results/Results';
import Science from './components/Science/Science';
import Service from './components/Service/Service';
import Team from './components/Team/Team';
import Header from './components/Header/Header';
import { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    if (window.innerWidth >= 1001) {
      const sections = document.querySelectorAll('main > *');

      sections.forEach(section => {
        const initH = section.lastChild.offsetHeight;
        section.style.height =
          initH *
            (Number(section.dataset.kf) ? Number(section.dataset.kf) : 0.85) +
          'px';
      });
    }
  }, []);

  return (
    <>
      <Header hideMenu={true} />
      <main>
        <Hero />
        <Science />
        <Service />
        <Industry />
        <Identify />
        <Process />
        <Results />
        <Impact />
        {/* <Cases /> */}
        {/* <Team /> */}
        {/* <Blog /> */}
        <Price />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Services;
