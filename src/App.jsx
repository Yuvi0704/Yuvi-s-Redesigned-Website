import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Intro from './components/Intro';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import './index.css';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <Header />
        <main>
          <Intro />
          <Profile />
          <Skills />
          <Projects />
          <Publications />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;
