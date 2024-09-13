import React from 'react';
import {
  FaReact, FaJsSquare, FaCss3Alt, FaHtml5, FaNodeJs, FaGitAlt, FaBootstrap, FaJava, FaPython 
} from 'react-icons/fa';
import {
  SiNextdotjs, SiFirebase, SiTailwindcss, SiCsharp, SiMongodb, SiExpress, SiGithub, SiFigma, SiMysql, SiPostgresql, SiTypescript, SiReact ,SiAdobexd
} from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact size={40} className="text-blue-500" />, category: 'Frontend' },
  { name: 'React Native', icon: <SiReact size={40} className="text-blue-500" />, category: 'Frontend' },
  { name: 'Next.js', icon: <SiNextdotjs size={40} className="text-black" />, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} className="text-blue-600" />, category: 'Frontend' },
  { name: 'JavaScript', icon: <FaJsSquare size={40} className="text-yellow-500" />, category: 'Frontend' },
  { name: 'TypeScript', icon: <SiTypescript size={40} className="text-blue-500" />, category: 'Frontend' },
  { name: 'CSS3', icon: <FaCss3Alt size={40} className="text-blue-500" />, category: 'Frontend' },
  { name: 'HTML5', icon: <FaHtml5 size={40} className="text-orange-500" />, category: 'Frontend' },
  { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-500" />, category: 'Backend' },
  { name: 'Express', icon: <SiExpress size={40} className="text-gray-700" />, category: 'Backend' },
  { name: 'MongoDB', icon: <SiMongodb size={40} className="text-green-700" />, category: 'Database' },
  { name: 'MySQL', icon: <SiMysql size={40} className="text-blue-600" />, category: 'Database' },
  { name: 'PostgreSQL', icon: <SiPostgresql size={40} className="text-blue-800" />, category: 'Database' },
  { name: 'Java', icon: <FaJava size={40} className="text-red-500" />, category: 'Languages' },
  { name: 'Python', icon: <FaPython size={40} className="text-yellow-500" />, category: 'Languages' },
  { name: 'C#', icon: <SiCsharp size={40} className="text-purple-500" />, category: 'Languages' },
  { name: 'Firebase', icon: <SiFirebase size={40} className="text-yellow-500" />, category: 'Tools' },
  { name: 'Git', icon: <FaGitAlt size={40} className="text-red-500" />, category: 'Tools' },
  { name: 'GitHub', icon: <SiGithub size={40} className="text-black" />, category: 'Tools' },
  { name: 'Bootstrap', icon: <FaBootstrap size={40} className="text-purple-500" />, category: 'Tools' },
  { name: 'Figma', icon: <SiFigma size={40} className="text-pink-500" />, category: 'Design' },
  { name: 'Adobe XD', icon: <SiAdobexd size={40} className="text-red-500" />, category: 'Design' },
];

const Skills = () => {
  return (
    <section id="next-section" className="py-10 m-16">
      <h2 className="text-5xl font-bold text-center text-white mb-8">Skills</h2>
      <div className="container mx-auto">
        {['Frontend', 'Backend', 'Database', 'Languages', 'Tools', 'Design'].map((category) => (
          <div key={category} className="mb-4">
            <h3 className="text-2xl font-semibold text-white mb-4">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.filter(skill => skill.category === category).map((skill, index) => (
                <div key={index} className="bg-white bg-opacity-10 p-4 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transition-transform">
                  {skill.icon}
                  <span className="mt-2 text-lg text-white text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
