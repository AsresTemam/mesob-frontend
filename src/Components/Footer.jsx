import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaUtensils } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top wave design */}
      <div className="bg-amber-500 h-1.5 w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-900" style={{
          clipPath: 'polygon(0 0, 5% 100%, 10% 0, 15% 100%, 20% 0, 25% 100%, 30% 0, 35% 100%, 40% 0, 45% 100%, 50% 0, 55% 100%, 60% 0, 65% 100%, 70% 0, 75% 100%, 80% 0, 85% 100%, 90% 0, 95% 100%, 100% 0)'
        }}></div>
      </div>
      
      {/* Main footer content */}
      <div className="container mx-auto px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Logo and about section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                <FaUtensils className="text-white text-xl" />
              </div>
              <h2 className="text-2xl font-bold">Mesob Restaurant</h2>
            </div>
            <p className="text-gray-400 mt-4">
              Experience authentic Ethiopian and Eritrean cuisine in a modern, welcoming atmosphere. 
              Our dishes are crafted with traditional recipes and the freshest ingredients.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.facebook.com/MesobethiopianRestauransheffield" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaFacebook className="text-white" />
              </a>
              <a href="https://twitter.com/mesobrestaurant" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaTwitter className="text-white" />
              </a>
              <a href="https://instagram.com/mesobrestaurant" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaInstagram className="text-white" />
              </a>
              <a href="https://youtube.com/@mesobrestaurant" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <FaYoutube className="text-white" />
              </a>
            </div>
          </div>
          
          {/* Opening hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Opening Hours
              <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-amber-500"></span>
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <span className="text-gray-400">Monday - Friday</span>
                <span className="text-amber-500">11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-gray-800 pb-3">
                <span className="text-gray-400">Saturday - Sunday</span>
                <span className="text-amber-500">9:00 AM - 11:00 PM</span>
              </li>
              <li className="pt-2 text-gray-400 italic">
                * Kitchen closes 30 minutes before closing time
              </li>
            </ul>
          </div>
          
          {/* Contact information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Contact Us
              <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-amber-500"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">123, Asmerom street, Cardif, UK</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-amber-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+44 29 2023 XXXX</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-amber-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@mesobrestaurant.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright bar */}
      <div className="border-t border-gray-800 mt-12">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Mesob Restaurant. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-500 text-sm">
                Designed with <span className="text-red-500">&hearts;</span> for the best dining experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer