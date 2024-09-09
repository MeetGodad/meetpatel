// src/components/Intro.js
import React from 'react';

const Intro = () => {
  const handleButtonClick = () => {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center  text-white overflow-hidden m-16">
      <div className="absolute inset-0 opacity-60"></div>
      <div className="relative z-10 text-center px-6 md:px-12">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent leading-tight">
          Hi, I'm Meet Patel
        </h1>
        <p className="text-lg md:text-2xl mb-8 leading-relaxed">
          I'm a full-stack developer passionate about crafting stunning and functional web experiences. Let's collaborate to bring innovative ideas to life.
        </p>
        <button
          className="px-8 py-4 text-lg font-semibold bg-white text-gray-900 rounded-full shadow-lg hover:bg-gray-100 hover:text-gray-800 transition-transform transform hover:scale-105"
          onClick={handleButtonClick}
        >
          Learn More
        </button>
        <div className="mt-6 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/meet-godad/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            <svg
              className="w-10 h-10" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              preserveAspectRatio="xMidYMid meet"
            >
              <path d="M4.98 3.5a2.48 2.48 0 1 0 0 4.96 2.48 2.48 0 0 0 0-4.96zm0 7.5H1v12h3.98V11zm5.56-2.01h-3.03v3.08h3.03v-3.08zm-1.515 10.377h3.035v-7.212c0-3.073-1.622-4.754-4.264-4.754-1.849 0-2.815 1.059-3.281 1.835v-.784h-3.035v10.776h3.035v-6.48c0-1.53.758-2.535 2.248-2.535 1.591 0 1.758 1.246 1.758 2.541v6.474z"/>
            </svg>
          </a>
          <a
            href="https://github.com/MeetGodad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <svg
              className="w-10 h-10" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              preserveAspectRatio="xMidYMid meet"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.308 3.438 9.82 8.205 11.42.6.11.82-.262.82-.58v-2.087c-3.338.73-4.044-1.6-4.044-1.6-.546-1.39-1.33-1.76-1.33-1.76-1.09-.746.082-.73.082-.73 1.207.085 1.837 1.244 1.837 1.244 1.072 1.832 2.81 1.305 3.49.998.11-.778.42-1.305.766-1.606-2.665-.3-5.466-1.333-5.466-5.928 0-1.309.467-2.381 1.24-3.224-.124-.301-.54-1.522.114-3.168 0 0 1.016-.325 3.323 1.244.961-.265 1.995-.398 3.02-.402 1.027.004 2.064.137 3.029.402 2.307-1.57 3.318-1.244 3.318-1.244.659 1.646.24 2.867.12 3.168.77.843 1.237 1.915 1.237 3.224 0 4.599-2.804 5.628-5.475 5.926.434.374.823 1.113.823 2.242v3.305c0 .321.217.692.823.577C20.563 21.821 24 17.308 24 12 24 5.373 18.627 0 12 0z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
