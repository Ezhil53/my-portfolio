// TaglineTypewriter.jsx
import React from 'react';
import Typewriter from 'typewriter-effect';

const TaglineTypewriter = () => {
  return (
    <div className="bg-gradient-to-r from-amber-700 to-pink-700 bg-clip-text text-transparent w-fit text-left font-bold text-xl md:text-2xl">
      <Typewriter
        options={{
          strings: ['Front End Engineer', 'Web Developer', 'Full Stack Dev'],
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 60,
          pauseFor: 2000,
        }}
      />
    </div>
  );
};

export default TaglineTypewriter;
