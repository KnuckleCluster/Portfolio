import React, { useState, useEffect } from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Footer from './components/Footer';

function Comp() {
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth > 1000); // Adjust the breakpoint as needed
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex h-screen">
      {showSidebar && (
        <nav
          className="fixed top-0 left-0 w-[100px] bg-cover bg-center text-green-300 flex flex-col justify-center items-center h-full border border-green-400"
          style={{ backgroundImage: `url('img/navbanner.png')` }}
        >
          <button onClick={() => scrollToSection('about')} className="block mb-4 p-2 mt-[20px] bg-blue-900 border border-green-400 hover:text-green-400 hover:bg-blue-950 hover:border hover:border-green-600 w-full underline">About</button>
          <button onClick={() => scrollToSection('skills')} className="block mb-4 p-2 mt-[20px] bg-blue-900 border border-green-400 hover:text-green-400 hover:bg-blue-950 hover:border hover:border-green-600 w-full underline">Skills</button>
          <button onClick={() => scrollToSection('contact')} className="block mb-4 p-2 mt-[20px] bg-blue-900 border border-green-400 hover:text-green-400 hover:bg-blue-950 hover:border hover:border-green-600 w-full underline">Contact</button>
        </nav>
      )}

      <div className={`flex flex-col w-full ${showSidebar ? 'pl-[100px]' : ''} min-h-full`}>
        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>
        
        <section id="portfolio">
          <Portfolio />
        </section>
        
        <section id="contact">
          <Contact />
          <br /><br /><br />
          <hr />
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default Comp;

