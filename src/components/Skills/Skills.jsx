import React, { useState, useEffect, useRef } from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
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
      id="skills"
      className="pb-8 pt-2 lg:pb-20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header - Classic */}
        <div className={`text-center mb-12 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#8245ec] to-[#00f5ff] mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A focused collection of my technical expertise across different domains
          </p>
        </div>

        {/* Skills Navigation - Simple Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/5 rounded-lg p-1 inline-flex flex-wrap justify-center">
            {SkillsInfo.map((category, index) => (
              <button
                key={category.title}
                onClick={() => setActiveCategory(index)}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-300 text-sm ${
                  activeCategory === index
                    ? 'bg-white text-gray-900 shadow-md'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid - Compact and Clean */}
        <div className={`transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                {SkillsInfo[activeCategory].title}
              </h3>
              <p className="text-gray-400 text-sm">
                {SkillsInfo[activeCategory].skills.length} technologies
              </p>
            </div>

            {/* Compact Skills Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
              {SkillsInfo[activeCategory].skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group"
                >
                  {/* Skill Card */}
                  <div className="bg-white/5 rounded-lg p-3 text-center transition-all duration-300 hover:bg-white/10 border border-transparent hover:border-white/20">
                    {/* Skill Icon */}
                    <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-white/10 flex items-center justify-center">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-5 h-5"
                      />
                    </div>

                    {/* Skill Name */}
                    <h4 className="font-medium text-white text-xs mb-2">
                      {skill.name}
                    </h4>

                    {/* Simple Skill Level */}
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {SkillsInfo.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeCategory === index
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

export default Skills;