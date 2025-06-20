import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log(formData);
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-[#fff8f0] py-16">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-amber-500 opacity-5 -skew-y-2 z-0"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 relative">
          <h2 className="text-amber-600 text-lg font-medium mb-2 uppercase tracking-wider">Get In Touch</h2>
          <h1 className="text-5xl font-bold text-gray-800 mb-3 relative inline-block">
            Contact Us
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-amber-500 rounded-full"></span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            We'd love to hear from you! Whether you have a question about our menu, reservations, or anything else, our team is ready to answer all your questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-amber-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Our Location</h4>
                    <p className="text-gray-600 mt-1">123, Asmerom street, Cardif, UK</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <FaPhone className="text-amber-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone Number</h4>
                    <p className="text-gray-600 mt-1">+44 29 2023 XXXX</p>
                    <p className="text-gray-600">+44 77 9876 XXXX</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-amber-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email Address</h4>
                    <p className="text-gray-600 mt-1">info@mesobrestaurant.com</p>
                    <p className="text-gray-600">bookings@mesobrestaurant.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/MesobethiopianRestauransheffield" target="_blank" rel="noopener noreferrer" className="bg-amber-100 p-3 rounded-full text-amber-600 hover:bg-amber-200 transition-colors">
                    <FaFacebook className="text-xl" />
                  </a>
                  <a href="https://twitter.com/mesobrestaurant" target="_blank" rel="noopener noreferrer" className="bg-amber-100 p-3 rounded-full text-amber-600 hover:bg-amber-200 transition-colors">
                    <FaTwitter className="text-xl" />
                  </a>
                  <a href="https://instagram.com/mesobrestaurant" target="_blank" rel="noopener noreferrer" className="bg-amber-100 p-3 rounded-full text-amber-600 hover:bg-amber-200 transition-colors">
                    <FaInstagram className="text-xl" />
                  </a>
                  <a href="https://youtube.com/@mesobrestaurant" target="_blank" rel="noopener noreferrer" className="bg-amber-100 p-3 rounded-full text-amber-600 hover:bg-amber-200 transition-colors">
                    <FaYoutube className="text-xl" />
                  </a>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-4">Opening Hours</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">11:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday - Sunday</span>
                    <span className="font-medium">9:00 AM - 11:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-amber-200 focus:border-amber-500 transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-amber-200 focus:border-amber-500 transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-amber-200 focus:border-amber-500 transition-colors"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-amber-200 focus:border-amber-500 transition-colors"
                    placeholder="Tell us more about your inquiry..."
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="px-6 py-3 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors focus:outline-none focus:ring focus:ring-amber-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="rounded-xl overflow-hidden shadow-md h-[400px] mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.1231428034246!2d-3.179857684094319!3d51.48161397963237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1cb8742c46f5%3A0x7c3f333254292d13!2sCardiff%20CF10%2C%20UK!5e0!3m2!1sen!2sin!4v1624532916866!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Restaurant Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;