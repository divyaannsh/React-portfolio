import React from 'react';
import { FaAward, FaTrophy } from 'react-icons/fa';

const achievements = [
  {
    title: ' Army Cyber Security Hackathon',
    description: ' Successfully passed Level 2 and qualified for Level 3 of the Army Cyber Security Hackathon.',
    date: 'July 2024',
  },
  {
    title: 'IBM Hackathon',
    description: '"Proposed an innovative Power EV solution in the IBM Hackathon, shortlisted at the national level."',
    date: 'March 2023',
  },
  {
    title: 'Hackathon',
    description: 'Orchestrated the Hack Crack hackathon at college, attracting 100+ participants and driving innovative tech projects.',
    date: 'January 2024',
  },
 
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <FaTrophy className="text-teal-400 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-white">{achievement.title}</h3>
              <p className="text-gray-400 mt-2">{achievement.description}</p>
              <p className="text-teal-400 mt-4">{achievement.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
