import React from 'react';
import Experience from '../Dashboard/Experience';
import Personal from "../Dashboard/Personal";
import Skills from '../Dashboard/Skills';

export default function Dash() {
  return (
    <div>
      <Personal />
      <Skills />
      <Experience />
    </div>
  );
}
