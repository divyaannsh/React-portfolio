import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import { SiCplusplus, SiMysql, SiNextdotjs, SiTailwindcss, SiNumpy, SiPandas, SiGooglecloud } from 'react-icons/si';

const Skills = () => {
  return (
    <section id="skills" className="py-20" style={{ backgroundColor: '#182747' }}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Skills</h2>

        
        <h3 className="text-2xl font-semibold text-white mb-4">Technical Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FaHtml5 className="text-4xl text-red-600 mb-2" />
            <h3 className="text-xl font-semibold">HTML</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FaCss3Alt className="text-4xl text-blue-600 mb-2" />
            <h3 className="text-xl font-semibold">CSS</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FaJs className="text-4xl text-yellow-400 mb-2" />
            <h3 className="text-xl font-semibold">JavaScript</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FaReact className="text-4xl text-blue-500 mb-2" />
            <h3 className="text-xl font-semibold">ReactJS</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FaPython className="text-4xl text-green-500 mb-2" />
            <h3 className="text-xl font-semibold">Python</h3>
          </div>
        </div>

        
        <h3 className="text-2xl font-semibold text-white mb-4">Frameworks & Libraries</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FaBootstrap className="text-4xl text-purple-600 mb-2" />
            <h3 className="text-xl font-semibold">Bootstrap</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <SiTailwindcss className="text-4xl text-blue-400 mb-2" />
            <h3 className="text-xl font-semibold">TailwindCSS</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FaNodeJs className="text-4xl text-green-600 mb-2" />
            <h3 className="text-xl font-semibold">Node.js</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <SiNextdotjs className="text-4xl text-black mb-2" />
            <h3 className="text-xl font-semibold">NextJS</h3>
          </div>
        </div>

       
        <h3 className="text-2xl font-semibold text-white mb-4">Databases & Tools</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <SiMysql className="text-4xl text-black mb-2" />
            <h3 className="text-xl font-semibold">MySQL</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <SiGooglecloud className="text-4xl text-blue-500 mb-2" />
            <h3 className="text-xl font-semibold">Google Cloud</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FaGitAlt className="text-4xl text-black mb-2" />
            <h3 className="text-xl font-semibold">Git</h3>
          </div>
        </div>

        
        <h3 className="text-2xl font-semibold text-white mb-4">Data Science Tools</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <SiNumpy className="text-4xl text-black mb-2" />
            <h3 className="text-xl font-semibold">NumPy</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <SiPandas className="text-4xl text-black mb-2" />
            <h3 className="text-xl font-semibold">Pandas</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FaPython className="text-4xl text-green-500 mb-2" />
            <h3 className="text-xl font-semibold">Python</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
