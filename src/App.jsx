import React from 'react';
import './App.css'
import Hero from './Hero/Hero.jsx';
import About from './About/About.jsx';
import Skills from './Skills/Skills.jsx';
import Project from './Project/Project.jsx';
import Contact from './Contact/Contact.jsx';
import Footer from './Navbar/Footer';

import { Toaster } from 'sonner';





const App = () => {
  return (
    <>
      <Toaster />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
      
    </>
  )
}

export default App

