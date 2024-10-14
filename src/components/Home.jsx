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
      className="pt-16 md:pt-24 min-h-screen text-white flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-20 bg-gradient-to-r from-blue-900 to-gray-800"
    >
      {/* Text Section */}
      <div className="md:w-1/2 flex flex-col items-start text-left space-y-4 md:space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
          <span className="text-teal-400">{greetings[greetingIndex]}</span>, I'm{" "}
          <span className="text-teal-400 transform hover:scale-105 transition-transform duration-300">
            Divyansh
          </span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300">
          I create beautiful and functional web applications, bringing ideas to life
          with elegant code and a passion for technology.
        </p>
        <a
          href="#about"
          className="mt-6 inline-block px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-teal-500 text-white rounded-md text-sm sm:text-base md:text-lg font-semibold transition-transform transform hover:scale-105"
        >
          Learn More
        </a>
      </div>

      {/* Profile Image Section */}
      <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 relative">
        <div className="p-1 sm:p-2 rounded-full shadow-lg bg-teal-500">
          <img
            src={Profile}
            alt="Profile"
            className="w-86 h-86 sm:w-58 sm:h-58 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
