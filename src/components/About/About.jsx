import React, { useEffect, useRef } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';
import Resume from "../../assets/Salahuddin-Resume.pdf";

const About = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    // Add staggered animation delays
    const elements = document.querySelectorAll('.stagger-animate');
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 200}ms`;
    });
  }, []);

  return (
    <section
      id="about"
      className="py-16 lg:py-20 flex items-center justify-center section-spacing relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/2 left-3/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '6s'}}></div>
      
      <div className="flex flex-col lg:flex-row justify-between items-center gap-16 max-w-7xl w-full relative z-10">
        
        {/* Image Section - First on mobile, second on desktop */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end relative order-1 lg:order-2">
          <Tilt
            className="relative rounded-full" // Add rounded-full here
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1500}
            scale={1.05}
            transitionSpeed={1500}
            gyroscope={true}
            glareEnable={true}
            glareMaxOpacity={0.3}
            glareColor="#8245ec"
            glarePosition="all"
            glareBorderRadius="50%" // Add this prop to make glare circular
          >
            {/* Main Container with Animated Border */}
            <div className="relative rounded-full"> {/* Ensure this is rounded-full */}
              {/* Animated Border - Fixed */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-[#8245ec] via-[#00f5ff] to-[#ff2a6d] rounded-full animate-spin-slow"
                style={{ 
                  animation: 'spin 8s linear infinite',
                  width: 'calc(100% + 8px)',
                  height: 'calc(100% + 8px)',
                  top: '-4px',
                  left: '-4px'
                }}
              ></div>
              
              {/* Image Container */}
              <div className="relative rounded-full p-2 bg-gradient-to-br from-[#050414] to-[#0a051f] overflow-hidden"> {/* Added overflow-hidden */}
                <img
                  src={profileImage}
                  alt="Salahuddin Mehsud"
                  className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white/10 shadow-2xl glass-card-hover"
                />
              </div>
            </div>
            
            {/* Floating Tech Elements */}
            <div className="absolute -top-4 -left-4 glass-card px-4 py-2 rounded-full animate-float">
              <span className="text-sm font-semibold text-white flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                MERN Stack
              </span>
            </div>
            
            <div className="absolute -bottom-6 -right-6 glass-card px-4 py-2 rounded-full animate-float" style={{animationDelay: '2s'}}>
              <span className="text-sm font-semibold text-white flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                DevOps
              </span>
            </div>

            <div className="absolute top-1/2 -left-12 glass-card px-4 py-2 rounded-full animate-float" style={{animationDelay: '4s'}}>
              <span className="text-sm font-semibold text-white flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
                Full Stack
              </span>
            </div>
          </Tilt>
        </div>

        {/* Left Content - Enhanced - Second on mobile, first on desktop */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-8 order-2 lg:order-1">
          {/* Status Badge */}
          <div className="stagger-animate animate-slide-in-left inline-flex items-center space-x-3 glass-card px-6 py-3 rounded-full border border-green-500/30">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-400">Available for new opportunities</span>
          </div>
          
          {/* Main Title with Typewriter Effect */}
          <div className="space-y-4 stagger-animate animate-slide-in-left" style={{animationDelay: '200ms'}}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
              Hi, I'm{' '}
              <span className="text-gradient-primary block mt-2">
                SALAHUDDIN
              </span>
            </h1>
          </div>

          {/* Enhanced Typing Effect */}
          <div className="stagger-animate animate-slide-in-left" style={{animationDelay: '400ms'}}>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
              <span className="text-white">Building </span>
              <ReactTypingEffect
                text={[
                  'digital experiences.',
                  'scalable solutions.',
                  'innovative products.',
                  'the future web.',
                ]}
                speed={60}
                eraseSpeed={40}
                typingDelay={1000}
                eraseDelay={2500}
                cursorRenderer={(cursor) => (
                  <span className="text-gradient-primary font-bold">{cursor}</span>
                )}
                displayTextRenderer={(text) => (
                  <span className="text-gradient-primary font-bold">{text}</span>
                )}
              />
            </div>
          </div>

          {/* Enhanced About Text */}
          <div className="stagger-animate animate-slide-in-left" style={{animationDelay: '600ms'}}>
            <p className="text-xl text-gray-300 leading-relaxed glass-card p-8 rounded-3xl border-l-4 border-gradient-primary">
              Passionate <span className="text-gradient-primary font-semibold">Full-Stack Developer</span> with 2+ years of expertise in crafting exceptional digital experiences. 
              I specialize in modern web technologies, creating solutions that are both visually stunning and technically robust.
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="stagger-animate animate-slide-in-left flex flex-col sm:flex-row gap-4" style={{animationDelay: '800ms'}}>
            <a
              href={Resume}
              download="Salahuddin-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                📄 DOWNLOAD RESUME
                <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </span>
            </a>
            
            <a
              href="#contact"
              className="btn-secondary group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                💬 LET'S TALK
                <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          </div>

          {/* Quick Stats */}
          <div className="stagger-animate animate-slide-in-left grid grid-cols-3 gap-4 mt-8" style={{animationDelay: '1000ms'}}>
            {[
              { number: '2+', label: 'Years Experience' },
              { number: '15+', label: 'Technologies / tools' }
            ].map((stat, index) => (
              <div key={index} className="glass-card p-4 rounded-2xl text-center hover-lift">
                <div className="text-lg font-bold text-gradient-primary">{stat.number}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;