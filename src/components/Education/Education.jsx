import React, { useState, useEffect, useRef } from "react";
import { education } from "../../constants";

const Education = () => {
  const [activeCert, setActiveCert] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      ref={sectionRef}
      id="education"
      className="py-16 lg:py-20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Certifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#8245ec] to-[#00f5ff] mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My journey through professional certifications and continuous learning
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Navigation */}
          <div className="lg:w-2/5">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Certifications</h3>
              
              <div className="space-y-3">
                {education.map((edu, index) => (
                  <button
                    key={edu.id}
                    onClick={() => setActiveCert(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      activeCert === index
                        ? 'bg-white/10 border border-[#8245ec]'
                        : 'bg-white/5 hover:bg-white/10 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        activeCert === index 
                          ? 'bg-[#8245ec]' 
                          : 'bg-gray-700'
                      }`}>
                        <img
                          src={edu.img}
                          alt={edu.school}
                          className="w-5 h-5 object-contain filter brightness-0 invert"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-white text-sm mb-1 truncate">
                          {edu.school}
                        </h4>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Stats Summary */}
              <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="text-white font-medium mb-3 text-sm">Learning Summary</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Certifications', value: education.length },
                    { label: 'Avg Grade', value: '97%' },
                    { label: 'Duration', value: '48h+' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg font-bold text-[#8245ec] mb-1">
                        {stat.value}
                      </div>
                      <div className="text-gray-400 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:w-3/5">
            <div className={`transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className={`transition-all duration-500 ${
                    activeCert === index
                      ? 'opacity-100 block'
                      : 'opacity-0 hidden'
                  }`}
                >
                  <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                    {/* Header */}
                    <div className="bg-white/10 p-6 border-b border-white/10">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-white rounded-lg p-2">
                            <img
                              src={edu.img}
                              alt={edu.school}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">
                              {edu.degree}
                            </h3>
                            <p className="text-gray-300 text-sm">
                              {edu.school}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6">
                      {/* Grade and Details */}
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-[#8245ec] rounded flex items-center justify-center">
                            <span className="text-white text-sm font-bold">A+</span>
                          </div>
                          <div>
                            <div className="text-xs text-gray-400">Grade</div>
                            <div className="text-white font-medium text-sm">{edu.grade}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-[#00f5ff] rounded flex items-center justify-center">
                            <span className="text-white text-sm font-bold">✓</span>
                          </div>
                          <div>
                            <div className="text-xs text-gray-400">Status</div>
                            <div className="text-white font-medium text-sm">Completed</div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3 text-sm">Course Overview</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {edu.desc}
                        </p>
                      </div>

                      {/* Skills */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3 text-sm">Key Competencies</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.desc.split(' ').slice(0, 6).map((word, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20"
                            >
                              {word.replace(/[.,]/g, '')}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Certificate Image - Show directly if certImg exists */}
                      {edu.certImg && (
                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3 text-sm">Certificate</h4>
                          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                            <img
                              src={edu.certImg}
                              alt="Certificate"
                              className="w-full h-auto rounded-lg"
                            />
                           <a
                            href={edu.certEmail}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-[#8245ec] text-white py-3 px-4 rounded-lg font-medium text-center hover:bg-[#9245ec] transition-all duration-300 text-sm"
                          >
                            View Certificate
                          </a>
                          </div>
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row gap-3">
                        {edu.certLink && !edu.certImg && (
                          <a
                            href={edu.certLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-[#8245ec] text-white py-3 px-4 rounded-lg font-medium text-center hover:bg-[#9245ec] transition-all duration-300 text-sm"
                          >
                            View Certificate
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {education.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCert(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeCert === index
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

export default Education;