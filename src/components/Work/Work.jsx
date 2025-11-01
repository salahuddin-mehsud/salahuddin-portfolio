import React, { useState, useEffect, useRef } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleDescription = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  // Get first ~15 words for preview
  const getShortDescription = (text) => {
    const firstParagraph = text.split('\n')[0];
    const words = firstParagraph.split(' ');
    if (words.length > 15) {
      return words.slice(0, 15).join(' ') + '...';
    }
    return firstParagraph;
  };

  // Format full description
  const formatDescription = (text) => {
    return text.split('\n').map((line, index) => {
      if (line.trim() === '') return <br key={index} />;
      
      if (line.match(/[🚀💡🔧🏷️📈]/)) {
        return (
          <h4 key={index} className="text-white font-semibold text-base mt-4 mb-2 flex items-center">
            <span className="mr-2 text-[#8245ec]">{line.match(/[🚀💡🔧🏷️📈]/)[0]}</span>
            {line.replace(/[🚀💡🔧🏷️📈]/, '').trim()}
          </h4>
        );
      }
      
      if (line.trim().startsWith('•')) {
        return (
          <div key={index} className="flex items-start ml-4 mb-1">
            <span className="text-[#8245ec] mr-2 mt-1 text-sm">•</span>
            <span className="text-gray-300 text-sm flex-1">{line.substring(1).trim()}</span>
          </div>
        );
      }
      
      return (
        <p key={index} className="text-gray-300 text-sm leading-relaxed mb-3">
          {line}
        </p>
      );
    });
  };

  return (
    <section
      ref={sectionRef}
      id="work"
      className="py-16 lg:py-20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header - Classic */}
        <div className={`text-center mb-12 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            My Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#8245ec] to-[#00f5ff] mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Selected projects showcasing my development expertise
          </p>
        </div>

        {/* Two-Column Layout - Simplified */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Project Navigation */}
          <div className="lg:w-2/5">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Project List</h3>
              
              <div className="space-y-3">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => {
                      setActiveProject(index);
                      setExpandedProject(null);
                    }}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      activeProject === index
                        ? 'bg-white/10 border border-[#8245ec]/50'
                        : 'bg-white/5 hover:bg-white/10 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        activeProject === index 
                          ? 'bg-[#8245ec]' 
                          : 'bg-gray-700'
                      }`}>
                        <span className="text-white text-sm">#{index + 1}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-white text-sm mb-1 truncate">
                          {project.title}
                        </h4>
                        <p className="text-gray-400 text-xs truncate">
                          {project.tags.slice(0, 2).join(', ')}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Active Project Details */}
          <div className="lg:w-3/5">
            <div className={`transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`transition-all duration-500 ${
                    activeProject === index
                      ? 'opacity-100 block'
                      : 'opacity-0 hidden'
                  }`}
                >
                  <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                    {/* Project Header */}
                    <div className="bg-white/10 p-6 border-b border-white/10">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-[#8245ec] rounded-lg flex items-center justify-center">
                            <span className="text-white text-lg">🚀</span>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">
                              {project.title}
                            </h3>
                            <p className="text-gray-300 text-sm">
                              {project.tags.slice(0, 3).join(' • ')}
                            </p>
                          </div>
                        </div>
                        <div className="bg-green-500/20 px-3 py-1 rounded-full">
                          <span className="text-green-400 text-sm font-medium">
                            Live Project
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Project Body */}
                    <div className="p-6">
                      {/* Video Preview - Compact */}
                      {project.videoUrl && (
                        <div className="mb-6">
                          <div className="rounded-lg overflow-hidden bg-black">
                            <video
                              controls
                              className="w-full h-auto max-h-48 object-cover"
                              poster={project.videoThumbnail}
                            >
                              <source src={project.videoUrl} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        </div>
                      )}

                      {/* Project Info */}
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-[#8245ec] rounded flex items-center justify-center">
                            <span className="text-white text-xs">💻</span>
                          </div>
                          <div>
                            <div className="text-xs text-gray-400">Type</div>
                            <div className="text-white text-sm">Web App</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-[#00f5ff] rounded flex items-center justify-center">
                            <span className="text-white text-xs">⭐</span>
                          </div>
                          <div>
                            <div className="text-xs text-gray-400">Status</div>
                            <div className="text-white text-sm">Completed</div>
                          </div>
                        </div>
                      </div>

                      {/* Description with Expand/Collapse */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3 text-sm">Project Overview</h4>
                        <div className="text-gray-300">
                          {expandedProject === project.id 
                            ? formatDescription(project.description)
                            : (
                                <>
                                  <p className="text-sm mb-3">{getShortDescription(project.description)}</p>
                                  <button
                                    onClick={() => toggleDescription(project.id)}
                                    className="text-[#8245ec] font-medium hover:text-[#00f5ff] transition-colors duration-300 flex items-center space-x-1 text-sm"
                                  >
                                    <span>View Details</span>
                                    <svg 
                                      className="w-3 h-3 transition-transform duration-300"
                                      fill="none" 
                                      stroke="currentColor" 
                                      viewBox="0 0 24 24"
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                  </button>
                                </>
                              )
                          }
                          {expandedProject === project.id && (
                            <button
                              onClick={() => toggleDescription(project.id)}
                              className="text-[#8245ec] font-medium hover:text-[#00f5ff] transition-colors duration-300 mt-3 flex items-center space-x-1 text-sm"
                            >
                              <span>Show Less</span>
                              <svg 
                                className="w-3 h-3 transition-transform duration-300 rotate-180"
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Technologies - Compact */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3 text-sm">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key Features - Compact */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3 text-sm">Key Features</h4>
                        <div className="space-y-2">
                          {[
                            "Responsive design",
                            "Modern UI/UX",
                            "Scalable architecture",
                            "Performance optimized"
                          ].map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-[#8245ec] rounded-full"></div>
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-[#8245ec] text-white py-3 px-4 rounded-lg font-medium text-center transition-all duration-300 hover:bg-[#9245ec] flex items-center justify-center space-x-2 text-sm"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          <span>Source Code</span>
                        </a>
                        
                       
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Navigation Dots */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeProject === index
                    ? 'bg-[#8245ec] scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;