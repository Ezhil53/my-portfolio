import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import HeroPic from '../assets/hero.svg';
import Navbar from '../Navbar/Navbar.jsx';
import Particles from '../StyleComps/Particles.jsx';
import Typewriter from '../StyleComps/TaglineTypewriter.jsx';

const techLogos = [
  { name: 'React', icon: '⚛️', color: '#61DAFB', size: 'text-4xl', position: { top: '15%', left: '10%' } },
  { name: 'JavaScript', icon: '👨‍💻', color: '#F7DF1E', size: 'text-3xl', position: { top: '25%', right: '15%' } },
  { name: 'HTML5', icon: '🎯', color: '#E34F26', size: 'text-3xl', position: { top: '45%', left: '8%' } },
  { name: 'CSS3', icon: '🎨', color: '#1572B6', size: 'text-3xl', position: { top: '65%', right: '12%' } },
  { name: 'Tailwind', icon: '☕', color: '#06B6D4', size: 'text-2xl', position: { top: '70%', left: '15%' } },
  { name: 'Node.js', icon: '🔄', color: '#339933', size: 'text-3xl', position: { top: '20%', right: '8%' } },
  { name: 'Git', icon: '🚀', color: '#F05032', size: 'text-2xl', position: { top: '80%', right: '20%' } },
  { name: 'VS Code', icon: '💻', color: '#007ACC', size: 'text-2xl', position: { top: '35%', left: '5%' } },
];

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <Particles
        particleColors={['#000', '#F8C471', '#F39C12', '#D35400']}
        particleCount={25}
        particleSpread={10}
        speed={0.07}
        particleBaseSize={4}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

      <Navbar />

      <section className="relative h-screen hero flex items-center justify-center bg-gradient-to-t from-orange-100 to-pink-100 px-6">
        {/* Floating Tech Icons */}
        <div className="absolute w-full h-full pointer-events-none z-0 hidden md:block">
          {techLogos.map((tech, index) => (
            <motion.div
              key={tech.name}
              className={`absolute ${tech.size}`}
              style={{ top: tech.position.top, left: tech.position.left, right: tech.position.right }}
              animate={{ y: [-20, 20, -20], rotate: [-5, 5, -5], scale: [1, 1.1, 1] }}
              transition={{
                duration: 4 + index * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.3,
              }}
              whileHover={{ scale: 1.3, rotate: 15, transition: { duration: 0.2 } }}
            >
              <div
                className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg"
                style={{ boxShadow: `0 8px 32px ${tech.color}20` }}
              >
                <span>{tech.icon}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="z-10 max-w-screen-xl mx-auto grid md:grid-cols-3 gap-10 ">
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="col-span-2 text-center  flex flex-col justify-center items-center gap-6 px-4 md:px-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <br />
              <span className="name">Ezhilarasu K!</span>
            </h1>
              <Typewriter />
            <p className="text-lg text-gray-700 md:w-[60%] w-[90%]">
              I am a passionate web developer with a keen eye for detail and a love for creating beautiful, functional websites.
            </p>

            
            <div className="grid sm:grid-cols-2 gap-4">
             
              <div className='flex items-center justify-center w-max mx-auto'>
                <a
                  href="https://drive.google.com/file/d/1szllrD2z6fENqcy-Gvkdc5QTF35o7y5P/view?usp=sharing"
                  target='_blank'
                  className='px-2 py-2 rounded-[30px] shadow-2xl resume-btn text-center flex items-center justify-between hover:scale-105 transition-all duration-300'
                >
                  <span className='px-2'>View Resume</span>
                  <span className='bg-white text-orange-500 p-1 resume-svg rounded-full transition-all duration-300'>
                 <ArrowUpRight className='h-5 w-5' />
                  </span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center sm:justify-start items-center">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="mailto:mahiezhil53@gmail.com"
                  className="bg-gradient-to-r from-red-500 to-pink-500 p-3 shadow-red-600/25 hover:shadow-red-500/25 rounded-full shadow-xl"
                >
                  <Mail className="text-white w-5 h-5" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://www.linkedin.com/in/ezhilarasuk/"
                  target="_blank"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-full shadow-xl hover:shadow-blue-500/25"
                >
                  <Linkedin className="text-white w-5 h-5" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://github.com/Ezhil53"
                  target="_blank"
                  className="bg-gradient-to-r from-gray-700 to-gray-800 p-3 rounded-full shadow-xl hover:shadow-gray-500/25"
                >
                  <Github className="text-white w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="hidden md:flex justify-center items-center"
          >
            <img src={HeroPic} alt="Hero" className="w-3/4 hover:scale-105 transition-transform duration-300" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
