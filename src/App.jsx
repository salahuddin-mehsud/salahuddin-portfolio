import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  useEffect(() => {
    // Enhanced Particle System
    const createParticles = () => {
      const container = document.querySelector('.particles-container');
      if (!container) return;

      // Clear existing particles
      container.innerHTML = '';

      const particleCount = 30;
      const colors = [
        'linear-gradient(45deg, #8245ec, #00f5ff)',
        'linear-gradient(45deg, #00f5ff, #ff2a6d)',
        'linear-gradient(45deg, #ff2a6d, #8245ec)'
      ];

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 8 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 8;
        const duration = 10 + Math.random() * 15;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.opacity = Math.random() * 0.4 + 0.1;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.background = color;
        
        container.appendChild(particle);
      }
    };

    // Scroll reveal animation
    const setupScrollAnimations = () => {
      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      revealElements.forEach(el => observer.observe(el));
    };

    createParticles();
    setupScrollAnimations();

    // Recreate particles on resize
    const handleResize = () => {
      createParticles();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="gradient-bg-main min-h-screen relative overflow-hidden">
      <div className="particles-container fixed inset-0 z-0 pointer-events-none"></div>
      <div className="grid-bg"></div>
      

      <div className="relative z-10">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;