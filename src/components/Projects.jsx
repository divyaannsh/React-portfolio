import React, { useState } from 'react';
import Slider from 'react-slick';
import FarmerImage from '../assets/Farmerrr.png';
import AtlasBazzarImage from '../assets/AtlasBazzar.png';
import RazorpayImage from '../assets/Razorpay.PNG';
import GeminiImage from '../assets/Gemini.png';
import ChatappImage from '../assets/Chatapp.png';
import ObjectifyImage from '../assets/objectify.png';
import VidplayerImage from '../assets/youtube.png';
import NikeImage from '../assets/Nike.png';
import ecommerceImage from '../assets/ecommerce1.png';
import PortfolioImage from '../assets/portfolio2.png';
import Portfolio2Image from '../assets/portfolio3.png';
import ClockImage from '../assets/CLock.png';
import ochiImage from '../assets/ochi.png';

const projects = [
  {
    title: 'Farmer Dashboard',
    description: 'A web application to detect and analyze various attributes of images.',
    link: 'https://farmer-dashboard-flax.vercel.app/',
    image: FarmerImage,
    category: 'Web Development',
  },
  {
    title: 'Atlasbazaar',
    description: 'A YouTube clone built using React for video streaming and sharing.',
    link: 'https://atlasbazaar.netlify.app/',
    image: AtlasBazzarImage,
    category: 'Applications',
  },
  {
    title: 'Razorpay',
    description: 'An e-commerce platform to connect buyers and sellers.',
    link: 'https://clone-razorpay-div.netlify.app/',
    image: RazorpayImage,
    category: 'Web Design',
  },
  {
    title: 'Gemini Project',
    description: 'An innovative blockchain-based platform.',
    link: 'https://google-gemini-amber-rho.vercel.app/',
    image: GeminiImage,
    category: 'Web Development',
  },
  {
    title: 'ChatApp',
    description: 'A real-time chat application.',
    link: 'https://chat-app-firebase-blush.vercel.app/',
    image: ChatappImage,
    category: 'Applications',
  },
  {
    title: 'Objectify',
    description: 'An image object detection app.',
    link: 'https://objectify-doms.vercel.app/',
    image: ObjectifyImage,
    category: 'Web Development',
  },
  {
    title: 'Video Player',
    description: 'A video streaming and sharing platform.',
    link: 'https://vid-player-xi.vercel.app/',
    image: VidplayerImage,
    category: 'Applications',
  },
  {
    title: 'Nike Store',
    description: 'A mock-up of an online store for Nike products.',
    link: 'https://shopnike-1.netlify.app/',
    image: NikeImage,
    category: 'Web Design',
  },
  {
    title: 'E-commerce Platform',
    description: 'An e-commerce platform for various products.',
    link: 'https://e-commerce-beta-opal.vercel.app/',
    image: ecommerceImage,
    category: 'Web Design',
  },
  {
    title: 'Personal Portfolio',
    description: 'A personal portfolio website to showcase my skills and projects.',
    link: 'https://divyaanshportfolio.netlify.app/',
    image: PortfolioImage,
    category: 'Web Design',
  },
  {
    title: 'Portfolio v2',
    description: 'An updated version of my personal portfolio.',
    link: 'https://profoliio.netlify.app/',
    image: Portfolio2Image,
    category: 'Web Design',
  },
  {
    title: 'Smart Clock',
    description: 'A smart clock application with multiple features.',
    link: 'https://clockio.netlify.app/',
    image: ClockImage,
    category: 'Applications',
  },
  {
    title: 'Ochi Project',
    description: 'A project for visualizing data with advanced analytics.',
    link: 'https://ochiframer.netlify.app/',
    image: ochiImage,
    category: 'Web Development',
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const ProjectSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-white mb-12">My Projects</h2>

       
        <div className="flex justify-center mb-12 space-x-4">
          <button
            className={`px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 ease-in-out ${
              activeCategory === 'All'
                ? 'bg-gradient-to-r from-teal-400 to-blue-500 text-white shadow-lg transform scale-105'
                : 'bg-gray-700 text-gray-300 hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 hover:text-white hover:shadow-lg'
            }`}
            onClick={() => setActiveCategory('All')}
          >
            All
          </button>
          <button
            className={`px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 ease-in-out ${
              activeCategory === 'Web Development'
                ? 'bg-gradient-to-r from-teal-400 to-blue-500 text-white shadow-lg transform scale-105'
                : 'bg-gray-700 text-gray-300 hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 hover:text-white hover:shadow-lg'
            }`}
            onClick={() => setActiveCategory('Web Development')}
          >
            Web Development
          </button>
          <button
            className={`px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 ease-in-out ${
              activeCategory === 'Web Design'
                ? 'bg-gradient-to-r from-teal-400 to-blue-500 text-white shadow-lg transform scale-105'
                : 'bg-gray-700 text-gray-300 hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 hover:text-white hover:shadow-lg'
            }`}
            onClick={() => setActiveCategory('Web Design')}
          >
            Web Design
          </button>
          <button
            className={`px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 ease-in-out ${
              activeCategory === 'Applications'
                ? 'bg-gradient-to-r from-teal-400 to-blue-500 text-white shadow-lg transform scale-105'
                : 'bg-gray-700 text-gray-300 hover:bg-gradient-to-r hover:from-teal-400 hover:to-blue-500 hover:text-white hover:shadow-lg'
            }`}
            onClick={() => setActiveCategory('Applications')}
          >
            Applications
          </button>
        </div>

        
        <Slider {...settings}>
          {filteredProjects.map((project, index) => (
            <div key={index} className="px-4">
              <div className="relative bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
                <div className="p-6 absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white">
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="text-sm mt-2 mb-4 text-gray-200">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-teal-300 underline transition duration-200 hover:text-teal-500"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProjectSection;
