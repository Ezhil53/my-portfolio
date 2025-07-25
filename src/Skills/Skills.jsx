import React from 'react';
import { motion } from 'framer-motion';
import HTML from '../assets/Tech_Logos/html.svg';
import CSS from '../assets/Tech_Logos/css.svg';
import JS from '../assets/Tech_Logos/js.svg';
import BS from '../assets/Tech_Logos/bootstrap.svg';
import Reactjs from '../assets/Skills/React.png';
import Tailwind from '../assets/Tech_Logos/tailwindcss.svg';
import Java from '../assets/Tech_Logos/java.svg';
import Php from '../assets/Skills/php.png';
import Mysql from '../assets/Tech_Logos/mysql.svg';
import Mongo from '../assets/Tech_Logos/mongodb.svg';
import Canva from '../assets/Tech_Logos/canva.svg';
import Figma from '../assets/Tech_Logos/figma.svg';
import Github from '../assets/Tech_Logos/github.svg';
import Vscode from '../assets/Tech_Logos/vs-code.svg';


const skills = [
    { img: HTML, name: 'HTML' },
    { img: CSS, name: 'CSS' },
    { img: JS, name: 'JavaScript' },
    { img: BS, name: 'Bootstrap' },
    { img: Reactjs, name: 'React JS' },
    { img: Tailwind, name: 'Tailwindcss' }
]

const lang = [
    { img: Java, name: 'Java' },
    { img: Php, name: 'PHP' },
    { img: Mysql, name: 'MySQL' },
    { img: Mongo, name: 'Mongo DB' }
]

const design = [
    { img: Canva, name: 'Canva' },
    { img: Figma, name: 'Figma' },
    { img: Github, name: 'Github' },
    { img: Vscode, name: 'VS Code' }
]
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 2, ease: 'easeOut' } }
};

const Skills = () => {


    return (
        <>
            <motion.section
                    id='skills'
                    className='relative container mx-auto h-full'
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                <div className='text-center pt-30'>
                    <h1 className='text-black text-5xl text-center font-bold leading-15'>Skills</h1>
                    <p className='text-gray-500'>My Tech Stack !</p>
                </div>


                <div className=" text-center mx-auto my-5 w-full  ">
                    <div>
                        <p className='font-semibold text-lg p-3 '>Web Technologis & Frontend Library</p>
                        <div className='skill-list gap-4 flex items-center justify-center'>
                            {skills.map(skill => (
                                <div className='skill-item relative group mt-3 ' key={skill.name}>
                                    <img src={skill.img} alt={skill.name} className='img w-50 h-50 ' loading="lazy" />
                                    
                                    <p className="absolute -bottom-5  left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                        {skill.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 my-5 ">
                        <div>
                            <p className='font-semibold text-lg p-3  md:ps-20'>Programming Languages & Databases</p>
                            <div className='skill-list gap-3 place-content-center'>
                                {lang.map(lang => (
                                    <div className='skill-item relative group  ' key={lang.name}>
                                        <img src={lang.img} alt={lang.name} className='img w-50 h-50 ' loading="lazy" />
                                        <p className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">{lang.name}</p>
                                    </div>
                                ))}
                            </div>
                           
                        </div>

                        <div>
                            <p className='font-semibold text-lg p-3  '>Designing & Tools </p>
                            <div className='skill-list gap-3 flex justify-center '>
                                {design.map(design => (
                                    <div className='skill-item relative group mt-1' key={design.name}>
                                        <img src={design.img} alt={design.name} className='img w-50 h-50 ' loading="lazy" />
                                        <p className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">{design.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </motion.section>
           
        </>
    )
}

export default Skills
