import React from 'react';
import { 
  FaReact, FaNodeJs, FaFigma, FaGitAlt, FaGithub, FaJsSquare 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiPostgresql, SiFirebase, SiTailwindcss, SiDotnet, SiCsharp, SiMongodb, SiVisualstudio, SiNeovim, SiMysql 
} from 'react-icons/si';

const projects = [
  {
    title: 'Tech Textile (Capstone Project)',
    description: 'TechTextile is an innovative B2B and B2C e-commerce platform specializing in yarn and fabric products. Our mission is to bridge the gap between Indian textile manufacturers and North American buyers, leveraging the substantial import market and facilitating global trade.',
    image: 'images/Tech Textile 1.png',
    demoLink: 'https://techtextile.vercel.app/',
    codeLink: 'https://github.com/MeetGodad/techtextile/blob/master/README.md',
    figmaLink: 'https://www.figma.com/proto/ylGaltyfZVWfIxroxmOKA1/Tech-Textile?node-id=78-95&node-type=canvas&t=3hKqN9G4TLdTJW8l-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=8%3A169&show-proto-sidebar=1',
    techStack: ['JavaScript', 'React', 'Next.js', 'Node', 'PostgreSQL', 'NeonDatabase', 'Firebase', 'Figma', 'Git', 'GitHub', 'TailwindCSS'],
  },
  {
    title: '.NET Project of Event Application',
    description: 'Meet_Final_Of_MAUIApp is a MAUI desktop application designed to manage concert events. The application connects to a database to store and retrieve event information, providing a user-friendly graphical user interface (GUI) for interaction. This project integrates various elements from previous assignments to create a cohesive and functional application.',
    image: 'images/NETMAUIAPP.png',
    demoLink: '',
    codeLink: 'https://github.com/MeetGodad/Meet_Final_Of_MAUIApp/blob/master/README.md',
    techStack: ['C#', '.NET', 'MySQL', 'Visual Studio IDE', 'Git', 'GitHub'],
  },
  {
    title: 'Healthy Eats',
    description: 'A web application designed to create personalized meal plans that cater to your body\'s needs, not just your cravings.',
    image: 'images/HealthyEats.jpg',
    demoLink: 'https://healthyeats.vercel.app/',
    codeLink: 'https://github.com/MeetGodad/healthyeats/blob/master/README.md',
    techStack: ['JavaScript', 'React', 'Node', 'Next.js', 'Firebase', 'Figma', 'Git', 'GitHub', 'TailwindCSS'],
  },
  {
    title: 'Tactical Tic Tac Toe',
    description: 'A Mobile Game Application that allows the user to play Tic Tac Toe with a twist. The game is played on a 3x3 grid, but the player can only win by getting 3 in a row on the 3x3 grid they are playing on.',
    image: 'images/Gameboard.jpg',
    demoLink: '',
    codeLink: 'https://github.com/MeetGodad/TacTical-TicTacToe/blob/main/README.md',
    figmaLink: 'https://www.figma.com/proto/EqAN00RMcquH1XeMJAIrZC/Tactical-TicTacToe-App?node-id=1-4&node-type=canvas&t=eek7AuefN9NWE5gt-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A4',
    techStack: ['React Native', 'JavaScript', 'React Native Async Storage', 'Figma', 'Git', 'GitHub'],
     isMobileApp: true,
  },
  {
    title: 'Recreation Center-Figma Wireframe',
    description: 'A Figma wireframe design for a recreation center Mobile Application. The design includes a Home Page, Schedule Page, Event Page ,Login Page,Payment Page, and Profile Page.',
    image: 'images/RecreationCenter.png',
    demoLink: '',
    codeLink: '',
    figmaLink: 'https://www.figma.com/proto/Gl0UKwXGFf6Io0cIGd0RIs/P3-Creative-Catalysts--Wireframe?node-id=38-20&node-type=canvas&t=FSaeMVLNoAeGLHQD-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A11',
    techStack: ['Figma'],
  }
];

const techIcons = {
  'React': <FaReact size={20} className="text-blue-500" />,
  'React Native': <FaReact size={20} className="text-blue-800" />,
  'React Native Async Storage': <FaReact size={20} className="text-blue-800" />,
  'Next.js': <SiNextdotjs size={20} className="text-black" />,
  'Node': <FaNodeJs size={20} className="text-green-500" />,
  'PostgreSQL': <SiPostgresql size={20} className="text-blue-800" />,
  'Firebase': <SiFirebase size={20} className="text-yellow-500" />,
  'Figma': <FaFigma size={20} className="text-pink-500" />,
  'Git': <FaGitAlt size={20} className="text-red-500" />,
  'GitHub': <FaGithub size={20} className="text-black" />,
  'TailwindCSS': <SiTailwindcss size={20} className="text-blue-600" />,
  '.NET': <SiDotnet size={20} className="text-purple-500" />,
  'C#': <SiCsharp size={20} className="text-purple-500" />,
  'MongoDB': <SiMongodb size={20} className="text-green-700" />,
  'JavaScript': <FaJsSquare size={20} className="text-yellow-500" />,
  'Visual Studio IDE': <SiVisualstudio size={20} className="text-blue-500" />,
  'NeonDatabase': <SiNeovim size={20} className="text-green-500" />, 
  'MySQL': <SiMysql size={20} className="text-blue-600" />
};

const Projects = () => {
  return (
    <section className="py-16 m-20 text-white">
      <h2 className="text-5xl font-bold text-center mb-16">Projects</h2>
      <div className="space-y-16">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center`}
          >
            {/* Project Image */}
          <div className="md:w-1/2 w-full h-auto flex justify-center items-center">
            {project.image ? (
              <img 
                src={project.image} 
                alt={project.title} 
                className={`w-full ${project.isMobileApp ? 'max-h-96' : 'max-h-96 shadow-lg'} object-contain rounded-lg `}
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg shadow-lg">
                <span className="text-gray-500">No Image Available</span>
              </div>
            )}
          </div>

            {/* Project Details */}
            <div className="md:w-1/2 w-full mt-8 md:mt-0 md:px-12 text-center md:text-left">
              <h3 className="text-3xl font-semibold mb-4">{project.title}</h3>
              <p className="text-lg mb-6">{project.description}</p>
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Tech Stack:</h4>
                <div className="flex flex-wrap justify-center md:justify-start">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="flex items-center text-sm bg-gray-700 text-white rounded-full px-3 py-1 mr-2 mb-2"
                    >
                      {techIcons[tech]} <span className="ml-2">{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-center md:justify-start">
                {project.demoLink && (
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-4 hover:bg-blue-600 transition"
                  >
                    View Demo
                  </a>
                )}
                {project.codeLink && (
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition"
                  >
                    Source Code
                  </a>
                )}
                {project.figmaLink && (
                  <a 
                    href={project.figmaLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-pink-500 text-white py-2 px-4 rounded-lg ml-4 hover:bg-pink-600 transition"
                  >
                    Figma Design
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;