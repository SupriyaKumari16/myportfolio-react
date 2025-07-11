import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Background from './components/Background';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background always behind everything */}
      <Background />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Home />
          <About />
          <Skills />
          <Project />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
