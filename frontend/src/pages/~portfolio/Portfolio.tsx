import About from './About/About';
import Achievements from './Achievements/Achievements';
import Experience from './Experience/Experience';
import Footer from './Footer/Footer';
import Landing from './Landing/Landing';
import Skills from './Skills/Skills';
import Work from './Work/Work';

const Portfolio = () => {
  return (
    <>
      {/* <Navbar transparent /> */}
      <main>
        <Landing />

        <About></About>
        <Skills></Skills>
        <Achievements></Achievements>
        <Experience></Experience>
        <Work></Work>
        <Footer />
      </main>
    </>
  );
};

export default Portfolio;
