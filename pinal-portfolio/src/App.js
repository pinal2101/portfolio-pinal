import React, { useEffect, useState } from 'react';
import './App.css';
import { useAos } from './hooks/useAos';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MyBiography from './components/MyBiography';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Services from './components/Services';
// import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
      setWidth(pct);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div className="loading" style={{ width: `${width}%` }} />;
}

function BackgroundDecor() {
  return (
    <div className="area" aria-hidden="true">
      <ul className="circles">
        {Array.from({ length: 10 }, (_, i) => (
          <li key={i} />
        ))}
      </ul>
    </div>
  );
}

function App() {
  useAos();

  return (
    <div className="App">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <MyBiography />
        <Education />
        <WorkExperience />
        <Skills />
        <Services />
        {/* <Projects /> */}
        <Contact />
      </main>
      <Footer />
      <BackgroundDecor />
    </div>
  );
}

export default App;
