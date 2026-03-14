import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import EMSImage from '../assets/ems.jpg';
import nextAuthImage from '../assets/next.auth.jpg';
import AuthenTrack from '../assets/Authentrack.png';
import HealthCare from '../assets/HealthCare.png';

const projects = [
  {
    title: 'AuthenTrack',
    description:
      'AuthenTrack is a secure authentication and employee tracking system with login/signup, role-based access, and activity monitoring.',
    status: 'Completed Project',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/yashch3101/AuthenTrack',
    live: 'https://authentrack.kesug.com',
    image: AuthenTrack,
    direction: 'left',
  },

  {
    title: 'PCOD Care AI App',
    description:
      'Secure authentication system with signup/login and MongoDB backend using MERN stack.',
    status: 'Completed Project',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    github: 'https://github.com/SupriyaKumari16/pcod_healthcares',
    live: 'https://pcod-healthcare.vercel.app/',
    image: HealthCare,
    direction: 'right',
  },

  {
  title: 'Employee Management System',
  description:
    'Role-based employee management system where admin can assign tasks, track employee progress, and manage work status.',
  status: 'Completed Project',
  tech: ['React.js', 'JavaScript', 'CSS'],
  github: 'https://github.com/SupriyaKumari16/Manage_System',
  live: '#',
  image: EMSImage,
  direction: 'left',
},

  {
    title: 'NextAuth Login Signup (MERN)',
    description:
      'Authentication system with secure login and signup functionality using MERN stack and user session handling.',
    status: 'Completed Project',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    github: 'https://github.com/SupriyaKumari16/next-auth',
    live: '#',
    image: nextAuthImage,
    direction: 'right',
  },
];

const Project = () => {
  return (
    <div
      className="py-16 px-4 md:px-20 bg-transparent font-extrabold scroll-mt-24"
      id="projects"
    >
      <h2 className="text-center text-5xl font-bold uppercase bg-gradient-to-r from-indigo-700 via-violet-600 to-rose-500 bg-clip-text text-transparent">
        My Projects
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-4 font-bold text-pink-600">
        Some of my best projects with technologies used and links.
      </p>

      <div className="mt-16 space-y-24">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              project.direction === 'right' ? 'md:flex-row-reverse' : ''
            }`}
          >

            {/* Hanging Card */}
            <div className="md:w-1/2 flex flex-col items-center relative group transform rotate-[-3deg] hover:rotate-0 transition duration-500">

              {/* Pin + Threads */}
              <div className="absolute -top-9 z-20 flex flex-col items-center">
                <div className="w-5 h-5 bg-pink-700 rounded-full z-10"></div>

                <div className="relative w-0 h-0">
                  <div className="absolute -left-15 top-4 w-15 h-[1.5px] bg-indigo-600 -rotate-[30deg] origin-top-left" />
                  <div className="absolute -right-15 top-4 w-15 h-[1.5px] bg-indigo-600 rotate-[30deg] origin-top-right" />
                </div>
              </div>

              {/* Card */}
              <div className="bg-white border-2 border-indigo-600 shadow-lg rounded-2xl p-3 w-full">

                <div className="relative bg-gray-100 rounded-xl overflow-hidden">

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-8 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="text-white text-5xl hover:scale-110 transition" />
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGlobe className="text-white text-5xl hover:scale-110 transition" />
                    </a>

                  </div>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full rounded-xl transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-500"
                  />

                </div>

                <div className="p-5">
                  <p className="text-pink-500 text-m font-semibold mb-2">
                    {project.status}
                  </p>

                  <h3 className="text-lg font-bold text-amber-600 mb-2">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((item, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 text-sm font-semibold text-blue-700 px-3 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Right Text */}
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-indigo-700 mb-2">
                {project.title}
              </h3>

              <p className="text-red-900 mb-4 font-bold">
                {project.description}
              </p>

              <div className="flex gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white px-4 py-2 rounded-md hover:scale-95 transition"
                >
                  Github
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:scale-95 transition"
                >
                  Live Demo
                </a>

              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;