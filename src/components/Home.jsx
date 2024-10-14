import React, { useEffect, useState } from 'react';
import Profile from '../assets/Profile.jpg'; 

const Home = () => {
  const [greetingIndex, setGreetingIndex] = useState(0);

  
  const greetings = ["Hi", "Bonjour", "नमस्ते"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 3000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <section
      id="home"
      className="pt-20 md:pt-24 h-screen text-white flex flex-col md:flex-row items-center justify-between px-10 md:px-36 bg-gradient-to-r from-blue-900 to-gray-800"
    >
      <div className="md:w-1/2 flex flex-col items-start text-left space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          
          <span className="text-teal-400">
            {greetings[greetingIndex]}
          </span>
          , I'm <span className="text-teal-400 transform hover:scale-105 transition-transform duration-300">Divyansh</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          I create beautiful and functional web applications, bringing ideas to life with elegant code and a passion for technology.
        </p>
        <a
          href="#about"
          className="mt-6 inline-block px-8 py-4 bg-teal-500 text-white rounded-md text-lg font-semibold transition-transform transform hover:scale-105"
        >
          Learn More
        </a>
      </div>

      <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 relative">
        <div className="p-4 rounded-full shadow-lg bg-teal-700">
          <img
            src={Profile}
            alt="Profile"
            className="w-450 h-480 md:w-880 md:h-840 rounded-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
