import React from 'react';
import { Award, GraduationCap, UserPlus } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: "easeInOut" } },
  whileHover: { scale: 1.02, y: -5, transition: { duration: 0.2 } },
};

const AboutSection = () => {
  return (
    <div id="about" className="min-h-screen bg-gradient-to-br from-orange-100 to-pink-100 p-6">
      <div className="text-center pt-20">
        <h1 className="text-black text-5xl font-bold leading-15">About Me</h1>
        <p className="text-gray-500">Know more!</p>
      </div>

      <div className="max-w-6xl mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">

          {/* Profile Card */}
          <motion.div
            className="lg:col-span-2 rounded-3xl p-8 text-gray-800 relative overflow-hidden cursor-pointer shadow-lg hover:shadow-xl"
            style={{ backgroundColor: '#f3f0ff' }}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="whileHover"
            viewport={{ once: true }}
          >
            <div className="relative z-10">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl font-bold text-purple-700 border border-purple-200 shadow-lg">
                  EK
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold mb-2 text-gray-800">Ezhilarasu K</h1>
                  <p className="text-purple-700 text-lg font-medium">Web Developer</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-base">
                Enthusiastic Web Developer with internship experience in designing responsive websites. 
                Strong front-end and back-end technologies skills. Looking for a position where I can 
                acquire new skills and add value to company growth.
              </p>
            </div>
          </motion.div>

          {/* Fun Fact */}
          <motion.div
            className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-6 flex items-center cursor-pointer shadow-lg hover:shadow-xl"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="whileHover"
            viewport={{ once: true }}
          >
            <div>
            <h3 className="font-semibold mb-3 text-gray-800 text-lg">Fun Fact 🚀</h3>
            <p className="text-pink-700 text-base mb-4">
              Improved business efficiency by 30% through responsive design implementations.
            </p>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl p-6 shadow-lg hover:shadow-xl"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="whileHover"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="font-bold text-gray-800 text-xl">Experience</h3>
            </div>
            <p className="text-base text-blue-600 font-medium">Web Developer Intern</p>
            <p className="text-sm text-gray-500 my-1 font-medium">The King Phoenix IT Solutions</p>
            <p className="text-sm text-gray-600 my-1 font-medium">Sep 2024 – Mar 2025</p>
             <p className="text-sm text-gray-600 font-medium">Trichy</p>
          </motion.div>

          {/* Education */}
          <motion.div
            className="lg:row-span-2 h-fit bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-6 shadow-lg hover:shadow-xl"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="whileHover"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="font-bold text-gray-800 text-xl">Education</h3>
            </div>
            <p className="text-base text-green-600 font-medium">B.Voc Information Technology</p>
            <p className="text-sm text-gray-500 my-1 font-medium">Bishop Heber College</p>
            <p className="text-sm text-gray-600 my-1 font-medium">2019 - 2022 | CGPA: 7.0</p>
            <p className="text-sm text-gray-600 font-medium">Trichy</p>
          </motion.div>

          {/* Current Status */}
          <motion.div
            className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-6 shadow-lg hover:shadow-xl"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="whileHover"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
              <h3 className="font-semibold text-gray-800 text-lg">Available</h3>
            </div>
            <p className="text-teal-700 text-base mb-4">
              Open to new opportunities and exciting projects.
            </p>
            <a
              href="https://www.linkedin.com/in/ezhilarasuk/"
              className="text-teal-50 bg-teal-500 mt-1 inline-flex rounded-3xl px-4 py-2 items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect <UserPlus className="text-teal-50 mx-2 h-5" />
            </a>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default AboutSection;
