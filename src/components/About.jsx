import React from 'react';
import { FaPaintBrush, FaCode, FaCamera, FaPenNib } from 'react-icons/fa'; 

const About = () => {
  return (
    <section
      id="about"
      className="py-20 text-white text-center bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="container mx-auto px-4 md:px-8">
        
        <h2 className="text-4xl font-extrabold mb-8 text-teal-400">About Me</h2>

       
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
          I am a passionate Fullstack Developer with a strong foundation in building responsive, accessible, and high-performance web applications. My journey in web development began with a curiosity for technology, and it has since evolved into a commitment to creating meaningful digital experiences.
        </p>

        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
          With expertise in <span className="text-teal-400">ReactJS</span>, <span className="text-teal-400">JavaScript</span>, and <span className="text-teal-400">TailwindCSS</span>, I excel at transforming complex requirements into elegant solutions.
        </p>

        
        <h3 className="text-3xl font-semibold mt-12 mb-6 text-teal-400">What I'm Doing</h3>

        
        <div className="mt-12 flex flex-col md:flex-row justify-center space-x-10 text-gray-400">
          <div className="flex flex-col items-center mb-8">
            <FaPaintBrush className="text-4xl mb-2 text-teal-400" /> 
            <h4 className="text-lg font-semibold">Web Design</h4>
            <p className="mt-2">The most modern and high-quality design made at a professional level.</p>
          </div>

          <div className="flex flex-col items-center mb-8">
            <FaCode className="text-4xl mb-2 text-teal-400" /> 
            <h4 className="text-lg font-semibold">Web Development</h4>
            <p className="mt-2">High-quality development of sites at the professional level.</p>
          </div>

          <div className="flex flex-col items-center mb-8">
            <FaCamera className="text-4xl mb-2 text-teal-400" /> 
            <h4 className="text-lg font-semibold">Photography</h4>
            <p className="mt-2">I make high-quality photos of any category at a professional level.</p>
          </div>

          <div className="flex flex-col items-center mb-8">
            <FaPenNib className="text-4xl mb-2 text-teal-400" /> 
            <h4 className="text-lg font-semibold">Graphic Design</h4>
            <p className="mt-2">Creating visually appealing graphics that effectively communicate ideas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
