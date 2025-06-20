import React, { useState, useEffect } from 'react';
import bgImage1 from '../assets/special-dish-banner.jpg';
import bgImage2 from '../assets/mesob2.jpg';
import bgImage3 from '../assets/mesob3.jpg';
import bgImage4 from '../assets/mesob4.jpg';
import bgImage5 from '../assets/photo1.jpg';
import bgImage6 from '../assets/photo2.jpg';

const Hero = () => {
  // Array of background images
  const backgroundImages = [
    bgImage1,
    bgImage2,
    bgImage3,
    bgImage4,
    bgImage5,
    bgImage6
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 500);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className='relative h-[85vh] w-full overflow-hidden'>
      {/* Background Images Container */}
      <div className='absolute inset-0'>
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
              index === currentImageIndex 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-110'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              transform: `translateX(${isTransitioning && index === currentImageIndex ? '-2%' : '0'})`,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10'></div>
      
      {/* Animated Pattern Overlay */}
      <div className='absolute inset-0 z-10 opacity-10'>
        <div className='w-full h-full' style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255, 255, 255, 0.05) 10px,
            rgba(255, 255, 255, 0.05) 20px
          )`
        }}></div>
      </div>

      {/* Content Container */}
      <div className='relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4'>
        {/* Animated Subtitle */}
        <h2 className='text-lg md:text-xl font-light mb-4 tracking-[0.3em] uppercase opacity-0 animate-fadeInUp animation-delay-200'>
          Where Luxury Meets Diner
        </h2>
        
        {/* Main Title with Glow Effect */}
        <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fadeInUp animation-delay-400'>
          <span className='inline-block transform hover:scale-105 transition-transform duration-300'>
            MESOB
          </span>
          <span className='block text-2xl md:text-4xl lg:text-5xl mt-2 text-amber-400'>
            RESTAURANT
          </span>
        </h1>
        
        {/* CTA Button with Hover Effects */}
        <button className='group relative bg-amber-400 hover:bg-amber-500 text-black font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl opacity-0 animate-fadeInUp animation-delay-600 overflow-hidden'>
          <span className='relative z-10'>BOOK A TABLE</span>
          <div className='absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300'></div>
        </button>

        {/* Scroll Indicator */}
        <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 animate-fadeIn animation-delay-800'>
          <div className='flex flex-col items-center'>
            <span className='text-xs tracking-widest mb-2'>SCROLL</span>
            <div className='w-[1px] h-12 bg-white/50 relative overflow-hidden'>
              <div className='absolute top-0 w-full h-4 bg-white animate-scrollDown'></div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className='absolute bottom-12 right-8 z-20 flex space-x-2'>
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-amber-400 w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scrollDown {
          0% {
            transform: translateY(-100%);
          }
          50% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-scrollDown {
          animation: scrollDown 2s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        .animation-delay-800 {
          animation-delay: 800ms;
        }
      `}</style>
    </div>
  );
};

export default Hero;