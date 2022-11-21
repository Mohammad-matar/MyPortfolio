import React from 'react';
import Navbar from '../Component/Navbar2';
import Personal from '../Component/Personalinfo';
import Experience from '../Component/Experience';
import Skills from '../Component/Skills';
import Contact from '../Component/Contact';
import Footer from '../Component/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Personal />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
