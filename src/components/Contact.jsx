import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';


import dubeyImg from '../assets/dubey.png'; 
import YashImg from '../assets/Yash.png';
import SanjuImg from '../assets/Sanju.png';

const testimonials = [
  {
    name: 'Gagan Arora',
    image: dubeyImg,
    text: 'Working with Divyansh was great! He excelled in a React AG Grid project where users could enter data, apply filters, and interact with the grid smoothly. His frontend skills and attention to detail were impressive!',
    date: '12 July, 2024'
  },
  {
    name: 'Abhyudaya Dubey',
    image: YashImg,
    text: 'Divyansh was hired to create a corporate identity for us, and we were very pleased with his work. He is highly experienced and attentive to client needs.',
    date: '20 June, 2022'
  },
  {
    name: 'Sanju Saharan',
    image: SanjuImg,
    text: 'I highly recommend Divyansh for any web development project. His skills and communication are excellent.',
    date: '29 Sept, 2024'
  },
];

const Contact = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedTestimonial(null);
  };

  return (
    <section id="contact" className="py-20 relative bg-gray-900">
      <div className={`container mx-auto text-center ${isModalOpen ? 'filter blur-lg' : ''}`}>
        
        <h3 className="text-4xl font-bold text-white mb-12">Testimonials</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition-transform transform hover:scale-105 hover:bg-gray-700"
              onClick={() => openModal(testimonial)}
            >
              <div className="flex items-start">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-xl font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400">{testimonial.text.substring(0, 50)}...</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <h2 className="text-4xl font-bold text-white mb-8">Get in Touch</h2>
        <div className="mb-10 text-white space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <FaEnvelope className="text-teal-400 text-3xl" />
            <p className="text-lg">
              <a href="mailto:divyanshsrivastav72@gmail.com" className="text-teal-400 hover:underline">divyanshsrivastav72@gmail.com</a>
            </p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <FaPhoneAlt className="text-teal-400 text-3xl" />
            <p className="text-lg">
              <a href="tel:+919560350477" className="text-teal-400 hover:underline">+91 9560350477</a>
            </p>
          </div>
        </div>

       
        <div className="flex justify-center space-x-8 mb-10">
          <a href="https://github.com/divyaannsh" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-400 transition-transform transform hover:scale-110">
            <FaGithub className="text-5xl" />
          </a>
          <a href="https://www.linkedin.com/in/divyansh-srivastav-a00127221/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-400 transition-transform transform hover:scale-110">
            <FaLinkedin className="text-5xl" />
          </a>
          <a href="https://x.com/SpongeeBob17" target="_blank" rel="noopener noreferrer" className="text-white hover:text-teal-400 transition-transform transform hover:scale-110">
            <FaTwitter className="text-5xl" />
          </a>
        </div>
      </div>

    
      {isModalOpen && selectedTestimonial && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg relative w-11/12 max-w-3xl">
            <button
              className="absolute top-2 right-4 text-2xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="flex items-start">
              <img
                src={selectedTestimonial.image}
                alt={selectedTestimonial.name}
                className="w-32 h-32 rounded-full mr-4"
              />
              <div>
                <h4 className="text-xl font-semibold">{selectedTestimonial.name}</h4>
                <p className="text-gray-400 text-sm mb-2">{selectedTestimonial.date}</p>
                <p className="text-gray-300">{selectedTestimonial.text}</p>
              </div>
            </div>
            <div className="text-teal-400 text-3xl mt-4 text-center">
              &ldquo;&rdquo;
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
