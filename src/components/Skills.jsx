import React, { useEffect, useRef, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaDatabase,
  FaJava,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { MdAnimation } from "react-icons/md";

// Data
const techSkills = [
  { name: "HTML", icon: <FaHtml5 className="text-white text-4xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-white text-4xl" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-white text-4xl" /> },
  { name: "React", icon: <FaReact className="text-white text-4xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-white text-4xl" /> },
  { name: "Animation", icon: <MdAnimation className="text-white text-4xl" /> },
  { name: "Java with DSA", icon: <FaJava className="text-white text-4xl" /> },
  { name: "Database", icon: <FaDatabase className="text-white text-4xl" /> },
];

const barSkills = [
  { name: "HTML", percent: 80 },
  { name: "JavaScript", percent: 75 },
  { name: "CSS", percent: 70 },
  { name: "Tailwind", percent: 85 },
];

const professionalSkills = [
  { name: "Team Work", percent: 90 },
  { name: "Creativity", percent: 80 },
  { name: "Project Management", percent: 55 },
  { name: "Communication", percent: 70 },
];

const Skills = () => {
  const [showOrangeCards, setShowOrangeCards] = useState(false);
  const [animateBars, setAnimateBars] = useState(false);
  const [animateCircles, setAnimateCircles] = useState(false);
  const [barCounts, setBarCounts] = useState(barSkills.map(() => 0));

  const orangeRef = useRef(null);
  const barRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowOrangeCards(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (orangeRef.current) observer.observe(orangeRef.current);
    return () => {
      if (orangeRef.current) observer.unobserve(orangeRef.current);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setAnimateBars(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (barRef.current) observer.observe(barRef.current);
    return () => {
      if (barRef.current) observer.unobserve(barRef.current);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setAnimateCircles(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (circleRef.current) observer.observe(circleRef.current);
    return () => {
      if (circleRef.current) observer.unobserve(circleRef.current);
    };
  }, []);

  useEffect(() => {
    if (animateBars) {
      const intervals = barSkills.map((skill, i) =>
        setInterval(() => {
          setBarCounts((prev) => {
            const updated = [...prev];
            if (updated[i] < skill.percent) {
              updated[i]++;
            }
            return updated;
          });
        }, 20)
      );
      return () => intervals.forEach(clearInterval);
    }
  }, [animateBars]);

  return (
    <section id="skills" className="px-4 py-16 bg-transparent scroll-mt-24">
     <h2 className="text-6xl text-center font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-10">
  MY Skills
</h2>

      {/* Tech Skills Cards */}
      <div ref={orangeRef} className="flex flex-wrap justify-center gap-6 mb-16">
        {techSkills.map((skill, i) => (
          <div
            key={i}
            className={`
              group w-28 h-32 rounded-t-3xl bg-pink-600 text-center 
              shadow-md shadow-orange-300 hover:shadow-lg hover:shadow-yellow-600
              flex flex-col items-center justify-center 
              transform transition-all duration-500 ease-out animate-float
              ${showOrangeCards ? "scale-100 opacity-100" : "scale-0 opacity-0"}
              hover:scale-110
            `}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="group-hover:scale-125 transition duration-300">
              {skill.icon}
            </div>
            <p className="text-sm font-semibold text-white mt-2">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      {/* Bar Skills */}
      <div ref={barRef} className="mb-16">
        <h3 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
          Technical Skills
        </h3>
        <div className="space-y-6 max-w-2xl mx-auto">
          {barSkills.map((skill, i) => (
            <div key={i}>
              <div className="flex justify-between mb-1">
                <span className="text-gray-800 font-medium">{skill.name}</span>
                <span className="text-indigo-500 font-semibold">
                  {barCounts[i]}%
                </span>
              </div>
              <div className="w-full bg-indigo-100 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-pink-400 via-fuchsia-500 to-indigo-500 h-3 rounded-full transition-all duration-1000"
                  style={{
                    width: animateBars ? `${skill.percent}%` : "0%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Skills Circles */}
      <div ref={circleRef}>
        <h3 className="text-3xl font-bold text-pink-600 mb-10 text-center">
          Professional Skills
        </h3>
        <div className="flex flex-wrap justify-center gap-16">
          {professionalSkills.map((skill, i) => {
            const radius = 55;
            const circumference = 2 * Math.PI * radius;
            const offset = animateCircles
              ? circumference - (circumference * skill.percent) / 100
              : circumference;

            return (
              <div key={i} className="flex flex-col items-center">
                <div className="relative w-28 h-28">
                  <svg width="130" height="130" className="transform -rotate-90">
                    <defs>
                      <linearGradient id="gradStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                    <circle
                      cx="70"
                      cy="70"
                      r={radius}
                      stroke="#e5e7eb"
                      strokeWidth="10"
                      fill="transparent"
                    />
                    <circle
                      cx="70"
                      cy="70"
                      r={radius}
                      stroke="url(#gradStroke)"
                      strokeWidth="10"
                      fill="transparent"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      strokeLinecap="round"
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <div className="absolute inset-0 m-16 flex items-center justify-center">
                    <p className="font-bold text-2xl text-indigo-600">
                      {skill.percent}%
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-lg font-bold text-purple-700">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;