import React from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

function Comp() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex h-screen">
      <nav className="fixed top-0 left-0 w-[100px] bg-blue-900 text-green-300 flex flex-col justify-center items-center h-full border border-green-400">
        <button onClick={() => scrollToSection('about')} className="block mb-4 p-2   mt-[20px] hover:text-green-400  hover:bg-blue-950 hover:border hover:border-green-600 w-[100px] underline ">About</button>
        <button onClick={() => scrollToSection('skills')} className="block mb-4 p-2   mt-[20px] hover:text-green-400  hover:bg-blue-950 hover:border hover:border-green-600 w-[100px] underline">Skills & Projects</button>
        <button onClick={() => scrollToSection('contact')} className="block mb-4 p-2  mt-[20px] hover:text-green-400  hover:bg-blue-950 hover:border hover:border-green-600 w-[100px] underline">Contact</button>
      </nav>
      
      <div className="flex flex-col w-full">
        <section id="about" className="flex-grow p-8">
          <About />
        </section>

        <section id="skills" className="flex-grow p-8">
          <Skills />
        </section>
        
        <section id="portfolio" className="flex-grow p-8">
          <Portfolio />
        </section>
        
        <section id="contact" className="flex-grow p-8">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default Comp;
