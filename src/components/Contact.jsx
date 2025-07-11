import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Reset thank you after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);

    // Submit form manually
    e.target.submit();
  };

  return (
    <section id="contact" className="scroll-mt-24 py-16 bg-transparent text-[#1e1e1e]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-pink-700 mb-4">Contact Me</h2>
        <p className="text-center max-w-xl mx-auto text-sm md:text-base font-semibold text-gray-700 mb-12">
          A versatile developer with hands-on expertise in modern technologies,
          tools, and frameworks, dedicated to building efficient, scalable, and user-centric solutions.
        </p>

        {/* --- Contact Info Cards --- */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Email */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#fce8e6] shadow-md border-2 border-purple-400 transform transition duration-300 hover:scale-105">
            <MdEmail size={30} className="text-[#D93025]" />
            <a
              href="mailto:yourmail@example.com"
              className="text-sm md:text-base text-gray-500 font-medium"
            >
              yourmail@example.com
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#fff2e8] shadow-md border-2 border-purple-400 transform transition duration-300 hover:scale-105">
            <FaGithub size={30} className="text-[#333]" />
            <a
              href="https://github.com/SupriyaKumari16"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base text-gray-500 font-medium"
            >
              github.com/yourprofile
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-[#e8f0fe] shadow-md border-2 border-purple-400 transform transition duration-300 hover:scale-105">
            <FaLinkedin size={30} className="text-[#0A66C2]" />
            <a
              href="https://www.linkedin.com/in/supriya-kumari-9257aa281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm md:text-base text-gray-500 font-medium"
            >
              linkedin.com/in/yourprofile
            </a>
          </div>
        </div>

        {/* --- Contact Form --- */}
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            action="https://formsubmit.co/supriyakumarigdg@gmail.com"
            method="POST"
            className="w-full max-w-xl bg-[#fff2e8] backdrop-blur-lg rounded-2xl px-6 py-8 
                transition-transform transform hover:scale-[1.01] 
                border-2 border-purple-300 
                shadow-[0_0_15px_#e9d5ff,0_0_30px_#e9d5ff] 
                hover:shadow-[0_0_24px_#d8b4fe,0_0_40px_#d8b4fe]"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://yourportfolio.com/thank-you" />

            <label className="block mb-2 text-gray-700 font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="full name"
              className="w-full p-3 mb-4 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none"
            />

            <label className="block mb-2 text-gray-700 font-medium">Your Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="user@gmail.com"
              className="w-full p-3 mb-4 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none"
            />

            <label className="block mb-2 text-gray-700 font-medium">Your Message</label>
            <textarea
              name="message"
              rows="4"
              required
              placeholder="I’d love to your coding skills and layout structure!"
              className="w-full p-3 mb-6 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none"
            />

            <div className="relative w-full flex flex-col items-center">
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-pink-400 via-pink-500 to-purple-500 
                   hover:from-pink-300 hover:to-purple-600 
                   text-white font-semibold rounded-md 
                   transition-all duration-300"
              >
                Send Message <span className="ml-1">🖊️</span>
              </button>

              {submitted && (
                <span className="absolute -top-6 text-sm text-pink-600 font-semibold animate-bounce transition-all duration-300">
                  Thank You! 🎉
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;


