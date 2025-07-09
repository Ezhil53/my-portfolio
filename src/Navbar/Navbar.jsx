

import React, { useState, useEffect } from 'react';



const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <section className='relative '>
        <nav  className={`p-4 md:px-20  fixed z-20  w-full ${isScrolled ? 'shadow-lg backdrop-blur-xl'  : ''}`}>
            <div className="container flex justify-between items-center mx-auto ">
               
                <a href="/" className="text-black text-lg font-semibold text-center">EZH⚡L
                </a>

                {/* Hamburger Menu for mobile */}
                <button onClick={() => setIsOpen(!isOpen)}
                    className="text-black focus:outline-none md:hidden">
                    {/* Hamburger Icon and Close Icon */}
                    {isOpen ? (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                        
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    )}
                </button>

                {/* Navigation Links */}
                <div
                    className={`nav-div w-full md:flex md:items-center md:justify-end
                    md:space-x-4 absolute md:relative top-15 left-0 md:top-0 
                    md:left-0 p-4 md:p-0 max-md:rounded-lg max-md:shadow-lg
                    max-md:bg-white backdrop-filter max-md:backdrop-blur-lg
                    transition-all duration-500 ease-in-out transform ${isOpen ? 
                    'translate-x-60' : 'translate-x-full'} md:translate-x-0`}>

                    {/* <a  href="/"className="block py-2 px-4 text-black md:inline-block">
                    <i className='bx bx-home'></i> Home
                    </a> */}
                    <a onClick={() => setIsOpen(!isOpen)} href="#about" className="block py-2 px-4 text-black  md:inline-block ">
                    <i className='bx bx-user'></i> About
                    </a>
                    <a onClick={() => setIsOpen(!isOpen)}  href="#skills" className="block py-2 px-4 text-black  md:inline-block">
                    <i className='bx bxs-graduation'></i> Skills
                    </a>
                    <a onClick={() => setIsOpen(!isOpen)} href="#project" className="block py-2 px-4 text-black  md:inline-block">
                    <i className='bx bxs-briefcase'></i> Project
                    </a>
                    <a onClick={() => setIsOpen(!isOpen)} href="#contact" className="block py-2 px-4 text-black  md:inline-block">
                    <i className='bx bx-envelope'></i> Contact
                    </a>
                </div>
            </div>
        </nav>
        </section>
        
        </>
    );
};

export default Navbar;
