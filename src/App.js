import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Parth from './components/Parth';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

// ← New: import Donate page
import Ai from './components/Ai';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          {/* Home page: your existing sections */}
          <Route path="/" element={
            <>
              <Parth />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Education />
              <Contact />
              <BackToTop />
            </>
          }/>

          {/* Donate page */}
          <Route path="/donate" element={<Ai />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
