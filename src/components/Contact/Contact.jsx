import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTwitter, FaLinkedin, FaGithub, FaTimes, FaCalendarAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    user_email: "",
    user_name: "",
    subject: "",
    message: ""
  });
  const [scheduleData, setScheduleData] = useState({
    user_name: "",
    user_email: "",
    call_date: "",
    call_time: "",
    timezone: "UTC",
    call_purpose: ""
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleScheduleChange = (e) => {
    setScheduleData({
      ...scheduleData,
      [e.target.name]: e.target.value
    });
  };

  // Generate time slots
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push(timeString);
      }
    }
    return slots;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Add loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>';
    submitBtn.disabled = true;

    emailjs
      .sendForm(
        "service_acpkwv4",
        "template_inpppbf",
        form.current,
        "dppIoVkPKCNXcTejl"
      )
      .then(
        () => {
          setIsSent(true);
          setFormData({ user_email: "", user_name: "", subject: "", message: "" });
          submitBtn.innerHTML = 'Message Sent! 🎉';
          submitBtn.classList.add('bg-green-600');
          
          toast.success("Message sent successfully! I'll get back to you soon.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });

          setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('bg-green-600');
          }, 3000);
        },
        (error) => {
          console.error("Error sending message:", error);
          submitBtn.innerHTML = 'Failed - Try Again';
          submitBtn.classList.add('bg-red-600');
          
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });

          setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('bg-red-600');
          }, 3000);
        }
      );
  };

  const scheduleCall = (e) => {
    e.preventDefault();

    // Add loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>';
    submitBtn.disabled = true;

    // Create a temporary form for scheduling
    const scheduleForm = {
      user_name: scheduleData.user_name,
      user_email: scheduleData.user_email,
      call_date: scheduleData.call_date,
      call_time: scheduleData.call_time,
      timezone: scheduleData.timezone,
      call_purpose: scheduleData.call_purpose,
      subject: `Call Scheduling Request from ${scheduleData.user_name}`,
      message: `Call Scheduling Details:
Name: ${scheduleData.user_name}
Email: ${scheduleData.user_email}
Preferred Date: ${scheduleData.call_date}
Preferred Time: ${scheduleData.call_time} (${scheduleData.timezone})
Purpose: ${scheduleData.call_purpose}`
    };

    emailjs
      .send(
        "service_acpkwv4",
        "template_inpppbf", // You might want to create a separate template for scheduling
        scheduleForm,
        "dppIoVkPKCNXcTejl"
      )
      .then(
        () => {
          submitBtn.innerHTML = 'Scheduled! 🎉';
          submitBtn.classList.add('bg-green-600');
          
          toast.success("Call scheduled successfully! I'll confirm the timing via email.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });

          setScheduleData({
            user_name: "",
            user_email: "",
            call_date: "",
            call_time: "",
            timezone: "UTC",
            call_purpose: ""
          });
          
          setTimeout(() => {
            setIsScheduleModalOpen(false);
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('bg-green-600');
          }, 3000);
        },
        (error) => {
          console.error("Error scheduling call:", error);
          submitBtn.innerHTML = 'Failed - Try Again';
          submitBtn.classList.add('bg-red-600');
          
          toast.error("Failed to schedule call. Please try again.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });

          setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('bg-red-600');
          }, 3000);
        }
      );
  };

  const contactMethods = [
    {
      icon: <SiGmail className="text-xl" />,
      title: "Email",
      value: "salahudinsaani4@gmail.com",
      link: "mailto:salahudinsaani4@gmail.com",
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      title: "LinkedIn",
      value: "salahuddinmehsud",
      link: "https://www.linkedin.com/in/salahuddinmehsud/",
    },
    {
      icon: <FaGithub className="text-xl" />,
      title: "GitHub",
      value: "salahuddin-mehsud",
      link: "https://github.com/salahuddin-mehsud",
    },
    {
      icon: <FaTwitter className="text-xl" />,
      title: "Twitter",
      value: "@salahudinmehsud",
      link: "https://x.com/salahudinmehsud",
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-16 lg:py-20 relative overflow-hidden"
    >
      <ToastContainer />

      {/* Schedule Call Modal */}
      {isScheduleModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-xl p-6 w-full max-w-md border border-white/10">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <FaCalendarAlt className="text-[#8245ec]" />
                Schedule a Call
              </h3>
              <button
                onClick={() => setIsScheduleModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes className="text-lg" />
              </button>
            </div>

            <form onSubmit={scheduleCall} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2 text-sm">Your Name</label>
                  <input
                    type="text"
                    name="user_name"
                    value={scheduleData.user_name}
                    onChange={handleScheduleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#8245ec] transition-all duration-300 text-sm"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2 text-sm">Email Address</label>
                  <input
                    type="email"
                    name="user_email"
                    value={scheduleData.user_email}
                    onChange={handleScheduleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#8245ec] transition-all duration-300 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2 text-sm">Preferred Date</label>
                  <input
                    type="date"
                    name="call_date"
                    value={scheduleData.call_date}
                    onChange={handleScheduleChange}
                    min={new Date().toISOString().split('T')[0]}
                    required
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#8245ec] transition-all duration-300 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2 text-sm">Preferred Time</label>
                  <select
                    name="call_time"
                    value={scheduleData.call_time}
                    onChange={handleScheduleChange}
                    required
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#8245ec] transition-all duration-300 text-sm"
                  >
                    <option value="">Select a time</option>
                    {generateTimeSlots().map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2 text-sm">Timezone</label>
                  <select
                    name="timezone"
                    value={scheduleData.timezone}
                    onChange={handleScheduleChange}
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#8245ec] transition-all duration-300 text-sm"
                  >
                    <option value="UTC">UTC</option>
                    <option value="EST">EST</option>
                    <option value="PST">PST</option>
                    <option value="CST">CST</option>
                    <option value="IST">IST</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2 text-sm">Purpose of Call</label>
                  <textarea
                    name="call_purpose"
                    value={scheduleData.call_purpose}
                    onChange={handleScheduleChange}
                    placeholder="Briefly describe what you'd like to discuss..."
                    rows="3"
                    required
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#8245ec] transition-all duration-300 resize-none text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#8245ec] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#9245ec] transition-all duration-300 text-sm"
              >
                Schedule Call
              </button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-gray-400 text-xs">
                I'll confirm the call timing and send meeting details via email
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header - Classic */}
        <div className={`text-center mb-12 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#8245ec] to-[#00f5ff] mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's connect and build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Information */}
          <div className={`space-y-6 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              
              <p className="text-gray-300 text-sm mb-6">
                Feel free to reach out through any of these platforms. I'm always open to discussing new opportunities.
              </p>

              {/* Contact Methods */}
              <div className="space-y-3">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-4 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-[#8245ec] transition-all duration-300"
                  >
                    <div className="p-2 rounded-lg bg-[#8245ec] text-white group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium text-sm">{method.title}</div>
                      <div className="text-gray-300 text-xs">{method.value}</div>
                    </div>
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                <div className="text-lg font-bold text-[#8245ec] mb-1">2+</div>
                <div className="text-gray-400 text-xs">Years Experience</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                <div className="text-lg font-bold text-[#00f5ff] mb-1">24h</div>
                <div className="text-gray-400 text-xs">Response Time</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-2">Send a Message</h3>
              <p className="text-gray-400 text-sm mb-6">Fill out the form and I'll get back to you soon</p>

              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2 text-sm">Your Name</label>
                    <input
                      type="text"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      required
                      className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#8245ec] transition-all duration-300 text-sm"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2 text-sm">Email Address</label>
                    <input
                      type="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#8245ec] transition-all duration-300 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2 text-sm">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#8245ec] transition-all duration-300 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2 text-sm">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or inquiry..."
                    rows="4"
                    required
                    className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-[#8245ec] transition-all duration-300 resize-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#8245ec] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#9245ec] transition-all duration-300 text-sm"
                >
                  Send Message
                </button>
              </form>

              {/* Form Footer */}
              <div className="mt-4 text-center">
                <p className="text-gray-400 text-xs">
                  Your information is secure and will never be shared
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Simple Call to Action */}
        <div className={`text-center mt-12 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10 inline-block max-w-2xl">
            <h4 className="text-lg font-semibold text-white mb-2">Ready to Start working together?</h4>
            <p className="text-gray-300 text-sm mb-4">
              Let's schedule a call to discuss and explore how we can work together.
            </p>
            <button
              onClick={() => setIsScheduleModalOpen(true)}
              className="inline-flex items-center space-x-2 bg-[#8245ec] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#9245ec] transition-all duration-300 text-sm"
            >
              <FaCalendarAlt className="text-sm" />
              <span>Schedule a Call</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;