import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 lg:py-20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Clean Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#8245ec] to-[#00f5ff] mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey through innovative roles.
          </p>
        </div>

        {/* Modern Card Layout - No Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="group"
            >
              {/* Main Experience Card */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                
                {/* Header with Company Logo and Details */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-lg p-2 flex-shrink-0">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {experience.role}
                    </h3>
                    <p className="text-[#8245ec] font-semibold mb-2 text-sm">
                      {experience.company}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {experience.date}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {experience.desc}
                </p>

                {/* Skills Section */}
                <div>
                  <h4 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Career Progress Summary */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8 bg-white/5 rounded-xl p-6 border border-white/10">
            {[
              { number: experiences.length, label: 'Roles' },
              { number: '2+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl font-bold text-[#8245ec] mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;