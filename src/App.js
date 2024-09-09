// src/App.js
import React from 'react';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/ContectForm';


function App() {
  return (
    <div >
      <Introduction />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;